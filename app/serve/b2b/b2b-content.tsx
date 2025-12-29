"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Building2, Users, TrendingUp, Target, Handshake, BarChart3, CheckCircle, ArrowRight, Mail, Calendar, FileText } from "lucide-react"
import Link from "next/link"

const b2bChallenges = [
  {
    icon: Users,
    title: "Long Sales Cycles",
    description: "B2B deals take months to close, requiring consistent follow-ups and relationship nurturing",
  },
  {
    icon: Target,
    title: "Lead Qualification",
    description: "Sorting through leads to find decision-makers wastes valuable sales team time",
  },
  {
    icon: Handshake,
    title: "Account Management",
    description: "Managing complex client relationships across multiple stakeholders is challenging",
  },
  {
    icon: BarChart3,
    title: "Proposal Generation",
    description: "Creating customized proposals and contracts is time-consuming and error-prone",
  },
]

const b2bSolutions = [
  {
    title: "AI-Powered Lead Scoring",
    description: "Automatically qualify and prioritize leads based on buying signals, company data, and engagement patterns to focus on high-value prospects.",
    impact: "3x more qualified leads",
    icon: Target,
  },
  {
    title: "Automated Sales Outreach",
    description: "Personalized email sequences and follow-ups that nurture prospects through your pipeline while your team focuses on closing deals.",
    impact: "50% faster deal velocity",
    icon: Mail,
  },
  {
    title: "Smart Meeting Scheduling",
    description: "AI assistants that handle scheduling, send reminders, prepare meeting briefs, and follow up with action items automatically.",
    impact: "Save 10+ hours/week",
    icon: Calendar,
  },
  {
    title: "Proposal Automation",
    description: "Generate customized proposals, contracts, and RFP responses in minutes instead of days with AI-powered document creation.",
    impact: "80% faster proposals",
    icon: FileText,
  },
]

const b2bServices = [
  "CRM automation and data enrichment",
  "AI-powered sales pipeline management",
  "Automated lead nurturing sequences",
  "Contract and proposal generation",
  "Account-based marketing automation",
  "Client health scoring and churn prediction",
  "Automated reporting and analytics",
  "Integration with enterprise tools (Salesforce, HubSpot)",
]

export default function B2BContent() {
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
              <Building2 className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">B2B AI Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-[#FDF8E8]">Enterprise AI for</span>{" "}
              <span className="text-[#D4A84B]">B2B Growth</span>
            </h1>
            <p className="text-[#F0D98C]/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Accelerate your B2B sales cycle with AI automation that qualifies leads, nurtures prospects, and closes deals faster. Purpose-built solutions for enterprise sales teams.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/#apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(212,168,75,0.5)]"
              >
                Get Your B2B AI Strategy
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* B2B Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] text-center mb-12">
              B2B Sales <span className="text-[#D4A84B]">Pain Points We Eliminate</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {b2bChallenges.map((challenge, index) => (
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

          {/* B2B Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] text-center mb-12">
              AI Solutions for <span className="text-[#D4A84B]">B2B Success</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {b2bSolutions.map((solution, index) => (
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

          {/* B2B Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-[#0D6B4F]/30 rounded-2xl p-8 md:p-12 border border-[#D4A84B]/20">
              <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-8 text-center">
                Enterprise B2B <span className="text-[#D4A84B]">AI Services</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {b2bServices.map((service, index) => (
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
                Ready to Accelerate Your B2B Sales?
              </h2>
              <p className="text-[#F0D98C]/80 text-lg mb-8 max-w-2xl mx-auto">
                Book a free strategy session to discover how AI can shorten your sales cycle by 50% and triple your qualified leads.
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
