"use client"

import { motion } from "framer-motion"
import { Clock, ChevronRight, Sparkles, Rocket, Brain, Target, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

const featuredPosts = [
  {
    id: 1,
    slug: "ai-automation-revolution-2025",
    title: "The AI Automation Revolution: Why 2025 is Your Year",
    excerpt: "The businesses that embrace AI now aren't just keeping up—they're leaving their competition in the dust.",
    category: "AI Strategy",
    readTime: "5 min",
    icon: Rocket,
  },
  {
    id: 2,
    slug: "custom-ai-agents-business",
    title: "Custom AI Agents: Your 24/7 Workforce",
    excerpt: "Imagine having employees who work around the clock, never complain, and consistently deliver results.",
    category: "AI Agents",
    readTime: "7 min",
    icon: Brain,
  },
  {
    id: 3,
    slug: "lead-generation-ai-automation",
    title: "From Cold Leads to Hot Prospects",
    excerpt: "Stop wasting time on unqualified leads. Learn how AI can identify and nurture prospects automatically.",
    category: "Lead Gen",
    readTime: "6 min",
    icon: Target,
  },
]

export function BlogSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A4D3C] via-[#0D5A45] to-[#0A4D3C] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4A84B]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#1A8B6B]/20 rounded-full blur-[120px]" />
      </div>

      {/* Floating sparkles */}
      {[
        { left: "5%", top: "20%", delay: 0 },
        { left: "90%", top: "15%", delay: 0.5 },
        { left: "15%", top: "80%", delay: 0.3 },
        { left: "85%", top: "75%", delay: 0.8 },
      ].map((sparkle, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 md:w-4 md:h-4 z-10 pointer-events-none"
          style={{ left: sparkle.left, top: sparkle.top }}
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/10 rounded-full mb-6 border border-[#D4A84B]/30"
            animate={{
              boxShadow: [
                "0 0 20px rgba(212,168,75,0.2)",
                "0 0 30px rgba(212,168,75,0.4)",
                "0 0 20px rgba(212,168,75,0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-[#D4A84B]" />
            <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">From The Blog</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
            <span className="text-[#FDF8E8]">AI Insights &</span>{" "}
            <span className="text-[#D4A84B]">Strategies</span>
          </h2>
          <p className="text-[#F0D98C]/80 text-lg md:text-xl max-w-2xl mx-auto">
            Battle-tested tactics and insider knowledge to transform your business with AI automation.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <Link href={`/blog#${post.slug}`}>
                <motion.div
                  className="relative h-full bg-[#0D6B4F]/30 rounded-2xl overflow-hidden border border-[#D4A84B]/20 transition-all duration-500"
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    borderColor: "rgba(212,168,75,0.6)",
                  }}
                  style={{ perspective: "1000px" }}
                >
                  {/* Gold glow on hover */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#D4A84B]/0 via-[#D4A84B]/20 to-[#D4A84B]/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  />

                  {/* Icon Header */}
                  <div className="relative h-36 bg-gradient-to-br from-[#0D6B4F]/50 to-[#0A4D3C] flex items-center justify-center overflow-hidden">
                    <motion.div
                      className="relative z-10"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <post.icon className="w-14 h-14 text-[#D4A84B]/70" />
                    </motion.div>

                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-[#D4A84B] rounded-full"
                        style={{
                          left: `${25 + i * 25}%`,
                          top: `${30 + i * 15}%`,
                        }}
                        animate={{
                          y: [0, -12, 0],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                        }}
                      />
                    ))}

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-[#D4A84B] text-[#0A4D3C] rounded-full text-xs font-bold uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="text-lg font-bold text-[#FDF8E8] mb-3 group-hover:text-[#D4A84B] transition-colors duration-300 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#FDF8E8]/60 text-sm mb-4 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#D4A84B]/20">
                      <span className="flex items-center gap-1.5 text-xs text-[#FDF8E8]/50">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <motion.span
                        className="flex items-center gap-1 text-[#D4A84B] text-sm font-medium"
                        whileHover={{ x: 3 }}
                      >
                        Read
                        <ChevronRight className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A84B]/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/blog">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(212,168,75,0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              View All Articles
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
