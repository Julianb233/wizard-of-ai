"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1a0a]">
      {/* Desktop Hero Image */}
      <div className="hidden md:block w-full h-screen relative">
        <picture>
          <source srcSet="/images/wizard-hero-desktop.webp" type="image/webp" />
          <Image
            src="/images/wizard-hero-desktop.png"
            alt="The Wizard of AI"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </picture>
      </div>

      {/* Mobile Hero Image */}
      <div className="block md:hidden w-full h-screen relative">
        <picture>
          <source srcSet="/images/wizard-hero-mobile.webp" type="image/webp" />
          <Image
            src="/images/wizard-hero-mobile.png"
            alt="The Wizard of AI"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </picture>
      </div>
    </section>
  )
}
