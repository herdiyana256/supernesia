import React from "react"
import Image from "next/image"
import Link from "next/link"
import { PenTool, Smartphone, Box, Wrench, Bot, Globe } from "lucide-react"

const services = [
  {
    label: "UI/UX Design",
    icon: <PenTool className="w-6 h-6 stroke-[2.5]" />,
    iconColor: "white",
    color: "#2D8CFF",
    clipSrc: "/clip paper.png",
    pos: { top: "35%", left: "5%" },
    clipRot: "-10deg"
  },
  {
    label: "Web Development",
    icon: <Globe className="w-6 h-6 stroke-[2.5]" />,
    iconColor: "white",
    color: "#FF7A00",
    clipSrc: "/clip paper-1.png",
    pos: { top: "52%", left: "26%" },
    clipRot: "20deg"
  },
  {
    label: "Mobile\nDevelopment",
    icon: <Smartphone className="w-6 h-6 stroke-[2.5]" />,
    iconColor: "white",
    color: "#EC5B70",
    clipSrc: "/clip paper.png",
    pos: { top: "20%", left: "46%" },
    clipRot: "-20deg"
  },
  {
    label: "Custom\nSoftware",
    icon: <Box className="w-6 h-6 stroke-[2.5]" />,
    iconColor: "white",
    color: "#714AFE",
    clipSrc: "/clip paper-2.png",
    pos: { top: "50%", left: "62%" },
    clipRot: "15deg"
  },
  {
    label: "AI &\nAutomation",
    icon: <Bot className="w-6 h-6 stroke-[2.5]" />,
    iconColor: "#16232A",
    color: "#D9E061",
    clipSrc: "/clip paper-1.png",
    pos: { top: "18%", left: "76%" },
    clipRot: "-15deg"
  },
  {
    label: "Revamp &\nMaintenance",
    icon: <Wrench className="w-6 h-6 stroke-[2.5]" />,
    iconColor: "white",
    color: "#14B8A6",
    clipSrc: "/clip paper.png",
    pos: { top: "60%", left: "86%" },
    clipRot: "10deg"
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#16232A] border-b-2 border-[#2D8CFF] py-16 md:py-20 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden"
    >
      {/* Background scribbles */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" preserveAspectRatio="xMidYMid meet">
          <path d="M-100,200 Q200,350 400,200 T800,300 T1300,100" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M-50,400 Q300,500 600,300 T1200,200" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M150,550 Q160,540 170,550 T190,550 T210,560" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M900,250 Q910,240 920,250 T940,250 T960,240" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-8">
          <div className="max-w-md pt-4">
            <div className="relative inline-block transform -rotate-[2deg] hover:rotate-0 transition-transform duration-500 mb-8">
              <div
                className="text-[#16232A] px-12 py-8 shadow-xl relative inline-block"
                style={{
                  background: "linear-gradient(225deg, transparent 32px, #D9E061 0)",
                  borderRadius: "24px 0 24px 24px",
                }}
              >
                <div className="absolute top-4 left-4 w-4 h-4 bg-[#16232A] rounded-full z-20 shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
                <h2 className="text-[3.5rem] md:text-[4rem] font-black tracking-tighter lowercase mt-2 text-[#16232A] leading-none">services</h2>
                <svg className="w-24 h-4 mt-1 stroke-[#16232A]" viewBox="0 0 100 10" fill="none">
                  <path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <div className="absolute top-0 right-0 w-9 h-9 bg-white/60 shadow-sm" style={{ borderRadius: "0 0 0 14px" }} />
              </div>
            </div>

            <p className="text-white text-sm md:text-base font-medium leading-relaxed">
              Kami bantu bisnis kecil-menengah wujudkan website dan aplikasi profesional tanpa nguras budget. Custom development, bukan template abal-abal.
            </p>
          </div>

          {/* Right person image */}
          <div className="hidden lg:block relative w-[300px] h-[340px] z-0">
            <div className="absolute bottom-0 right-0 w-full h-[90%] bg-white/5 border-[4px] border-white/20 backdrop-blur-sm rounded-[32px] transform rotate-3 flex items-center justify-center shadow-2xl overflow-hidden group hover:rotate-0 transition-transform duration-500">
              <Image
                src="/orang-home-service.png"
                alt="Professional Worker"
                fill
                className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16232A]/40 to-transparent" />
            </div>
            <div className="absolute -top-2 -right-4 w-6 h-6 rounded-full bg-[#D9E061] shadow-[0_0_15px_#D9E061] animate-pulse" />
          </div>
        </div>

        {/* Desktop: floating nodes */}
        <div className="relative hidden lg:block" style={{ minHeight: 500 }}>
          {services.map((svc, idx) => (
            <Link
              key={idx}
              href="/layanan"
              className="absolute group z-20 cursor-pointer transition-transform duration-500 hover:scale-110"
              style={svc.pos}
            >
              <div className="bg-white rounded-[16px] px-6 py-3 shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex items-center justify-center relative transform -translate-x-1/2">
                <div
                  className="absolute -top-5 -left-5 w-11 h-11 rounded-full border-[3px] border-[#16232A] flex items-center justify-center z-20 group-hover:rotate-12 transition-transform duration-300 pointer-events-none"
                  style={{ background: svc.color, boxShadow: `0 8px 20px ${svc.color}90`, color: svc.iconColor }}
                >
                  {svc.icon}
                </div>
                <div className="absolute -top-3 left-4 w-6 h-6 z-30 pointer-events-none" style={{ transform: `rotate(${svc.clipRot})` }}>
                  <Image src={svc.clipSrc} alt="" fill className="object-contain drop-shadow-md" />
                </div>
                <span className="text-[#16232A] font-black text-lg whitespace-pre-line text-center leading-tight">
                  {svc.label}
                </span>
                <div className="absolute -right-8 -bottom-4 opacity-40">
                  <svg className="w-10 h-3 stroke-white" viewBox="0 0 100 10" fill="none">
                    <path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: grid cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 lg:hidden relative z-20">
          {services.map((svc, idx) => (
            <Link
              key={idx}
              href="/layanan"
              className="flex flex-col items-center gap-3 bg-white rounded-[16px] p-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all group text-center"
            >
              <div
                className="w-11 h-11 rounded-full border-[3px] border-[#16232A] flex shrink-0 items-center justify-center shadow-md"
                style={{ background: svc.color, color: svc.iconColor }}
              >
                {svc.icon}
              </div>
              <span className="text-[#16232A] font-black text-sm leading-tight">
                {svc.label.replace('\n', ' ')}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
