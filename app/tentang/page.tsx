"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowUpRight, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: 'Alex Sitanggang',
    role: 'CEO',
    roleColor: '#CDFF00',
    desc: 'Chief Executive Officer yang bertanggung jawab atas visi dan strategi perusahaan.',
    linkedin: 'https://linkedin.com/in/alex-sitanggang',
    expertise: ['Pengalaman 5+ Tahun', 'Visi Strategis', 'Kepemimpinan'],
    stats: [
      { value: '50+', label: 'Proyek' },
      { value: '15+', label: 'Tim' },
      { value: '200%', label: 'Pertumbuhan' },
    ],
    image: "/alex-sitanggang.png",
  },
  {
    name: 'Herdiyan Adam Putra',
    role: 'CIO',
    roleColor: '#CDFF00',
    desc: 'Chief Information Officer yang mengelola inovasi teknologi dan pengembangan sistem.',
    linkedin: 'https://linkedin.com/in/herdiyan-adam',
    expertise: ['Inovasi Teknologi', 'Arsitektur Sistem', 'Transformasi Digital'],
    stats: [
      { value: '25+', label: 'Sistem' },
      { value: '40+', label: 'Inovasi' },
      { value: '150%', label: 'Efisiensi' },
    ],
    image: "/herdiyan-adam-putra.png",
  },
  {
    name: 'Rivan Rizky Chaeroni',
    role: 'COO',
    roleColor: '#CDFF00',
    desc: 'Chief Operations Officer yang mengelola operasi sehari-hari dan inisiatif strategis.',
    linkedin: 'https://linkedin.com/in/rivan-rizky',
    expertise: ['Keunggulan Produk', 'Strategi Operasional', 'Pengembangan Tim'],
    stats: [
      { value: '30+', label: 'Produk' },
      { value: '20+', label: 'Strategi' },
      { value: '180%', label: 'Peluncuran' },
    ],
    image: "/rivan-rizky-chaeroni.png",
  }
]

const values = [
  { label: "Impact First", desc: "Setiap keputusan kami dimulai dari satu pertanyaan: apakah ini akan benar-benar membantu bisnis kamu berkembang?", color: "#D9E061" },
  { label: "Radical Transparency", desc: "Tidak ada biaya tersembunyi. Tidak ada janji yang tidak bisa kami tepati. Kalau ada masalah, kamu adalah orang pertama yang kami beritahu.", color: "#EC5B70" },
  { label: "Continuous Growth", desc: "Teknologi berubah cepat, dan kami terus belajar lebih cepat. Tim kami aktif mengikuti tren terbaru agar solusi yang kami bangun tidak outdated besok.", color: "#2D8CFF" },
  { label: "Partnership Over Vendor", desc: "Kami tidak anggap project selesai saat kode di-deploy. Kami ada untuk support, iterate, dan tumbuh bersama kamu.", color: "#714AFE" },
]

export default function TentangPage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* ── HERO ── Dark */}
      <section className="relative min-h-screen bg-[#16232A] flex items-center overflow-hidden">
        {/* Decorative scribbles */}
        <div className="absolute top-[15%] right-[8%] opacity-40 hidden md:block">
          <svg className="stroke-[#D9E061] w-24 h-8" viewBox="0 0 100 20" fill="none">
            <path d="M0,10 Q15,2 30,10 T60,10 T90,18" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute bottom-[20%] left-[6%] opacity-30 hidden md:block">
          <svg className="stroke-[#EC5B70] w-20 h-7" viewBox="0 0 100 20" fill="none">
            <path d="M0,10 Q15,2 30,10 T60,10 T90,18" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute top-[40%] right-[15%] opacity-40 hidden md:block">
          <svg className="stroke-white/30 w-20 h-7" viewBox="0 0 100 20" fill="none">
            <path d="M0,10 Q15,2 30,10 T60,10 T90,18" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-28 md:pt-32 pb-16 flex flex-col items-center text-center relative z-10 overflow-hidden">
          {/* "hello" sticky note */}
          <div className="relative inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-500 mb-6 max-w-full">
            <div
              className="text-[#16232A] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter lowercase shadow-xl relative"
              style={{ background: "linear-gradient(225deg, transparent 24px, #D9E061 0)", borderRadius: "20px 0 20px 20px" }}
            >
              hello,
              <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/50" style={{ borderRadius: "0 0 0 16px" }} />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter leading-none lowercase mb-8 break-words max-w-full">
            we are supernesia.
          </h1>

          <p className="text-white/60 text-base md:text-xl font-medium leading-relaxed max-w-2xl">
            Didirikan pada 2024 di Jakarta, Supernesia hadir untuk satu tujuan: memastikan bisnis Indonesia tidak tertinggal di era digital. Kami bukan sekadar vendor — kami adalah partner pertumbuhan yang ikut berpikir, ikut eksekusi, dan ikut bertanggung jawab atas hasilnya.
          </p>

          {/* Down arrow SVG */}
          <div className="mt-16 text-white/30">
            <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
              <path d="M30 0 L30 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M10 60 L30 80 L50 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── White */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left: Stacked sticky notes */}
            <div className="w-full lg:w-[35%] flex flex-col items-start w-full">
              <div className="flex flex-col items-start gap-2 mb-10 w-full max-w-full">
                <div className="relative inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-full">
                  <div
                    className="text-[#16232A] px-6 sm:px-8 py-3 sm:py-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter lowercase shadow-xl relative"
                    style={{ background: "linear-gradient(225deg, transparent 24px, #D9E061 0)", borderRadius: "20px 0 20px 20px" }}
                  >
                    our
                    <svg className="w-12 sm:w-14 h-3 mt-1 stroke-[#16232A]" viewBox="0 0 100 10" fill="none"><path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" /></svg>
                    <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/50" style={{ borderRadius: "0 0 0 12px" }} />
                  </div>
                </div>
                <div className="relative inline-block transform rotate-1 hover:rotate-0 transition-transform duration-500 -mt-2 ml-4 sm:ml-8 max-w-full">
                  <div
                    className="text-white px-6 sm:px-8 py-3 sm:py-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter lowercase shadow-xl relative"
                    style={{ background: "linear-gradient(45deg, transparent 24px, #EC5B70 0)", borderRadius: "20px 20px 20px 0" }}
                  >
                    story
                    <svg className="w-16 sm:w-20 h-3 mt-1 stroke-white" viewBox="0 0 100 10" fill="none"><path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" /></svg>
                    <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/30" style={{ borderRadius: "0 12px 0 0" }} />
                  </div>
                </div>
              </div>

              {/* Scribble text decoration */}
              <div className="mt-4 opacity-50">
                <Image src="/asaf sdag.png" alt="" width={100} height={30} className="object-contain" />
                <Image src="/asaf sdag-1.png" alt="" width={80} height={24} className="object-contain mt-3" />
              </div>
            </div>

            {/* Right: Story content */}
            <div className="w-full lg:w-[65%] flex flex-col gap-8">
              {/* Story text */}
              <div className="text-gray-500 text-base md:text-lg leading-relaxed flex flex-col gap-4">
                <p>Supernesia lahir dari frustrasi nyata. Terlalu banyak bisnis bagus yang stuck bukan karena kurang modal atau kurang semangat — tapi karena tidak punya partner teknologi yang benar-benar mengerti kebutuhan mereka.</p>
                <p>Kami memulai dengan satu prinsip sederhana: bangun solusi yang benar-benar bekerja, bukan yang sekadar terlihat bagus di proposal.</p>
                <p>Dari website pertama yang kami deliver, hingga sistem enterprise yang kami bangun hari ini — setiap project adalah bukti bahwa transformasi digital bisa dilakukan dengan cara yang manusiawi, transparan, dan hasilnya terukur.</p>
              </div>

              {/* Visi + Misi cards */}
              <div className="grid md:grid-cols-2 gap-5 mt-4">
                <div className="group relative bg-[#16232A] border border-[#16232A] rounded-[24px] p-8 hover:shadow-[0_20px_40px_rgba(217,224,97,0.2)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden z-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#D9E061] to-transparent opacity-20 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-[2] transition-transform duration-700 ease-out" />
                  <h3 className="text-[#D9E061] font-black text-2xl mb-4 relative z-10">Visi</h3>
                  <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                    Menjadi studio teknologi paling dipercaya di Indonesia — tempat bisnis dari semua skala bisa datang dengan masalah nyata dan pulang dengan solusi yang benar-benar berjalan.
                  </p>
                </div>
                <div className="group relative bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden z-10">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#EC5B70] to-transparent opacity-10 rounded-full translate-y-1/2 translate-x-1/3 group-hover:scale-[2] transition-transform duration-700 ease-out" />
                  <h3 className="text-[#16232A] font-black text-2xl mb-5 relative z-10">Misi</h3>
                  <ul className="space-y-4 text-gray-500 text-sm leading-relaxed relative z-10">
                    <li className="flex items-start gap-4"><div className="w-2 h-2 bg-[#D9E061] rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_#D9E061]" />Deliver solusi digital yang menghasilkan pertumbuhan nyata, bukan sekadar produk yang &quot;selesai dibuat&quot;</li>
                    <li className="flex items-start gap-4"><div className="w-2 h-2 bg-[#EC5B70] rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_#EC5B70]" />Menjadi partner jangka panjang yang tumbuh bersama klien, bukan vendor yang hilang setelah project selesai</li>
                    <li className="flex items-start gap-4"><div className="w-2 h-2 bg-[#2D8CFF] rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_#2D8CFF]" />Membuat teknologi canggih lebih accessible untuk UMKM dan bisnis Indonesia</li>
                  </ul>
                </div>
              </div>

              {/* Values */}
              <div className="mt-4">
                <h3 className="text-[#16232A] font-black text-2xl mb-6">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {values.map((v, i) => (
                    <div key={i} className="group relative bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default">
                      {/* Animated expanding left border/background */}
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 opacity-10 group-hover:w-full transition-all duration-500 ease-out" style={{ background: v.color }} />
                      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: v.color }} />
                      
                      <div className="relative z-10 pl-3">
                        <h4 className="text-[#16232A] font-black text-lg mb-2 group-hover:tracking-wide transition-all duration-300">{v.label}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY / TIMELINE ── */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[#16232A] font-black text-3xl md:text-4xl mb-4 lowercase tracking-tight">our journey</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Perjalanan pertumbuhan Supernesia dari awal berdiri hingga saat ini.
            </p>
          </div>

          <div className="flex flex-col gap-8 border-l-4 border-[#D9E061] pl-6 md:pl-10 py-2 ml-4 md:ml-8 relative">
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 md:w-8 md:h-8 bg-gray-50 border-4 border-[#EC5B70] rounded-full" />
              <h3 className="text-[#16232A] font-black text-xl md:text-2xl mb-1">2024 Q1 — Founded</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                Supernesia resmi didirikan di Jakarta dengan 3 co-founder dan 1 misi: demokratisasi teknologi untuk bisnis Indonesia.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 md:w-8 md:h-8 bg-gray-50 border-4 border-[#2D8CFF] rounded-full" />
              <h3 className="text-[#16232A] font-black text-xl md:text-2xl mb-1">2024 Q2 — First 10 Clients</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                Mencapai 10 klien pertama dalam 90 hari, dari UMKM hingga startup teknologi.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 md:w-8 md:h-8 bg-gray-50 border-4 border-[#F97316] rounded-full" />
              <h3 className="text-[#16232A] font-black text-xl md:text-2xl mb-1">2024 Q3 — Product Expansion</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                Meluncurkan layanan AI & Automation dan Custom Software untuk menjawab kebutuhan klien yang semakin kompleks.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 md:w-8 md:h-8 bg-gray-50 border-4 border-[#8B5CF6] rounded-full" />
              <h3 className="text-[#16232A] font-black text-xl md:text-2xl mb-1">2024 Q4 — 50+ Projects</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                Menutup tahun pertama dengan 50+ project sukses dan rating klien 4.9/5.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 md:w-8 md:h-8 bg-gray-50 border-4 border-[#D9E061] rounded-full" />
              <h3 className="text-[#16232A] font-black text-xl md:text-2xl mb-1">2025 — Scaling Up</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                Ekspansi tim, layanan Mobile Apps & UI/UX Design, dan mulai melayani klien enterprise skala menengah.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 md:w-8 md:h-8 bg-gray-50 border-4 border-[#16232A] rounded-full" />
              <h3 className="text-[#16232A] font-black text-xl md:text-2xl mb-1">2026 — Going Further</h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                Supernesia terus tumbuh dengan fokus pada inovasi AI, automasi bisnis, dan memperluas jangkauan ke lebih banyak industri di seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── Yellow-tinted cards */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3">The Team</p>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Temui para profesional berpengalaman yang memimpin visi dan operasi strategis Supernesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-[24px] overflow-hidden bg-white border-2 border-gray-100 hover:border-[#D9E061] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
              >
                {/* Photo Header */}
                <div className="w-full bg-[#16232A] pt-10 pb-4 px-6 flex flex-col items-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9E061] opacity-10 rounded-full -translate-y-1/2 translate-x-1/3" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#EC5B70] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="w-28 h-28 rounded-full border-4 border-white/10 overflow-hidden relative mb-4 z-10 shadow-xl bg-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-white font-black text-xl leading-tight mb-1 text-center relative z-10">{member.name}</h4>
                  <span className="inline-block bg-[#D9E061] text-[#16232A] px-3 py-1 rounded-full text-xs font-bold relative z-10">{member.role}</span>
                </div>

                {/* Details Wrapper */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed text-center mb-6">{member.desc}</p>

                  <div className="grid grid-cols-1 grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-100 pt-5">
                        {/* Expertise dots */}
                        <ul className="mb-5 grid grid-cols-1 gap-1.5">
                          {member.expertise.map((e, ei) => (
                            <li key={ei} className="text-xs text-gray-500 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#D9E061]" />
                              {e}
                            </li>
                          ))}
                        </ul>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-2 text-center isolate">
                          {member.stats.map((s, si) => (
                            <div key={si} className="flex flex-col">
                              <strong className="text-[#16232A] font-black text-base">{s.value}</strong>
                              <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">{s.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-transparent group-hover:border-gray-50 transition-colors">
                    {/* LinkedIn button */}
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-200 rounded-full text-sm font-bold text-[#0A66C2] mx-auto w-fit hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors duration-300">
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 w-full">
            <div className="relative inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-500 max-w-full">
              <div
                className="text-[#16232A] px-6 sm:px-8 py-3 sm:py-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter lowercase shadow-xl relative"
                style={{ background: "linear-gradient(225deg, transparent 24px, #D9E061 0)", borderRadius: "20px 0 20px 20px" }}
              >
                make it
                <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/50" style={{ borderRadius: "0 0 0 14px" }} />
              </div>
            </div>
            <div className="relative inline-block transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-full">
              <div
                className="text-white px-6 sm:px-8 py-3 sm:py-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter lowercase shadow-xl relative"
                style={{ background: "linear-gradient(45deg, transparent 24px, #EC5B70 0)", borderRadius: "20px 20px 20px 0" }}
              >
                real.
                <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/30" style={{ borderRadius: "0 14px 0 0" }} />
              </div>
            </div>
          </div>
          <div className="relative inline-block group w-full sm:w-auto">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
              <div className="w-5 h-5 bg-[#EC5B70] rounded-full shadow-md" />
              <div className="w-[2px] h-4 bg-[#c0394e]" />
            </div>
            <Link
              href="/kontak"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 text-[#16232A] font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full border-2 border-[#16232A] hover:bg-[#16232A] hover:text-white transition-all duration-300 shadow-lg hover:scale-105"
            >
              Hubungi Kami
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
