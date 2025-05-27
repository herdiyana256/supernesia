"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

// Translations
const translations = {
  ID: {
    transform: "TRANSFORMASIKAN",
    business: "BISNISMU JADI",
    more: "LEBIH",
    super: "SUPER",
    description: "Jasa pembuatan Website & Aplikasi untuk UMKM atau Bisnis yang mau naik kelas.",
    consultation: "Konsultasi Gratis",
    portfolio: "Hasil Karya Kami",
  },
  EN: {
    transform: "TRANSFORM",
    business: "YOUR BUSINESS TO BE",
    more: "MORE",
    super: "SUPER",
    description: "Website & Application development services for SMEs or Businesses that want to level up.",
    consultation: "Free Consultation",
    portfolio: "Our Portfolio",
  },
}

export default function HeroSection() {
  const [language, setLanguage] = useState("ID")

  // Listen for language changes
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }

    const handleLanguageChange = (e: CustomEvent) => {
      setLanguage(e.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  // Get current translations
  const t = translations[language as keyof typeof translations]

  // Scroll to portfolio section
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault()
    const portfolioSection = document.getElementById("portfolio-section")
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
  <section className="py-8 px-4 md:px-12 lg:px-20">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
   <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
  {t.transform}
  <br />
  {language === "EN" ? (
    <span className="font-black dark:text-white text-black">
      {t.business} {t.more} {t.super}
    </span>
  ) : (
    <>
      {t.business}
      <br />
      <span className="font-black dark:text-white text-black">
        {t.more} {t.super}
      </span>
    </>
  )}
</h1>



        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">{t.description}</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/kontak"
            className="bg-primary px-6 py-3 font-bold rounded-md text-black"
          >
            {t.consultation}
          </Link>

            <a
              href="#portfolio-section"
              onClick={scrollToPortfolio}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-6 py-3 font-bold rounded-md"
            >
              {t.portfolio}
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/image_menu_001.png"
            alt="Supernesia Rocket"
            width={400}
            height={400}
            className="w-full max-w-md"
            priority
          />
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-between items-center gap-8">
        <div className="grayscale hover:grayscale-0 transition-all duration-300">
          <Image src="/client_001.png" alt="Space Tech" width={120} height={40} className="h-12 w-auto" />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300">
          <Image src="/client_002.png" alt="Escape" width={120} height={40} className="h-12 w-auto" />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300">
          <Image src="/client_003.png" alt="Start" width={120} height={40} className="h-12 w-auto" />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300">
          <Image src="/client_004.png" alt="DNA Testing" width={120} height={40} className="h-12 w-auto" />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300">
          <Image src="/client_005.png" alt="Steph Eaneff Consulting" width={120} height={40} className="h-12 w-auto" />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300">
          <Image src="/client_006.png" alt="Stationery Mega Store" width={120} height={40} className="h-12 w-auto" />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300">
          <Image src="/client_007.png" alt="Pexel" width={120} height={40} className="h-12 w-auto" />
        </div>
      </div>
    </section>
  )
}
