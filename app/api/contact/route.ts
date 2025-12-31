import { NextRequest, NextResponse } from "next/server"
import { isNeonConfigured, saveContactToNeon, type ContactSubmission } from "@/lib/neon"

// Contact Form API Route
// Supports: Neon database, Webhook integration, Resend email, and n8n automation

interface ContactFormData {
  selectedOption: string
  optionTitle?: string
  selectedServicePath?: string
  name: string
  email: string
  phone?: string
  business?: string
  message: string
  submittedAt: string
  source: string
  type?: string
  offer?: string
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Send to n8n webhook
async function sendToN8NWebhook(data: ContactFormData): Promise<boolean> {
  const webhookUrl = process.env.N8N_WEBHOOK_URL
  if (!webhookUrl) return false

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return response.ok
  } catch (error) {
    console.error("n8n webhook error:", error)
    return false
  }
}

// Send to generic webhook (Make.com, Zapier, etc.)
async function sendToWebhook(data: ContactFormData): Promise<boolean> {
  const webhookUrl = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL || process.env.FORM_WEBHOOK_URL
  if (!webhookUrl) return false

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return response.ok
  } catch (error) {
    console.error("Webhook error:", error)
    return false
  }
}

// Send email notification using Resend
async function sendEmailNotification(data: ContactFormData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY
  const notificationEmail = process.env.NOTIFICATION_EMAIL || "julian@thewizardofai.com"

  if (!resendApiKey) return false

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "The Wizard of AI <noreply@thewizardofai.com>",
        to: [notificationEmail],
        subject: `New Contact Form Submission: ${data.optionTitle || data.type || "Website Inquiry"}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.phone}</td>
            </tr>
            ` : ""}
            ${data.business ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Business</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.business}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Interest</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.optionTitle || data.type || "General Inquiry"}</td>
            </tr>
            ${data.selectedServicePath ? `
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service Path</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.selectedServicePath}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.message || "No message provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Submitted</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${new Date(data.submittedAt).toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Source</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.source}</td>
            </tr>
          </table>
        `,
        text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}
${data.business ? `Business: ${data.business}` : ""}
Interest: ${data.optionTitle || data.type || "General Inquiry"}
${data.selectedServicePath ? `Service Path: ${data.selectedServicePath}` : ""}
Message: ${data.message || "No message provided"}
Submitted: ${new Date(data.submittedAt).toLocaleString()}
Source: ${data.source}
        `,
      }),
    })

    return response.ok
  } catch (error) {
    console.error("Resend email error:", error)
    return false
  }
}

// Save to Neon database
async function saveToDatabase(data: ContactFormData): Promise<boolean> {
  if (!isNeonConfigured()) return false

  try {
    const submission: ContactSubmission = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      business: data.business,
      message: data.message,
      selected_option: data.selectedOption,
      option_title: data.optionTitle,
      service_path: data.selectedServicePath,
      source: data.source || 'website',
      type: data.type,
      offer: data.offer,
    }

    return await saveContactToNeon(submission)
  } catch (error) {
    console.error("Database error:", error)
    return false
  }
}

// Send auto-reply to user
async function sendAutoReply(data: ContactFormData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) return false

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "The Wizard of AI <hello@thewizardofai.com>",
        to: [data.email],
        subject: "Thanks for reaching out! - The Wizard of AI",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0A4D3C; margin: 0;">The Wizard of AI</h1>
            </div>

            <p style="font-size: 18px; color: #333;">Hi ${data.name},</p>

            <p style="color: #666; line-height: 1.6;">
              Thank you for reaching out! I've received your message and will get back to you within 24 hours.
            </p>

            <p style="color: #666; line-height: 1.6;">
              In the meantime, feel free to check out my latest content:
            </p>

            <ul style="color: #666; line-height: 1.8;">
              <li><a href="https://thewizardofai.com/blog" style="color: #0A4D3C;">Read the Blog</a></li>
              <li><a href="https://youtube.com/@TheWizardofAI" style="color: #0A4D3C;">Watch on YouTube</a></li>
              <li><a href="https://thewizardofai.com/resources" style="color: #0A4D3C;">Free Resources</a></li>
            </ul>

            <p style="color: #666; line-height: 1.6;">
              Looking forward to connecting with you!
            </p>

            <p style="color: #333; margin-top: 30px;">
              Best,<br>
              <strong>Julian Bradley</strong><br>
              <em>The Wizard of AI</em>
            </p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

            <p style="color: #999; font-size: 12px; text-align: center;">
              This is an automated confirmation. Please do not reply to this email.
            </p>
          </div>
        `,
        text: `
Hi ${data.name},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

In the meantime, feel free to check out my latest content:
- Blog: https://thewizardofai.com/blog
- YouTube: https://youtube.com/@TheWizardofAI
- Resources: https://thewizardofai.com/resources

Looking forward to connecting with you!

Best,
Julian Bradley
The Wizard of AI
        `,
      }),
    })

    return response.ok
  } catch (error) {
    console.error("Auto-reply email error:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      )
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Add timestamp if not present
    if (!data.submittedAt) {
      data.submittedAt = new Date().toISOString()
    }

    // Track which integrations succeeded
    const results = {
      database: false,
      webhook: false,
      n8n: false,
      email: false,
      autoReply: false,
    }

    // Send to all configured integrations in parallel
    const [databaseResult, webhookResult, n8nResult, emailResult, autoReplyResult] = await Promise.allSettled([
      saveToDatabase(data),
      sendToWebhook(data),
      sendToN8NWebhook(data),
      sendEmailNotification(data),
      sendAutoReply(data),
    ])

    results.database = databaseResult.status === "fulfilled" && databaseResult.value
    results.webhook = webhookResult.status === "fulfilled" && webhookResult.value
    results.n8n = n8nResult.status === "fulfilled" && n8nResult.value
    results.email = emailResult.status === "fulfilled" && emailResult.value
    results.autoReply = autoReplyResult.status === "fulfilled" && autoReplyResult.value

    // Check if at least one integration succeeded (database counts as success)
    const anySuccess = results.database || results.webhook || results.n8n || results.email

    // In development without any integrations configured, still succeed
    const hasAnyIntegration =
      isNeonConfigured() ||
      process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL ||
      process.env.FORM_WEBHOOK_URL ||
      process.env.N8N_WEBHOOK_URL ||
      process.env.RESEND_API_KEY

    if (!hasAnyIntegration) {
      // No integrations configured - silently succeed for development
      console.log("Contact form submission (no integrations configured):", data)
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully",
        debug: process.env.NODE_ENV === "development" ? "No integrations configured" : undefined,
      })
    }

    if (!anySuccess) {
      console.error("All integrations failed for contact form submission")
      return NextResponse.json(
        { error: "Failed to process submission. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
