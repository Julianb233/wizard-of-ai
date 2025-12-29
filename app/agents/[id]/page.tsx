"use client"
import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, use } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const PROFILE_IMAGE = "/images/e52f0172-aad3-4ca1-ad35.jpeg"
const GOLDEN_TICKET = "/images/925b8513-0ea4-4ae3-99a1.jpeg"

function GoldenTicketCard() {
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

const agentData: Record<
  string,
  {
    name: string
    tagline: string
    description: string
    problemSolved: string
    howItWorks: string
    loomVideoUrl?: string
    imageUrl: string
    benefits: string[]
    features: { title: string; description: string }[]
    testimonial: { quote: string; author: string; company: string }
    pricing: string
  }
> = {
  // --- EXISTING AGENTS ---
  "lead-gen": {
    name: "Lead Gen Machine",
    tagline: "Never run out of qualified prospects again",
    description:
      "Our AI-powered Lead Gen Machine works 24/7 to identify, qualify, and score your ideal customers. Stop wasting time on cold leads that go nowhere.",
    problemSolved:
      "Business owners waste countless hours chasing cold leads and struggling to identify which leads are actually ready to buy.",
    howItWorks:
      "The Lead Gen Machine uses advanced AI algorithms to scan multiple data sources, identify your ideal customer profile, and automatically score leads.",
    imageUrl: "/lead-gen-machine.png",
    benefits: [
      "Generate 10x more qualified leads",
      "Automated prospecting while you sleep",
      "Smart lead scoring",
      "CRM integration",
      "Detailed analytics",
    ],
    features: [
      {
        title: "AI Prospecting",
        description: "Automatically finds ideal customers based on your criteria.",
      },
      {
        title: "Lead Scoring",
        description: "Ranks leads by conversion likelihood.",
      },
    ],
    testimonial: {
      quote: "We went from 50 leads per month to over 500. It paid for itself in week one.",
      author: "Sarah Chen",
      company: "TechStart Solutions",
    },
    pricing: "Starting at $997/month",
  },
  "support-bot": {
    name: "24-Hour Support Bot",
    tagline: "Never miss another customer inquiry",
    description:
      "Your customers expect instant answers. Our Support Bot handles inquiries 24/7 without human intervention.",
    problemSolved:
      "Hiring a full support team is expensive. Customers get frustrated waiting for answers during off-hours.",
    howItWorks:
      "Uses NLP to understand inquiries across channels and pulls answers from your knowledge base instantly.",
    imageUrl: "/24-hour-support-bot.png",
    benefits: [
      "Reduce support costs by 60%",
      "Instant 24/7 responses",
      "Unlimited concurrent chats",
      "Smart human handoff",
    ],
    features: [
      {
        title: "Natural Language Understanding",
        description: "Understands context and intent, not just keywords.",
      },
      {
        title: "Multi-Channel Support",
        description: "Works on website, WhatsApp, and Facebook.",
      },
    ],
    testimonial: {
      quote: "Customer satisfaction up 40%, support costs down significantly.",
      author: "Marcus Johnson",
      company: "E-Commerce Plus",
    },
    pricing: "Starting at $497/month",
  },
  "appointment-setter": {
    name: "Appointment Setter",
    tagline: "Fill your calendar with qualified appointments",
    description: "Stop playing phone tag. Our AI qualifies prospects and handles scheduling automatically.",
    problemSolved: "Wasting hours coordinating schedules and dealing with no-shows.",
    howItWorks: "Engages prospects, qualifies them, and syncs with your calendar to book times automatically.",
    imageUrl: "/appointment-setter.png",
    benefits: ["3x more booked appointments", "Reduce no-shows by 80%", "Automated follow-ups"],
    features: [
      { title: "Smart Qualification", description: "Ensures only qualified leads book." },
      { title: "Automated Reminders", description: "SMS/Email reminders to reduce no-shows." },
    ],
    testimonial: {
      quote: "My show rate went from 60% to 95%. Ideally handles everything.",
      author: "David Park",
      company: "Financial Advisory Group",
    },
    pricing: "Starting at $697/month",
  },
  accountant: {
    name: "AI Accountant",
    tagline: "Your finances on autopilot",
    description: "Automate bookkeeping, track expenses, and get real-time financial insights.",
    problemSolved: "Manual data entry, lost receipts, and delayed financial reporting.",
    howItWorks: "Connects to banks, categorizes transactions, and generates tax-ready reports.",
    imageUrl: "/ai-accountant.png",
    benefits: ["Save 15+ hours/week", "Real-time dashboards", "99% accurate categorization"],
    features: [
      { title: "Auto-Categorization", description: "Learns spending patterns." },
      { title: "Invoice Management", description: "Create and track invoices automatically." },
    ],
    testimonial: {
      quote: "Caught $23,000 in overpayments. I finally understand my finances.",
      author: "Jennifer Williams",
      company: "Creative Agency Co",
    },
    pricing: "Starting at $397/month",
  },

  // --- NEW AGENTS ---
  "ai-chatbot": {
    name: "AI Chatbot",
    tagline: "Your 24/7 Sales & Support Superagent",
    description:
      "Intelligent customer service that handles inquiries, support, and sales 24/7. Never leave a customer waiting again.",
    problemSolved:
      "Missed opportunities from delayed responses and high support costs from human teams.",
    howItWorks:
      "Trained on your business data to provide instant, accurate, and human-like responses to any customer query.",
    imageUrl: "/images/ai-chatbot-card.jpg",
    benefits: ["Instant responses", "Multi-language support", "Seamless escalation", "24/7 Availability"],
    features: [
      { title: "Instant Response", description: "Zero wait time for your customers." },
      { title: "Smart Escalation", description: "Knows when to involve a human." }
    ],
    testimonial: {
      quote: "It's like having my best salesperson working 24/7.",
      author: "Michael R.",
      company: "TechFlow"
    },
    pricing: "Starting at $497/month"
  },
  "content-integration": {
    name: "AI Content Integration",
    tagline: "Your Autonomous Content Factory",
    description:
      "Automate your content pipeline from ideation to publishing across all platforms. Scale your brand presence effortlessly.",
    problemSolved:
      "Inconsistent posting and the massive time drain of creating content for multiple channels.",
    howItWorks:
      "Generates on-brand content, schedules posts, and optimizes for each platform automatically.",
    imageUrl: "/images/ai-content-card.jpg",
    benefits: ["Consistent brand voice", "Cross-platform scheduling", "SEO optimization", "Time savings"],
    features: [
      { title: "Auto-Scheduling", description: "Post at optimal times automatically." },
      { title: "Brand Voice Learning", description: "Mimics your unique style perfectly." }
    ],
    testimonial: {
      quote: "We tripled our engagement without hiring a social media manager.",
      author: "Sarah L.",
      company: "GrowthLabs"
    },
    pricing: "Starting at $697/month"
  },
  "sales-catalog": {
    name: "Sales Catalog",
    tagline: "Interactive AI Sales Assistant",
    description:
      "Interactive AI sales assistant that guides customers to the perfect product. Increase conversion rates with personalized recommendations.",
    problemSolved:
      "Customers getting overwhelmed by choices and leaving without buying.",
    howItWorks:
      "Analyzes customer needs in real-time to suggest the perfect products from your catalog.",
    imageUrl: "/images/sales-catalog-card.jpg",
    benefits: ["Personalized recommendations", "Inventory sync", "Higher conversion rates", "Reduced churn"],
    features: [
      { title: "Smart Recommendations", description: "Suggests products based on user behavior." },
      { title: "Inventory Sync", description: "Always knows what's in stock." }
    ],
    testimonial: {
      quote: "Our conversion rate doubled within the first month.",
      author: "James K.",
      company: "RetailPro"
    },
    pricing: "Starting at $797/month"
  },
  "project-manager": {
    name: "AI Project Manager",
    tagline: "Keep Your Projects on Track",
    description:
      "Keep projects on track with automated updates, task assignment, and progress tracking. Eliminate bottlenecks before they happen.",
    problemSolved:
      "Missed deadlines, miscommunication, and project scope creep.",
    howItWorks:
      "Monitors project status, assigns tasks, and sends automated updates to stakeholders.",
    imageUrl: "/images/project-manager-card.jpg",
    benefits: ["Automated reporting", "Deadline reminders", "Resource allocation", "Risk detection"],
    features: [
      { title: "Auto-Reporting", description: "Daily status updates without meetings." },
      { title: "Resource Balancing", description: "Optimizes team workload automatically." }
    ],
    testimonial: {
      quote: "Projects are delivered on time, every time now.",
      author: "Elena M.",
      company: "BuildCorp"
    },
    pricing: "Starting at $897/month"
  }
}

export default function AgentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const agent = agentData[id]

  if (!agent) {
    notFound()
  }

  return (
    <main className="relative overflow-x-hidden max-w-full bg-[#0A4D3C]">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 pb-16 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4A84B]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#1A8B6B]/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          {/* Loom Video Embed - Only show if loomVideoUrl exists */}
          {agent.loomVideoUrl && (
            <div className="w-full max-w-4xl mx-auto mb-8">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#D4A84B]/20 border-2 border-[#D4A84B]/30">
                <div className="relative" style={{ padding: "56.25% 0 0 0" }}>
                  <iframe
                    src={agent.loomVideoUrl}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Link
                href="/#agents"
                className="inline-flex items-center gap-2 text-[#D4A84B] text-sm mb-6 hover:underline"
              >
                ← Back to AI Agents
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#FDF8E8] mb-4">{agent.name}</h1>
              <p className="text-[#D4A84B] text-lg md:text-xl mb-6">{agent.tagline}</p>
              <p className="text-[#FDF8E8]/80 text-base md:text-lg mb-8">{agent.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold hover:scale-105 transition-transform shadow-lg shadow-[#D4A84B]/30">
                  Get Started Today
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-[#D4A84B] text-[#D4A84B] font-bold hover:bg-[#D4A84B]/10 transition-colors">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-[#D4A84B]/50 shadow-2xl shadow-[#D4A84B]/20">
                <img src={agent.imageUrl || "/placeholder.svg"} alt={agent.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock the Power Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#D4A84B]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D4A84B]/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-[#D4A84B]/40 shadow-2xl shadow-[#D4A84B]/20">
              <img src={PROFILE_IMAGE} alt="AI Business Transformation" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D3C]/60 to-transparent" />
            </div>
            {/* Floating sparkles */}
            <motion.div
              className="absolute -top-4 -right-4 text-[#D4A84B] text-4xl"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 text-[#D4A84B] text-3xl"
              animate={{
                y: [10, -10, 10],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              ⭐
            </motion.div>
          </motion.div>

          {/* Right Side - Golden Ticket 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-[#FDF8E8] mb-4"
              >
                Unlock the Power of AI
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-[#D4A84B] text-xl md:text-2xl font-semibold mb-6"
              >
                Your Golden Ticket to Business Transformation
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-[#FDF8E8]/80 text-base md:text-lg leading-relaxed"
              >
                This isn't just another software tool—it's your golden ticket to explosive business growth. Unlock
                unlimited potential with AI that works tirelessly to scale your revenue, automate your operations, and
                give you the freedom to focus on what truly matters. The future of your business starts here.
              </motion.p>
            </div>

            {/* 3D Golden Ticket Card */}
            <GoldenTicketCard />
          </motion.div>
        </div>
      </section>

      {/* Problem Solved Section */}
      <section className="py-16 px-4 bg-[#0A4D3C]/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#FDF8E8] mb-6">
              <span className="text-[#D4A84B]">The Problem:</span> What's Holding Your Business Back
            </h2>
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0D6B4F]/50 to-[#0A4D3C]/50 border-2 border-[#D4A84B]/20">
              <p className="text-[#FDF8E8]/90 text-base md:text-lg leading-relaxed">{agent.problemSolved}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#FDF8E8] mb-6">
              <span className="text-[#D4A84B]">The Solution:</span> How {agent.name} Works
            </h2>
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0D6B4F]/30 to-[#0A4D3C]/30 border-2 border-[#D4A84B]/20">
              <p className="text-[#FDF8E8]/90 text-base md:text-lg leading-relaxed">{agent.howItWorks}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#0D6B4F]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FDF8E8] text-center mb-10">
            Why Business Owners Choose {agent.name}
          </h2>
          <div className="grid gap-4">
            {agent.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#0A4D3C]/50 border border-[#D4A84B]/20"
              >
                <span className="text-[#D4A84B] text-2xl">✓</span>
                <p className="text-[#FDF8E8]/90 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FDF8E8] text-center mb-10">Powerful Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {agent.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#0D6B4F]/50 to-[#0A4D3C]/50 border border-[#D4A84B]/20"
              >
                <h3 className="text-[#D4A84B] text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#FDF8E8]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-[#0D6B4F]/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#D4A84B] text-5xl mb-6">"</div>
          <p className="text-[#FDF8E8] text-xl md:text-2xl italic mb-6">{agent.testimonial.quote}</p>
          <p className="text-[#D4A84B] font-bold">{agent.testimonial.author}</p>
          <p className="text-[#FDF8E8]/60">{agent.testimonial.company}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#FDF8E8] mb-4">Ready to Transform Your Business?</h2>
          <p className="text-[#D4A84B] text-xl mb-2">{agent.pricing}</p>
          <p className="text-[#FDF8E8]/60 mb-8">No long-term contracts. Cancel anytime.</p>
          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-[#D4A84B]/30">
            Start Your Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
