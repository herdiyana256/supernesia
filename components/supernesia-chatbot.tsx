"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Send, Smile, Copy } from "lucide-react"
import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react"

// Import pricing data
const webPlans = [
  {
    name: "SuperNeo",
    price: "Rp 1.250.000",
    description:
      "Paket ini dirancang khusus untuk membantu freelancer, mahasiswa, dan UMKM yang ingin go digital dengan budget terbatas.",
    features: [
      "2 Halaman statis",
      "Domain: .com atau .net (1 tahun)",
      "Hosting 1GB SSD (lokal/Asia), Bandwidth 10GB",
      "Desain responsif & User Friendly",
      "Setup email domain (1 akun)",
    ],
  },
  {
    name: "SuperPro",
    price: "Rp 2.500.000",
    description:
      "Paket ini sempurna untuk Anda yang ingin websitenya tampil profesional dan eksklusif dengan fitur lengkap.",
    features: [
      "6+ Halaman (maksimal 8 halaman)",
      "Domain: .com, .net, .co.id (1 tahun)",
      "Hosting 2GB SSD (lokal/Asia), Bandwidth 30GB",
      "Desain responsif & User Friendly",
      "Integrasi media sosial",
      "Fitur chat WhatsApp",
      "UI/UX desain (tanpa template)",
    ],
  },
  {
    name: "SuperPremium",
    price: "Rp 5.500.000",
    description:
      "Paket unggulan yang sempurna untuk Anda yang ingin memiliki website dengan fitur canggih dan desain eksklusif.",
    features: [
      "10+ Halaman Custom (maksimal 12 halaman)",
      "Domain: .com, .net, .co.id, .id, .org (1 tahun)",
      "Hosting 5GB SSD, Bandwidth Unmetered",
      "Full CMS Dinamis (admin dashboard)",
      "Animasi ringan (hero, hover, fade)",
      "4 Email Bisnis",
      "Gratis AI Chatbot",
    ],
  },
]

const mobilePlans = [
  {
    name: "SuperNeo",
    price: "Mulai dari Rp 5.000.000",
    description: "Paket ini cocok untuk bisnis yang ingin memiliki aplikasi mobile sederhana dengan fitur dasar.",
    features: [
      "Aplikasi untuk 1 platform (Android/iOS)",
      "5 halaman/screen utama",
      "Autentikasi pengguna dasar",
      "Integrasi dengan 1 API eksternal",
      "Desain UI/UX responsif",
    ],
  },
  {
    name: "SuperPro",
    price: "Mulai dari Rp 8.500.000",
    description:
      "Paket ini ideal untuk bisnis yang membutuhkan aplikasi mobile dengan fitur lengkap untuk kedua platform.",
    features: [
      "Aplikasi untuk Android & iOS",
      "10 halaman/screen",
      "Autentikasi multi-level",
      "Integrasi dengan 3 API eksternal",
      "Desain UI/UX premium",
    ],
  },
  {
    name: "SuperPremium",
    price: "Mulai dari Rp 12.000.000",
    description:
      "Paket ini sempurna untuk perusahaan yang membutuhkan aplikasi enterprise dengan fitur canggih dan performa tinggi.",
    features: [
      "Aplikasi untuk Android, iOS & Web",
      "Screen tak terbatas",
      "Autentikasi multi-level dengan keamanan tinggi",
      "Integrasi API lengkap",
      "Desain UI/UX premium custom",
    ],
  },
]

const softwarePlans = [
  {
    name: "SuperNeo",
    price: "Hubungi kami untuk penawaran khusus",
    description:
      "Paket ini cocok untuk bisnis kecil yang membutuhkan solusi software sederhana untuk operasional internal.",
    features: [
      "1 modul utama",
      "Dashboard admin sederhana",
      "Manajemen pengguna dasar",
      "Integrasi dengan 1 sistem eksternal",
      "Desain UI/UX responsif",
    ],
  },
  {
    name: "SuperPro",
    price: "Hubungi kami untuk penawaran khusus",
    description:
      "Paket ini ideal untuk bisnis menengah yang membutuhkan sistem terintegrasi dengan beberapa modul fungsional.",
    features: [
      "3 modul fungsional",
      "Dashboard admin lengkap",
      "Manajemen pengguna dengan role",
      "Integrasi dengan 3 sistem eksternal",
      "Desain UI/UX premium",
    ],
  },
  {
    name: "SuperPremium",
    price: "Hubungi kami untuk penawaran khusus",
    description:
      "Paket ini sempurna untuk perusahaan yang membutuhkan sistem enterprise dengan fitur lengkap dan skalabilitas tinggi.",
    features: [
      "Modul tak terbatas",
      "Dashboard admin enterprise",
      "Manajemen pengguna dengan role dan permission",
      "Integrasi dengan sistem eksternal tak terbatas",
      "Desain UI/UX premium custom",
    ],
  },
]

type Message = {
  text: string
  timestamp: Date
  sender: "user" | "bot"
  status: "sending" | "sent" | "delivered" | "read"
  active: boolean
  typing: boolean
  options?: { text: string; value: string }[]
  orderInfo?: {
    ticketNumber: string
    packageName: string
    price: string
    serviceType: string
  }
}

// Generate random ticket number
const generateTicketNumber = () => {
  const prefix = "SUP"
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0")
  return `${prefix}${timestamp}${random}`
}

// Translations
const translations = {
  ID: {
    welcome:
      "🚀 Yuk, grow bareng Supernesia!\nPilih kebutuhanmu di bawah ini ya:\n\n🖥 Mau lihat layanan\n💰 Mau intip harga paket\n📄 Mau lihat info lengkap\n📞 Mau ngobrol langsung\n\n✨ Klik salah satu aja ya!",
    options: [
      { text: "🖥 Mau lihat layanan", value: "layanan" },
      { text: "💰 Mau intip harga paket", value: "harga" },
      { text: "📄 Mau lihat info lengkap", value: "paket" },
      { text: "📞 Mau ngobrol langsung", value: "hubungi" },
    ],
    greeting: "Iya, halo juga! 👋 Ada yang bisa Supernesia bantu hari ini?",
    services:
      "Kami menawarkan beberapa layanan utama:\n\n1. Web Development\n2. Mobile & Desktop Apps\n3. Custom Software Development\n\nLayanan mana yang ingin Anda ketahui lebih lanjut?",
    serviceOptions: [
      { text: "Web Development", value: "web" },
      { text: "Mobile & Desktop Apps", value: "mobile" },
      { text: "Custom Software", value: "software" },
    ],
    pricing:
      "Kami memiliki beberapa paket harga untuk layanan kami. Silakan pilih jenis layanan yang ingin Anda lihat harganya:",
    pricingOptions: [
      { text: "Web Development", value: "harga-web" },
      { text: "Mobile & Desktop Apps", value: "harga-mobile" },
      { text: "Custom Software", value: "harga-software" },
    ],
    webPricing:
      "Berikut adalah paket harga untuk Web Development:\n\n1. SuperNeo: Rp 1.250.000\n2. SuperPro: Rp 2.500.000\n3. SuperPremium: Rp 5.500.000\n\nIngin tahu detail lebih lanjut tentang paket tertentu?",
    mobilePricing:
      "Berikut adalah paket harga untuk Mobile & Desktop Apps:\n\n1. SuperNeo: Mulai dari Rp 5.000.000\n2. SuperPro: Mulai dari Rp 8.500.000\n3. SuperPremium: Mulai dari Rp 12.000.000\n\nIngin tahu detail lebih lanjut tentang paket tertentu?",
    softwarePricing:
      "Berikut adalah paket harga untuk Custom Software:\n\n1. SuperNeo: Hubungi kami untuk penawaran khusus\n2. SuperPro: Hubungi kami untuk penawaran khusus\n3. SuperPremium: Hubungi kami untuk penawaran khusus\n\nIngin tahu detail lebih lanjut tentang paket tertentu?",
    pricingWebOptions: [
      { text: "SuperNeo", value: "web-basic" },
      { text: "SuperPro", value: "web-standard" },
      { text: "SuperPremium", value: "web-premium" },
    ],
    pricingMobileOptions: [
      { text: "SuperNeo", value: "mobile-basic" },
      { text: "SuperPro", value: "mobile-standard" },
      { text: "SuperPremium", value: "mobile-premium" },
    ],
    pricingSoftwareOptions: [
      { text: "SuperNeo", value: "software-basic" },
      { text: "SuperPro", value: "software-standard" },
      { text: "SuperPremium", value: "software-premium" },
    ],
    packages:
      "Kami menawarkan 3 paket utama:\n\n1. SuperNeo: Cocok untuk bisnis baru yang membutuhkan website sederhana\n2. SuperPro: Untuk website dengan fitur canggih dan desain eksklusif\n3. SuperPremium: Solusi lengkap dengan fitur premium dan dukungan prioritas\n\nPaket mana yang ingin Anda ketahui lebih detail?",
    packageOptions: [
      { text: "SuperNeo", value: "basic" },
      { text: "SuperPro", value: "standard" },
      { text: "SuperPremium", value: "premium" },
    ],
    contact:
      "Anda dapat menghubungi kami melalui:\n\nWhatsApp: 0812-8189-2625\nEmail: info@supernesia.com\nAlamat: Jakarta Timur, Indonesia\n\nIngin kami menghubungi Anda?",
    contactOptions: [
      { text: "Chat WhatsApp", value: "whatsapp" },
      { text: "Kembali ke Menu", value: "menu" },
    ],
    webDev:
      "Web Development kami mencakup pembuatan website profesional dengan fokus pada UX/UI yang menarik, performa tinggi, dan SEO friendly. Kami menggunakan teknologi terkini seperti React, Next.js, dan berbagai CMS modern.",
    webDevOptions: [
      { text: "Lihat Harga Web", value: "harga-web" },
      { text: "Kembali ke Layanan", value: "layanan" },
    ],
    mobileDev:
      "Layanan Mobile & Desktop Apps kami mencakup pengembangan aplikasi untuk iOS, Android, dan desktop. Kami menggunakan teknologi seperti React Native, Flutter, dan Electron untuk memberikan pengalaman pengguna yang optimal.",
    mobileDevOptions: [
      { text: "Lihat Harga Mobile Apps", value: "harga-mobile" },
      { text: "Kembali ke Layanan", value: "layanan" },
    ],
    softwareDev:
      "Custom Software Development kami menawarkan solusi perangkat lunak yang disesuaikan dengan kebutuhan spesifik bisnis Anda. Kami membangun sistem yang skalabel, aman, dan mudah digunakan.",
    softwareDevOptions: [
      { text: "Lihat Harga Software", value: "harga-software" },
      { text: "Kembali ke Layanan", value: "layanan" },
    ],
    whatsapp: "Anda akan diarahkan ke WhatsApp untuk berbicara dengan tim kami. Ada hal lain yang bisa kami bantu?",
    whatsappOptions: [{ text: "Kembali ke Menu", value: "menu" }],
    orderSuccess: "🎉 PESANAN BERHASIL DIBUAT!\n\n📋 Nomor Tiket:",
    orderDetails:
      "📦 Paket: {package}\n💰 Harga: {price}\n🔧 Layanan: {service}\n\n✅ Pesanan Anda telah tercatat dalam sistem kami!\n\nUntuk melanjutkan proses pembayaran dan diskusi detail proyek, silakan klik tombol di bawah untuk chat langsung dengan tim kami di WhatsApp.\n\n📱 Tim kami akan segera merespon dan membantu Anda menyelesaikan transaksi.",
    orderWhatsappMessage:
      "Halo Supernesia! Saya ingin melanjutkan pesanan dengan:\n\n📋 Nomor Tiket: {ticket}\n📦 Paket: {package}\n💰 Harga: {price}\n🔧 Layanan: {service}\n\nMohon bantuan untuk proses selanjutnya. Terima kasih!",
    orderOptions: [
      { text: "💬 Lanjut ke WhatsApp", value: "order-whatsapp" },
      { text: "📋 Salin Nomor Tiket", value: "copy-ticket" },
    ],
    ticketCopied: "✅ Nomor tiket berhasil disalin!",
    fallback: "Maaf, pertanyaanmu belum tersedia. Mau lihat daftar layanan kami?",
    typePlaceholder: "Ketik pesan...",
    assistant: "AI Assistant",
  },
  EN: {
    welcome:
      "🚀 Let's grow with Supernesia!\nChoose your needs below:\n\n🖥 View our services\n💰 Check pricing packages\n📄 See complete info\n📞 Talk directly\n\n✨ Just click one option!",
    options: [
      { text: "🖥 View services", value: "layanan" },
      { text: "💰 Check pricing", value: "harga" },
      { text: "📄 See complete info", value: "paket" },
      { text: "📞 Talk directly", value: "hubungi" },
    ],
    greeting: "Hello there! 👋 How can Supernesia help you today?",
    services:
      "We offer several main services:\n\n1. Web Development\n2. Mobile & Desktop Apps\n3. Custom Software Development\n\nWhich service would you like to know more about?",
    serviceOptions: [
      { text: "Web Development", value: "web" },
      { text: "Mobile & Desktop Apps", value: "mobile" },
      { text: "Custom Software", value: "software" },
    ],
    pricing:
      "We have several pricing packages for our services. Please select the type of service you want to see pricing for:",
    pricingOptions: [
      { text: "Web Development", value: "harga-web" },
      { text: "Mobile & Desktop Apps", value: "harga-mobile" },
      { text: "Custom Software", value: "harga-software" },
    ],
    webPricing:
      "Here are the pricing packages for Web Development:\n\n1. SuperNeo: Rp 1,250,000\n2. SuperPro: Rp 2,500,000\n3. SuperPremium: Rp 5,500,000\n\nWould you like to know more details about a specific package?",
    mobilePricing:
      "Here are the pricing packages for Mobile & Desktop Apps:\n\n1. SuperNeo: Starting from Rp 5,000,000\n2. SuperPro: Starting from Rp 8,500,000\n3. SuperPremium: Starting from Rp 12,000,000\n\nWould you like to know more details about a specific package?",
    softwarePricing:
      "Here are the pricing packages for Custom Software:\n\n1. SuperNeo: Contact us for special pricing\n2. SuperPro: Contact us for special pricing\n3. SuperPremium: Contact us for special pricing\n\nWould you like to know more details about a specific package?",
    pricingWebOptions: [
      { text: "SuperNeo", value: "web-basic" },
      { text: "SuperPro", value: "web-standard" },
      { text: "SuperPremium", value: "web-premium" },
    ],
    pricingMobileOptions: [
      { text: "SuperNeo", value: "mobile-basic" },
      { text: "SuperPro", value: "mobile-standard" },
      { text: "SuperPremium", value: "mobile-premium" },
    ],
    pricingSoftwareOptions: [
      { text: "SuperNeo", value: "software-basic" },
      { text: "SuperPro", value: "software-standard" },
      { text: "SuperPremium", value: "software-premium" },
    ],
    packages:
      "We offer 3 main packages:\n\n1. SuperNeo: Suitable for new businesses that need a simple website\n2. SuperPro: For websites with advanced features and exclusive design\n3. SuperPremium: Complete solution with premium features and priority support\n\nWhich package would you like to know more about?",
    packageOptions: [
      { text: "SuperNeo", value: "basic" },
      { text: "SuperPro", value: "standard" },
      { text: "SuperPremium", value: "premium" },
    ],
    contact:
      "You can contact us through:\n\nWhatsApp: 0812-8189-2625\nEmail: info@supernesia.com\nAddress: East Jakarta, Indonesia\n\nWould you like us to contact you?",
    contactOptions: [
      { text: "Chat on WhatsApp", value: "whatsapp" },
      { text: "Back to Menu", value: "menu" },
    ],
    webDev:
      "Our Web Development includes professional website creation with a focus on attractive UX/UI, high performance, and SEO friendly. We use the latest technologies such as React, Next.js, and various modern CMS.",
    webDevOptions: [
      { text: "View Web Pricing", value: "harga-web" },
      { text: "Back to Services", value: "layanan" },
    ],
    mobileDev:
      "Our Mobile & Desktop Apps services include application development for iOS, Android, and desktop. We use technologies such as React Native, Flutter, and Electron to provide an optimal user experience.",
    mobileDevOptions: [
      { text: "View Mobile Apps Pricing", value: "harga-mobile" },
      { text: "Back to Services", value: "layanan" },
    ],
    softwareDev:
      "Our Custom Software Development offers software solutions tailored to your specific business needs. We build scalable, secure, and user-friendly systems.",
    softwareDevOptions: [
      { text: "View Software Pricing", value: "harga-software" },
      { text: "Back to Services", value: "layanan" },
    ],
    whatsapp: "You will be directed to WhatsApp to speak with our team. Is there anything else we can help you with?",
    whatsappOptions: [{ text: "Back to Menu", value: "menu" }],
    orderSuccess: "🎉 ORDER SUCCESSFULLY CREATED!\n\n📋 Ticket Number:",
    orderDetails:
      "📦 Package: {package}\n💰 Price: {price}\n🔧 Service: {service}\n\n✅ Your order has been recorded in our system!\n\nTo continue the payment process and discuss project details, please click the button below to chat directly with our team on WhatsApp.\n\n📱 Our team will respond promptly and help you complete the transaction.",
    orderWhatsappMessage:
      "Hello Supernesia! I want to continue my order with:\n\n📋 Ticket Number: {ticket}\n📦 Package: {package}\n💰 Price: {price}\n🔧 Service: {service}\n\nPlease assist with the next process. Thank you!",
    orderOptions: [
      { text: "💬 Continue to WhatsApp", value: "order-whatsapp" },
      { text: "📋 Copy Ticket Number", value: "copy-ticket" },
    ],
    ticketCopied: "✅ Ticket number copied successfully!",
    fallback: "Sorry, your question is not yet available. Would you like to see our list of services?",
    typePlaceholder: "Type a message...",
    assistant: "AI Assistant",
  },
}

export default function SupernesiaChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [language, setLanguage] = useState("ID")
  const [currentOrder, setCurrentOrder] = useState<{
    ticketNumber: string
    packageName: string
    price: string
    serviceType: string
  } | null>(null)
  const [currentServiceType, setCurrentServiceType] = useState<"web" | "mobile" | "software" | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const emojiPickerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Add isDarkMode state
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize language from localStorage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language")
      if (savedLanguage) {
        setLanguage(savedLanguage)
      }
    }

    const handleLanguageChange = (e: CustomEvent) => {
      setLanguage(e.detail)
      // Reset messages when language changes to update welcome message
      setMessages([])
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
        setShowEmojiPicker(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Get current translations
  const t = translations[language as keyof typeof translations]

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        text: t.welcome,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.options,
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length, t])

  // Handle sending a message
  const handleSendMessage = (text: string) => {
    // Add user message
    const userMessage: Message = {
      text,
      timestamp: new Date(),
      sender: "user",
      status: "sent",
      active: false,
      typing: false,
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot typing
    setIsTyping(true)

    // Process the message and respond
    setTimeout(() => {
      setIsTyping(false)
      const botResponse = generateBotResponse(text.toLowerCase())
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  // Add emoji to input
  const addEmoji = (emoji: any) => {
    setInputValue((prev) => prev + emoji.native)
    setShowEmojiPicker(false)
    inputRef.current?.focus()
  }

  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // Show success message
      const successMessage: Message = {
        text: t.ticketCopied,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
      }
      setMessages((prev) => [...prev, successMessage])
    })
  }

  // Generate plan description based on service type and plan name
  const getPlanDetails = (serviceType: string, planName: string) => {
    let plans
    let serviceName = ""

    if (serviceType === "web") {
      plans = webPlans
      serviceName = "Web Development"
    } else if (serviceType === "mobile") {
      plans = mobilePlans
      serviceName = "Mobile & Desktop Apps"
    } else if (serviceType === "software") {
      plans = softwarePlans
      serviceName = "Custom Software"
    } else {
      return null
    }

    const plan = plans.find((p) => p.name === planName)
    if (!plan) return null

    return {
      ...plan,
      serviceName,
    }
  }

  // Generate bot response based on user input
  const generateBotResponse = (input: string): Message => {
    // Check for greetings
    if (input.includes("halo") || input.includes("hai") || input.includes("hello") || input.includes("hi")) {
      return {
        text: t.greeting,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.options,
      }
    }

    // Check for keywords or option values
    if (input === "layanan" || input.includes("layanan") || input.includes("service")) {
      return {
        text: t.services,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.serviceOptions,
      }
    } else if (input === "harga" || input.includes("harga") || input.includes("biaya") || input.includes("price")) {
      return {
        text: t.pricing,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.pricingOptions,
      }
    } else if (input === "harga-web" || input.includes("harga-web")) {
      setCurrentServiceType("web")
      return {
        text: t.webPricing,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.pricingWebOptions,
      }
    } else if (input === "harga-mobile" || input.includes("harga-mobile")) {
      setCurrentServiceType("mobile")
      return {
        text: t.mobilePricing,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.pricingMobileOptions,
      }
    } else if (input === "harga-software" || input.includes("harga-software")) {
      setCurrentServiceType("software")
      return {
        text: t.softwarePricing,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.pricingSoftwareOptions,
      }
    } else if (input === "paket" || input.includes("paket") || input.includes("info")) {
      return {
        text: t.packages,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.packageOptions,
      }
    } else if (
      input === "hubungi" ||
      input.includes("hubungi") ||
      input.includes("kontak") ||
      input.includes("contact")
    ) {
      return {
        text: t.contact,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.contactOptions,
      }
    } else if (input === "web" || input.includes("web development")) {
      setCurrentServiceType("web")
      return {
        text: t.webDev,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.webDevOptions,
      }
    } else if (input === "mobile" || input.includes("mobile") || input.includes("app")) {
      setCurrentServiceType("mobile")
      return {
        text: t.mobileDev,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.mobileDevOptions,
      }
    } else if (input === "software" || input.includes("software") || input.includes("custom")) {
      setCurrentServiceType("software")
      return {
        text: t.softwareDev,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.softwareDevOptions,
      }
    } else if (input === "web-basic" || input.includes("web-basic")) {
      const plan = getPlanDetails("web", "SuperNeo")
      if (!plan)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const features = plan.features.map((feature) => `• ${feature}`).join("\n")
      const text = `${plan.name} (${plan.price}) mencakup:\n${features}\n\n${plan.description}`

      return {
        text,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: [
          { text: `Pesan ${plan.name}`, value: "pesan-web-basic" },
          { text: "Lihat Paket Lain", value: "harga-web" },
        ],
      }
    } else if (input === "web-standard" || input.includes("web-standard")) {
      const plan = getPlanDetails("web", "SuperPro")
      if (!plan)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const features = plan.features.map((feature) => `• ${feature}`).join("\n")
      const text = `${plan.name} (${plan.price}) mencakup:\n${features}\n\n${plan.description}`

      return {
        text,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: [
          { text: `Pesan ${plan.name}`, value: "pesan-web-standard" },
          { text: "Lihat Paket Lain", value: "harga-web" },
        ],
      }
    } else if (input === "web-premium" || input.includes("web-premium")) {
      const plan = getPlanDetails("web", "SuperPremium")
      if (!plan)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const features = plan.features.map((feature) => `• ${feature}`).join("\n")
      const text = `${plan.name} (${plan.price}) mencakup:\n${features}\n\n${plan.description}`

      return {
        text,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: [
          { text: `Pesan ${plan.name}`, value: "pesan-web-premium" },
          { text: "Lihat Paket Lain", value: "harga-web" },
        ],
      }
    } else if (input === "mobile-basic" || input.includes("mobile-basic")) {
      const plan = getPlanDetails("mobile", "SuperNeo")
      if (!plan)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const features = plan.features.map((feature) => `• ${feature}`).join("\n")
      const text = `${plan.name} (${plan.price}) mencakup:\n${features}\n\n${plan.description}`

      return {
        text,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: [
          { text: `Pesan ${plan.name}`, value: "pesan-mobile-basic" },
          { text: "Lihat Paket Lain", value: "harga-mobile" },
        ],
      }
    } else if (input === "mobile-standard" || input.includes("mobile-standard")) {
      const plan = getPlanDetails("mobile", "SuperPro")
      if (!plan)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const features = plan.features.map((feature) => `• ${feature}`).join("\n")
      const text = `${plan.name} (${plan.price}) mencakup:\n${features}\n\n${plan.description}`

      return {
        text,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: [
          { text: `Pesan ${plan.name}`, value: "pesan-mobile-standard" },
          { text: "Lihat Paket Lain", value: "harga-mobile" },
        ],
      }
    } else if (input === "mobile-premium" || input.includes("mobile-premium")) {
      const plan = getPlanDetails("mobile", "SuperPremium")
      if (!plan)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const features = plan.features.map((feature) => `• ${feature}`).join("\n")
      const text = `${plan.name} (${plan.price}) mencakup:\n${features}\n\n${plan.description}`

      return {
        text,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: [
          { text: `Pesan ${plan.name}`, value: "pesan-mobile-premium" },
          { text: "Lihat Paket Lain", value: "harga-mobile" },
        ],
      }
    } else if (input === "software-basic" || input.includes("software-basic")) {
      const plan = getPlanDetails("software", "SuperNeo")
      if (!plan)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const features = plan.features.map((feature) => `• ${feature}`).join("\n")
      const text = `${plan.name} (${plan.price}) mencakup:\n${features}\n\n${plan.description}`

      return {
        text,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: [
          { text: `Pesan ${plan.name}`, value: "pesan-software-basic" },
          { text: "Lihat Paket Lain", value: "harga-software" },
        ],
      }
    } else if (input === "software-standard" || input.includes("software-standard")) {
      const plan = getPlanDetails("software", "SuperPro")
      if (!plan)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const features = plan.features.map((feature) => `• ${feature}`).join("\n")
      const text = `${plan.name} (${plan.price}) mencakup:\n${features}\n\n${plan.description}`

      return {
        text,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: [
          { text: `Pesan ${plan.name}`, value: "pesan-software-standard" },
          { text: "Lihat Paket Lain", value: "harga-software" },
        ],
      }
    } else if (input === "software-premium" || input.includes("software-premium")) {
      const plan = getPlanDetails("software", "SuperPremium")
      if (!plan)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const features = plan.features.map((feature) => `• ${feature}`).join("\n")
      const text = `${plan.name} (${plan.price}) mencakup:\n${features}\n\n${plan.description}`

      return {
        text,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: [
          { text: `Pesan ${plan.name}`, value: "pesan-software-premium" },
          { text: "Lihat Paket Lain", value: "harga-software" },
        ],
      }
    } else if (input === "whatsapp" || input.includes("whatsapp")) {
      window.open("https://wa.me/6281281892625", "_blank")
      return {
        text: t.whatsapp,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.whatsappOptions,
      }
    } else if (input === "menu" || input.includes("menu")) {
      return {
        text: t.welcome,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.options,
      }
    } else if (input.startsWith("pesan-")) {
      // Handle all order types
      const parts = input.split("-")
      if (parts.length < 3)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const serviceType = parts[1] // web, mobile, software
      const planType = parts[2] // basic, standard, premium

      let planName
      if (planType === "basic") planName = "SuperNeo"
      else if (planType === "standard") planName = "SuperPro"
      else if (planType === "premium") planName = "SuperPremium"
      else planName = "Unknown"

      const plan = getPlanDetails(serviceType, planName)
      if (!plan)
        return {
          text: t.fallback,
          timestamp: new Date(),
          sender: "bot",
          status: "delivered",
          active: false,
          typing: false,
        }

      const ticketNumber = generateTicketNumber()
      const orderInfo = {
        ticketNumber,
        packageName: plan.name,
        price: plan.price,
        serviceType: plan.serviceName,
      }
      setCurrentOrder(orderInfo)

      const orderText = `${t.orderSuccess} ${ticketNumber}\n\n${t.orderDetails
        .replace("{package}", orderInfo.packageName)
        .replace("{price}", orderInfo.price)
        .replace("{service}", orderInfo.serviceType)}`

      return {
        text: orderText,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.orderOptions,
        orderInfo,
      }
    } else if (input === "order-whatsapp" || input.includes("order-whatsapp")) {
      if (currentOrder) {
        const whatsappMessage = encodeURIComponent(
          t.orderWhatsappMessage
            .replace("{ticket}", currentOrder.ticketNumber)
            .replace("{package}", currentOrder.packageName)
            .replace("{price}", currentOrder.price)
            .replace("{service}", currentOrder.serviceType),
        )
        window.open(`https://wa.me/6281281892625?text=${whatsappMessage}`, "_blank")
      }
      return {
        text: "✅ Anda akan diarahkan ke WhatsApp dengan informasi pesanan Anda. Tim kami siap membantu!",
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
      }
    } else if (input === "copy-ticket" || input.includes("copy-ticket")) {
      if (currentOrder) {
        copyToClipboard(currentOrder.ticketNumber)
      }
      return {
        text: "",
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
      }
    } else {
      // Fallback message
      return {
        text: t.fallback,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.options,
      }
    }
  }

  // Handle option click
  const handleOptionClick = (value: string) => {
    handleSendMessage(value)
  }

  // Initialize dark mode from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("darkMode") === "true"
      setIsDarkMode(savedDarkMode)
    }
  }, [])

  // Public method to open the chatbot
  const openChatbot = () => {
    setIsOpen(true)
  }

  // Expose the openChatbot method to the window object
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.openSupernesiaChatbot = openChatbot
    }
    return () => {
      if (typeof window !== "undefined") {
        // @ts-ignore
        delete window.openSupernesiaChatbot
      }
    }
  }, [])

  return (
    <>
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/6281281892625"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50"
        aria-label="Chat on WhatsApp"
      >
        <Image src="/wa.png" alt="Chat on WhatsApp" width={48} height={48} className="object-contain" />
      </Link>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-secondary rounded-full shadow-lg hover:bg-secondary/90 transition-colors relative w-12 h-12 p-0"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <X className="h-6 w-6 m-auto" />
          ) : (
            <>
              <Image
                src="/robot.png"
                alt="AI Assistant"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-full"
              />
              <span className="absolute -top-1 -right-1 bg-green-500 w-3 h-3 rounded-full"></span>
            </>
          )}
        </button>

        {/* Chat Window */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-secondary text-white p-4 flex items-center">
              <Image src="/robot.png" alt="AI Assistant" width={30} height={30} className="h-6 w-auto mr-2" />
              <span className="font-medium">{t.assistant}</span>
              <span className="ml-2 bg-green-500 w-2 h-2 rounded-full"></span>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${message.sender === "user" ? "flex justify-end" : "flex justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-black"
                        : "bg-white dark:bg-gray-700 shadow-sm text-gray-800 dark:text-white"
                    }`}
                  >
                    {message.text && <p className="whitespace-pre-line">{message.text}</p>}

                    {/* Order Info Display */}
                    {message.orderInfo && (
                      <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-green-700 dark:text-green-300">
                            {message.orderInfo.ticketNumber}
                          </span>
                          <button
                            onClick={() => copyToClipboard(message.orderInfo!.ticketNumber)}
                            className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-300">
                          <div>📦 {message.orderInfo.packageName}</div>
                          <div>💰 {message.orderInfo.price}</div>
                          <div>🔧 {message.orderInfo.serviceType}</div>
                        </div>
                      </div>
                    )}

                    {message.options && (
                      <div className="mt-3 flex flex-col gap-2">
                        {message.options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionClick(option.value)}
                            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white px-3 py-1.5 rounded text-sm text-left transition-colors"
                          >
                            {option.text}
                          </button>
                        ))}
                      </div>
                    )}
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white dark:bg-gray-700 shadow-sm rounded-lg p-3 max-w-[80%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t dark:border-gray-700 relative">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (inputValue.trim()) {
                    handleSendMessage(inputValue)
                  }
                }}
                className="flex items-center"
              >
                <input
                  type="text"
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t.typePlaceholder}
                  className="flex-1 border dark:border-gray-600 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-secondary dark:bg-gray-800 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="bg-gray-100 dark:bg-gray-700 px-3 py-2 border-t border-b border-gray-300 dark:border-gray-600"
                >
                  <Smile className="h-5 w-5 text-gray-500 dark:text-gray-300" />
                </button>
                <button type="submit" className="bg-secondary text-white px-3 py-2 rounded-r-lg hover:bg-secondary/90">
                  <Send className="h-5 w-5" />
                </button>
              </form>

              {showEmojiPicker && (
                <div ref={emojiPickerRef} className="absolute bottom-16 right-0 z-10">
                  <Picker
                    data={data}
                    onEmojiSelect={addEmoji}
                    theme={isDarkMode ? "dark" : "light"}
                    previewPosition="none"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
