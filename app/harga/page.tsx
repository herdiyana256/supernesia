"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsappCTA from "@/components/whatsapp-cta"
import { Check, Star, Zap, Crown, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion, useInView, AnimatePresence } from "framer-motion"

// Enhanced translations with proper Indonesian translations
const translations = {
  ID: {
    pricing: "PAKET HARGA",
    chooseNeeds: "PILIH SESUAI KEBUTUHANMU",
    webDev: "Web Development",
    customSoftware: "Custom Software Development",
    mobileApps: "Mobile & Desktop Apps",
    features: "Fitur",
    orderNow: "Pesan Sekarang",
    superBenefits: "Super Benefits",
    popular: "Populer",
    mostValue: "Nilai Terbaik",
    enterprise: "Enterprise",
    starter: "Starter",
    startingFrom: "Mulai dari",
    contactForQuote: "Hubungi untuk Penawaran",
    showSuperBenefits: "Show Super Benefits",
    hideBenefits: "Hide Benefits",
  },
  EN: {
    pricing: "PRICING",
    chooseNeeds: "CHOOSE ACCORDING TO YOUR NEEDS",
    webDev: "Web Development",
    customSoftware: "Custom Software Development",
    mobileApps: "Mobile & Desktop Apps",
    features: "Features",
    orderNow: "Order Now",
    superBenefits: "Super Benefits",
    popular: "Popular",
    mostValue: "Best Value",
    enterprise: "Enterprise",
    starter: "Starter",
    startingFrom: "Starting from",
    contactForQuote: "Contact for Quote",
    showSuperBenefits: "Show Super Benefits",
    hideBenefits: "Hide Benefits",
  },
}

// Service-specific Super Benefits descriptions
const serviceBenefitsDescriptions = {
  web: {
    ID: "Dapatkan keunggulan eksklusif untuk website Anda dengan layanan premium yang dirancang khusus untuk meningkatkan performa online dan konversi bisnis.",
    EN: "Get exclusive advantages for your website with premium services designed specifically to enhance online performance and business conversion.",
  },
  software: {
    ID: "Nikmati benefit khusus pengembangan software yang mencakup konsultasi mendalam, infrastruktur enterprise, dan dukungan teknis berkelanjutan.",
    EN: "Enjoy special software development benefits including in-depth consultation, enterprise infrastructure, and ongoing technical support.",
  },
  mobile: {
    ID: "Raih keuntungan maksimal dari aplikasi mobile Anda dengan layanan komprehensif mulai dari development hingga maintenance dan publikasi.",
    EN: "Maximize the benefits of your mobile application with comprehensive services from development to maintenance and publication.",
  },
}

// Web Development Plans
const webPlans = [
  {
    name: "SuperNeo",
    description:
      "Paket ini dirancang khusus untuk membantu freelancer, mahasiswa, dan UMKM yang ingin go digital dengan budget terbatas.",
    price: "Rp.1.250.000",
    features: [
      "2 Halaman statis",
      "Domain: .com atau .net (1 tahun)",
      "Hosting 1GB SSD (lokal/Asia), Bandwidth 10GB",
      "Desain responsif & User Friendly",
      "Setup email domain (1 akun)",
      "Gratis hosting up to 15.000 traffic/month",
      "Integrasi media sosial",
      "Fitur chat WhatsApp",
      "UI/UX desain (tanpa menggunakan template)",
      "Akses Admin",
      "Web Marketing (SEO + Google Analytics)",
      "Gratis revisi 2x",
      "Pengerjaan 6 Hari",
    ],
    benefits: [
      "Konsultasi UI/UX gratis untuk memastikan desain yang optimal",
      "Setup hosting dan domain tanpa biaya tambahan",
      "Panduan lengkap pengelolaan website untuk pemula",
    ],
    popular: false,
    badge: "starter",
    icon: Crown,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "SuperPro",
    description:
      "Paket ini sempurna untuk Anda yang ingin websitenya tampil profesional dan eksklusif dengan fitur lengkap.",
    price: "Rp.2.500.000",
    features: [
      "6+ Halaman (maksimal 8 halaman)",
      "Domain: .com, .net, .co.id (1 tahun)",
      "Hosting 2GB SSD (lokal/Asia), Bandwidth 30GB",
      "Desain responsif & User Friendly",
      "Setup email domain (1 akun)",
      "Gratis hosting up to 50.000 traffic/month",
      "Integrasi media sosial",
      "Fitur chat WhatsApp",
      "UI/UX desain (tanpa menggunakan template)",
      "Akses Admin",
      "Web Marketing (SEO + Google Analytics)",
      "10+ Backlink / Link Building",
      "Google Ads",
      "2 Email Bisnis",
      "Gratis AI Chatbot",
      "Gratis SSL",
      "Silver Security Services (auto-backup mingguan, anti-malware scan)",
      "Gratis revisi 2x",
      "Pengerjaan 10-14 Hari",
    ],
    benefits: [
      "Konsultasi strategi digital marketing untuk meningkatkan traffic",
      "Setup dan konfigurasi Google Ads campaign awal",
      "Maintenance website selama 1 bulan termasuk bug fixes dan updates",
      "Training pengelolaan admin panel dan content management",
    ],
    popular: true,
    badge: "popular",
    icon: Zap, // Keep Zap for popular
    color: "from-[#e9e15b] to-yellow-400",
  },
  {
    name: "SuperPremium",
    description:
      "Paket unggulan yang sempurna untuk Anda yang ingin memiliki website dengan fitur canggih dan desain eksklusif, lengkap dengan fitur SuperNeo & SuperPro.",
    price: "Rp.5.500.000",
    features: [
      "10+ Halaman Custom (maksimal 12 halaman)",
      "Domain: .com, .net, .co.id, .id, .org (1 tahun)",
      "Hosting 5GB SSD (lokal/Asia), Bandwidth Unmetered",
      "Desain responsif & User Friendly (Desain Premium)",
      "Setup email domain (1 akun)",
      "Gratis hosting up to On Demand Traffic/month",
      "Integrasi media sosial",
      "Fitur chat WhatsApp",
      "UI/UX desain (tanpa menggunakan template)",
      "Akses Admin",
      "Web Marketing (SEO + Google Analytics)",
      "50+ Backlink / Link Building",
      "Google Ads",
      "4 Email Bisnis",
      "Gratis AI Chatbot",
      "Gratis SSL",
      "Full CMS Dinamis (admin dashboard)",
      "Animasi ringan (hero, hover, fade)",
      "Silver Security Services (auto-backup mingguan, anti-malware scan)",
      "Gratis revisi 3x",
      "Pengerjaan On demand (max 30 hari)",
    ],
    benefits: [
      "Konsultasi business strategy dan digital transformation",
      "Custom copywriting untuk 2 halaman utama",
      "Maintenance premium selama 3 bulan dengan priority support",
      "Blog system dengan editor yang user-friendly",
      "Advanced analytics setup dan monthly performance report",
      "Dedicated account manager untuk support berkelanjutan",
    ],
    popular: false,
    badge: "enterprise",
    icon: Crown,
    color: "from-purple-500 to-pink-500",
  },
]

// Custom Software Plans
const softwarePlans = [
  {
    name: "SuperNeo",
    description:
      "Paket ini cocok untuk bisnis kecil yang membutuhkan solusi software sederhana untuk operasional internal.",
    price: "Konsultasi untuk penawaran khusus",
    features: [
      "1 modul utama",
      "Dashboard admin sederhana",
      "Manajemen pengguna dasar",
      "Integrasi dengan 1 sistem eksternal",
      "Desain UI/UX responsif",
      "Pelatihan penggunaan sistem",
      "Support teknis 30 hari",
      "Pengerjaan 30 hari",
      "Gratis revisi 2x",
    ],
    benefits: [
      "Analisis kebutuhan bisnis mendalam untuk memastikan solusi yang tepat",
      "Setup server dan infrastruktur dasar tanpa biaya tambahan",
      "Dokumentasi lengkap dan user manual dalam bahasa Indonesia",
      "Training tim internal untuk penggunaan sistem",
    ],
    popular: false,
    badge: "starter",
    icon: Crown,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "SuperPro",
    description:
      "Paket ini ideal untuk bisnis menengah yang membutuhkan sistem terintegrasi dengan beberapa modul fungsional.",
    price: "Konsultasi untuk penawaran khusus",
    features: [
      "3 modul fungsional",
      "Dashboard admin lengkap",
      "Manajemen pengguna dengan role",
      "Integrasi dengan 3 sistem eksternal",
      "Desain UI/UX premium",
      "Laporan dan analitik dasar",
      "API untuk integrasi pihak ketiga",
      "Pelatihan penggunaan sistem",
      "Support teknis 90 hari",
      "Pengerjaan 60-90 hari",
      "Gratis revisi 3x",
    ],
    benefits: [
      "Business process mapping dan optimization consultation",
      "Cloud infrastructure setup dengan scalability planning",
      "Comprehensive testing termasuk load testing dan security audit",
      "Maintenance dan monitoring sistem selama 3 bulan",
      "API documentation lengkap untuk future development",
      "Priority support dengan dedicated technical team",
    ],
    popular: true,
    badge: "popular",
    icon: Zap,
    color: "from-[#e9e15b] to-yellow-400",
  },
  {
    name: "SuperPremium",
    description:
      "Paket ini sempurna untuk perusahaan yang membutuhkan sistem enterprise dengan fitur lengkap dan skalabilitas tinggi.",
    price: "Konsultasi untuk penawaran khusus",
    features: [
      "Modul tak terbatas",
      "Dashboard admin enterprise",
      "Manajemen pengguna dengan role dan permission",
      "Integrasi dengan sistem eksternal tak terbatas",
      "Desain UI/UX premium custom",
      "Business intelligence & analytics",
      "API lengkap dengan dokumentasi",
      "Keamanan tingkat enterprise",
      "Pelatihan penggunaan sistem komprehensif",
      "Support teknis 1 tahun",
      "Pengerjaan sesuai kebutuhan",
      "Gratis revisi 5x",
    ],
    benefits: [
      "Enterprise architecture consultation dan digital transformation roadmap",
      "High-availability infrastructure dengan disaster recovery planning",
      "Advanced security implementation termasuk penetration testing",
      "Dedicated support team dengan 24/7 monitoring",
      "Quarterly system optimization dan performance tuning",
      "Future development planning dengan technology roadmap",
      "Executive dashboard dan business intelligence reporting",
    ],
    popular: false,
    badge: "enterprise",
    icon: Crown,
    color: "from-purple-500 to-pink-500",
  },
]

// Mobile & Desktop Apps Plans
const mobilePlans = [
  {
    name: "SuperNeo",
    description: "Paket ini cocok untuk bisnis yang ingin memiliki aplikasi mobile sederhana dengan fitur dasar.",
    price: "Mulai dari Rp 5.000.000",
    features: [
      "Aplikasi untuk 1 platform (Android/iOS)",
      "5 halaman/screen utama",
      "Autentikasi pengguna dasar",
      "Integrasi dengan 1 API eksternal",
      "Desain UI/UX responsif",
      "Notifikasi push sederhana",
      "Support teknis 30 hari",
      "Pengerjaan 30-45 hari",
      "Gratis revisi 2x",
    ],
    benefits: [
      "Konsultasi app concept dan user journey mapping",
      "Setup developer account di Google Play Store atau App Store",
      "Bantuan submission dan publikasi aplikasi",
      "Basic app store optimization (ASO) untuk visibility",
    ],
    popular: false,
    badge: "starter",
    icon: Crown,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "SuperPro",
    description:
      "Paket ini ideal untuk bisnis yang membutuhkan aplikasi mobile dengan fitur lengkap untuk kedua platform.",
    price: "Mulai dari Rp 8.500.000",
    features: [
      "Aplikasi untuk Android & iOS",
      "10 halaman/screen",
      "Autentikasi multi-level",
      "Integrasi dengan 3 API eksternal",
      "Desain UI/UX premium",
      "Sistem notifikasi lengkap",
      "Fitur offline mode dasar",
      "Analytics pengguna",
      "Support teknis 90 hari",
      "Pengerjaan 60-90 hari",
      "Gratis revisi 3x",
    ],
    benefits: [
      "Market research dan competitor analysis untuk positioning",
      "Cross-platform development dengan code sharing optimization",
      "Advanced app store optimization dengan keyword research",
      "Maintenance dan bug fixes selama 3 bulan",
      "User analytics setup dan monthly performance report",
      "Marketing consultation untuk app launch strategy",
    ],
    popular: true,
    badge: "popular",
    icon: Zap,
    color: "from-[#e9e15b] to-yellow-400",
  },
  {
    name: "SuperPremium",
    description:
      "Paket ini sempurna untuk perusahaan yang membutuhkan aplikasi enterprise dengan fitur canggih dan performa tinggi.",
    price: "Mulai dari Rp 12.000.000",
    features: [
      "Aplikasi untuk Android, iOS & Web",
      "Screen tak terbatas",
      "Autentikasi multi-level dengan keamanan tinggi",
      "Integrasi API lengkap",
      "Desain UI/UX premium custom",
      "Fitur offline mode & sinkronisasi",
      "Analytics & user behavior tracking",
      "Sistem notifikasi advanced",
      "Support teknis 1 tahun",
      "Pengerjaan sesuai kebutuhan",
      "Gratis revisi 5x",
    ],
    benefits: [
      "Enterprise mobile strategy consultation dan digital transformation",
      "Advanced security implementation dengan encryption dan compliance",
      "Dedicated infrastructure setup dengan scalability planning",
      "Comprehensive testing termasuk performance dan security testing",
      "Long-term maintenance dengan priority support dan updates",
      "Marketing support termasuk app launch campaign planning",
      "Advanced analytics dengan custom dashboard dan reporting",
    ],
    popular: false,
    badge: "enterprise",
    icon: Crown,
    color: "from-purple-500 to-pink-500",
  },
]

export default function HargaPage() {
  const [activeTab, setActiveTab] = useState("web")
  const [language, setLanguage] = useState<"ID" | "EN">("ID")
  const [expandedBenefits, setExpandedBenefits] = useState<{ [key: string]: boolean }>({})
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Enhanced language change listener
  useEffect(() => {
    // Get initial language from localStorage or header
    const savedLanguage = (localStorage.getItem("language") as "ID" | "EN") || "ID"
    setLanguage(savedLanguage)

    // Listen for language changes from header
    const handleLanguageChange = (e: CustomEvent) => {
      setLanguage(e.detail as "ID" | "EN")
      localStorage.setItem("language", e.detail)
    }

    // Listen for storage changes (in case language is changed in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "language" && e.newValue) {
        setLanguage(e.newValue as "ID" | "EN")
      }
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  // Reset expanded benefits when tab changes
  useEffect(() => {
    setExpandedBenefits({})
  }, [activeTab])

  // Get current translations
  const t = translations[language]

  // Get current plans based on active tab
  const getCurrentPlans = () => {
    switch (activeTab) {
      case "web":
        return webPlans
      case "software":
        return softwarePlans
      case "mobile":
        return mobilePlans
      default:
        return webPlans
    }
  }

  const plans = getCurrentPlans()

  // Toggle benefits expansion
  const toggleBenefits = (planIndex: number) => {
    const key = `${activeTab}-${planIndex}`
    setExpandedBenefits((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const getBadgeText = (badge: string) => {
    switch (badge) {
      case "popular":
        return t.popular
      case "enterprise":
        return t.enterprise
      case "starter":
        return t.starter
      default:
        return ""
    }
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "popular":
        return "bg-[#2b2b2b] text-white shadow-lg"
      case "enterprise":
        return "bg-[#2b2b2b] text-white shadow-lg"
      case "starter":
        return "bg-[#2b2b2b] text-white shadow-lg"
      default:
        return "bg-gray-500 text-white shadow-lg"
    }
  }

  return (
    <main>
      <Navbar />

      <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 text-center"
          >
            <motion.p
              className="text-[#e9e15b] font-medium mb-2 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t.pricing}
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#2b2b2b] dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.chooseNeeds}
            </motion.h1>
          </motion.div>

          {/* Tab Navigation - Mobile Optimized */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12"
          >
            {[
              { key: "web", label: t.webDev },
              { key: "software", label: t.customSoftware },
              { key: "mobile", label: t.mobileApps },
            ].map((tab, index) => (
              <motion.button
                key={tab.key}
                variants={tabVariants}
                onClick={() => setActiveTab(tab.key)}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-4 sm:px-6 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base overflow-hidden group ${
                  activeTab === tab.key
                    ? "bg-[#e9e15b] text-[#2b2b2b] shadow-lg transform scale-105"
                    : "bg-white dark:bg-gray-800 hover:bg-[#e9e15b]/10 dark:hover:bg-[#e9e15b]/20 text-[#2b2b2b] dark:text-gray-300 hover:text-[#2b2b2b] border border-gray-200 dark:border-gray-700 hover:border-[#e9e15b]/50 shadow-md hover:shadow-lg"
                }`}
              >
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#e9e15b]/20 to-[#e9e15b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Tab text */}
                <span className="relative z-10">{tab.label}</span>

                {/* Active indicator */}
                {activeTab === tab.key && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#2b2b2b] rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Pricing Cards - Mobile First Grid */}
          <motion.div
            key={activeTab} // Re-animate when tab changes
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              const benefitsKey = `${activeTab}-${index}`
              const isExpanded = expandedBenefits[benefitsKey]

              return (
                <motion.div
                  key={`${activeTab}-${index}`}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className={`relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group ${
                    plan.popular
                      ? "bg-[#e9e15b] border-2 border-[#2b2b2b] transform scale-105"
                      : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#e9e15b]/30"
                  }`}
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#e9e15b]/5 via-transparent to-[#2b2b2b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Badge */}
                  {plan.badge && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="absolute top-4 right-4 z-10"
                    >
                      <motion.span
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${getBadgeColor(plan.badge)}`}
                        animate={
                          plan.badge === "popular"
                            ? {
                                opacity: [1, 0.6, 1],
                                scale: [1, 1.05, 1],
                              }
                            : {}
                        }
                        transition={
                          plan.badge === "popular"
                            ? {
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }
                            : {}
                        }
                      >
                        {getBadgeText(plan.badge)}
                      </motion.span>
                    </motion.div>
                  )}

                  {/* Gradient Background for Popular */}
                  {plan.popular && (
                    <motion.div
                      className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#e9e15b] to-[#e9e15b]/80`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    />
                  )}

                  <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col relative z-10">
                    {/* Header */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${plan.color} shadow-lg flex items-center justify-center min-w-[44px] min-h-[44px] sm:min-w-[52px] sm:min-h-[52px]`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <plan.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3
                            className={`text-xl sm:text-2xl font-bold ${
                              plan.popular ? "text-[#2b2b2b]" : "text-[#2b2b2b] dark:text-white"
                            }`}
                          >
                            {plan.name}
                          </h3>
                        </div>
                      </div>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          plan.popular ? "text-gray-700" : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <motion.div
                      className="mb-6 sm:mb-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <div
                        className={`text-2xl sm:text-3xl md:text-4xl font-black ${
                          plan.popular ? "text-[#2b2b2b]" : "text-[#2b2b2b] dark:text-white"
                        }`}
                      >
                        {plan.price}
                      </div>
                    </motion.div>

                    {/* Features */}
                    <div className="mb-6 sm:mb-8 flex-1">
                      <h4
                        className={`font-bold mb-3 sm:mb-4 text-sm sm:text-base ${
                          plan.popular ? "text-[#2b2b2b]" : "text-[#2b2b2b] dark:text-white"
                        }`}
                      >
                        {t.features}
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {plan.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx, duration: 0.3 }}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span
                              className={`text-xs sm:text-sm leading-relaxed ${
                                plan.popular ? "text-gray-700" : "text-gray-700 dark:text-gray-300"
                              }`}
                            >
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Super Benefits Toggle Button */}
                    {plan.benefits && (
                      <div className="mb-4">
                        <motion.button
                          onClick={() => toggleBenefits(index)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all duration-300 ${
                            isExpanded
                              ? "border-[#e9e15b] bg-[#e9e15b]/10"
                              : "border-gray-200 dark:border-gray-700 hover:border-[#e9e15b]/50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-[#e9e15b]" />
                            <span
                              className={`font-semibold text-sm ${
                                plan.popular ? "text-[#2b2b2b]" : "text-[#2b2b2b] dark:text-white"
                              }`}
                            >
                              {t.superBenefits}
                            </span>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                          >
                            <motion.div
                              animate={{
                                rotate: [0, 360],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e9e15b] via-[#2b2b2b] to-[#e9e15b] opacity-20"
                            />
                            <ChevronDown
                              className={`h-5 w-5 relative z-10 ${
                                plan.popular ? "text-[#2b2b2b]" : "text-[#2b2b2b] dark:text-white"
                              }`}
                            />
                          </motion.div>
                        </motion.button>
                      </div>
                    )}

                    {/* Collapsible Super Benefits */}
                    <AnimatePresence>
                      {plan.benefits && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mb-6 overflow-hidden"
                        >
                          <motion.div
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            exit={{ y: -20 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="bg-gradient-to-br from-[#e9e15b]/10 to-[#2b2b2b]/5 rounded-xl p-4 border border-[#e9e15b]/20"
                          >
                            <p
                              className={`text-xs sm:text-sm mb-3 font-medium ${
                                plan.popular ? "text-gray-700" : "text-gray-600 dark:text-gray-300"
                              }`}
                            >
                              {
                                serviceBenefitsDescriptions[activeTab as keyof typeof serviceBenefitsDescriptions][
                                  language
                                ]
                              }
                            </p>
                            <ul className="space-y-2">
                              {plan.benefits.map((benefit, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * idx + 0.2, duration: 0.3 }}
                                  className="flex items-start gap-2"
                                >
                                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-[#e9e15b] flex-shrink-0 mt-1" />
                                  <span
                                    className={`text-xs sm:text-sm leading-relaxed ${
                                      plan.popular ? "text-gray-700" : "text-gray-700 dark:text-gray-300"
                                    }`}
                                  >
                                    {benefit}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CTA Button */}
                    <motion.div className="mt-auto" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="https://api.whatsapp.com/send/?phone=6281281892625&text=Halo%20Supernesia,%20saya%20tertarik%20dengan%20paket%20${plan.name}&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-center w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                          plan.popular
                            ? "bg-[#2b2b2b] text-white hover:bg-[#2b2b2b]/90"
                            : "bg-[#e9e15b] text-[#2b2b2b] hover:bg-[#e9e15b]/90"
                        }`}
                      >
                        {t.orderNow}
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <WhatsappCTA />
      <Footer />
    </main>
  )
}
