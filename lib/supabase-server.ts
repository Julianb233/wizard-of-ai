/**
 * Server-side Supabase Client with Cookie Handling
 *
 * This file provides Supabase clients for server-side operations
 * with proper cookie handling for authentication.
 */

import { createServerClient as createSSRClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { isSupabaseConfigured } from './supabase'

/**
 * Create a Supabase client for Server Components
 * Handles cookie operations for auth state
 * Returns null if Supabase is not configured
 */
export async function createSupabaseServerClient() {
  if (!isSupabaseConfigured()) {
    return null
  }

  const cookieStore = await cookies()

  return createSSRClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing user sessions.
          }
        },
      },
    }
  )
}

/**
 * Create a Supabase client for API routes
 * Returns null if Supabase is not configured
 */
export function createSupabaseRouteClient(request: NextRequest) {
  if (!isSupabaseConfigured()) {
    return { supabase: null, response: NextResponse.next() }
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createSSRClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value)
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  return { supabase, response }
}

/**
 * Get the current authenticated user from server context
 * Returns null if Supabase is not configured or user is not authenticated
 */
export async function getServerUser() {
  const supabase = await createSupabaseServerClient()
  if (!supabase) {
    return null
  }

  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return null
  }

  return user
}

/**
 * Check if user is authenticated on the server
 */
export async function isServerAuthenticated(): Promise<boolean> {
  const user = await getServerUser()
  return user !== null
}
