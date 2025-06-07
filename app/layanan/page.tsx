"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsappCTA from "@/components/whatsapp-cta"
import SupernesiaChatbot from "@/components/supernesia-chatbot"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ChevronDown, Code, Smartphone, Server, Sparkles, Zap, Globe } from "lucide-react"

// Translations
const translations = {
  ID: {
    title1: "EXPERT DEVELOPMENT",
    title2: "WITH UPSCALE TECH",
    description:
      "Kami berspesialisasi dalam memberikan layanan pengembangan mobile dan web terbaik, dengan fokus pada pengembangan yang upscale. Keahlian kami mencakup berbagai industri, dan kami memiliki rekam jejak yang telah terbukti dalam menangani proyek berskala besar, aplikasi mobile, web dev ataupun sistem. Baik Anda sudah memiliki backend atau layanan API, kami dapat mengintegrasikan dan membuat antarmuka pengguna yang memukau untuk kebutuhan Anda.",
    learnMore: "Pelajari Lebih Lanjut",
    superService: "SUPER SERVICE DALAM",
    digitalIndustry: "INDUSTRI DIGITAL",
    serviceDesc:
      "Kami menawarkan pendekatan unik untuk transformasi digital yang berfokus pada hasil bisnis nyata dan solusi yang disesuaikan dengan kebutuhan spesifik Anda.",
    webDev: "Web Development",
    mobileApp: "Mobile & Desktop Apps",
    customSoftware: "Custom Software Development",
    serviceDescription: "Konsultasi strategis untuk menyelaraskan inisiatif teknologi dengan tujuan bisnis Anda.",
    viewDetails: "Lihat Detail",
    expertise: "KEAHLIAN KAMI",
    expertiseDesc: "Teknologi dan keahlian yang kami gunakan untuk memberikan solusi terbaik",
  },
  EN: {
    title1: "EXPERT DEVELOPMENT",
    title2: "WITH UPSCALE TECH",
    description:
      "We specialize in providing the best mobile and web development services, with a focus on upscale development. Our expertise spans various industries, and we have a proven track record in handling large-scale projects, mobile applications, web development, or systems. Whether you already have a backend or API service, we can integrate and create stunning user interfaces for your needs.",
    learnMore: "Learn More",
    superService: "SUPER SERVICE IN",
    digitalIndustry: "DIGITAL INDUSTRY",
    serviceDesc:
      "We offer a unique approach to digital transformation that focuses on real business results and solutions tailored to your specific needs.",
    webDev: "Web Development",
    mobileApp: "Mobile & Desktop Apps",
    customSoftware: "Custom Software Development",
    serviceDescription: "Strategic consultation to align technology initiatives with your business goals.",
    viewDetails: "View Details",
    expertise: "OUR EXPERTISE",
    expertiseDesc: "Technologies and expertise we use to deliver the best solutions",
  },
}

export default function LayananPage() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID")
  const servicesRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 })

  // Listen for language changes
  useEffect(() => {
    // Initialize language from localStorage
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as "ID" | "EN"
      if (savedLanguage) {
        setLanguage(savedLanguage)
      }
    }

    // Listen for language change events from navbar
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail as "ID" | "EN")
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  // Get current translations
  const t = translations[language]

  // Scroll to services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const services = [
    {
      title: t.webDev,
      description: t.serviceDescription,
      link: "/layanan/web-development",
      icon: Globe,
    },
    {
      title: t.mobileApp,
      description: t.serviceDescription,
      link: "/layanan/mobile-app",
      icon: Smartphone,
    },
    {
      title: t.customSoftware,
      description: t.serviceDescription,
      link: "/layanan/custom-software",
      icon: Server,
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero Section - layanan_001 */}
      <section ref={heroRef} className="relative py-20 px-4 md:px-12 lg:px-20 min-h-[80vh] flex items-center">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 w-32 h-32 bg-[#e9e15b]/10 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute top-40 right-20 w-48 h-48 bg-[#2b2b2b]/5 dark:bg-[#e9e15b]/5 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "4s" }}
            className="absolute bottom-20 left-1/4 w-36 h-36 bg-[#e9e15b]/15 rounded-full blur-xl"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ scale: 0 }}
                animate={isHeroInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-[#e9e15b]/20 dark:bg-[#e9e15b]/30 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-5 h-5 text-[#2b2b2b] dark:text-[#e9e15b]" />
                <span className="text-[#2b2b2b] dark:text-[#e9e15b] font-semibold">{t.expertise}</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-black leading-tight mb-6 text-[#2b2b2b] dark:text-white"
                variants={textRevealVariants}
              >
                <span className="inline-block">{t.title1}</span>
                <br />
                {t.title2}
              </motion.h1>

              <motion.div variants={textRevealVariants} className="mt-8">
                <motion.button
                  onClick={scrollToServices}
                  className="group relative overflow-hidden bg-[#e9e15b] text-[#2b2b2b] px-8 py-4 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span className="relative z-10 flex items-center gap-2">
                    {t.learnMore}
                    <motion.div
                      initial={{ x: -5, opacity: 0.5 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "mirror",
                        duration: 1,
                      }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-[#2b2b2b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t.learnMore}
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.p
                className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
                variants={textRevealVariants}
              >
                {t.description}
              </motion.p>
              <motion.div
                className="mt-8 flex justify-end"
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full bg-[#e9e15b]/20 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Zap className="w-10 h-10 text-[#2b2b2b] dark:text-[#e9e15b]" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - layanan_002 */}
      <section
        ref={servicesRef}
        className="relative py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-[#2b2b2b] to-gray-900"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 0 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#e9e15b" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isServicesInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-[#e9e15b]/20 px-4 py-2 rounded-full mb-6"
            >
              <Code className="w-5 h-5 text-[#e9e15b]" />
              <span className="text-[#e9e15b] font-semibold">{t.expertise}</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-black leading-tight mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span>{t.superService}</span>
              <br />
              {t.digitalIndustry}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {t.serviceDesc}
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#e9e15b]/20 flex items-center justify-center group-hover:bg-[#e9e15b] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#2b2b2b]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2b2b2b] dark:text-white">{service.title}</h3>
                  </div>

                  <div className="border-t border-[#2b2b2b]/20 dark:border-[#e9e15b]/20 my-4"></div>

                  <p className="text-gray-600 dark:text-gray-300 mb-8 h-24">{service.description}</p>

                  <div className="flex justify-end">
                    <Link href={service.link}>
                      <motion.div
                        className="w-12 h-12 rounded-full bg-[#e9e15b]/10 flex items-center justify-center text-[#2b2b2b] dark:text-[#e9e15b] group-hover:bg-[#e9e15b] group-hover:text-[#2b2b2b] transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowUpRight size={20} />
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA - layanan_003 */}
      <WhatsappCTA />
      <SupernesiaChatbot />
      <Footer />
    </main>
  )
}
