import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Links | Julian Bradley - The Wizard of AI",
  description: "Connect with Julian Bradley across all platforms. Find social media, resources, consultations, and more from The Wizard of AI.",
  openGraph: {
    title: "Links | Julian Bradley - The Wizard of AI",
    description: "Connect with Julian Bradley and access all Wizard of AI resources.",
  },
}

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
