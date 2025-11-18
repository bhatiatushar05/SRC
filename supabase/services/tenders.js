// Tenders service for Supabase operations
import { supabase, TABLES, STORAGE_BUCKETS, isSupabaseConfigured } from '../config.js'

export class TendersService {
    constructor(supabaseClient = supabase) {
        this.supabase = supabaseClient
        this.subscription = null
    }

    // Check if Supabase is available
    isAvailable() {
        return this.supabase !== null && isSupabaseConfigured
    }

    // Transform database row (snake_case) to frontend format (camelCase)
    transformTender(row) {
        if (!row) return null
        return {
            id: row.id,
            tenderId: row.tender_id,
            title: row.title,
            startingDate: row.starting_date,
            endingDate: row.ending_date,
            status: row.status,
            pdfUrl: row.pdf_url,
            isUpdate: row.is_update || false,
            createdAt: row.created_at,
            updatedAt: row.updated_at
        }
    }

    // Transform frontend format (camelCase) to database format (snake_case)
    transformToDbFormat(tenderData) {
        return {
            title: tenderData.title,
            tender_id: tenderData.tenderId,
            starting_date: tenderData.startingDate,
            ending_date: tenderData.endingDate,
            is_update: tenderData.isUpdate || false,
            pdf_url: tenderData.pdfUrl || null,
            status: tenderData.status || null // Status will be auto-calculated by trigger
        }
    }

    // Fetch all tenders from database
    async getAllTenders() {
        if (!this.isAvailable()) {
            console.warn('Supabase is not configured. Returning empty tenders list.')
            return { data: [], error: { message: 'Supabase is not configured' } }
        }

        try {
            const { data, error } = await this.supabase
                .from(TABLES.TENDERS)
                .select('*')
                .order('created_at', { ascending: false })

            if (error) throw error

            const transformedData = data ? data.map(row => this.transformTender(row)) : []
            return { data: transformedData, error: null }
        } catch (error) {
            console.error('Error fetching tenders:', error)
            return { data: [], error }
        }
    }

    // Get tender by ID
    async getTenderById(id) {
        if (!this.isAvailable()) {
            return { data: null, error: { message: 'Supabase is not configured' } }
        }

        try {
            const { data, error } = await this.supabase
                .from(TABLES.TENDERS)
                .select('*')
                .eq('id', id)
                .single()

            if (error) throw error
            return { data: this.transformTender(data), error: null }
        } catch (error) {
            console.error('Error fetching tender by ID:', error)
            return { data: null, error }
        }
    }

    // Check if tender ID already exists
    async checkTenderIdExists(tenderId) {
        if (!this.isAvailable()) {
            return { exists: false, tender: null, error: { message: 'Supabase is not configured' } }
        }

        try {
            const { data, error } = await this.supabase
                .from(TABLES.TENDERS)
                .select('id, tender_id, title, is_update, status')
                .eq('tender_id', tenderId)
                .order('created_at', { ascending: false })
                .limit(1)

            if (error) throw error

            // If data exists, return the tender info
            if (data && data.length > 0) {
                return { exists: true, tender: this.transformTender(data[0]), error: null }
            } else {
                return { exists: false, tender: null, error: null }
            }
        } catch (error) {
            console.error('Error checking tender ID:', error)
            return { exists: false, tender: null, error }
        }
    }

    // Add new tender to database
    async addTender(tenderData) {
        if (!this.isAvailable()) {
            return { data: null, error: { message: 'Supabase is not configured' } }
        }

        console.log('Adding tender:', tenderData)
        try {
            const dbData = this.transformToDbFormat(tenderData)
            const { data, error } = await this.supabase
                .from(TABLES.TENDERS)
                .insert([dbData])
                .select()
                .single()

            if (error) throw error
            return { data: this.transformTender(data), error: null }
        } catch (error) {
            console.error('Error adding tender:', error)
            return { data: null, error }
        }
    }

    // Update tender
    async updateTender(id, tenderData) {
        try {
            const dbData = this.transformToDbFormat(tenderData)
            const { data, error } = await this.supabase
                .from(TABLES.TENDERS)
                .update(dbData)
                .eq('id', id)
                .select()
                .single()

            if (error) throw error
            return { data: this.transformTender(data), error: null }
        } catch (error) {
            console.error('Error updating tender:', error)
            return { data: null, error }
        }
    }

    // Delete tender
    async deleteTender(id) {
        try {
            const { data, error } = await this.supabase
                .from(TABLES.TENDERS)
                .delete()
                .eq('id', id)

            if (error) throw error
            return { data, error: null }
        } catch (error) {
            console.error('Error deleting tender:', error)
            return { data: null, error }
        }
    }

    // Upload PDF to Supabase Storage
    async uploadPdf(file, fileName) {
        try {
            const { data, error } = await this.supabase.storage
                .from(STORAGE_BUCKETS.TENDERS_PDF)
                .upload(fileName, file, {
                    cacheControl: '3600',
                    upsert: false
                })

            if (error) throw error
            return { data, error: null }
        } catch (error) {
            console.error('Error uploading PDF:', error)
            return { data: null, error }
        }
    }

    // Get public URL for PDF
    getPdfUrl(fileName) {
        try {
            const { data } = this.supabase.storage
                .from(STORAGE_BUCKETS.TENDERS_PDF)
                .getPublicUrl(fileName)

            return data.publicUrl
        } catch (error) {
            console.error('Error getting PDF URL:', error)
            return null
        }
    }

    // Delete PDF from storage
    async deletePdf(fileName) {
        try {
            const { data, error } = await this.supabase.storage
                .from(STORAGE_BUCKETS.TENDERS_PDF)
                .remove([fileName])

            if (error) throw error
            return { data, error: null }
        } catch (error) {
            console.error('Error deleting PDF:', error)
            return { data: null, error }
        }
    }

    // Subscribe to real-time changes in tenders table
    subscribeToTenders(callback) {
        if (!this.isAvailable()) {
            console.warn('Supabase is not configured. Real-time updates are disabled.')
            return null
        }

        try {
            const channel = this.supabase
                .channel('tenders-changes')
                .on(
                    'postgres_changes',
                    {
                        event: '*', // Listen to all events (INSERT, UPDATE, DELETE)
                        schema: 'public',
                        table: TABLES.TENDERS
                    },
                    (payload) => {
                        console.log('Real-time update received:', payload)

                        // Transform the payload data
                        let transformedPayload = {
                            eventType: payload.eventType,
                            event: payload.eventType, // Also include as 'event' for compatibility
                            new: payload.new ? this.transformTender(payload.new) : null,
                            old: payload.old ? this.transformTender(payload.old) : null,
                            timestamp: new Date().toISOString()
                        }

                        callback(transformedPayload)
                    }
                )
                .subscribe((status) => {
                    if (status === 'SUBSCRIBED') {
                        console.log('Successfully subscribed to tenders real-time updates')
                    } else if (status === 'CHANNEL_ERROR') {
                        console.error('Error subscribing to tenders real-time updates')
                    }
                })

            this.subscription = channel
            return channel
        } catch (error) {
            console.error('Error setting up real-time subscription:', error)
            return null
        }
    }

    // Unsubscribe from real-time changes
    unsubscribeFromTenders() {
        if (this.subscription && this.isAvailable()) {
            this.supabase.removeChannel(this.subscription)
            this.subscription = null
        }
    }
}

// Export a singleton instance for convenience
export const tendersService = new TendersService()

