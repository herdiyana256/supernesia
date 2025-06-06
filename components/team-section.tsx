"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Linkedin, Star, Award, Users, TrendingUp } from "lucide-react"

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [language, setLanguage] = useState<"ID" | "EN">("ID")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Listen to language changes from navbar
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

  // Translation object
  const translations = {
    ID: {
      leadership: "Tim Kepemimpinan",
      description:
        "Temui para profesional berpengalaman yang memimpin visi dan operasi strategis Supernesia dengan dedikasi tinggi dan inovasi berkelanjutan.",
      awards: "Penghargaan",
      teamMembers: "Anggota Tim",
      growth: "Pertumbuhan",
      rating: "Rating Klien",
      ceoDesc: "Chief Executive Officer yang bertanggung jawab atas visi dan strategi perusahaan.",
      cioDesc: "Chief Information Officer yang mengelola inovasi teknologi dan pengembangan sistem.",
      cpoDesc: "Chief Product Officer yang mengelola pengembangan produk dan strategi inovasi.",
      experience: "Pengalaman 5+ Tahun",
      vision: "Visi Strategis",
      excellence: "Keunggulan Kepemimpinan",
      innovation: "Inovasi Teknologi",
      architecture: "Arsitektur Sistem",
      transformation: "Transformasi Digital",
      product: "Keunggulan Produk",
      strategy: "Strategi Produk",
      development: "Pengembangan Produk",
      projects: "Proyek",
      teams: "Tim",
      systems: "Sistem",
      innovations: "Inovasi",
      efficiency: "Efisiensi",
      products: "Produk",
      strategies: "Strategi",
      launches: "Peluncuran",
    },
    EN: {
      leadership: "Leadership Team",
      description:
        "Meet the experienced professionals who lead Supernesia's vision and strategic operations with high dedication and continuous innovation.",
      awards: "Awards Won",
      teamMembers: "Team Members",
      growth: "Growth Rate",
      rating: "Client Rating",
      ceoDesc: "Chief Executive Officer responsible for company vision and strategy.",
      cioDesc: "Chief Information Officer managing technology innovation and system development.",
      cpoDesc: "Chief Product Officer managing product development and innovation strategy.",
      experience: "10+ Years Experience",
      vision: "Strategic Vision",
      excellence: "Leadership Excellence",
      innovation: "Tech Innovation",
      architecture: "System Architecture",
      transformation: "Digital Transformation",
      product: "Product Excellence",
      strategy: "Product Strategy",
      development: "Product Development",
      projects: "Projects",
      teams: "Teams",
      systems: "Systems",
      innovations: "Innovations",
      efficiency: "Efficiency",
      products: "Products",
      strategies: "Strategies",
      launches: "Launches",
    },
  }

  const t = (key: string) => translations[language][key as keyof typeof translations.ID] || key

  const teamMembers = [
    {
      name: "Alex Sitanggang",
      role: "CEO",
      descriptionKey: "ceoDesc",
      image: "/alex-sitanggang.png",
      linkedin: "https://www.linkedin.com/in/alexander-h-sitanggang-654693153/",
      achievements: ["experience", "vision", "excellence"],
      stats: { projects: "50+", teams: "15+", growth: "200%" },
    },
    {
      name: "Herdiyan Adam Putra",
      role: "CIO",
      descriptionKey: "cioDesc",
      image: "/herdiyan-adam-putra.png",
      linkedin: "https://www.linkedin.com/in/herdiyan-adam-putra",
      achievements: ["innovation", "architecture", "transformation"],
      stats: { systems: "25+", innovations: "40+", efficiency: "150%" },
    },
    {
      name: "Rivan Rizky Chaeroni",
      role: "CPO",
      descriptionKey: "cpoDesc",
      image: "/rivan-rizky-chaeroni.png",
      linkedin: "https://www.linkedin.com/in/rivanrizkyc/",
      achievements: ["product", "strategy", "development"],
      stats: { products: "30+", strategies: "20+", launches: "180%" },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
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
        damping: 15,
        duration: 0.6,
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

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-[#e9e15b]/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-40 right-20 w-32 h-32 bg-[#2b2b2b]/5 dark:bg-[#e9e15b]/5 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#e9e15b]/15 rounded-full blur-xl"
        />
      </div>

      <section ref={sectionRef} className="relative py-20 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-[#e9e15b]/20 px-4 py-2 rounded-full mb-6"
            >
              <Users className="w-5 h-5 text-[#2b2b2b]" />
              <span className="text-[#2b2b2b] font-semibold">Leadership Team</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[#2b2b2b] dark:text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t("leadership")
                .split(" ")
                .map((word, index) => (
                  <span key={index} className={index === 1 ? "relative" : ""}>
                    {word}
                    {index === 1 && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-3 bg-[#e9e15b]/30 -skew-x-12"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      />
                    )}
                    {index < t("leadership").split(" ").length - 1 && " "}
                  </span>
                ))}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {t("description")}
            </motion.p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Award, label: t("awards"), value: "25+", color: "text-yellow-500" },
              { icon: Users, label: t("teamMembers"), value: "100+", color: "text-blue-500" },
              { icon: TrendingUp, label: t("growth"), value: "200%", color: "text-green-500" },
              { icon: Star, label: t("rating"), value: "4.9/5", color: "text-purple-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-[#2b2b2b] dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                {index !== 2 && (
                  <motion.div
                    className={`w-2 h-2 mx-auto mt-2 rounded-full ${stat.color.replace("text-", "bg-")}`}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Team Members Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e9e15b]/10 via-transparent to-[#2b2b2b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8">
                  {/* Profile Image */}
                  <motion.div
                    className="relative mb-6 mx-auto w-48 h-48"
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#e9e15b] to-[#2b2b2b] rounded-full p-1">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover object-top rounded-full transition-all duration-500"
                      />
                    </div>

                    {/* LinkedIn Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#e9e15b] text-[#2b2b2b] p-4 rounded-full hover:bg-white transition-colors duration-300 transform hover:scale-110"
                      >
                        <Linkedin className="h-6 w-6" />
                      </Link>
                    </motion.div>

                    {/* Floating Ring */}
                    <motion.div
                      className="absolute -inset-2 border-2 border-[#e9e15b]/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  </motion.div>

                  {/* Member Info */}
                  <div className="text-center">
                    <motion.h3
                      className="text-2xl font-bold mb-2 text-[#2b2b2b] dark:text-white"
                      layoutId={`name-${index}`}
                    >
                      {member.name}
                    </motion.h3>

                    <motion.div
                      className="inline-flex items-center gap-2 bg-[#e9e15b] text-[#2b2b2b] px-4 py-2 rounded-full font-semibold mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Award className="w-4 h-4" />
                      {member.role}
                    </motion.div>

                    <motion.p
                      className="text-sm leading-relaxed mb-6 text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {t(member.descriptionKey)}
                    </motion.p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-6">
                      {member.achievements.map((achievementKey, achIndex) => (
                        <motion.div
                          key={achIndex}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + achIndex * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-[#e9e15b] rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: achIndex * 0.5 }}
                          />
                          {t(achievementKey)}
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(member.stats).map(([key, value], statIndex) => (
                        <motion.div
                          key={key}
                          className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + statIndex * 0.1 }}
                        >
                          <div className="text-lg font-bold text-[#2b2b2b] dark:text-white">{value}</div>
                          <div className="text-xs capitalize text-gray-600 dark:text-gray-400">{t(key)}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#e9e15b]/20 to-[#2b2b2b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ filter: "blur(20px)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
