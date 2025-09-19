# Supabase Backend Integration

This folder contains all the necessary files and services to integrate Supabase as the backend for the Social Responsibility Council React application.

## 📁 Folder Structure

```
supabase/
├── config.js              # Supabase client configuration
├── types.js               # Database types and schemas
├── services/              # Service layer for different modules
│   ├── index.js           # Centralized service exports
│   ├── auth.js            # Authentication service
│   ├── storage.js         # File storage service
│   ├── members.js         # Members management service
│   ├── team.js            # Team management service
│   ├── events.js          # Events management service
│   └── forms.js           # Form submission service
├── env.example            # Environment variables template
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### 2. Set Up Environment Variables

1. Copy `env.example` to `.env.local` in your project root
2. Fill in your Supabase project details:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### 3. Database Setup

Create the following tables in your Supabase database:

#### Users Table
```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'member', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Members Table
```sql
CREATE TABLE members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  organization TEXT,
  position TEXT,
  bio TEXT,
  image TEXT,
  contact TEXT,
  email TEXT,
  linkedin TEXT,
  twitter TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Team Table
```sql
CREATE TABLE team (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  description TEXT,
  image TEXT,
  email TEXT,
  linkedin TEXT,
  twitter TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Events Table
```sql
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE,
  event_time TIME,
  location TEXT,
  image TEXT,
  event_type TEXT CHECK (event_type IN ('summit', 'workshop', 'seminar', 'campaign')),
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')),
  registration_url TEXT,
  max_participants INTEGER,
  current_participants INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Forms Tables
```sql
-- Internships Table
CREATE TABLE internships (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  university TEXT NOT NULL,
  field_of_study TEXT NOT NULL,
  motivation TEXT NOT NULL,
  resume_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
  application_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID REFERENCES users(id),
  notes TEXT
);

-- Volunteers Table
CREATE TABLE volunteers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  skills JSONB,
  availability TEXT,
  motivation TEXT NOT NULL,
  experience TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
  application_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID REFERENCES users(id),
  notes TEXT
);

-- Contact Table
CREATE TABLE contact (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  replied_at TIMESTAMP WITH TIME ZONE,
  replied_by UUID REFERENCES users(id)
);

-- Newsletter Table
CREATE TABLE newsletter (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  status TEXT DEFAULT 'subscribed' CHECK (status IN ('subscribed', 'unsubscribed', 'bounced')),
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  source TEXT DEFAULT 'website'
);
```

### 4. Storage Buckets Setup

Create the following storage buckets in Supabase:

1. **images** - For general images
2. **documents** - For documents and files
3. **pdfs** - For PDF files
4. **avatars** - For user avatars

### 5. Row Level Security (RLS)

Enable RLS on all tables and create appropriate policies:

```sql
-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE team ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE internships ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

-- Example policies for public read access
CREATE POLICY "Public read access" ON members FOR SELECT USING (true);
CREATE POLICY "Public read access" ON team FOR SELECT USING (true);
CREATE POLICY "Public read access" ON events FOR SELECT USING (true);

-- Example policies for authenticated write access
CREATE POLICY "Authenticated write access" ON internships FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated write access" ON volunteers FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated write access" ON contact FOR INSERT WITH CHECK (true);
```

## 🔧 Usage Examples

### Authentication
```javascript
import { AuthService } from './supabase/services'

// Sign up
const result = await AuthService.signUp('user@example.com', 'password123')

// Sign in
const result = await AuthService.signIn('user@example.com', 'password123')

// Sign out
await AuthService.signOut()
```

### Data Operations
```javascript
import { MembersService, EventsService } from './supabase/services'

// Get all members
const members = await MembersService.getAllMembers()

// Get upcoming events
const events = await EventsService.getUpcomingEvents()

// Create new event
const newEvent = await EventsService.createEvent({
  title: 'New Event',
  description: 'Event description',
  event_date: '2024-01-01',
  location: 'New Delhi'
})
```

### Form Submissions
```javascript
import { FormsService } from './supabase/services'

// Submit internship application
const result = await FormsService.submitInternshipApplication({
  first_name: 'John',
  last_name: 'Doe',
  email: 'john@example.com',
  phone: '1234567890',
  university: 'University Name',
  field_of_study: 'engineering',
  motivation: 'I want to contribute...'
})
```

### File Uploads
```javascript
import { StorageService } from './supabase/services'

// Upload image
const result = await StorageService.uploadImage(file, 'team-photos')

// Upload document
const result = await StorageService.uploadDocument(file, 'resumes')
```

## 🔒 Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **RLS Policies**: Implement proper Row Level Security policies
3. **API Keys**: Use service role key only for server-side operations
4. **File Uploads**: Validate file types and sizes
5. **Input Validation**: Sanitize all user inputs

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Storage Guide](https://supabase.com/docs/guides/storage)

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure your domain is added to Supabase allowed origins
2. **RLS Policies**: Check if RLS policies are properly configured
3. **Environment Variables**: Verify all required environment variables are set
4. **File Uploads**: Check storage bucket permissions and policies

### Debug Mode

Enable debug mode by adding to your environment:
```env
VITE_SUPABASE_DEBUG=true
```

This will log all Supabase operations to the console.
