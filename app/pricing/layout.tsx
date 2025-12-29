import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing | AI Consulting & Automation Services | The Wizard of AI",
  description: "Explore AI consulting packages from The Wizard of AI. From free discovery sessions to enterprise transformations, find the right solution for your business.",
  openGraph: {
    title: "Pricing | AI Consulting & Automation Services",
    description: "AI consulting packages and pricing from The Wizard of AI. Transform your business with AI automation.",
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
