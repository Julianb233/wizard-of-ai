import type { Metadata } from "next"
import ExecutivesContent from "./executives-content"

export const metadata: Metadata = {
  title: "AI Solutions for CEOs & Executives | The Wizard of AI",
  description: "Enterprise AI solutions and executive AI strategy for forward-thinking leaders. Drive innovation, reduce costs, and gain competitive advantage with strategic AI implementation.",
}

export default function ExecutivesPage() {
  return <ExecutivesContent />
}
