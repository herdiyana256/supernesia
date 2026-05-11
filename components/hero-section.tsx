"use client"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTickerContent } from "../hooks/use-ticker-content"

export default function HeroSection() {
  const tickerRef = useRef<HTMLDivElement>(null)
  const [parallax, setParallax] = useState("translate(0px, 0px)")
  const items = useTickerContent()
  const doubled = [...items, ...items]

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 25
    const y = (e.clientY / window.innerHeight - 0.5) * 25
    setParallax(`translate(${x}px, ${y}px)`)
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] md:min-h-screen bg-[#16232A] flex flex-col overflow-hidden font-sans"
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
      <div className="flex-1 flex flex-col md:flex-row items-center max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-24 md:pt-32 pb-8 md:pb-16 relative z-10 overflow-hidden">

        {/* Left: Text */}
        <div className="w-full md:w-[60%] flex flex-col items-center md:items-start justify-center">

          {/* Headline */}
          <div className="flex flex-col items-center md:items-start leading-none w-full">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light italic text-white/80 tracking-wide ml-1 mb-1 text-center md:text-left">
              /turn your
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.04em] leading-none lowercase break-words text-center md:text-left w-full">
              digital idea
            </h1>

            {/* "into reality" row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 mt-3">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-[-0.04em] leading-none lowercase">
                into
              </span>
              {/* Sticky note: reality */}
              <div className="relative inline-block transform -rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 cursor-default max-w-full">
                <div
                  className="text-[#16232A] px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-5 text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-none lowercase shadow-[0_20px_60px_rgba(217,224,97,0.35)]"
                  style={{
                    background: "linear-gradient(225deg, transparent 20px, #D9E061 0)",
                    borderRadius: "20px 0 20px 20px",
                  }}
                >
                  reality
                  {/* fold flap */}
                  <div className="absolute top-0 right-0 w-6 h-6 sm:w-7 sm:h-7 bg-white/50 shadow-md" style={{ borderRadius: "0 0 0 16px" }} />
                </div>
              </div>
            </div>

            {/* "make it  real." row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mt-4">
              {/* Sticky note: make it */}
              <div className="relative inline-block transform rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 cursor-default max-w-full">
                <div
                  className="text-[#16232A] px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-5 text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-none lowercase shadow-[0_20px_60px_rgba(217,224,97,0.25)]"
                  style={{
                    background: "linear-gradient(45deg, transparent 20px, #D9E061 0)",
                    borderRadius: "20px 20px 20px 0",
                  }}
                >
                  make it
                  {/* fold flap */}
                  <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-7 sm:h-7 bg-white/50 shadow-md" style={{ borderRadius: "0 16px 0 0" }} />
                </div>
              </div>
              {/* Sticky note: real. */}
              <div className="relative inline-block transform -rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 cursor-default max-w-full">
                <div
                  className="text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-5 text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-none lowercase shadow-[0_20px_60px_rgba(236,91,112,0.4)]"
                  style={{
                    background: "linear-gradient(225deg, transparent 20px, #EC5B70 0)",
                    borderRadius: "20px 0 20px 20px",
                  }}
                >
                  real.
                  {/* fold flap */}
                  <div className="absolute top-0 right-0 w-6 h-6 sm:w-7 sm:h-7 bg-white/40 shadow-md" style={{ borderRadius: "0 0 0 16px" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/65 text-sm sm:text-base md:text-lg font-medium leading-relaxed mt-8 md:mt-10 max-w-lg tracking-wide text-center md:text-left">
            All-in-One Tech Services: Web Development, Mobile & Desktop Apps, Custom Software, UI/UX, Maintenance & Support.
            Kami rancang untuk memberikan dampak nyata bagi mitra kami.
          </p>

          {/* CTA Button */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center md:items-start w-full sm:w-auto relative group">
            <Link
              href="/kontak"
              className="relative w-full sm:w-auto text-center bg-white text-[#16232A] font-black tracking-wide text-sm sm:text-base px-6 sm:px-9 py-3 sm:py-4 rounded-full hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex justify-center items-center gap-2"
            >
              Start a Project
            </Link>
            {/* Red pin */}
            <div className="absolute -top-2 -right-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 bg-[#EC5B70] rounded-full shadow-md z-20 hidden sm:block" />
            <div className="absolute -top-3 right-0 sm:right-0 w-[2px] h-4 bg-[#c0394e] z-10 rotate-45 hidden sm:block" />
          </div>
        </div>

        {/* Right: Girl Image with Motion & Parallax */}
        <div 
          className="w-full md:w-[40%] flex justify-center md:justify-end items-center md:items-end relative mt-12 md:mt-0 hero-image-wrapper" 
          onMouseMove={handleMouseMove}
        >
          {/* Custom blur blob background request! */}
          <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-[#D9E061] blur-[50px] md:blur-[70px] rounded-full opacity-20 top-[10%] z-0" />
          
          <div 
            className="relative w-full h-[240px] sm:h-[360px] md:h-[600px] lg:h-[680px] hover:scale-[1.02] transition-transform duration-700 ease-out z-10" 
            style={{ transform: parallax }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
                  <Image
                    src="/hero-menu.jpg"
                    alt="Supernesia Creative Tech"
                    fill
                    className="object-cover object-center drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-[24px] md:rounded-[32px]"
                    priority
                  />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker — Yellow Banner */}
      <div className="ticker-wrapper bg-[#D9E061] overflow-hidden py-3.5 relative z-20 mt-auto flex-shrink-0">
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span key={i} className="ticker-item flex items-center">
              <span className="text-[#16232A] font-black text-lg md:text-xl tracking-wide px-8 whitespace-nowrap">{item}</span>
              <span className="ticker-sep text-[#16232A] opacity-30 text-xl font-bold">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-wrapper {
          width: 100%;
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 30s linear infinite;
        }

        .ticker-wrapper:hover .ticker-track {
          animation-play-state: paused;
        }

        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
