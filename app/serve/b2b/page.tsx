import type { Metadata } from "next"
import B2BContent from "./b2b-content"

export const metadata: Metadata = {
  title: "AI Solutions for B2B Companies | Enterprise AI Automation | The Wizard of AI",
  description: "Transform your B2B operations with enterprise AI automation. Streamline sales pipelines, automate lead generation, optimize client management, and scale your B2B business with proven AI solutions.",
  keywords: "B2B AI automation, enterprise AI solutions, B2B sales automation, lead generation AI, client management automation, B2B marketing AI",
  openGraph: {
    title: "AI Solutions for B2B Companies | The Wizard of AI",
    description: "Scale your B2B business with enterprise-grade AI automation for sales, marketing, and operations.",
    type: "website",
  },
}

export default function B2BPage() {
  return <B2BContent />
}
