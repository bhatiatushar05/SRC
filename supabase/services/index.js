// Supabase Services Index
// Centralized export of all Supabase services

// Core services
export { AuthService } from './auth.js'
export { StorageService } from './storage.js'

// Content services
export { MembersService } from './members.js'
export { TeamService } from './team.js'
export { EventsService } from './events.js'

// Form services
export { FormsService } from './forms.js'

// Configuration
export { supabase, TABLES, STORAGE_BUCKETS, POLICIES } from '../config.js'

// Types
export { DatabaseTypes, ResponseTypes, FileTypes } from '../types.js'

// Utility functions
export const SupabaseUtils = {
  // Format date for Supabase
  formatDate: (date) => {
    return new Date(date).toISOString()
  },

  // Generate UUID (if needed)
  generateUUID: () => {
    return crypto.randomUUID()
  },

  // Validate email
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  // Validate phone number
  validatePhone: (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  },

  // Handle Supabase errors
  handleError: (error) => {
    console.error('Supabase Error:', error)
    return {
      success: false,
      error: error.message,
      message: 'An error occurred'
    }
  },

  // Check if user is authenticated
  isAuthenticated: async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return !!user
  },

  // Get current user
  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  }
}
