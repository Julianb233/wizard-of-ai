import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Roboto, Libre_Baskerville, Alex_Brush, Oswald } from "next/font/google"
import SmoothScroll from "@/components/smooth-scroll"
import "./globals.css"

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
})

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
})

const oswald = Oswald({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://v0-the-wizard-of-ai.vercel.app"),
  title: "The Wizard of AI - Julian Bradley | AI Consulting & Business Automation",
  description:
    "Transform your business with AI consulting and automation solutions. Julian Bradley helps business owners, executives, and content creators harness AI to scale operations, automate workflows, and multiply opportunities. Expert in AI agents, BottleneckBots & Exactech AI.",
  keywords: ["AI consulting", "business automation", "AI agents", "workflow automation", "AI transformation", "Julian Bradley", "BottleneckBots", "Exactech AI"],
  authors: [{ name: "Julian Bradley" }],
  creator: "Julian Bradley",
  publisher: "The Wizard of AI",
  generator: "v0.app",
  openGraph: {
    title: "The Wizard of AI - Julian Bradley | AI Consulting & Business Automation",
    description: "Your Golden Ticket to AI Transformation. Automate workflows, multiply opportunities, and save time with AI solutions from expert consultant Julian Bradley.",
    url: "https://v0-the-wizard-of-ai.vercel.app",
    siteName: "The Wizard of AI",
    images: [
      {
        url: "/images/og-wizard-of-ai.webp",
        width: 1200,
        height: 1200,
        alt: "The Wizard of AI - Julian Bradley",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wizard of AI - Julian Bradley",
    description: "Your Golden Ticket to AI Transformation. Automate workflows, multiply opportunities, and save time.",
    images: ["/images/og-wizard-of-ai.webp"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "The Wizard of AI - Julian Bradley",
    "description": "AI consulting and business automation solutions helping businesses transform operations, automate workflows, and scale with AI agents.",
    "url": "https://v0-the-wizard-of-ai.vercel.app",
    "logo": "https://v0-the-wizard-of-ai.vercel.app/images/og-wizard-of-ai.png",
    "image": "https://v0-the-wizard-of-ai.vercel.app/images/og-wizard-of-ai.png",
    "provider": {
      "@type": "Person",
      "name": "Julian Bradley",
      "jobTitle": "AI Consultant & Business Automation Expert",
      "email": "julian@aiacrobatics.com",
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "AI Consulting",
      "Business Automation",
      "AI Agents",
      "Workflow Automation",
      "AI Transformation",
      "Process Automation"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/julian-bradley",
      "https://twitter.com/wizardofai"
    ],
    "offers": {
      "@type": "Offer",
      "description": "AI consulting and automation solutions for business owners, executives, content creators, and startups",
      "areaServed": "Worldwide"
    }
  }

  return (
    <html lang="en" className="bg-[#0A4D3C] overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`font-sans antialiased overflow-x-hidden bg-[#0A4D3C] ${roboto.variable} ${libreBaskerville.variable} ${alexBrush.variable} ${oswald.variable}`}
      >
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
