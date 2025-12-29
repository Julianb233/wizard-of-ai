"use client"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[#0A4D3C] pt-0 px-4 md:px-8 min-h-screen flex flex-col justify-end relative pb-16 md:pb-20 overflow-hidden">
      {/* Smooth “above fold → below fold” footer gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A4D3C] via-[#0D6B4F] to-[#0A4D3C]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#D4A84B]/10 blur-[120px] z-0" />

      {/* Golden flares */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#D4A84B] rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              boxShadow: "0 0 20px rgba(212, 168, 75, 0.8)",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-[1688px] mx-auto z-10 pt-16 md:pt-20">
        {/* Links/content first */}
        <div className="px-4 md:px-12 pt-10 md:pt-12 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4 text-center md:text-left">
              <h4 className="font-black text-xs uppercase mb-6 text-[#D4A84B]/70 tracking-[0.22em]">QUICK LINKS</h4>
              <ul className="space-y-3">
                {[
                  { label: "WORK WITH JULIAN", href: "/work-with-julian" },
                  { label: "AI SOLUTIONS", href: "/ai-solutions" },
                  { label: "COACHING", href: "/coaching" },
                  { label: "MY APPS", href: "/apps" },
                  { label: "RESOURCES", href: "/resources" },
                  { label: "BOOK", href: "/book" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[#FDF8E8] font-bold text-lg md:text-xl uppercase hover:text-[#D4A84B] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 text-center">
              <h4 className="font-black text-xs uppercase mb-6 text-[#D4A84B]/70 tracking-[0.22em]">CONNECT</h4>
              <ul className="space-y-3">
                {[
                  { name: "INSTAGRAM", href: "https://instagram.com/julianbradleytv" },
                  { name: "YOUTUBE", href: "https://www.youtube.com/@TheWizardofAI" },
                  { name: "COMMUNITY", href: "/resources/community" },
                  { name: "MY LINKS", href: "/links", highlight: true },
                ].map((platform: { name: string; href: string; highlight?: boolean }) => (
                  <li key={platform.name}>
                    <a
                      href={platform.href}
                      target={platform.href.startsWith("http") ? "_blank" : undefined}
                      rel={platform.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`font-bold text-lg md:text-xl uppercase transition-colors ${platform.highlight
                        ? "text-[#D4A84B] hover:text-[#E8C55A]"
                        : "text-[#FDF8E8] hover:text-[#D4A84B]"
                        }`}
                    >
                      {platform.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 text-center md:text-right">
              <p className="text-sm md:text-base text-[#FDF8E8]/70 leading-relaxed">
                The Wizard of AI helps business owners harness artificial intelligence to optimize operations, save time,
                and create new opportunities—through custom agents, automation, and strategy.
              </p>
            </div>
          </div>
        </div>

        {/* Smooth break */}
        <div className="px-4 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4A84B]/30 to-transparent" />
        </div>

        {/* Bottom hero (headline + image + button) */}
        <div className="px-4 md:px-12 pt-12 md:pt-14">
          <div className="flex flex-col items-center text-center">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] text-[#FDF8E8]"
            >
              <span className="inline-block md:whitespace-nowrap">
                UNLOCK <span className="text-[#D4A84B]">THE POWER</span> OF <span className="text-[#D4A84B]">AI.</span>
              </span>
            </motion.h2>

            <div className="mt-7 md:mt-9 flex justify-center">
              <motion.img
                src="/images/wizard-profile-3.jpg"
                alt="Julian Bradley - The Wizard of AI"
                className="h-[170px] md:h-[240px] w-auto object-cover rounded-2xl border-2 border-[#D4A84B]/30 shadow-[0_0_20px_rgba(212,168,75,0.2)]"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>

            <motion.a
              href="#apply"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-8 inline-flex items-center gap-2 bg-[#D4A84B] text-[#0A4D3C] font-black uppercase px-8 py-4 rounded-xl text-sm tracking-wider hover:bg-[#E8C55A] transition-colors"
            >
              BOOK A CONSULTATION
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.a>
          </div>
        </div>

        <div className="px-4 md:px-12 pt-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="px-4 md:px-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#FDF8E8] text-xs font-bold tracking-wider uppercase gap-3">
            <p>© 2025 The Wizard of AI. All rights reserved</p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-[#D4A84B] transition-colors">
                PRIVACY POLICY
              </a>
              <a href="/terms" className="hover:text-[#D4A84B] transition-colors">
                TERMS
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
