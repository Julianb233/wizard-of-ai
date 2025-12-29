"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Lock, Sparkles, KeyRound } from "lucide-react"
import Link from "next/link"

const GOLDEN_TICKET_URL = "/images/d344cd36-7178-4ad5-8fb1.jpeg"

// Sparkles animation
const sparkles = [
  { left: "5%", top: "15%", delay: 0, size: "lg" },
  { left: "92%", top: "20%", delay: 0.5, size: "md" },
  { left: "8%", top: "75%", delay: 0.3, size: "lg" },
  { left: "88%", top: "70%", delay: 0.8, size: "md" },
  { left: "50%", top: "10%", delay: 0.2, size: "sm" },
  { left: "95%", top: "45%", delay: 0.7, size: "lg" },
  { left: "3%", top: "50%", delay: 1.0, size: "md" },
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

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Placeholder for authentication logic
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Login functionality coming soon! Golden Ticket Holders will have exclusive access to premium AI resources.")
    }, 1500)
  }

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
        <div className="max-w-lg mx-auto">
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

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Golden Ticket Image */}
            <motion.div
              className="relative w-full h-48 md:h-64 mb-8 rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(212, 168, 75, 0.3)",
              }}
              animate={{
                boxShadow: [
                  "0 20px 60px rgba(212, 168, 75, 0.3)",
                  "0 20px 80px rgba(212, 168, 75, 0.5)",
                  "0 20px 60px rgba(212, 168, 75, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img
                src={GOLDEN_TICKET_URL}
                alt="Golden Ticket"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A84B]/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.div>

            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/10 rounded-full mb-4 border border-[#D4A84B]/30"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(212,168,75,0.2)",
                    "0 0 30px rgba(212,168,75,0.4)",
                    "0 0 20px rgba(212,168,75,0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <KeyRound className="w-5 h-5 text-[#D4A84B]" />
                <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">Exclusive Access</span>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(212,168,75,0.3)",
                    "0 0 40px rgba(212,168,75,0.5)",
                    "0 0 20px rgba(212,168,75,0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-[#FDF8E8]">Golden Ticket</span>{" "}
                <span className="text-[#D4A84B]">Holders</span>
              </motion.h1>
              <p className="text-[#F0D98C]/80">
                Access your exclusive AI resources and community
              </p>
            </div>

            {/* Login Form */}
            <motion.div
              className="bg-[#0D6B4F]/30 rounded-2xl p-8 border border-[#D4A84B]/20"
              whileHover={{ boxShadow: "0 0 30px rgba(212,168,75,0.15)" }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors pr-12"
                      placeholder="Enter your password"
                      required
                      disabled={isSubmitting}
                    />
                    <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4A84B]/50" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-[#D4A84B]/30 bg-[#0A4D3C] text-[#D4A84B] focus:ring-[#D4A84B]" />
                    <span className="text-[#FDF8E8]/60">Remember me</span>
                  </label>
                  <a href="#" className="text-[#D4A84B] hover:text-[#E8C55A] transition-colors">Forgot password?</a>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 30px rgba(212,168,75,0.5)" } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Unlocking...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Access Portal
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-[#FDF8E8]/50 text-sm">
                  Don't have a Golden Ticket?{" "}
                  <Link href="/#apply" className="text-[#D4A84B] hover:text-[#E8C55A] font-medium transition-colors">
                    Book a Consultation
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Benefits Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-[#D4A84B]/60 text-sm uppercase tracking-wider mb-4">Golden Ticket Benefits</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Exclusive AI Tools", "Private Community", "Priority Support", "Training Resources"].map((benefit, i) => (
                  <motion.span
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="px-4 py-2 bg-[#D4A84B]/10 border border-[#D4A84B]/20 rounded-full text-[#F0D98C] text-sm"
                  >
                    {benefit}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
