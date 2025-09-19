// Supabase Events Service
import { supabase, TABLES } from '../config.js'

export class EventsService {
  // Get all events
  static async getAllEvents() {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .select('*')
        .order('event_date', { ascending: true })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Events retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve events'
      }
    }
  }

  // Get upcoming events
  static async getUpcomingEvents() {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .select('*')
        .gte('event_date', new Date().toISOString().split('T')[0])
        .eq('status', 'upcoming')
        .order('event_date', { ascending: true })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Upcoming events retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve upcoming events'
      }
    }
  }

  // Get featured events
  static async getFeaturedEvents() {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .select('*')
        .eq('is_featured', true)
        .eq('status', 'upcoming')
        .order('event_date', { ascending: true })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Featured events retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve featured events'
      }
    }
  }

  // Get event by ID
  static async getEventById(id) {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Event retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve event'
      }
    }
  }

  // Create new event
  static async createEvent(eventData) {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .insert([eventData])
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Event created successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to create event'
      }
    }
  }

  // Update event
  static async updateEvent(id, updates) {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Event updated successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to update event'
      }
    }
  }

  // Delete event
  static async deleteEvent(id) {
    try {
      const { error } = await supabase
        .from(TABLES.EVENTS)
        .delete()
        .eq('id', id)

      if (error) throw error

      return {
        success: true,
        message: 'Event deleted successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to delete event'
      }
    }
  }

  // Get events by type
  static async getEventsByType(type) {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .select('*')
        .eq('event_type', type)
        .order('event_date', { ascending: true })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Events retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve events'
      }
    }
  }

  // Search events
  static async searchEvents(query) {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .select('*')
        .or(`title.ilike.%${query}%,description.ilike.%${query}%,location.ilike.%${query}%`)
        .order('event_date', { ascending: true })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Search completed successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to search events'
      }
    }
  }

  // Update event status
  static async updateEventStatus(id, status) {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .update({ 
          status,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Event status updated successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to update event status'
      }
    }
  }

  // Get events by date range
  static async getEventsByDateRange(startDate, endDate) {
    try {
      const { data, error } = await supabase
        .from(TABLES.EVENTS)
        .select('*')
        .gte('event_date', startDate)
        .lte('event_date', endDate)
        .order('event_date', { ascending: true })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Events retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve events'
      }
    }
  }
}
