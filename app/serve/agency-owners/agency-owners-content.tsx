"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Rocket, Users, BarChart3, Clock, Zap, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const challenges = [
  {
    icon: Users,
    title: "Client Capacity Limits",
    description: "Unable to take on more clients without hiring expensive senior staff",
  },
  {
    icon: Clock,
    title: "Team Burnout",
    description: "Staff overwhelmed with repetitive tasks and tight deadlines",
  },
  {
    icon: BarChart3,
    title: "Inconsistent Results",
    description: "Client outcomes vary based on which team member handles the work",
  },
  {
    icon: TrendingUp,
    title: "Profit Margin Squeeze",
    description: "Labor costs rising faster than ability to increase client fees",
  },
]

const solutions = [
  {
    title: "Campaign Automation",
    description: "Automate ad creation, A/B testing, and optimization. AI generates copy variations, designs creative, and optimizes campaigns 24/7.",
    impact: "Handle 3x more campaigns",
  },
  {
    title: "Client Reporting",
    description: "Automated monthly reports with AI-generated insights and recommendations. What took 4 hours now takes 4 minutes.",
    impact: "Save 20 hours per week",
  },
  {
    title: "Content Production",
    description: "AI-powered content creation for social media, blogs, and email campaigns. Maintain brand voice across hundreds of clients.",
    impact: "10x content output",
  },
  {
    title: "Lead Qualification",
    description: "AI chatbots and scoring systems identify high-value prospects automatically, freeing your team to focus on closing deals.",
    impact: "2x close rate",
  },
]

const services = [
  "Marketing automation workflow setup",
  "AI-powered campaign management",
  "Automated client reporting systems",
  "Content creation and repurposing AI",
  "Lead generation and qualification automation",
  "White-label AI solutions for clients",
]

export default function AgencyOwnersContent() {
  return (
    <main className="relative min-h-screen bg-[#0A4D3C] overflow-x-hidden">
      <Header />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4A84B]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#1A8B6B]/20 rounded-full blur-[120px]" />
      </div>

      <div className="pt-40 md:pt-48 pb-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
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
              <Rocket className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">For Agency Owners</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-[#FDF8E8]">Serve 3x More Clients</span>{" "}
              <span className="text-[#D4A84B]">Without Hiring</span>
            </h1>
            <p className="text-[#F0D98C]/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Transform your agency with AI automation that handles repetitive work, scales your capacity, and delivers consistent results. Serve 3x more clients while increasing profit margins by 40%.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/#apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(212,168,75,0.5)]"
              >
                Scale Your Agency Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Common Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] text-center mb-12">
              Agency Growth <span className="text-[#D4A84B]">Bottlenecks</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-[#0D6B4F]/30 rounded-xl p-6 border border-[#D4A84B]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4A84B]/20 flex items-center justify-center flex-shrink-0">
                      <challenge.icon className="w-6 h-6 text-[#D4A84B]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#FDF8E8] mb-2">{challenge.title}</h3>
                      <p className="text-[#F0D98C]/70">{challenge.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How AI Solves This */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] text-center mb-12">
              AI-Powered <span className="text-[#D4A84B]">Agency Scaling</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gradient-to-br from-[#0D6B4F]/40 to-[#0D6B4F]/20 rounded-xl p-8 border border-[#D4A84B]/30"
                >
                  <h3 className="text-2xl font-bold text-[#FDF8E8] mb-3">{solution.title}</h3>
                  <p className="text-[#F0D98C]/80 mb-4">{solution.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 rounded-lg">
                    <Zap className="w-4 h-4 text-[#D4A84B]" />
                    <span className="text-[#D4A84B] font-bold text-sm">{solution.impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services for Agency Owners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-[#0D6B4F]/30 rounded-2xl p-8 md:p-12 border border-[#D4A84B]/20">
              <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-8 text-center">
                AI Solutions for <span className="text-[#D4A84B]">Agencies</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#D4A84B] flex-shrink-0" />
                    <span className="text-[#FDF8E8]">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#0D6B4F]/50 to-[#0D6B4F]/30 rounded-2xl p-12 border-2 border-[#D4A84B]/30">
              <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-4">
                Ready to Scale Your Agency?
              </h2>
              <p className="text-[#F0D98C]/80 text-lg mb-8 max-w-2xl mx-auto">
                Book a free strategy session to discover how AI automation can triple your client capacity while increasing your profit margins by 40%.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/#apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(212,168,75,0.5)]"
                >
                  Get Your Agency Growth Plan
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
