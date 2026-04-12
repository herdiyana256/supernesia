"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowUpRight, Check } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "🌐",
    iconColor: "#FF7A00",
    desc: "From company profile to e-commerce — we build fast, responsive, and scalable websites tailored to your business needs.",
    features: ["Landing Page", "Company Profile", "E-Commerce", "Web App", "Dashboard Admin", "API Integration"],
    href: "/layanan/web-development",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    icon: "📦",
    iconColor: "#714AFE",
    desc: "Got a unique business process? We develop custom systems like CRM, inventory, POS, and internal tools that actually fit how you work.",
    features: ["Sistem CRM", "Inventory Management", "Point of Sale", "ERP System", "Workflow Automation", "Reporting Dashboard"],
    href: "/layanan/custom-software",
  },
  {
    id: "maintenance",
    title: "Maintenance & Revamp",
    icon: "🔧",
    iconColor: "#2D8CFF",
    desc: "We keep your digital product healthy — bug fixing, performance boost, security patching, SEO, & redesign.",
    features: ["Bug Fixing", "Performance Optimization", "Security Patching", "SEO Improvement", "UI Redesign", "Code Refactoring"],
    href: "#",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: "🤖",
    iconColor: "#EC5B70",
    desc: "Automate repetitive tasks, deploy AI agents, or launch a WhatsApp chatbot to serve your customers 24/7.",
    features: ["AI Chatbot", "WhatsApp Bot", "Data Analysis", "Process Automation", "Recommendation System", "AI Integration"],
    href: "#",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Research",
    desc: "Memahami bisnis kamu dari akar. Kami analisa kebutuhan, target market, dan kompetitor untuk memastikan solusi yang kami bangun tepat sasaran dan deliver hasil maksimal.",
    color: "#D9E061",
  },
  {
    step: "02",
    title: "Planning & Design",
    desc: "Kami buat wireframe, architecture, dan UI/UX mockup yang pixel-perfect sebelum coding dimulai. Kamu approve dulu, baru kami build.",
    color: "#EC5B70",
  },
  {
    step: "03",
    title: "Development",
    desc: "Tim developer kami build dengan clean code, teknologi terkini, dan best practice. Kamu bisa pantau progress real-time.",
    color: "#2D8CFF",
  },
  {
    step: "04",
    title: "Testing & QA",
    desc: "Sebelum launch, kami lakukan QA testing menyeluruh — dari functionality, performance, security, hingga mobile responsiveness.",
    color: "#714AFE",
  },
  {
    step: "05",
    title: "Launch & Support",
    desc: "Go live! Kami bantu deploy dan pastikan semua berjalan sempurna. After launch, kami tetap standby untuk support dan maintenance.",
    color: "#FF7A00",
  },
]

export default function LayananPage() {
  const [activeService, setActiveService] = useState(0)
  const [parallax, setParallax] = useState("translate(0px, 0px)")

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20
    setParallax(`translate(${x}px, ${y}px)`)
  }

  return (
    <div className="min-h-screen bg-[#16232A] font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-[#16232A] flex flex-col overflow-hidden pt-24">
        {/* Decorative bolts */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[20%] right-[30%] text-[#D9E061] opacity-70 rotate-12">
            <svg width="28" height="44" viewBox="0 0 24 40" fill="currentColor"><path d="M14 2L4 22h9l-3 16 14-22h-10l3-14z" /></svg>
          </div>
          <div className="absolute top-[50%] left-[5%] text-[#EC5B70] opacity-60 -rotate-15">
            <svg width="40" height="60" viewBox="0 0 24 40" fill="currentColor"><path d="M14 2L4 22h9l-3 16 14-22h-10l3-14z" /></svg>
          </div>
        </div>

        <div className="flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12 py-16 relative z-10">
          {/* Left text */}
          <div className="w-full md:w-[60%] flex flex-col">
            <p className="text-white/60 text-2xl md:text-3xl font-light italic mb-2">/level up your</p>
            <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[7rem] font-black text-white tracking-tighter leading-none lowercase mb-4">
              digital impact
            </h1>
            {/* "today." sticky note */}
            <div className="relative inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-500 mb-8 self-start">
              <div
                className="text-[#16232A] px-10 py-5 text-[3rem] md:text-[4.5rem] font-black tracking-tighter lowercase shadow-[0_20px_50px_rgba(217,224,97,0.4)]"
                style={{ background: "linear-gradient(225deg, transparent 32px, #D9E061 0)", borderRadius: "24px 0 24px 24px" }}
              >
                today.
                <div className="absolute top-0 right-0 w-9 h-9 bg-white/50 shadow-md" style={{ borderRadius: "0 0 0 14px" }} />
              </div>
            </div>

            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mb-8">
              Supernesia Creative Tech adalah perusahaan teknologi yang berfokus pada solusi digital untuk pertumbuhan bisnis, mulai dari Website, Apps Development, Custom Software, AI, hingga strategi digital.
            </p>

            <div className="relative inline-block self-start">
              <Link
                href="/kontak"
                className="bg-white text-[#16232A] font-black px-9 py-4 rounded-full inline-flex items-center gap-2 hover:bg-white/90 transition-all shadow-xl hover:scale-105"
              >
                Start a Project
              </Link>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#EC5B70] rounded-full shadow-md z-20" />
            </div>
          </div>

          {/* Right: person image with Motion & Parallax */}
          <div 
            className="w-full md:w-[40%] relative h-[400px] md:h-[560px] group cursor-default"
            onMouseMove={handleMouseMove}
          >
            {/* Glow Depth background */}
            <div className="absolute inset-0 bg-[#EC5B70]/20 blur-[80px] rounded-full scale-75 z-0" />

            <div 
              className="relative w-full h-full transition-transform duration-700 ease-out z-10"
              style={{ transform: parallax }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image 
                  src="/hero-layanan.jpg" 
                  alt="Supernesia Services" 
                  fill 
                  className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-[32px] group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pink ticker */}
        <div className="w-full bg-[#EC5B70] overflow-hidden py-4 relative z-20">
          <div className="flex items-center gap-0 whitespace-nowrap" style={{ animation: "ticker 20s linear infinite" }}>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 pr-8 flex-shrink-0">
                <span className="text-white font-black text-lg tracking-wide">Let&apos;s build your project</span>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="white" className="flex-shrink-0">
                  <path d="M10 0L12.9 7.1L20 10L12.9 12.9L10 20L7.1 12.9L0 10L7.1 7.1L10 0Z" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </section>

      {/* ── SUPER SERVICE ── */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Decorative bubble icons left */}
        <div className="absolute left-[3%] top-1/2 -translate-y-1/2 flex flex-col gap-6 pointer-events-none hidden lg:flex">
          {[
            { color: "#FF7A00", size: 70 },
            { color: "#EC5B70", size: 55 },
            { color: "#2D8CFF", size: 65 },
            { color: "#714AFE", size: 50 },
          ].map((b, i) => (
            <div key={i} className="relative">
              <div
                className="rounded-full border-[5px] border-white shadow-lg flex items-center justify-center"
                style={{ width: b.size, height: b.size, background: b.color }}
              />
              {/* paper clips scattered */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 opacity-70 rotate-[30deg]">
                <Image src="/clip paper.png" alt="" width={20} height={20} className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Stacked sticky notes title */}
            <div className="w-full lg:w-[35%] flex flex-col items-start gap-2 pt-4">
              <div className="relative inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div
                  className="text-[#16232A] px-8 py-5 text-[3rem] md:text-[4rem] font-black tracking-tighter lowercase shadow-xl relative"
                  style={{ background: "linear-gradient(225deg, transparent 28px, #D9E061 0)", borderRadius: "20px 0 20px 20px" }}
                >
                  super
                  <svg className="w-24 h-3 mt-1 stroke-[#16232A]" viewBox="0 0 100 10" fill="none"><path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" /></svg>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white/50" style={{ borderRadius: "0 0 0 12px" }} />
                </div>
              </div>
              <div className="relative inline-block transform rotate-1 hover:rotate-0 transition-transform duration-500 -mt-2 ml-6">
                <div
                  className="text-white px-8 py-5 text-[3rem] md:text-[4rem] font-black tracking-tighter lowercase shadow-xl relative"
                  style={{ background: "linear-gradient(45deg, transparent 28px, #EC5B70 0)", borderRadius: "20px 20px 20px 0" }}
                >
                  service
                  <svg className="w-28 h-3 mt-1 stroke-white" viewBox="0 0 100 10" fill="none"><path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" /></svg>
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/30" style={{ borderRadius: "0 12px 0 0" }} />
                </div>
              </div>
              <p className="text-gray-400 text-lg font-medium leading-relaxed mt-6 max-w-sm italic">
                &ldquo;Every service we offer is designed to solve real problems — not just look good on paper.&rdquo;
              </p>
            </div>

            {/* Right: Service Cards Grid */}
            <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((svc, idx) => (
                <div
                  key={idx}
                  className={`relative bg-white border-2 rounded-[24px] p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 group ${
                    activeService === idx ? "border-[#D9E061] shadow-[0_8px_32px_rgba(217,224,97,0.25)]" : "border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md"
                  }`}
                  onClick={() => setActiveService(idx)}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4 text-white text-lg"
                    style={{ background: svc.iconColor }}
                  >
                    {svc.icon}
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-[#16232A]" />
                  </div>
                  <h3 className="text-[#16232A] font-black text-xl mb-3 tracking-tight">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>

                  {/* Expanded features */}
                  {activeService === idx && (
                    <div className="grid grid-cols-2 gap-2 mt-4 border-t border-gray-100 pt-4">
                      {svc.features.map((f, fi) => (
                        <div key={fi} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                          <Check className="w-4 h-4 text-[#D9E061] flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Sticky note corner fold */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 opacity-60" style={{ background: `linear-gradient(225deg, ${svc.iconColor}30, transparent 70%)`, borderRadius: "0 0 20px 0" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left: Sticky note titles + floating service icons */}
            <div className="w-full lg:w-[35%] sticky top-28">
              <div className="flex flex-col items-start gap-2 mb-10">
                <div className="relative inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div
                    className="text-[#16232A] px-8 py-5 text-[2.5rem] md:text-[3.5rem] font-black tracking-tighter lowercase shadow-xl relative"
                    style={{ background: "linear-gradient(225deg, transparent 28px, #D9E061 0)", borderRadius: "20px 0 20px 20px" }}
                  >
                    how
                    <svg className="w-16 h-3 mt-1 stroke-[#16232A]" viewBox="0 0 100 10" fill="none"><path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" /></svg>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-white/50" style={{ borderRadius: "0 0 0 12px" }} />
                  </div>
                </div>
                <div className="relative inline-block transform rotate-1 hover:rotate-0 transition-transform duration-500 -mt-1 ml-8">
                  <div
                    className="text-white px-8 py-5 text-[2.5rem] md:text-[3.5rem] font-black tracking-tighter lowercase shadow-xl relative"
                    style={{ background: "linear-gradient(45deg, transparent 28px, #EC5B70 0)", borderRadius: "20px 20px 20px 0" }}
                  >
                    we work
                    <svg className="w-24 h-3 mt-1 stroke-white" viewBox="0 0 100 10" fill="none"><path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" /></svg>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/30" style={{ borderRadius: "0 12px 0 0" }} />
                  </div>
                </div>
              </div>

              {/* Floating service bubbles row */}
              <div className="flex gap-4 flex-wrap">
                {[
                  { color: "#FF7A00", size: 56 },
                  { color: "#EC5B70", size: 44 },
                  { color: "#714AFE", size: 50 },
                  { color: "#2D8CFF", size: 52 },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="rounded-full border-[4px] border-white shadow-lg hover:scale-110 transition-transform cursor-default"
                    style={{ width: b.size, height: b.size, background: b.color }}
                  />
                ))}
              </div>
            </div>

            {/* Right: Steps timeline with snake path */}
            <div className="w-full lg:w-[65%] relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block" />

              <div className="flex flex-col gap-8">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    {/* Step dot with red pin */}
                    <div className="relative flex-shrink-0 z-10">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center font-black text-[#16232A] text-sm shadow-lg border-4 border-white group-hover:scale-110 transition-transform"
                        style={{ background: step.color }}
                      >
                        {step.step}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 rounded-[20px] p-6 border-2 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg ${
                      idx === 0 ? "bg-[#D9E061] border-[#D9E061]" : "bg-white border-gray-100 group-hover:border-gray-200"
                    }`}>
                      <h3 className={`font-black text-xl mb-2 ${idx === 0 ? "text-[#16232A]" : "text-[#16232A]"}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${idx === 0 ? "text-[#16232A]/75" : "text-gray-500"}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* "the best part" stacked */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="relative inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div
                className="text-[#16232A] px-10 py-5 text-[2.5rem] md:text-[4rem] font-black tracking-tighter lowercase shadow-xl relative"
                style={{ background: "linear-gradient(225deg, transparent 28px, #D9E061 0)", borderRadius: "20px 0 20px 20px" }}
              >
                the best
                <div className="absolute top-0 right-0 w-9 h-9 bg-white/50" style={{ borderRadius: "0 0 0 14px" }} />
              </div>
            </div>
            <div className="relative inline-block transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div
                className="text-white px-10 py-5 text-[2.5rem] md:text-[4rem] font-black tracking-tighter lowercase shadow-xl relative"
                style={{ background: "linear-gradient(45deg, transparent 28px, #EC5B70 0)", borderRadius: "20px 20px 20px 0" }}
              >
                part
                <div className="absolute bottom-0 left-0 w-9 h-9 bg-white/30" style={{ borderRadius: "0 14px 0 0" }} />
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-10">
            Setiap project yang kami selesaikan bukan hanya menghasilkan produk digital — tapi juga pertumbuhan nyata bagi bisnis kamu. Siap mulai?
          </p>

          <div className="relative inline-block group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
              <div className="w-5 h-5 bg-[#EC5B70] rounded-full shadow-md" />
              <div className="w-[2px] h-4 bg-[#c0394e]" />
            </div>
            <Link
              href="/kontak"
              className="mt-4 inline-flex items-center gap-3 text-[#16232A] font-black text-xl px-12 py-5 rounded-full border-2 border-[#16232A] hover:bg-[#16232A] hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Mulai Project Sekarang
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
