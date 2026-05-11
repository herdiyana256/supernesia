"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rizky Firmansyah",
    role: "Founder, Kreasi Digital — Jakarta",
    quote: "Supernesia benar-benar mengubah cara kami beroperasi secara digital. Platform e-commerce yang mereka bangun sangat responsif dan UI-nya memanjakan mata. Traffic kami meningkat 40% dalam bulan pertama!",
    image: "/headshots/rizky.png",
    stars: 5,
    result: "Traffic meningkat +40%",
    impact: "Penjualan Q1 melonjak progresif",
    detail: "Melalui modernisasi infrastruktur dan optimalisasi performa web secara menyeluruh, sistem E-Commerce mampu menangani lonjakan pengunjung organik dengan latensi minimum. Hal ini mengonversi pengunjung menjadi pelanggan aktif secara signifikan."
  },
  {
    name: "Dewi Savitri",
    role: "Operational Manager, LogisHub — Surabaya",
    quote: "Tim Supernesia sangat profesional. Kami membutuhkan custom software untuk sistem tracking logistik yang cukup kompleks, dan mereka berhasil men-deliver tepat waktu.",
    image: "/headshots/dewi.png",
    stars: 5,
    result: "Efisiensi operasional 3x Lipat",
    impact: "Sistem tracking logistik seamless",
    detail: "Dengan penerapan arsitektur data real-time, flow logistik pergudangan menjadi sangat sinkron. Dashboard monitoring dapat diakses secara mobile sehingga pergerakan armada dapat dipantau tanpa harus terikat di meja kerja."
  },
  {
    name: "Ahmad Faisal",
    role: "CEO, FinSmart — Bandung",
    quote: "Proses komunikasi mereka sangat transparan. Dari desain awal hingga deployment benar-benar rapi. Tidak ada cost tersembunyi. Mobile app kami kini mendapatkan rating 4.8 di PlayStore berkat optimasi mereka.",
    image: "/headshots/ahmad.png",
    stars: 5,
    result: "Rating 4.8 di PlayStore",
    impact: "User satisfaction meningkat",
    detail: "Redesain UI/UX secara saintifik berbasis data interaksi pengguna sebelumnya. Ditambah optimasi cache aplikasi yang membuat UX flow di kelas entry-level devices menjadi sangat mulus tanpa frame drop."
  },
  {
    name: "Sarah Wijaya",
    role: "Marketing Director, Bloom Beauty — Bali",
    quote: "Kami minta desain yang 'vibrant' namun elegan, dan Supernesia deliver lebih dari ekspektasi. Website baru kami sangat merefleksikan brand identity kami yang premium.",
    image: "/headshots/sarah.png",
    stars: 5,
    result: "Re-branding Sukses Besar",
    impact: "Konversi ads naik 25%",
    detail: "Penerapan visual hierarchy berkelas dengan balutan micro-animations. Campaign digital dapat langsung digiring ke landing page interaktif ini untuk memecah keraguan target audience, mengakibatkan boosting sales otomatis."
  },
  {
    name: "Budi Santoso",
    role: "Head of IT, EduNesia — Yogyakarta",
    quote: "Selain coding yang clean, mereka memahami bagaimana membangun arsitektur yang scalable. Sistem admin dashboard kami kini berjalan lebih cepat 3x lipat. Sangat direkomendasikan!",
    image: "/headshots/budi.png",
    stars: 5,
    result: "Performa Aplikasi 300% Lebih Cepat",
    impact: "Server backend optimal & stabil",
    detail: "Proses migrasi server dari monolithic architecture ke microservices memangkas waktu load. Efek bottleneck tak lagi terjadi sekalipun ribuan siswa mengakses platform saat periode ujian bersamaan."
  },
  {
    name: "Nina Maharani",
    role: "Owner, Kopi Kawan — Semarang",
    quote: "Awalnya saya ragu karena kami hanya UMKM, tapi tim Supernesia tetap memberikan pelayanan VIP. Sistem Point of Sale yang dibangun sangat mudah digunakan oleh kasir kami.",
    image: "/headshots/nina.png",
    stars: 5,
    result: "Transaksi Kasir Jadi 2x Lebih Cepat",
    impact: "Mengurangi human error data",
    detail: "Kustomisasi modul POS berbasis tablet yang berfokus ke kesederhanaan kasir. Sinkronisasi data stok real-time antar cabang memastikan pelaporan di akhir hari sangat akurat tanpa slip pembukuan."
  },
]

export default function TestimonialSection() {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section
      id="testimonial"
      className="bg-[#16232A] py-20 md:py-28 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden"
    >
      {/* Subtle bg radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 blur-3xl rounded-full bg-[#D9E061]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-5 blur-3xl rounded-full bg-[#EC5B70]" />
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* Section title */}
        <div className="relative inline-block transform rotate-[1deg] hover:rotate-0 transition-transform duration-500 mb-16">
          <div
            className="text-[#16232A] px-8 py-5 shadow-xl relative inline-block"
            style={{
              background: "linear-gradient(225deg, transparent 28px, #D9E061 0)",
              borderRadius: "24px 0 24px 24px",
            }}
          >
            <div className="absolute top-4 left-4 w-3 h-3 bg-[#16232A] rounded-full z-20" />
            <h2 className="text-[2rem] md:text-[2.5rem] font-black tracking-tighter lowercase mt-2 text-[#16232A]">client success</h2>
            <svg className="w-24 h-3 mt-1.5 stroke-[#16232A]" viewBox="0 0 100 10" fill="none">
              <path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <div className="absolute top-0 right-0 w-8 h-8 bg-white/60 shadow-md" style={{ borderRadius: "0 0 0 14px" }} />
          </div>
        </div>

        {/* Main testimonial layout */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-stretch">

          {/* Left Column (Split into Main Card + Secondary Card) */}
          <div className="flex flex-col gap-6">
            
            {/* Main featured card */}
            <div className="bg-white rounded-[36px] p-8 md:p-10 shadow-2xl flex flex-col hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)] transition-shadow">
              {/* Photo Area — headshot portrait */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[72px] h-[72px] rounded-2xl bg-gray-100 relative overflow-hidden flex-shrink-0 shadow-lg">
                  <Image
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-[#16232A] font-black text-xl mb-0.5">{testimonials[active].name}</h3>
                  <p className="text-gray-400 font-semibold text-xs">{testimonials[active].role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D9E061] stroke-none" />
                  ))}
                </div>
                <p className="text-gray-600 font-medium text-base leading-relaxed italic">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Secondary Highlight Card (Stats/Result) - OPSI 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-6 md:p-8 flex flex-col justify-between flex-1">
              <div className="mb-4">
                <div className="text-[#D9E061] text-xs font-black tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#EC5B70] animate-pulse" />
                  Project Impact Result
                </div>
                <h4 className="text-white font-black text-xl md:text-2xl mb-2">
                  {testimonials[active].result}
                </h4>
                <p className="text-gray-400 text-sm font-medium mb-6">
                  {testimonials[active].impact}
                </p>
                <div className="bg-white/5 border border-white/10 rounded-[16px] p-5">
                  <p className="text-white/70 text-sm leading-relaxed">
                    {testimonials[active].detail}
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-4 md:mt-0">
                <div className="w-12 h-12 rounded-full bg-[#D9E061] text-[#16232A] flex items-center justify-center font-bold">
                  <Star className="w-6 h-6 fill-[#16232A]" />
                </div>
              </div>
            </div>

          </div>

          {/* Right stacked cards */}
          <div className="flex flex-col gap-4">
            {testimonials.map((t, idx) => (
              idx !== active && (
                <div
                  key={idx}
                  className={`border rounded-[24px] p-5 text-left transition-all duration-300 cursor-pointer ${
                    expanded === idx
                      ? "bg-white/10 border-[#D9E061]/40 shadow-lg"
                      : "bg-white/5 hover:bg-white/8 border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Header — klik untuk set active di kiri */}
                  <div
                    className="flex gap-4 items-center group"
                    onClick={() => { setActive(idx); setExpanded(null) }}
                  >
                    <div className="w-[56px] h-[56px] rounded-[14px] bg-gray-700 flex-shrink-0 overflow-hidden relative">
                      <Image src={t.image} alt={t.name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-black text-sm mb-0.5 truncate">{t.name}</h4>
                      <p className="text-white/50 font-semibold text-xs truncate">{t.role}</p>
                    </div>
                  </div>

                  {/* Quote preview — selalu tampil */}
                  <p className={`text-white/60 text-xs leading-relaxed mt-3 ${
                    expanded === idx ? "" : "line-clamp-2"
                  }`}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Expanded content */}
                  {expanded === idx && (
                    <div className="mt-4 space-y-3 animate-[fadeIn_0.3s_ease]">
                      <div className="bg-[#D9E061]/10 border border-[#D9E061]/20 rounded-[14px] p-4">
                        <p className="text-[#D9E061] text-[10px] font-black uppercase tracking-widest mb-1">Result</p>
                        <p className="text-white font-bold text-sm">{t.result}</p>
                        <p className="text-white/50 text-xs mt-0.5">{t.impact}</p>
                      </div>
                      <p className="text-white/60 text-xs leading-relaxed">{t.detail}</p>
                    </div>
                  )}

                  {/* Read More / Collapse button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setExpanded(expanded === idx ? null : idx) }}
                    className={`inline-flex items-center gap-1.5 mt-3 text-[#D9E061] text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 ${
                      expanded === idx
                        ? "bg-[#D9E061]/20 hover:bg-[#D9E061]/30"
                        : "bg-[#D9E061]/10 hover:bg-[#D9E061]/20"
                    }`}
                  >
                    {expanded === idx ? (
                      <>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                        Collapse
                      </>
                    ) : (
                      <>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        Read More
                      </>
                    )}
                  </button>
                </div>
              )
            ))}

            {/* Pagination dots */}
            <div className="flex flex-col items-center mt-2 pt-4 w-full max-w-[300px] mx-auto">
              <div className="flex justify-between w-full text-center mb-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setActive(i); setExpanded(null) }}
                    className={`font-black text-xl w-1/3 transition-colors ${active === i ? "text-[#D9E061]" : "text-white/30 hover:text-white/60"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
              <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#D9E061] rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(217,224,97,0.5)]"
                  style={{ width: `${((active + 1) / testimonials.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative scribble bottom left */}
        <div className="absolute bottom-[10%] left-[2%] opacity-30 hidden md:block">
          <Image src="/asaf sdag.png" alt="" width={80} height={24} className="object-contain" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
