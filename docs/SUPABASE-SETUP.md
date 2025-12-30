# Supabase Setup Guide for The Wizard of AI

This guide walks you through setting up Supabase for database storage and authentication.

## Quick Start

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization (or create one)
4. Set a project name (e.g., "wizard-of-ai")
5. Set a strong database password (save this somewhere safe)
6. Choose a region close to your users
7. Click "Create new project"

### 2. Get Your API Keys

Once the project is created:

1. Go to **Settings** > **API**
2. Copy these values:
   - **Project URL** -> `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key -> `SUPABASE_SERVICE_ROLE_KEY`

### 3. Create Environment File

Create a `.env.local` file in the project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Keep your existing settings
RESEND_API_KEY=re_xxxxxxxxxxxx
NOTIFICATION_EMAIL=julian@thewizardofai.com
```

### 4. Set Up Database Tables

1. Go to **SQL Editor** in your Supabase dashboard
2. Click "New query"
3. Copy and paste the contents of `scripts/supabase-schema.sql`
4. Click "Run" to create all tables

This creates:
- `contact_submissions` - Stores all contact form entries
- `golden_ticket_members` - Stores member accounts
- `member_activity_log` - Tracks login and activity
- `exclusive_content` - Stores member-only content

### 5. Enable Authentication (Optional)

If you want to use Supabase Auth for the Golden Ticket portal:

1. Go to **Authentication** > **Providers**
2. Enable **Email** provider (already enabled by default)
3. Configure email templates in **Email Templates**
4. Optionally enable OAuth providers (Google, GitHub, etc.)

### 6. Add to Vercel

1. Go to your Vercel project settings
2. Navigate to **Settings** > **Environment Variables**
3. Add all three Supabase variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Redeploy your project

## Features Enabled

### Contact Form Storage

All contact form submissions are now saved to Supabase:

- View submissions in **Table Editor** > `contact_submissions`
- Export to CSV from the dashboard
- Set up realtime notifications with database webhooks
- Query submissions with SQL

### Golden Ticket Authentication

The system is ready for Supabase Auth:

- Email/password authentication
- Magic link login
- OAuth providers (Google, GitHub, etc.)
- Password reset flows
- Email verification

## File Structure

```
lib/
  supabase.ts          # Main client configuration
  supabase-server.ts   # Server-side utilities with cookie handling

scripts/
  supabase-schema.sql  # Database schema (run in SQL Editor)

app/
  api/
    contact/route.ts   # Now saves to Supabase + existing integrations
```

## Database Schema

### contact_submissions

| Column          | Type        | Description                    |
|-----------------|-------------|--------------------------------|
| id              | UUID        | Primary key                    |
| name            | VARCHAR     | Contact name                   |
| email           | VARCHAR     | Contact email                  |
| phone           | VARCHAR     | Phone number (optional)        |
| business        | VARCHAR     | Business name (optional)       |
| message         | TEXT        | Message content                |
| selected_option | VARCHAR     | Form selection                 |
| option_title    | VARCHAR     | Human-readable option          |
| service_path    | VARCHAR     | Selected service path          |
| source          | VARCHAR     | Traffic source                 |
| type            | VARCHAR     | Inquiry type                   |
| offer           | VARCHAR     | Related offer                  |
| created_at      | TIMESTAMPTZ | Submission timestamp           |
| processed       | BOOLEAN     | Manual processing flag         |
| notes           | TEXT        | Admin notes                    |

### golden_ticket_members

| Column            | Type        | Description                    |
|-------------------|-------------|--------------------------------|
| id                | UUID        | Primary key                    |
| email             | VARCHAR     | Member email (unique)          |
| name              | VARCHAR     | Member name                    |
| membership_tier   | VARCHAR     | foundation/accelerator/mastery |
| is_active         | BOOLEAN     | Account status                 |
| email_verified    | BOOLEAN     | Email verification status      |
| stripe_customer_id| VARCHAR     | Stripe integration             |
| subscription_id   | VARCHAR     | Subscription reference         |
| created_at        | TIMESTAMPTZ | Account creation               |
| last_login        | TIMESTAMPTZ | Last login time                |
| metadata          | JSONB       | Additional data                |

## Row Level Security (RLS)

The schema includes RLS policies:

- **Contact submissions**: Anonymous can insert, authenticated can read/update
- **Members**: Users can only read/update their own data
- **Activity log**: Anyone can insert, authenticated can read
- **Exclusive content**: Only authenticated users can view published content

## Troubleshooting

### "Missing Supabase URL or Key"

Make sure all environment variables are set correctly in `.env.local` and Vercel.

### "Permission denied" on insert

Check that RLS policies are correctly applied by running the SQL schema again.

### Forms still work without Supabase

The system gracefully falls back to other integrations (Resend, webhooks) if Supabase is not configured.

## Next Steps

1. **View submissions**: Check `contact_submissions` table in Supabase
2. **Set up webhooks**: Create database webhooks for notifications
3. **Add admin dashboard**: Query the database to build an admin view
4. **Enable auth**: Implement Supabase Auth for the login page
