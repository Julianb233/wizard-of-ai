import type { Metadata } from "next"
import BusinessOwnersContent from "./business-owners-content"

export const metadata: Metadata = {
  title: "AI Solutions for Business Owners | The Wizard of AI",
  description: "Transform your business with AI automation for small business. Streamline operations, reduce costs, and scale faster with proven business process automation solutions.",
}

export default function BusinessOwnersPage() {
  return <BusinessOwnersContent />
}
