"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun, Globe } from "lucide-react"

// Translations
const translations = {
  ID: {
    home: "Home",
    services: "Layanan",
    pricing: "Harga",
    about: "Tentang",
    contact: "Kontak",
    register: "Hubungi Kami",
  },
  EN: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    register: "Get In Touch",
  },
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState("ID")
  const pathname = usePathname()

  // Initialize dark mode from localStorage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("darkMode") === "true"
      setIsDarkMode(savedDarkMode)
      if (savedDarkMode) {
        document.documentElement.classList.add("dark")
      }

      // Initialize language from localStorage if available
      const savedLanguage = localStorage.getItem("language")
      if (savedLanguage) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", String(newDarkMode))
      if (newDarkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }

  // Toggle language
  const toggleLanguage = () => {
    const newLanguage = language === "ID" ? "EN" : "ID"
    setLanguage(newLanguage)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLanguage)
      // Dispatch a custom event to notify other components about language change
      window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }))
    }
  }

  // Improved active path detection
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  // Get current translations
  const t = translations[language as keyof typeof translations]

  // Navigation items
  const navigationItems = [
    { href: "/", label: t.home },
    { href: "/layanan", label: t.services },
    { href: "/harga", label: t.pricing },
    { href: "/tentang", label: t.about },
    { href: "/kontak", label: t.contact },
  ]

  return (
    <header className="font-bebasNeue px-3 sm:px-4 md:px-8 lg:px-16 xl:px-20 sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-18 sm:h-20 md:h-22 lg:h-24 w-full min-w-0">
          {/* Logo with Dark/Light Mode Support - Compact */}
          <Link href="/" className="flex items-center flex-shrink-0 min-w-0 mr-4 sm:mr-6 md:mr-8">
            <Image
              src={isDarkMode ? "/SUPERNESIA_LOGOS_MODE_DARK.png" : "/SUPERNESIA_LOGOS.png"}
              alt="Supernesia"
              width={280}
              height={70}
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain max-w-none"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center justify-between flex-1 ml-8 lg:ml-12">
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-full px-1 py-1 mx-auto">
              {navigationItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-6 py-2 font-medium transition-all duration-200 rounded-full border border-gray-200/30 ${
                    isActive(href)
                      ? "bg-[#e9e15b] text-black shadow-sm"
                      : "text-gray-700 dark:text-gray-300 hover:bg-[#e9e15b]/20 hover:text-black dark:hover:text-black"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 ml-8">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="h-5 w-5" />
                <span className="ml-1 text-xs font-bold">{language}</span>
              </button>

              <Link
                href="/kontak"
                className="bg-[#e9e15b] hover:bg-[#e9e15b]/80 px-6 py-2 font-medium rounded-full text-black transition-colors"
              >
                {t.register}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-bold">{language}</span>
            </button>

            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-2 sm:px-4 shadow-md mt-4 rounded-lg border border-gray-200 dark:border-gray-700 w-full">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                    isActive(href)
                      ? "bg-[#e9e15b] text-black"
                      : "text-gray-700 dark:text-gray-300 hover:bg-[#e9e15b]/20 hover:text-black dark:hover:text-black"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/kontak"
                className="bg-[#e9e15b] hover:bg-[#e9e15b]/80 px-6 py-3 font-medium rounded-full text-center text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.register}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
