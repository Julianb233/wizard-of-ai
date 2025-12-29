"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Zap, Rocket, DollarSign, Users, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const challenges = [
  {
    icon: DollarSign,
    title: "Limited Budget",
    description: "Need enterprise capabilities but can't afford to hire a full team",
  },
  {
    icon: Users,
    title: "Small Team",
    description: "Wearing multiple hats and struggling to keep up with growth",
  },
  {
    icon: Rocket,
    title: "Speed to Market",
    description: "Need to move fast and iterate quickly to stay competitive",
  },
  {
    icon: Target,
    title: "Product-Market Fit",
    description: "Need data and insights to validate ideas and pivot when necessary",
  },
]

const solutions = [
  {
    title: "MVP Automation",
    description: "Launch faster with AI handling customer support, onboarding, and routine operations from day one. Focus on product, not processes.",
    impact: "Launch 3x faster",
  },
  {
    title: "Lean Operations",
    description: "Operate with a small team by automating sales, marketing, and customer success. Do what normally takes 20 people with a team of 5.",
    impact: "60% cost savings",
  },
  {
    title: "Data-Driven Growth",
    description: "AI analytics provide insights that typically require expensive data teams. Make smart decisions fast with automated reporting and predictions.",
    impact: "2x growth rate",
  },
  {
    title: "Scalable Infrastructure",
    description: "Build AI into your foundation so you can scale seamlessly. No technical debt, no messy migrations later.",
    impact: "Scale to 100k users",
  },
]

const services = [
  "AI-powered MVP development",
  "Automated customer onboarding",
  "AI chatbot customer support",
  "Growth analytics and insights",
  "Marketing automation workflows",
  "Sales pipeline automation",
]

export default function StartupsContent() {
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
              <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">For Startups</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-[#FDF8E8]">Build and Scale Faster</span>{" "}
              <span className="text-[#D4A84B]">With AI From Day One</span>
            </h1>
            <p className="text-[#F0D98C]/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Launch your startup with AI automation tools that let you compete with companies 10x your size. Move faster, operate leaner, and scale without burning cash on headcount.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/#apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(212,168,75,0.5)]"
              >
                Get Your Startup AI Strategy
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
              Startup Challenges <span className="text-[#D4A84B]">We Solve</span>
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
              AI-Powered <span className="text-[#D4A84B]">Startup Growth</span>
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

          {/* Services for Startups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-[#0D6B4F]/30 rounded-2xl p-8 md:p-12 border border-[#D4A84B]/20">
              <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-8 text-center">
                AI Tools for <span className="text-[#D4A84B]">Startups</span>
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
                Ready to Launch with AI?
              </h2>
              <p className="text-[#F0D98C]/80 text-lg mb-8 max-w-2xl mx-auto">
                Book a free consultation to discover how AI can help you launch faster, operate leaner, and scale to 100k+ users without massive headcount.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/#apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(212,168,75,0.5)]"
                >
                  Start Building with AI
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
