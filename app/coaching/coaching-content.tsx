"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { GraduationCap, Users, Rocket, Trophy, CheckCircle, ArrowRight, Sparkles, Target, Zap, Clock, Video, MessageSquare, Calendar, Star, Play, Gift, Shield, CreditCard, Timer, Mail, ChevronRight, AlertCircle } from "lucide-react"
import Link from "next/link"

// Quiz questions for program finder
const quizQuestions = [
  {
    question: "What's your current experience with AI?",
    options: [
      { text: "Complete beginner", score: { foundations: 3, accelerator: 1, mastery: 0 } },
      { text: "Used ChatGPT/basic tools", score: { foundations: 2, accelerator: 2, mastery: 1 } },
      { text: "Built some automations", score: { foundations: 1, accelerator: 3, mastery: 2 } },
      { text: "Already consulting/freelancing", score: { foundations: 0, accelerator: 2, mastery: 3 } },
    ],
  },
  {
    question: "What's your primary goal?",
    options: [
      { text: "Learn AI skills for my current job", score: { foundations: 3, accelerator: 1, mastery: 0 } },
      { text: "Start a side hustle", score: { foundations: 2, accelerator: 3, mastery: 1 } },
      { text: "Replace my income", score: { foundations: 1, accelerator: 3, mastery: 2 } },
      { text: "Build a 6-7 figure business", score: { foundations: 0, accelerator: 2, mastery: 3 } },
    ],
  },
  {
    question: "How much time can you dedicate weekly?",
    options: [
      { text: "2-3 hours", score: { foundations: 3, accelerator: 1, mastery: 0 } },
      { text: "5-10 hours", score: { foundations: 2, accelerator: 3, mastery: 2 } },
      { text: "10-20 hours", score: { foundations: 1, accelerator: 2, mastery: 3 } },
      { text: "Full-time focus", score: { foundations: 0, accelerator: 1, mastery: 3 } },
    ],
  },
  {
    question: "What level of support do you need?",
    options: [
      { text: "Self-paced is fine", score: { foundations: 3, accelerator: 1, mastery: 0 } },
      { text: "Some guidance would help", score: { foundations: 2, accelerator: 3, mastery: 1 } },
      { text: "Regular coaching calls", score: { foundations: 0, accelerator: 3, mastery: 2 } },
      { text: "Personal mentorship", score: { foundations: 0, accelerator: 1, mastery: 3 } },
    ],
  },
]

const whyLearn = [
  {
    icon: Target,
    title: "Massive Market Opportunity",
    description: "AI consulting is a $500B+ market. Businesses desperately need experts who can implement AI solutions.",
  },
  {
    icon: Zap,
    title: "High-Ticket Services",
    description: "AI consultants command $5K-$50K+ per project. Build a business with premium pricing from day one.",
  },
  {
    icon: Clock,
    title: "Location Independence",
    description: "Work from anywhere, set your own hours, and build a business that scales without trading time for money.",
  },
  {
    icon: Rocket,
    title: "First-Mover Advantage",
    description: "The AI consulting industry is still early. Position yourself as an expert now before the market saturates.",
  },
]

const trainingPrograms = [
  {
    name: "AI Foundations",
    subtitle: "Self-Paced Course",
    price: "$497",
    originalPrice: "$997",
    period: "one-time",
    paymentPlan: "or 3x $179",
    description: "Master the fundamentals of AI consulting and start landing your first clients.",
    features: [
      "10+ hours of video training",
      "AI tools mastery curriculum",
      "Client acquisition templates",
      "Proposal & contract templates",
      "Private community access",
      "Lifetime updates",
    ],
    highlight: false,
    cta: "Get Started",
    color: "#D4A84B",
    spots: null,
  },
  {
    name: "AI Accelerator",
    subtitle: "Group Coaching Program",
    price: "$2,997",
    originalPrice: "$4,997",
    period: "3 months",
    paymentPlan: "or 6x $549",
    description: "Fast-track your AI consulting business with live coaching and accountability.",
    features: [
      "Everything in AI Foundations",
      "Weekly live group coaching calls",
      "Done-for-you AI systems",
      "Sales & marketing playbook",
      "Client delivery frameworks",
      "Direct Slack access to Julian",
      "Hot seat coaching sessions",
      "Referral network access",
    ],
    highlight: true,
    cta: "Apply Now",
    color: "#10B981",
    spots: 8,
    nextCohort: "January 15, 2025",
  },
  {
    name: "AI Mastery",
    subtitle: "1:1 Private Mentorship",
    price: "$10,000",
    originalPrice: "$15,000",
    period: "6 months",
    paymentPlan: "or 6x $1,833",
    description: "Personal mentorship to build a high-ticket AI consulting empire.",
    features: [
      "Everything in AI Accelerator",
      "Weekly 1:1 calls with Julian",
      "Custom business strategy",
      "Done-with-you client projects",
      "White-label AI products",
      "Speaking & podcast training",
      "Personal brand development",
      "Revenue share opportunities",
      "Lifetime alumni network",
    ],
    highlight: false,
    cta: "Book Discovery Call",
    color: "#8B5CF6",
    spots: 3,
  },
]

const results = [
  { metric: "500+", label: "Students Trained" },
  { metric: "$2.5M+", label: "Client Revenue Generated" },
  { metric: "94%", label: "Land First Client in 90 Days" },
  { metric: "4.9/5", label: "Program Rating" },
]

const testimonials = [
  {
    name: "Marcus Chen",
    role: "AI Consultant, Former Software Engineer",
    image: "/images/testimonials/marcus.jpg",
    quote: "I went from employed developer to $15K/month AI consultant in 4 months. Julian's frameworks made it simple to position myself as an expert and close high-ticket deals.",
    result: "$15K/month in 4 months",
    videoUrl: "https://www.loom.com/share/example1",
  },
  {
    name: "Sarah Mitchell",
    role: "Agency Owner",
    image: "/images/testimonials/sarah.jpg",
    quote: "The AI Accelerator helped me add AI services to my marketing agency. We've added $40K in recurring revenue from AI automation projects alone.",
    result: "$40K+ added revenue",
    videoUrl: "https://www.loom.com/share/example2",
  },
  {
    name: "David Park",
    role: "Former Corporate Executive",
    image: "/images/testimonials/david.jpg",
    quote: "At 52, I thought it was too late to start something new. Julian's mentorship gave me the confidence and skills to build a thriving AI consulting practice.",
    result: "6-figure business at 52",
    videoUrl: "https://www.loom.com/share/example3",
  },
]

const faqs = [
  {
    question: "Do I need technical skills to become an AI consultant?",
    answer: "No coding required. We focus on no-code AI tools and strategic implementation. Many of our most successful students come from non-technical backgrounds like sales, marketing, and operations.",
  },
  {
    question: "How quickly can I start making money?",
    answer: "Most students land their first paid client within 30-90 days. The AI Accelerator program is specifically designed to help you get clients fast with proven outreach templates and sales scripts.",
  },
  {
    question: "What makes this different from other AI courses?",
    answer: "We focus on building a real business, not just learning tools. You get client acquisition systems, pricing strategies, delivery frameworks, and ongoing support - everything you need to run a profitable consulting practice.",
  },
  {
    question: "Can I do this part-time while keeping my job?",
    answer: "Absolutely. Many students start part-time, landing 2-3 clients before transitioning full-time. The AI Accelerator requires about 5-10 hours per week commitment.",
  },
  {
    question: "What if the program isn't right for me?",
    answer: "We offer a 30-day money-back guarantee on all programs. If you go through the material, do the work, and don't see results, we'll refund you in full. No questions asked.",
  },
]

const featuredLogos = [
  "Forbes", "Entrepreneur", "Inc.", "TechCrunch", "Business Insider"
]

export default function CoachingContent() {
  const [quizStep, setQuizStep] = useState(-1) // -1 = not started, 0-3 = questions, 4 = results
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [email, setEmail] = useState("")
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleQuizAnswer = (optionIndex: number) => {
    const newAnswers = [...quizAnswers, optionIndex]
    setQuizAnswers(newAnswers)

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      setQuizStep(quizQuestions.length) // Show results
    }
  }

  const getQuizResult = () => {
    const scores = { foundations: 0, accelerator: 0, mastery: 0 }
    quizAnswers.forEach((answerIndex, questionIndex) => {
      const option = quizQuestions[questionIndex].options[answerIndex]
      scores.foundations += option.score.foundations
      scores.accelerator += option.score.accelerator
      scores.mastery += option.score.mastery
    })

    if (scores.mastery >= scores.accelerator && scores.mastery >= scores.foundations) {
      return { program: "AI Mastery", index: 2 }
    } else if (scores.accelerator >= scores.foundations) {
      return { program: "AI Accelerator", index: 1 }
    }
    return { program: "AI Foundations", index: 0 }
  }

  const resetQuiz = () => {
    setQuizStep(-1)
    setQuizAnswers([])
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to your email service
    setEmailSubmitted(true)
    setShowEmailCapture(false)
  }

  return (
    <main className="relative min-h-screen bg-[#0A4D3C] overflow-x-hidden">
      <Header />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4A84B]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#1A8B6B]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/5 rounded-full blur-[150px]" />
      </div>

      <div className="pt-40 md:pt-48 pb-20 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Video */}
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
              <GraduationCap className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-[#D4A84B] font-bold text-sm uppercase tracking-wider">Coaching & Training</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-[#FDF8E8]">Build Your Own</span>{" "}
              <span className="text-[#D4A84B]">AI Consulting Empire</span>
            </h1>
            <p className="text-[#F0D98C]/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Learn the exact systems, strategies, and frameworks Julian uses to run a high-ticket AI consulting business.
              Go from zero to your first $10K month in 90 days or less.
            </p>
          </motion.div>

          {/* Intro Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-[#0D6B4F]/50 rounded-2xl border-2 border-[#D4A84B]/30 overflow-hidden relative group cursor-pointer">
                {/* Placeholder for video - replace with actual Loom embed */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="w-20 h-20 bg-[#D4A84B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-8 h-8 text-[#0A4D3C] ml-1" />
                    </motion.div>
                    <p className="text-[#FDF8E8] font-bold">Watch: How I Built a 6-Figure AI Consulting Business</p>
                    <p className="text-[#F0D98C]/60 text-sm mt-1">3 min intro from Julian</p>
                  </div>
                </div>
                {/* Uncomment and add your Loom embed URL */}
                {/* <iframe
                  src="https://www.loom.com/embed/YOUR_VIDEO_ID"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                /> */}
              </div>
            </div>
          </motion.div>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-[#D4A84B]/20 to-[#E8C55A]/20 rounded-xl p-4 border border-[#D4A84B]/40 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-[#D4A84B]" />
                <span className="text-[#FDF8E8] font-bold">Next AI Accelerator Cohort:</span>
                <span className="text-[#D4A84B] font-black">January 15, 2025</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-[#D4A84B]/30" />
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#E8C55A]" />
                <span className="text-[#E8C55A] font-bold">Only 8 spots remaining</span>
              </div>
            </div>
          </motion.div>

          {/* Free Resource Lead Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[#D4A84B]/20 to-[#0D6B4F]/40 rounded-2xl p-8 md:p-10 border-2 border-[#D4A84B]/30">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#D4A84B]/20 rounded-2xl flex items-center justify-center">
                    <Gift className="w-12 h-12 text-[#D4A84B]" />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A84B]/20 rounded-full mb-3">
                    <span className="text-[#D4A84B] text-xs font-bold uppercase">Free Download</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#FDF8E8] mb-2">
                    AI Consulting Starter Kit
                  </h3>
                  <p className="text-[#F0D98C]/80 mb-4">
                    Get the same proposal templates, pricing frameworks, and client scripts our students use to close their first $5K deal.
                  </p>
                  {!emailSubmitted ? (
                    <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-grow px-4 py-3 bg-[#0A4D3C]/50 border border-[#D4A84B]/30 rounded-xl text-[#FDF8E8] placeholder-[#FDF8E8]/40 focus:border-[#D4A84B] focus:outline-none"
                      />
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl whitespace-nowrap"
                      >
                        Get Free Kit
                      </motion.button>
                    </form>
                  ) : (
                    <div className="flex items-center gap-2 text-[#10B981]">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-bold">Check your email! The kit is on its way.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-center p-6 bg-[#0D6B4F]/30 rounded-xl border border-[#D4A84B]/20"
              >
                <div className="text-3xl md:text-4xl font-black text-[#D4A84B] mb-1">{result.metric}</div>
                <div className="text-[#F0D98C]/70 text-sm">{result.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* As Seen In / Trust Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20 text-center"
          >
            <p className="text-[#F0D98C]/50 text-sm uppercase tracking-wider mb-6">As Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {featuredLogos.map((logo, index) => (
                <span key={index} className="text-[#FDF8E8] font-bold text-lg md:text-xl">{logo}</span>
              ))}
            </div>
          </motion.div>

          {/* Interactive Quiz */}
          <motion.div
            id="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-20 scroll-mt-32"
          >
            <div className="bg-gradient-to-br from-[#8B5CF6]/20 to-[#0D6B4F]/40 rounded-2xl p-8 md:p-12 border-2 border-[#8B5CF6]/30">
              <AnimatePresence mode="wait">
                {quizStep === -1 ? (
                  <motion.div
                    key="quiz-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <Sparkles className="w-12 h-12 text-[#8B5CF6] mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-black text-[#FDF8E8] mb-4">
                      Which Program Is Right For You?
                    </h3>
                    <p className="text-[#F0D98C]/80 mb-8 max-w-xl mx-auto">
                      Answer 4 quick questions to get a personalized recommendation based on your goals, experience, and availability.
                    </p>
                    <motion.button
                      onClick={() => setQuizStep(0)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-bold rounded-xl"
                    >
                      Take the 1-Minute Quiz
                    </motion.button>
                  </motion.div>
                ) : quizStep < quizQuestions.length ? (
                  <motion.div
                    key={`quiz-q${quizStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[#8B5CF6] font-bold">Question {quizStep + 1} of {quizQuestions.length}</span>
                      <div className="flex gap-1">
                        {quizQuestions.map((_, i) => (
                          <div
                            key={i}
                            className={`w-8 h-2 rounded-full ${i <= quizStep ? 'bg-[#8B5CF6]' : 'bg-[#8B5CF6]/20'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#FDF8E8] mb-6">
                      {quizQuestions[quizStep].question}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {quizQuestions[quizStep].options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleQuizAnswer(index)}
                          whileHover={{ scale: 1.02, borderColor: "rgba(139,92,246,0.6)" }}
                          whileTap={{ scale: 0.98 }}
                          className="p-4 bg-[#0D6B4F]/30 border-2 border-[#8B5CF6]/20 rounded-xl text-left text-[#FDF8E8] hover:bg-[#0D6B4F]/50 transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] font-bold text-sm">
                              {String.fromCharCode(65 + index)}
                            </span>
                            {option.text}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="quiz-result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-[#10B981]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#10B981]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#FDF8E8] mb-2">
                      Your Recommended Program:
                    </h3>
                    <p className="text-3xl md:text-4xl font-black mb-4" style={{ color: trainingPrograms[getQuizResult().index].color }}>
                      {getQuizResult().program}
                    </p>
                    <p className="text-[#F0D98C]/80 mb-6 max-w-lg mx-auto">
                      Based on your answers, this program best matches your experience level, goals, and availability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          href="#programs"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl"
                        >
                          View Program Details
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </motion.div>
                      <motion.button
                        onClick={resetQuiz}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 border-2 border-[#8B5CF6]/40 text-[#8B5CF6] font-bold rounded-xl"
                      >
                        Retake Quiz
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Why Learn AI Consulting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] text-center mb-4">
              Why Become an <span className="text-[#D4A84B]">AI Consultant?</span>
            </h2>
            <p className="text-[#F0D98C]/70 text-center max-w-2xl mx-auto mb-12">
              The AI revolution is creating the biggest wealth transfer in history. Position yourself on the right side.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {whyLearn.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-[#0D6B4F]/30 rounded-xl p-6 border border-[#D4A84B]/20 hover:border-[#D4A84B]/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4A84B]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#D4A84B]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#FDF8E8] mb-2">{item.title}</h3>
                      <p className="text-[#F0D98C]/70">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Training Programs with Enhanced Pricing */}
          <motion.div
            id="programs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mb-20 scroll-mt-32"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] text-center mb-4">
              Choose Your <span className="text-[#D4A84B]">Path</span>
            </h2>
            <p className="text-[#F0D98C]/70 text-center max-w-2xl mx-auto mb-12">
              Whether you're just starting out or ready to scale, we have a program for you.
            </p>
            <div className="grid lg:grid-cols-3 gap-8">
              {trainingPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative rounded-2xl p-8 border-2 transition-all ${
                    program.highlight
                      ? "bg-gradient-to-br from-[#0D6B4F]/60 to-[#0D6B4F]/30 border-[#10B981]"
                      : "bg-[#0D6B4F]/30 border-[#D4A84B]/20 hover:border-[#D4A84B]/40"
                  }`}
                >
                  {program.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#10B981] rounded-full">
                      <span className="text-white text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" /> Most Popular
                      </span>
                    </div>
                  )}
                  {program.spots && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-red-500/20 border border-red-500/40 rounded text-red-400 text-xs font-bold">
                        Only {program.spots} spots left
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#FDF8E8] mb-1">{program.name}</h3>
                    <p className="text-[#F0D98C]/60 text-sm">{program.subtitle}</p>
                    {program.nextCohort && (
                      <p className="text-[#10B981] text-sm mt-1 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Next cohort: {program.nextCohort}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="text-[#F0D98C]/40 line-through text-lg">{program.originalPrice}</span>
                    <span className="text-4xl font-black ml-2" style={{ color: program.color }}>{program.price}</span>
                    <span className="text-[#F0D98C]/60 ml-2">/ {program.period}</span>
                  </div>
                  <div className="mb-6 flex items-center gap-2 text-sm">
                    <CreditCard className="w-4 h-4 text-[#F0D98C]/60" />
                    <span className="text-[#F0D98C]/60">{program.paymentPlan}</span>
                  </div>
                  <p className="text-[#F0D98C]/80 mb-6">{program.description}</p>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: program.color }} />
                        <span className="text-[#FDF8E8]/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/#apply"
                      className={`block w-full py-4 text-center font-bold rounded-xl transition-all ${
                        program.highlight
                          ? "bg-gradient-to-r from-[#10B981] to-[#34D399] text-white hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                          : "bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] hover:shadow-[0_0_30px_rgba(212,168,75,0.5)]"
                      }`}
                    >
                      {program.cta}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Guarantee Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center"
            >
              <div className="flex items-center gap-3 px-6 py-3 bg-[#0D6B4F]/30 rounded-xl border border-[#D4A84B]/20">
                <Shield className="w-8 h-8 text-[#10B981]" />
                <div className="text-left">
                  <div className="text-[#FDF8E8] font-bold">30-Day Money-Back Guarantee</div>
                  <div className="text-[#F0D98C]/60 text-sm">No questions asked</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-[#0D6B4F]/30 rounded-xl border border-[#D4A84B]/20">
                <CreditCard className="w-8 h-8 text-[#D4A84B]" />
                <div className="text-left">
                  <div className="text-[#FDF8E8] font-bold">Flexible Payment Plans</div>
                  <div className="text-[#F0D98C]/60 text-sm">Split into monthly payments</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Video Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] text-center mb-4">
              Student <span className="text-[#D4A84B]">Success Stories</span>
            </h2>
            <p className="text-[#F0D98C]/70 text-center max-w-xl mx-auto mb-12">
              Hear directly from students who transformed their careers with our programs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-[#0D6B4F]/30 rounded-xl overflow-hidden border border-[#D4A84B]/20"
                >
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-[#0D6B4F]/50 relative cursor-pointer group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-14 h-14 bg-[#D4A84B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play className="w-6 h-6 text-[#0A4D3C] ml-1" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 rounded text-white text-xs">
                      2:34
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4A84B] text-[#D4A84B]" />
                      ))}
                    </div>
                    <p className="text-[#FDF8E8]/90 mb-4 text-sm italic">"{testimonial.quote}"</p>
                    <div className="border-t border-[#D4A84B]/20 pt-4">
                      <div className="font-bold text-[#FDF8E8]">{testimonial.name}</div>
                      <div className="text-[#F0D98C]/60 text-sm">{testimonial.role}</div>
                      <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-[#D4A84B]/20 rounded-full">
                        <Trophy className="w-4 h-4 text-[#D4A84B]" />
                        <span className="text-[#D4A84B] text-sm font-bold">{testimonial.result}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What You'll Learn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[#0D6B4F]/50 to-[#0D6B4F]/30 rounded-2xl p-8 md:p-12 border border-[#D4A84B]/20">
              <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-8 text-center">
                What You'll <span className="text-[#D4A84B]">Master</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Target, title: "Finding Your Niche", desc: "Identify profitable markets hungry for AI solutions" },
                  { icon: Users, title: "Client Acquisition", desc: "Land high-paying clients without cold calling" },
                  { icon: Zap, title: "AI Tool Mastery", desc: "Master the top AI tools for business automation" },
                  { icon: Video, title: "Service Delivery", desc: "Deliver results that get referrals and testimonials" },
                  { icon: MessageSquare, title: "Sales Conversations", desc: "Close $5K-$50K deals with confidence" },
                  { icon: Rocket, title: "Scaling Systems", desc: "Build a team and scale beyond 1:1 services" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#D4A84B]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#D4A84B]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#FDF8E8] mb-1">{item.title}</h4>
                      <p className="text-[#F0D98C]/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] text-center mb-12">
              Frequently Asked <span className="text-[#D4A84B]">Questions</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-[#0D6B4F]/30 rounded-xl p-6 border border-[#D4A84B]/20"
                >
                  <h4 className="font-bold text-[#FDF8E8] mb-2">{faq.question}</h4>
                  <p className="text-[#F0D98C]/70">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#0D6B4F]/50 to-[#0D6B4F]/30 rounded-2xl p-12 border-2 border-[#D4A84B]/30">
              <Sparkles className="w-12 h-12 text-[#D4A84B] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-[#FDF8E8] mb-4">
                Ready to Start Your AI Consulting Journey?
              </h2>
              <p className="text-[#F0D98C]/80 text-lg mb-4 max-w-2xl mx-auto">
                Book a free strategy call to discuss your goals and find the right program for you.
                No pressure, no pitch - just an honest conversation about your path forward.
              </p>
              <div className="flex items-center justify-center gap-4 mb-8 text-sm">
                <span className="flex items-center gap-1 text-[#10B981]">
                  <CheckCircle className="w-4 h-4" /> 30-day guarantee
                </span>
                <span className="flex items-center gap-1 text-[#D4A84B]">
                  <CheckCircle className="w-4 h-4" /> Payment plans available
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/#apply"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] text-[#0A4D3C] font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(212,168,75,0.5)]"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Free Strategy Call
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#quiz"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] font-bold rounded-xl transition-all hover:bg-[#8B5CF6]/10"
                  >
                    <Sparkles className="w-5 h-5" />
                    Take the Quiz First
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
