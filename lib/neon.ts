/**
 * Neon Database Client Configuration
 *
 * Uses @neondatabase/serverless for serverless PostgreSQL connections.
 * Used for contact form submissions and database operations.
 */

import { neon } from '@neondatabase/serverless'

// Contact submission type
export interface ContactSubmission {
  id?: number
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

/**
 * Check if Neon database is configured
 */
export function isNeonConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL)
}

/**
 * Get Neon SQL client
 */
export function getNeonClient() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    return null
  }
  return neon(databaseUrl)
}

/**
 * Save contact submission to Neon database
 */
export async function saveContactToNeon(data: ContactSubmission): Promise<boolean> {
  if (!isNeonConfigured()) {
    console.log('Neon not configured - DATABASE_URL missing')
    return false
  }

  try {
    const sql = getNeonClient()
    if (!sql) return false

    await sql`
      INSERT INTO wizard_contact_submissions (
        name, email, phone, business, message,
        selected_option, option_title, service_path,
        source, type, offer
      ) VALUES (
        ${data.name},
        ${data.email},
        ${data.phone || null},
        ${data.business || null},
        ${data.message || null},
        ${data.selected_option || null},
        ${data.option_title || null},
        ${data.service_path || null},
        ${data.source || 'website'},
        ${data.type || null},
        ${data.offer || null}
      )
    `

    return true
  } catch (error) {
    console.error('Neon insert error:', error)
    return false
  }
}
