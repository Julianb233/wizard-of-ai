"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, FileText, Video, BookOpen, Download, ExternalLink, ChevronRight, Users, Calculator, ListChecks } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    category: "Community & Connection",
    items: [
      {
        title: "Join My Community",
        description: "Connect with fellow AI enthusiasts, get exclusive tips, and stay ahead of the AI revolution.",
        type: "community",
        icon: Users,
        href: "/resources/community",
        featured: true,
      },
    ],
  },
  {
    category: "AI Guides",
    items: [
      {
        title: "Getting Started with AI Automation",
        description: "A comprehensive guide to implementing AI in your business workflows.",
        type: "guide",
        icon: BookOpen,
        href: "/resources/getting-started-with-ai",
      },
      {
        title: "The AI Implementation Playbook",
        description: "Step-by-step strategies for deploying AI solutions that drive results.",
        type: "guide",
        icon: FileText,
        href: "/resources/ai-playbook",
      },
      {
        title: "AI Project Management Guide",
        description: "Master AI-powered project orchestration to keep teams aligned, track deadlines, and never miss a milestone.",
        type: "guide",
        icon: ListChecks,
        href: "/resources/project-management-ai",
      },
    ],
  },
  {
    category: "Video Training",
    items: [
      {
        title: "AI Automation Masterclass",
        description: "In-depth video training on building automated AI workflows.",
        type: "video",
        icon: Video,
        href: "/resources/masterclass",
      },
      {
        title: "BottleneckBots Setup Tutorial",
        description: "Learn how to configure and deploy your first AI agent.",
        type: "video",
        icon: Video,
        href: "/resources/bottleneckbots-tutorial",
      },
    ],
  },
  {
    category: "Templates & Tools",
    items: [
      {
        title: "AI Prompt Library",
        description: "Battle-tested prompts for common business automation scenarios.",
        type: "download",
        icon: Download,
        href: "/resources/prompt-library",
      },
      {
        title: "ROI Calculator",
        description: "Calculate the potential return on your AI investment.",
        type: "tool",
        icon: Calculator,
        href: "/resources/roi-calculator",
      },
    ],
  },
]

// 15% more sparkles (7 instead of 6)
const sparkles = [
  { left: "5%", top: "15%", delay: 0, size: "lg" },
  { left: "92%", top: "20%", delay: 0.5, size: "md" },
  { left: "8%", top: "75%", delay: 0.3, size: "lg" },
  { left: "88%", top: "70%", delay: 0.8, size: "md" },
  { left: "50%", top: "10%", delay: 0.2, size: "sm" },
  { left: "95%", top: "45%", delay: 0.7, size: "lg" },
  { left: "3%", top: "50%", delay: 1.0, size: "md" },
  { left: "15%", top: "35%", delay: 0.4, size: "sm" },
  { left: "85%", top: "85%", delay: 0.9, size: "lg" },
  { left: "40%", top: "5%", delay: 1.1, size: "md" },
  { left: "70%", top: "60%", delay: 0.6, size: "sm" },
  { left: "25%", top: "90%", delay: 1.2, size: "md" },
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

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen bg-[#0A4D3C] overflow-x-hidden">
      <Header />

      {/* Enhanced Sparkles - 15% more */}
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
        <div className="max-w-6xl mx-auto">
          {/* Back link with hover animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#D4A84B] hover:text-[#E8C55A] transition-all duration-300 mb-8 group"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
              <span className="font-medium group-hover:underline underline-offset-4">Back to Home</span>
            </Link>
          </motion.div>

          {/* Header with floating animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-tight mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(212,168,75,0.3)",
                  "0 0 40px rgba(212,168,75,0.5)",
                  "0 0 20px rgba(212,168,75,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="block text-[#FDF8E8]">RESOURCES</span>
              <motion.span
                className="block text-[#D4A84B]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Library
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-[#F0D98C] max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Free guides, templates, and training to help you harness the power of AI for your business.
            </motion.p>
          </motion.div>

          {/* Resources Grid with enhanced animations */}
          <div className="space-y-16">
            {resources.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
              >
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-[#D4A84B] mb-6"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {section.category}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <Link key={item.title} href={item.href}>
                      <motion.div
                        className="group relative bg-[#0D6B4F]/30 rounded-2xl p-6 border border-[#D4A84B]/20 hover:border-[#D4A84B]/60 transition-all duration-500 cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + itemIndex * 0.1 }}
                        whileHover={{
                          scale: 1.03,
                          y: -8,
                          boxShadow: "0 20px 40px rgba(212,168,75,0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Animated gradient background on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-[#D4A84B]/0 via-[#D4A84B]/5 to-[#D4A84B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* Pulsing glow effect */}
                        <motion.div
                          className="absolute -inset-1 bg-gradient-to-r from-[#D4A84B]/0 via-[#D4A84B]/20 to-[#D4A84B]/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0, 0.3, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />

                        <div className="relative flex items-start gap-4">
                          <motion.div
                            className="p-3 bg-[#D4A84B]/10 rounded-xl group-hover:bg-[#D4A84B]/30 transition-all duration-300"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon className="w-6 h-6 text-[#D4A84B]" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-[#FDF8E8] mb-2 group-hover:text-[#D4A84B] transition-colors duration-300">
                                {item.title}
                              </h3>
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <ChevronRight className="w-5 h-5 text-[#D4A84B]" />
                              </motion.div>
                            </div>
                            <p className="text-[#FDF8E8]/70 leading-relaxed group-hover:text-[#FDF8E8]/90 transition-colors">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#D4A84B]/10 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section with Golden Ticket Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 relative overflow-hidden"
          >
            <div className="relative py-16 px-8 bg-gradient-to-br from-[#0D6B4F]/50 via-[#0D6B4F]/30 to-[#0A4D3C]/50 rounded-3xl border border-[#D4A84B]/30">
              {/* Animated border glow */}
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

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                {/* Golden Ticket Image */}
                <motion.div
                  className="w-full lg:w-1/2 flex justify-center"
                  animate={{
                    rotateY: [0, 5, 0, -5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.img
                    src="/images/golden-ticket.png"
                    alt="Golden Ticket to AI Transformation"
                    className="w-full max-w-[400px] h-auto rounded-2xl"
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(212,168,75,0.4))"
                    }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </motion.div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <motion.h3
                    className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-4 uppercase tracking-wide"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(212,168,75,0.2)",
                        "0 0 30px rgba(212,168,75,0.4)",
                        "0 0 10px rgba(212,168,75,0.2)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Unlock Your <span className="text-[#D4A84B]">Golden Ticket</span>
                  </motion.h3>
                  <p className="text-[#F0D98C] mb-8 text-lg max-w-xl">
                    Schedule a free consultation to discover how AI can revolutionize your operations and unlock new opportunities for growth.
                  </p>
                  <motion.a
                    href="/#apply"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold text-lg rounded-xl transition-all duration-300 shadow-xl"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(212,168,75,0.6)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Your Consultation
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.div>
                  </motion.a>
                </div>
              </div>

              {/* Floating particles in CTA */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`cta-particle-${i}`}
                  className="absolute w-2 h-2 bg-[#D4A84B] rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
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
        </div>
      </div>

      <Footer />
    </main>
  )
}
