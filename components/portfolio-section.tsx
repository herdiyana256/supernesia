"use client"
import React, { useState } from "react"
import Image from "next/image"

const portfolioItems = [
  {
    title: "Portal Berita Nabi",
    category: "Web Development",
    image: "/portal_berita_nabi.png",
    color: "#D9E061",
  },
  {
    title: "PO Tracking System",
    category: "Custom Software",
    image: "/PO_tracking.png",
    color: "#EC5B70",
  },
  {
    title: "SIMS PPOB Website",
    category: "Web Development",
    image: "/SIMS_PPOB_Website.png",
    color: "#714AFE",
  },
]

const stats = [
  { value: "95%", label: "Client Satisfied" },
  { value: "100+", label: "Project" },
  { value: "75+", label: "Brand Partner" },
]

export default function PortfolioSection() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="portfolio"
      className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* "our concept" sticky note */}
        <div className="relative inline-block transform -rotate-[1deg] hover:rotate-0 transition-transform duration-500 mb-14">
          <div
            className="text-[#16232A] px-10 py-7 shadow-xl relative inline-block"
            style={{
              background: "linear-gradient(225deg, transparent 36px, #D9E061 0)",
              borderRadius: "24px 0 24px 24px",
            }}
          >
            <div className="absolute top-4 left-4 w-4 h-4 bg-[#16232A] rounded-full z-20" />
            <h2 className="text-[3rem] md:text-[4rem] font-black tracking-tighter lowercase mt-2 text-[#16232A]">our concept</h2>
            <svg className="w-36 h-5 mt-2 stroke-[#16232A]" viewBox="0 0 100 10" fill="none">
              <path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <div className="absolute top-0 right-0 w-10 h-10 bg-white/60 shadow-md" style={{ borderRadius: "0 0 0 16px" }} />
          </div>
        </div>

        {/* Carousel Area */}
        <div className="relative flex flex-col lg:flex-row gap-10 items-start">

          {/* Main Portfolio Mockup */}
          <div className="w-full lg:w-[65%] relative">
            <div className="relative w-full aspect-[16/10] rounded-[28px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.15)] border border-gray-100">
              <Image
                src={portfolioItems[active].image}
                alt={portfolioItems[active].title}
                fill
                className="object-cover transition-opacity duration-500"
              />
              {/* Overlay gradient bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Title overlay */}
              <div className="absolute bottom-6 left-6">
                <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">
                  {portfolioItems[active].category}
                </span>
                <h3 className="text-white font-black text-2xl md:text-3xl mt-1 drop-shadow">
                  {portfolioItems[active].title}
                </h3>
              </div>
            </div>

            {/* Stat sticky notes overlaid */}
            <div className="absolute -top-6 -right-4 hidden lg:flex flex-col gap-3 z-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#D9E061] rounded-[18px] px-5 py-3 shadow-xl font-black text-[#16232A] text-sm leading-tight hover:scale-105 transition-transform"
                  style={{
                    transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
                  }}
                >
                  <div className="text-2xl">{stat.value}</div>
                  <div className="text-xs font-bold opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnails Sidebar */}
          <div className="w-full lg:w-[32%] flex lg:flex-col gap-4">
            {portfolioItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`relative w-full aspect-video rounded-[20px] overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] flex-shrink-0 ${
                  active === idx
                    ? "border-[#D9E061] shadow-[0_0_20px_rgba(217,224,97,0.5)]"
                    : "border-transparent shadow-md"
                }`}
              >
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                {active !== idx && (
                  <div className="absolute inset-0 bg-white/50" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {portfolioItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`rounded-full transition-all duration-300 ${
                active === idx
                  ? "w-8 h-3 bg-[#D9E061]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Mobile stats */}
        <div className="flex gap-4 mt-8 lg:hidden justify-center flex-wrap">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#D9E061] rounded-[18px] px-6 py-4 shadow-lg font-black text-[#16232A] text-center"
            >
              <div className="text-2xl">{stat.value}</div>
              <div className="text-xs font-bold opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
