"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SupernesiaChatbot from "@/components/supernesia-chatbot"
import { motion, useInView } from "framer-motion"
import {
  ArrowUpRight,
  CheckCircle,
  Code,
  Palette,
  TestTube,
  Rocket,
  HeadphonesIcon,
  Search,
  Sparkles,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  GitCommit,
  ArrowRight,
} from "lucide-react"

// Enhanced translations with proper Indonesian translations
const translations = {
  ID: {
    category: "PENGEMBANGAN WEBSITE",
    title: "MENCIPTAKAN WEBSITE YANG MENARIK DAN INTERAKTIF SECARA PROFESIONAL",
    description:
      "Kami mengkhususkan diri dalam memberikan layanan pengembangan web yang kuat bagi bisnis yang disesuaikan untuk memenuhi berbagai kebutuhan bisnis di semua industri. Dengan pengalaman yang luas bekerja dengan perusahaan publik dan swasta, kami memanfaatkan teknologi terbaru untuk membuat situs web yang dinamis dan berkinerja tinggi.",
    chatNow: "Chat Sekarang",
    viewPackage: "Lihat Paket",
    keyBenefit: "KEUNGGULAN UTAMA",
    whyPartner: "MENGAPA BERMITRA DENGAN KAMI?",
    partnerDescription:
      "Dalam dunia digital-first saat ini, memiliki kehadiran online yang kuat melalui website dan aplikasi mobile sangat penting untuk kesuksesan bisnis. Layanan pengembangan kami menciptakan solusi digital kustom berkinerja tinggi yang melibatkan pengguna dan mendorong hasil bisnis.",
    benefit1: "Menciptakan pengalaman digital yang menarik untuk mengkonversi pengunjung menjadi pelanggan",
    benefit2: "Integrasi dengan sistem yang ada dan layanan pihak ketiga",
    benefit3: "Implementasi kode yang aman, scalable, dan mudah dipelihara",
    benefit4: "Memastikan desain responsif yang bekerja di semua perangkat",
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
      "Kami menguji website Anda secara menyeluruh di berbagai perangkat dan kasus penggunaan untuk memastikan kualitas terbaik.",
    deployment: "Deployment",
    deploymentDesc:
      "Kami menangani deployment website Anda ke lingkungan produksi dengan monitoring dan optimasi performa.",
    support: "Support & Maintenance",
    supportDesc:
      "Kami menyediakan dukungan berkelanjutan dan pemeliharaan untuk menjaga website Anda berjalan dengan lancar.",
    otherService: "LAYANAN LAINNYA",
    otherServices: "LAYANAN LAINNYA",
    mobileApp: "Aplikasi Mobile & Desktop",
    mobileAppDesc:
      "Pengembangan aplikasi mobile dan desktop yang powerful dengan teknologi terdepan untuk semua platform.",
    customSoftware: "Pengembangan Software Kustom",
    customSoftwareDesc: "Solusi perangkat lunak kustom yang disesuaikan dengan kebutuhan bisnis spesifik Anda.",
    contactUs: "AYO BERGERAK",
    contactViaWhatsApp: "HUBUNGI KAMI MELALUI WHATSAPP",
    contactDesc:
      "Ingin tanya lebih lanjut tentang paket, benefit atau fitur yang tersedia? atau ingin custom plan juga bisa. Kami siap membantu perkembangan Anda, jangan ragu untuk bertanya, kami siap melayani dan gratis!",
    chatNowButton: "Chat Sekarang",
  },
  EN: {
    category: "WEB DEVELOPMENT",
    title: "PROFESSIONALLY CRAFTING VISUALLY ENGAGING AND INTERACTIVE WEBSITES",
    description:
      "We specialize in providing powerful web development services for businesses tailored to meet various business needs across all industries. With extensive experience working with public and private companies, we leverage the latest technology to create dynamic and high-performing websites.",
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
      "We thoroughly test your website across devices and use cases to ensure the highest quality standards.",
    deployment: "Deployment",
    deploymentDesc:
      "We handle the deployment of your website to production environments with monitoring and performance optimization.",
    support: "Support & Maintenance",
    supportDesc: "We provide ongoing support and maintenance to keep your website running smoothly and up-to-date.",
    otherService: "OTHER SERVICES",
    otherServices: "OTHER SERVICES",
    mobileApp: "Mobile & Desktop App",
    mobileAppDesc:
      "Powerful mobile and desktop application development with cutting-edge technology for all platforms.",
    customSoftware: "Custom Software Development",
    customSoftwareDesc: "Custom software solutions tailored to your specific business needs and requirements.",
    contactUs: "LET'S GET STARTED",
    contactViaWhatsApp: "CONTACT US VIA WHATSAPP",
    contactDesc:
      "Want to ask more about packages, benefits, or available features? Or want a custom plan? We're ready to help your development, don't hesitate to ask, we're ready to serve and it's free!",
    chatNowButton: "Chat Now",
  },
}

export default function WebDevelopmentPage() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID")

  const heroRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 })
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 })

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

  // Get current translations
  const t = translations[language]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  // Process steps with icons and colors
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
      icon: HeadphonesIcon,
      title: t.support,
      description: t.supportDesc,
      color: "from-teal-500 to-cyan-500",
      position: "right",
    },
  ]

  const benefits = [t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6]

  return (
    <main className="overflow-hidden min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 w-32 h-32 bg-[#e9e15b]/10 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute top-40 right-20 w-48 h-48 bg-[#2b2b2b]/5 dark:bg-[#e9e15b]/5 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "4s" }}
            className="absolute bottom-20 left-1/4 w-36 h-36 bg-[#e9e15b]/15 rounded-full blur-xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <motion.div
                initial={{ scale: 0 }}
                animate={isHeroInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-[#e9e15b]/20 dark:bg-[#e9e15b]/30 px-4 py-2 rounded-full mb-6"
              >
                <Globe className="w-5 h-5 text-[#2b2b2b] dark:text-[#e9e15b]" />
                <span className="text-[#2b2b2b] dark:text-[#e9e15b] font-semibold text-sm">{t.category}</span>
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 sm:mb-6 text-[#2b2b2b] dark:text-white"
                variants={itemVariants}
              >
                {t.title}
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                {t.description}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://wa.me/6281281892625"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#e9e15b] text-[#2b2b2b] px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center w-full sm:w-auto"
                  >
                    {t.chatNow}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/harga"
                    className="inline-block bg-white dark:bg-gray-800 border-2 border-[#2b2b2b] dark:border-[#e9e15b] text-[#2b2b2b] dark:text-[#e9e15b] px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full hover:bg-[#2b2b2b] hover:text-white dark:hover:bg-[#e9e15b] dark:hover:text-[#2b2b2b] transition-all duration-300 text-center w-full sm:w-auto"
                  >
                    {t.viewPackage}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image Content */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-lg"
              >
                {/* Background Glow Effect */}
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-[#e9e15b]/20 via-[#e9e15b]/10 to-[#2b2b2b]/10 rounded-3xl blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-[#e9e15b]/10 to-[#2b2b2b]/5 rounded-3xl p-4 backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                    <Image
                      src="/layanan_001.png"
                      alt="Web Development Services"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover object-center"
                      priority
                      quality={95}
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/10 via-transparent to-[#e9e15b]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-[#e9e15b] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#2b2b2b] dark:bg-[#e9e15b] rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section
        ref={benefitsRef}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isBenefitsInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-[#e9e15b]/20 dark:bg-[#e9e15b]/30 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-[#2b2b2b] dark:text-[#e9e15b]" />
              <span className="text-[#2b2b2b] dark:text-[#e9e15b] font-semibold">{t.keyBenefit}</span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-8 text-[#2b2b2b] dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.whyPartner}
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {t.partnerDescription}
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isBenefitsInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                className="bg-[#e9e15b] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#2b2b2b] mt-1 flex-shrink-0" />
                  <p className="text-[#2b2b2b] font-medium leading-relaxed text-sm sm:text-base">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2b2b2b] dark:text-white">
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
                          <h3 className="text-xl font-bold text-[#2b2b2b] dark:text-white">{step.title}</h3>
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
                        <h3 className="text-lg sm:text-xl font-bold text-[#2b2b2b] dark:text-white">{step.title}</h3>
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
      <section
        ref={servicesRef}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isServicesInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-[#e9e15b]/20 dark:bg-[#e9e15b]/30 px-4 py-2 rounded-full mb-6"
            >
              <Code className="w-5 h-5 text-[#2b2b2b] dark:text-[#e9e15b]" />
              <span className="text-[#2b2b2b] dark:text-[#e9e15b] font-semibold">{t.otherService}</span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 text-[#2b2b2b] dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.otherServices}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#e9e15b]/20 flex items-center justify-center group-hover:bg-[#e9e15b] transition-colors duration-300">
                  <Smartphone className="w-6 h-6 text-[#2b2b2b]" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2b2b] dark:text-white">{t.mobileApp}</h3>
              </div>

              <div className="border-t border-[#2b2b2b]/20 dark:border-[#e9e15b]/20 my-4"></div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
                {t.mobileAppDesc}
              </p>

              <div className="flex justify-end">
                <Link href="/layanan/mobile-app">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#e9e15b]/10 flex items-center justify-center text-[#2b2b2b] dark:text-[#e9e15b] group-hover:bg-[#e9e15b] group-hover:text-[#2b2b2b] transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#e9e15b]/20 flex items-center justify-center group-hover:bg-[#e9e15b] transition-colors duration-300">
                  <Server className="w-6 h-6 text-[#2b2b2b]" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2b2b] dark:text-white">{t.customSoftware}</h3>
              </div>

              <div className="border-t border-[#2b2b2b]/20 dark:border-[#e9e15b]/20 my-4"></div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
                {t.customSoftwareDesc}
              </p>

              <div className="flex justify-end">
                <Link href="/layanan/custom-software">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#e9e15b]/10 flex items-center justify-center text-[#2b2b2b] dark:text-[#e9e15b] group-hover:bg-[#e9e15b] group-hover:text-[#2b2b2b] transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section ref={ctaRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ scale: 0 }}
                animate={isCtaInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-[#e9e15b]/20 dark:bg-[#e9e15b]/30 px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-5 h-5 text-[#2b2b2b] dark:text-[#e9e15b]" />
                <span className="text-[#2b2b2b] dark:text-[#e9e15b] font-semibold">{t.contactUs}</span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 text-[#2b2b2b] dark:text-white">
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
                className="bg-[#e9e15b] text-[#2b2b2b] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t.chatNowButton}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Image
                  src="/contact.png"
                  alt="Contact Us"
                  width={300}
                  height={300}
                  className="w-full max-w-sm rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <SupernesiaChatbot />
      <Footer />
    </main>
  )
}
