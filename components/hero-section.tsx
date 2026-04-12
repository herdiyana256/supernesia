"use client"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  const tickerRef = useRef<HTMLDivElement>(null)
  const [parallax, setParallax] = useState("translate(0px, 0px)")

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 25
    const y = (e.clientY / window.innerHeight - 0.5) * 25
    setParallax(`translate(${x}px, ${y}px)`)
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#16232A] flex flex-col overflow-hidden font-sans"
      style={{
        backgroundImage: `radial-gradient(circle at 80% 20%, rgba(217,224,97,0.04) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(236,91,112,0.04) 0%, transparent 50%)`,
      }}
    >
      {/* Decorative wire line */}
      <div className="absolute top-[44%] left-0 right-0 z-0 pointer-events-none hidden lg:block">
        <svg width="100%" height="60" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0,30 Q200,5 400,35 T800,25 T1200,38 T1440,20" stroke="white" strokeWidth="1.5" opacity="0.12" fill="none" />
        </svg>
      </div>

      {/* Floating deco: lightning bolts */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* top right bolt */}
        <div className="absolute top-[18%] right-[33%] text-[#D9E061] opacity-80 rotate-12">
          <svg width="32" height="50" viewBox="0 0 24 40" fill="currentColor">
            <path d="M14 2L4 22h9l-3 16 14-22h-10l3-14z" />
          </svg>
        </div>
        {/* pink bolt mid left */}
        <div className="absolute top-[48%] left-[6%] text-[#EC5B70] opacity-70 -rotate-[20deg]">
          <svg width="50" height="70" viewBox="0 0 24 40" fill="currentColor">
            <path d="M14 2L4 22h9l-3 16 14-22h-10l3-14z" />
          </svg>
        </div>
        {/* yellow bolt bottom left */}
        <motion.div 
          className="absolute bottom-[28%] left-[4%] text-[#D9E061] opacity-60 rotate-[10deg]"
          animate={{ y: [0, -10, 0], rotate: [10, 15, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="40" height="60" viewBox="0 0 24 40" fill="currentColor">
            <path d="M14 2L4 22h9l-3 16 14-22h-10l3-14z" />
          </svg>
        </motion.div>
        {/* clip paper top */}
        <div className="absolute top-[20%] right-[28%] opacity-90 rotate-[20deg] hidden md:block">
          <Image src="/clip paper.png" alt="" width={36} height={36} className="object-contain" />
        </div>
        {/* scribble left */}
        <div className="absolute top-[36%] left-[8%] opacity-60 hidden md:block">
          <Image src="/asaf sdag.png" alt="" width={80} height={28} className="object-contain" />
        </div>
        {/* small pin icon top right */}
        <div className="absolute top-[12%] right-[10%] opacity-50 hidden lg:block">
          <svg className="stroke-white/40" width="80" height="24" viewBox="0 0 120 20" fill="none">
            <path d="M0,10 Q20,2 40,10 T80,10 T120,10" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:flex-row items-center max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-16 relative z-10">

        {/* Left: Text */}
        <div className="w-full md:w-[60%] flex flex-col items-start justify-center">

          {/* Headline */}
          <div className="flex flex-col items-start leading-none">
            <span className="text-2xl md:text-3xl lg:text-4xl font-light italic text-white/80 tracking-wide ml-1 mb-1">
              /turn your
            </span>

            <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-black text-white tracking-[-0.04em] leading-none lowercase">
              digital idea
            </h1>

            {/* "into reality" row */}
            <div className="flex items-center gap-4 mt-3">
              <span className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-black text-white tracking-[-0.04em] leading-none lowercase">
                into
              </span>
              {/* Sticky note: reality */}
              <div className="relative inline-block transform -rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 cursor-default">
                <div
                  className="text-[#16232A] px-8 md:px-10 py-4 md:py-5 text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black tracking-[-0.04em] leading-none lowercase shadow-[0_20px_60px_rgba(217,224,97,0.35)]"
                  style={{
                    background: "linear-gradient(225deg, transparent 36px, #D9E061 0)",
                    borderRadius: "28px 0 28px 28px",
                  }}
                >
                  reality
                  {/* fold flap */}
                  <div className="absolute top-0 right-0 w-10 h-10 bg-white/50 shadow-md" style={{ borderRadius: "0 0 0 18px" }} />
                </div>
              </div>
            </div>

            {/* "make it  real." row */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {/* Sticky note: make it */}
              <div className="relative inline-block transform rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 cursor-default">
                <div
                  className="text-[#16232A] px-8 md:px-10 py-4 md:py-5 text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black tracking-[-0.04em] leading-none lowercase shadow-[0_20px_60px_rgba(217,224,97,0.25)]"
                  style={{
                    background: "linear-gradient(45deg, transparent 36px, #D9E061 0)",
                    borderRadius: "28px 28px 28px 0",
                  }}
                >
                  make it
                  {/* fold flap */}
                  <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/50 shadow-md" style={{ borderRadius: "0 18px 0 0" }} />
                </div>
              </div>
              {/* Sticky note: real. */}
              <div className="relative inline-block transform -rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 cursor-default">
                <div
                  className="text-white px-8 md:px-10 py-4 md:py-5 text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black tracking-[-0.04em] leading-none lowercase shadow-[0_20px_60px_rgba(236,91,112,0.4)]"
                  style={{
                    background: "linear-gradient(225deg, transparent 36px, #EC5B70 0)",
                    borderRadius: "28px 0 28px 28px",
                  }}
                >
                  real.
                  {/* fold flap */}
                  <div className="absolute top-0 right-0 w-10 h-10 bg-white/40 shadow-md" style={{ borderRadius: "0 0 0 18px" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/65 text-base md:text-lg font-medium leading-relaxed mt-10 max-w-lg tracking-wide">
            All-in-One Tech Services: Web Development, Mobile & Desktop Apps, Custom Software, UI/UX, Maintenance & Support.
            Kami rancang untuk memberikan dampak nyata bagi mitra kami.
          </p>

          {/* CTA Button */}
          <div className="mt-8 relative inline-block group">
            <Link
              href="/kontak"
              className="relative bg-white text-[#16232A] font-black tracking-wide text-base px-9 py-4 rounded-full hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2"
            >
              Start a Project
            </Link>
            {/* Red pin */}
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#EC5B70] rounded-full shadow-md z-20" />
            <div className="absolute -top-3 right-0 w-[2px] h-4 bg-[#c0394e] z-10 rotate-45" />
          </div>
        </div>

        {/* Right: Girl Image with Motion & Parallax */}
        <div 
          className="w-full md:w-[40%] flex justify-center md:justify-end items-end relative mt-12 md:mt-0 hero-image-wrapper" 
          style={{ minHeight: 480 }}
          onMouseMove={handleMouseMove}
        >
          {/* Custom blur blob background request! */}
          <div className="absolute w-80 h-80 bg-[#D9E061] blur-[70px] rounded-full opacity-20 top-[10%] z-0" />
          
          <div 
            className="relative w-full h-[480px] md:h-[600px] lg:h-[680px] hover:scale-[1.02] transition-transform duration-700 ease-out z-10" 
            style={{ transform: parallax }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
                  <Image
                    src="/hero-menu.jpg"
                    alt="Supernesia Creative Tech"
                    fill
                    className="object-cover object-center drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-[32px]"
                    priority
                  />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker — Yellow Banner */}
      <div className="w-full bg-[#D9E061] overflow-hidden py-4 relative z-20 mt-auto">
        <div
          className="flex items-center gap-0 animate-[ticker_20s_linear_infinite] whitespace-nowrap"
          style={{ animation: "ticker 22s linear infinite" }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8 flex-shrink-0">
              <span className="text-[#16232A] font-black text-lg md:text-xl tracking-wide">Let&apos;s build your Website</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#16232A" className="flex-shrink-0">
                <path d="M10 0L12.9 7.1L20 10L12.9 12.9L10 20L7.1 12.9L0 10L7.1 7.1L10 0Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
