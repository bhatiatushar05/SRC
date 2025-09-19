// Supabase Forms Service
import { supabase, TABLES } from '../config.js'

export class FormsService {
  // Submit internship application
  static async submitInternshipApplication(formData) {
    try {
      const { data, error } = await supabase
        .from(TABLES.INTERNSHIPS)
        .insert([{
          ...formData,
          status: 'pending',
          application_date: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Internship application submitted successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to submit internship application'
      }
    }
  }

  // Submit volunteer application
  static async submitVolunteerApplication(formData) {
    try {
      const { data, error } = await supabase
        .from(TABLES.VOLUNTEERS)
        .insert([{
          ...formData,
          status: 'pending',
          application_date: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Volunteer application submitted successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to submit volunteer application'
      }
    }
  }

  // Submit contact form
  static async submitContactForm(formData) {
    try {
      const { data, error } = await supabase
        .from(TABLES.CONTACT)
        .insert([{
          ...formData,
          status: 'new',
          created_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Contact form submitted successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to submit contact form'
      }
    }
  }

  // Subscribe to newsletter
  static async subscribeNewsletter(email, name = '') {
    try {
      // Check if email already exists
      const { data: existing } = await supabase
        .from(TABLES.NEWSLETTER)
        .select('id, status')
        .eq('email', email)
        .single()

      if (existing) {
        if (existing.status === 'subscribed') {
          return {
            success: false,
            error: 'Email already subscribed',
            message: 'This email is already subscribed to our newsletter'
          }
        } else {
          // Resubscribe
          const { data, error } = await supabase
            .from(TABLES.NEWSLETTER)
            .update({
              status: 'subscribed',
              name: name || existing.name,
              subscribed_at: new Date().toISOString(),
              unsubscribed_at: null
            })
            .eq('id', existing.id)
            .select()
            .single()

          if (error) throw error

          return {
            success: true,
            data,
            message: 'Successfully resubscribed to newsletter'
          }
        }
      }

      // Create new subscription
      const { data, error } = await supabase
        .from(TABLES.NEWSLETTER)
        .insert([{
          email,
          name,
          status: 'subscribed',
          subscribed_at: new Date().toISOString(),
          source: 'website'
        }])
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Successfully subscribed to newsletter'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to subscribe to newsletter'
      }
    }
  }

  // Unsubscribe from newsletter
  static async unsubscribeNewsletter(email) {
    try {
      const { data, error } = await supabase
        .from(TABLES.NEWSLETTER)
        .update({
          status: 'unsubscribed',
          unsubscribed_at: new Date().toISOString()
        })
        .eq('email', email)
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Successfully unsubscribed from newsletter'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to unsubscribe from newsletter'
      }
    }
  }

  // Get internship applications (admin only)
  static async getInternshipApplications(status = null) {
    try {
      let query = supabase
        .from(TABLES.INTERNSHIPS)
        .select('*')
        .order('application_date', { ascending: false })

      if (status) {
        query = query.eq('status', status)
      }

      const { data, error } = await query

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Internship applications retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve internship applications'
      }
    }
  }

  // Get volunteer applications (admin only)
  static async getVolunteerApplications(status = null) {
    try {
      let query = supabase
        .from(TABLES.VOLUNTEERS)
        .select('*')
        .order('application_date', { ascending: false })

      if (status) {
        query = query.eq('status', status)
      }

      const { data, error } = await query

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Volunteer applications retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve volunteer applications'
      }
    }
  }

  // Update application status (admin only)
  static async updateApplicationStatus(table, id, status, notes = '', reviewedBy = null) {
    try {
      const { data, error } = await supabase
        .from(table)
        .update({
          status,
          notes,
          reviewed_at: new Date().toISOString(),
          reviewed_by: reviewedBy
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Application status updated successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to update application status'
      }
    }
  }
}
