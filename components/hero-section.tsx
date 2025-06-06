"use client"

import { useEffect, useState } from "react"
import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, TrendingUp, Users } from "lucide-react"

// Add this component after the imports and before the main component
function ClientCarousel({ language }: { language: string }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const clients = ["client_001", "client_002", "client_003", "client_004", "client_005", "client_006", "client_007"]

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 4))
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, clients.length])

  const slidesToShow = 4
  const totalSlides = Math.ceil(clients.length / slidesToShow)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl relative">
        <motion.div
          className="flex transition-transform duration-500 ease-in-out"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                {clients.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow).map((client, logoIndex) => (
                  <motion.div
                    key={`${slideIndex}-${logoIndex}`}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: logoIndex * 0.1,
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 10 },
                    }}
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-[#e9e15b]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />

                    {/* Logo Container - Consistent Size */}
                    <motion.div
                      className="relative bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-28 flex items-center justify-center"
                      whileHover={{
                        boxShadow: "0 20px 40px rgba(233, 225, 91, 0.2)",
                        borderColor: "#e9e15b",
                      }}
                    >
                      <Image
                        src={`/${client}.png`}
                        alt={`Client ${logoIndex + 1}`}
                        width={180}
                        height={60}
                        className="max-h-16 w-auto max-w-[140px] object-contain transition-all duration-300"
                      />
                    </motion.div>

                    {/* Hover Particles */}
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 bg-[#e9e15b] rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: logoIndex * 0.2,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows - Positioned relative to logo grid */}
        <button
          onClick={prevSlide}
          className="absolute left-2 bg-white/90 dark:bg-gray-800/90 hover:bg-[#e9e15b] hover:text-[#2b2b2b] text-gray-600 dark:text-gray-300 rounded-full p-2 shadow-lg transition-all duration-300 z-10"
          aria-label={language === "ID" ? "Slide sebelumnya" : "Previous slide"}
          style={{
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 bg-white/90 dark:bg-gray-800/90 hover:bg-[#e9e15b] hover:text-[#2b2b2b] text-gray-600 dark:text-gray-300 rounded-full p-2 shadow-lg transition-all duration-300 z-10"
          aria-label={language === "ID" ? "Slide selanjutnya" : "Next slide"}
          style={{
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#e9e15b] scale-125" : "bg-gray-300 dark:bg-gray-600 hover:bg-[#e9e15b]/60"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={language === "ID" ? `Ke slide ${index + 1}` : `Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-3">
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  )
}

const translations = {
  ID: {
    // Hero Section
    transform: "TRANSFORMASIKAN",
    business: "BISNISMU JADI",
    more: "LEBIH",
    super: "SUPER",
    description:
      "Kami bantu ubah ide dan bisnis Anda menjadi produk digital yang powerful, elegan, dan fungsional. Mulai dari website profesional, aplikasi mobile, hingga sistem kustom untuk mendukung pertumbuhan bisnis Anda. Supernesia hadir sebagai mitra digital yang memahami kebutuhan Anda dan menghadirkan solusi inovatif yang berdampak.",
    consultation: "Konsultasi Gratis",
    portfolio: "Hasil Karya Kami",

    // Client Section
    trustedBy: "Dipercaya oleh berbagai bisnis & startup",
    clientsTitle: "KLIEN TERPERCAYA",
    clientsSubtitle: "Partner Bisnis yang Telah Mempercayai Kami",

    // Stats
    growthRate: "Tingkat Pertumbuhan",
    happyClients: "Klien Puas",
    successRate: "Tingkat Keberhasilan",

    // Bottom Text
    bottomText: "Dipercaya oleh berbagai industri untuk solusi digital terdepan",

    // CTA Button
    joinThem: "Bergabung dengan Mereka",

    // Alt Text
    heroImageAlt: "Supernesia Rocket - Transformasi Digital",
    clientAlt: "Logo Klien",
  },
  EN: {
    // Hero Section
    transform: "TRANSFORM",
    business: "YOUR BUSINESS TO BE",
    more: "MORE",
    super: "SUPER",
    description:
      "We help turn your ideas and business into powerful, elegant, and functional digital products. From professional websites and mobile apps to tailored systems that support your business growth. Supernesia is your trusted digital partner, delivering impactful and innovative solutions.",
    consultation: "Free Consultation",
    portfolio: "Our Portfolio",

    // Client Section
    trustedBy: "Trusted by various businesses & startups",
    clientsTitle: "TRUSTED CLIENTS",
    clientsSubtitle: "Business Partners Who Have Trusted Us",

    // Stats
    growthRate: "Growth Rate",
    happyClients: "Happy Clients",
    successRate: "Success Rate",

    // Bottom Text
    bottomText: "Trusted by various industries for leading digital solutions",

    // CTA Button
    joinThem: "Join Them",

    // Alt Text
    heroImageAlt: "Supernesia Rocket - Digital Transformation",
    clientAlt: "Client Logo",
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
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

          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg text-lg">{t.description}</p>

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
            alt={t.heroImageAlt}
            width={600}
            height={700}
            className="w-full max-w-md object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>

      {/* CLIENTS SECTION WITH CAROUSEL */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="mt-20"
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center bg-[#e9e15b]/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Users className="w-5 h-5 text-[#2b2b2b] mr-2" />
            <span className="text-[#2b2b2b] font-semibold text-sm">{t.clientsTitle}</span>
            <Sparkles className="w-5 h-5 text-[#2b2b2b] ml-2" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-black text-[#2b2b2b] dark:text-white mb-3"
            variants={itemVariants}
          >
            {t.clientsSubtitle}
          </motion.h2>

          <motion.p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
            {t.trustedBy}
          </motion.p>
        </motion.div>

        {/* Clients Carousel Frame */}
        <motion.div className="relative max-w-6xl mx-auto" variants={itemVariants}>
          {/* Background Frame */}
          <motion.div
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#e9e15b] via-yellow-400 to-[#e9e15b]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Floating Background Elements */}
            <motion.div
              className="absolute top-8 right-8 w-20 h-20 bg-[#e9e15b]/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-8 left-8 w-16 h-16 bg-[#e9e15b]/5 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            {/* Stats Bar */}
            <motion.div className="flex flex-wrap justify-center items-center gap-6 mb-8" variants={containerVariants}>
              {[
                { icon: TrendingUp, label: t.growthRate, value: "300%" },
                { icon: Users, label: t.happyClients, value: "30+" },
                { icon: Sparkles, label: t.successRate, value: "99%" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                  variants={logoVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <stat.icon className="w-4 h-4 text-[#e9e15b]" />
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#2b2b2b] dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Client Logos Carousel */}
            <ClientCarousel language={language} />

            {/* Bottom Text */}
            <motion.div className="text-center mt-8" variants={itemVariants}>
              <motion.p
                className="text-gray-500 dark:text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                {t.bottomText}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Floating Action Button */}
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <Link href="/kontak">
              <motion.button
                className="bg-gradient-to-r from-[#e9e15b] to-yellow-400 hover:from-yellow-400 hover:to-[#e9e15b] text-[#2b2b2b] font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(233, 225, 91, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                <span className="relative z-10 flex items-center">
                  {t.joinThem}
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <TrendingUp className="w-4 h-4" />
                  </motion.div>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
