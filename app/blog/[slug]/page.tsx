import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts"
import BlogPostClient from "./blog-post-client"

// Generate static params for all blog posts
export function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | The Wizard of AI",
    }
  }

  return {
    title: `${post.title} | The Wizard of AI`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
