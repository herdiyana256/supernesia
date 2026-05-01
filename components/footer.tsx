"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Facebook, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full font-sans bg-[#16232A]">

      {/* Newsletter Banner — yellow card floating above footer */}
      <div className="w-full px-4 md:px-12 lg:px-20 pt-0 z-20 relative">
        <div
          className="rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-[0_32px_80px_rgba(217,224,97,0.25)] flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 hover:-translate-y-1 transition-transform duration-500"
          style={{ background: "linear-gradient(135deg, #D9E061 0%, #e8ef6a 100%)" }}
        >
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#16232A] mb-1 md:mb-2 tracking-tighter">
              Ingin Berlangganan?
            </h2>
            <p className="text-[#16232A]/70 text-sm md:text-xl font-bold italic">
              Tetap up-date perkembangan kami.
            </p>
          </div>

          {/* Email input */}
          <div className="w-full lg:w-1/2 bg-white/25 border border-white/30 p-1.5 rounded-full flex shadow-inner backdrop-blur-sm">
            <input
              type="email"
              placeholder="Masukan Email..."
              className="w-full bg-transparent px-4 md:px-6 py-2.5 md:py-3 placeholder-[#16232A]/50 text-[#16232A] font-semibold outline-none rounded-l-full text-sm md:text-base min-w-0"
            />
            <button className="bg-[#EC5B70] text-white px-4 md:px-7 py-2.5 md:py-3 rounded-full font-black flex items-center gap-1 md:gap-2 hover:bg-[#d94a5f] transition-all shadow-lg hover:scale-105 flex-shrink-0 group text-sm md:text-base">
              Submit <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="w-full px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Column 1: Brand (span 2) */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="mb-6">
              <Image
                src="/SUPERNESIA_LOGOS_MODE_DARK.png"
                alt="Supernesia Logo"
                width={180}
                height={45}
                className="h-8 md:h-10 w-auto object-contain mb-5"
              />
              <p className="text-white/60 font-medium text-sm leading-relaxed max-w-[280px]">
                Memberdayakan bisnis dengan solusi transformasi digital strategis. Partner teknologi terpercaya UMKM & perusahaan Indonesia.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {[
                { Icon: Instagram, href: "https://instagram.com/supernesia.id" },
                { Icon: Linkedin, href: "https://linkedin.com/company/supernesia" },
                { Icon: Facebook, href: "https://facebook.com/supernesia" },
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/8 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-[#D9E061] hover:text-[#16232A] hover:border-[#D9E061] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-black text-white text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3 text-white/55 text-sm font-medium">
              {[
                { href: "/", label: "Home" },
                { href: "/layanan", label: "Layanan" },
                { href: "/tentang", label: "Tentang Kami" },
                { href: "/kontak", label: "Kontak" },
                { href: "/harga", label: "Pricing" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#D9E061] transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Layanan */}
          <div className="flex flex-col">
            <h3 className="font-black text-white text-sm uppercase tracking-widest mb-5">Layanan</h3>
            <ul className="space-y-3 text-white/55 text-sm font-medium">
              {[
                "Web Development",
                "Custom Software",
                "Mobile & Desktop Apps",
                "UI/UX Design",
                "AI Integration",
                "Maintenance & Support",
              ].map((s) => (
                <li key={s}>
                  <Link href="/layanan" className="hover:text-[#D9E061] transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontak */}
          <div className="flex flex-col">
            <h3 className="font-black text-white text-sm uppercase tracking-widest mb-5">Kontak</h3>
            <ul className="space-y-4 text-white/55 text-sm font-medium leading-relaxed">
              <li>
                <span className="block text-white/80 font-semibold mb-1 text-xs uppercase tracking-wide">Alamat</span>
                Gedung Wirausaha Lt.1 Unit 104, Jl. HR Rasuna Said Kav. C-5, Karet, Jakarta Selatan 12920
              </li>
              <li>
                <span className="block text-white/80 font-semibold mb-1 text-xs uppercase tracking-wide">WhatsApp</span>
                <Link href="https://wa.me/6281281892625" target="_blank" className="hover:text-[#D9E061] transition-colors">
                  0812-8189-2625
                </Link>
              </li>
              <li>
                <span className="block text-white/80 font-semibold mb-1 text-xs uppercase tracking-wide">Email</span>
                <Link href="mailto:info@supernesia.id" className="hover:text-[#D9E061] transition-colors">
                  info@supernesia.id
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto border-t border-white/8 mt-12 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/40 text-xs font-medium">
            <Link href="#" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Legal Notice</Link>
            <Link href="#" className="hover:text-white/70 transition-colors">Cookie Settings</Link>
          </div>
          <p className="text-white/40 text-xs font-semibold tracking-wide">
            © 2025 Supernesia Creative Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
