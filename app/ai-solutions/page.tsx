"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Sparkles, Bot, ChevronRight } from "lucide-react"

const solutions = [
  {
    title: "Lead Gen Machine",
    description: "Turn cold traffic into qualified leads on autopilot with AI-driven outreach and follow-up.",
    href: "/agents/lead-gen",
  },
  {
    title: "24/7 Support Bot",
    description: "Instant answers, smart escalation, and happier customers—without expanding headcount.",
    href: "/agents/support-bot",
  },
  {
    title: "Appointment Setter",
    description: "An AI assistant that books qualified meetings, syncs calendars, and reduces no-shows.",
    href: "/agents/appointment",
  },
  {
    title: "AI Accountant",
    description: "Automated bookkeeping, expense tracking, and always-on financial visibility.",
    href: "/agents/accountant",
  },
  {
    title: "AI Project Manager",
    description: "Keep projects on track with automated updates, task orchestration, and progress reporting.",
    href: "/agents/project-manager",
  },
  {
    title: "AI Chatbot",
    description: "A custom chatbot trained on your business to support, qualify, and convert—24/7.",
    href: "/agents/ai-chatbot",
  },
] as const

export default function AISolutionsPage() {
  return (
    <main className="relative min-h-screen bg-[#0A4D3C] overflow-x-hidden">
      <Header />

      <div className="pt-32 md:pt-36 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#D4A84B] hover:text-[#E8C55A] transition-all duration-300 mb-8 group"
          >
            <motion.div whileHover={{ x: -4 }} transition={{ type: "spring", stiffness: 400 }}>
              <ArrowLeft className="w-5 h-5" />
            </motion.div>
            <span className="font-medium group-hover:underline underline-offset-4">Back to Home</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/10 rounded-full mb-6 border border-[#D4A84B]/30">
              <Sparkles className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">AI Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#FDF8E8]">
              Explore the <span className="text-[#D4A84B]">Systems</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-[#F0D98C]/90 max-w-3xl mx-auto">
              These are the core AI solutions we deploy for clients—each one has a dedicated page so you can see how it works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-[#D4A84B]/25 bg-[#0D6B4F]/30 p-7 hover:border-[#D4A84B]/55 transition-colors"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#FDF8E8]">{s.title}</h3>
                    <p className="mt-3 text-[#FDF8E8]/70 leading-relaxed">{s.description}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#D4A84B]/15 border border-[#D4A84B]/25">
                    <Bot className="w-6 h-6 text-[#D4A84B]" />
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 font-bold text-[#D4A84B] hover:text-[#E8C55A] transition-colors"
                  >
                    Learn how it works <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/#apply"
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-[#D4A84B] text-[#0A4D3C] font-black uppercase tracking-wider text-sm md:text-base hover:bg-[#E8C55A] transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

