import type { Metadata } from "next"
import ContentCreatorsContent from "./content-creators-content"

export const metadata: Metadata = {
  title: "AI Solutions for Content Creators | The Wizard of AI",
  description: "Scale your content creation with AI content creation tools and content automation. Create 10x more content in half the time while maintaining your unique voice.",
}

export default function ContentCreatorsPage() {
  return <ContentCreatorsContent />
}
