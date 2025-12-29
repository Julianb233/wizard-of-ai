import type { Metadata } from "next"
import AgencyOwnersContent from "./agency-owners-content"

export const metadata: Metadata = {
  title: "AI Solutions for Agency Owners | The Wizard of AI",
  description: "Scale your marketing agency with AI for marketing agencies and agency automation. Serve 3x more clients without increasing headcount or burning out your team.",
}

export default function AgencyOwnersPage() {
  return <AgencyOwnersContent />
}
