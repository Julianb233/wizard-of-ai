import type { Metadata } from "next"
import { getAllBlogPosts, getFeaturedPosts } from "@/lib/blog-posts"
import BlogIndexClient from "./blog-index-client"

export const metadata: Metadata = {
  title: "AI Automation Blog | Business Strategy & Automation Tactics | The Wizard of AI",
  description: "Expert AI insights, automation strategies, and business transformation tactics. Learn how to implement AI agents, automate workflows, and scale your business faster with proven tactics from Julian Bradley.",
  keywords: ["AI automation", "business automation blog", "AI strategy", "workflow automation", "AI agents", "business scaling", "AI implementation"],
  openGraph: {
    title: "AI Automation Blog | Strategy & Tactics | The Wizard of AI",
    description: "Insider strategies on AI automation, business transformation, and scaling without hiring. Read proven tactics and battle-tested frameworks.",
    url: "https://v0-the-wizard-of-ai.vercel.app/blog",
    type: "website",
    images: [
      {
        url: "/images/og-wizard-of-ai.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Blog | The Wizard of AI",
    description: "Expert AI insights and automation strategies for business owners and executives.",
  },
  alternates: {
    canonical: "https://v0-the-wizard-of-ai.vercel.app/blog",
  },
}

export default function BlogPage() {
  const allPosts = getAllBlogPosts()
  const featuredPosts = getFeaturedPosts()

  return <BlogIndexClient allPosts={allPosts} featuredPosts={featuredPosts} />
}
