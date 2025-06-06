"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Send, Phone, Smile } from "lucide-react"
import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react"

type Message = {
  text: string
  timestamp: Date
  sender: "user" | "bot"
  status: "sending" | "sent" | "delivered" | "read"
  active: boolean
  typing: boolean
  options?: { text: string; value: string }[]
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
      "Kami memiliki beberapa paket harga untuk layanan kami:\n\n1. SuperNeo: Rp 1.250.000\n2. SuperPro: Rp 2.500.000\n3. SuperPremium: Rp 5.500.000\n\nIngin tahu detail lebih lanjut tentang paket tertentu?",
    pricingOptions: [
      { text: "SuperNeo", value: "basic" },
      { text: "SuperPro", value: "standard" },
      { text: "SuperPremium", value: "premium" },
    ],
    packages:
      "Kami menawarkan 3 paket utama:\n\n1. SuperNeo: Cocok untuk bisnis baru yang membutuhkan website sederhana\n2. SuperPro: Untuk website dengan fitur canggih dan desain eksklusif\n3. SuperPremium: Solusi lengkap dengan fitur premium dan dukungan prioritas\n\nPaket mana yang ingin Anda ketahui lebih detail?",
    packageOptions: [
      { text: "SuperNeo", value: "basic" },
      { text: "SuperPro", value: "standard" },
      { text: "SuperPremium", value: "premium" },
    ],
    contact:
      "Anda dapat menghubungi kami melalui:\n\nWhatsApp: 081281892625\nEmail: info@supernesia.com\nAlamat: Jakarta Timur, Indonesia\n\nIngin kami menghubungi Anda?",
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
    basicPlan:
      "SuperNeo (Rp 1.250.000) mencakup:\n• 2 Halaman statis\n• Domain: .com atau .net (1 tahun)\n• Hosting 1GB SSD (lokal/Asia), Bandwidth 10GB\n• Desain responsif & User Friendly\n• Setup email domain (1 akun)\n\nCocok untuk freelancer, mahasiswa, dan UMKM yang ingin go digital dengan budget terbatas.",
    basicPlanOptions: [
      { text: "Pesan Basic Plan", value: "pesan-basic" },
      { text: "Lihat Paket Lain", value: "paket" },
    ],
    standardPlan:
      "SuperPro (Rp 2.500.000) mencakup:\n• 6+ Halaman (maksimal 8 halaman)\n• Domain: .com, .net, .co.id (1 tahun)\n• Hosting 2GB SSD (lokal/Asia), Bandwidth 30GB\n• Desain responsif & User Friendly\n• Integrasi media sosial\n• Fitur chat WhatsApp\n• UI/UX desain (tanpa template)\n\nSempurna untuk website profesional dan eksklusif dengan fitur lengkap.",
    standardPlanOptions: [
      { text: "Pesan Standard Plan", value: "pesan-standard" },
      { text: "Lihat Paket Lain", value: "paket" },
    ],
    premiumPlan:
      "SuperPremium (Rp 5.500.000) mencakup:\n• 10+ Halaman Custom (maksimal 12 halaman)\n• Domain: .com, .net, .co.id, .id, .org (1 tahun)\n• Hosting 5GB SSD, Bandwidth Unmetered\n• Full CMS Dinamis (admin dashboard)\n• Animasi ringan (hero, hover, fade)\n• 4 Email Bisnis\n• Gratis AI Chatbot\n\nSolusi lengkap dengan fitur premium dan dukungan prioritas.",
    premiumPlanOptions: [
      { text: "Pesan Premium Plan", value: "pesan-premium" },
      { text: "Lihat Paket Lain", value: "paket" },
    ],
    whatsapp: "Anda akan diarahkan ke WhatsApp untuk berbicara dengan tim kami. Ada hal lain yang bisa kami bantu?",
    whatsappOptions: [{ text: "Kembali ke Menu", value: "menu" }],
    orderBasic:
      "✅ Baik, pesanan Basic Plan kamu sudah kami terima!\nAgar kami bisa lanjut prosesnya, silakan kirimkan:\n• Nama lengkap\n• Kebutuhan spesifik (misal: company profile, blog, dsb)\n• Budget (jika ada tambahan request)\n\n✨ Setelah itu, kami akan arahkan kamu ke WhatsApp untuk diskusi lebih lanjut ya!\n\nKlik tombol berikut untuk lanjut ke WA 🚀",
    orderStandard:
      "✅ Baik, pesanan Standard Plan kamu sudah kami terima!\nAgar kami bisa lanjut prosesnya, silakan kirimkan:\n• Nama lengkap\n• Kebutuhan spesifik (misal: company profile, blog, dsb)\n• Budget (jika ada tambahan request)\n\n✨ Setelah itu, kami akan arahkan kamu ke WhatsApp untuk diskusi lebih lanjut ya!\n\nKlik tombol berikut untuk lanjut ke WA 🚀",
    orderPremium:
      "✅ Baik, pesanan Premium Plan kamu sudah kami terima!\nAgar kami bisa lanjut prosesnya, silakan kirimkan:\n• Nama lengkap\n• Kebutuhan spesifik (misal: company profile, blog, dsb)\n• Budget (jika ada tambahan request)\n\n✨ Setelah itu, kami akan arahkan kamu ke WhatsApp untuk diskusi lebih lanjut ya!\n\nKlik tombol berikut untuk lanjut ke WA 🚀",
    orderOptions: [
      { text: "Lanjut ke WhatsApp", value: "whatsapp" },
      { text: "Kembali ke Menu", value: "menu" },
    ],
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
      "We have several pricing packages for our services:\n\n1. SuperNeo: Rp 1,250,000\n2. SuperPro: Rp 2,500,000\n3. SuperPremium: Rp 5,500,000\n\nWould you like to know more details about a specific package?",
    pricingOptions: [
      { text: "SuperNeo", value: "basic" },
      { text: "SuperPro", value: "standard" },
      { text: "SuperPremium", value: "premium" },
    ],
    packages:
      "We offer 3 main packages:\n\n1. SuperNeo: Suitable for new businesses that need a simple website\n2. SuperPro: For websites with advanced features and exclusive design\n3. SuperPremium: Complete solution with premium features and priority support\n\nWhich package would you like to know more about?",
    packageOptions: [
      { text: "SuperNeo", value: "basic" },
      { text: "SuperPro", value: "standard" },
      { text: "SuperPremium", value: "premium" },
    ],
    contact:
      "You can contact us through:\n\nWhatsApp: 081281892625\nEmail: info@supernesia.com\nAddress: East Jakarta, Indonesia\n\nWould you like us to contact you?",
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
    basicPlan:
      "SuperNeo (Rp 1,250,000) includes:\n• 2 Static Pages\n• Domain: .com or .net (1 year)\n• 1GB SSD Hosting (local/Asia), 10GB Bandwidth\n• Responsive & User-Friendly Design\n• Domain email setup (1 account)\n\nSuitable for freelancers, students, and SMEs who want to go digital on a limited budget.",
    basicPlanOptions: [
      { text: "Order Basic Plan", value: "pesan-basic" },
      { text: "View Other Packages", value: "paket" },
    ],
    standardPlan:
      "SuperPro (Rp 2,500,000) includes:\n• 6+ Pages (up to 8 pages)\n• Domain: .com, .net, .co.id (1 year)\n• 2GB SSD Hosting (local/Asia), 30GB Bandwidth\n• Responsive & User-Friendly Design\n• Social media integration\n• WhatsApp chat feature\n• UI/UX design (without templates)\n\nPerfect for professional and exclusive websites with complete features.",
    standardPlanOptions: [
      { text: "Order Standard Plan", value: "pesan-standard" },
      { text: "View Other Packages", value: "paket" },
    ],
    premiumPlan:
      "SuperPremium (Rp 5,500,000) includes:\n• 10+ Custom Pages (up to 12 pages)\n• Domain: .com, .net, .co.id, .id, .org (1 year)\n• 5GB SSD Hosting, Unmetered Bandwidth\n• Full Dynamic CMS (admin dashboard)\n• Light animations (hero, hover, fade)\n• 4 Business Emails\n• Free AI Chatbot\n\nComplete solution with premium features and priority support.",
    premiumPlanOptions: [
      { text: "Order Premium Plan", value: "pesan-premium" },
      { text: "View Other Packages", value: "paket" },
    ],
    whatsapp: "You will be directed to WhatsApp to speak with our team. Is there anything else we can help you with?",
    whatsappOptions: [{ text: "Back to Menu", value: "menu" }],
    orderBasic:
      "✅ Great, your Basic Plan order has been received!\nTo proceed, please provide us with:\n• Your full name\n• Specific needs (e.g., company profile, blog, etc.)\n• Budget (if you have additional requests)\n\n✨ After that, we'll direct you to WhatsApp for further discussion!\n\nClick the button below to continue to WhatsApp 🚀",
    orderStandard:
      "✅ Great, your Standard Plan order has been received!\nTo proceed, please provide us with:\n• Your full name\n• Specific needs (e.g., company profile, blog, etc.)\n• Budget (if you have additional requests)\n\n✨ After that, we'll direct you to WhatsApp for further discussion!\n\nClick the button below to continue to WhatsApp 🚀",
    orderPremium:
      "✅ Great, your Premium Plan order has been received!\nTo proceed, please provide us with:\n• Your full name\n• Specific needs (e.g., company profile, blog, etc.)\n• Budget (if you have additional requests)\n\n✨ After that, we'll direct you to WhatsApp for further discussion!\n\nClick the button below to continue to WhatsApp 🚀",
    orderOptions: [
      { text: "Continue to WhatsApp", value: "whatsapp" },
      { text: "Back to Menu", value: "menu" },
    ],
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
      return {
        text: t.softwareDev,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.softwareDevOptions,
      }
    } else if (input === "basic" || input.includes("basic")) {
      return {
        text: t.basicPlan,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.basicPlanOptions,
      }
    } else if (input === "standard" || input.includes("standard")) {
      return {
        text: t.standardPlan,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.standardPlanOptions,
      }
    } else if (input === "premium" || input.includes("premium")) {
      return {
        text: t.premiumPlan,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.premiumPlanOptions,
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
    } else if (input === "pesan-basic" || input.includes("pesan-basic")) {
      return {
        text: t.orderBasic,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.orderOptions,
      }
    } else if (input === "pesan-standard" || input.includes("pesan-standard")) {
      return {
        text: t.orderStandard,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.orderOptions,
      }
    } else if (input === "pesan-premium" || input.includes("pesan-premium")) {
      return {
        text: t.orderPremium,
        timestamp: new Date(),
        sender: "bot",
        status: "delivered",
        active: false,
        typing: false,
        options: t.orderOptions,
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
  <Image
    src="/wa.png"
    alt="Chat on WhatsApp"
    width={48}
    height={48}
    className="object-contain"
  />
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
                    <p className="whitespace-pre-line">{message.text}</p>
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
