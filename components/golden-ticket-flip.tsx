"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

const PORTRAIT_URL = "/images/e52f0172-aad3-4ca1-ad35.jpeg"
const GOLDEN_TICKET_URL = "/images/d344cd36-7178-4ad5-8fb1.jpeg"

const sparkles = [
  { left: "5%", top: "15%", delay: 0, size: "lg" },
  { left: "92%", top: "20%", delay: 0.4, size: "lg" },
  { left: "10%", top: "75%", delay: 0.8, size: "lg" },
  { left: "88%", top: "80%", delay: 1.2, size: "lg" },
  { left: "50%", top: "5%", delay: 0.3, size: "md" },
  { left: "95%", top: "50%", delay: 0.7, size: "lg" },
  { left: "3%", top: "45%", delay: 0.5, size: "lg" },
  { left: "75%", top: "10%", delay: 1.0, size: "md" },
  { left: "25%", top: "90%", delay: 0.6, size: "lg" },
  { left: "85%", top: "65%", delay: 0.9, size: "lg" },
  { left: "15%", top: "30%", delay: 0.2, size: "md" },
  { left: "70%", top: "35%", delay: 1.1, size: "lg" },
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

export function GoldenTicketFlip() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [hasFlipped, setHasFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  // Reversed: Start showing Golden Ticket (180deg), scroll reveals Julian (0deg)
  // Slower + smoother flip (less "spinning" on small scrolls)
  const flipProgress = useTransform(scrollYProgress, [0.05, 0.45], [180, 0])
  // Text reveal starts earlier so the bio actually shows up
  const textOpacity = useTransform(scrollYProgress, [0.28, 0.4], [0, 1])
  const textY = useTransform(scrollYProgress, [0.28, 0.4], [30, 0])

  useEffect(() => {
    if (!isMounted) return
    const unsubscribe = scrollYProgress.on("change", (v) => {
      // Flip is complete when Julian is revealed (match slower flip)
      setHasFlipped(v > 0.45)
    })
    return unsubscribe
  }, [scrollYProgress, isMounted])

  if (!isMounted) {
    return (
      <section ref={sectionRef} className="relative h-[200vh] bg-[#0A4D3C]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#D4A84B] border-t-transparent rounded-full animate-spin" />
        </div>
      </section>
    )
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-[200vh] overflow-x-hidden overflow-y-visible scroll-mt-24 pb-[28vh]"
      style={{
        background: "linear-gradient(180deg, #0A4D3C 0%, #0D6B4F 30%, #0D6B4F 70%, #0A4D3C 100%)",
      }}
    >
      <AnimatePresence>
        {isMounted &&
          sparkles.map((sparkle, i) => (
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

      {/* Glow behind card */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[750px] md:h-[750px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212, 168, 75, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="sticky top-0 h-screen flex items-start justify-center px-4 pt-16 md:pt-20">
        {/* Persistent section label (lowered below header) */}
        <motion.div
          className="absolute top-24 md:top-28 left-0 right-0 z-30 flex justify-center px-4 pointer-events-none"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="px-5 py-2 rounded-full border border-[#D4A84B]/30 bg-[#0A4D3C]/55 backdrop-blur-md">
            <span
              className="text-[#D4A84B] font-black tracking-[0.28em] uppercase text-xs md:text-sm"
              style={{ textShadow: "0 0 30px rgba(212, 168, 75, 0.55)" }}
            >
              This is your golden ticket
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative cursor-pointer"
          style={{
            perspective: 1200,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setMousePosition({ x: 0, y: 0 })
          }}
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="relative w-[360px] h-[240px] md:w-[800px] md:h-[520px] lg:w-[900px] lg:h-[580px]"
            style={{
              transformStyle: "preserve-3d",
              rotateY: flipProgress,
            }}
            animate={{
              // Keep hover tilt subtle and avoid fighting the scroll-driven flip rotation.
              rotateX: isHovered ? mousePosition.y * -8 : 0,
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Front - Portrait */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                border: "4px solid #D4A84B",
                boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 50px rgba(212, 168, 75, 0.3)",
              }}
            >
              <img
                src={PORTRAIT_URL || "/placeholder.svg"}
                alt="Julian Bradley"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              {/* Yellow gradient to blend with yellow brick road */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/30 via-[#D4A84B]/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D3C]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p
                  className="text-[#FDF8E8]/90 text-sm md:text-base font-medium tracking-widest uppercase mb-1"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
                >
                  This is
                </p>
                <p
                  className="text-[#D4A84B] text-2xl md:text-4xl font-black uppercase tracking-wide"
                  style={{ textShadow: "0 2px 15px rgba(0,0,0,0.8), 0 0 30px rgba(212,168,75,0.4)" }}
                >
                  Julian Bradley
                </p>
                <p
                  className="text-[#FDF8E8] text-base md:text-xl mt-1 font-semibold italic"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
                >
                  My AI Solutions Are the Golden Ticket
                </p>
              </div>
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              />
            </div>

            {/* Back - Golden Ticket */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 80px rgba(212, 168, 75, 0.4)",
              }}
            >
              <img
                src={GOLDEN_TICKET_URL || "/placeholder.svg"}
                alt="Golden Ticket - Admit One"
                className="w-full h-full object-contain bg-transparent"
                crossOrigin="anonymous"
              />
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.5 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bio below card with parallax word highlighting - LARGE like MissionSection - moved down further */}
        <motion.div
          className="absolute bottom-10 md:bottom-12 text-center px-6 md:px-12 max-w-6xl w-full mx-auto z-40 pointer-events-none"
          style={{
            opacity: textOpacity,
            y: textY,
          }}
        >
          <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[1.2] flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-2">
            <BioWord word="YOUR" highlight={false} scrollYProgress={scrollYProgress} startProgress={0.35} endProgress={0.47} />
            <BioWord word="GOLDEN" highlight={true} scrollYProgress={scrollYProgress} startProgress={0.37} endProgress={0.49} />
            <BioWord word="TICKET" highlight={true} scrollYProgress={scrollYProgress} startProgress={0.39} endProgress={0.51} />
            <BioWord word="TO" highlight={false} scrollYProgress={scrollYProgress} startProgress={0.41} endProgress={0.53} />
            <BioWord word="AI" highlight={true} scrollYProgress={scrollYProgress} startProgress={0.43} endProgress={0.55} />
            <BioWord word="TRANSFORMATION" highlight={true} scrollYProgress={scrollYProgress} startProgress={0.45} endProgress={0.57} />
          </div>

          {/* Spacer */}
          <div className="h-8 md:h-12 lg:h-16" />

          {/* Bio line 1 - word-by-word style like MissionSection */}
          <div className="text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.3] flex flex-wrap justify-center gap-x-2 md:gap-x-3 gap-y-1 max-w-5xl mx-auto">
            <BioWord word="HELPING" highlight={false} scrollYProgress={scrollYProgress} startProgress={0.47} endProgress={0.59} />
            <BioWord word="BUSINESS" highlight={true} scrollYProgress={scrollYProgress} startProgress={0.49} endProgress={0.61} />
            <BioWord word="OWNERS," highlight={true} scrollYProgress={scrollYProgress} startProgress={0.51} endProgress={0.63} />
            <BioWord word="EXECUTIVES" highlight={true} scrollYProgress={scrollYProgress} startProgress={0.53} endProgress={0.65} />
            <BioWord word="&" highlight={false} scrollYProgress={scrollYProgress} startProgress={0.55} endProgress={0.67} />
            <BioWord word="CREATORS" highlight={true} scrollYProgress={scrollYProgress} startProgress={0.57} endProgress={0.69} />
            <BioWord word="HARNESS" highlight={false} scrollYProgress={scrollYProgress} startProgress={0.59} endProgress={0.71} />
            <BioWord word="AI" highlight={true} scrollYProgress={scrollYProgress} startProgress={0.61} endProgress={0.73} />
            <BioWord word="TO" highlight={false} scrollYProgress={scrollYProgress} startProgress={0.63} endProgress={0.75} />
            <BioWord word="TRANSFORM" highlight={true} scrollYProgress={scrollYProgress} startProgress={0.65} endProgress={0.77} />
            <BioWord word="&" highlight={false} scrollYProgress={scrollYProgress} startProgress={0.67} endProgress={0.79} />
            <BioWord word="SCALE." highlight={true} scrollYProgress={scrollYProgress} startProgress={0.69} endProgress={0.81} />
          </div>

          {/* Spacer */}
          <div className="h-6 md:h-10 lg:h-12" />

          {/* Bio paragraphs - descriptive text */}
          <motion.div
            className="max-w-4xl mx-auto space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hasFlipped ? 1 : 0, y: hasFlipped ? 0 : 20 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <p
              className="text-[#FDF8E8]/90 text-base md:text-xl lg:text-2xl leading-relaxed"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            >
              Julian Bradley helps <span className="text-[#D4A84B] font-bold">business owners</span>, <span className="text-[#D4A84B] font-bold">executives</span>, and <span className="text-[#D4A84B] font-bold">content creators</span> harness the power of AI to transform their operations and scale their impact.
            </p>
            <p
              className="text-[#FDF8E8]/80 text-sm md:text-lg lg:text-xl leading-relaxed"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            >
              Through platforms like <span className="text-[#D4A84B] font-semibold">BottleneckBots</span> and <span className="text-[#D4A84B] font-semibold">Exactech AI</span>, Julian automates repetitive tasks, builds intelligent workflows, and gives you back your most valuable resource: <span className="italic">time</span>.
            </p>
            <p
              className="text-[#F0D98C] text-sm md:text-base lg:text-lg font-medium"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            >
              Stop working harder. Start working smarter. Let AI handle the bottlenecks.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A4D3C] to-transparent pointer-events-none z-10" />
    </section>
  )
}

// Bio word with animated highlight effect - matching MissionSection styling
function BioWord({
  word,
  highlight,
  scrollYProgress,
  startProgress,
  endProgress,
}: {
  word: string
  highlight: boolean
  scrollYProgress: any
  startProgress: number
  endProgress: number
}) {
  const opacity = useTransform(
    scrollYProgress,
    [startProgress - 0.08, startProgress, endProgress, endProgress + 0.15],
    [0.35, 1, 1, highlight ? 1 : 0.85],
  )

  const scale = useTransform(scrollYProgress, [startProgress - 0.03, startProgress, startProgress + 0.03], [1, 1.08, 1])

  const y = useTransform(scrollYProgress, [startProgress - 0.08, startProgress], [15, 0])

  const textColor = highlight ? "text-[#D4A84B]" : "text-white"
  const glowClass = highlight ? "text-glow-gold" : ""

  return (
    <motion.span
      className={`inline-block ${textColor} ${glowClass} ${highlight ? "font-brier" : ""}`}
      style={{
        opacity,
        scale,
        y,
      }}
    >
      {word}
    </motion.span>
  )
}
