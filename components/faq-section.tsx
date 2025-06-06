"use client"

import { useState, useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const translations = {
  ID: {
    faq: "FAQ",
    title1: "JAWABAN",
    title2: "PERTANYAANMU",
    title3: "ADA DISINI",
    questions: [
      {
        question: "Siapa itu Supernesia Creative Technology?",
        answer:
          "Supernesia Creative Technology adalah perusahaan rintisan (startup) teknologi asal Indonesia yang didirikan pada tahun 2025. Fokus utama kami adalah mendampingi transformasi digital bagi mahasiswa, UMKM, startup, dan perusahaan menengah melalui solusi teknologi yang disesuaikan dengan kebutuhan klien.",
      },
      {
        question: "Apa itu Supernesia?",
        answer:
          "Supernesia adalah partner transformasi digital terpercaya untuk UMKM, bisnis rintisan, dan perusahaan menengah. Kami menyediakan layanan: Web Development, Custom Software Development, Mobile & Desktop Apps, Konsultasi Digital & Teknologi.",
      },
      {
        question: "Bagaimana Cara Kerja Supernesia?",
        answer:
          "Kami mendampingi Anda dari awal hingga akhir dengan proses yang terstruktur: Konsultasi kebutuhan, Perencanaan, Desain UI/UX, Pengembangan, Uji coba dan revisi, hingga serah terima proyek.",
      },
      {
        question: "Apakah Supernesia Menyediakan Support?",
        answer:
          "Tentu! Kami menyediakan bantuan teknis, update ringan, perpanjangan hosting/domain, serta konsultasi pengembangan lebih lanjut.",
      },
      {
        question: "Berapa Lama Proses Pengerjaannya?",
        answer:
          "Website standar: ± 2–3 minggu. Website/aplikasi custom: 1–2 bulan tergantung kompleksitas. Estimasi dibahas sejak awal kontrak.",
      },
      {
        question: "Apakah Bisa Custom?",
        answer:
          "Bisa 100%! Supernesia menawarkan opsi custom fitur, desain, dan integrasi sistem sesuai kebutuhan bisnis Anda.",
      },
      {
        question: "Apakah Pembayaran Bisa Dicicil?",
        answer:
          "Bisa! Kami fleksibel dalam skema pembayaran bertahap sesuai kesepakatan awal.",
      },
      {
        question: "Apakah Bisa Upgrade Layanan di Tengah Proyek?",
        answer:
          "Bisa kapan saja, seperti menambah halaman, fitur, atau upgrade kapasitas server.",
      },
      {
        question: "Apakah Data Saya Aman?",
        answer:
          "Sangat aman. Kami menggunakan SSL, backup berkala, akses terbatas, dan sistem keamanan berlapis.",
      },
      {
        question: "Bisa Custom Plan Sesuai Budget?",
        answer:
          "Bisa banget! Kami siap menyusun paket berdasarkan fitur dan anggaran tanpa kompromi kualitas.",
      },
      {
        question: "Apakah Supernesia Cocok untuk Mahasiswa, UMKM, dan Perusahaan Menengah?",
        answer:
          "Sangat cocok! Supernesia membantu mahasiswa, UMKM, dan bisnis menengah bertumbuh melalui digitalisasi.",
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
        question: "Who is Supernesia Creative Technology?",
        answer:
          "Supernesia Creative Technology is a tech startup from Indonesia founded in 2025. We focus on supporting digital transformation for students, SMEs, startups, and mid-sized companies through tailored technology solutions.",
      },
      {
        question: "What is Supernesia?",
        answer:
          "Supernesia is a trusted digital transformation partner for SMEs, startups, and mid-sized companies. We offer: Web Development, Custom Software, Mobile & Desktop Apps, Digital & Tech Consulting.",
      },
      {
        question: "How Does Supernesia Work?",
        answer:
          "We guide you from start to finish: Needs consultation, Planning, UI/UX Design, Development, Testing, and Final Delivery.",
      },
      {
        question: "Does Supernesia Provide Support?",
        answer:
          "Yes! We offer technical help, minor updates, hosting/domain renewal, and ongoing development consulting.",
      },
      {
        question: "How Long is the Development Process?",
        answer:
          "Standard website: ± 2–3 weeks. Custom solutions: 1–2 months depending on complexity. Timelines are discussed upfront.",
      },
      {
        question: "Can It Be Customized?",
        answer:
          "Absolutely! We provide feature customization, design personalization, and system integration.",
      },
      {
        question: "Can Payments Be Made in Installments?",
        answer:
          "Yes! We’re flexible for installment payments or terms agreed upon initially.",
      },
      {
        question: "Can Services Be Upgraded Mid-Project?",
        answer:
          "Yes, anytime — such as adding pages, features, or upgrading hosting capacity.",
      },
      {
        question: "Is My Data Secure?",
        answer:
          "Very secure. We use SSL encryption, regular backups, limited access, and layered security.",
      },
      {
        question: "Can I Get a Custom Plan Within My Budget?",
        answer:
          "Absolutely! We tailor packages to fit your budget and needs without compromising quality.",
      },
      {
        question: "Is Supernesia Suitable for Students, SMEs, and Medium-Sized Companies?",
        answer:
          "Yes! We help students, SMEs, and mid-sized companies grow through effective digital solutions.",
      },
    ],
  },
}

export default function FAQSection() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID")

  useEffect(() => {
    const saved = localStorage.getItem("language") as "ID" | "EN"
    if (saved) setLanguage(saved)

    const listener = (e: CustomEvent) => {
      setLanguage(e.detail)
    }

    window.addEventListener("languageChange", listener as EventListener)
    return () => window.removeEventListener("languageChange", listener as EventListener)
  }, [])

  const t = translations[language]

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20">
      <div className="mb-8">
        <p className="text-secondary font-medium mb-2">{t.faq}</p>
        <h2 className="text-4xl md:text-6xl font-black leading-tight dark:text-white">
          {t.title1}
          <br />
          {t.title2}
          <br />
          {t.title3}
        </h2>
      </div>

      <div className="w-full">
        <Accordion type="single" collapsible className="space-y-4">
          {t.questions.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b transition-all">
              <AccordionTrigger className="group text-lg md:text-xl font-semibold py-3 hover:text-primary transition-colors">
                <span className="mr-2 text-primary group-hover:rotate-90 transition-transform duration-300">•</span>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300 pl-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
