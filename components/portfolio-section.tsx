"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Calendar, Tag, Eye } from "lucide-react"

// Translations
const translations = {
  ID: {
    showOff: "PORTOFOLIO KAMI",
    portfolio: "HASIL KARYA KAMI",
    mobileApps: "Aplikasi Mobile",
    eCommerce: "e-Commerce",
    webDev: "Pengembangan Web",
    customSoftware: "Software Kustom",
    enterprise: "Solusi Enterprise",
    uiUxDesign: "Desain UI/UX",
    religious: "Konten Keagamaan",
    inventory: "Manajemen Inventaris",
    finance: "Sistem Keuangan",
    viewAll: "Lihat Semua",
    viewDetails: "Lihat Detail",
    readMore: "Baca Selengkapnya",
    readLess: "Tutup",
    clickToView: "Klik untuk melihat detail",
    hideDetails: "Sembunyikan detail",
    projectDetails: "Detail Proyek",
    technologies: "Teknologi",
    features: "Fitur Utama",
    closePreview: "Tutup Preview",
  },
  EN: {
    showOff: "OUR WORK",
    portfolio: "OUR PORTFOLIO",
    mobileApps: "Mobile Applications",
    eCommerce: "e-Commerce",
    webDev: "Web Development",
    customSoftware: "Custom Software",
    enterprise: "Enterprise Solutions",
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
    projectDetails: "Project Details",
    technologies: "Technologies",
    features: "Key Features",
    closePreview: "Close Preview",
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
    technologies: ["React", "Node.js", "PostgreSQL", "Payment Gateway"],
    features: ["Multi-payment support", "Real-time transactions", "User dashboard", "Admin panel"],
    year: "2024",
    status: "Completed",
  },
  {
    id: 2,
    image: "/helpdesk.png",
    title: "Web Aplikasi Helpdesk Ticketing",
    categories: ["Web Development", "Custom Software", "Enterprise Solution"],
    description:
      "Sistem manajemen tiket untuk mencatat dan menyelesaikan permintaan bantuan pengguna terkait layanan IT atau customer support.",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebSocket"],
    features: ["Ticket management", "Real-time notifications", "Priority system", "Analytics dashboard"],
    year: "2024",
    status: "Completed",
  },
  {
    id: 3,
    image: "/Stock_tracking.png",
    title: "Stock Tracking Management System",
    categories: ["Custom Software", "Enterprise Solution", "Inventory Management"],
    description:
      "Sistem untuk memantau dan mengelola stok barang secara real-time untuk efisiensi pengelolaan inventaris.",
    technologies: ["Angular", "Spring Boot", "MongoDB", "Redis"],
    features: ["Real-time tracking", "Automated alerts", "Barcode scanning", "Reporting system"],
    year: "2023",
    status: "Completed",
  },
  {
    id: 4,
    image: "/laundri.png",
    title: "Laundry Management System",
    categories: ["Custom Software", "Enterprise Solution"],
    description: "Aplikasi untuk mengelola operasional laundry, dari penerimaan order hingga pembayaran pelanggan.",
    technologies: ["React Native", "Express.js", "SQLite", "Stripe"],
    features: ["Order management", "Payment processing", "Customer tracking", "Service scheduling"],
    year: "2023",
    status: "Completed",
  },
  {
    id: 5,
    image: "/PO_tracking.png",
    title: "Stock Tracking PO (Purchase Order)",
    categories: ["Custom Software", "Enterprise Solution", "Inventory Management"],
    description:
      "Sistem untuk memantau pergerakan stok berdasarkan proses Purchase Order dan mengelola hubungan dengan supplier.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    features: ["PO management", "Supplier integration", "Inventory tracking", "Cost analysis"],
    year: "2023",
    status: "Completed",
  },
  {
    id: 6,
    image: "/ams.png",
    title: "Approval Management System (AMS)",
    categories: ["Web Development", "Enterprise Solution", "Custom Software"],
    description:
      "Sistem untuk mengelola alur pengajuan dan persetujuan dokumen penting, seperti instruksi pembayaran dan laporan perjalanan dinas.",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    features: ["Multi-level approval", "Document management", "Email notifications", "Audit trail"],
    year: "2024",
    status: "Completed",
  },
  {
    id: 7,
    image: "/portal_berita_nabi.png",
    title: "Web Apps Kisah-Nabi",
    categories: ["Web Development", "Religious Content", "UI/UX Design"],
    description:
      "Portal berita keagamaan yang menyediakan informasi dan cerita nabi-nabi dalam Islam serta artikel keagamaan.",
    technologies: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    features: ["Content management", "Search functionality", "Responsive design", "SEO optimized"],
    year: "2022",
    status: "Completed",
  },
  {
    id: 8,
    image: "/sujudnow.png",
    title: "Web SujudNow",
    categories: ["Web Development", "Mobile Apps", "Religious Content"],
    description:
      "Aplikasi ibadah untuk menyediakan waktu sholat, arah kiblat, serta materi keagamaan seperti doa dan tafsir.",
    technologies: ["Flutter", "Firebase", "Dart", "Google Maps API"],
    features: ["Prayer times", "Qibla direction", "Islamic calendar", "Offline support"],
    year: "2023",
    status: "Completed",
  },
  {
    id: 9,
    image: "/Astronesia.png",
    title: "Astronesia AI",
    categories: ["Web Development", "Fun", "Astrology", "AI Tools"],
    description:
      "Aplikasi Web horoskop harian yang didukung AI untuk memberikan prediksi personal berdasarkan zodiak dan tanggal lahir, dengan mode fun atau serius sesuai preferensi pengguna.",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel"],
    features: ["AI predictions", "Daily horoscopes", "Personalized content", "Social sharing"],
    year: "2024",
    status: "Completed",
  },
]

export default function PortfolioSection() {
  const [language, setLanguage] = useState("ID")
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioItems)[0] | null>(null)

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
      case "Fun":
        return language === "ID" ? "Hiburan" : "Fun"
      case "Astrology":
        return language === "ID" ? "Astrologi" : "Astrology"
      case "AI Tools":
        return language === "ID" ? "AI Tools" : "AI Tools"
      default:
        return category
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <>
      <section
        id="portfolio-section"
        className="py-16 px-4 md:px-12 lg:px-20 scroll-mt-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <motion.p
            className="text-[#2b2b2b] dark:text-gray-300 font-medium mb-2 text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t.showOff}
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-black leading-tight text-[#2b2b2b] dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t.portfolio}
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100 dark:border-gray-700"
              onClick={() => setSelectedProject(item)}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="w-full h-full">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-center"
                    priority={item.id <= 4}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute top-4 right-4 bg-[#e9e15b] text-[#2b2b2b] px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {item.year}
                </motion.div>
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2">
                    <Eye className="w-5 h-5 text-[#2b2b2b] dark:text-white" />
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {item.categories.slice(0, 2).map((category, idx) => (
                    <motion.span
                      key={idx}
                      className="bg-gradient-to-r from-[#e9e15b]/20 to-[#e9e15b]/10 text-[#2b2b2b] dark:text-gray-200 rounded-full px-3 py-1 text-xs font-medium border border-[#e9e15b]/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {translateCategory(category)}
                    </motion.span>
                  ))}
                  {item.categories.length > 2 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full px-3 py-1 text-xs font-medium">
                      +{item.categories.length - 2}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#2b2b2b] dark:text-white group-hover:text-[#e9e15b] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <motion.div
                  className="mt-4 flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{item.year}</span>
                  </div>
                  <motion.div
                    className="text-[#e9e15b] font-semibold text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {t.clickToView} →
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#e9e15b] to-[#f0e968] hover:from-[#f0e968] hover:to-[#e9e15b] text-[#2b2b2b] font-bold py-4 px-8 rounded-full inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(233, 225, 91, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t.viewAll}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </section>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative">
                <div className="h-64 md:h-80 overflow-hidden rounded-t-3xl">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <motion.button
                  className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="bg-[#e9e15b]/90 text-[#2b2b2b] rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm"
                      >
                        {translateCategory(category)}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center space-x-4 text-white/80">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedProject.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Tag className="w-4 h-4" />
                      <span>{selectedProject.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#2b2b2b] dark:text-white">{t.projectDetails}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <h4 className="text-lg font-semibold mb-3 text-[#2b2b2b] dark:text-white">{t.features}</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-[#e9e15b] rounded-full" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#2b2b2b] dark:text-white">{t.technologies}</h4>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {selectedProject.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 rounded-lg px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-600"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <motion.button
                      className="w-full bg-gradient-to-r from-[#e9e15b] to-[#f0e968] hover:from-[#f0e968] hover:to-[#e9e15b] text-[#2b2b2b] font-bold py-3 px-6 rounded-xl inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      {t.viewDetails}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
