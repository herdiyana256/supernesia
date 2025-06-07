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
} from "lucide-react"

// Translations
const translations = {
  ID: {
    category: "WEB DEVELOPMENT",
    title: "PROFESSIONALLY CRAFTING VISUALLY ENGAGING AND INTERACTIVE WEBSITES",
    description:
      "Kami mengkhususkan diri dalam memberikan layanan pengembangan web yang kuat bagi bisnis yang disesuaikan untuk memenuhi berbagai kebutuhan bisnis di semua industri. Dengan pengalaman yang luas bekerja dengan perusahaan publik dan swasta, kami memanfaatkan teknologi terbaru untuk membuat situs web yang dinamis dan berkinerja tinggi.",
    chatNow: "Chat Sekarang",
    viewPackage: "Lihat Paket",
    keyBenefit: "KEY BENEFIT",
    whyPartner: "WHY PARTNER WITH US?",
    partnerDescription:
      "Dalam dunia digital-first saat ini, memiliki kehadiran online yang kuat melalui website dan aplikasi mobile sangat penting untuk kesuksesan bisnis. Layanan pengembangan kami menciptakan solusi digital kustom berkinerja tinggi yang melibatkan pengguna dan mendorong hasil bisnis.",
    benefit1: "Menciptakan pengalaman digital yang menarik untuk mengkonversi pengunjung menjadi pelanggan",
    benefit2: "Integrasi dengan sistem yang ada dan layanan pihak ketiga",
    benefit3: "Implementasi kode yang aman, scalable, dan mudah dipelihara",
    benefit4: "Memastikan desain responsif yang bekerja di semua perangkat",
    benefit5: "Membangun solusi kustom yang disesuaikan dengan kebutuhan bisnis spesifik Anda",
    benefit6: "Memanfaatkan teknologi modern untuk performa optimal",
    ourProcess: "Proses Kami",
    discovery: "Discovery & Planning",
    discoveryDesc: "Kami mulai dengan memahami kebutuhan, target audience, dan tujuan bisnis Anda.",
    design: "UI/UX Design",
    designDesc:
      "Designer kami menciptakan pengalaman pengguna yang intuitif dan menarik serta desain visual untuk produk digital Anda.",
    development: "Development",
    developmentDesc: "Tim development kami membangun solusi Anda menggunakan praktik terbaik industri.",
    testing: "Testing & QA",
    testingDesc: "Kami menguji aplikasi Anda secara menyeluruh di berbagai perangkat dan use case.",
    deployment: "Deployment",
    deploymentDesc: "Kami menangani deployment aplikasi Anda ke lingkungan produksi.",
    support: "Support & Maintenance",
    supportDesc:
      "Kami menyediakan dukungan dan pemeliharaan berkelanjutan untuk menjaga produk digital Anda berjalan lancar.",
    otherService: "OTHER SERVICE",
    otherServices: "LAYANAN LAINNYA",
    mobileApp: "Mobile & Desktop App",
    customSoftware: "Custom Software Development",
    contactUs: "AYO BERGERAK",
    contactViaWhatsApp: "HUBUNGI KAMI MELALUI WHATSAPP",
    contactDesc:
      "Ingin tanya lebih lanjut tentang paket, benefit atau fitur yang tersedia? atau ingin custom plan juga bisa. Kita siap untuk bantu perkembanganmu, gak perlu ragu buat nanya, kami siap melayani dan gratis pokoknya.",
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
    ourProcess: "Our Process",
    discovery: "Discovery & Planning",
    discoveryDesc: "We start by understanding your requirements, target audience, and business objectives.",
    design: "UI/UX Design",
    designDesc:
      "Our designers create intuitive, engaging user experiences and visual designs for your digital product.",
    development: "Development",
    developmentDesc: "Our development team builds your solution using industry-best practices.",
    testing: "Testing & QA",
    testingDesc: "We thoroughly test your application across devices and use cases.",
    deployment: "Deployment",
    deploymentDesc: "We handle the deployment of your application to production environments.",
    support: "Support & Maintenance",
    supportDesc: "We provide ongoing support and maintenance to keep your digital product running smoothly.",
    otherService: "OTHER SERVICE",
    otherServices: "OTHER SERVICES",
    mobileApp: "Mobile & Desktop App",
    customSoftware: "Custom Software Development",
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
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  // Listen for language changes
  useEffect(() => {
    // Initialize language from localStorage
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as "ID" | "EN"
      if (savedLanguage) {
        setLanguage(savedLanguage)
      }
    }

    // Listen for language change events from navbar
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail as "ID" | "EN")
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
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

  const processSteps = [
    { icon: Search, title: t.discovery, description: t.discoveryDesc },
    { icon: Palette, title: t.design, description: t.designDesc },
    { icon: Code, title: t.development, description: t.developmentDesc },
    { icon: TestTube, title: t.testing, description: t.testingDesc },
    { icon: Rocket, title: t.deployment, description: t.deploymentDesc },
    { icon: HeadphonesIcon, title: t.support, description: t.supportDesc },
  ]

  const benefits = [t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6]

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 md:py-24 px-4 md:px-12 lg:px-20">
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
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 text-[#2b2b2b] dark:text-white"
                variants={itemVariants}
              >
                {t.title}
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl"
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
                    className="inline-block bg-[#e9e15b] text-[#2b2b2b] px-8 py-4 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center w-full sm:w-auto"
                  >
                    {t.chatNow}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/harga"
                    className="inline-block bg-white dark:bg-gray-800 border-2 border-[#2b2b2b] dark:border-[#e9e15b] text-[#2b2b2b] dark:text-[#e9e15b] px-8 py-4 font-bold rounded-full hover:bg-[#2b2b2b] hover:text-white dark:hover:bg-[#e9e15b] dark:hover:text-[#2b2b2b] transition-all duration-300 text-center w-full sm:w-auto"
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
        className="py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
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
              className="text-4xl md:text-5xl font-black leading-tight mb-8 text-[#2b2b2b] dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.whyPartner}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl"
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="bg-[#e9e15b] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#2b2b2b] mt-1 flex-shrink-0" />
                  <p className="text-[#2b2b2b] font-medium leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section ref={processRef} className="py-20 px-4 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#2b2b2b] dark:text-white">{t.ourProcess}</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isProcessInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#e9e15b]/10 rounded-full -translate-y-10 translate-x-10" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-[#e9e15b]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e9e15b] transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[#2b2b2b]" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-[#2b2b2b] dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Other Services Section */}
      <section
        ref={servicesRef}
        className="py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
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
              className="text-4xl md:text-5xl font-black leading-tight mb-8 text-[#2b2b2b] dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.otherServices}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Kami menawarkan pendekatan unik untuk transformasi digital yang berfokus pada hasil bisnis nyata dan
              solusi yang disesuaikan dengan kebutuhan spesifik Anda.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#e9e15b]/20 flex items-center justify-center group-hover:bg-[#e9e15b] transition-colors duration-300">
                  <Smartphone className="w-6 h-6 text-[#2b2b2b]" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2b2b] dark:text-white">{t.mobileApp}</h3>
              </div>

              <div className="border-t border-[#2b2b2b]/20 dark:border-[#e9e15b]/20 my-4"></div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 h-24">
                Konsultasi strategis untuk menyelaraskan inisiatif teknologi dengan tujuan bisnis Anda.
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
                y: -10,
                scale: 1.03,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#e9e15b]/20 flex items-center justify-center group-hover:bg-[#e9e15b] transition-colors duration-300">
                  <Server className="w-6 h-6 text-[#2b2b2b]" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2b2b] dark:text-white">{t.customSoftware}</h3>
              </div>

              <div className="border-t border-[#2b2b2b]/20 dark:border-[#e9e15b]/20 my-4"></div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 h-24">
                Konsultasi strategis untuk menyelaraskan inisiatif teknologi dengan tujuan bisnis Anda.
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
      <section ref={ctaRef} className="py-20 px-4 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-12 shadow-xl"
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

              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-[#2b2b2b] dark:text-white">
                {t.contactViaWhatsApp}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">{t.contactDesc}</p>

              <motion.button
                onClick={() => {
                  // @ts-ignore
                  if (typeof window !== "undefined" && window.openSupernesiaChatbot) {
                    // @ts-ignore
                    window.openSupernesiaChatbot()
                  }
                }}
                className="bg-[#e9e15b] text-[#2b2b2b] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.chatNowButton}
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
