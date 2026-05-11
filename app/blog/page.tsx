"use client"

import React from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowUpRight, Calendar, User } from "lucide-react"

export const blogPosts = [
  {
    slug: "tren-pembuatan-website-mei-2026",
    title: "Tren Pembuatan Website & UI/UX Terbaik di Bulan Mei 2026",
    excerpt: "Memasuki pertengahan tahun 2026, tren desain website dan user experience mengalami perubahan besar menuju AI-driven interface dan micro-interactions.",
    date: "09 Mei 2026",
    author: "Tim Supernesia",
    category: "Web Development"
  },
  {
    slug: "pentingnya-custom-software-untuk-umkm-2026",
    title: "Mengapa UMKM Wajib Beralih ke Custom Software di 2026?",
    excerpt: "Di tahun 2026, efisiensi operasional bukan lagi sekadar pilihan, tapi keharusan. Custom software membantu UMKM mengotomatisasi sistem bisnis.",
    date: "05 Mei 2026",
    author: "Tim Supernesia",
    category: "Custom Software"
  },
  {
    slug: "optimasi-seo-terbaru-mei-2026",
    title: "Panduan Optimasi SEO Terbaru Mei 2026: Strategi Ampuh Tembus Halaman Satu",
    excerpt: "Google update terus berlanjut. Pelajari strategi SEO terbaru di bulan Mei 2026 agar website bisnis Anda tidak tertinggal dari kompetitor.",
    date: "02 Mei 2026",
    author: "Tim Supernesia",
    category: "Digital Marketing"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      
      {/* ── HERO ── */}
      <section className="relative bg-[#16232A] pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="relative inline-block transform -rotate-1 mb-6">
            <div
              className="text-[#16232A] px-8 py-3 text-4xl sm:text-5xl md:text-6xl font-black lowercase shadow-xl"
              style={{ background: "linear-gradient(225deg, transparent 24px, #D9E061 0)", borderRadius: "20px 0 20px 20px" }}
            >
              supernesia blog
              <div className="absolute top-0 right-0 w-8 h-8 bg-white/50" style={{ borderRadius: "0 0 0 16px" }} />
            </div>
          </div>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl">
            Insight, tips, dan tren terbaru seputar teknologi, web development, dan digitalisasi bisnis untuk tahun 2026.
          </p>
        </div>
      </section>

      {/* ── BLOG LIST ── */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Link href={`/blog/${post.slug}`} key={idx} className="group flex flex-col bg-white border border-gray-200 rounded-[24px] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D9E061]/20 to-[#EC5B70]/20 group-hover:scale-105 transition-transform duration-500" />
                <span className="text-[#16232A] font-black text-xl z-10 opacity-30">IMAGE</span>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-[#EC5B70] uppercase tracking-wider mb-3">{post.category}</span>
                <h3 className="text-[#16232A] font-black text-xl mb-3 leading-tight group-hover:text-[#2D8CFF] transition-colors line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
