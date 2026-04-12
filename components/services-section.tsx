import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Settings, Wand2, Box, Wrench } from "lucide-react"

const services = [
  {
    label: "Maintenance &\nPerformance Upgrade",
    icon: <Settings className="w-10 h-10 text-white stroke-[2.5]" />,
    color: "#2D8CFF",
    shadow: "rgba(45,140,255,0.45)",
    clipSrc: "/clip paper.png",
    rotate: "-15deg",
    pos: { top: "4%", left: "4%" },
    textPos: { top: "0", left: "100px" },
  },
  {
    label: "Web\nDevelopment",
    icon: <Wrench className="w-10 h-10 text-white stroke-[2.5]" />,
    color: "#FF7A00",
    shadow: "rgba(255,122,0,0.45)",
    clipSrc: "/clip paper-1.png",
    rotate: "45deg",
    pos: { top: "62%", left: "14%" },
    textPos: { top: "0", left: "90px" },
  },
  {
    label: "Artificial\nIntelligence",
    icon: <Wand2 className="w-10 h-10 text-white stroke-[2.5]" />,
    color: "#EC5B70",
    shadow: "rgba(236,91,112,0.45)",
    clipSrc: "/clip paper-2.png",
    rotate: "-25deg",
    pos: { top: "30%", left: "46%" },
    textPos: { top: "-8px", left: "90px" },
  },
  {
    label: "Custom\nSoftware",
    icon: <Box className="w-10 h-10 text-white stroke-[2.5]" />,
    color: "#714AFE",
    shadow: "rgba(113,74,254,0.45)",
    clipSrc: "/clip paper.png",
    rotate: "70deg",
    pos: { top: "72%", left: "60%" },
    textPos: { top: "0", left: "100px" },
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden"
    >
      {/* Decorative curves */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] pointer-events-none opacity-25 hidden lg:block">
        <svg viewBox="0 0 350 350" fill="none">
          <path d="M0,0 Q160,80 100,200 T0,350" stroke="#E0E0E0" strokeWidth="2" />
          <path d="M0,0 Q200,100 140,250 T0,350" stroke="#E0E0E0" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] pointer-events-none opacity-25 hidden lg:block">
        <svg viewBox="0 0 350 350" fill="none">
          <path d="M350,350 Q200,250 280,150 T350,0" stroke="#E0E0E0" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* Header row: sticky note title + description */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          {/* "services" sticky note */}
          <div className="relative inline-block transform -rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
            <div
              className="text-[#16232A] px-10 py-7 shadow-xl relative inline-block"
              style={{
                background: "linear-gradient(225deg, transparent 32px, #D9E061 0)",
                borderRadius: "24px 0 24px 24px",
              }}
            >
              {/* pin */}
              <div className="absolute top-4 left-4 w-4 h-4 bg-[#16232A] rounded-full z-20" />
              <h2 className="text-[3.5rem] md:text-[4.5rem] font-black tracking-tighter lowercase mt-2 text-[#16232A]">services</h2>
              <svg className="w-28 h-4 mt-2 stroke-[#16232A]" viewBox="0 0 100 10" fill="none">
                <path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" />
              </svg>
              {/* fold */}
              <div className="absolute top-0 right-0 w-9 h-9 bg-white/60 shadow-md" style={{ borderRadius: "0 0 0 14px" }} />
            </div>
          </div>

          {/* Description right */}
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-sm text-right hidden md:block">
            Kami bantu bisnis wujudkan website dan aplikasi profesional tanpa nguras budget.
          </p>
        </div>

        {/* Floating Nodes — Desktop */}
        <div className="relative hidden lg:block" style={{ minHeight: 640 }}>
          {/* Connecting SVG Wave */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 900 600" fill="none" preserveAspectRatio="xMidYMid meet">
              <path
                d="M100,80 C280,280 420,100 500,320 C590,540 680,380 780,440"
                stroke="#E0E0E0"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {services.map((svc, idx) => (
            <Link
              key={idx}
              href="/layanan"
              className="absolute group cursor-pointer transition-all duration-500 hover:z-30 hover:scale-105"
              style={svc.pos}
            >
              {/* Bubble Icon */}
              <div
                className="w-[100px] h-[100px] rounded-full border-[7px] border-white flex items-center justify-center relative z-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                style={{
                  background: svc.color,
                  boxShadow: `0 0 30px ${svc.shadow}`,
                }}
              >
                {svc.icon}
                <div className="absolute top-3 left-3 w-9 h-9 bg-white/30 rounded-full blur-md" />
              </div>

              {/* Label */}
              <div
                className="absolute whitespace-pre-line text-[#16232A] font-black text-lg leading-snug tracking-tight"
                style={svc.textPos}
              >
                {svc.label}
              </div>

              {/* Clip */}
              <div
                className="absolute top-[-16px] left-[-8px] w-10 h-10 transition-transform duration-500 group-hover:rotate-[20deg]"
                style={{ transform: `rotate(${svc.rotate})` }}
              >
                <Image src={svc.clipSrc} alt="" fill className="object-contain drop-shadow" />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: Simple cards */}
        <div className="grid grid-cols-2 gap-5 lg:hidden">
          {services.map((svc, idx) => (
            <Link
              key={idx}
              href="/layanan"
              className="flex flex-col items-center gap-4 bg-gray-50 rounded-[24px] p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all text-left group"
            >
              <div
                className="w-[72px] h-[72px] rounded-full border-[5px] border-white flex items-center justify-center shadow-lg"
                style={{ background: svc.color }}
              >
                {svc.icon}
              </div>
              <span className="text-[#16232A] font-black text-base text-center leading-snug whitespace-pre-line group-hover:text-[#EC5B70] transition-colors">
                {svc.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
