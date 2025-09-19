// Supabase Configuration
import { createClient } from '@supabase/supabase-js'

// Supabase project URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

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
  CONTACT: 'contact'
}

// Storage buckets
export const STORAGE_BUCKETS = {
  IMAGES: 'images',
  DOCUMENTS: 'documents',
  PDFS: 'pdfs',
  AVATARS: 'avatars'
}

// RLS (Row Level Security) policies
export const POLICIES = {
  PUBLIC_READ: 'Public read access',
  AUTHENTICATED_WRITE: 'Authenticated write access',
  ADMIN_FULL_ACCESS: 'Admin full access'
}
