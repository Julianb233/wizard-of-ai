/**
 * SEO-Optimized Blog Post Component
 * Includes:
 * - Proper heading hierarchy (H1, H2, H3)
 * - Scannable formatting (bullets, numbered lists)
 * - Featured snippet optimization (Q&A sections)
 * - Internal linking
 * - Call-to-action elements
 * - Social sharing capability
 * - Reading time indicator
 * - Author credibility signals
 */

import React from "react"
import { motion } from "framer-motion"
import { Clock, Share2, Heart, Bookmark, ArrowRight, CheckCircle2, Calendar } from "lucide-react"

interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

interface BlogPostProps {
  title: string
  subtitle?: string
  author: string
  date: string
  readTime: string
  category: string
  image?: string
  tableOfContents?: TableOfContentsItem[]
  children: React.ReactNode
  relatedPosts?: RelatedPostProps[]
  ctaText?: string
  ctaLink?: string
  ctaDescription?: string
}

interface RelatedPostProps {
  title: string
  excerpt: string
  link: string
  category: string
}

interface H2Props {
  id?: string
  children: React.ReactNode
  className?: string
}

interface H3Props {
  children: React.ReactNode
  className?: string
}

interface ListItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
}

interface FeaturedSnippetProps {
  question: string
  answer: string
}

// Main Blog Post Component
export const SEOBlogPost: React.FC<BlogPostProps> = ({
  title,
  subtitle,
  author,
  date,
  readTime,
  category,
  image,
  tableOfContents,
  children,
  relatedPosts = [],
  ctaText = "Book Your Free Consultation",
  ctaLink = "/#apply",
  ctaDescription = "Ready to transform your business with AI?",
}) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-xs font-bold uppercase">
            {category}
          </span>
        </div>

        {/* H1 Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FDF8E8] mb-4 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-[#F0D98C] mb-6 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Article Metadata */}
        <div className="flex flex-wrap items-center gap-6 text-[#FDF8E8]/70 text-sm md:text-base">
          <span className="flex items-center gap-2">
            <span className="font-semibold text-[#D4A84B]">By {author}</span>
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {readTime}
          </span>
        </div>
      </motion.header>

      {/* Featured Image */}
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 rounded-lg overflow-hidden"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      )}

      {/* Table of Contents */}
      {tableOfContents && tableOfContents.length > 0 && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12 p-6 bg-[#0D6B4F]/30 rounded-lg border border-[#D4A84B]/20"
        >
          <h2 className="text-lg font-bold text-[#D4A84B] mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {tableOfContents.map((item) => (
              <li
                key={item.id}
                style={{ marginLeft: `${(item.level - 2) * 20}px` }}
              >
                <a
                  href={`#${item.id}`}
                  className="text-[#F0D98C] hover:text-[#D4A84B] transition-colors duration-200"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="prose prose-invert max-w-none mb-12"
      >
        {children}
      </motion.div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-16 p-8 bg-gradient-to-r from-[#0D6B4F]/50 to-[#0A4D3C]/50 rounded-lg border border-[#D4A84B]/30"
      >
        <p className="text-[#F0D98C] mb-4">{ctaDescription}</p>
        <a
          href={ctaLink}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-lg hover:shadow-lg transition-all duration-300"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#D4A84B] mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-[#0D6B4F]/30 rounded-lg border border-[#D4A84B]/20 hover:border-[#D4A84B]/60 transition-all duration-300 group"
              >
                <span className="text-xs font-bold uppercase text-[#D4A84B]">{post.category}</span>
                <h3 className="text-lg font-bold text-[#FDF8E8] mt-2 mb-3 group-hover:text-[#D4A84B] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#FDF8E8]/60 text-sm mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-[#D4A84B] font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>
      )}

      {/* Share Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-[#D4A84B]/20"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[#D4A84B] font-semibold mb-2">Share this article</p>
            <div className="flex gap-4">
              <button
                className="p-2 bg-[#0D6B4F]/30 hover:bg-[#0D6B4F]/60 rounded-lg text-[#D4A84B] transition-colors"
                aria-label="Share on Twitter"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                className="p-2 bg-[#0D6B4F]/30 hover:bg-[#0D6B4F]/60 rounded-lg text-[#D4A84B] transition-colors"
                aria-label="Save article"
              >
                <Bookmark className="w-5 h-5" />
              </button>
              <button
                className="p-2 bg-[#0D6B4F]/30 hover:bg-[#0D6B4F]/60 rounded-lg text-[#D4A84B] transition-colors"
                aria-label="Like article"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[#FDF8E8]/70 text-sm">
              Written by <span className="text-[#D4A84B] font-semibold">{author}</span>
            </p>
            <p className="text-[#FDF8E8]/50 text-xs">Expert in AI Consulting & Business Automation</p>
          </div>
        </div>
      </motion.footer>
    </article>
  )
}

// H2 Component - for featured snippet optimization
export const BlogH2: React.FC<H2Props> = ({ id, children, className = "" }) => (
  <h2
    id={id}
    className={`text-2xl md:text-3xl font-bold text-[#D4A84B] mt-10 mb-4 ${className}`}
  >
    {children}
  </h2>
)

// H3 Component
export const BlogH3: React.FC<H3Props> = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-[#FDF8E8] mt-6 mb-3 ${className}`}>
    {children}
  </h3>
)

// Scannable List Item Component
export const ListItem: React.FC<ListItemProps> = ({ children, icon }) => (
  <li className="flex gap-3 mb-3 text-[#FDF8E8]/80 leading-relaxed">
    <span className="flex-shrink-0 mt-1 text-[#D4A84B]">
      {icon || <CheckCircle2 className="w-5 h-5" />}
    </span>
    <span>{children}</span>
  </li>
)

// Featured Snippet - Q&A Format (optimized for position zero)
export const FeaturedSnippet: React.FC<FeaturedSnippetProps> = ({ question, answer }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="my-8 p-6 bg-[#0D6B4F]/40 rounded-lg border-l-4 border-[#D4A84B]"
  >
    <h4 className="text-lg font-bold text-[#D4A84B] mb-3">{question}</h4>
    <p className="text-[#FDF8E8]/80 leading-relaxed">{answer}</p>
  </motion.section>
)

// Internal Link Component - for linking to other resources
interface InternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const InternalLink: React.FC<InternalLinkProps> = ({ href, children, className = "" }) => (
  <a
    href={href}
    className={`text-[#D4A84B] hover:text-[#E8C55A] font-semibold transition-colors ${className}`}
  >
    {children}
  </a>
)

// Testimonial/Social Proof Component
interface TestimonialProps {
  quote: string
  author: string
  title: string
  image?: string
}

export const TestimonialBlock: React.FC<TestimonialProps> = ({ quote, author, title, image }) => (
  <motion.blockquote
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="my-8 p-6 border-l-4 border-[#D4A84B] bg-[#0D6B4F]/30 rounded-r-lg"
  >
    <p className="text-lg text-[#FDF8E8] italic mb-4">"{quote}"</p>
    <div className="flex items-center gap-3">
      {image && (
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
      )}
      <div>
        <p className="font-bold text-[#D4A84B]">{author}</p>
        <p className="text-sm text-[#FDF8E8]/60">{title}</p>
      </div>
    </div>
  </motion.blockquote>
)

// CTA Banner Component
interface CTABannerProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="my-12 p-8 bg-gradient-to-r from-[#D4A84B]/20 to-[#0D6B4F]/40 rounded-lg border border-[#D4A84B]/30"
  >
    <h3 className="text-2xl font-bold text-[#D4A84B] mb-2">{title}</h3>
    <p className="text-[#FDF8E8]/80 mb-6">{description}</p>
    <a
      href={buttonLink}
      className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4A84B] text-[#0A4D3C] font-bold rounded-lg hover:shadow-lg transition-all"
    >
      {buttonText}
      <ArrowRight className="w-5 h-5" />
    </a>
  </motion.section>
)
