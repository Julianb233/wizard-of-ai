"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, ListChecks, Clock, Users, Target, CheckCircle, TrendingUp, Calendar, ChevronRight, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"

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

const features = [
  {
    icon: ListChecks,
    title: "Automated Task Tracking",
    description: "AI monitors task progress, identifies blockers, and proactively suggests solutions before deadlines slip.",
  },
  {
    icon: Users,
    title: "Intelligent Resource Allocation",
    description: "Optimize team workloads automatically. AI balances assignments based on skills, availability, and project priorities.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automatic deadline adjustments, meeting scheduling, and timeline optimization based on real-time progress.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    description: "Instant visibility into project health, bottlenecks, and team performance with AI-generated reports.",
  },
  {
    icon: Zap,
    title: "Proactive Alerts",
    description: "Get notified about potential issues before they become problems. AI predicts delays and suggests mitigations.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "AI learns from completed projects to improve estimates, identify patterns, and optimize future workflows.",
  },
]

const stats = [
  { value: "94%", label: "On-Time Delivery Rate" },
  { value: "60%", label: "Efficiency Increase" },
  { value: "40+", label: "Hours Saved Weekly" },
  { value: "3x", label: "Project Throughput" },
]

export default function ProjectManagementAIPage() {
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
        <div className="max-w-6xl mx-auto">
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

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
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
              <ListChecks className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">AI Solution</span>
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
              <span className="block text-[#FDF8E8]">AI PROJECT</span>
              <motion.span
                className="block text-[#D4A84B]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Manager
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#F0D98C] max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Your intelligent project orchestrator that tracks deadlines, manages resources, and keeps your entire team aligned. Never miss a milestone or let a task slip through the cracks.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className="relative bg-[#0D6B4F]/30 rounded-2xl p-6 border border-[#D4A84B]/20 group-hover:border-[#D4A84B]/60 transition-all duration-500 text-center">
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-[#D4A84B]/0 via-[#D4A84B]/20 to-[#D4A84B]/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                    />
                    <div className="relative">
                      <div className="text-4xl md:text-5xl font-black text-[#D4A84B] mb-2">{stat.value}</div>
                      <div className="text-sm text-[#FDF8E8]/70 font-medium uppercase tracking-wide">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <motion.h2
              className="text-3xl md:text-5xl font-black text-[#FDF8E8] mb-4 text-center uppercase"
              whileHover={{ scale: 1.02 }}
            >
              Key Features
            </motion.h2>
            <p className="text-[#F0D98C] text-center mb-12 text-lg max-w-2xl mx-auto">
              Everything you need to manage projects intelligently and efficiently
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 20px 40px rgba(212,168,75,0.2)"
                  }}
                  style={{ perspective: 1000 }}
                >
                  <div className="relative bg-[#0D6B4F]/30 rounded-2xl p-6 border border-[#D4A84B]/20 group-hover:border-[#D4A84B]/60 transition-all duration-500 h-full">
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-[#D4A84B]/0 via-[#D4A84B]/20 to-[#D4A84B]/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                    />

                    <div className="relative">
                      <motion.div
                        className="inline-flex items-center justify-center p-3 bg-[#D4A84B]/10 rounded-xl mb-4 group-hover:bg-[#D4A84B]/30 transition-all"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="w-6 h-6 text-[#D4A84B]" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-[#FDF8E8] mb-2 group-hover:text-[#D4A84B] transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-[#FDF8E8]/70 leading-relaxed group-hover:text-[#FDF8E8]/90 transition-colors">
                        {feature.description}
                      </p>
                    </div>

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#D4A84B]/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <motion.h2
              className="text-3xl md:text-5xl font-black text-[#FDF8E8] mb-12 text-center uppercase"
            >
              How It Works
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Connect Your Tools",
                  description: "Integrate with your existing project management tools, calendars, and communication platforms.",
                },
                {
                  step: "02",
                  title: "AI Learns Your Workflow",
                  description: "Our AI analyzes your team's patterns, project history, and preferences to optimize recommendations.",
                },
                {
                  step: "03",
                  title: "Automate & Scale",
                  description: "Let AI handle task assignments, deadline tracking, and status updates while you focus on high-value work.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-[#0D6B4F]/30 rounded-2xl p-8 border border-[#D4A84B]/20 h-full">
                    <div className="text-6xl font-black text-[#D4A84B]/30 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-[#D4A84B] mb-3">{item.title}</h3>
                    <p className="text-[#FDF8E8]/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden"
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
                  <Target className="w-16 h-16 text-[#D4A84B]" />
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
                  Ready to Transform Your <span className="text-[#D4A84B]">Project Management</span>?
                </motion.h3>
                <p className="text-[#F0D98C] mb-8 text-lg">
                  Book a free consultation to see how AI-powered project management can streamline your operations.
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
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`cta-particle-${i}`}
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
        </div>
      </div>

      <Footer />
    </main>
  )
}
