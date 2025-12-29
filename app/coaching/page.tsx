import type { Metadata } from "next"
import CoachingContent from "./coaching-content"

export const metadata: Metadata = {
  title: "AI Consulting & Coaching | Become an AI Expert | The Wizard of AI",
  description: "Learn to build your own AI consulting business. Training programs, 1:1 coaching, and mentorship for aspiring AI consultants and agency owners who want to do what Julian does.",
}

export default function CoachingPage() {
  return <CoachingContent />
}
