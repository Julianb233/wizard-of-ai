import type { Metadata } from "next"
import InnovatorsContent from "./innovators-content"

export const metadata: Metadata = {
  title: "AI Solutions for Innovators | The Wizard of AI",
  description: "AI innovation consulting and AI transformation for forward-thinking leaders. Turn bold ideas into reality with cutting-edge AI implementation and strategic guidance.",
}

export default function InnovatorsPage() {
  return <InnovatorsContent />
}
