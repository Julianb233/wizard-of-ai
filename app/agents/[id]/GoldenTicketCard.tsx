"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const GOLDEN_TICKET = "/images/925b8513-0ea4-4ae3-99a1.jpeg"

export default function GoldenTicketCard() {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateXValue = ((y - centerY) / centerY) * -15
    const rotateYValue = ((x - centerX) / centerX) * 15

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto md:mx-0"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      {/* Floating animation container */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
        style={{ perspective: "1000px" }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] rounded-2xl blur-xl opacity-0"
          animate={{
            opacity: isHovering ? [0.3, 0.6, 0.3] : 0.2,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 3D Card */}
        <motion.div
          className="relative cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-4 border-[#D4A84B] shadow-2xl shadow-[#D4A84B]/40">
            {/* Golden ticket image */}
            <img src={GOLDEN_TICKET} alt="Golden Ticket" className="w-full h-full object-cover" />

            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{
                transform: "translateX(-100%)",
              }}
              animate={{
                transform: isHovering ? ["translateX(-100%)", "translateX(100%)"] : "translateX(-100%)",
              }}
              transition={{
                duration: 1.5,
                repeat: isHovering ? Infinity : 0,
                repeatDelay: 0.5,
                ease: "easeInOut",
              }}
            />

            {/* Golden gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A84B]/20 via-transparent to-[#E8C55A]/20 mix-blend-overlay" />

            {/* Sparkle effects */}
            <motion.div
              className="absolute top-4 right-4 text-white text-3xl drop-shadow-lg"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-6 text-[#D4A84B] text-4xl drop-shadow-lg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ⭐
            </motion.div>

            {/* Edge glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#D4A84B]/50" />
          </div>
        </motion.div>

        {/* Reflection effect */}
        <div className="absolute -bottom-2 left-0 right-0 h-20 bg-gradient-to-b from-[#D4A84B]/20 to-transparent blur-xl opacity-50 rounded-full transform scale-x-75" />
      </motion.div>

      {/* Call to action text below card */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="text-center text-[#D4A84B] font-semibold mt-8 text-sm tracking-wide"
      >
        Hover to reveal the magic ✨
      </motion.p>
    </motion.div>
  )
}
