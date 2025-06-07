"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SupernesiaChatbot from "@/components/supernesia-chatbot"
import {
  GitBranch,
  GitCommit,
  Search,
  Palette,
  Code,
  TestTube,
  Rocket,
  Headphones,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

// Enhanced translations with proper Indonesian translations
const translations = {
  ID: {
    category: "APLIKASI MOBILE & DESKTOP",
    title: "MENCIPTAKAN APLIKASI YANG MENARIK DAN INTERAKTIF SECARA PROFESIONAL",
    description:
      "Kami mengkhususkan diri dalam memberikan layanan pengembangan aplikasi mobile dan desktop yang kuat bagi bisnis yang disesuaikan untuk memenuhi berbagai kebutuhan bisnis di semua industri. Dengan pengalaman yang luas bekerja dengan perusahaan publik dan swasta, kami memanfaatkan teknologi terbaru untuk membuat aplikasi yang dinamis dan berkinerja tinggi.",
    chatNow: "Chat Sekarang",
    viewPackage: "Lihat Paket",
    keyBenefit: "KEUNGGULAN UTAMA",
    whyPartner: "MENGAPA BERMITRA DENGAN KAMI?",
    partnerDescription:
      "Di dunia yang mengutamakan digital saat ini, memiliki kehadiran online yang kuat melalui website dan aplikasi mobile sangat penting untuk kesuksesan bisnis. Layanan pengembangan kami menciptakan solusi digital kustom berkinerja tinggi yang melibatkan pengguna dan mendorong hasil bisnis.",
    benefit1: "Menciptakan pengalaman digital yang menarik untuk mengkonversi pengunjung menjadi pelanggan",
    benefit2: "Integrasi dengan sistem yang ada dan layanan pihak ketiga",
    benefit3: "Implementasi kode yang aman, scalable, dan mudah dipelihara",
    benefit4: "Memastikan desain responsif yang berfungsi di semua perangkat",
    benefit5: "Membangun solusi kustom yang disesuaikan dengan kebutuhan bisnis spesifik Anda",
    benefit6: "Memanfaatkan teknologi modern untuk performa optimal",
    ourProcess: "Proses Pengembangan Kami",
    processSubtitle: "Metodologi terstruktur untuk hasil yang optimal",
    discovery: "Riset & Perencanaan",
    discoveryDesc:
      "Kami mulai dengan memahami kebutuhan, target audiens, dan tujuan bisnis Anda melalui riset mendalam dan analisis komprehensif.",
    design: "Desain UI/UX",
    designDesc:
      "Tim desainer kami menciptakan pengalaman pengguna yang intuitif dan menarik serta desain visual untuk produk digital Anda.",
    development: "Pengembangan",
    developmentDesc:
      "Tim pengembangan kami membangun solusi Anda menggunakan praktik terbaik industri dan teknologi terdepan.",
    testing: "Testing & QA",
    testingDesc:
      "Kami menguji aplikasi Anda secara menyeluruh di berbagai perangkat dan kasus penggunaan untuk memastikan kualitas terbaik.",
    deployment: "Deployment",
    deploymentDesc:
      "Kami menangani deployment aplikasi Anda ke lingkungan produksi dengan monitoring dan optimasi performa.",
    support: "Support & Maintenance",
    supportDesc:
      "Kami menyediakan dukungan berkelanjutan dan pemeliharaan untuk menjaga produk digital Anda berjalan dengan lancar.",
    otherService: "LAYANAN LAINNYA",
    otherServices: "LAYANAN LAINNYA",
    webDev: "Pengembangan Website",
    webDevDesc: "Pengembangan website modern dan responsif dengan teknologi terdepan untuk kehadiran online yang kuat.",
    customSoftware: "Pengembangan Software Kustom",
    customSoftwareDesc: "Solusi perangkat lunak kustom yang disesuaikan dengan kebutuhan bisnis spesifik Anda.",
    contactUs: "AYO BERGERAK",
    contactViaWhatsApp: "HUBUNGI KAMI MELALUI WHATSAPP",
    contactDesc:
      "Ingin tanya lebih lanjut tentang paket, benefit atau fitur yang tersedia? Atau ingin custom plan juga bisa. Kami siap membantu perkembangan Anda, jangan ragu untuk bertanya, kami siap melayani dan gratis!",
    chatNowButton: "Chat Sekarang",
  },
  EN: {
    category: "MOBILE & DESKTOP APP",
    title: "PROFESSIONALLY CRAFTING VISUALLY ENGAGING AND INTERACTIVE APPLICATIONS",
    description:
      "We specialize in providing powerful mobile and desktop application development services for businesses tailored to meet various business needs across all industries. With extensive experience working with public and private companies, we leverage the latest technology to create dynamic and high-performing applications.",
    chatNow: "Chat Now",
    viewPackage: "View Package",
    keyBenefit: "KEY BENEFIT",
    whyPartner: "WHY PARTNER WITH US?",
    partnerDescription:
      "In today's digital-first world, having a strong online presence through websites and mobile apps is essential for business success. Our development services create custom, high-performance digital solutions that engage users and drive business results.",
    benefit1: "Create engaging digital experiences that convert visitors to customers",
    benefit2: "Integrate with existing systems and third-party services",
    benefit3: "Implement secure, scalable, and maintainable code",
    benefit4: "Ensure responsive design that works across all devices",
    benefit5: "Build custom solutions tailored to your specific business needs",
    benefit6: "Leverage modern technologies for optimal performance",
    ourProcess: "Our Development Process",
    processSubtitle: "Structured methodology for optimal results",
    discovery: "Discovery & Planning",
    discoveryDesc:
      "We start by understanding your requirements, target audience, and business objectives through in-depth research and comprehensive analysis.",
    design: "UI/UX Design",
    designDesc:
      "Our designers create intuitive, engaging user experiences and visual designs for your digital product.",
    development: "Development",
    developmentDesc:
      "Our development team builds your solution using industry-best practices and cutting-edge technologies.",
    testing: "Testing & QA",
    testingDesc:
      "We thoroughly test your application across devices and use cases to ensure the highest quality standards.",
    deployment: "Deployment",
    deploymentDesc:
      "We handle the deployment of your application to production environments with monitoring and performance optimization.",
    support: "Support & Maintenance",
    supportDesc:
      "We provide ongoing support and maintenance to keep your digital product running smoothly and up-to-date.",
    otherService: "OTHER SERVICES",
    otherServices: "OTHER SERVICES",
    webDev: "Web Development",
    webDevDesc: "Modern and responsive website development with cutting-edge technology for strong online presence.",
    customSoftware: "Custom Software Development",
    customSoftwareDesc: "Custom software solutions tailored to your specific business needs and requirements.",
    contactUs: "LET'S GET STARTED",
    contactViaWhatsApp: "CONTACT US VIA WHATSAPP",
    contactDesc:
      "Want to ask more about packages, benefits, or available features? Or want a custom plan? We're ready to help your development, don't hesitate to ask, we're ready to serve and it's free!",
    chatNowButton: "Chat Now",
  },
}

export default function MobileAppPage() {
  const [language, setLanguage] = useState("ID")
  const processRef = useRef(null)
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 })

  // Enhanced language change listener
  useEffect(() => {
    // Get initial language from localStorage or header
    const savedLanguage = localStorage.getItem("language") || "ID"
    setLanguage(savedLanguage)

    // Listen for language changes from header
    const handleLanguageChange = (e: CustomEvent) => {
      setLanguage(e.detail)
      localStorage.setItem("language", e.detail)
    }

    // Listen for storage changes (in case language is changed in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "language" && e.newValue) {
        setLanguage(e.newValue)
      }
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  // Get current translations
  const t = translations[language as keyof typeof translations]

  // Process steps with icons
  const processSteps = [
    {
      icon: Search,
      title: t.discovery,
      description: t.discoveryDesc,
      color: "from-blue-500 to-cyan-500",
      position: "left",
    },
    {
      icon: Palette,
      title: t.design,
      description: t.designDesc,
      color: "from-purple-500 to-pink-500",
      position: "right",
    },
    {
      icon: Code,
      title: t.development,
      description: t.developmentDesc,
      color: "from-green-500 to-emerald-500",
      position: "left",
    },
    {
      icon: TestTube,
      title: t.testing,
      description: t.testingDesc,
      color: "from-orange-500 to-red-500",
      position: "right",
    },
    {
      icon: Rocket,
      title: t.deployment,
      description: t.deploymentDesc,
      color: "from-indigo-500 to-blue-500",
      position: "left",
    },
    {
      icon: Headphones,
      title: t.support,
      description: t.supportDesc,
      color: "from-teal-500 to-cyan-500",
      position: "right",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <motion.p
                className="text-[#e9e15b] font-medium mb-2 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {t.category}
              </motion.p>
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {t.title}
              </motion.h1>
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {t.description}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link
                  href="https://wa.me/6281281892625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#e9e15b] hover:bg-[#d4c952] text-gray-900 px-6 py-3 font-bold rounded-lg transition-all duration-300 text-center"
                >
                  {t.chatNow}
                </Link>
                <Link
                  href="/harga"
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-[#e9e15b] px-6 py-3 font-bold rounded-lg transition-all duration-300 text-center"
                >
                  {t.viewPackage}
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/layanan_001.png"
                alt="Mobile App Development"
                width={600}
                height={400}
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#e9e15b] font-medium mb-2 text-sm sm:text-base">{t.keyBenefit}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-8 text-gray-900 dark:text-white">
              {t.whyPartner}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl text-sm sm:text-base leading-relaxed">
              {t.partnerDescription}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#e9e15b] p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gray-800 mt-1 flex-shrink-0" />
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section - GitHub Style Tree */}
      <section ref={processRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-4">
              <GitBranch className="w-6 h-6 text-[#e9e15b] mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                {t.ourProcess}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{t.processSubtitle}</p>
          </motion.div>

          {/* Desktop Tree View */}
          <div className="hidden lg:block relative">
            {/* Main Branch Line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e9e15b] to-gray-300 transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={isProcessInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />

            {/* Process Steps */}
            <div className="space-y-16">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon
                const isLeft = step.position === "left"

                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Branch Line */}
                    <motion.div
                      className={`absolute top-8 w-16 h-0.5 bg-gradient-to-r ${step.color} ${
                        isLeft ? "right-1/2 mr-8" : "left-1/2 ml-8"
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={isProcessInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      style={{ transformOrigin: isLeft ? "right" : "left" }}
                    />

                    {/* Commit Node */}
                    <motion.div
                      className="absolute left-1/2 top-6 transform -translate-x-1/2 z-10"
                      initial={{ scale: 0 }}
                      animate={isProcessInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                    >
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} shadow-lg flex items-center justify-center`}
                      >
                        <GitCommit className="w-3 h-3 text-white" />
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <div className={`${isLeft ? "pr-24" : "pl-24"} ${isLeft ? "text-right" : "text-left"}`}>
                      <motion.div
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className={`flex items-center mb-4 ${isLeft ? "justify-end" : "justify-start"}`}>
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${step.color} mr-3`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Mobile/Tablet Tree View */}
          <div className="lg:hidden relative">
            {/* Main Branch Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e9e15b] to-gray-300"
              initial={{ scaleY: 0 }}
              animate={isProcessInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />

            {/* Process Steps */}
            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon

                return (
                  <motion.div
                    key={index}
                    className="relative pl-20"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Branch Line */}
                    <motion.div
                      className={`absolute left-8 top-6 w-8 h-0.5 bg-gradient-to-r ${step.color}`}
                      initial={{ scaleX: 0 }}
                      animate={isProcessInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      style={{ transformOrigin: "left" }}
                    />

                    {/* Commit Node */}
                    <motion.div
                      className="absolute left-6 top-4 z-10"
                      initial={{ scale: 0 }}
                      animate={isProcessInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${step.color} shadow-lg flex items-center justify-center`}
                      >
                        <GitCommit className="w-2.5 h-2.5 text-white" />
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -3, scale: 1.01 }}
                    >
                      <div className="flex items-center mb-3">
                        <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${step.color} mr-3`}>
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-[#e9e15b] font-medium mb-2 text-sm sm:text-base">{t.otherService}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 text-gray-900 dark:text-white">
              {t.otherServices}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t.webDev}</h3>
              <div className="border-t border-[#e9e15b] my-3"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
                {t.webDevDesc}
              </p>
              <div className="flex justify-end">
                <Link href="/layanan/web-development" className="text-[#e9e15b] hover:text-[#d4c952] transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t.customSoftware}</h3>
              <div className="border-t border-[#e9e15b] my-3"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
                {t.customSoftwareDesc}
              </p>
              <div className="flex justify-end">
                <Link href="/layanan/custom-software" className="text-[#e9e15b] hover:text-[#d4c952] transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 sm:p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-[#e9e15b] font-medium mb-2 text-sm sm:text-base">{t.contactUs}</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 text-gray-900 dark:text-white">
                  {t.contactViaWhatsApp}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                  {t.contactDesc}
                </p>
                <motion.button
                  onClick={() => {
                    // @ts-ignore
                    if (typeof window !== "undefined" && window.openSupernesiaChatbot) {
                      // @ts-ignore
                      window.openSupernesiaChatbot()
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#e9e15b] hover:bg-[#d4c952] text-gray-900 px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2"
                >
                  <span>{t.chatNowButton}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image src="/contact.png" alt="Contact Us" width={300} height={300} className="w-full max-w-sm" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <SupernesiaChatbot />
      <Footer />
    </main>
  )
}
