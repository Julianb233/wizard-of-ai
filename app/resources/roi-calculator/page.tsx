"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ROICalculatorPage() {
  // Input states
  const [hoursPerMonth, setHoursPerMonth] = useState(80)
  const [hourlyRate, setHourlyRate] = useState(50)
  const [numberOfEmployees, setNumberOfEmployees] = useState(5)
  const [aiCost, setAiCost] = useState(500)

  // Animated number states
  const [displayMonthlySaved, setDisplayMonthlySaved] = useState(0)
  const [displayMonthlyCost, setDisplayMonthlyCost] = useState(0)
  const [displayAnnualSavings, setDisplayAnnualSavings] = useState(0)
  const [displayROI, setDisplayROI] = useState(0)
  const [displayPayback, setDisplayPayback] = useState(0)

  // Calculate results
  const monthlyTimeSaved = hoursPerMonth * numberOfEmployees
  const monthlyCostSavings = monthlyTimeSaved * hourlyRate
  const netMonthlySavings = monthlyCostSavings - aiCost
  const annualSavings = netMonthlySavings * 12
  const roi = aiCost > 0 ? (netMonthlySavings / aiCost) * 100 : 0
  const paybackPeriod = netMonthlySavings > 0 ? aiCost / netMonthlySavings : 0

  // Animate numbers when they change
  useEffect(() => {
    const duration = 1000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setDisplayMonthlySaved(Math.round(monthlyTimeSaved * progress))
      setDisplayMonthlyCost(Math.round(monthlyCostSavings * progress))
      setDisplayAnnualSavings(Math.round(annualSavings * progress))
      setDisplayROI(Math.round(roi * progress))
      setDisplayPayback(paybackPeriod * progress)

      if (step >= steps) {
        clearInterval(timer)
        setDisplayMonthlySaved(monthlyTimeSaved)
        setDisplayMonthlyCost(monthlyCostSavings)
        setDisplayAnnualSavings(annualSavings)
        setDisplayROI(Math.round(roi))
        setDisplayPayback(paybackPeriod)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [hoursPerMonth, hourlyRate, numberOfEmployees, aiCost, monthlyTimeSaved, monthlyCostSavings, annualSavings, roi, paybackPeriod])

  // Sparkle animation
  const sparkles = [
    { left: "10%", top: "15%", delay: 0 },
    { left: "85%", top: "20%", delay: 0.3 },
    { left: "15%", top: "75%", delay: 0.6 },
    { left: "90%", top: "65%", delay: 0.9 },
    { left: "50%", top: "10%", delay: 0.4 },
    { left: "5%", top: "45%", delay: 0.2 },
    { left: "95%", top: "40%", delay: 0.8 },
    { left: "30%", top: "85%", delay: 1.0 },
  ]

  return (
    <main className="relative min-h-screen bg-[#0A4D3C] overflow-hidden">
      <Header />

      {/* Sparkles */}
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={i}
          className="fixed w-3 h-3 md:w-4 md:h-4 z-10 pointer-events-none"
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
      <div className="relative z-20 pt-48 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-[#FDF8E8] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI <span className="text-[#D4A84B]">ROI</span> Calculator
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-[#FDF8E8]/80 max-w-3xl mx-auto font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Discover how much time and money you can save by implementing AI automation in your business
            </motion.p>
          </motion.div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#0D6B4F]/40 backdrop-blur-sm border border-[#D4A84B]/20 rounded-3xl p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-black uppercase text-[#D4A84B] mb-8">
                Your Current Situation
              </h2>

              {/* Hours Per Month */}
              <div className="mb-8">
                <label className="block text-[#FDF8E8] font-bold text-lg mb-4">
                  Monthly hours on repetitive tasks per employee
                </label>
                <div className="flex items-center gap-4 mb-3">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={hoursPerMonth}
                    onChange={(e) => setHoursPerMonth(Number(e.target.value))}
                    className="flex-1 h-2 bg-[#0A4D3C] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4A84B] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <span className="text-[#D4A84B] font-black text-2xl min-w-[80px] text-right">
                    {hoursPerMonth}h
                  </span>
                </div>
              </div>

              {/* Hourly Rate */}
              <div className="mb-8">
                <label className="block text-[#FDF8E8] font-bold text-lg mb-4">
                  Average hourly cost of labor
                </label>
                <div className="flex items-center gap-4 mb-3">
                  <input
                    type="range"
                    min="20"
                    max="200"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="flex-1 h-2 bg-[#0A4D3C] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4A84B] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <span className="text-[#D4A84B] font-black text-2xl min-w-[80px] text-right">
                    ${hourlyRate}
                  </span>
                </div>
              </div>

              {/* Number of Employees */}
              <div className="mb-8">
                <label className="block text-[#FDF8E8] font-bold text-lg mb-4">
                  Number of employees doing these tasks
                </label>
                <div className="flex items-center gap-4 mb-3">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={numberOfEmployees}
                    onChange={(e) => setNumberOfEmployees(Number(e.target.value))}
                    className="flex-1 h-2 bg-[#0A4D3C] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4A84B] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <span className="text-[#D4A84B] font-black text-2xl min-w-[80px] text-right">
                    {numberOfEmployees}
                  </span>
                </div>
              </div>

              {/* AI Cost */}
              <div>
                <label className="block text-[#FDF8E8] font-bold text-lg mb-4">
                  Estimated AI automation cost (monthly)
                </label>
                <div className="flex items-center gap-4 mb-3">
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={aiCost}
                    onChange={(e) => setAiCost(Number(e.target.value))}
                    className="flex-1 h-2 bg-[#0A4D3C] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4A84B] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <span className="text-[#D4A84B] font-black text-2xl min-w-[80px] text-right">
                    ${aiCost}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Results Section - 3D Card Effect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#D4A84B]/20 to-[#E8C55A]/10 backdrop-blur-sm border-2 border-[#D4A84B]/40 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                whileHover={{ rotateY: 2, rotateX: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A84B]/10 to-transparent opacity-50 pointer-events-none" />

                <h2 className="text-2xl md:text-3xl font-black uppercase text-[#D4A84B] mb-8 relative z-10">
                  Your Potential Savings
                </h2>

                {/* Monthly Time Saved */}
                <motion.div
                  className="mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <p className="text-[#FDF8E8]/80 font-bold text-sm uppercase tracking-wider mb-2">
                    Monthly Time Saved
                  </p>
                  <p className="text-[#FDF8E8] font-black text-4xl md:text-5xl">
                    {displayMonthlySaved.toLocaleString()}
                    <span className="text-2xl ml-2">hours</span>
                  </p>
                </motion.div>

                {/* Monthly Cost Savings */}
                <motion.div
                  className="mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <p className="text-[#FDF8E8]/80 font-bold text-sm uppercase tracking-wider mb-2">
                    Monthly Cost Savings
                  </p>
                  <p className="text-[#D4A84B] font-black text-4xl md:text-5xl">
                    ${displayMonthlyCost.toLocaleString()}
                  </p>
                </motion.div>

                {/* Annual Savings */}
                <motion.div
                  className="mb-6 pb-6 border-b border-[#D4A84B]/30 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-[#FDF8E8]/80 font-bold text-sm uppercase tracking-wider mb-2">
                    Annual Net Savings
                  </p>
                  <p className="text-[#D4A84B] font-black text-5xl md:text-6xl">
                    ${displayAnnualSavings.toLocaleString()}
                  </p>
                </motion.div>

                {/* ROI Percentage */}
                <motion.div
                  className="mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <p className="text-[#FDF8E8]/80 font-bold text-sm uppercase tracking-wider mb-2">
                    Monthly ROI
                  </p>
                  <p className={`font-black text-4xl md:text-5xl ${displayROI >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {displayROI > 0 ? '+' : ''}{displayROI.toLocaleString()}%
                  </p>
                </motion.div>

                {/* Payback Period */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <p className="text-[#FDF8E8]/80 font-bold text-sm uppercase tracking-wider mb-2">
                    Payback Period
                  </p>
                  <p className="text-[#FDF8E8] font-black text-3xl md:text-4xl">
                    {displayPayback > 0 ? displayPayback.toFixed(1) : '0.0'}
                    <span className="text-xl ml-2">months</span>
                  </p>
                </motion.div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A84B]/10 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4A84B]/10 rounded-tr-full" />
              </motion.div>
            </motion.div>
          </div>

          {/* Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-[#0D6B4F]/30 backdrop-blur-sm border border-[#D4A84B]/20 rounded-3xl p-8 md:p-10 mb-12"
          >
            <h3 className="text-xl md:text-2xl font-black uppercase text-[#D4A84B] mb-6">
              What This Means For Your Business
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-[#D4A84B] font-black text-3xl mb-2">
                  {Math.round((monthlyTimeSaved / (hoursPerMonth * numberOfEmployees || 1)) * 100)}%
                </div>
                <p className="text-[#FDF8E8]/80 font-medium">
                  Time freed up for high-value work
                </p>
              </div>
              <div>
                <div className="text-[#D4A84B] font-black text-3xl mb-2">
                  {Math.round(monthlyTimeSaved / 160)} FTE
                </div>
                <p className="text-[#FDF8E8]/80 font-medium">
                  Equivalent full-time employees saved
                </p>
              </div>
              <div>
                <div className="text-[#D4A84B] font-black text-3xl mb-2">
                  ${Math.round(annualSavings / 12).toLocaleString()}
                </div>
                <p className="text-[#FDF8E8]/80 font-medium">
                  Average monthly net profit increase
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#D4A84B] to-[#E8C55A] rounded-3xl p-12 md:p-16">
              <h3 className="text-3xl md:text-5xl font-black uppercase text-[#0A4D3C] mb-4">
                Ready to Unlock These Savings?
              </h3>
              <p className="text-lg md:text-xl text-[#0A4D3C]/80 font-bold mb-8 max-w-2xl mx-auto">
                Book a free consultation to discover exactly how AI automation can transform your business operations
              </p>
              <motion.a
                href="/#apply"
                className="inline-flex items-center gap-3 bg-[#0A4D3C] text-[#D4A84B] font-black uppercase px-10 py-5 rounded-full text-lg tracking-wider hover:bg-[#0D6B4F] transition-all shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(10, 77, 60, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Free Consultation
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-center text-[#FDF8E8]/50 text-sm mt-8 max-w-3xl mx-auto"
          >
            Results are estimates based on the inputs provided. Actual savings may vary depending on implementation,
            specific use cases, and business processes. Schedule a consultation for a personalized assessment.
          </motion.p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
