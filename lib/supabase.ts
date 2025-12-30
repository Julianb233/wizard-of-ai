/**
 * Supabase Client Configuration
 *
 * This file provides Supabase clients for both client-side and server-side usage.
 * Used for authentication and database operations.
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Database types
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone?: string
  business?: string
  message?: string
  selected_option?: string
  option_title?: string
  service_path?: string
  source?: string
  type?: string
  offer?: string
  created_at?: string
}

export interface GoldenTicketMember {
  id?: string
  email: string
  name: string
  password_hash?: string
  membership_tier: 'foundation' | 'accelerator' | 'mastery'
  is_active: boolean
  email_verified: boolean
  created_at?: string
  last_login?: string
}

// Get environment variables with defaults for type safety
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

/**
 * Check if Supabase is configured
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey)
}

// Cached client instance
let cachedClient: SupabaseClient | null = null

/**
 * Server-side Supabase client (for API routes and Server Components)
 * Returns null if Supabase is not configured
 */
export function createServerClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null
  }

  if (!cachedClient) {
    cachedClient = createClient(supabaseUrl, supabaseAnonKey)
  }

  return cachedClient
}

/**
 * Browser/Client-side Supabase client
 * Use this in React components and client-side code
 * Returns null if Supabase is not configured
 */
export function createBrowserSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured()) {
    return null
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}

/**
 * Admin Supabase client (for server-side operations requiring elevated privileges)
 * Uses the service role key - NEVER expose this to the client
 * Returns null if not configured
 */
export function createAdminClient(): SupabaseClient | null {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  if (!supabaseUrl || !serviceRoleKey) {
    return null
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}
