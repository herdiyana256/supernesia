"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { Star, Quote, ChevronRight, Building2, Users, Award, Sparkles } from "lucide-react"

// Translations
const translations = {
  ID: {
    testimonials: "TESTIMONI",
    whatTheySay: "INTIP APA KATA MEREKA",
    description:
      "Kami telah bermitra dengan berbagai perusahaan enterprise di berbagai industri untuk mendorong transformasi digital dan akselerasi pertumbuhan bisnis mereka.",
    viewAll: "Lihat Semua Testimoni",
    clientSince: "Klien sejak",
    projectCompleted: "Proyek selesai",
  },
  EN: {
    testimonials: "TESTIMONIALS",
    whatTheySay: "SEE WHAT THEY SAY",
    description:
      "We have partnered with various enterprise companies across industries to drive digital transformation and accelerate their business growth.",
    viewAll: "View All Testimonials",
    clientSince: "Client since",
    projectCompleted: "Projects completed",
  },
}

// Enhanced testimonials data
const testimonials = [
  {
    id: 1,
    name: "Andi Saputra",
    position: "CEO & Founder",
    company: "PT Solusi Digital Indonesia",
    industry: "Technology Consulting",
    avatar: "/andi.png",
    rating: 5,
    date: "April 20, 2025",
    clientSince: "2023",
    projectsCompleted: 3,
    testimonial:
      "Supernesia telah mentransformasi infrastruktur IT kami secara menyeluruh. Dari legacy system modernization hingga implementasi cloud architecture, mereka berhasil meningkatkan efisiensi operasional kami hingga 300%.",
    projectType: "Enterprise System Integration",
    results: ["300% efficiency increase", "Zero downtime migration", "50% cost reduction"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Budi Santoso",
    position: "Chief Technology Officer",
    company: "PT Global Makmur Utama",
    industry: "Manufacturing & Logistics",
    avatar: "/budi.png",
    rating: 5,
    date: "April 15, 2025",
    clientSince: "2022",
    projectsCompleted: 5,
    testimonial:
      "Implementasi ERP dan supply chain management system dari Supernesia benar-benar game changer untuk operasional kami. Real-time inventory tracking dan business intelligence dashboard memberikan visibility penuh.",
    projectType: "ERP & Supply Chain System",
    results: ["Real-time inventory tracking", "40% faster procurement", "Complete operational visibility"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Citra Dewi",
    position: "Head of Digital Innovation",
    company: "Innovate Supply Solutions",
    industry: "Supply Chain & Logistics",
    avatar: "/dewi.png",
    rating: 5,
    date: "April 10, 2025",
    clientSince: "2023",
    projectsCompleted: 2,
    testimonial:
      "Proyek digital transformation dengan Supernesia sangat impressive. Mereka tidak hanya membangun aplikasi mobile dan web platform, tapi juga mengintegrasikan AI untuk predictive analytics dan automation.",
    projectType: "Digital Transformation & AI Integration",
    results: ["AI-powered analytics", "Mobile-first platform", "Seamless integration"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "Fahri Alamsyah",
    position: "Chief Technology Officer",
    company: "TechnoWorks Indonesia",
    industry: "Software Development",
    avatar: "/fahri.png",
    rating: 5,
    date: "April 5, 2025",
    clientSince: "2024",
    projectsCompleted: 1,
    testimonial:
      "Sebagai fellow tech company, kami sangat appreciate kualitas code dan architecture yang didelivery Supernesia. Microservices architecture, CI/CD pipeline, dan cloud-native approach yang mereka implement sangat solid.",
    projectType: "Cloud-Native Architecture & DevOps",
    results: ["Microservices architecture", "Automated CI/CD", "Scalable infrastructure"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 5,
    name: "Rina Kurniawati",
    position: "VP of Operations",
    company: "NextGen Digital Solutions",
    industry: "Digital Marketing",
    avatar: "/rina.png",
    rating: 5,
    date: "April 1, 2025",
    clientSince: "2023",
    projectsCompleted: 4,
    testimonial:
      "Partnership dengan Supernesia sangat strategic untuk growth kami. Mereka membangun comprehensive CRM system, marketing automation platform, dan analytics dashboard yang integrate dengan semua tools kami.",
    projectType: "CRM & Marketing Automation",
    results: ["Comprehensive CRM", "Marketing automation", "Data-driven insights"],
    color: "from-red-500 to-pink-500",
  },
  {
    id: 6,
    name: "Rina Kurniawati",
    position: "VP of Operations",
    company: "NextGen Digital Solutions",
    industry: "Digital Marketing",
    avatar: "/rina.png",
    rating: 5,
    date: "April 1, 2025",
    clientSince: "2023",
    projectsCompleted: 4,
    testimonial:
      "Partnership dengan Supernesia sangat strategic untuk growth kami. Mereka membangun comprehensive CRM system, marketing automation platform, dan analytics dashboard yang integrate dengan semua tools kami.",
    projectType: "CRM & Marketing Automation",
    results: ["Comprehensive CRM", "Marketing automation", "Data-driven insights"],
    color: "from-red-500 to-pink-500",
  },
]

export default function TestimonialSection() {
  const [language, setLanguage] = useState("ID")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const carouselRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const rotateY = useTransform(x, [-300, 300], [30, -30])

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

  // Auto-rotate functionality
  useEffect(() => {
    if (isDragging) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isDragging])

  // Get current translations
  const t = translations[language as keyof typeof translations]

  // Get current testimonial
  const currentTestimonial = testimonials[currentIndex]

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: -90,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, #e9e15b 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #e9e15b 0%, transparent 50%)",
            "radial-gradient(circle at 40% 60%, #e9e15b 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#e9e15b]/30 rounded-full"
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
        <motion.div className="mb-16 text-center" variants={headerVariants}>
          <motion.div
            className="inline-flex items-center bg-[#e9e15b]/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Sparkles className="w-5 h-5 text-[#2b2b2b] mr-2" />
            <span className="text-[#2b2b2b] font-semibold">{t.testimonials}</span>
            <Sparkles className="w-5 h-5 text-[#2b2b2b] ml-2" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-black leading-tight text-[#2b2b2b] dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.whatTheySay}
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t.description}
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { icon: Building2, label: "Enterprise Clients", value: "150+" },
              { icon: Users, label: "Projects Delivered", value: "500+" },
              { icon: Award, label: "Client Satisfaction", value: "99%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <stat.icon className="w-5 h-5 text-[#e9e15b]" />
                <div className="text-center">
                  <div className="text-lg font-bold text-[#2b2b2b] dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive 3D Testimonial Carousel */}
        <div className="max-w-4xl mx-auto perspective">
          <motion.div
            ref={carouselRef}
            className="relative h-[500px] md:h-[400px] w-full"
            style={{ rotateY, transformStyle: "preserve-3d" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
              setIsDragging(false)
              if (info.offset.x > 100) {
                setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              } else if (info.offset.x < -100) {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
              }
            }}
            onDrag={(_, info) => {
              x.set(info.offset.x)
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="w-full max-w-3xl">
                  <motion.div
                    className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Gradient Border */}
                    <motion.div
                      className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${currentTestimonial.color}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />

                    {/* Quote Icon */}
                    <motion.div
                      className="absolute top-6 right-6 text-[#e9e15b]/20"
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Quote className="w-12 h-12" />
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-start gap-6">
                      {/* Avatar and Info */}
                      <motion.div
                        className="flex flex-col items-center md:items-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="relative mb-4">
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentTestimonial.color} blur-md opacity-50`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />
                          <Image
                            src={currentTestimonial.avatar || "/placeholder.svg"}
                            alt={currentTestimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full border-4 border-white dark:border-gray-800 relative z-10"
                          />
                          <motion.div
                            className="absolute -bottom-2 -right-2 bg-[#e9e15b] rounded-full p-1 z-20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            <Award className="w-4 h-4 text-[#2b2b2b]" />
                          </motion.div>
                        </div>

                        <h3 className="text-xl font-bold text-[#2b2b2b] dark:text-white text-center md:text-left">
                          {currentTestimonial.name}
                        </h3>
                        <p className="text-sm font-medium text-[#e9e15b]">{currentTestimonial.position}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{currentTestimonial.company}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {currentTestimonial.projectType}
                        </p>

                        <div className="flex items-center space-x-1 mt-2">
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7 + i * 0.1 }}
                            >
                              <Star className="w-4 h-4 fill-[#e9e15b] text-[#e9e15b]" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Testimonial Text */}
                        <motion.div
                          className="relative"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <motion.div
                            className="absolute -left-4 -top-4 text-[#e9e15b]/10 dark:text-[#e9e15b]/5"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: -10 }}
                            transition={{ delay: 0.3, type: "spring" }}
                          >
                            <Quote className="w-8 h-8" />
                          </motion.div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6 italic">
                            "{currentTestimonial.testimonial}"
                          </p>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                          className="flex flex-wrap gap-2 mb-6"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          {currentTestimonial.results.map((result, idx) => (
                            <motion.span
                              key={idx}
                              className={`bg-gradient-to-r ${currentTestimonial.color} bg-opacity-10 text-[#2b2b2b] dark:text-white px-3 py-1 rounded-full text-xs font-medium`}
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              ✓ {result}
                            </motion.span>
                          ))}
                        </motion.div>

                        {/* Footer */}
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-4">
                            <span>
                              {t.clientSince} {currentTestimonial.clientSince}
                            </span>
                            <span>
                              {currentTestimonial.projectsCompleted} {t.projectCompleted}
                            </span>
                          </div>
                          <span>{currentTestimonial.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Interactive Navigation */}
          <div className="mt-8 flex justify-center items-center">
            <div className="flex space-x-4">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-10 h-10 rounded-full flex items-center justify-center ${
                    index === currentIndex
                      ? "bg-[#e9e15b] text-[#2b2b2b]"
                      : "bg-white/80 dark:bg-gray-800/80 text-gray-400"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-[#e9e15b] rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-bold">{index + 1}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Drag Instructions */}
          <motion.div
            className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="inline-block">← Swipe or drag to navigate →</span>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#e9e15b] to-yellow-400 hover:from-yellow-400 hover:to-[#e9e15b] text-[#2b2b2b] font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(233, 225, 91, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />

            <span className="relative z-10 flex items-center">
              {t.viewAll}
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
