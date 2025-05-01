"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import styles from './PortfolioSection.module.css'; // Mengimpor CSS Module


// Translations
const translations = {
  ID: {
    showOff: "PAMER AH",
    portfolio: "HASIL KARYA KAMI",
    mobileApps: "Mobile Apps",
    eCommerce: "e-Commerce",
    webDev: "Web Development",
    customSoftware: "Custom Software",
    enterprise: "Enterprise Solution",
    uiUxDesign: "UI/UX Design",
    religious: "Konten Keagamaan",
    inventory: "Manajemen Inventaris",
    finance: "Sistem Keuangan",
    viewAll: "Lihat Semua",
    viewDetails: "Lihat Detail",
    readMore: "Baca Selengkapnya",
    readLess: "Tutup",
    clickToView: "Klik untuk melihat detail",
    hideDetails: "Sembunyikan detail",
  },
  EN: {
    showOff: "SHOWCASE",
    portfolio: "OUR PORTFOLIO",
    mobileApps: "Mobile Apps",
    eCommerce: "e-Commerce",
    webDev: "Web Development",
    customSoftware: "Custom Software",
    enterprise: "Enterprise Solution",
    uiUxDesign: "UI/UX Design",
    religious: "Religious Content",
    inventory: "Inventory Management",
    finance: "Financial Systems",
    viewAll: "View All",
    viewDetails: "View Details",
    readMore: "Read More",
    readLess: "Close",
    clickToView: "Click to view details",
    hideDetails: "Hide details",
  },
}

const portfolioItems = [
  {
    id: 1,
    image: "/SIMS_PPOB_Website.png",
    title: "Website Payment Point Online Bank (PPOB)",
    categories: ["Web Development", "e-Commerce", "Finance"],
    description:
      "Platform pembayaran online untuk berbagai transaksi, seperti top up saldo dan bayar tagihan, tanpa perlu ke bank.",
  },
  {
    id: 2,
    image: "/helpdesk.png",
    title: "Web Aplikasi Helpdesk Ticketing",
    categories: ["Web Development", "Custom Software", "Enterprise Solution"],
    description:
      "Sistem manajemen tiket untuk mencatat dan menyelesaikan permintaan bantuan pengguna terkait layanan IT atau customer support.",
  },
  {
    id: 3,
    image: "/Stock_tracking.png",
    title: "Stock Tracking Management System",
    categories: ["Custom Software", "Enterprise Solution", "Inventory Management"],
    description:
      "Sistem untuk memantau dan mengelola stok barang secara real-time untuk efisiensi pengelolaan inventaris.",
  },
  {
    id: 4,
    image: "/laundri.png",
    title: "Laundry Management System",
    categories: [ "Custom Software", "Enterprise Solution"],
    description:
      "Aplikasi untuk mengelola operasional laundry, dari penerimaan order hingga pembayaran pelanggan.",
  },
  {
    id: 5,
    image: "/PO_tracking.png",
    title: "Stock Tracking PO (Purchase Order)",
    categories: ["Custom Software", "Enterprise Solution", "Inventory Management"],
    description:
      "Sistem untuk memantau pergerakan stok berdasarkan proses Purchase Order dan mengelola hubungan dengan supplier.",
  },
  {
    id: 6,
    image: "/ams.png",
    title: "Approval Management System (AMS)",
    categories: ["Web Development", "Enterprise Solution", "Custom Software"],
    description:
      "Sistem untuk mengelola alur pengajuan dan persetujuan dokumen penting, seperti instruksi pembayaran dan laporan perjalanan dinas.",
  },
  {
    id: 7,
    image: "/portal_berita_nabi.png",
    title: "Web Apps Kisah-Nabi",
    categories: ["Web Development", "Religious Content", "UI/UX Design"],
    description:
      "Portal berita keagamaan yang menyediakan informasi dan cerita nabi-nabi dalam Islam serta artikel keagamaan.",
  },
  {
    id: 8,
    image: "/sujudnow.png",
    title: "Web SujudNow",
    categories: ["Web Development", "Mobile Apps", "Religious Content"],
    description:
      "Aplikasi ibadah untuk menyediakan waktu sholat, arah kiblat, serta materi keagamaan seperti doa dan tafsir.",
  },
];


export default function PortfolioSection() {
  const [language, setLanguage] = useState("ID")
  const [expandedCards, setExpandedCards] = useState<number[]>([])

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

  // Translate category names
  const translateCategory = (category: string) => {
    switch (category) {
      case "Mobile Apps":
        return language === "ID" ? "Mobile Apps" : "Mobile Apps"
      case "e-Commerce":
        return language === "ID" ? "e-Commerce" : "e-Commerce"
      case "Web Development":
        return language === "ID" ? "Web Development" : "Web Development"
      case "Custom Software":
        return language === "ID" ? "Custom Software" : "Custom Software"
      case "Enterprise Solution":
        return language === "ID" ? "Solusi Enterprise" : "Enterprise Solution"
      case "UI/UX Design":
        return language === "ID" ? "Desain UI/UX" : "UI/UX Design"
      case "Religious Content":
        return language === "ID" ? "Konten Keagamaan" : "Religious Content"
      case "Inventory Management":
        return language === "ID" ? "Manajemen Inventaris" : "Inventory Management"
      case "Finance":
        return language === "ID" ? "Sistem Keuangan" : "Financial Systems"
      default:
        return category
    }
  }

  // Toggle card expansion
  const toggleCard = (id: number) => {
    setExpandedCards((prev) => {
      if (prev.includes(id)) {
        return prev.filter((cardId) => cardId !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  // Check if card is expanded
  const isCardExpanded = (id: number) => {
    return expandedCards.includes(id)
  }

  return (
    <section id="portfolio-section" className="py-16 px-4 md:px-12 lg:px-20 scroll-mt-20">
      <div className="mb-12">
        <p className="text-secondary font-medium mb-2">{t.showOff}</p>
        <h2 className="text-5xl md:text-6xl font-black leading-tight">{t.portfolio}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-56 md:h-64 overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-full object-cover object-center transition-transform duration-500"
                priority={item.id <= 4}
              />
            </div>
            <div className="p-5">
              <div className="mb-2 flex flex-wrap gap-2">
               {item.categories.map((category, idx) => (
  <span
    key={idx}
    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-xs"
  >
    {translateCategory(category)}
  </span>
))}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
          </div>
        ))}
      </div>
      

      <div className="mt-12 text-center">
        <button className="bg-primary hover:bg-primary/90 text-black font-bold py-3 px-6 rounded-full inline-flex items-center transform hover:scale-105 transition-transform">
          {t.viewAll}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
