"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Clock, ChevronRight, Sparkles, Search, Filter } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-posts"

interface BlogIndexClientProps {
  allPosts: BlogPost[]
  featuredPosts: BlogPost[]
}

export default function BlogIndexClient({ allPosts, featuredPosts }: BlogIndexClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(allPosts.map(post => post.category)))]

  // Filter posts based on search and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Sparkles decoration
  const sparkles = [
    { left: "5%", top: "10%", delay: 0, size: "lg" },
    { left: "92%", top: "15%", delay: 0.5, size: "md" },
    { left: "8%", top: "80%", delay: 0.3, size: "lg" },
    { left: "88%", top: "75%", delay: 0.8, size: "md" },
    { left: "50%", top: "5%", delay: 0.2, size: "sm" },
    { left: "95%", top: "50%", delay: 0.7, size: "lg" },
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
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-[#D4A84B]" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#FDF8E8] mb-6 leading-tight uppercase">
              AI Automation <span className="text-[#D4A84B]">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F0D98C] max-w-3xl mx-auto leading-relaxed">
              Battle-tested strategies, implementation tactics, and real-world results from the frontlines of AI automation.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 space-y-6"
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4A84B]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#0D6B4F]/50 border border-[#D4A84B]/30 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/50 focus:outline-none focus:border-[#D4A84B] transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-[#D4A84B]" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#D4A84B] text-[#0A4D3C] shadow-lg shadow-[#D4A84B]/50"
                      : "bg-[#0D6B4F]/50 text-[#FDF8E8] hover:bg-[#0D6B4F] border border-[#D4A84B]/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && selectedCategory === "All" && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-black text-[#D4A84B] mb-8 uppercase">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-full p-8 bg-gradient-to-br from-[#0D6B4F]/50 via-[#0D6B4F]/30 to-[#0A4D3C]/50 rounded-3xl border border-[#D4A84B]/30 overflow-hidden transition-all duration-500 hover:border-[#D4A84B] hover:shadow-2xl hover:shadow-[#D4A84B]/30">
                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: "linear-gradient(90deg, transparent, rgba(212,168,75,0.2), transparent)",
                            backgroundSize: "200% 100%",
                          }}
                          animate={{
                            backgroundPosition: ["200% 0", "-200% 0"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        <div className="relative z-10">
                          {/* Category */}
                          <span className="inline-block px-4 py-2 bg-[#D4A84B] text-[#0A4D3C] rounded-full text-sm font-bold uppercase mb-4">
                            {post.category}
                          </span>

                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-black text-[#FDF8E8] mb-4 leading-tight group-hover:text-[#D4A84B] transition-colors duration-300">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-[#FDF8E8]/70 mb-6 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center gap-4 text-[#FDF8E8]/60 text-sm mb-6">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          {/* Read More */}
                          <div className="flex items-center gap-2 text-[#D4A84B] font-bold group-hover:gap-4 transition-all duration-300">
                            Read Full Article
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <ChevronRight className="w-5 h-5" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#D4A84B] mb-8 uppercase">
              {searchQuery || selectedCategory !== "All" ? "Search Results" : "All Articles"}
            </h2>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl text-[#FDF8E8]/60">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="group"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-full p-6 bg-[#0D6B4F]/30 rounded-2xl border border-[#D4A84B]/20 overflow-hidden transition-all duration-300 hover:border-[#D4A84B] hover:bg-[#0D6B4F]/50 hover:shadow-xl hover:shadow-[#D4A84B]/20">
                        <div className="relative z-10">
                          {/* Category */}
                          <span className="inline-block px-3 py-1 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-xs font-bold uppercase mb-3 border border-[#D4A84B]/30">
                            {post.category}
                          </span>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-[#FDF8E8] mb-3 leading-tight group-hover:text-[#D4A84B] transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-[#FDF8E8]/60 text-sm mb-4 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center gap-3 text-[#FDF8E8]/50 text-xs mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          {/* Read More */}
                          <div className="flex items-center gap-2 text-[#D4A84B] font-bold text-sm group-hover:gap-3 transition-all duration-300">
                            Read More
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 relative overflow-hidden"
          >
            <div className="relative py-16 px-8 bg-gradient-to-br from-[#0D6B4F]/50 via-[#0D6B4F]/30 to-[#0A4D3C]/50 rounded-3xl border border-[#D4A84B]/30">
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
                  Ready to <span className="text-[#D4A84B]">Implement AI</span>?
                </h3>
                <p className="text-[#F0D98C] mb-8 text-lg">
                  Get a custom AI strategy tailored to your business. Free consultation with The Wizard of AI.
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
                  Book Your Free Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.div>
                </motion.a>
              </div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-[#D4A84B] rounded-full"
                  style={{
                    left: `${10 + i * 11}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.9, 0.3],
                    scale: [0.8, 1.4, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
