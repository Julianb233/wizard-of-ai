"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// Expanded agent images with both original and new cards
const AGENT_IMAGES = {
  // Original
  "lead-gen": "/lead-gen-machine.png",
  "support-bot": "/24-hour-support-bot.png",
  "appointment-setter": "/appointment-setter.png",
  "accountant": "/ai-accountant.png",
  // New
  "ai-chatbot": "/images/ai-chatbot-card.jpg",
  "content-integration": "/images/ai-content-card.jpg",
  "sales-catalog": "/images/sales-catalog-card.jpg",
  "project-manager": "/images/project-manager-card.jpg",
}

const sparkles = [
  { left: "5%", top: "8%", delay: 0, size: "lg" },
  { left: "93%", top: "12%", delay: 0.4, size: "lg" },
  { left: "8%", top: "82%", delay: 0.7, size: "lg" },
  { left: "90%", top: "78%", delay: 1.1, size: "lg" },
  { left: "48%", top: "3%", delay: 0.2, size: "md" },
  { left: "96%", top: "45%", delay: 0.6, size: "lg" },
  { left: "2%", top: "50%", delay: 0.3, size: "lg" },
  { left: "75%", top: "92%", delay: 0.9, size: "md" },
  { left: "20%", top: "20%", delay: 0.5, size: "lg" },
  { left: "60%", top: "60%", delay: 1.0, size: "lg" },
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

interface AIAgent {
  id: string
  name: string
  imageUrl: string
  description: string
  benefits: string[]
}

const agents: AIAgent[] = [
  // --- ORIGINAL AGENTS RESTORED (To ensure alignment) ---
  {
    id: "lead-gen",
    name: "Lead Gen Machine",
    imageUrl: AGENT_IMAGES["lead-gen"],
    description: "Your automated prospector that finds and qualifies leads while you sleep.",
    benefits: ["10x more qualified leads", "Automated outreach", "Smart lead scoring"],
  },
  {
    id: "support-bot",
    name: "24-Hour Support Bot",
    imageUrl: AGENT_IMAGES["support-bot"],
    description: "Instant answers for your customers, day or night, without hiring more staff.",
    benefits: ["Instant 24/7 responses", "Reduced support costs", "Human-like interaction"],
  },
  {
    id: "appointment-setter",
    name: "Appointment Setter",
    imageUrl: AGENT_IMAGES["appointment-setter"],
    description: "Fills your calendar with qualified meetings automatically.",
    benefits: ["No more phone tag", "Reduced no-shows", "Calendar sync"],
  },
  {
    id: "accountant",
    name: "AI Accountant",
    imageUrl: AGENT_IMAGES["accountant"],
    description: "Automates your bookkeeping and financial reporting with precision.",
    benefits: ["Real-time insights", "Tax-ready reports", "Expense tracking"],
  },
  // --- NEW AGENTS ---
  {
    id: "ai-chatbot",
    name: "AI Chatbot",
    imageUrl: AGENT_IMAGES["ai-chatbot"],
    description: "Intelligent customer service that handles inquiries, support, and sales 24/7.",
    benefits: ["Instant responses", "Multi-language support", "Seamless escalation"],
  },
  {
    id: "content-integration",
    name: "AI Content Integration",
    imageUrl: AGENT_IMAGES["content-integration"],
    description: "Automate your content pipeline from ideation to publishing across all platforms.",
    benefits: ["Consistent brand voice", "Cross-platform scheduling", "SEO optimization"],
  },
  {
    id: "sales-catalog",
    name: "Sales Catalog",
    imageUrl: AGENT_IMAGES["sales-catalog"],
    description: "Interactive AI sales assistant that guides customers to the perfect product.",
    benefits: ["Personalized recommendations", "Inventory sync", "Higher conversion rates"],
  },
  {
    id: "project-manager",
    name: "AI Project Manager",
    imageUrl: AGENT_IMAGES["project-manager"],
    description: "Keep projects on track with automated updates, task assignment, and progress tracking.",
    benefits: ["Automated reporting", "Deadline reminders", "Resource allocation"],
  },
]

function FlipCard({ agent, isActive }: { agent: AIAgent; isActive: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 150 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 150 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !isMounted || isFlipped) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] cursor-pointer flex-shrink-0"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          rotateX: isActive && isMounted && !isFlipped ? rotateX : 0,
          rotateY: isActive && isMounted && !isFlipped ? rotateY : 0,
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front - Image */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            border: "3px solid rgba(212, 168, 75, 0.5)",
            boxShadow: isActive
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 168, 75, 0.3)"
              : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <img
            src={agent.imageUrl || "/placeholder.svg"}
            alt={agent.name}
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
          {isMounted && isActive && !isFlipped && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            />
          )}
          {/* Tap to flip hint */}
          <div className="absolute bottom-3 left-0 right-0 text-center">
            <span className="text-[#FDF8E8]/70 text-xs bg-[#0A4D3C]/60 px-3 py-1 rounded-full">Tap to learn more</span>
          </div>
        </div>

        {/* Back - Description */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: "3px solid rgba(212, 168, 75, 0.6)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 168, 75, 0.3)",
            background: "linear-gradient(135deg, #0A4D3C 0%, #0D6B4F 50%, #1A8B6B 100%)",
          }}
        >
          <div>
            <h3 className="text-[#D4A84B] text-xl md:text-2xl font-bold mb-3">{agent.name}</h3>
            <p className="text-[#FDF8E8]/90 text-sm md:text-base mb-4">{agent.description}</p>
            <ul className="space-y-2">
              {agent.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[#FDF8E8]/80 text-sm">
                  <span className="text-[#D4A84B]">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={`/agents/${agent.id}`}
            className="block w-full py-3 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold text-center rounded-lg hover:scale-105 transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function AIAgents3DShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Card Width + Gap calculation for snappping
  // Mobile: 280px width + 16px gap (gap-4) = 296px
  // Desktop: 350px width + 16px gap = 366px
  const getCardWidth = () => (isMobile ? 296 : 366)

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return
    const cardWidth = getCardWidth()
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    })
    setActiveIndex(index)
  }

  const handleScroll = () => {
    if (!carouselRef.current) return
    const cardWidth = getCardWidth()
    const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth)
    setActiveIndex(Math.min(newIndex, agents.length - 1))
  }

  return (
    <section
      className="relative py-14 md:py-20"
      style={{ background: "linear-gradient(180deg, #0A4D3C 0%, #0D6B4F 100%)" }}
    >
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

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 md:w-96 md:h-96 bg-[#D4A84B]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#1A8B6B]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8 md:mb-14 px-4">
          <span className="text-[#D4A84B] text-[10px] md:text-xs font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-2 md:mb-3 block">
            Your 24/7 Digital Workforce
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#FDF8E8] uppercase tracking-tight mb-3 md:mb-4">
            Meet Your AI Agents
          </h2>
          <p className="text-[#FDF8E8]/60 max-w-md mx-auto text-xs md:text-sm">
            Each agent works tirelessly to grow your business. Tap to see how they can help you.
          </p>
        </div>

        <div className="hidden md:flex justify-center gap-4 mb-6">
          <button
            onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="p-2.5 rounded-full bg-[#0A4D3C]/50 border border-[#D4A84B]/30 hover:bg-[#0D6B4F]/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-[#D4A84B]" />
          </button>
          <button
            onClick={() => scrollToCard(Math.min(agents.length - 1, activeIndex + 1))}
            disabled={activeIndex === agents.length - 1}
            className="p-2.5 rounded-full bg-[#0A4D3C]/50 border border-[#D4A84B]/30 hover:bg-[#0D6B4F]/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5 text-[#D4A84B]" />
          </button>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 md:px-6 pb-4 scrollbar-hide touch-pan-x"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
          }}
          onScroll={handleScroll}
        >
          {/* Adjusted padding/margin for centering the first item */}
          <div className="flex-shrink-0 w-[calc(50vw-148px)] md:w-[calc(50vw-183px)]" />
          {agents.map((agent, index) => (
            <div key={agent.id} className="snap-center flex-shrink-0">
              <FlipCard agent={agent} isActive={index === activeIndex} />
            </div>
          ))}
          <div className="flex-shrink-0 w-[calc(50vw-148px)] md:w-[calc(50vw-183px)]" />
        </div>

        <div className="flex justify-center gap-1.5 md:gap-2 mt-5">
          {agents.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-6 md:w-8 bg-[#D4A84B]" : "w-1.5 md:w-2 bg-[#FDF8E8]/30 hover:bg-[#FDF8E8]/50"
                }`}
            />
          ))}
        </div>

        <div className="text-center mt-8 md:mt-14 px-4">
          <a
            href="#apply"
            className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold text-xs md:text-sm hover:scale-105 transition-transform shadow-lg shadow-[#D4A84B]/30"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  )
}
