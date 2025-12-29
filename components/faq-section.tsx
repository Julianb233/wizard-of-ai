"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const sparkles = [
  { left: "5%", top: "8%", delay: 0, size: "lg" },
  { left: "93%", top: "12%", delay: 0.4, size: "lg" },
  { left: "8%", top: "85%", delay: 0.7, size: "lg" },
  { left: "90%", top: "80%", delay: 1.0, size: "lg" },
  { left: "48%", top: "6%", delay: 0.2, size: "md" },
  { left: "95%", top: "45%", delay: 0.6, size: "lg" },
  { left: "4%", top: "50%", delay: 0.3, size: "lg" },
  { left: "72%", top: "90%", delay: 0.9, size: "md" },
  { left: "28%", top: "92%", delay: 0.5, size: "lg" },
]

const getSparkleSize = (size: string) => {
  switch (size) {
    case "lg":
      return "w-5 h-5 md:w-7 md:h-7"
    case "md":
      return "w-4 h-4 md:w-5 md:h-5"
    default:
      return "w-3 h-3 md:w-4 md:h-4"
  }
}

const faqs = [
  {
    question: "How long is the consultation?",
    answer: "Our discovery call is 30 minutes - just enough time to understand your business, identify key opportunities, and map out how AI can solve your specific challenges.",
  },
  {
    question: "What's included in the consultation?",
    answer: "You'll receive a comprehensive assessment of your current workflows, a custom AI implementation roadmap tailored to your business, and specific recommendations for automation opportunities that will have the highest impact on your operations.",
  },
  {
    question: "Is there a cost for the discovery call?",
    answer: "No! The initial discovery call is completely free. It's my way of understanding your needs and showing you the possibilities. No strings attached, no pressure - just pure value and insights for your business.",
  },
  {
    question: "What happens after the consultation?",
    answer: "Within 48 hours of our call, you'll receive a custom proposal outlining the specific AI solutions we discussed, implementation timelines, and investment options. You'll have everything you need to make an informed decision about transforming your business with AI.",
  },
  {
    question: "How do we schedule the consultation?",
    answer: "After you submit the application form below, I'll send you an email with a Calendly link where you can choose a time that works best for your schedule. It's that simple - just fill out the form and check your inbox!",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, index, isOpen, onClick }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-[#D4A84B]/20 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group hover:bg-[#0D6B4F]/20 transition-colors duration-300 px-4 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-bold text-[#FDF8E8] group-hover:text-[#D4A84B] transition-colors duration-300">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-[#D4A84B]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4">
              <p className="text-[#FDF8E8]/80 text-base md:text-lg leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative bg-[#0A4D3C] py-20 md:py-32 overflow-hidden">
      <AnimatePresence>
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
              repeat: Number.POSITIVE_INFINITY,
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
      </AnimatePresence>

      {/* Decorative swirls */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="swirl-gradient-faq" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A84B" />
              <stop offset="100%" stopColor="#E8C55A" />
            </linearGradient>
          </defs>
          <motion.path
            d="M100,10 Q150,50 140,100 T100,190 Q50,150 60,100 T100,10"
            fill="none"
            stroke="url(#swirl-gradient-faq)"
            strokeWidth="2"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#FDF8E8] leading-tight tracking-tight">
            Frequently Asked <span className="text-[#D4A84B]">Questions</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#F0D98C]/90 max-w-2xl mx-auto">
            Everything you need to know about working with The Wizard of AI
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="bg-[#0D6B4F]/30 backdrop-blur-sm rounded-2xl border border-[#D4A84B]/20 overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#FDF8E8]/60 text-lg">
            Still have questions? Let's discuss them on your free consultation call.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
