"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize dark mode from localStorage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("darkMode") === "true"
      setIsDarkMode(savedDarkMode)

      // Listen for dark mode changes
      const handleStorageChange = () => {
        const newDarkMode = localStorage.getItem("darkMode") === "true"
        setIsDarkMode(newDarkMode)
      }

      window.addEventListener("storage", handleStorageChange)

      // Also listen for direct dark mode changes
      const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains("dark")
        setIsDarkMode(isDark)
      })

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      })

      return () => {
        window.removeEventListener("storage", handleStorageChange)
        observer.disconnect()
      }
    }
  }, [])

  return (
    <footer className="bg-secondary text-white">
      <div className="px-4 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* --- Footer Logo & Intro --- */}
          <div>
            <div className="mb-4">
              <Image
                src={isDarkMode ? "/SUPERNESIA_LOGOS_MODE_DARK.png" : "/SUPERNESIA_LOGOS.png"}
                alt="Supernesia Logo Footer"
                width={300}
                height={200}
                className="h-8 w-auto object-contain mb-3"
              />
              <p className="text-sm leading-relaxed">
                Memberdayakan bisnis dengan solusi transformasi digital strategis sejak 2025
              </p>
            </div>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Github, label: "Github" },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="
                    text-white/80 
                    hover:text-primary 
                    transition-colors duration-300
                    transform 
                    hover:scale-110 
                    active:scale-95 
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    "
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* --- Footer Links: Layanan --- */}
          <div>
            <h3 className="font-bold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              {[
                "Strategi Teknologi & Digital",
                "Pengembangan Produk",
                "Otomatisasi Proses Bisnis",
                "Konsultasi Tech Stack",
                "Pengembangan Web & Mobile",
                "Desain UI/UX",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-sm text-white/80 
                      hover:text-primary 
                      transition-colors duration-300
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                      active:scale-95
                      "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Footer Links: Perusahaan --- */}
          <div>
            <h3 className="font-bold text-lg mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              {[
                { label: "Tentang Kami", href: "/" },
                { label: "Klien Kami", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Kontak", href: "#" },
                { label: "Karir", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="
                      text-sm text-white/80 
                      hover:text-primary 
                      transition-colors duration-300
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                      active:scale-95
                      "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Footer Contact Info --- */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                Gedung Wirausaha Lantai 1 Unit 104, Jalan HR Rasuna Said Kav. C-5 RT 003/RW 001 Kelurahan Karet,
                Kecamatan Setia Budi, Kota Jakarta Selatan, 12920
              </li>
              <li>WhatsApp: 0812-8189-2625</li>
              <li>info@supernesia.com</li>
            </ul>
          </div>
        </div>

        {/* --- Footer Bottom --- */}
        <div className="border-t border-white/20 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-white/80 order-last md:order-first mt-4 md:mt-0">
            © {new Date().getFullYear()} Supernesia. Semua hak dilindungi undang-undang.
          </p>

          <div className="flex gap-4 order-first md:order-last">
            {["Kebijakan Privasi", "Syarat Layanan"].map((item) => (
              <Link
                key={item}
                href="#"
                className="
                  text-sm text-white/80 
                  hover:text-primary 
                  transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                  active:scale-95
                  "
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
