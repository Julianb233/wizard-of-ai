import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Mastery Book | The Wizard of AI",
  description: "Get early access to Julian Bradley's upcoming book on AI mastery. Learn to automate your business, build AI agents, and future-proof your career.",
  openGraph: {
    title: "AI Mastery Book | The Wizard of AI",
    description: "Get early access to Julian Bradley's upcoming book on AI mastery for business owners.",
  },
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
