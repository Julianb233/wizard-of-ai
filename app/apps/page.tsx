"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, ExternalLink, Sparkles, Bot, Brain, GraduationCap, Heart, Shield, Users, Zap, ChevronRight, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// App categories
const categories = [
  { id: "all", label: "All Apps", icon: Sparkles },
  { id: "business", label: "Business", icon: Zap },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "spiritual", label: "Spiritual", icon: Heart },
  { id: "safety", label: "Safety", icon: Shield },
]

// Apps data - to be populated from Notion/websites
const apps = [
  {
    id: "bottleneckbot",
    name: "BottleneckBot",
    tagline: "AI That Eliminates Your Business Bottlenecks",
    description: "Identify and eliminate operational bottlenecks with AI-powered analysis. BottleneckBot scans your workflows, finds inefficiencies, and suggests optimizations to save time and money.",
    category: "business",
    icon: Bot,
    url: "https://bottleneckbot.com",
    features: ["Workflow Analysis", "Process Optimization", "ROI Tracking", "Custom Reports"],
    status: "live",
    color: "#D4A84B",
  },
  {
    id: "jesus-chat",
    name: "Jesus Into The Chat",
    tagline: "Faith-Based AI Companion",
    description: "An AI companion grounded in biblical wisdom, offering guidance, encouragement, and scripture-based answers to life's questions.",
    category: "spiritual",
    icon: MessageCircle,
    url: "https://jesusintothechat.com",
    features: ["Scripture References", "Prayer Support", "Daily Devotionals", "Faith Q&A"],
    status: "live",
    color: "#8B5CF6",
  },
  {
    id: "life-alert-ai",
    name: "Life Alert AI",
    tagline: "AI-Powered Safety Monitoring",
    description: "Next-generation safety monitoring with AI detection. Proactive alerts and emergency response for seniors and vulnerable individuals.",
    category: "safety",
    icon: Shield,
    url: "https://lifealertai.com",
    features: ["Fall Detection", "Emergency Response", "Health Monitoring", "Family Alerts"],
    status: "coming-soon",
    color: "#EF4444",
  },
  {
    id: "spiritual-guide",
    name: "My Spiritual Guide AI",
    tagline: "Your Personal Spiritual Companion",
    description: "An AI guide for spiritual exploration and growth. Access wisdom from multiple traditions, meditation guidance, and personalized spiritual insights.",
    category: "spiritual",
    icon: Heart,
    url: "https://myspiritualguideai.com",
    features: ["Multi-faith Wisdom", "Meditation Guide", "Daily Reflection", "Spiritual Growth"],
    status: "live",
    color: "#10B981",
  },
  {
    id: "rabbi-ai",
    name: "My Rabbi AI",
    tagline: "Jewish Wisdom at Your Fingertips",
    description: "Access Torah teachings, Jewish law guidance, and rabbinical wisdom through an AI trained on centuries of Jewish scholarship.",
    category: "spiritual",
    icon: BookOpen,
    url: "https://myrabbiai.com",
    features: ["Torah Study", "Halacha Guidance", "Holiday Info", "Jewish History"],
    status: "live",
    color: "#3B82F6",
  },
  {
    id: "clone-professor",
    name: "Clone My Professor",
    tagline: "Your Professor, Available 24/7",
    description: "Upload your course materials and create an AI clone of your professor's teaching style. Get answers and explanations anytime.",
    category: "education",
    icon: GraduationCap,
    url: "https://clonemyprofessor.com",
    features: ["Course Cloning", "Study Help", "Exam Prep", "Office Hours 24/7"],
    status: "coming-soon",
    color: "#F59E0B",
  },
  {
    id: "clone-teacher",
    name: "Clone My Teacher",
    tagline: "K-12 Learning Companion",
    description: "AI tutoring that adapts to your child's learning style. Based on their teacher's curriculum and methods for seamless learning.",
    category: "education",
    icon: Users,
    url: "https://clonemyteacher.com",
    features: ["Personalized Learning", "Homework Help", "Parent Dashboard", "Progress Tracking"],
    status: "coming-soon",
    color: "#EC4899",
  },
  {
    id: "sat-prep",
    name: "My SAT Prep AI",
    tagline: "AI-Powered SAT Excellence",
    description: "Personalized SAT preparation with AI that identifies your weak areas and creates targeted study plans to maximize your score.",
    category: "education",
    icon: Brain,
    url: "https://mysatprepai.com",
    features: ["Adaptive Practice", "Score Prediction", "Weak Area Focus", "Study Schedule"],
    status: "live",
    color: "#6366F1",
  },
  {
    id: "act-prep",
    name: "My ACT Prep AI",
    tagline: "Master the ACT with AI",
    description: "Comprehensive ACT preparation powered by AI. Full-length practice tests, detailed explanations, and personalized improvement strategies.",
    category: "education",
    icon: Brain,
    url: "https://myactprepai.com",
    features: ["Practice Tests", "Score Analysis", "Time Management", "Section Strategy"],
    status: "live",
    color: "#8B5CF6",
  },
  {
    id: "test-prep-talk",
    name: "Test Prep Talk",
    tagline: "Your Test Prep Community",
    description: "Join the conversation about standardized test preparation. Tips, strategies, and support from students and experts.",
    category: "education",
    icon: MessageCircle,
    url: "https://testpreptalk.com",
    features: ["Community Forum", "Expert Tips", "Study Groups", "Score Sharing"],
    status: "coming-soon",
    color: "#14B8A6",
  },
  {
    id: "better-together",
    name: "Better Together",
    tagline: "AI-Powered Relationship Building",
    description: "Strengthen relationships with AI-guided communication tools. Better conversations, deeper connections, and healthier relationships.",
    category: "business",
    icon: Heart,
    url: "https://bettertogether.com",
    features: ["Communication Tools", "Conflict Resolution", "Connection Exercises", "Relationship Insights"],
    status: "coming-soon",
    color: "#F472B6",
  },
]

// Sparkles animation
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

export default function AppsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)

  const filteredApps = activeCategory === "all"
    ? apps
    : apps.filter(app => app.category === activeCategory)

  return (
    <main className="relative min-h-screen bg-[#0A4D3C] overflow-x-hidden">
      <Header />

      {/* Golden Sparkles */}
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
          {/* Back link */}
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

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 text-center"
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
              <Bot className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">AI Applications</span>
            </motion.div>

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
              <span className="block text-[#FDF8E8]">OUR</span>
              <motion.span
                className="block text-[#D4A84B]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Apps
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-[#F0D98C] max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              AI-powered applications solving real problems. From business automation to education and spiritual guidance.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, i) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-[#D4A84B] text-[#0A4D3C]"
                    : "bg-[#0D6B4F]/30 text-[#FDF8E8] border border-[#D4A84B]/20 hover:border-[#D4A84B]/60"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Apps Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                  style={{ perspective: "1000px" }}
                  onMouseEnter={() => setHoveredApp(app.id)}
                  onMouseLeave={() => setHoveredApp(null)}
                >
                  <motion.div
                    className="relative bg-gradient-to-br from-[#0D6B4F]/40 to-[#0A4D3C]/60 rounded-2xl overflow-hidden border border-[#D4A84B]/20 hover:border-[#D4A84B]/60 transition-all h-full"
                    whileHover={{
                      rotateY: 5,
                      rotateX: -5,
                      scale: 1.02,
                      boxShadow: `0 25px 50px ${app.color}30`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      app.status === "live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-[#D4A84B]/20 text-[#D4A84B] border border-[#D4A84B]/30"
                    }`}>
                      {app.status === "live" ? "Live" : "Coming Soon"}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Icon */}
                      <motion.div
                        className="mb-4 inline-flex p-4 rounded-2xl"
                        style={{ backgroundColor: `${app.color}20` }}
                        animate={{
                          rotate: hoveredApp === app.id ? [0, -5, 5, 0] : 0,
                          scale: hoveredApp === app.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <app.icon className="w-8 h-8" style={{ color: app.color }} />
                      </motion.div>

                      {/* Name & Tagline */}
                      <h3 className="text-2xl font-bold text-[#FDF8E8] mb-1">
                        {app.name}
                      </h3>
                      <p className="text-sm font-medium mb-3" style={{ color: app.color }}>
                        {app.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-[#FDF8E8]/70 text-sm leading-relaxed mb-4">
                        {app.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {app.features.slice(0, 3).map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-[#0A4D3C]/50 rounded-full text-xs text-[#F0D98C] border border-[#D4A84B]/10"
                          >
                            {feature}
                          </span>
                        ))}
                        {app.features.length > 3 && (
                          <span className="px-3 py-1 bg-[#D4A84B]/10 rounded-full text-xs text-[#D4A84B]">
                            +{app.features.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <motion.a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all"
                        style={{
                          backgroundColor: `${app.color}20`,
                          color: app.color,
                          border: `1px solid ${app.color}40`,
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: app.color,
                          color: "#0A4D3C",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {app.status === "live" ? "Visit App" : "Learn More"}
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>

                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 relative overflow-hidden"
          >
            <div className="relative py-16 px-8 bg-gradient-to-br from-[#0D6B4F]/50 via-[#0D6B4F]/30 to-[#0A4D3C]/50 rounded-3xl border border-[#D4A84B]/30 text-center">
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

              <div className="relative z-10 max-w-2xl mx-auto">
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

                <motion.h3
                  className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-4 uppercase"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(212,168,75,0.2)",
                      "0 0 30px rgba(212,168,75,0.4)",
                      "0 0 10px rgba(212,168,75,0.2)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Have an <span className="text-[#D4A84B]">App Idea?</span>
                </motion.h3>
                <p className="text-[#F0D98C] mb-8 text-lg">
                  Let's turn your vision into reality. We build custom AI applications tailored to your needs.
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
                  Let's Build Together
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
