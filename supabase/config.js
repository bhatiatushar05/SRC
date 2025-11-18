// Supabase Configuration
import { createClient } from '@supabase/supabase-js'

// Supabase project URL and anon key - support both VITE_ and non-VITE_ prefixes
// Note: Vite only exposes env vars prefixed with VITE_ to client-side code
// If using non-VITE_ prefix, you need to configure vite.config.js to expose them
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY || ''

// Check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey)

// Create Supabase client with fallback for missing keys
let supabase = null

if (isSupabaseConfigured) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    })
  } catch (error) {
    console.error('Error initializing Supabase client:', error)
    supabase = null
  }
} else {
  console.warn('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY in your .env file')
}

// Export supabase client (may be null if not configured)
export { supabase }

// Database table names
export const TABLES = {
  USERS: 'users',
  MEMBERS: 'members',
  TEAM: 'team',
  ADVISORY: 'advisory',
  EVENTS: 'events',
  VENTURES: 'ventures',
  PLEDGES: 'pledges',
  INTERNSHIPS: 'internships',
  VOLUNTEERS: 'volunteers',
  SUPPORTERS: 'supporters',
  GALLERY: 'gallery',
  CONTENT: 'content',
  NEWSLETTER: 'newsletter',
  CONTACT: 'contact',
  TENDERS: 'tenders'
}

// Storage buckets
export const STORAGE_BUCKETS = {
  IMAGES: 'images',
  DOCUMENTS: 'documents',
  PDFS: 'pdfs',
  AVATARS: 'avatars',
  TENDERS_PDF: 'tenders-pdf'
}

// RLS (Row Level Security) policies
export const POLICIES = {
  PUBLIC_READ: 'Public read access',
  AUTHENTICATED_WRITE: 'Authenticated write access',
  ADMIN_FULL_ACCESS: 'Admin full access'
}
