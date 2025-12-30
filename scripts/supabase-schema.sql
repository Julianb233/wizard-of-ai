-- ============================================
-- The Wizard of AI - Supabase Database Schema
-- ============================================
-- Run this in your Supabase SQL Editor to set up the database

-- ============================================
-- 1. Contact Form Submissions Table
-- ============================================

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  business VARCHAR(255),
  message TEXT,
  selected_option VARCHAR(100),
  option_title VARCHAR(255),
  service_path VARCHAR(255),
  source VARCHAR(100) DEFAULT 'website',
  type VARCHAR(100),
  offer VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed BOOLEAN DEFAULT FALSE,
  notes TEXT
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for contact form submissions)
CREATE POLICY "Allow anonymous insert" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all submissions
CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update submissions
CREATE POLICY "Allow authenticated update" ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ============================================
-- 2. Golden Ticket Members Table
-- ============================================

CREATE TABLE IF NOT EXISTS golden_ticket_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  membership_tier VARCHAR(50) DEFAULT 'foundation' CHECK (membership_tier IN ('foundation', 'accelerator', 'mastery')),
  is_active BOOLEAN DEFAULT TRUE,
  email_verified BOOLEAN DEFAULT FALSE,
  stripe_customer_id VARCHAR(255),
  subscription_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE,
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_golden_ticket_email ON golden_ticket_members(email);
CREATE INDEX IF NOT EXISTS idx_golden_ticket_active ON golden_ticket_members(is_active) WHERE is_active = TRUE;

-- Enable Row Level Security
ALTER TABLE golden_ticket_members ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only read their own data
CREATE POLICY "Users can read own data" ON golden_ticket_members
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text OR auth.jwt() ->> 'email' = email);

-- Policy: Users can update their own data
CREATE POLICY "Users can update own data" ON golden_ticket_members
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text OR auth.jwt() ->> 'email' = email)
  WITH CHECK (auth.uid()::text = id::text OR auth.jwt() ->> 'email' = email);

-- ============================================
-- 3. Member Activity Log (for analytics)
-- ============================================

CREATE TABLE IF NOT EXISTS member_activity_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  member_id UUID REFERENCES golden_ticket_members(id) ON DELETE SET NULL,
  email VARCHAR(255),
  action VARCHAR(100) NOT NULL,
  details JSONB DEFAULT '{}'::jsonb,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_activity_member ON member_activity_log(member_id);
CREATE INDEX IF NOT EXISTS idx_activity_created ON member_activity_log(created_at DESC);

-- Enable Row Level Security
ALTER TABLE member_activity_log ENABLE ROW LEVEL SECURITY;

-- Policy: Only authenticated users can view activity
CREATE POLICY "Authenticated can read activity" ON member_activity_log
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow anonymous inserts (for tracking)
CREATE POLICY "Allow activity logging" ON member_activity_log
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- ============================================
-- 4. Exclusive Content Table (for Golden Ticket)
-- ============================================

CREATE TABLE IF NOT EXISTS exclusive_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content_type VARCHAR(50) DEFAULT 'resource' CHECK (content_type IN ('resource', 'video', 'download', 'tutorial', 'tool')),
  content_url TEXT,
  thumbnail_url TEXT,
  minimum_tier VARCHAR(50) DEFAULT 'foundation' CHECK (minimum_tier IN ('foundation', 'accelerator', 'mastery')),
  is_published BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE exclusive_content ENABLE ROW LEVEL SECURITY;

-- Policy: Authenticated users can read published content
CREATE POLICY "Authenticated can read published content" ON exclusive_content
  FOR SELECT
  TO authenticated
  USING (is_published = TRUE);

-- ============================================
-- 5. Helper Functions
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for exclusive_content
DROP TRIGGER IF EXISTS update_exclusive_content_updated_at ON exclusive_content;
CREATE TRIGGER update_exclusive_content_updated_at
  BEFORE UPDATE ON exclusive_content
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to get member tier level (for comparisons)
CREATE OR REPLACE FUNCTION get_tier_level(tier VARCHAR(50))
RETURNS INTEGER AS $$
BEGIN
  CASE tier
    WHEN 'foundation' THEN RETURN 1;
    WHEN 'accelerator' THEN RETURN 2;
    WHEN 'mastery' THEN RETURN 3;
    ELSE RETURN 0;
  END CASE;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 6. Sample Data (Optional - Comment out in production)
-- ============================================

-- Uncomment to add sample exclusive content
/*
INSERT INTO exclusive_content (title, description, content_type, minimum_tier, is_published, sort_order) VALUES
  ('AI Prompt Engineering Guide', 'Master the art of prompting AI for maximum results', 'resource', 'foundation', TRUE, 1),
  ('Exclusive Video Training', 'Deep dive into AI automation strategies', 'video', 'accelerator', TRUE, 2),
  ('AI Tools Bundle', 'Curated collection of the best AI tools', 'download', 'mastery', TRUE, 3);
*/

-- ============================================
-- Done!
-- ============================================
-- Your database is now set up for:
-- 1. Contact form submissions
-- 2. Golden Ticket member authentication
-- 3. Member activity tracking
-- 4. Exclusive content management
