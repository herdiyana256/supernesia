"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// Translations
const translations = {
  ID: {
    title: "AYO BERGERAK",
    subtitle: "HUBUNGI KAMI MELALUI WHATSAPP",
    description:
      "Ingin tanya lebih lanjut tentang paket, benefit atupun fitur yang tersedia? atau ingin custom plan juga bisa. Kita siap untuk bantu perkembanganmu, gak perlu ragu buat nanya, kami siap melayani dan gratis pokoknya.",
    chatNow: "Chat Sekarang",
  },
  EN: {
    title: "LET'S GET STARTED",
    subtitle: "CONTACT US VIA WHATSAPP",
    description:
      "Want to ask more about packages, benefits, or available features? Or want a custom plan? We're ready to help your development, don't hesitate to ask, we're ready to serve and it's free!",
    chatNow: "Chat Now",
  },
}

export default function WhatsappCTA() {
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

  // Function to open the Supernesia chatbot
  const openChatbot = () => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.openSupernesiaChatbot) {
      // @ts-ignore
      window.openSupernesiaChatbot()
    }
  }

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-secondary font-medium mb-2">{t.title}</p>
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-4 dark:text-white">{t.subtitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t.description}</p>
            <button
              onClick={openChatbot}
              className="inline-block bg-primary px-6 py-3 rounded-full font-bold text-black"
            >
              {t.chatNow}
            </button>
          </div>
          <div className="flex justify-center">
            <Image src="/contact.png" alt="WhatsApp" width={300} height={300} className="w-full max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
