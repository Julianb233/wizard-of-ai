"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mic, Tv, Users, Building2, Send, CheckCircle, Sparkles, GraduationCap } from "lucide-react"
import Link from "next/link"

type OpportunityType = "podcast" | "media" | "speaking" | "coaching" | null

const speakingTopics = [
  "AI for Business Transformation",
  "The Future of Work with AI",
  "Building AI-Powered Systems",
  "Automation & Efficiency",
  "AI Strategy for Executives",
  "Content Creation with AI",
  "AI in Marketing & Sales",
  "Custom Topic (describe below)",
]

const employeeRanges = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees",
]

const mediaTypes = [
  "TV News Segment",
  "Morning Show",
  "Documentary",
  "News Interview",
  "Panel Discussion",
  "Expert Commentary",
  "Other",
]

const podcastFormats = [
  "Interview Style",
  "Co-host Episode",
  "Panel Discussion",
  "Q&A Session",
  "Educational Deep Dive",
  "Other",
]

// Sparkles animation
const sparkles = [
  { left: "5%", top: "15%", delay: 0, size: "lg" },
  { left: "92%", top: "20%", delay: 0.5, size: "md" },
  { left: "8%", top: "75%", delay: 0.3, size: "lg" },
  { left: "88%", top: "70%", delay: 0.8, size: "md" },
  { left: "50%", top: "8%", delay: 0.2, size: "sm" },
]

const getSparkleSize = (size: string) => {
  switch (size) {
    case "lg":
      return "w-4 h-4 md:w-6 md:h-6"
    case "md":
      return "w-3 h-3 md:w-4 md:h-4"
    default:
      return "w-2 h-2 md:w-3 md:h-3"
  }
}

export default function WorkWithJulianPage() {
  const [selectedType, setSelectedType] = useState<OpportunityType>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Podcast form state
  const [podcastForm, setPodcastForm] = useState({
    name: "",
    email: "",
    podcastName: "",
    podcastUrl: "",
    format: "",
    audienceSize: "",
    proposedTopics: "",
    proposedDate: "",
    additionalInfo: "",
  })

  // Media form state
  const [mediaForm, setMediaForm] = useState({
    name: "",
    email: "",
    organization: "",
    mediaType: "",
    showName: "",
    airDate: "",
    topicFocus: "",
    additionalInfo: "",
  })

  // Speaking form state
  const [speakingForm, setSpeakingForm] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    employeeCount: "",
    eventType: "",
    eventDate: "",
    location: "",
    topic: "",
    customTopic: "",
    budget: "",
    additionalInfo: "",
  })

  // Coaching form state
  const [coachingForm, setCoachingForm] = useState({
    name: "",
    email: "",
    goals: "",
    timeline: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setSelectedType(null)
    setIsSubmitted(false)
    setPodcastForm({
      name: "",
      email: "",
      podcastName: "",
      podcastUrl: "",
      format: "",
      audienceSize: "",
      proposedTopics: "",
      proposedDate: "",
      additionalInfo: "",
    })
    setMediaForm({
      name: "",
      email: "",
      organization: "",
      mediaType: "",
      showName: "",
      airDate: "",
      topicFocus: "",
      additionalInfo: "",
    })
    setSpeakingForm({
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      employeeCount: "",
      eventType: "",
      eventDate: "",
      location: "",
      topic: "",
      customTopic: "",
      budget: "",
      additionalInfo: "",
    })
    setCoachingForm({
      name: "",
      email: "",
      goals: "",
      timeline: "",
    })
  }

  const opportunityCards = [
    {
      type: "podcast" as OpportunityType,
      icon: Mic,
      title: "Podcast Guest",
      description: "Invite Julian to share AI insights on your podcast",
      color: "#D4A84B",
    },
    {
      type: "media" as OpportunityType,
      icon: Tv,
      title: "TV & Media",
      description: "Book Julian for news segments, TV shows, or interviews",
      color: "#8B5CF6",
    },
    {
      type: "speaking" as OpportunityType,
      icon: Users,
      title: "Speaking Engagement",
      description: "Have Julian speak at your company or event",
      color: "#10B981",
    },
    {
      type: "coaching" as OpportunityType,
      icon: GraduationCap,
      title: "Coaching",
      description: "Work with Julian directly to level up your AI skills and systems",
      color: "#F59E0B",
    },
  ]

  return (
    <main className="relative min-h-screen bg-[#0A4D3C] overflow-x-hidden">
      <Header />

      {/* Golden Sparkles */}
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

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4A84B]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#1A8B6B]/20 rounded-full blur-[120px]" />
      </div>

      <div className="pt-40 md:pt-48 pb-20 px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#D4A84B] hover:text-[#E8C55A] transition-all duration-300 mb-8 group"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
              <span className="font-medium group-hover:underline underline-offset-4">Back to Home</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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
              <Sparkles className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">Media & Speaking</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4">
              <span className="text-[#FDF8E8]">Work With</span>{" "}
              <span className="text-[#D4A84B]">Julian</span>
            </h1>
            <p className="text-[#F0D98C]/80 text-lg md:text-xl max-w-2xl mx-auto">
              Invite Julian Bradley to share AI insights on your podcast, TV show, or at your next corporate event
            </p>
          </motion.div>

          {/* Success State */}
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-16"
              >
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#D4A84B]/20 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(212,168,75,0.3)",
                      "0 0 50px rgba(212,168,75,0.5)",
                      "0 0 30px rgba(212,168,75,0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-12 h-12 text-[#D4A84B]" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-4">Request Submitted!</h2>
                <p className="text-[#F0D98C]/80 text-lg mb-8 max-w-md mx-auto">
                  Thank you for your interest! Julian's team will review your request and get back to you within 2-3 business days.
                </p>
                <motion.button
                  onClick={resetForm}
                  className="px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,168,75,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Another Request
                </motion.button>
              </motion.div>
            ) : !selectedType ? (
              /* Opportunity Selection Cards */
              <motion.div
                key="selection"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {opportunityCards.map((card, index) => (
                  <motion.button
                    key={card.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedType(card.type)}
                    className="relative group text-left p-8 rounded-2xl bg-[#0D6B4F]/30 border-2 border-[#D4A84B]/20 hover:border-[#D4A84B]/60 transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: `0 0 40px ${card.color}30`,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${card.color}20` }}
                    >
                      <card.icon className="w-8 h-8" style={{ color: card.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#FDF8E8] mb-2">{card.title}</h3>
                    <p className="text-[#F0D98C]/70">{card.description}</p>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[#D4A84B] text-2xl">→</span>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              /* Forms */
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Back to selection */}
                <motion.button
                  onClick={() => setSelectedType(null)}
                  className="inline-flex items-center gap-2 text-[#D4A84B] hover:text-[#E8C55A] transition-colors mb-8"
                  whileHover={{ x: -4 }}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to options</span>
                </motion.button>

                {/* Podcast Form */}
                {selectedType === "podcast" && (
                  <div className="bg-[#0D6B4F]/30 rounded-2xl p-8 border border-[#D4A84B]/20">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#D4A84B]/20 flex items-center justify-center">
                        <Mic className="w-7 h-7 text-[#D4A84B]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#FDF8E8]">Podcast Guest Request</h2>
                        <p className="text-[#F0D98C]/70">Tell us about your podcast</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Your Name *</label>
                          <input
                            type="text"
                            value={podcastForm.name}
                            onChange={(e) => setPodcastForm({ ...podcastForm, name: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Email Address *</label>
                          <input
                            type="email"
                            value={podcastForm.email}
                            onChange={(e) => setPodcastForm({ ...podcastForm, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="john@podcast.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Podcast Name *</label>
                          <input
                            type="text"
                            value={podcastForm.podcastName}
                            onChange={(e) => setPodcastForm({ ...podcastForm, podcastName: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="The AI Business Show"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Podcast URL</label>
                          <input
                            type="url"
                            value={podcastForm.podcastUrl}
                            onChange={(e) => setPodcastForm({ ...podcastForm, podcastUrl: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="https://yourpodcast.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Episode Format *</label>
                          <select
                            value={podcastForm.format}
                            onChange={(e) => setPodcastForm({ ...podcastForm, format: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] focus:border-[#D4A84B] focus:outline-none transition-colors"
                            required
                          >
                            <option value="">Select format...</option>
                            {podcastFormats.map((format) => (
                              <option key={format} value={format}>{format}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Audience Size</label>
                          <input
                            type="text"
                            value={podcastForm.audienceSize}
                            onChange={(e) => setPodcastForm({ ...podcastForm, audienceSize: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="e.g., 10,000 downloads per episode"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Proposed Topics *</label>
                        <textarea
                          value={podcastForm.proposedTopics}
                          onChange={(e) => setPodcastForm({ ...podcastForm, proposedTopics: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors resize-none"
                          rows={3}
                          placeholder="What topics would you like Julian to discuss?"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Proposed Recording Date</label>
                        <input
                          type="text"
                          value={podcastForm.proposedDate}
                          onChange={(e) => setPodcastForm({ ...podcastForm, proposedDate: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                          placeholder="e.g., January 2025, flexible dates"
                        />
                      </div>

                      <div>
                        <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Additional Information</label>
                        <textarea
                          value={podcastForm.additionalInfo}
                          onChange={(e) => setPodcastForm({ ...podcastForm, additionalInfo: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors resize-none"
                          rows={3}
                          placeholder="Anything else we should know?"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 30px rgba(212,168,75,0.5)" } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Podcast Request
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                )}

                {/* Media/TV Form */}
                {selectedType === "media" && (
                  <div className="bg-[#0D6B4F]/30 rounded-2xl p-8 border border-[#D4A84B]/20">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/20 flex items-center justify-center">
                        <Tv className="w-7 h-7 text-[#8B5CF6]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#FDF8E8]">TV & Media Request</h2>
                        <p className="text-[#F0D98C]/70">Book Julian for your show or segment</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Your Name *</label>
                          <input
                            type="text"
                            value={mediaForm.name}
                            onChange={(e) => setMediaForm({ ...mediaForm, name: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="Jane Producer"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Email Address *</label>
                          <input
                            type="email"
                            value={mediaForm.email}
                            onChange={(e) => setMediaForm({ ...mediaForm, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="jane@network.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Organization/Network *</label>
                          <input
                            type="text"
                            value={mediaForm.organization}
                            onChange={(e) => setMediaForm({ ...mediaForm, organization: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="ABC News, CNN, etc."
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Media Type *</label>
                          <select
                            value={mediaForm.mediaType}
                            onChange={(e) => setMediaForm({ ...mediaForm, mediaType: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] focus:border-[#D4A84B] focus:outline-none transition-colors"
                            required
                          >
                            <option value="">Select type...</option>
                            {mediaTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Show/Segment Name</label>
                          <input
                            type="text"
                            value={mediaForm.showName}
                            onChange={(e) => setMediaForm({ ...mediaForm, showName: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="Good Morning America, etc."
                          />
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Proposed Air Date</label>
                          <input
                            type="text"
                            value={mediaForm.airDate}
                            onChange={(e) => setMediaForm({ ...mediaForm, airDate: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="e.g., January 15, 2025"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Topic Focus *</label>
                        <textarea
                          value={mediaForm.topicFocus}
                          onChange={(e) => setMediaForm({ ...mediaForm, topicFocus: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors resize-none"
                          rows={3}
                          placeholder="What AI topics would you like Julian to discuss?"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Additional Information</label>
                        <textarea
                          value={mediaForm.additionalInfo}
                          onChange={(e) => setMediaForm({ ...mediaForm, additionalInfo: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors resize-none"
                          rows={3}
                          placeholder="Segment length, format, other guests, etc."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 30px rgba(139,92,246,0.5)" } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Media Request
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                )}

                {/* Speaking Engagement Form */}
                {selectedType === "speaking" && (
                  <div className="bg-[#0D6B4F]/30 rounded-2xl p-8 border border-[#D4A84B]/20">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#10B981]/20 flex items-center justify-center">
                        <Building2 className="w-7 h-7 text-[#10B981]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#FDF8E8]">Speaking Engagement Request</h2>
                        <p className="text-[#F0D98C]/70">Book Julian for your company or event</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Your Name *</label>
                          <input
                            type="text"
                            value={speakingForm.name}
                            onChange={(e) => setSpeakingForm({ ...speakingForm, name: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Email Address *</label>
                          <input
                            type="email"
                            value={speakingForm.email}
                            onChange={(e) => setSpeakingForm({ ...speakingForm, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="you@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Company Name *</label>
                          <input
                            type="text"
                            value={speakingForm.company}
                            onChange={(e) => setSpeakingForm({ ...speakingForm, company: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="Acme Corporation"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Your Job Title</label>
                          <input
                            type="text"
                            value={speakingForm.jobTitle}
                            onChange={(e) => setSpeakingForm({ ...speakingForm, jobTitle: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="VP of Operations"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Number of Employees *</label>
                          <select
                            value={speakingForm.employeeCount}
                            onChange={(e) => setSpeakingForm({ ...speakingForm, employeeCount: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] focus:border-[#D4A84B] focus:outline-none transition-colors"
                            required
                          >
                            <option value="">Select company size...</option>
                            {employeeRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Event Type *</label>
                          <input
                            type="text"
                            value={speakingForm.eventType}
                            onChange={(e) => setSpeakingForm({ ...speakingForm, eventType: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="e.g., Company All-Hands, Leadership Summit"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Event Date</label>
                          <input
                            type="text"
                            value={speakingForm.eventDate}
                            onChange={(e) => setSpeakingForm({ ...speakingForm, eventDate: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="e.g., March 15, 2025"
                          />
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Location</label>
                          <input
                            type="text"
                            value={speakingForm.location}
                            onChange={(e) => setSpeakingForm({ ...speakingForm, location: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="e.g., San Francisco, CA or Virtual"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Topic *</label>
                        <select
                          value={speakingForm.topic}
                          onChange={(e) => setSpeakingForm({ ...speakingForm, topic: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] focus:border-[#D4A84B] focus:outline-none transition-colors"
                          required
                        >
                          <option value="">What would you like Julian to speak about?</option>
                          {speakingTopics.map((topic) => (
                            <option key={topic} value={topic}>{topic}</option>
                          ))}
                        </select>
                      </div>

                      {speakingForm.topic === "Custom Topic (describe below)" && (
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Custom Topic Details *</label>
                          <textarea
                            value={speakingForm.customTopic}
                            onChange={(e) => setSpeakingForm({ ...speakingForm, customTopic: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors resize-none"
                            rows={3}
                            placeholder="Describe the topic you'd like Julian to cover"
                            required
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Budget Range</label>
                        <input
                          type="text"
                          value={speakingForm.budget}
                          onChange={(e) => setSpeakingForm({ ...speakingForm, budget: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                          placeholder="e.g., $10,000 - $25,000"
                        />
                      </div>

                      <div>
                        <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Additional Information</label>
                        <textarea
                          value={speakingForm.additionalInfo}
                          onChange={(e) => setSpeakingForm({ ...speakingForm, additionalInfo: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors resize-none"
                          rows={3}
                          placeholder="Expected audience size, goals for the session, any specific challenges you want addressed, etc."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 30px rgba(16,185,129,0.5)" } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Speaking Request
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                )}

                {/* Coaching */}
                {selectedType === "coaching" && (
                  <div className="bg-[#0D6B4F]/30 rounded-2xl p-8 border border-[#D4A84B]/20">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/20 flex items-center justify-center">
                        <GraduationCap className="w-7 h-7 text-[#F59E0B]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#FDF8E8]">Coaching Request</h2>
                        <p className="text-[#F0D98C]/70">Tell us what you want to build and learn</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Your Name *</label>
                          <input
                            type="text"
                            value={coachingForm.name}
                            onChange={(e) => setCoachingForm({ ...coachingForm, name: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Email Address *</label>
                          <input
                            type="email"
                            value={coachingForm.email}
                            onChange={(e) => setCoachingForm({ ...coachingForm, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                            placeholder="you@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">What do you want to achieve? *</label>
                        <textarea
                          value={coachingForm.goals}
                          onChange={(e) => setCoachingForm({ ...coachingForm, goals: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors resize-none"
                          rows={4}
                          placeholder="Example: build an AI agent for lead gen, automate my ops, train my team..."
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-[#FDF8E8]/70 text-sm mb-2 font-medium">Timeline</label>
                        <input
                          type="text"
                          value={coachingForm.timeline}
                          onChange={(e) => setCoachingForm({ ...coachingForm, timeline: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/20 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/30 focus:border-[#D4A84B] focus:outline-none transition-colors"
                          placeholder="e.g., ASAP, next 30 days, Q1 2026"
                        />
                      </div>

                      <div className="flex flex-col md:flex-row gap-3">
                        <Link href="/coaching" className="w-full md:w-auto">
                          <button
                            type="button"
                            className="w-full px-6 py-3 rounded-xl bg-white/5 border border-[#D4A84B]/30 text-[#FDF8E8] font-bold hover:border-[#D4A84B]/60 transition-colors"
                          >
                            View Coaching Page
                          </button>
                        </Link>
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-3 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                          whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 30px rgba(212,168,75,0.5)" } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Request Coaching
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bio Section */}
          {!isSubmitted && !selectedType && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 text-center"
            >
              <div className="bg-[#0D6B4F]/20 rounded-2xl p-8 border border-[#D4A84B]/10">
                <h3 className="text-2xl font-bold text-[#FDF8E8] mb-4">About Julian Bradley</h3>
                <p className="text-[#F0D98C]/80 max-w-2xl mx-auto leading-relaxed">
                  Julian Bradley is a leading voice in AI business transformation, helping companies harness the power of artificial intelligence to scale their operations, automate workflows, and drive exponential growth. As the founder of AI Acrobatics and The Wizard of AI, Julian has helped hundreds of businesses implement AI solutions that deliver real results.
                </p>
                <p className="text-[#F0D98C]/70 max-w-2xl mx-auto leading-relaxed mt-4">
                  He’s delivered a TED Talk and has been speaking professionally for 10+ years, translating complex technology into clear business outcomes.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  {["AI Expert", "Business Strategist", "TED Talk Speaker", "10+ Years Speaking", "Keynote Speaker", "Podcast Guest"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-[#D4A84B]/10 border border-[#D4A84B]/20 rounded-full text-[#D4A84B] text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
