"use client"
import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const whyItems = [
  {
    title: "Clear Pricing. Real Value",
    desc: "Transparent pricing, zero surprise cost. Semua biaya jelas sejak awal.",
    highlight: "Transparent pricing, zero surprise cost.",
    highlightColor: "#EC5B70",
  },
  {
    title: "On-Time Execution",
    desc: "Project selesai dalam 1–3 minggu. Ada deadline urgent? Free discuss fast-track option.",
    highlight: null,
    highlightColor: null,
  },
  {
    title: "100% Custom",
    desc: "Setiap project dibangun dari nol sesuai brand identity dan kebutuhan spesifik bisnis mu.",
    highlight: null,
    highlightColor: null,
  },
  {
    title: "Future Ready Solutions",
    desc: "Setiap solusi kami dirancang agar relevan dengan perkembangan teknologi dan kebutuhan bisnis di masa depan.",
    highlight: null,
    highlightColor: null,
  },
  {
    title: "After Launch?",
    desc: "Project selesai bukan akhir dari kolaborasi. Kami memastikan sistem tetap stabil, performa terjaga, dan bisnis Anda terus tumbuh tanpa hambatan teknis.",
    highlight: "Kami memastikan sistem tetap stabil, performa terjaga, dan bisnis Anda terus tumbuh tanpa hambatan teknis.",
    highlightColor: "#EC5B70",
  },
  {
    title: "Quality Driven Impact",
    desc: "Setiap solusi kami dirancang dengan standar kualitas untuk menghasilkan dampak nyata bagi bisnis.",
    highlight: null,
    highlightColor: null,
  },
  {
    title: "Customer Priority Experience",
    desc: "Setiap layanan kami memprioritaskan kebutuhan klien.",
    highlight: null,
    highlightColor: null,
  },
  {
    title: "Free Consultation & Advisory",
    desc: "100% free consultation untuk mapping kebutuhan bisnis kamu dan recommend solusi terbaik.",
    highlight: null,
    highlightColor: null,
  },
]

export default function WhySection() {
  const [parallax, setParallax] = useState("translate(0px, 0px)")

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15
    const y = (e.clientY / window.innerHeight - 0.5) * 15
    setParallax(`translate(${x}px, ${y}px)`)
  }

  return (
    <section
      id="why-us"
      className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden"
    >
      {/* Decorative curves top right */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-30 hidden lg:block">
        <svg viewBox="0 0 400 400" fill="none">
          <path d="M400,0 Q300,100 350,200 T400,400" stroke="#E5E5E5" strokeWidth="2" />
          <path d="M400,0 Q250,150 320,250 T400,400" stroke="#E5E5E5" strokeWidth="1.5" />
        </svg>
      </div>
      {/* Decorative curves bottom left */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none opacity-30 hidden lg:block">
        <svg viewBox="0 0 300 300" fill="none">
          <path d="M0,300 Q100,200 80,100 T0,0" stroke="#E5E5E5" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left: Sticky title + photo */}
          <div className="w-full lg:w-[38%] flex flex-col items-start">

            {/* "why us?" sticky note */}
            <div className="relative inline-block transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500 mb-10">
              <div
                className="text-[#16232A] px-10 py-7 shadow-xl relative inline-block"
                style={{
                  background: "linear-gradient(225deg, transparent 32px, #D9E061 0)",
                  borderRadius: "24px 0 24px 24px",
                }}
              >
                {/* dark pin */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-[#16232A] rounded-full z-20" />
                <h2 className="text-[4rem] md:text-[5rem] font-black tracking-tighter lowercase mt-2 text-[#16232A]">why us?</h2>
                {/* scribble */}
                <svg className="w-32 h-4 mt-2 stroke-[#16232A]" viewBox="0 0 100 10" fill="none">
                  <path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" />
                </svg>
                {/* fold */}
                <div className="absolute top-0 right-0 w-9 h-9 bg-white/60 shadow-md" style={{ borderRadius: "0 0 0 14px" }} />
              </div>

              {/* Clip paperclip */}
              <div className="absolute -top-4 right-[-12px] rotate-[20deg] hidden md:block">
                <Image src="/clip paper.png" alt="" width={28} height={28} className="object-contain" />
              </div>
            </div>

            {/* Grayscale person photo with Motion & Parallax */}
            <div 
              className="relative w-full max-w-[380px] h-[420px] md:h-[520px] mx-auto lg:mx-0 group cursor-default z-10"
              onMouseMove={handleMouseMove}
            >
              <div className="absolute inset-0 bg-[#EC5B70]/15 blur-[60px] rounded-full scale-75 mt-10 z-0" />
              
              <div 
                className="relative w-full h-full transition-transform duration-700 ease-out z-10"
                style={{ transform: parallax }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/bagian-lain.jpg"
                    alt="Why Supernesia"
                    fill
                    className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-[32px] grayscale contrast-[1.1] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                </motion.div>
              </div>
              {/* Pink bolt decoration */}
              <motion.div 
                className="absolute bottom-[20%] right-[-20px] text-[#EC5B70] z-20"
                animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="44" height="64" viewBox="0 0 24 40" fill="currentColor">
                  <path d="M14 2L4 22h9l-3 16 14-22h-10l3-14z" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Right: Feature Cards Grid */}
          <div className="w-full lg:w-[62%]">
            {/* Lightning bolt decorative top right */}
            <div className="flex justify-end mb-4 hidden md:flex">
              <div className="text-[#EC5B70] rotate-[-8deg]">
                <svg width="36" height="52" viewBox="0 0 24 40" fill="currentColor">
                  <path d="M14 2L4 22h9l-3 16 14-22h-10l3-14z" />
                </svg>
              </div>
              <div className="text-[#D9E061] rotate-[5deg] ml-1">
                <svg width="28" height="42" viewBox="0 0 24 40" fill="currentColor">
                  <path d="M14 2L4 22h9l-3 16 14-22h-10l3-14z" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-[24px] px-7 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
                >
                  <h3 className="text-[#16232A] font-black text-lg md:text-xl mb-3 tracking-tight group-hover:text-[#16232A]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {item.highlight ? (
                      <>
                        <span style={{ color: item.highlightColor, fontWeight: 600 }}>{item.highlight}</span>{" "}
                        {item.desc.replace(item.highlight, "").trim()}
                      </>
                    ) : (
                      item.desc
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
