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
    register: "Daftar",
  },
  EN: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    register: "Register",
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

  // Determine active path
  const isActive = (path: string) => {
    return pathname === path
  }

  // Get current translations
  const t = translations[language as keyof typeof translations]

  return (
<header className="font-anton py-3 px-4 md:px-12 lg:px-20 sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/footer.png"
              alt="Supernesia"
              width={180}
              height={45}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center justify-between flex-1 ml-8">
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-full px-1 py-1 mx-auto">
              <Link
                href="/"
                className={`px-6 py-2 font-medium transition-colors rounded-full border border-gray-200/30 ${
                  isActive("/") ? "bg-primary text-black" : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {t.home}
              </Link>
              <Link
                href="/layanan"
                className={`px-6 py-2 font-medium transition-colors rounded-full border border-gray-200/30 ${
                  isActive("/layanan") ? "bg-primary text-black" : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {t.services}
              </Link>
              <Link
                href="/harga"
                className={`px-6 py-2 font-medium transition-colors rounded-full border border-gray-200/30 ${
                  isActive("/harga") ? "bg-primary text-black" : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {t.pricing}
              </Link>
              <Link
                href="/tentang"
                className={`px-6 py-2 font-medium transition-colors rounded-full border border-gray-200/30 ${
                  isActive("/tentang") ? "bg-primary text-black" : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {t.about}
              </Link>
              <Link
                href="/kontak"
                className={`px-6 py-2 font-medium transition-colors rounded-full border border-gray-200/30 ${
                  isActive("/kontak") ? "bg-primary text-black" : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {t.contact}
              </Link>
            </div>

            <div className="flex items-center space-x-4 ml-8">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center"
                aria-label="Toggle language"
              >
                <Globe className="h-5 w-5" />
                <span className="ml-1 text-xs font-bold">{language}</span>
              </button>

              <Link href="/kontak" className="bg-primary px-6 py-2 font-medium rounded-full">
                {t.register}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-bold">{language}</span>
            </button>

            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 shadow-md mt-2 rounded-lg">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={`font-medium ${isActive("/") ? "text-secondary" : "hover:text-secondary"}`}>
                {t.home}
              </Link>
              <Link
                href="/layanan"
                className={`font-medium ${isActive("/layanan") ? "text-secondary" : "hover:text-secondary"}`}
              >
                {t.services}
              </Link>
              <Link
                href="/harga"
                className={`font-medium ${isActive("/harga") ? "text-secondary" : "hover:text-secondary"}`}
              >
                {t.pricing}
              </Link>
              <Link
                href="/tentang"
                className={`font-medium ${isActive("/tentang") ? "text-secondary" : "hover:text-secondary"}`}
              >
                {t.about}
              </Link>
              <Link
                href="/kontak"
                className={`font-medium ${isActive("/kontak") ? "text-secondary" : "hover:text-secondary"}`}
              >
                {t.contact}
              </Link>
              <Link href="/kontak" className="bg-primary px-6 py-2 font-medium rounded-full text-center">
                {t.register}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
