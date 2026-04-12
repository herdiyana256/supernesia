"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/layanan", label: "Layanan" },
    { href: "/tentang", label: "Tentang" },
    { href: "/kontak", label: "Kontak" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full px-6 sm:px-10 lg:px-[6%] py-5 font-sans transition-all duration-500 ${
        scrolled
          ? "bg-[#16232A]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between">

        {/* Left: Get In Touch Pill */}
        <div className="flex-1 flex justify-start">
          <Link
            href="/kontak"
            className="bg-[#D9E061] hover:bg-[#e8ef6a] font-bold px-7 py-3 rounded-full text-[#16232A] transition-all duration-300 text-sm tracking-wide shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(217,224,97,0.4)]"
          >
            Get In Touch
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10 shadow-sm border border-white/5">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/SUPERNESIA_LOGOS_MODE_DARK.png"
                alt="Supernesia"
                width={240}
                height={60}
                className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Right: Nav Links */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-8 lg:space-x-10 text-sm font-semibold">
          {navigationItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition-all duration-300 hover:text-[#D9E061] pb-1 group ${
                isActive(href) ? "text-[#D9E061]" : "text-white/85"
              }`}
            >
              {label}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#D9E061] rounded-full transition-all duration-300 ${isActive(href) ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex-1 flex justify-end items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-[#D9E061] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-[#16232A] flex flex-col items-center justify-center space-y-8">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#D9E061] transition-colors"
          >
            <X className="h-9 w-9" />
          </button>
          {navigationItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-4xl font-black transition-colors ${isActive(href) ? "text-[#D9E061]" : "text-white hover:text-[#D9E061]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/kontak"
            className="bg-[#D9E061] text-[#16232A] px-10 py-4 rounded-full font-bold text-xl hover:bg-[#e8ef6a] transition-colors mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  )
}
