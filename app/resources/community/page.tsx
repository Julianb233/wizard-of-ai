"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Sparkles, Users, Globe, BookOpen, Zap, MessageCircle, Calendar, TrendingUp, Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

// 12 sparkles for magical effect
const sparkles = [
  { left: "5%", top: "12%", delay: 0, size: "lg" },
  { left: "92%", top: "18%", delay: 0.5, size: "md" },
  { left: "8%", top: "72%", delay: 0.3, size: "lg" },
  { left: "88%", top: "68%", delay: 0.8, size: "md" },
  { left: "50%", top: "8%", delay: 0.2, size: "sm" },
  { left: "95%", top: "42%", delay: 0.7, size: "lg" },
  { left: "3%", top: "48%", delay: 1.0, size: "md" },
  { left: "15%", top: "32%", delay: 0.4, size: "sm" },
  { left: "85%", top: "82%", delay: 0.9, size: "lg" },
  { left: "40%", top: "5%", delay: 1.1, size: "md" },
  { left: "70%", top: "55%", delay: 0.6, size: "sm" },
  { left: "25%", top: "88%", delay: 1.2, size: "md" },
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

const benefits = [
  {
    icon: Sparkles,
    title: "Exclusive AI Tips & Tricks",
    description: "Get insider knowledge and proven strategies to leverage AI in your business. Learn the latest techniques before they go mainstream.",
    gradient: "from-[#D4A84B]/20 to-[#E8C55A]/10",
  },
  {
    icon: Calendar,
    title: "Weekly Live Q&A Sessions",
    description: "Join interactive sessions where you can ask questions and get real-time answers from AI experts and fellow members.",
    gradient: "from-[#E8C55A]/20 to-[#D4A84B]/10",
  },
  {
    icon: MessageCircle,
    title: "Private Community Access",
    description: "Connect with like-minded entrepreneurs and AI enthusiasts. Share experiences, collaborate, and grow together.",
    gradient: "from-[#D4A84B]/20 to-[#E8C55A]/10",
  },
  {
    icon: Zap,
    title: "Early Access to New Tools",
    description: "Be the first to test cutting-edge AI tools and automations. Get exclusive beta access and shape the future of AI.",
    gradient: "from-[#E8C55A]/20 to-[#D4A84B]/10",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Founder",
    content: "This community transformed how I approach AI in my business. The weekly Q&As alone are worth their weight in gold.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "The exclusive tips and early access to tools have given us a competitive edge. Best investment I've made this year.",
    avatar: "MC",
  },
  {
    name: "Emma Rodriguez",
    role: "Startup CEO",
    content: "The network alone is invaluable. I've connected with amazing people and formed partnerships that are driving real growth.",
    avatar: "ER",
  },
]

// Animated counter component
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function CommunityPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "community-signup",
          name: "Community Member",
          email,
          message: "",
          submittedAt: new Date().toISOString(),
          source: "wizard-of-ai-community-page",
        }),
      })

      if (!response.ok) throw new Error("Failed to submit")
      setSubmitStatus("success")
      setEmail("")
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
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
            className="mb-20 text-center"
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
              <Users className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">Join 1000+ Members</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-tight mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(212,168,75,0.3)",
                  "0 0 40px rgba(212,168,75,0.5)",
                  "0 0 20px rgba(212,168,75,0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="block text-[#FDF8E8]">JOIN THE</span>
              <motion.span
                className="block text-[#D4A84B]"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                AI Revolution
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#F0D98C] max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Connect with fellow AI enthusiasts, get exclusive tips, access cutting-edge tools, and stay ahead of the curve in the rapidly evolving world of artificial intelligence.
            </motion.p>

            {/* Hero CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#join"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold text-lg rounded-xl transition-all duration-300 shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(212,168,75,0.6)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Community
                <Sparkles className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Users, stat: 1000, suffix: "+", label: "Active Members" },
                { icon: Globe, stat: 50, suffix: "+", label: "Countries" },
                { icon: BookOpen, stat: 100, suffix: "+", label: "Resources Shared" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative bg-[#0D6B4F]/30 rounded-2xl p-8 border border-[#D4A84B]/20 group-hover:border-[#D4A84B]/60 transition-all duration-500 text-center">
                    {/* Glow effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-[#D4A84B]/0 via-[#D4A84B]/20 to-[#D4A84B]/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />

                    <div className="relative">
                      <motion.div
                        className="inline-flex items-center justify-center p-4 bg-[#D4A84B]/10 rounded-2xl mb-4"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-8 h-8 text-[#D4A84B]" />
                      </motion.div>

                      <div className="text-5xl md:text-6xl font-black text-[#D4A84B] mb-2">
                        <AnimatedCounter target={item.stat} suffix={item.suffix} />
                      </div>

                      <div className="text-[#FDF8E8] font-bold text-lg uppercase tracking-wide">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <motion.h2
              className="text-3xl md:text-5xl font-black text-[#FDF8E8] mb-4 text-center uppercase"
              whileHover={{ scale: 1.02 }}
            >
              What You Get
            </motion.h2>
            <p className="text-[#F0D98C] text-center mb-12 text-lg max-w-2xl mx-auto">
              Membership includes exclusive benefits designed to accelerate your AI journey
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    rotateY: 5,
                    z: 50,
                  }}
                  style={{ perspective: 1000 }}
                >
                  <div className="relative bg-[#0D6B4F]/30 rounded-2xl p-8 border border-[#D4A84B]/20 group-hover:border-[#D4A84B]/60 transition-all duration-500 h-full">
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    />

                    {/* 3D Glow effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-[#D4A84B]/0 via-[#D4A84B]/30 to-[#D4A84B]/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    />

                    <div className="relative">
                      <motion.div
                        className="inline-flex items-center justify-center p-4 bg-[#D4A84B]/10 rounded-2xl mb-4 group-hover:bg-[#D4A84B]/30 transition-all"
                        whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <benefit.icon className="w-8 h-8 text-[#D4A84B]" />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-[#FDF8E8] mb-3 group-hover:text-[#D4A84B] transition-colors">
                        {benefit.title}
                      </h3>

                      <p className="text-[#FDF8E8]/70 leading-relaxed group-hover:text-[#FDF8E8]/90 transition-colors">
                        {benefit.description}
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
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <motion.h2
              className="text-3xl md:text-5xl font-black text-[#FDF8E8] mb-4 text-center uppercase"
              whileHover={{ scale: 1.02 }}
            >
              Member Success Stories
            </motion.h2>
            <p className="text-[#F0D98C] text-center mb-12 text-lg max-w-2xl mx-auto">
              See how our community members are transforming their businesses with AI
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative bg-[#0D6B4F]/30 rounded-2xl p-6 border border-[#D4A84B]/20 group-hover:border-[#D4A84B]/60 transition-all duration-500 h-full flex flex-col">
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-[#D4A84B]/0 via-[#D4A84B]/20 to-[#D4A84B]/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                    />

                    <div className="relative flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#D4A84B]/20 flex items-center justify-center border-2 border-[#D4A84B] font-bold text-[#D4A84B]">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-[#FDF8E8]">{testimonial.name}</div>
                          <div className="text-sm text-[#D4A84B]">{testimonial.role}</div>
                        </div>
                      </div>

                      <p className="text-[#FDF8E8]/80 leading-relaxed italic">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="relative mt-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          <Award className="w-5 h-5 text-[#D4A84B] fill-[#D4A84B]" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join Section */}
          <motion.div
            id="join"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24 relative overflow-hidden"
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

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <Sparkles className="w-16 h-16 text-[#D4A84B]" />
                </motion.div>

                <motion.h3
                  className="text-3xl md:text-5xl font-black text-[#FDF8E8] mb-4 uppercase tracking-wide"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(212,168,75,0.2)",
                      "0 0 30px rgba(212,168,75,0.4)",
                      "0 0 10px rgba(212,168,75,0.2)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Ready to Join?
                </motion.h3>

                <p className="text-[#F0D98C] mb-8 text-lg">
                  Enter your email below to get exclusive access to our private community and start your AI transformation today.
                </p>

                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#D4A84B]/20 border border-[#D4A84B] rounded-xl p-6 max-w-lg mx-auto mb-6"
                  >
                    <div className="flex items-center justify-center gap-3 text-[#D4A84B]">
                      <CheckCircle className="w-6 h-6" />
                      <span className="font-bold">Welcome to the community! Check your email.</span>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-4 bg-[#0A4D3C]/50 border border-[#D4A84B]/30 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/40 focus:outline-none focus:border-[#D4A84B] transition-all disabled:opacity-50"
                      required
                      disabled={isSubmitting}
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all duration-300 shadow-xl whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                      whileHover={!isSubmitting ? {
                        scale: 1.05,
                        boxShadow: "0 0 40px rgba(212,168,75,0.6)",
                      } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? "Joining..." : "Join Now"}
                    </motion.button>
                  </form>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm text-center mb-4"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#FDF8E8]/60">
                  {[
                    "Free to Join",
                    "No Credit Card Required",
                    "Cancel Anytime",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle className="w-4 h-4 text-[#D4A84B]" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`join-particle-${i}`}
                  className="absolute w-2 h-2 bg-[#D4A84B] rounded-full"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + (i % 3) * 30}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.3, 0.8],
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

          {/* Why Join Now Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-[#0D6B4F]/20 rounded-2xl p-8 border border-[#D4A84B]/20">
              <h3 className="text-2xl md:text-3xl font-black text-[#D4A84B] mb-6 text-center uppercase">
                Why Join Now?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "AI is evolving rapidly - stay ahead of the curve",
                  "Network with industry leaders and innovators",
                  "Get answers to your AI questions from experts",
                  "Access exclusive tools before they go public",
                ].map((reason, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="mt-1">
                      <TrendingUp className="w-5 h-5 text-[#D4A84B]" />
                    </div>
                    <p className="text-[#FDF8E8]/80">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
