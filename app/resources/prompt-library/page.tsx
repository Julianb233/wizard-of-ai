"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Download, Mail, Sparkles, FileText, Zap, Target } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const sparkles = [
  { left: "5%", top: "15%", delay: 0, size: "lg" },
  { left: "92%", top: "20%", delay: 0.5, size: "md" },
  { left: "8%", top: "75%", delay: 0.3, size: "lg" },
  { left: "88%", top: "70%", delay: 0.8, size: "md" },
  { left: "50%", top: "10%", delay: 0.2, size: "sm" },
  { left: "95%", top: "45%", delay: 0.7, size: "lg" },
  { left: "3%", top: "50%", delay: 1.0, size: "md" },
  { left: "15%", top: "35%", delay: 0.4, size: "sm" },
  { left: "70%", top: "60%", delay: 0.6, size: "md" },
  { left: "40%", top: "90%", delay: 1.1, size: "lg" },
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

export default function PromptLibraryPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setSubmitted(false)
    }, 3000)
  }

  const categories = [
    {
      icon: FileText,
      title: "Content Creation",
      count: "25+ Prompts",
      color: "from-[#D4A84B]/20 to-[#E8C55A]/20",
    },
    {
      icon: Zap,
      title: "Task Automation",
      count: "30+ Prompts",
      color: "from-[#D4A84B]/15 to-[#E8C55A]/25",
    },
    {
      icon: Target,
      title: "Business Strategy",
      count: "20+ Prompts",
      color: "from-[#E8C55A]/20 to-[#D4A84B]/20",
    },
  ]

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
              href="/resources"
              className="inline-flex items-center gap-2 text-[#D4A84B] hover:text-[#E8C55A] transition-all duration-300 mb-8 group"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
              <span className="font-medium group-hover:underline underline-offset-4">Back to Resources</span>
            </Link>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#0D6B4F]/40 rounded-3xl p-8 md:p-16 border border-[#D4A84B]/30 overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#D4A84B]/5 via-transparent to-[#D4A84B]/10 opacity-50"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A84B]/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                className="inline-flex p-4 bg-[#D4A84B]/20 rounded-2xl mb-6"
              >
                <Download className="w-12 h-12 text-[#D4A84B]" />
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="block text-[#FDF8E8]">AI Prompt</span>
                <motion.span
                  className="block text-[#D4A84B]"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(212,168,75,0.3)",
                      "0 0 40px rgba(212,168,75,0.5)",
                      "0 0 20px rgba(212,168,75,0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Library
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-[#FDF8E8]/80 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Battle-tested prompts for common business automation scenarios. Get instant access to professionally
                crafted prompts that deliver consistent, high-quality results across marketing, operations, and more.
              </motion.p>

              {/* Category Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              >
                {categories.map((category, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`relative bg-gradient-to-br ${category.color} rounded-xl p-6 border border-[#D4A84B]/30 overflow-hidden`}
                  >
                    {/* Inner shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A84B]/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        delay: i * 0.5,
                      }}
                    />

                    <div className="relative z-10 text-center">
                      <category.icon className="w-8 h-8 text-[#D4A84B] mx-auto mb-3" />
                      <h3 className="text-[#FDF8E8] font-bold mb-1">{category.title}</h3>
                      <p className="text-[#D4A84B] text-sm font-semibold">{category.count}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Preview List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-[#0A4D3C]/40 rounded-2xl p-6 border border-[#D4A84B]/20 mb-8"
              >
                <h3 className="text-xl font-bold text-[#FDF8E8] mb-4">What's Inside</h3>
                <ul className="space-y-3">
                  {[
                    "Email marketing campaign templates",
                    "Customer service response frameworks",
                    "Social media content generators",
                    "Data analysis and reporting prompts",
                    "Meeting summarization templates",
                    "And 70+ more proven prompts...",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 + i * 0.1 }}
                      className="flex items-center gap-3 text-[#FDF8E8]/80"
                    >
                      <div className="w-2 h-2 bg-[#D4A84B] rounded-full" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Coming Soon Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4A84B]/20 to-[#E8C55A]/20 border border-[#D4A84B]/40 rounded-full mb-12"
              >
                <Sparkles className="w-5 h-5 text-[#D4A84B]" />
                <span className="text-[#D4A84B] font-bold uppercase tracking-wider text-sm">Coming Soon</span>
              </motion.div>

              {/* Email Signup Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="bg-[#0A4D3C]/60 rounded-2xl p-8 border border-[#D4A84B]/20"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#FDF8E8] mb-4">
                  Download for Free
                </h2>
                <p className="text-[#FDF8E8]/70 mb-6">
                  Get instant access to the complete AI Prompt Library when it launches. Plus, receive monthly updates
                  with new prompts and optimization tips.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-4 bg-[#0D6B4F]/50 border border-[#D4A84B]/30 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/40 focus:outline-none focus:border-[#D4A84B] transition-colors"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#D4A84B]/30 transition-all"
                    >
                      <Download className="w-5 h-5" />
                      Get Library
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <p className="text-[#D4A84B] font-bold text-lg flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Perfect! You'll receive the library as soon as it's available.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-12 text-center"
          >
            <p className="text-[#FDF8E8]/60 mb-6">
              Need custom prompts tailored to your specific business processes? Let's create them together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-[#0D6B4F]/50 border border-[#D4A84B]/30 text-[#FDF8E8] font-bold rounded-xl hover:border-[#D4A84B]/60 transition-all"
                >
                  Browse All Resources
                </motion.button>
              </Link>
              <Link href="/#apply">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl hover:shadow-lg hover:shadow-[#D4A84B]/30 transition-all"
                >
                  Book Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
