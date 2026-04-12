"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle, XCircle } from "lucide-react"
import { motion } from "framer-motion"

const serviceOptions = [
  "Web Development",
  "Custom Software",
  "Mobile & Desktop Apps",
  "UI/UX Design",
  "AI Integration",
  "Maintenance & Support",
  "Lainnya",
]

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    layanan: "",
    detail: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [parallax, setParallax] = useState("translate(0px, 0px)")

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20
    setParallax(`translate(${x}px, ${y}px)`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.layanan,
          message: formData.detail,
        }),
      })
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", layanan: "", detail: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <div className="min-h-screen font-sans bg-[#16232A]">
      <Navbar />

      {/* ── HERO: Dark section ── */}
      <section className="relative bg-[#16232A] pt-28 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Decorative scribbles */}
        <div className="absolute top-[14%] right-[8%] opacity-50 hidden md:block pointer-events-none">
          <svg className="stroke-[#D9E061] w-24 h-8" viewBox="0 0 100 20" fill="none">
            <path d="M0,10 Q15,2 30,10 T60,10 T90,18" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <svg className="stroke-[#D9E061] w-16 h-6 mt-1 ml-4" viewBox="0 0 100 20" fill="none">
            <path d="M0,10 Q15,2 30,10 T60,10 T90,18" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute bottom-[15%] right-[15%] opacity-30 hidden md:block pointer-events-none">
          <svg className="stroke-white/25 w-20 h-7" viewBox="0 0 100 20" fill="none">
            <path d="M0,10 Q15,2 30,10 T60,10 T90,18" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Stacked sticky notes: "lebih dekat" + "dengan kami" */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {/* "lebih dekat" — yellow */}
            <div className="relative inline-block transform -rotate-[1deg] hover:rotate-0 transition-transform duration-500">
              <div
                className="text-[#16232A] px-8 md:px-12 py-4 md:py-6 text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] font-black tracking-tighter lowercase shadow-[0_16px_50px_rgba(217,224,97,0.35)]"
                style={{ background: "linear-gradient(225deg, transparent 32px, #D9E061 0)", borderRadius: "24px 0 24px 24px" }}
              >
                lebih dekat
                <div className="absolute top-0 right-0 w-9 h-9 bg-white/50 shadow-md" style={{ borderRadius: "0 0 0 14px" }} />
              </div>
            </div>

            {/* "dengan kami" — pink */}
            <div className="relative inline-block transform rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
              <div
                className="text-white px-8 md:px-12 py-4 md:py-6 text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] font-black tracking-tighter lowercase shadow-[0_16px_50px_rgba(236,91,112,0.4)]"
                style={{ background: "linear-gradient(45deg, transparent 32px, #EC5B70 0)", borderRadius: "24px 24px 24px 0" }}
              >
                dengan kami
                <div className="absolute bottom-0 left-0 w-9 h-9 bg-white/30 shadow-md" style={{ borderRadius: "0 14px 0 0" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT: Dark, 2 columns ── */}
      <section className="bg-[#16232A] py-10 md:py-16 px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Contact info + image ── */}
          <div className="flex flex-col gap-8">
            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <div>
                <a href="tel:+6281281892625" className="text-white font-black text-2xl md:text-4xl hover:text-[#D9E061] transition-colors">
                  0812–8189–2625
                </a>
              </div>
              <div>
                <a href="mailto:info@supernesia.id" className="text-white font-black text-lg md:text-2xl hover:text-[#D9E061] transition-colors">
                  info@supernesia.id
                </a>
              </div>
              <div className="text-white/50 text-sm leading-relaxed">
                <p>Jakarta, Indonesia</p>
                <p>Office Hour</p>
                <p>08.00 – 17.00, Monday – Friday</p>
              </div>
            </div>

            {/* Person image with Motion & Parallax */}
            <div 
              className="relative w-full max-w-[340px] h-[320px] md:h-[400px] group cursor-default"
              onMouseMove={handleMouseMove}
            >
              {/* Glow Depth background */}
              <div className="absolute inset-0 bg-[#D9E061]/20 blur-[80px] rounded-full scale-75 z-0 mt-8" />
              
              {/* Pink scribble decoration floating */}
              <motion.div 
                className="absolute top-[-16px] right-[-20px] opacity-60 hidden md:block z-20"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="stroke-[#EC5B70] w-24 h-8" viewBox="0 0 100 20" fill="none">
                  <path d="M0,10 Q15,2 30,10 T60,10 T90,18" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </motion.div>

              <div 
                className="relative w-full h-full transition-transform duration-700 ease-out z-10"
                style={{ transform: parallax }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/kontak-person.jpg"
                    alt="Contact Supernesia"
                    fill
                    className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[32px] group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 text-white/60 text-sm font-semibold border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D9E061] rounded-full" />
                15+ Expert – siap membantu anda
              </div>
              <div>⏱ Respon &lt;5 menit</div>
              <div>📄 75+ Project Sukses</div>
              <div>⭐ 4.9/5 Rating Client</div>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="flex flex-col">
            {/* Status messages */}
            {submitStatus === "success" && (
              <div className="bg-green-900/40 border border-green-500/30 text-green-300 px-6 py-4 rounded-2xl mb-6 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="font-bold">Pesan berhasil dikirim!</p>
                  <p className="text-sm opacity-80">Tim kami akan menghubungi Anda segera.</p>
                </div>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-900/40 border border-red-500/30 text-red-300 px-6 py-4 rounded-2xl mb-6 flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="font-bold">Terjadi kesalahan</p>
                  <p className="text-sm opacity-80">Silakan coba lagi atau hubungi via WhatsApp.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Field: Nama */}
              <div className="group">
                <label className="block text-white/60 text-sm font-semibold mb-2 tracking-wide">
                  Nama<span className="text-[#EC5B70]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white text-lg font-semibold pb-3 outline-none focus:border-[#D9E061] transition-colors placeholder-white/20 group-hover:border-white/40"
                />
              </div>

              {/* Field: Email */}
              <div className="group">
                <label className="block text-white/60 text-sm font-semibold mb-2 tracking-wide">
                  Email<span className="text-[#EC5B70]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=""
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white text-lg font-semibold pb-3 outline-none focus:border-[#D9E061] transition-colors group-hover:border-white/40"
                />
              </div>

              {/* Field: Telepon */}
              <div className="group">
                <label className="block text-white/60 text-sm font-semibold mb-2 tracking-wide">Telepon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white text-lg font-semibold pb-3 outline-none focus:border-[#D9E061] transition-colors group-hover:border-white/40"
                />
              </div>

              {/* Field: Layanan */}
              <div className="group">
                <label className="block text-white/60 text-sm font-semibold mb-2 tracking-wide">Layanan</label>
                <select
                  name="layanan"
                  value={formData.layanan}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white text-lg font-semibold pb-3 outline-none focus:border-[#D9E061] transition-colors group-hover:border-white/40 cursor-pointer [&>option]:bg-[#16232A] [&>option]:text-white"
                >
                  <option value="" disabled>Pilih layanan…</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Field: Detail */}
              <div className="group">
                <label className="block text-white/60 text-sm font-semibold mb-2 tracking-wide">Detail</label>
                <textarea
                  name="detail"
                  value={formData.detail}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ceritakan kebutuhan project kamu..."
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white text-base font-medium pb-3 outline-none focus:border-[#D9E061] transition-colors resize-none placeholder-white/20 group-hover:border-white/40"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`self-start bg-white text-[#16232A] font-black px-10 py-4 rounded-full hover:bg-[#D9E061] transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl inline-flex items-center gap-3 mt-2 ${
                  isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#16232A] border-t-transparent rounded-full animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    Submit
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}