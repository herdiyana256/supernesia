"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowUpRight } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Sitanggang",
    role: "CEO",
    desc: "Chief Executive Officer yang bertanggung jawab atas visi dan strategi perusahaan.",
    image: "/alex-sitanggang.png",
  },
  {
    name: "Herdiyan Adam Putra",
    role: "CIO",
    desc: "Chief Information Officer yang mengawasi inovasi teknologi dan pengembangan sistem.",
    image: "/herdiyan-adam-putra.png",
  },
  {
    name: "Rivan Rizky Chaeroni",
    role: "COO",
    desc: "Chief Operations Officer yang mengelola operasi sehari-hari dan inisiatif strategis.",
    image: "/rivan-rizky-chaeroni.png",
  },
]

const values = [
  { label: "Impact First", desc: "Setiap keputusan kami didasari oleh dampak nyata yang akan dirasakan klien dan masyarakat.", color: "#D9E061" },
  { label: "Radical Transparency", desc: "Tidak ada biaya tersembunyi, tidak ada janji palsu. Semua komunikasi jujur dan terbuka.", color: "#EC5B70" },
  { label: "Continuous Growth", desc: "Kami terus belajar, beradaptasi, dan meningkatkan standar kualitas kami setiap hari.", color: "#2D8CFF" },
  { label: "Partnership Over Vendor", desc: "Kami bukan sekadar vendor — kami adalah partner jangka panjang pertumbuhan bisnis kamu.", color: "#714AFE" },
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

        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-28 pb-20 flex flex-col items-center text-center relative z-10">
          {/* "hello" sticky note */}
          <div className="relative inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-500 mb-6">
            <div
              className="text-[#16232A] px-10 py-5 text-[2.5rem] md:text-[3.5rem] font-black tracking-tighter lowercase shadow-xl relative"
              style={{ background: "linear-gradient(225deg, transparent 28px, #D9E061 0)", borderRadius: "24px 0 24px 24px" }}
            >
              hello,
              <div className="absolute top-0 right-0 w-8 h-8 bg-white/50" style={{ borderRadius: "0 0 0 12px" }} />
            </div>
          </div>

          <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[8rem] font-black text-white tracking-tighter leading-none lowercase mb-8">
            we are supernesia.
          </h1>

          <p className="text-white/60 text-base md:text-xl font-medium leading-relaxed max-w-2xl">
            Didirikan pada tahun 2024, kami membantu bisnis secara strategis menavigasi transformasi digital dan inovasi teknologi melalui jasa pembuatan website profesional dan pengembangan software custom.
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
      <section className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left: Stacked sticky notes */}
            <div className="w-full lg:w-[35%] flex flex-col items-start">
              <div className="flex flex-col items-start gap-2 mb-10">
                <div className="relative inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div
                    className="text-[#16232A] px-8 py-5 text-[2.5rem] md:text-[3.5rem] font-black tracking-tighter lowercase shadow-xl relative"
                    style={{ background: "linear-gradient(225deg, transparent 28px, #D9E061 0)", borderRadius: "20px 0 20px 20px" }}
                  >
                    our
                    <svg className="w-14 h-3 mt-1 stroke-[#16232A]" viewBox="0 0 100 10" fill="none"><path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" /></svg>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-white/50" style={{ borderRadius: "0 0 0 12px" }} />
                  </div>
                </div>
                <div className="relative inline-block transform rotate-1 hover:rotate-0 transition-transform duration-500 -mt-2 ml-8">
                  <div
                    className="text-white px-8 py-5 text-[2.5rem] md:text-[3.5rem] font-black tracking-tighter lowercase shadow-xl relative"
                    style={{ background: "linear-gradient(45deg, transparent 28px, #EC5B70 0)", borderRadius: "20px 20px 20px 0" }}
                  >
                    story
                    <svg className="w-20 h-3 mt-1 stroke-white" viewBox="0 0 100 10" fill="none"><path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" /></svg>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/30" style={{ borderRadius: "0 12px 0 0" }} />
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
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Didirikan pada tahun 2024, Supernesia Creative Technology hadir dari visi untuk menjembatani kesenjangan antara praktik bisnis tradisional dan lanskap digital yang berkembang pesat. Pendiri kami, dengan latar belakang yang kuat dalam teknologi dan strategi bisnis, menyadari bahwa banyak UMKM dan organisasi berjuang menghadapi transformasi digital bukan karena kurangnya kemauan, tetapi karena kurangnya partner yang tepat.
              </p>

              {/* Visi + Misi cards */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white border border-gray-100 rounded-[24px] p-7 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-[#16232A] font-black text-xl mb-3">Visi</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Menjadi partner digital tepercaya bagi UMKM, Entitas bisnis progresif, dan kalangan akademik yang ingin melakukan transformasi digital strategis.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[24px] p-7 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-[#16232A] font-black text-xl mb-3">Misi</h3>
                  <ul className="space-y-2 text-gray-500 text-sm leading-relaxed">
                    <li>• Menyediakan panduan strategis dan solusi digital inovatif yang mendorong hasil bisnis nyata.</li>
                    <li>• Memberdayakan UMKM, perusahaan menengah, dan mahasiswa dengan alat serta edukasi digital.</li>
                  </ul>
                </div>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-[#16232A] font-black text-2xl mb-5">Our Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((v, i) => (
                    <div key={i} className="rounded-[20px] p-5 hover:-translate-y-0.5 transition-transform cursor-default" style={{ background: v.color + "18", borderLeft: `4px solid ${v.color}` }}>
                      <h4 className="text-[#16232A] font-black text-base mb-1">{v.label}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── Yellow-tinted cards */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3">The Team</p>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Temui para profesional berpengalaman yang memimpin visi dan operasi strategis Supernesia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-[24px] overflow-hidden bg-[#D9E061] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="w-full aspect-square relative bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-[#16232A] font-black text-base leading-tight mb-0.5">{member.name}</h4>
                  <p className="text-[#16232A]/60 font-bold text-xs mb-2">{member.role}</p>
                  <p className="text-[#16232A]/70 text-xs leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="relative inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div
                className="text-[#16232A] px-8 py-5 text-[2rem] md:text-[3.5rem] font-black tracking-tighter lowercase shadow-xl relative"
                style={{ background: "linear-gradient(225deg, transparent 28px, #D9E061 0)", borderRadius: "20px 0 20px 20px" }}
              >
                make it
                <div className="absolute top-0 right-0 w-9 h-9 bg-white/50" style={{ borderRadius: "0 0 0 14px" }} />
              </div>
            </div>
            <div className="relative inline-block transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div
                className="text-white px-8 py-5 text-[2rem] md:text-[3.5rem] font-black tracking-tighter lowercase shadow-xl relative"
                style={{ background: "linear-gradient(45deg, transparent 28px, #EC5B70 0)", borderRadius: "20px 20px 20px 0" }}
              >
                real.
                <div className="absolute bottom-0 left-0 w-9 h-9 bg-white/30" style={{ borderRadius: "0 14px 0 0" }} />
              </div>
            </div>
          </div>
          <div className="relative inline-block group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
              <div className="w-5 h-5 bg-[#EC5B70] rounded-full shadow-md" />
              <div className="w-[2px] h-4 bg-[#c0394e]" />
            </div>
            <Link
              href="/kontak"
              className="mt-4 inline-flex items-center gap-3 text-[#16232A] font-black text-xl px-12 py-5 rounded-full border-2 border-[#16232A] hover:bg-[#16232A] hover:text-white transition-all duration-300 shadow-lg hover:scale-105"
            >
              Hubungi Kami
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
