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
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -15,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.5,
      },
    },
  }

  // Consistent expand button variants
  const expandButtonVariants = {
    rest: {
      scale: 1,
      backgroundColor: "rgba(243, 244, 246, 1)", // bg-gray-100
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(229, 231, 235, 1)", // bg-gray-200
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    active: {
      scale: 1,
      backgroundColor: "rgba(43, 43, 43, 1)", // bg-[#2b2b2b]
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const chevronVariants = {
    rest: { rotate: 0 },
    active: { rotate: 180 },
  }

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-12 lg:px-20 rounded-3xl mx-4 md:mx-12 lg:mx-20 my-16 relative overflow-hidden"
      style={{ backgroundColor: "#e9e15b" }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #2b2b2b 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #2b2b2b 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, #2b2b2b 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.div
            className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Star className="w-5 h-5 text-[#2b2b2b] mr-2" />
            <span className="text-[#2b2b2b] font-semibold">WHY CHOOSE US</span>
            <Star className="w-5 h-5 text-[#2b2b2b] ml-2" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-[#2b2b2b] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            KENAPA{" "}
            <motion.span
              className="text-white relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              SUPERNESIA
              <motion.div
                className="absolute -inset-2 bg-[#2b2b2b] rounded-lg -z-10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </motion.span>
            <br />
            ADALAH{" "}
            <motion.span
              className="bg-gradient-to-r from-[#2b2b2b] to-gray-800 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              SOLUSI?
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-700 mt-6 text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Sebagai konsultan IT terpercaya, kami menghadirkan solusi teknologi enterprise yang scalable dan
            future-ready untuk transformasi digital bisnis Anda.
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              className="inline-block ml-2"
            >
              👇
            </motion.span>
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            className="flex justify-center items-center space-x-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { icon: Users, label: "150+ Enterprise Clients", value: "150+" },
              { icon: Shield, label: "99.9% System Uptime", value: "99.9%" },
              { icon: Clock, label: "24/7 Expert Support", value: "24/7" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <stat.icon className="w-5 h-5 text-[#2b2b2b]" />
                <span className="text-[#2b2b2b] font-semibold text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          {features.map((item, index) => {
            const IconComponent = item.icon
            const isActive = activeCard === index

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer group
                  ${
                    isActive
                      ? "bg-white shadow-2xl ring-4 ring-white/50"
                      : "bg-white/95 backdrop-blur-sm shadow-xl hover:shadow-2xl"
                  }
                `}
                onClick={() => handleCardClick(index)}
                style={{
                  transformStyle: "preserve-3d",
                }}
                layout
              >
                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5`}
                  transition={{ duration: 0.3 }}
                />

                <div className="p-8 relative z-10">
                  {/* Icon and Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`relative p-4 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg`}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <IconComponent className="w-8 h-8 text-white" />

                      {/* Icon Glow */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} blur-xl opacity-0 group-hover:opacity-30`}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    <motion.div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold shadow-lg`}
                      variants={statsVariants}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.stats}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <motion.h3 className="text-2xl font-bold text-[#2b2b2b] mb-2" layout>
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm font-medium text-gray-500 mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.subtitle}
                    </motion.p>
                    <motion.p className="text-gray-600 leading-relaxed" layout>
                      {item.text}
                    </motion.p>
                  </div>

                  {/* Consistent Expand Button */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial="rest"
                    whileHover="hover"
                    animate={isActive ? "active" : "rest"}
                  >
                    <motion.span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-[#2b2b2b]" : "text-gray-500"
                      }`}
                      layout
                    >
                      {isActive ? "Tutup Detail" : "Lihat Detail"}
                    </motion.span>

                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                      variants={expandButtonVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        variants={chevronVariants}
                        animate={isActive ? "active" : "rest"}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Expanded Content */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2, delay: 0.1 },
                        }}
                        className="mt-6 overflow-hidden"
                        layout
                      >
                        <motion.div
                          className={`p-6 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-5 border border-opacity-20`}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          <div className="flex items-center mb-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            <h4 className="font-bold text-[#2b2b2b]">Technical Specifications:</h4>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.details}</p>
                          <Link href="/kontak">
                            <motion.button
                              className={`w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${item.color} shadow-lg`}
                              whileHover={{
                                scale: 1.02,
                                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                              }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
                      className="absolute top-4 right-4"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                    >
                      <motion.div
                        className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}
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

                {/* Hover Particles */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${item.color}`}
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${20 + i * 20}%`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            y: [-10, -30, -50],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#2b2b2b]/5 to-transparent"
              animate={{
                x: [-100, 100, -100],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.h3
              className="text-4xl font-black text-[#2b2b2b] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Ready for Digital Transformation?
            </motion.h3>

            <motion.p
              className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Konsultasi dengan tim expert kami untuk merancang solusi IT enterprise yang tepat untuk akselerasi bisnis
              Anda
            </motion.p>

            <Link href="/kontak">
              <motion.button
                className="bg-gradient-to-r from-[#2b2b2b] to-gray-800 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(43,43,43,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                {/* Button Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                <span className="relative z-10 flex items-center">
                  Konsultasi Expert Sekarang
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
