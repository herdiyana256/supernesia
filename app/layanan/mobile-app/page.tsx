"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SupernesiaChatbot from "@/components/supernesia-chatbot"

// Translations
const translations = {
  ID: {
    category: "MOBILE & DESKTOP APP",
    title: "PROFESSIONALLY CRAFTING VISUALLY ENGAGING AND INTERACTIVE APPLICATIONS",
    description:
      "Kami mengkhususkan diri dalam memberikan layanan pengembangan aplikasi mobile dan desktop yang kuat bagi bisnis yang disesuaikan untuk memenuhi berbagai kebutuhan bisnis di semua industri. Dengan pengalaman yang luas bekerja dengan perusahaan publik dan swasta, kami memanfaatkan teknologi terbaru untuk membuat aplikasi yang dinamis dan berkinerja tinggi.",
    chatNow: "Chat Sekarang",
    viewPackage: "Lihat Paket",
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
    otherServices: "LAYANAN LAINNYA",
    webDev: "Web Development",
    customSoftware: "Custom Software Development",
    contactUs: "AYO BERGERAK",
    contactViaWhatsApp: "HUBUNGI KAMI MELALUI WHATSAPP",
    contactDesc:
      "Ingin tanya lebih lanjut tentang paket, benefit atupun fitur yang tersedia? atau ingin custom plan juga bisa. Kita siap untuk bantu perkembanganmu, gak perlu ragu buat nanya, kami siap melayani dan gratis pokoknya.",
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
    webDev: "Web Development",
    customSoftware: "Custom Software Development",
    contactUs: "LET'S GET STARTED",
    contactViaWhatsApp: "CONTACT US VIA WHATSAPP",
    contactDesc:
      "Want to ask more about packages, benefits, or available features? Or want a custom plan? We're ready to help your development, don't hesitate to ask, we're ready to serve and it's free!",
    chatNowButton: "Chat Now",
  },
}

export default function MobileAppPage() {
  const [language, setLanguage] = useState("ID")

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

  // Get current translations
  const t = translations[language as keyof typeof translations]

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-medium mb-2">{t.category}</p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">{t.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{t.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://wa.me/6281281892625"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary px-6 py-3 font-bold rounded-md"
              >
                {t.chatNow}
              </Link>
              <Link
                href="/harga"
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-6 py-3 font-bold rounded-md"
              >
                {t.viewPackage}
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/layanan_001.png"
              alt="Mobile App Development"
              width={600}
              height={400}
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-secondary font-medium mb-2">{t.keyBenefit}</p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">{t.whyPartner}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">{t.partnerDescription}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary p-6 rounded-lg">
              <p className="text-gray-800">{t.benefit1}</p>
            </div>
            <div className="bg-primary p-6 rounded-lg">
              <p className="text-gray-800">{t.benefit2}</p>
            </div>
            <div className="bg-primary p-6 rounded-lg">
              <p className="text-gray-800">{t.benefit3}</p>
            </div>
            <div className="bg-primary p-6 rounded-lg">
              <p className="text-gray-800">{t.benefit4}</p>
            </div>
            <div className="bg-primary p-6 rounded-lg">
              <p className="text-gray-800">{t.benefit5}</p>
            </div>
            <div className="bg-primary p-6 rounded-lg">
              <p className="text-gray-800">{t.benefit6}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.ourProcess}</h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-pink-500 transform -translate-x-1/2"></div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="relative">
                <div className="md:text-right">
                  <h3 className="text-xl font-bold mb-2">{t.discovery}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t.discoveryDesc}</p>
                </div>
                <div className="hidden md:block absolute right-0 top-0 w-4 h-4 bg-pink-500 rounded-full transform translate-x-10"></div>
              </div>

              <div className="md:mt-24 relative">
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.design}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t.designDesc}</p>
                </div>
                <div className="hidden md:block absolute left-0 top-0 w-4 h-4 bg-pink-500 rounded-full transform -translate-x-10"></div>
              </div>

              <div className="relative">
                <div className="md:text-right">
                  <h3 className="text-xl font-bold mb-2">{t.development}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t.developmentDesc}</p>
                </div>
                <div className="hidden md:block absolute right-0 top-0 w-4 h-4 bg-pink-500 rounded-full transform translate-x-10"></div>
              </div>

              <div className="md:mt-24 relative">
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.testing}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t.testingDesc}</p>
                </div>
                <div className="hidden md:block absolute left-0 top-0 w-4 h-4 bg-pink-500 rounded-full transform -translate-x-10"></div>
              </div>

              <div className="relative">
                <div className="md:text-right">
                  <h3 className="text-xl font-bold mb-2">{t.deployment}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t.deploymentDesc}</p>
                </div>
                <div className="hidden md:block absolute right-0 top-0 w-4 h-4 bg-pink-500 rounded-full transform translate-x-10"></div>
              </div>

              <div className="md:mt-24 relative">
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.support}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{t.supportDesc}</p>
                </div>
                <div className="hidden md:block absolute left-0 top-0 w-4 h-4 bg-pink-500 rounded-full transform -translate-x-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-secondary font-medium mb-2">{t.otherService}</p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">{t.otherServices}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            Kami menawarkan pendekatan unik untuk transformasi digital yang berfokus pada hasil bisnis nyata dan solusi
            yang disesuaikan dengan kebutuhan spesifik Anda.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">{t.webDev}</h3>
              <div className="border-t border-secondary my-3"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-12">
                Konsultasi strategis untuk menyelaraskan inisiatif teknologi dengan tujuan bisnis Anda.
              </p>
              <div className="flex justify-end">
                <Link href="/layanan/web-development" className="text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m7 17 10-10"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">{t.customSoftware}</h3>
              <div className="border-t border-secondary my-3"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-12">
                Konsultasi strategis untuk menyelaraskan inisiatif teknologi dengan tujuan bisnis Anda.
              </p>
              <div className="flex justify-end">
                <Link href="/layanan/custom-software" className="text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m7 17 10-10"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-secondary font-medium mb-2">{t.contactUs}</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">{t.contactViaWhatsApp}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{t.contactDesc}</p>
              <button
                onClick={() => {
                  // @ts-ignore
                  if (typeof window !== "undefined" && window.openSupernesiaChatbot) {
                    // @ts-ignore
                    window.openSupernesiaChatbot()
                  }
                }}
                className="inline-block bg-primary px-6 py-3 rounded-full font-bold"
              >
                {t.chatNowButton}
              </button>
            </div>
            <div className="flex justify-center">
              <Image src="/contact.png" alt="Contact Us" width={300} height={300} className="w-full max-w-sm" />
            </div>
          </div>
        </div>
      </section>

      <SupernesiaChatbot />
      <Footer />
    </main>
  )
}
