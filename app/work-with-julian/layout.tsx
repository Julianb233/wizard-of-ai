import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work With Julian | Speaking, Podcasts & Coaching | The Wizard of AI",
  description: "Book Julian Bradley for podcasts, media appearances, speaking engagements, or corporate AI coaching. Transform your organization with AI expertise.",
  openGraph: {
    title: "Work With Julian | Speaking, Podcasts & Coaching",
    description: "Book Julian Bradley for podcasts, speaking engagements, or corporate AI coaching.",
  },
}

export default function WorkWithJulianLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
