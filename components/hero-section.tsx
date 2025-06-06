"use client"

import { useEffect, useState } from "react"
import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const translations = {
    ID: {
      transform: "TRANSFORMASIKAN",
      business: "BISNISMU JADI",
      more: "LEBIH",
      super: "SUPER",
      description: "Kami bantu ubah ide dan bisnis Anda menjadi produk digital yang powerful, elegan, dan fungsional. Mulai dari website profesional, aplikasi mobile, hingga sistem kustom untuk mendukung pertumbuhan bisnis Anda. Supernesia hadir sebagai mitra digital yang memahami kebutuhan Anda dan menghadirkan solusi inovatif yang berdampak.",
      consultation: "Konsultasi Gratis",
      portfolio: "Hasil Karya Kami",
    },
    EN: {
      transform: "TRANSFORM",
      business: "YOUR BUSINESS TO BE",
      more: "MORE",
      super: "SUPER",
      description: "We help turn your ideas and business into powerful, elegant, and functional digital products. From professional websites and mobile apps to tailored systems that support your business growth. Supernesia is your trusted digital partner, delivering impactful and innovative solutions.",
      consultation: "Free Consultation",
      portfolio: "Our Portfolio",
    },
  }

export default function HeroSection() {
  const [language, setLanguage] = useState("ID")
  const t = translations[language as keyof typeof translations]

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) setLanguage(savedLanguage)

    const handleLanguageChange = (e: CustomEvent) => {
      setLanguage(e.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault()
    const section = document.getElementById("portfolio-section")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-12 px-4 md:px-12 lg:px-20 bg-white dark:bg-[#1a1a1a] transition-all">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-black dark:text-white">
            {t.transform}
            <br />
            {language === "EN" ? (
              <>
                {t.business} {t.more} {t.super}
              </>
            ) : (
              <>
                {t.business}
                <br />
                {t.more} {t.super}
              </>
            )}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg text-lg">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/kontak"
              className="bg-primary hover:bg-yellow-300 text-black px-6 py-3 font-bold rounded-full shadow transition-all"
            >
              {t.consultation}
            </Link>
            <a
              href="#portfolio-section"
              onClick={scrollToPortfolio}
              className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 px-6 py-3 font-bold rounded-full transition-all"
            >
              {t.portfolio}
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/image_menu_001.png"
            alt="Supernesia Rocket"
            width={600}
            height={700}
            className="w-full max-w-md object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>

      {/* CLIENTS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          Dipercaya oleh berbagai bisnis & startup
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {["client_001", "client_002", "client_003", "client_004", "client_005", "client_006", "client_007"].map((client, i) => (
            <Image
              key={i}
              src={`/${client}.png`}
              alt={`Client ${i + 1}`}
              width={120}
              height={40}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
