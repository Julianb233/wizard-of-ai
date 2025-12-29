"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  Users,
  Sparkles,
  BookOpen,
  Rocket,
  DollarSign,
  BookMarked,
  KeyRound,
  ArrowUpRight,
  ExternalLink
} from "lucide-react"

const LOGO_URL = "/images/wizard-logo-long.png"
const PORTRAIT_URL = "/images/e52f0172-aad3-4ca1-ad35.jpeg"

// Golden sparkles for magical effect
const sparkles = [
  { left: "5%", top: "10%", delay: 0, size: "lg" },
  { left: "95%", top: "15%", delay: 0.5, size: "md" },
  { left: "8%", top: "85%", delay: 0.3, size: "lg" },
  { left: "92%", top: "80%", delay: 0.8, size: "md" },
  { left: "50%", top: "5%", delay: 0.2, size: "sm" },
  { left: "3%", top: "50%", delay: 1.0, size: "md" },
  { left: "97%", top: "45%", delay: 0.7, size: "lg" },
]

const getSparkleSize = (size: string) => {
  switch (size) {
    case "lg": return "w-4 h-4 md:w-5 md:h-5"
    case "md": return "w-3 h-3 md:w-4 md:h-4"
    default: return "w-2 h-2 md:w-3 md:h-3"
  }
}

// All links with icons and styling
const primaryLinks = [
  {
    label: "Book a Consultation",
    href: "/#apply",
    icon: Sparkles,
    description: "Start your AI transformation",
    isPrimary: true,
    external: false,
  },
]

const socialLinks = [
  {
    label: "YouTube",
    href: "https://youtube.com/@thewizardofai",
    icon: Youtube,
    description: "AI tutorials & insights",
    color: "hover:bg-red-600/20 hover:border-red-500/50",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/julianbradleytv",
    icon: Instagram,
    description: "@julianbradleytv",
    color: "hover:bg-pink-600/20 hover:border-pink-500/50",
    external: true,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/julianbradley",
    icon: Twitter,
    description: "Daily AI updates",
    color: "hover:bg-blue-500/20 hover:border-blue-400/50",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/julianbradley",
    icon: Linkedin,
    description: "Professional network",
    color: "hover:bg-blue-700/20 hover:border-blue-600/50",
    external: true,
  },
]

const siteLinks = [
  {
    label: "AI Apps & Agents",
    href: "/apps",
    icon: Rocket,
    description: "Explore AI solutions",
    external: false,
  },
  {
    label: "Community",
    href: "/resources/community",
    icon: Users,
    description: "Join the revolution",
    external: false,
  },
  {
    label: "Resources",
    href: "/resources",
    icon: BookOpen,
    description: "Free AI guides",
    external: false,
  },
  {
    label: "Pricing",
    href: "/pricing",
    icon: DollarSign,
    description: "Investment options",
    external: false,
  },
  {
    label: "The Book",
    href: "/book",
    icon: BookMarked,
    description: "AI mastery guide",
    external: false,
  },
  {
    label: "Golden Ticket Portal",
    href: "/login",
    icon: KeyRound,
    description: "Members only",
    external: false,
  },
]

export default function LinksPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  })

  // Spinning parallax effect for background
  // Increased scale to 1.75+ to prevent corners showing on mobile during rotation
  const swirlRotate = useTransform(scrollYProgress, [0, 1], [0, 60])
  const swirlScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.75, 1.6, 1.85])

  return (
    <div ref={pageRef} className="relative min-h-screen bg-[#0A4D3C] overflow-hidden">
      {/* Spinning Parallax Green Swirl Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          rotate: swirlRotate,
          scale: swirlScale,
        }}
      >
        <Image
          src="/green-swirl-bg.png"
          alt="Cosmic swirl background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-[#041f1a]/60 z-[1]" />

      {/* Vignette effect */}
      <div
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(4, 31, 26, 0.8) 100%)",
        }}
      />

      {/* Golden Sparkles */}
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={i}
          className={`fixed ${getSparkleSize(sparkle.size)} z-10 pointer-events-none`}
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-8 md:py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Image
            src={LOGO_URL}
            alt="The Wizard of AI"
            width={280}
            height={60}
            className="h-12 md:h-16 w-auto drop-shadow-lg"
            style={{ filter: "drop-shadow(0 2px 8px rgba(212,168,75,0.4))" }}
            priority
          />
        </motion.div>

        {/* Portrait with golden glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-6"
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 30px rgba(212,168,75,0.3)",
                "0 0 50px rgba(212,168,75,0.5)",
                "0 0 30px rgba(212,168,75,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <Image
            src={PORTRAIT_URL}
            alt="Julian Bradley - The Wizard of AI"
            width={120}
            height={120}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-3 border-[#D4A84B]/60"
          />
        </motion.div>

        {/* Name & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-black text-[#FDF8E8] uppercase tracking-wider mb-2">
            Julian Bradley
          </h1>
          <p className="text-[#D4A84B] text-sm md:text-base font-medium">
            The Wizard of AI
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-md mb-6"
        >
          {primaryLinks.map((link, i) => (
            <Link key={link.label} href={link.href}>
              <motion.div
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212,168,75,0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] rounded-2xl p-4 flex items-center justify-center gap-3 cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <link.icon className="w-6 h-6 text-[#0A4D3C]" />
                <div className="text-center">
                  <span className="text-[#0A4D3C] font-black text-lg uppercase tracking-wider">
                    {link.label}
                  </span>
                  <p className="text-[#0A4D3C]/70 text-xs font-medium">{link.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-md mb-4"
        >
          <p className="text-[#D4A84B]/60 text-xs font-bold uppercase tracking-widest text-center mb-3">
            Follow Me
          </p>
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative bg-[#0D6B4F]/30 backdrop-blur-sm border border-[#D4A84B]/20 rounded-xl p-3 flex items-center gap-3 transition-all ${link.color}`}
              >
                <link.icon className="w-5 h-5 text-[#D4A84B]" />
                <div className="flex-1 min-w-0">
                  <span className="text-[#FDF8E8] font-bold text-sm block truncate">{link.label}</span>
                  <span className="text-[#FDF8E8]/50 text-xs truncate block">{link.description}</span>
                </div>
                <ExternalLink className="w-3 h-3 text-[#D4A84B]/50" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Site Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full max-w-md"
        >
          <p className="text-[#D4A84B]/60 text-xs font-bold uppercase tracking-widest text-center mb-3">
            Explore
          </p>
          <div className="space-y-2">
            {siteLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
              >
                <Link href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4, boxShadow: "0 0 20px rgba(212,168,75,0.2)" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#0D6B4F]/30 backdrop-blur-sm border border-[#D4A84B]/20 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:border-[#D4A84B]/50 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#D4A84B]/10 flex items-center justify-center">
                      <link.icon className="w-5 h-5 text-[#D4A84B]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[#FDF8E8] font-bold text-sm block">{link.label}</span>
                      <span className="text-[#FDF8E8]/50 text-xs">{link.description}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#D4A84B]/50" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 text-center"
        >
          <Link href="/">
            <motion.span
              whileHover={{ color: "#D4A84B" }}
              className="text-[#FDF8E8]/40 text-xs font-medium hover:text-[#D4A84B] transition-colors cursor-pointer"
            >
              thewizardofai.com
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
