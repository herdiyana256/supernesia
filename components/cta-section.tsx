import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function CTASection() {
  return (
    <section
      id="cta"
      className="bg-white py-16 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 font-sans relative overflow-hidden"
    >
      {/* Large decorative curve bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none opacity-20 hidden lg:block">
        <svg viewBox="0 0 500 400" fill="none">
          <path d="M0,400 Q200,200 180,100 T0,0" stroke="#E0E0E0" strokeWidth="2" />
          <path d="M0,400 Q280,250 240,120 T0,0" stroke="#E0E0E0" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Top right scribble */}
      <div className="absolute top-[10%] right-[8%] opacity-50 hidden md:block">
        <svg className="stroke-[#D9E061] w-24 h-8" viewBox="0 0 100 20" fill="none">
          <path d="M0,10 Q15,2 30,10 T60,10 T90,18" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative flex flex-col items-center text-center">

        {/* Main sticky note CTA — big centered */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-6 mb-10 md:mb-14 w-full">

          {/* "make it" yellow sticky note */}
          <div className="relative inline-block transform -rotate-[2deg] hover:rotate-0 transition-transform duration-500 cursor-default">
            <div
              className="text-[#16232A] px-6 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6.5rem] font-black tracking-tighter lowercase shadow-[0_20px_60px_rgba(217,224,97,0.35)]"
              style={{
                background: "linear-gradient(225deg, transparent 40px, #D9E061 0)",
                borderRadius: "28px 0 28px 28px",
              }}
            >
              make it
              {/* fold top right */}
              <div
                className="absolute top-0 right-0 w-11 h-11 bg-white/50 shadow-md"
                style={{ borderRadius: "0 0 0 18px" }}
              />
            </div>
          </div>

          {/* "real." pink sticky note */}
          <div className="relative inline-block transform rotate-[2deg] hover:rotate-0 transition-transform duration-500 cursor-default">
            <div
              className="text-white px-6 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6.5rem] font-black tracking-tighter lowercase shadow-[0_20px_60px_rgba(236,91,112,0.4)]"
              style={{
                background: "linear-gradient(45deg, transparent 40px, #EC5B70 0)",
                borderRadius: "28px 28px 28px 0",
              }}
            >
              real.
              {/* fold bottom left */}
              <div
                className="absolute bottom-0 left-0 w-11 h-11 bg-white/40 shadow-md"
                style={{ borderRadius: "0 18px 0 0" }}
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative inline-block group">

          <Link
            href="/kontak"
            className="relative inline-flex items-center gap-3 text-[#16232A] font-black text-lg md:text-2xl px-8 md:px-12 py-4 md:py-5 rounded-full bg-transparent border-2 border-[#16232A] hover:bg-[#16232A] hover:text-white transition-all duration-400 shadow-lg hover:shadow-2xl hover:scale-105 group"
          >

            Hubungi Kami
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
