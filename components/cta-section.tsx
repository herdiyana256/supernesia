import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, ThumbsUp, Zap } from "lucide-react"

// Translations
const translations = {
  ID: {
    tagline: "Konsultasi Bisnis Cerdas",
    title: "Hubungi Kami & Wujudkan Solusi Digital Terbaik",
    subtitle: "Kami siap membantu Anda menjawab kebutuhan digital — baik itu sistem, website, hingga WhatsApp bisnis. Dapatkan solusi yang disesuaikan dengan kebutuhan Anda, gratis konsultasi awal tanpa komitmen.",
    chatNow: "Konsultasi Sekarang - Gratis!",
    benefits: [
      "Keamanan Terjamin",
      "90+ Proyek Sukses",
      "Respon < 5 menit"
    ]
  },
  EN: {
    tagline: "Smart Business Consultation",
    title: "Contact Us & Build the Right Digital Solution",
    subtitle: "We’re ready to help you solve your digital needs — from internal systems and websites to WhatsApp Business. Get tailored solutions with a free initial consultation, no commitment needed.",
    chatNow: "Start Consultation — Free!",
    benefits: [
      "Secure & Trusted",
      "90+ Successful Projects",
      "Response < 5 mins"
    ]
  },
}

export default function CTASection({ lang = "ID" }: { lang?: "ID" | "EN" }) {
  const t = translations[lang]

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-white to-[#f9f9f9] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#e9e15b]/30 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#2b2b2b]/20 rounded-full blur-2xl animate-pulse -z-10" />

      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500 hover:shadow-2xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <p className="text-secondary text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
              {t.tagline}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black mb-4">
              {t.title}
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              {t.subtitle}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="text-primary w-6 h-6" />
                <span className="text-sm font-medium text-gray-800">
                  {t.benefits[0]}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <ThumbsUp className="text-primary w-6 h-6" />
                <span className="text-sm font-medium text-gray-800">
                  {t.benefits[1]}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="text-primary w-6 h-6 animate-bounce" />
                <span className="text-sm font-medium text-gray-800">
                  {t.benefits[2]}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/kontak"
              className="inline-block bg-primary text-black px-6 py-3 rounded-xl font-bold text-base md:text-lg shadow-md hover:scale-105 hover:bg-yellow-300 transition-transform duration-300"
            >
              {t.chatNow}
            </Link>
          </div>

          {/* Image */}
          <div className="relative group flex justify-center">
            <div className="absolute inset-0 bg-[#e9e15b]/20 rounded-2xl rotate-2 group-hover:rotate-6 transition-transform duration-500" />
            <div className="relative bg-white rounded-2xl p-4 md:p-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
              
              {/* Online Badge (TOP-RIGHT) */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow animate-pulse">
                Online
              </div>

              <Image
                src="/contact.png"
                alt="Consultation"
                width={500}
                height={500}
                className="w-full max-w-md md:max-w-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
