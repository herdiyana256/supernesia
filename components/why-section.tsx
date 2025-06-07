"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Headphones,
  Zap,
  Palette,
  DollarSign,
  Sparkles,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Users,
  ChevronDown,
} from "lucide-react"

export default function WhySection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [clickedCards, setClickedCards] = useState(new Set<number>())
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index)
    setClickedCards((prev) => new Set([...prev, index]))
  }

  const features = [
    {
      icon: Headphones,
      title: "Support After Sales Premium",
      subtitle: "24/7 Enterprise Support",
      text: "Proyek selesai bukan berarti hubungan berakhir. Tim expert kami siap memberikan support teknis berkelanjutan, maintenance sistem, dan pengembangan fitur lanjutan untuk memastikan solusi IT Anda selalu optimal.",
      details:
        "Dedicated support team dengan response time <2 jam, maintenance rutin, security updates, performance monitoring, backup otomatis, disaster recovery, dan konsultasi teknis unlimited. Termasuk remote assistance dan on-site support untuk kasus critical.",
      stats: "99.9% Uptime",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Solusi IT Terintegrasi",
      subtitle: "Enterprise-Grade Technology",
      text: "Dari web development hingga sistem enterprise kompleks, kami menyediakan solusi IT end-to-end yang scalable. Mulai dari CRM, ERP, e-commerce, mobile apps, hingga business intelligence dan automation systems.",
      details:
        "Full-stack development dengan teknologi terdepan: React/Next.js, Node.js, Python, cloud infrastructure (AWS/Azure), microservices architecture, API integration, database optimization, dan AI/ML implementation. Semua disesuaikan dengan kebutuhan bisnis spesifik Anda.",
      stats: "100+ Tech Stack",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Palette,
      title: "Custom Development Unlimited",
      subtitle: "Tailored IT Solutions",
      text: "Setiap bisnis unik, begitu juga solusi IT-nya. Kami mengembangkan sistem custom dari nol sesuai workflow dan kebutuhan spesifik perusahaan Anda, tanpa batasan kompleksitas atau skala project.",
      details:
        "Custom software development, enterprise system integration, legacy system modernization, cloud migration, DevOps implementation, security audit, dan digital transformation consulting. Unlimited revisi hingga sistem benar-benar sesuai ekspektasi.",
      stats: "Unlimited Scope",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Investment-Grade Value",
      subtitle: "ROI-Focused Solutions",
      text: "Investasi IT yang tepat menghasilkan ROI berlipat. Kami menyediakan solusi cost-effective dengan kualitas enterprise, dari startup hingga korporasi besar, dengan model pricing yang fleksibel sesuai budget dan kebutuhan.",
      details:
        "Flexible pricing models: project-based, retainer, atau equity partnership. Termasuk cost analysis, ROI projection, dan business impact assessment. Paket maintenance mulai dari basic hingga enterprise dengan SLA guarantee.",
      stats: "300% Avg ROI",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Innovation & Future-Ready",
      subtitle: "Cutting-Edge Technology",
      text: "Teknologi berkembang pesat, begitu juga solusi kami. Dari AI/ML integration, blockchain, IoT, hingga emerging technologies lainnya. Kami memastikan sistem Anda selalu ahead of the curve dan future-proof.",
      details:
        "AI-powered features, machine learning algorithms, blockchain integration, IoT connectivity, progressive web apps, cloud-native architecture, dan emerging tech adoption. Termasuk technology roadmap planning dan digital innovation consulting.",
      stats: "Next-Gen Tech",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Rocket,
      title: "Agile Development Process",
      subtitle: "Fast & Efficient Delivery",
      text: "Metodologi agile dengan sprint planning yang terstruktur memastikan delivery tepat waktu tanpa mengorbankan kualitas. Real-time progress tracking dan regular stakeholder communication untuk transparansi penuh.",
      details:
        "Agile/Scrum methodology, CI/CD pipeline, automated testing, code review process, project management tools, real-time collaboration, dan regular sprint demos. Termasuk project manager dedicated dan technical lead berpengalaman.",
      stats: "2x Faster",
      color: "from-red-500 to-pink-500",
    },
  ]

  // Simplified animation variants for better mobile performance
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

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 md:mx-12 lg:mx-20 my-8 sm:my-12 md:my-16 relative overflow-hidden"
      style={{ backgroundColor: "#e9e15b", minHeight: "auto" }}
    >
      {/* Simplified Background Elements for Mobile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gray-800 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10"
      >
        {/* Header Section - Mobile Optimized */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={headerVariants}>
          <motion.div
            className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#2b2b2b] mr-2" />
            <span className="text-[#2b2b2b] font-semibold text-sm sm:text-base">WHY CHOOSE US</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#2b2b2b] ml-2" />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#2b2b2b] leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            KENAPA{" "}
            <span className="text-white relative inline-block">
              SUPERNESIA
              <motion.div
                className="absolute -inset-1 sm:-inset-2 bg-[#2b2b2b] rounded-lg -z-10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
            <br />
            ADALAH{" "}
            <span className="bg-gradient-to-r from-[#2b2b2b] to-gray-800 bg-clip-text text-transparent">SOLUSI?</span>
          </motion.h1>

          <motion.p
            className="text-gray-700 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Sebagai konsultan IT terpercaya, kami menghadirkan solusi teknologi enterprise yang scalable dan
            future-ready untuk transformasi digital bisnis Anda.
          </motion.p>

          {/* Stats Bar - Mobile Responsive */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              { icon: Users, label: "150+ Enterprise Clients", value: "150+" },
              { icon: Shield, label: "99.9% System Uptime", value: "99.9%" },
              { icon: Clock, label: "24/7 Expert Support", value: "24/7" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2b2b2b]" />
                <span className="text-[#2b2b2b] font-semibold text-xs sm:text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards Grid - Mobile First */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
        >
          {features.map((item, index) => {
            const IconComponent = item.icon
            const isActive = activeCard === index

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`
                  relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer group
                  ${
                    isActive
                      ? "bg-white shadow-2xl ring-2 sm:ring-4 ring-white/50"
                      : "bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl"
                  }
                  transition-all duration-300
                `}
                onClick={() => handleCardClick(index)}
                layout
              >
                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r ${item.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="p-4 sm:p-6 md:p-8 relative z-10">
                  {/* Icon and Stats */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <motion.div
                      className={`relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${item.color} shadow-lg`}
                      variants={iconVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>

                    <motion.div
                      className={`px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs sm:text-sm font-bold shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.stats}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="mb-4 sm:mb-6">
                    <motion.h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2b2b2b] mb-2" layout>
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.subtitle}
                    </motion.p>
                    <motion.p className="text-sm sm:text-base text-gray-600 leading-relaxed" layout>
                      {item.text}
                    </motion.p>
                  </div>

                  {/* Expand Button */}
                  <motion.div
                    className="flex items-center justify-between"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-[#2b2b2b]" : "text-gray-500"
                      }`}
                      layout
                    >
                      {isActive ? "Tutup Detail" : "Lihat Detail"}
                    </motion.span>

                    <motion.div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive ? "bg-[#2b2b2b] text-white" : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Expanded Content */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-4 sm:mt-6 overflow-hidden"
                        layout
                      >
                        <motion.div
                          className={`p-4 sm:p-6 rounded-lg sm:rounded-xl bg-gradient-to-r ${item.color} bg-opacity-5 border border-opacity-20`}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          <div className="flex items-center mb-3">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
                            <h4 className="font-bold text-[#2b2b2b] text-sm sm:text-base">Technical Specifications:</h4>
                          </div>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4">{item.details}</p>
                          <Link href="/kontak">
                            <motion.button
                              className={`w-full py-2 sm:py-3 rounded-lg sm:rounded-xl text-white font-semibold bg-gradient-to-r ${item.color} shadow-lg text-sm sm:text-base`}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              transition={{ duration: 0.2 }}
                            >
                              Konsultasi Expert
                            </motion.button>
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Click Indicator */}
                <AnimatePresence>
                  {clickedCards.has(index) && (
                    <motion.div
                      className="absolute top-3 sm:top-4 right-3 sm:right-4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                    >
                      <motion.div
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${item.color}`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action - Mobile Optimized */}
        <motion.div
          className="text-center mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2b2b2b] mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Ready for Digital Transformation?
            </motion.h3>

            <motion.p
              className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Konsultasi dengan tim expert kami untuk merancang solusi IT enterprise yang tepat untuk akselerasi bisnis
              Anda
            </motion.p>

            <Link href="/kontak">
              <motion.button
                className="bg-gradient-to-r from-[#2b2b2b] to-gray-800 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-xl relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Konsultasi Expert Sekarang
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
