import type { Metadata } from "next"
import StartupsContent from "./startups-content"

export const metadata: Metadata = {
  title: "AI Solutions for Startups | The Wizard of AI",
  description: "AI for startups and startup automation tools that help you move faster, operate leaner, and compete with companies 10x your size. Launch and scale with AI from day one.",
}

export default function StartupsPage() {
  return <StartupsContent />
}
