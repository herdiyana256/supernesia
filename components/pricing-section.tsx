"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import Link from "next/link"

// Translations
const translations = {
  ID: {
    pricing: "PAKETTTTT",
    chooseNeeds: "PILIH SESUAI KEBUTUHANMU",
    webDev: "Web Development",
    customSoftware: "Custom Software Development",
    mobileApps: "Mobile & Desktop Apps",
    features: "Fitur",
    orderNow: "Pesan Sekarang",
    superBenefits: "Super Benefits",
  },
  EN: {
    pricing: "PRICING",
    chooseNeeds: "CHOOSE ACCORDING TO YOUR NEEDS",
    webDev: "Web Development",
    customSoftware: "Custom Software Development",
    mobileApps: "Mobile & Desktop Apps",
    features: "Features",
    orderNow: "Order Now",
    superBenefits: "Super Benefits",
  },
}

// Web Development Plans
const webPlans = [
  {
    name: "SuperNeo",
    description:
      "Paket ini dirancang khusus untuk membantu freelancer, mahasiswa, dan UMKM yang ingin go digital dengan budget terbatas.",
    price: "Rp.1.250.000",
    features: [
      "2 Halaman statis",
      "Domain: .com atau .net (1 tahun)",
      "Hosting 1GB SSD (lokal/Asia), Bandwidth 10GB",
      "Desain responsif & User Friendly",
      "Setup email domain (1 akun)",
      "Gratis hosting up to 15.000 traffic/month",
      "Integrasi media sosial",
      "Fitur chat WhatsApp",
      "UI/UX desain (tanpa menggunakan template)",
      "Akses Admin",
      "Web Marketing (SEO + Google Analytics)",
      "Gratis revisi 2x",
      "Pengerjaan 6 Hari",
    ],
    benefits: ["Gratis konsultasi UI/UX", "Gratis Biaya Setup"],
    popular: false,
  },
  {
    name: "SuperPro",
    description:
      "Paket ini sempurna untuk Anda yang ingin websitenya tampil profesional dan eksklusif dengan fitur lengkap.",
    price: "Rp.2.500.000",
    features: [
      "6+ Halaman (maksimal 8 halaman)",
      "Domain: .com, .net, .co.id (1 tahun)",
      "Hosting 2GB SSD (lokal/Asia), Bandwidth 30GB",
      "Desain responsif & User Friendly",
      "Setup email domain (1 akun)",
      "Gratis hosting up to 50.000 traffic/month",
      "Integrasi media sosial",
      "Fitur chat WhatsApp",
      "UI/UX desain (tanpa menggunakan template)",
      "Akses Admin",
      "Web Marketing (SEO + Google Analytics)",
      "10+ Backlink / Link Building",
      "Google Ads",
      "2 Email Bisnis",
      "Gratis AI Chatbot",
      "Gratis SSL",
      "Silver Security Services (auto-backup mingguan, anti-malware scan)",
      "Gratis revisi 2x",
      "Pengerjaan 10-14 Hari",
    ],
    benefits: [
      "Gratis konsultasi UI/UX",
      "Gratis biaya setup",
      "Gratis Maintenance website (Bug & Update System 1 bulan)",
    ],
    popular: true,
  },
  {
    name: "SuperPremium",
    description:
      "Paket unggulan yang sempurna untuk Anda yang ingin memiliki website dengan fitur canggih dan desain eksklusif, lengkap dengan fitur SuperNeo & SuperPro.",
    price: "Rp.5.500.000",
    features: [
      "10+ Halaman Custom (maksimal 12 halaman)",
      "Domain: .com, .net, .co.id, .id, .org (1 tahun)",
      "Hosting 5GB SSD (lokal/Asia), Bandwidth Unmetered",
      "Desain responsif & User Friendly (Desain Premium)",
      "Setup email domain (1 akun)",
      "Gratis hosting up to On Demand Traffic/month",
      "Integrasi media sosial",
      "Fitur chat WhatsApp",
      "UI/UX desain (tanpa menggunakan template)",
      "Akses Admin",
      "Web Marketing (SEO + Google Analytics)",
      "50+ Backlink / Link Building",
      "Google Ads",
      "4 Email Bisnis",
      "Gratis AI Chatbot",
      "Gratis SSL",
      "Full CMS Dinamis (admin dashboard)",
      "Animasi ringan (hero, hover, fade)",
      "Silver Security Services (auto-backup mingguan, anti-malware scan)",
      "Gratis revisi 3x",
      "Pengerjaan On demand (max 30 hari)",
    ],
    benefits: [
      "Gratis konsultasi UI/UX",
      "Gratis biaya setup",
      "Gratis Maintenance website (Bug & Update System 3 bulan)",
      "AI Chatbot",
      "Blog Editable ringan",
      "Copywriting dasar (1-2 halaman)",
    ],
    popular: false,
  },
]

// Custom Software Plans
const softwarePlans = [
  {
    name: "SuperNeo",
    description:
      "Paket ini cocok untuk bisnis kecil yang membutuhkan solusi software sederhana untuk operasional internal.",
price: "Hubungi kami untuk penawaran khusus.",
    features: [
      "1 modul utama",
      "Dashboard admin sederhana",
      "Manajemen pengguna dasar",
      "Integrasi dengan 1 sistem eksternal",
      "Desain UI/UX responsif",
      "Pelatihan penggunaan sistem",
      "Support teknis 30 hari",
      "Pengerjaan 30 hari",
      "Gratis revisi 2x",
    ],
    benefits: ["Gratis konsultasi kebutuhan bisnis", "Gratis setup server", "Dokumentasi penggunaan"],
    popular: false,
  },
  {
    name: "SuperPro",
    description:
      "Paket ini ideal untuk bisnis menengah yang membutuhkan sistem terintegrasi dengan beberapa modul fungsional.",
price: "Hubungi kami untuk penawaran khusus.",
    features: [
      "3 modul fungsional",
      "Dashboard admin lengkap",
      "Manajemen pengguna dengan role",
      "Integrasi dengan 3 sistem eksternal",
      "Desain UI/UX premium",
      "Laporan dan analitik dasar",
      "API untuk integrasi pihak ketiga",
      "Pelatihan penggunaan sistem",
      "Support teknis 90 hari",
      "Pengerjaan 60-90 hari",
      "Gratis revisi 3x",
    ],
    benefits: [
      "Gratis konsultasi kebutuhan bisnis",
      "Gratis setup server",
      "Dokumentasi penggunaan lengkap",
      "Maintenance sistem 3 bulan",
      "Backup otomatis",
    ],
    popular: true,
  },
  {
    name: "SuperPremium",
    description:
      "Paket ini sempurna untuk perusahaan yang membutuhkan sistem enterprise dengan fitur lengkap dan skalabilitas tinggi.",
price: "Hubungi kami untuk penawaran khusus.",
    features: [
      "Modul tak terbatas",
      "Dashboard admin enterprise",
      "Manajemen pengguna dengan role dan permission",
      "Integrasi dengan sistem eksternal tak terbatas",
      "Desain UI/UX premium custom",
      "Business intelligence & analytics",
      "API lengkap dengan dokumentasi",
      "Keamanan tingkat enterprise",
      "Pelatihan penggunaan sistem komprehensif",
      "Support teknis 1 tahun",
      "Pengerjaan sesuai kebutuhan",
      "Gratis revisi 5x",
    ],
    benefits: [
      "Gratis konsultasi kebutuhan bisnis mendalam",
      "Gratis setup server dan infrastruktur",
      "Dokumentasi penggunaan lengkap",
      "Maintenance sistem 1 tahun",
      "Backup otomatis dan disaster recovery",
      "Pengembangan fitur tambahan (dalam batasan tertentu)",
      "Dedicated support team",
    ],
    popular: false,
  },
]

// Mobile & Desktop Apps Plans
const mobilePlans = [
  {
    name: "SuperNeo",
    description: "Paket ini cocok untuk bisnis yang ingin memiliki aplikasi mobile sederhana dengan fitur dasar.",
price: "Hubungi kami untuk penawaran khusus.",
    features: [
      "Aplikasi untuk 1 platform (Android/iOS)",
      "5 halaman/screen utama",
      "Autentikasi pengguna dasar",
      "Integrasi dengan 1 API eksternal",
      "Desain UI/UX responsif",
      "Notifikasi push sederhana",
      "Support teknis 30 hari",
      "Pengerjaan 30-45 hari",
      "Gratis revisi 2x",
    ],
    benefits: [
      "Gratis konsultasi kebutuhan aplikasi",
      "Gratis setup developer account",
      "Bantuan publikasi di app store",
    ],
    popular: false,
  },
  {
    name: "SuperPro",
    description:
      "Paket ini ideal untuk bisnis yang membutuhkan aplikasi mobile dengan fitur lengkap untuk kedua platform.",
price: "Hubungi kami untuk penawaran khusus.",
    features: [
      "Aplikasi untuk Android & iOS",
      "10 halaman/screen",
      "Autentikasi multi-level",
      "Integrasi dengan 3 API eksternal",
      "Desain UI/UX premium",
      "Sistem notifikasi lengkap",
      "Fitur offline mode dasar",
      "Analytics pengguna",
      "Support teknis 90 hari",
      "Pengerjaan 60-90 hari",
      "Gratis revisi 3x",
    ],
    benefits: [
      "Gratis konsultasi kebutuhan aplikasi mendalam",
      "Gratis setup developer account",
      "Bantuan publikasi di app store",
      "Maintenance aplikasi 3 bulan",
      "Pembaruan minor gratis",
    ],
    popular: true,
  },
  {
    name: "SuperPremium",
    description:
      "Paket ini sempurna untuk perusahaan yang membutuhkan aplikasi enterprise dengan fitur canggih dan performa tinggi.",
price: "Hubungi kami untuk penawaran khusus.",
    features: [
      "Aplikasi untuk Android, iOS & Web",
      "Screen tak terbatas",
      "Autentikasi multi-level dengan keamanan tinggi",
      "Integrasi API lengkap",
      "Desain UI/UX premium custom",
      "Fitur offline mode & sinkronisasi",
      "Analytics & user behavior tracking",
      "Sistem notifikasi advanced",
      "Support teknis 1 tahun",
      "Pengerjaan sesuai kebutuhan",
      "Gratis revisi 5x",
    ],
    benefits: [
      "Gratis konsultasi kebutuhan aplikasi mendalam",
      "Gratis setup developer account dan infrastruktur",
      "Bantuan publikasi di app store",
      "Maintenance aplikasi 1 tahun",
      "Pembaruan minor dan major gratis (dalam batasan tertentu)",
      "Dedicated support team",
      "Pengembangan fitur tambahan (dalam batasan tertentu)",
    ],
    popular: false,
  },
]




export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("web")
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

  // Get current plans based on active tab
  const getCurrentPlans = () => {
    switch (activeTab) {
      case "web":
        return webPlans
      case "software":
        return softwarePlans
      case "mobile":
        return mobilePlans
      default:
        return webPlans
    }
  }

  const plans = getCurrentPlans()

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20">
      <div className="mb-12">
        <p className="text-secondary font-medium mb-2">{t.pricing}</p>
        <h2 className="text-5xl md:text-6xl font-black leading-tight">{t.chooseNeeds}</h2>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setActiveTab("web")}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            activeTab === "web" ? "bg-primary" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {t.webDev}
        </button>
        <button
          onClick={() => setActiveTab("software")}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            activeTab === "software"
              ? "bg-primary"
              : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {t.customSoftware}
        </button>
        <button
          onClick={() => setActiveTab("mobile")}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            activeTab === "mobile"
              ? "bg-primary"
              : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {t.mobileApps}
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border ${
              plan.popular ? "bg-primary" : "bg-white dark:bg-gray-800"
            } rounded-xl p-6 relative shadow-sm hover:shadow-md transition-shadow flex flex-col h-full`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </span>
            )}

            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 dark:text-black">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.popular ? "text-gray-800" : "text-gray-600 dark:text-gray-300"}`}>
                {plan.description}
              </p>

              <div
                className={`text-4xl font-bold mb-6 ${plan.popular ? "text-gray-800" : "text-gray-800 dark:text-white"}`}
              >
                {plan.price}
              </div>

              <div className="mb-6">
                <h4 className={`font-bold mb-3 ${plan.popular ? "text-gray-800" : "text-gray-800 dark:text-white"}`}>
                  {t.features}
                </h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className={plan.popular ? "text-gray-800" : "text-gray-700 dark:text-gray-300"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.benefits && (
                <div className="mb-6">
                  <h4 className={`font-bold mb-3 ${plan.popular ? "text-gray-800" : "text-gray-800 dark:text-white"}`}>
                    {t.superBenefits}
                  </h4>
                  <ul className="space-y-2">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className={plan.popular ? "text-gray-800" : "text-gray-700 dark:text-gray-300"}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/order"
              className={`block text-center ${
                plan.popular ? "bg-white text-black" : "bg-primary text-black dark:text-black"
              } border border-black/10 px-6 py-2 rounded-md font-bold hover:bg-opacity-90 transition-colors mt-auto`}
            >
              {t.orderNow}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
