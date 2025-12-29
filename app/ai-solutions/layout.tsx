import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Solutions | Custom AI Agents for Business | The Wizard of AI",
  description: "Discover AI-powered solutions for your business. Lead generation, customer support, appointment setting, accounting, and project management—all automated.",
  openGraph: {
    title: "AI Solutions | Custom AI Agents for Business",
    description: "Custom AI agents for lead generation, support, appointments, and more from The Wizard of AI.",
  },
}

export default function AISolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
