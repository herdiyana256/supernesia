"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Code, Database, Trello, Shield, ChevronRight, Sparkles } from "lucide-react"

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("programming")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const [language, setLanguage] = useState<"ID" | "EN">("ID")

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
      latestTech: "Teknologi Terkini",
      techStack: "Tech Stack Kami",
      description:
        "Kami memanfaatkan teknologi dan alat mutakhir untuk memberikan solusi digital yang luar biasa bagi klien kami.",
      programmingTools: "Alat Programming",
      databaseTools: "Alat Database",
      projectManagement: "Manajemen Proyek",
      securityTools: "Alat Keamanan",
    },
    EN: {
      latestTech: "Latest Technology",
      techStack: "Our Tech Stack",
      description:
        "We leverage cutting-edge technologies and tools to deliver exceptional digital solutions for our clients.",
      programmingTools: "Programming Tools",
      databaseTools: "Database Tools",
      projectManagement: "Project Management",
      securityTools: "Security Tools",
    },
  }

  const t = (key: string) => translations[language][key as keyof typeof translations.ID] || key

  const tabs = [
    { id: "programming", labelKey: "programmingTools", icon: Code },
    { id: "database", labelKey: "databaseTools", icon: Database },
    { id: "project", labelKey: "projectManagement", icon: Trello },
    { id: "security", labelKey: "securityTools", icon: Shield },
  ]

  const technologies = {
    programming: [
      { name: "JavaScript", icon: "/tech-icons/javascript.png" },
      { name: "TypeScript", icon: "/tech-icons/typescript.png" },
      { name: "PHP", icon: "/tech-icons/php.png" },
      { name: "Python", icon: "/tech-icons/python.png" },
      { name: "Java", icon: "/tech-icons/java.png" },
      { name: "Go", icon: "/tech-icons/go.png" },
      { name: "React.js", icon: "/tech-icons/reactjs.png" },
      { name: "Vue.js", icon: "/tech-icons/vuejs.png" },
      { name: "Angular", icon: "/tech-icons/angular.png" },
      { name: "Next.js", icon: "/tech-icons/nextjs.png" },
      { name: "Laravel", icon: "/tech-icons/laravel.png" },
      { name: "Node.js", icon: "/tech-icons/nodejs.png" },
      { name: "Express.js", icon: "/tech-icons/expressjs.png" },
      { name: "React Native", icon: "/tech-icons/react-native.png" },
      { name: "Flutter", icon: "/tech-icons/flutter.png" },
      { name: "Kotlin", icon: "/tech-icons/kotlin.png" },
      { name: "Swift", icon: "/tech-icons/swift.png" },
      { name: "HTML5", icon: "/tech-icons/html5.png" },
      { name: "CSS3", icon: "/tech-icons/css3.png" },
    ],
    database: [
      { name: "MySQL", icon: "/tech-icons/mysql.png" },
      { name: "PostgreSQL", icon: "/tech-icons/postgresql.png" },
      { name: "MongoDB", icon: "/tech-icons/mongodb.png" },
      { name: "Redis", icon: "/tech-icons/redis.png" },
      { name: "Firebase", icon: "/tech-icons/firebase.png" },
      { name: "Supabase", icon: "/tech-icons/supabase.png" },
    ],
    project: [
      { name: "Jira", icon: "/tech-icons/jira.png" },
      { name: "Trello", icon: "/tech-icons/trello.png" },
      { name: "Asana", icon: "/tech-icons/asana.png" },
      { name: "GitHub", icon: "/tech-icons/github.png" },
      { name: "GitLab", icon: "/tech-icons/gitlab.png" },
      { name: "Notion", icon: "/tech-icons/notion.png" },
    ],
    security: [
      { name: "OAuth", icon: "/tech-icons/oauth.png" },
      { name: "JWT", icon: "/tech-icons/jwt.png" },
      { name: "SSL/TLS", icon: "/tech-icons/ssl_tls.png" },
      { name: "Cloudflare", icon: "/tech-icons/cloudflare.png" },
      { name: "AWS Security", icon: "/tech-icons/aws-security.png" },
      { name: "Firebase Auth", icon: "/tech-icons/firebase-auth.png" },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const tabVariants = {
    inactive: { scale: 1 },
    active: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
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

      <section ref={sectionRef} className="py-20 px-4 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
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
              className="inline-flex items-center gap-2 bg-[#e9e15b]/20 dark:bg-[#e9e15b]/30 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-[#2b2b2b] dark:text-[#e9e15b]" />
              <span className="text-[#2b2b2b] dark:text-[#e9e15b] font-semibold">{t("latestTech")}</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-[#2b2b2b] dark:text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="relative">
                {t("techStack").split(" ")[0]} {t("techStack").split(" ")[1]}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-[#e9e15b]/30 -skew-x-12"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>{" "}
              {t("techStack").split(" ").slice(2).join(" ")}
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

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              const TabIcon = tab.icon

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variants={tabVariants}
                  animate={isActive ? "active" : "inactive"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-6 py-3 rounded-full font-medium transition-all duration-300
                    flex items-center gap-2
                    ${
                      isActive
                        ? "bg-[#e9e15b] text-[#2b2b2b] shadow-lg"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#e9e15b]/20 hover:text-[#2b2b2b] dark:hover:text-[#2b2b2b]"
                    }
                  `}
                >
                  <TabIcon className="w-4 h-4" />
                  {t(tab.labelKey)}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Tech Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
              >
                {technologies[activeTab].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      transition: { type: "spring", stiffness: 400, damping: 17 },
                    }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl p-6 flex flex-col items-center justify-center transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="relative w-16 h-16 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#e9e15b]/20 to-[#2b2b2b]/10 dark:from-[#e9e15b]/30 dark:to-[#2b2b2b]/20 rounded-xl transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-full h-full bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden group">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain transition-transform duration-300"
                          />
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 bg-[#e9e15b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ opacity: 0.2 }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-center text-gray-800 dark:text-gray-200 capitalize">
                      {tech.name.replace(/[-_]/g, " ")}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#e9e15b]/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
