"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Smartphone, Globe, Code, CheckCircle } from "lucide-react"

// Improved service data with consistent content
const services = [
  {
    id: "mobile",
    title: "Mobile & Desktop App",
    shortDesc: "Aplikasi mobile & desktop yang powerful dengan teknologi terdepan untuk semua platform dan perangkat.",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    link: "/layanan/mobile-app",
    features: [
      "Native & Cross-platform Development",
      "UI/UX Design yang Intuitif & Modern",
      "Integrasi API & Backend Services",
    ],
  },
  {
    id: "web",
    title: "Web Development",
    shortDesc:
      "Website modern dan responsif dengan teknologi terdepan untuk kehadiran online yang kuat dan profesional.",
    icon: Globe,
    color: "from-[#e9e15b] to-yellow-400",
    link: "/layanan/web-development",
    features: [
      "Desain Responsif & Mobile-First",
      "SEO Optimization & Performance",
      "CMS Integration & Content Strategy",
    ],
  },
  {
    id: "custom",
    title: "Custom Software Development",
    shortDesc: "Solusi perangkat lunak kustom yang disesuaikan dengan kebutuhan bisnis spesifik dan kompleks Anda.",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    link: "/layanan/custom-software",
    features: [
      "Analisis Kebutuhan & Perencanaan",
      "Arsitektur Software yang Scalable",
      "Integrasi dengan Sistem yang Ada",
    ],
  },
]

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Simplified animation variants
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#e9e15b]/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2b2b2b]/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="mb-12 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={textVariants}
            className="inline-flex items-center gap-2 bg-[#e9e15b]/20 px-4 py-2 rounded-full mb-4"
          >
            <Code className="w-4 h-4 text-[#2b2b2b]" />
            <span className="text-[#2b2b2b] font-semibold text-sm">PILIH LAYANANNYA</span>
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-[#2b2b2b] dark:text-white"
          >
            BANGUN MASA DEPAN DIGITAL
            <br />
            <span className="bg-gradient-to-r from-[#2b2b2b] to-[#e9e15b] bg-clip-text text-transparent">
              BERSAMA SUPERNESIA!
            </span>
          </motion.h2>

          <motion.p variants={textVariants} className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl text-lg">
            Kami menawarkan pendekatan unik untuk transformasi digital yang berfokus pada hasil bisnis nyata dan solusi
            yang disesuaikan dengan kebutuhan spesifik Anda.
          </motion.p>
        </motion.div>

        {/* Services Grid - Fixed Height and Alignment */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          {services.map((service) => {
            const IconComponent = service.icon

            return (
              <Link key={service.id} href={service.link} className="h-full">
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 },
                  }}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:border-[#e9e15b]/50 transition-all duration-300 ease-in-out relative group overflow-hidden cursor-pointer h-full flex flex-col"
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e9e15b]/5 via-transparent to-[#2b2b2b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Service Icon - Fixed Height */}
                  <div className="flex items-center gap-4 mb-6 relative z-10 min-h-[60px]">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg group-hover:shadow-xl flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#2b2b2b] dark:text-white group-hover:text-[#e9e15b] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Divider with gradient */}
                  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-6 group-hover:via-[#e9e15b]/50 transition-colors duration-300"></div>

                  {/* Description - Fixed Height */}
                  <div className="mb-6 relative z-10 flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 text-base group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 leading-relaxed min-h-[72px]">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Features Preview - Fixed Height */}
                  <div className="mb-8 relative z-10 flex-grow">
                    <h4 className="text-sm font-semibold text-[#2b2b2b] dark:text-gray-300 mb-4 group-hover:text-[#e9e15b] transition-colors duration-300">
                      Key Features:
                    </h4>
                    <ul className="space-y-3 min-h-[120px]">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5 group-hover:text-green-400 transition-colors duration-300" />
                          <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action - Always at bottom */}
                  <div className="flex justify-between items-center relative z-10 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 group-hover:border-[#e9e15b]/30 transition-colors duration-300">
                    <span className="text-[#2b2b2b] dark:text-white font-semibold text-sm group-hover:text-[#e9e15b] transition-colors duration-300">
                      Lihat Detail
                    </span>

                    <motion.div
                      className="p-2.5 rounded-full bg-[#e9e15b] group-hover:bg-[#2b2b2b] transition-colors duration-300 shadow-lg group-hover:shadow-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#2b2b2b] group-hover:text-[#e9e15b] transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#e9e15b]/30 transition-colors duration-300"></div>
                </motion.div>
              </Link>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
