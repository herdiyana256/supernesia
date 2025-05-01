"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsappCTA from "@/components/whatsapp-cta"
import SupernesiaChatbot from "@/components/supernesia-chatbot"
import { ArrowUpRight } from "lucide-react"

// Translations
const translations = {
  ID: {
    title1: "EXPERT DEVELOPMENT",
    title2: "WITH UPSCALE TECH",
    description:
      "Kami berspesialisasi dalam memberikan layanan pengembangan mobile dan web terbaik, dengan fokus pada pengembangan yang upscale. Keahlian kami mencakup berbagai industri, dan kami memiliki rekam jejak yang telah terbukti dalam menangani proyek berskala besar, aplikasi mobile, web dev ataupun sistem. Baik Anda sudah memiliki backend atau layanan API, kami dapat mengintegrasikan dan membuat antarmuka pengguna yang memukau untuk kebutuhan Anda.",
    learnMore: "Learn more",
    superService: "SUPER SERVICE DALAM",
    digitalIndustry: "INDUSTRI DIGITAL",
    serviceDesc:
      "Kami menawarkan pendekatan unik untuk transformasi digital yang berfokus pada hasil bisnis nyata dan solusi yang disesuaikan dengan kebutuhan spesifik Anda.",
    webDev: "Web Development",
    mobileApp: "Mobile & Desktop Apps",
    customSoftware: "Custom Software Development",
    serviceDescription: "Konsultasi strategis untuk menyelaraskan inisiatif teknologi dengan tujuan bisnis Anda.",
  },
  EN: {
    title1: "EXPERT DEVELOPMENT",
    title2: "WITH UPSCALE TECH",
    description:
      "We specialize in providing the best mobile and web development services, with a focus on upscale development. Our expertise spans various industries, and we have a proven track record in handling large-scale projects, mobile applications, web development, or systems. Whether you already have a backend or API service, we can integrate and create stunning user interfaces for your needs.",
    learnMore: "Learn more",
    superService: "SUPER SERVICE IN",
    digitalIndustry: "DIGITAL INDUSTRY",
    serviceDesc:
      "We offer a unique approach to digital transformation that focuses on real business results and solutions tailored to your specific needs.",
    webDev: "Web Development",
    mobileApp: "Mobile & Desktop Apps",
    customSoftware: "Custom Software Development",
    serviceDescription: "Strategic consultation to align technology initiatives with your business goals.",
  },
}

export default function LayananPage() {
  const [language, setLanguage] = useState("ID")
  const servicesRef = useRef<HTMLDivElement>(null)

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

  // Scroll to services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const services = [
    {
      title: t.webDev,
      description: t.serviceDescription,
      link: "/layanan/web-development",
    },
    {
      title: t.mobileApp,
      description: t.serviceDescription,
      link: "/layanan/mobile-app",
    },
    {
      title: t.customSoftware,
      description: t.serviceDescription,
      link: "/layanan/custom-software",
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section - layanan_001 */}
      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              {t.title1}
              <br />
              {t.title2}
            </h1>
            <div className="mt-8">
              <button onClick={scrollToServices} className="bg-primary px-6 py-3 font-bold rounded-full">
                {t.learnMore}
              </button>
            </div>
          </div>
          <div>
            <p className="text-gray-800 dark:text-gray-200">{t.description}</p>
          </div>
        </div>
      </section>

      {/* Services Section - layanan_002 */}
      <section ref={servicesRef} className="py-16 px-4 md:px-12 lg:px-20 bg-gray-900 rounded-none">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-white">
            {t.superService}
            <br />
            {t.digitalIndustry}
          </h2>
          <p className="text-white mb-12 max-w-3xl">{t.serviceDesc}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="border-t border-secondary my-3"></div>
                <p className="text-gray-600 dark:text-gray-300 mb-12">{service.description}</p>
                <div className="flex justify-end">
                  <Link href={service.link} className="text-secondary">
                    <ArrowUpRight size={24} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA - layanan_003 */}
      <WhatsappCTA />
      <SupernesiaChatbot />
      <Footer />
    </main>
  )
}
