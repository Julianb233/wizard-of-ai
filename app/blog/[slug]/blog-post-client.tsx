"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Clock, Calendar, ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-posts"
import ReactMarkdown from "react-markdown"

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  // Sparkles decoration
  const sparkles = [
    { left: "5%", top: "15%", delay: 0, size: "lg" },
    { left: "92%", top: "20%", delay: 0.5, size: "md" },
    { left: "8%", top: "75%", delay: 0.3, size: "lg" },
    { left: "88%", top: "70%", delay: 0.8, size: "md" },
    { left: "50%", top: "10%", delay: 0.2, size: "sm" },
    { left: "95%", top: "45%", delay: 0.7, size: "lg" },
  ]

  const getSparkleSize = (size: string) => {
    switch (size) {
      case "lg":
        return "w-4 h-4 md:w-6 md:h-6"
      case "md":
        return "w-3 h-3 md:w-4 md:h-4"
      default:
        return "w-2 h-2 md:w-3 md:h-3"
    }
  }

  return (
    <main className="relative min-h-screen bg-[#0A4D3C] overflow-x-hidden">
      <Header />

      {/* Sparkles */}
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={i}
          className={`absolute ${getSparkleSize(sparkle.size)} z-10 pointer-events-none`}
          style={{ left: sparkle.left, top: sparkle.top }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.7, 1, 0],
            scale: [0, 1.3, 0.9, 1.3, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3.5,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: 1.2,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
              fill="#D4A84B"
              style={{ filter: "drop-shadow(0 0 10px rgba(212,168,75,0.95))" }}
            />
          </svg>
        </motion.div>
      ))}

      <div className="pt-40 md:pt-48 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#D4A84B] hover:text-[#E8C55A] transition-all duration-300 mb-8 group"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
              <span className="font-medium group-hover:underline underline-offset-4">Back to Blog</span>
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-[#D4A84B] text-[#0A4D3C] rounded-full text-sm font-bold uppercase">
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FDF8E8] mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mb-8 text-[#FDF8E8]/70"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By {post.author}</span>
              </div>
            </motion.div>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-[#F0D98C] mb-12 leading-relaxed font-medium border-l-4 border-[#D4A84B] pl-6 py-2 bg-[#0D6B4F]/30 rounded-r-lg"
            >
              {post.excerpt}
            </motion.p>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-[#FDF8E8] prose-headings:font-black
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#D4A84B]
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-[#E8C55A]
                prose-p:text-[#FDF8E8]/80 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-[#FDF8E8] prose-strong:font-bold
                prose-ul:text-[#FDF8E8]/80 prose-ul:my-6
                prose-ol:text-[#FDF8E8]/80 prose-ol:my-6
                prose-li:my-2 prose-li:leading-relaxed
                prose-a:text-[#D4A84B] prose-a:no-underline hover:prose-a:text-[#E8C55A] hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-[#D4A84B] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#F0D98C]
                prose-code:text-[#E8C55A] prose-code:bg-[#0D6B4F]/50 prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-[#0D6B4F]/50 prose-pre:border prose-pre:border-[#D4A84B]/30"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 relative overflow-hidden"
            >
              <div className="relative py-12 px-8 bg-gradient-to-br from-[#0D6B4F]/50 via-[#0D6B4F]/30 to-[#0A4D3C]/50 rounded-3xl border border-[#D4A84B]/30">
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(212,168,75,0.3), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10 text-center max-w-2xl mx-auto">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="inline-block mb-6"
                  >
                    <Sparkles className="w-12 h-12 text-[#D4A84B]" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-4 uppercase">
                    Ready to Transform <span className="text-[#D4A84B]">Your Business</span>?
                  </h3>
                  <p className="text-[#F0D98C] mb-8 text-lg">
                    Book a free consultation and discover how AI can solve your specific challenges.
                  </p>

                  <motion.a
                    href="/contact"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold text-lg rounded-xl transition-all duration-300 shadow-xl"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(212,168,75,0.6)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Schedule Free Consultation
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.div>
                  </motion.a>
                </div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-[#D4A84B] rounded-full"
                    style={{
                      left: `${15 + i * 14}%`,
                      top: `${25 + (i % 3) * 25}%`,
                    }}
                    animate={{
                      y: [0, -25, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.3, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.4,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 bg-[#0D6B4F]/30 rounded-2xl border border-[#D4A84B]/20"
            >
              <h4 className="text-2xl font-bold text-[#D4A84B] mb-4">About the Author</h4>
              <p className="text-[#FDF8E8]/80 leading-relaxed">
                <strong className="text-[#FDF8E8]">{post.author}</strong> is The Wizard of AI and founder of AI Acrobatics,
                specializing in custom AI solutions that deliver measurable ROI for small and medium-sized businesses.
                With 50+ successful implementations across diverse industries, Julian helps business owners identify
                bottlenecks and deploy AI agents that scale operations without proportional cost increases.
              </p>
            </motion.div>
          </motion.article>
        </div>
      </div>

      <Footer />
    </main>
  )
}
