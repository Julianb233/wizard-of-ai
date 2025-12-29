import type { Metadata } from "next"
import B2CContent from "./b2c-content"

export const metadata: Metadata = {
  title: "AI Solutions for B2C Businesses | Consumer-Focused AI Automation | The Wizard of AI",
  description: "Scale your B2C business with AI automation for e-commerce, customer engagement, personalization, and marketing. Deliver exceptional customer experiences at scale.",
  keywords: "B2C AI automation, e-commerce AI, customer engagement automation, personalization AI, consumer marketing AI, retail AI solutions",
  openGraph: {
    title: "AI Solutions for B2C Businesses | The Wizard of AI",
    description: "Deliver personalized customer experiences at scale with AI automation for e-commerce and consumer businesses.",
    type: "website",
  },
}

export default function B2CPage() {
  return <B2CContent />
}
