import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | The Wizard of AI",
  description: "Access your Golden Ticket holder account and exclusive AI resources from The Wizard of AI.",
  openGraph: {
    title: "Login | The Wizard of AI",
    description: "Access your exclusive AI resources and Golden Ticket holder benefits.",
  },
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
