"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ShoppingCart, Heart, TrendingUp, Star, MessageCircle, Sparkles, CheckCircle, ArrowRight, Gift, Users, Zap } from "lucide-react"
import Link from "next/link"

const b2cChallenges = [
  {
    icon: Users,
    title: "High Customer Expectations",
    description: "Consumers expect instant, personalized responses 24/7 across all channels",
  },
  {
    icon: ShoppingCart,
    title: "Cart Abandonment",
    description: "Losing sales because customers leave without completing purchases",
  },
  {
    icon: Heart,
    title: "Customer Retention",
    description: "Keeping customers engaged and coming back in a competitive market",
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Monitoring and responding to customer feedback across platforms",
  },
]

const b2cSolutions = [
  {
    title: "AI Customer Support",
    description: "24/7 intelligent chatbots that handle inquiries, process returns, and resolve issues instantly with a human touch.",
    impact: "90% faster response time",
    icon: MessageCircle,
  },
  {
    title: "Smart Personalization",
    description: "AI-powered product recommendations and personalized marketing that increases conversion rates and average order value.",
    impact: "35% higher conversions",
    icon: Sparkles,
  },
  {
    title: "Automated Recovery",
    description: "Intelligent cart abandonment emails, SMS reminders, and retargeting that brings customers back to complete purchases.",
    impact: "Recover 25% of lost sales",
    icon: ShoppingCart,
  },
  {
    title: "Loyalty Automation",
    description: "AI-driven loyalty programs, personalized rewards, and engagement campaigns that keep customers coming back.",
    impact: "2x customer lifetime value",
    icon: Gift,
  },
]

const b2cServices = [
  "E-commerce chatbot implementation",
  "Personalized product recommendation engines",
  "Automated email and SMS marketing",
  "Cart abandonment recovery workflows",
  "Customer feedback and review automation",
  "Social media engagement bots",
  "Dynamic pricing optimization",
  "Inventory and demand forecasting",
]

export default function B2CContent() {
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
              <ShoppingCart className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">B2C AI Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-[#FDF8E8]">AI-Powered</span>{" "}
              <span className="text-[#D4A84B]">Customer Experience</span>
            </h1>
            <p className="text-[#F0D98C]/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Delight your customers with personalized experiences at scale. AI automation for e-commerce and consumer businesses that increases sales, reduces support costs, and builds loyalty.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/#apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(212,168,75,0.5)]"
              >
                Get Your B2C AI Strategy
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* B2C Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] text-center mb-12">
              Consumer Business <span className="text-[#D4A84B]">Challenges We Solve</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {b2cChallenges.map((challenge, index) => (
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

          {/* B2C Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] text-center mb-12">
              AI Solutions for <span className="text-[#D4A84B]">Consumer Businesses</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {b2cSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gradient-to-br from-[#0D6B4F]/40 to-[#0D6B4F]/20 rounded-xl p-8 border border-[#D4A84B]/30"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#D4A84B]/20 flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-[#D4A84B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FDF8E8] mb-3">{solution.title}</h3>
                  <p className="text-[#F0D98C]/80 mb-4">{solution.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-[#D4A84B]" />
                    <span className="text-[#D4A84B] font-bold text-sm">{solution.impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* B2C Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-[#0D6B4F]/30 rounded-2xl p-8 md:p-12 border border-[#D4A84B]/20">
              <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-8 text-center">
                E-Commerce & Retail <span className="text-[#D4A84B]">AI Services</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {b2cServices.map((service, index) => (
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
                Ready to Delight Your Customers?
              </h2>
              <p className="text-[#F0D98C]/80 text-lg mb-8 max-w-2xl mx-auto">
                Book a free strategy session to discover how AI can increase your conversions by 35% and build lasting customer loyalty.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/#apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(212,168,75,0.5)]"
                >
                  Book Your Free Consultation
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
