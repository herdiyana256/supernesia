"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { MessageCircle, ArrowRight, Zap, Clock, Shield, CheckCircle, Star } from "lucide-react"
import { useRef } from "react"

// Counter Animation Component
function AnimatedCounter({
  value,
  duration = 2,
  delay = 0,
  suffix = "",
  prefix = "",
  decimal = 0,
}: {
  value: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  decimal?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value)
      }, delay * 1000)
    }
  }, [isInView, value, motionValue, delay])

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(latest)
    })
  }, [springValue])

  return (
    <span ref={ref}>
      {prefix}
      {decimal > 0 ? displayValue.toFixed(decimal) : Math.floor(displayValue)}
      {suffix}
    </span>
  )
}

// Translations
const translations = {
  ID: {
    title: "SIAP BERKEMBANG BERSAMA?",
    subtitle: "MARI DISKUSIKAN PROYEK ANDA",
    description:
      "Konsultasi gratis dengan tim expert kami untuk membahas kebutuhan digital Anda. Dapatkan solusi terbaik yang sesuai dengan visi dan budget bisnis Anda.",
    chatNow: "Mulai Konsultasi",
    benefits: ["Konsultasi Gratis", "Respon Cepat 24/7", "Solusi Terpersonalisasi"],
    trustText: "Informasi Anda aman dan terlindungi",
    onlineText: "Tim Online - Siap Membantu Anda",
    responseTime: "Respon <",
    responseMinutes: "menit",
    successProjects: "Proyek Sukses",
    rating: "Rating Klien",
    teamCount: "Expert",
  },
  EN: {
    title: "READY TO GROW TOGETHER?",
    subtitle: "LET'S DISCUSS YOUR PROJECT",
    description:
      "Free consultation with our expert team to discuss your digital needs. Get the best solutions that match your business vision and budget.",
    chatNow: "Start Consultation",
    benefits: ["Free Consultation", "24/7 Fast Response", "Personalized Solutions"],
    trustText: "Your information is safe and protected",
    onlineText: "Team Online - Ready to Help You",
    responseTime: "Response <",
    responseMinutes: "minutes",
    successProjects: "Successful Projects",
    rating: "Client Rating",
    teamCount: "Experts",
  },
}

export default function WhatsappCTA() {
  const [language, setLanguage] = useState<"ID" | "EN">("ID")
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Set initial language from localStorage
    const savedLanguage = localStorage.getItem("language") as "ID" | "EN" | null
    if (savedLanguage && (savedLanguage === "ID" || savedLanguage === "EN")) {
      setLanguage(savedLanguage)
    }

    // Handler for languageChange event
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>
      const newLang = customEvent.detail
      if (newLang === "ID" || newLang === "EN") {
        setLanguage(newLang)
      }
    }

    window.addEventListener("languageChange", handleLanguageChange)

    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange)
      clearTimeout(timer)
    }
  }, [])

  const t = translations[language]

  // Open chatbot function
  const openChatbot = () => {
    if (typeof window !== "undefined" && typeof (window as any).openSupernesiaChatbot === "function") {
      ;(window as any).openSupernesiaChatbot()
    }
  }

  const benefitIcons = [Shield, Clock, Zap]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  }

  const benefitVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
      },
    },
  }

  return (
    <section className="py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </motion.div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#e9e15b]/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-[#e9e15b]/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <motion.div
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-500"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Animated Top Border */}
            <motion.div
              className="h-2 bg-gradient-to-r from-[#e9e15b] via-yellow-400 to-[#e9e15b]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <motion.div className="p-8 lg:p-12 xl:p-16" variants={itemVariants}>
                {/* Header Badge */}
                <motion.div
                  className="inline-flex items-center bg-[#e9e15b]/10 dark:bg-[#e9e15b]/20 text-[#2b2b2b] dark:text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#e9e15b]/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                  </motion.div>
                  {t.title}
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                  className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 text-[#2b2b2b] dark:text-white"
                  variants={itemVariants}
                >
                  {t.subtitle}
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-lg"
                  variants={itemVariants}
                >
                  {t.description}
                </motion.p>

                {/* Benefits List */}
                <motion.div className="space-y-4 mb-8" variants={itemVariants}>
                  {t.benefits.map((benefit, index) => {
                    const Icon = benefitIcons[index]
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 group cursor-pointer"
                        variants={benefitVariants}
                        whileHover={{ x: 10, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-10 h-10 bg-[#e9e15b]/20 dark:bg-[#e9e15b]/30 rounded-lg flex items-center justify-center group-hover:bg-[#e9e15b]/40 transition-colors duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-5 h-5 text-[#2b2b2b] dark:text-white" />
                        </motion.div>
                        <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-[#2b2b2b] dark:group-hover:text-white transition-colors duration-300">
                          {benefit}
                        </span>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  onClick={openChatbot}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative inline-flex items-center bg-gradient-to-r from-[#e9e15b] to-yellow-400 text-[#2b2b2b] font-bold px-8 py-4 rounded-xl hover:from-yellow-400 hover:to-[#e9e15b] shadow-lg hover:shadow-xl overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(233, 225, 91, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  {/* Button Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#e9e15b] opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="relative z-10 flex items-center"
                    animate={isHovered ? { x: [0, 5, 0] } : {}}
                    transition={{ duration: 0.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                  >
                    <MessageCircle
                      className={`w-5 h-5 mr-3 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
                    />
                    <span className="mr-3">{t.chatNow}</span>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                    />
                  </motion.div>

                  {/* Button Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e9e15b] to-yellow-400 opacity-0 group-hover:opacity-20 blur-xl"
                    animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 1, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                  />
                </motion.button>

                {/* Trust Indicator */}
                <motion.p
                  className="text-sm text-gray-500 dark:text-gray-400 mt-4 flex items-center"
                  variants={itemVariants}
                >
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  {t.trustText}
                </motion.p>
              </motion.div>

              {/* Image Side */}
              <motion.div
                className="relative p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center"
                variants={itemVariants}
              >
                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-8 right-8 w-20 h-20 bg-[#e9e15b]/10 rounded-full"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-16 h-16 bg-[#e9e15b]/20 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#e9e15b] rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#e9e15b]/60 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />

                {/* Main Image */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#e9e15b]/20 rounded-2xl"
                    animate={{ rotate: [3, 6, 3] }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
                    whileHover={{ y: -5 }}
                  >
                    <Image
                      src="/contact.png"
                      alt="WhatsApp Consultation"
                      width={500}
                      height={500}
                      className="w-full max-w-md transition-transform duration-500"
                    />
                  </motion.div>
                </motion.div>

                {/* Floating Action Indicators */}
                <motion.div
                  className="absolute top-1/4 right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <MessageCircle className="w-6 h-6 text-[#e9e15b]" />
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Stats Bar with Animated Counters */}
            <motion.div
              className="bg-[#2b2b2b] dark:bg-gray-900 text-white px-8 py-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={statsVariants}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <motion.div
                  className="flex items-center space-x-2"
                  variants={statItemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span className="text-sm font-medium flex items-center">
                    <AnimatedCounter value={15} duration={2} delay={0.5} suffix={`+ ${t.teamCount}`} />
                    <span className="ml-2">- {t.onlineText.split(" - ")[1]}</span>
                  </span>
                </motion.div>

                <div className="flex items-center space-x-6 text-sm">
                  <motion.div
                    className="flex items-center space-x-2"
                    variants={statItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Clock className="w-4 h-4 text-[#e9e15b]" />
                    <span className="flex items-center">
                      {t.responseTime}{" "}
                      <AnimatedCounter
                        value={5}
                        duration={1.5}
                        delay={0.7}
                        prefix=" "
                        suffix={` ${t.responseMinutes}`}
                      />
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-2"
                    variants={statItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Shield className="w-4 h-4 text-[#e9e15b]" />
                    <span className="flex items-center">
                      <AnimatedCounter value={150} duration={2.5} delay={0.9} suffix={`+ ${t.successProjects}`} />
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-2"
                    variants={statItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star className="w-4 h-4 text-[#e9e15b]" />
                    <span className="flex items-center">
                      <AnimatedCounter value={4.9} duration={2} delay={1.1} decimal={1} suffix={`/5 ${t.rating}`} />
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e9e15b 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  )
}
