"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Translations
const translations = {
  ID: {
    faq: "FAQ",
    title1: "JAWABAN",
    title2: "PERTANYAANMU",
    title3: "ADA DISINI",
    questions: [
      {
        question: "Apa itu Supernesia?",
        answer:
          "Supernesia adalah partner transformasi digital terpercaya untuk UMKM, bisnis rintisan, dan perusahaan menengah. Kami menyediakan layanan: Web Development, Custom Software Development, Mobile & Desktop Apps, Konsultasi Digital & Teknologi. Didirikan pada tahun 2025, Supernesia hadir untuk membantu bisnis bertumbuh dengan solusi digital yang inovatif, fleksibel, dan tepat guna. Misi kami adalah memberdayakan bisnis dari berbagai skala agar mampu bersaing di era digital.",
      },
      {
        question: "Bagaimana Cara Kerja Supernesia?",
        answer:
          "Kami mendampingi Anda dari awal hingga akhir dengan proses yang terstruktur: Konsultasi kebutuhan, Perencanaan & penawaran, Desain UI/UX, Pengembangan website/aplikasi, Uji coba dan revisi, Serah terima proyek siap pakai. Komunikasi transparan dan update rutin menjadi komitmen kami dalam setiap proyek.",
      },
      {
        question: "Apakah Supernesia Menyediakan Support?",
        answer:
          "Tentu! Kami memberikan layanan support seperti: Bantuan teknis, Update ringan pada website, Perpanjangan hosting/domain, Konsultasi pengembangan lebih lanjut. Support tersedia baik setelah serah terima proyek maupun dalam bentuk paket maintenance opsional.",
      },
      {
        question: "Berapa Lama Proses Pengerjaannya?",
        answer:
          "Website standar: ± 2–3 minggu. Aplikasi/website custom: Menyesuaikan dengan tingkat kompleksitas, biasanya mulai dari 1–2 bulan. Estimasi waktu akan dibahas dan disepakati sejak awal kontrak agar proyek lebih terencana.",
      },
      {
        question: "Apakah Bisa Custom?",
        answer:
          "Bisa 100%! Supernesia menawarkan opsi custom fitur, custom desain, dan integrasi sistem sesuai kebutuhan bisnis Anda. Setiap solusi kami tailor-made — karena setiap bisnis unik.",
      },
      {
        question: "Apakah Pembayaran Bisa Dicicil?",
        answer:
          "Bisa! Kami fleksibel untuk pembayaran bertahap atau termin, sesuai kesepakatan awal. Tujuannya, supaya klien merasa nyaman mengelola budget.",
      },
      {
        question: "Apakah Bisa Upgrade Layanan di Tengah Proyek?",
        answer:
          "Bisa kapan saja! Misal, Anda ingin: Menambah halaman baru, Menambahkan fitur tambahan, Upgrade kapasitas server. Semua bisa diatur secara fleksibel di tengah pengerjaan atau setelah website/aplikasi live.",
      },
      {
        question: "Apakah Data Saya Aman?",
        answer:
          "Sangat aman. Kami menjaga keamanan data klien dengan: Standar enkripsi SSL, Backup berkala, Akses terbatas pada data proyek, Prosedur keamanan berlapis. Keamanan dan kerahasiaan data adalah prioritas utama di setiap layanan kami.",
      },
      {
        question: "Bisa Custom Plan Sesuai Budget?",
        answer:
          "Bisa banget! Kami memahami setiap bisnis punya kebutuhan unik. Supernesia siap menyusun paket kustom berdasarkan fitur yang dibutuhkan dan budget yang tersedia, tanpa mengorbankan kualitas.",
      },
      {
        question: "Apakah Supernesia Cocok untuk Mahasiswa, UMKM, dan Perusahaan Menengah?",
        answer:
          "Sangat cocok! Supernesia dirancang untuk membantu: Mahasiswa / Gen Z entrepreneur membangun portfolio atau bisnis online, UMKM meningkatkan eksistensi digital dan omzet, Middle companies mengembangkan sistem digital lebih efisien dan modern. Kami paham setiap tahap pertumbuhan bisnis, dan solusi kami menyesuaikan kebutuhan itu.",
      },
    ],
  },
  EN: {
    faq: "FAQ",
    title1: "ANSWERS",
    title2: "TO YOUR",
    title3: "QUESTIONS",
    questions: [
      {
        question: "What is Supernesia?",
        answer:
          "Supernesia is a trusted digital transformation partner for SMEs, startups, and medium-sized companies. We provide services: Web Development, Custom Software Development, Mobile & Desktop Apps, Digital & Technology Consulting. Founded in 2025, Supernesia is here to help businesses grow with innovative, flexible, and effective digital solutions. Our mission is to empower businesses of various scales to compete in the digital era.",
      },
      {
        question: "How Does Supernesia Work?",
        answer:
          "We accompany you from start to finish with a structured process: Needs consultation, Planning & offering, UI/UX design, Website/application development, Testing and revision, Handover of ready-to-use projects. Transparent communication and regular updates are our commitment in every project.",
      },
      {
        question: "Does Supernesia Provide Support?",
        answer:
          "Absolutely! We provide support services such as: Technical assistance, Minor website updates, Hosting/domain renewal, Further development consultation. Support is available both after project handover and in the form of optional maintenance packages.",
      },
      {
        question: "How Long is the Development Process?",
        answer:
          "Standard website: ± 2–3 weeks. Custom application/website: Depending on the level of complexity, usually starting from 1–2 months. Time estimates will be discussed and agreed upon from the beginning of the contract to make the project more planned.",
      },
      {
        question: "Can It Be Customized?",
        answer:
          "100% yes! Supernesia offers custom feature options, custom design, and system integration according to your business needs. Each of our solutions is tailor-made — because every business is unique.",
      },
      {
        question: "Can Payments Be Made in Installments?",
        answer:
          "Yes! We are flexible for phased or term payments, according to the initial agreement. The goal is for clients to feel comfortable managing their budget.",
      },
      {
        question: "Can Services Be Upgraded During the Project?",
        answer:
          "Anytime! For example, if you want to: Add new pages, Add additional features, Upgrade server capacity. Everything can be arranged flexibly during development or after the website/application goes live.",
      },
      {
        question: "Is My Data Secure?",
        answer:
          "Very secure. We maintain client data security with: SSL encryption standards, Regular backups, Limited access to project data, Layered security procedures. Security and data confidentiality are top priorities in all our services.",
      },
      {
        question: "Can I Get a Custom Plan According to My Budget?",
        answer:
          "Absolutely! We understand that every business has unique needs. Supernesia is ready to create custom packages based on the features needed and the available budget, without compromising quality.",
      },
      {
        question: "Is Supernesia Suitable for Students, SMEs, and Medium-Sized Companies?",
        answer:
          "Very suitable! Supernesia is designed to help: Students / Gen Z entrepreneurs build portfolios or online businesses, SMEs increase digital presence and turnover, Middle companies develop more efficient and modern digital systems. We understand each stage of business growth, and our solutions adapt to those needs.",
      },
    ],
  },
}

export default function FAQSection() {
  const [language, setLanguage] = useState("ID")

  // Listen for language changes
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }

    const handleLanguageChange = (e: CustomEvent) => {
      setLanguage(e.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  // Get current translations
  const t = translations[language as keyof typeof translations]

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-secondary font-medium mb-2">{t.faq}</p>
          <h2 className="text-5xl md:text-6xl font-black leading-tight dark:text-white">
            {t.title1}
            <br />
            {t.title2}
            <br />
            {t.title3}
          </h2>

          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {t.questions.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="flex items-center gap-2 text-xl font-bold py-4 dark:text-white">
                    <span className="text-primary text-2xl">•</span>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 pl-8">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image src="/FAQ.png" alt="FAQ" width={400} height={400} className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
