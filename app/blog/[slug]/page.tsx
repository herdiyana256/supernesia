import React from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Calendar, User } from "lucide-react"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
  return {
    title: `${title} | Supernesia Blog`,
    description: `Artikel lengkap mengenai ${title} dari tim ahli Supernesia Creative Technology (Update Mei 2026).`,
    keywords: [
      params.slug.replace(/-/g, " "),
      "jasa pembuatan website 2026",
      "supernesia blog",
      "artikel teknologi",
      "tips bisnis digital 2026"
    ]
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())

  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      
      {/* ── HEADER ── */}
      <section className="bg-[#16232A] pt-32 pb-16 px-6 md:px-12 lg:px-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#D9E061] hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft size={16} /> Kembali ke Blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={16} /> 09 Mei 2026
            </div>
            <div className="flex items-center gap-2">
              <User size={16} /> Tim Supernesia
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
          <p className="lead text-xl text-gray-600 font-medium mb-8">
            Memasuki bulan Mei 2026, dunia digital terus mengalami evolusi. Bagi pelaku usaha dan korporasi, beradaptasi dengan perubahan ini adalah kunci untuk memenangkan persaingan di pasar digital yang semakin ketat.
          </p>
          
          <h2>Pentingnya Transformasi Digital di 2026</h2>
          <p>
            Di tahun 2026, konsumen mengharapkan pengalaman digital yang cepat, responsif, dan terpersonalisasi. Website bukan lagi sekadar kartu nama online, melainkan mesin penggerak utama bisnis Anda. Integrasi dengan kecerdasan buatan (AI) dan automasi kini menjadi standar baru.
          </p>

          <h2>Apa Langkah Selanjutnya?</h2>
          <p>
            Pastikan infrastruktur digital Anda up-to-date. Baik itu pembaruan desain UI/UX, peningkatan kecepatan server, atau penambahan fitur khusus (custom software) yang memudahkan operasional internal Anda. Tim Supernesia siap membantu Anda mewujudkan solusi teknologi terbaik.
          </p>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-[#16232A] font-black text-2xl mb-4">Siap untuk Upgrade Sistem Anda?</h3>
            <p className="text-gray-600 mb-6">Konsultasikan kebutuhan website dan aplikasi Anda dengan tim ahli kami hari ini. Dapatkan solusi terbaik yang dirancang khusus untuk bisnis Anda.</p>
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-[#2D8CFF] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1b6cd4] transition-colors">
              Hubungi Kami Sekarang
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
