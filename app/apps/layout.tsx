import { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Apps | AI-Powered Products by Julian Bradley",
  description: "Explore AI-powered applications built by Julian Bradley. From BottleneckBot for business optimization to spiritual companions and safety monitoring.",
  openGraph: {
    title: "My Apps | AI-Powered Products by Julian Bradley",
    description: "Discover AI-powered applications for business, education, spirituality, and safety.",
  },
}

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
