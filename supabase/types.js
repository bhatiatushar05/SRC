// Supabase Database Types
// Generated types for all database tables

export const DatabaseTypes = {
  // Users table
  users: {
    id: 'uuid',
    email: 'string',
    full_name: 'string',
    avatar_url: 'string',
    role: 'string', // 'admin', 'member', 'user'
    created_at: 'timestamp',
    updated_at: 'timestamp'
  },

  // Members table
  members: {
    id: 'uuid',
    name: 'string',
    organization: 'string',
    position: 'string',
    bio: 'text',
    image: 'string',
    contact: 'string',
    email: 'string',
    linkedin: 'string',
    twitter: 'string',
    is_active: 'boolean',
    created_at: 'timestamp',
    updated_at: 'timestamp'
  },

  // Team table
  team: {
    id: 'uuid',
    name: 'string',
    position: 'string',
    description: 'text',
    image: 'string',
    email: 'string',
    linkedin: 'string',
    twitter: 'string',
    order_index: 'integer',
    is_active: 'boolean',
    created_at: 'timestamp',
    updated_at: 'timestamp'
  },

  // Advisory table
  advisory: {
    id: 'uuid',
    name: 'string',
    position: 'string',
    organization: 'string',
    bio: 'text',
    image: 'string',
    email: 'string',
    linkedin: 'string',
    order_index: 'integer',
    is_active: 'boolean',
    created_at: 'timestamp',
    updated_at: 'timestamp'
  },

  // Events table
  events: {
    id: 'uuid',
    title: 'string',
    description: 'text',
    event_date: 'date',
    event_time: 'time',
    location: 'string',
    image: 'string',
    event_type: 'string', // 'summit', 'workshop', 'seminar', 'campaign'
    status: 'string', // 'upcoming', 'ongoing', 'completed', 'cancelled'
    registration_url: 'string',
    max_participants: 'integer',
    current_participants: 'integer',
    is_featured: 'boolean',
    created_at: 'timestamp',
    updated_at: 'timestamp'
  },

  // Ventures table
  ventures: {
    id: 'uuid',
    title: 'string',
    description: 'text',
    image: 'string',
    category: 'string',
    status: 'string', // 'active', 'completed', 'on_hold'
    start_date: 'date',
    end_date: 'date',
    budget: 'decimal',
    progress: 'integer', // percentage
    partners: 'json',
    documents: 'json',
    is_featured: 'boolean',
    created_at: 'timestamp',
    updated_at: 'timestamp'
  },

  // Pledges table
  pledges: {
    id: 'uuid',
    title: 'string',
    description: 'text',
    pledge_type: 'string', // 'environmental', 'social', 'governance'
    target_value: 'decimal',
    current_value: 'decimal',
    unit: 'string', // 'trees', 'hours', 'people', 'rupees'
    deadline: 'date',
    image: 'string',
    status: 'string', // 'active', 'completed', 'expired'
    is_featured: 'boolean',
    created_at: 'timestamp',
    updated_at: 'timestamp'
  },

  // Internships table
  internships: {
    id: 'uuid',
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    phone: 'string',
    university: 'string',
    field_of_study: 'string',
    motivation: 'text',
    resume_url: 'string',
    status: 'string', // 'pending', 'reviewed', 'accepted', 'rejected'
    application_date: 'timestamp',
    reviewed_at: 'timestamp',
    reviewed_by: 'uuid',
    notes: 'text'
  },

  // Volunteers table
  volunteers: {
    id: 'uuid',
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    phone: 'string',
    skills: 'json',
    availability: 'string',
    motivation: 'text',
    experience: 'text',
    status: 'string', // 'pending', 'reviewed', 'accepted', 'rejected'
    application_date: 'timestamp',
    reviewed_at: 'timestamp',
    reviewed_by: 'uuid',
    notes: 'text'
  },

  // Supporters table
  supporters: {
    id: 'uuid',
    title: 'string',
    description: 'text',
    image: 'string',
    website_url: 'string',
    category: 'string', // 'corporate', 'ngo', 'individual', 'government'
    support_type: 'string', // 'financial', 'in_kind', 'volunteer'
    amount: 'decimal',
    is_featured: 'boolean',
    created_at: 'timestamp',
    updated_at: 'timestamp'
  },

  // Gallery table
  gallery: {
    id: 'uuid',
    title: 'string',
    description: 'text',
    image_url: 'string',
    category: 'string', // 'events', 'team', 'projects', 'general'
    alt_text: 'string',
    order_index: 'integer',
    is_featured: 'boolean',
    created_at: 'timestamp',
    updated_at: 'timestamp'
  },

  // Content table
  content: {
    id: 'uuid',
    title: 'string',
    content: 'text',
    type: 'string', // 'blog', 'news', 'announcement', 'report'
    image: 'string',
    author: 'string',
    tags: 'json',
    is_published: 'boolean',
    published_at: 'timestamp',
    created_at: 'timestamp',
    updated_at: 'timestamp'
  },

  // Newsletter table
  newsletter: {
    id: 'uuid',
    email: 'string',
    name: 'string',
    status: 'string', // 'subscribed', 'unsubscribed', 'bounced'
    subscribed_at: 'timestamp',
    unsubscribed_at: 'timestamp',
    source: 'string' // 'website', 'event', 'referral'
  },

  // Contact table
  contact: {
    id: 'uuid',
    name: 'string',
    email: 'string',
    phone: 'string',
    subject: 'string',
    message: 'text',
    status: 'string', // 'new', 'read', 'replied', 'closed'
    created_at: 'timestamp',
    updated_at: 'timestamp',
    replied_at: 'timestamp',
    replied_by: 'uuid'
  }
}

// Common response types
export const ResponseTypes = {
  success: {
    data: 'any',
    message: 'string',
    status: 'number'
  },
  error: {
    error: 'string',
    message: 'string',
    status: 'number'
  }
}

// File upload types
export const FileTypes = {
  image: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  document: ['pdf', 'doc', 'docx', 'txt'],
  video: ['mp4', 'avi', 'mov', 'wmv']
}
