"use client"
import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqItems = [
  {
    q: "Apa itu Supernesia dan layanan apa yang ditawarkan?",
    a: "Supernesia adalah partner transformasi digital terpercaya untuk UMKM, bisnis rintisan, dan perusahaan menengah. Kami menyediakan layanan: Web Development, Custom Software Development, Mobile & Desktop Apps, AI Integration, dan Konsultasi Digital & Teknologi.",
  },
  {
    q: "Bagaimana sistem pembayaran project?",
    a: "Kami menerapkan sistem pembayaran bertahap (termin) sesuai dengan milestone yang telah disepakati bersama. Tidak ada biaya tersembunyi – semua biaya transparan sejak awal.",
  },
  {
    q: "Apakah ada layanan maintenance setelah project selesai?",
    a: "Ya! Project selesai bukan akhir dari kolaborasi. Kami memastikan sistem tetap stabil, performa terjaga, dan bisnis Anda terus tumbuh. Kami memberikan dukungan maintenance after-launch agar sistem berjalan optimal.",
  },
  {
    q: "Berapa lama rata-rata waktu pengerjaan project?",
    a: "Tergantung ukuran dan kompleksitas, mulai dari 1–3 minggu untuk website standar, hingga beberapa bulan untuk sistem enterprise. Ada deadline urgent? Kami punya opsi fast-track yang bisa didiskusikan gratis.",
  },
  {
    q: "Apakah tersedia konsultasi gratis sebelum mulai project?",
    a: "100% ya! Kami menawarkan free consultation untuk mapping kebutuhan bisnis kamu, menentukan solusi terbaik, dan memberikan estimasi biaya yang transparan tanpa ada komitmen.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden"
    >
      {/* Decorative curves */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] pointer-events-none opacity-20 hidden lg:block">
        <svg viewBox="0 0 350 350" fill="none">
          <path d="M350,0 Q200,100 250,200 T350,350" stroke="#E5E7EB" strokeWidth="2" />
          <path d="M350,0 Q160,150 200,280 T350,350" stroke="#E5E7EB" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: Sticky note + description */}
          <div className="w-full lg:w-[38%] flex flex-col">

            {/* "faq" sticky note */}
            <div className="relative inline-block transform -rotate-[2deg] hover:rotate-0 transition-transform duration-500 mb-10 self-start">
              <div
                className="text-[#16232A] px-10 py-8 shadow-xl relative inline-block"
                style={{
                  background: "linear-gradient(225deg, transparent 32px, #D9E061 0)",
                  borderRadius: "24px 0 24px 24px",
                }}
              >
                {/* Pin */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-[#16232A] rounded-full z-20" />
                <h2 className="text-[4.5rem] md:text-[5.5rem] font-black tracking-tighter lowercase mt-2 text-[#16232A]">faq</h2>
                {/* Scribble */}
                <svg className="w-24 h-4 mt-2 stroke-[#16232A]" viewBox="0 0 100 10" fill="none">
                  <path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" />
                </svg>
                {/* Fold */}
                <div className="absolute top-0 right-0 w-9 h-9 bg-white/60 shadow-md" style={{ borderRadius: "0 0 0 14px" }} />
              </div>
            </div>

            <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-sm">
              Supernesia adalah partner transformasi digital terpercaya untuk UMKM, bisnis rintisan, dan perusahaan menengah. Kami menyediakan layanan: Web Development, Custom Software Development, Mobile & Desktop Apps, Konsultasi Digital & Teknologi.
            </p>

            {/* Decorative lightning bolt */}
            <div className="mt-10 opacity-60 hidden md:block">
              <svg width="56" height="80" viewBox="0 0 24 40" fill="#EC5B70">
                <path d="M14 2L4 22h9l-3 16 14-22h-10l3-14z" />
              </svg>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="w-full lg:w-[62%] flex flex-col gap-4">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className={`border rounded-[22px] overflow-hidden transition-all duration-400 ${
                    isOpen
                      ? "border-[#D9E061] shadow-[0_8px_32px_rgba(217,224,97,0.15)]"
                      : "border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  <button
                    className="w-full px-7 py-5 flex items-center justify-between focus:outline-none group text-left"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <h4
                      className={`font-bold text-base md:text-lg transition-colors duration-300 pr-4 ${
                        isOpen ? "text-[#16232A]" : "text-gray-700 group-hover:text-[#16232A]"
                      }`}
                    >
                      {item.q}
                    </h4>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-[#D9E061]" : "bg-gray-100 group-hover:bg-gray-200"
                      }`}
                    >
                      {isOpen
                        ? <Minus className="w-4 h-4 text-[#16232A]" />
                        : <Plus className="w-4 h-4 text-gray-600" />
                      }
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-400 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-7 pb-6 text-gray-500 text-base leading-relaxed border-t border-gray-100 pt-4">
                      {item.a}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
