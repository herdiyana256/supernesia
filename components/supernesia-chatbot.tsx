"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Send, Download, MessageCircle, Clock, ChevronRight, Sparkles } from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────
type Message = {
  id: string
  text: string
  timestamp: Date
  sender: "user" | "bot"
  options?: { text: string; value: string }[]
}

type LeadState = "name" | "phone" | "email" | "completed"


// ─── Constants ────────────────────────────────────────────────────────────────
const WA_NUMBER = "6281281892625"
const WA_URL = `https://api.whatsapp.com/send/?phone=6281281892625&text&type=phone_number&app_absent=0`

const QUICK_PROMPTS = [
  { label: "🌐 Web Development", value: "layanan-web" },
  { label: "📦 Custom Software", value: "layanan-software" },
  { label: "🤖 AI & Chatbot", value: "layanan-ai" },
  { label: "💰 Tanya Harga", value: "harga" },
  { label: "📞 Hubungi Kami", value: "hubungi" },
]

const GREETINGS = ["halo", "hai", "hello", "hi", "pagi", "siang", "sore", "malam", "hei", "hey", "assalamualaikum", "selamat"]

// ─── Bot Knowledge Base ───────────────────────────────────────────────────────
const BOT_DATA: Record<string, { text: string; options: { text: string; value: string }[] }> = {
  welcome: {
    text: `Halo! 👋 Selamat datang di *Supernesia Creative Technology*! 🚀

Kami siap bantu bisnis kamu tumbuh lebih cepat lewat solusi digital yang tepat sasaran.

Pilih topik di bawah ini, atau ketik pertanyaanmu langsung ya! 😊`,
    options: [
      { text: "🌐 Layanan Kami", value: "layanan" },
      { text: "💰 Tanya Harga", value: "harga" },
      { text: "🏢 Tentang Supernesia", value: "tentang" },
      { text: "📞 Hubungi Kami", value: "hubungi" },
      { text: "💬 Chat WhatsApp", value: "whatsapp" },
    ],
  },

  layanan: {
    text: `✨ *Super Service — Solusi Digital Kami*

Kami menyediakan 4 layanan utama untuk akselerasi bisnis kamu:

🌐 *Web Development*
Landing page, company profile, e-commerce, web app — cepat, responsif & scalable.

📦 *Custom Software*
CRM, Inventory, POS, ERP — sistem dibuat khusus sesuai proses bisnismu.

🔧 *Maintenance & Revamp*
Bug fixing, performance boost, SEO, redesign UI/UX — produk digitalmu tetap prima.

🤖 *Artificial Intelligence*
AI Chatbot, WhatsApp Bot, otomatisasi — layani pelanggan 24/7 tanpa henti!

Mau tahu detail layanan mana? 👇`,
    options: [
      { text: "🌐 Web Development", value: "layanan-web" },
      { text: "📦 Custom Software", value: "layanan-software" },
      { text: "🔧 Maintenance & Revamp", value: "layanan-maintenance" },
      { text: "🤖 Artificial Intelligence", value: "layanan-ai" },
      { text: "🏠 Menu Utama", value: "menu" },
    ],
  },

  "layanan-web": {
    text: `🌐 *Web Development*

Dari zero sampai launch, kami bangun website yang:
✅ Cepat — Lighthouse score 90+
✅ Responsif — sempurna di semua device
✅ SEO-Friendly — mudah ditemukan di Google
✅ Scalable — siap tumbuh bareng bisnismu

*Jenis Website:*
• 🏠 Landing Page
• 🏢 Company Profile
• 🛒 E-Commerce & Toko Online
• 📊 Web App & Dashboard
• 🔌 API Integration
• ⚙️ Admin Panel

Teknologi: Next.js, React, Laravel, Node.js & stack modern lainnya.

Mau diskusi kebutuhan website kamu? Yuk langsung ngobrol! 👇`,
    options: [
      { text: "💬 Tanya Harga di WhatsApp", value: "whatsapp" },
      { text: "◀️ Kembali ke Layanan", value: "layanan" },
    ],
  },

  "layanan-software": {
    text: `📦 *Custom Software Development*

Punya proses bisnis yang unik? Kami buat sistemnya dari nol, khusus buat kamu!

*Sistem yang Pernah Kami Bangun:*
• 👥 CRM (Customer Relationship Management)
• 📦 Inventory & Warehouse Management
• 🛒 Point of Sale (POS)
• 📊 ERP System
• ⚡ Workflow Automation
• 📈 Reporting Dashboard

*Keunggulan kami:*
✅ Custom 100% sesuai kebutuhanmu
✅ Integrasi dengan sistem yang sudah ada
✅ Training & support pasca-launch
✅ Source code milikmu sepenuhnya

Siap diskusi? Tim kami siap kasih estimasi gratis! 👇`,
    options: [
      { text: "💬 Konsultasi Gratis di WA", value: "whatsapp" },
      { text: "◀️ Kembali ke Layanan", value: "layanan" },
    ],
  },

  "layanan-maintenance": {
    text: `🔧 *Maintenance & Revamp*

Website atau app lama kamu butuh perhatian? Kami siap!

*Yang Bisa Kami Kerjain:*
• 🐛 Bug Fixing & Error Resolution
• ⚡ Performance Optimization
• 🔒 Security Patching & Hardening
• 📈 SEO Improvement
• 🎨 UI/UX Redesign & Revamp
• 🔄 Code Refactoring & Modernisasi
• 📱 Responsive Makeover

*Kenapa penting?*
Website yang lambat kehilangan 53% pengunjung! 😱
Kami pastikan produk digitalmu tetap sehat, aman & kompetitif.

Ceritakan masalah website kamu ke tim kami sekarang! 👇`,
    options: [
      { text: "💬 Cerita di WhatsApp", value: "whatsapp" },
      { text: "◀️ Kembali ke Layanan", value: "layanan" },
      { text: "🏠 Menu Utama", value: "menu" },
    ],
  },

  "layanan-ai": {
    text: `🤖 *Artificial Intelligence Solutions*

Otomatisasi bisnis kamu dengan kecerdasan buatan yang benar-benar WORKS!

*Solusi AI Kami:*
• 💬 AI Chatbot untuk Website
• 📱 WhatsApp Bot (auto balas & jualan)
• 📊 Data Analysis & Business Intelligence
• ⚡ Process Automation (RPA)
• 🎯 Recommendation System
• 🔗 AI Integration ke sistem existing

*Benefit nyata:*
✅ Layani pelanggan 24/7 tanpa biaya SDM
✅ Auto-reply WA = leads tidak ada yang miss
✅ Hemat waktu operasional hingga 70%
✅ Keputusan berdasarkan data, bukan feeling

"Bisnis kamu tidur, AI kamu tetap kerja!" 💪

Tertarik? Yuk diskusi estimasinya! 👇`,
    options: [
      { text: "💬 Diskusi di WhatsApp", value: "whatsapp" },
      { text: "◀️ Kembali ke Layanan", value: "layanan" },
    ],
  },

  // Semua harga langsung arahkan ke WhatsApp
  harga: {
    text: `💰 *Tanya Harga Supernesia*

Harga kami transparan dan bisa disesuaikan dengan kebutuhan & budget kamu! 🎯

*3 Tier Paket Tersedia:*
🟡 *SuperNeo* — Untuk UMKM & Startup
🔴 *SuperPro* — Untuk Bisnis Berkembang
🟣 *SuperPremium* — Untuk Enterprise + AI

Kami lebih suka *ngobrol langsung* untuk kasih harga yang paling pas — karena setiap proyek itu unik! 

Tim kami siap respons dalam < 5 menit ⚡

Yuk langsung tanya ke tim kami via WhatsApp! 👇`,
    options: [
      { text: "💬 Tanya Harga di WhatsApp", value: "whatsapp" },
      { text: "🌐 Lihat Layanan Kami", value: "layanan" },
      { text: "🏠 Menu Utama", value: "menu" },
    ],
  },

  "harga-web": {
    text: `💻 *Harga Web Development*

Harga web kami fleksibel, mulai dari landing page sederhana hingga web app kompleks — semua bisa kami kerjakan!

Untuk mendapatkan estimasi yang akurat sesuai kebutuhanmu, yuk langsung ngobrol dengan tim kami via WhatsApp. *Konsultasi gratis!* 🎁

Tim kami akan bantu kamu pilih paket yang paling tepat dan efisien. ⚡`,
    options: [
      { text: "💬 Tanya Harga di WhatsApp", value: "whatsapp" },
      { text: "◀️ Kembali ke Layanan", value: "layanan" },
    ],
  },

  "harga-software": {
    text: `📦 *Harga Custom Software & AI*

Karena setiap bisnis unik, harga custom software bergantung pada kompleksitas fitur, jumlah modul, dan integrasi yang dibutuhkan.

*Konsultasi gratis* — kami akan bantu analisa kebutuhanmu dan berikan estimasi yang transparan dan jujur. Tidak ada biaya tersembunyi! ✅

Yuk ngobrol langsung sama tim kami! 👇`,
    options: [
      { text: "💬 Konsultasi Gratis di WA", value: "whatsapp" },
      { text: "◀️ Kembali ke Layanan", value: "layanan" },
    ],
  },

  "harga-mobile": {
    text: `📱 *Harga Mobile Apps (Android & iOS)*

Dari aplikasi sederhana hingga platform kompleks dengan fitur real-time & AI — kami bisa bantu!

Harga menyesuaikan scope proyek. *Konsultasi gratis* untuk dapatkan estimasi yang paling akurat! 🎁

Tim kami siap diskusi ide aplikasi kamu! 👇`,
    options: [
      { text: "💬 Diskusikan Ide di WA", value: "whatsapp" },
      { text: "◀️ Kembali ke Layanan", value: "layanan" },
    ],
  },

  tentang: {
    text: `🏢 *Supernesia Creative Technology*

"Partnership Over Vendor — kami bukan vendor biasa, kami partner pertumbuhan kamu."

📅 *Berdiri sejak 2024*
Hadir dari visi menjembatani kesenjangan antara bisnis tradisional dan dunia digital.

📍 *Lokasi Operasional*
Gedung Wirausaha Lt. 1, Jakarta Selatan.

*🎯 Visi:*
Menjadi partner digital terpercaya bagi UMKM, bisnis progresif & kalangan akademik.

*💡 Nilai Utama:*
🟡 Impact First — Dampak nyata di setiap keputusan
🔴 Radical Transparency — Jujur, no hidden cost
🔵 Continuous Growth — Selalu berkembang
🟣 Partnership Over Vendor — Mitra jangka panjang

*📊 Track Record:*
• 75+ Project sukses
• 4.9/5 rating klien
• Respon < 5 menit
• 15+ Expert siap membantu`,
    options: [
      { text: "🤝 Partnership & B2B", value: "partnership" },
      { text: "👥 Tim Kami", value: "tim-kami" },
      { text: "⚙️ Cara Kerja Kami", value: "cara-kerja" },
      { text: "📞 Hubungi Kami", value: "hubungi" },
      { text: "🏠 Menu Utama", value: "menu" },
    ],
  },

  partnership: {
    text: `🤝 *Partnership, B2B & SPK*

Ingin bekerja sama dengan Supernesia Creative Technology untuk proyek skala besar, kolaborasi B2B, atau Surat Perintah Kerja (SPK)?

Kami sangat terbuka untuk peluang partnership dan kolaborasi strategis dengan berbagai instansi, perusahaan, maupun institusi pendidikan.

Silakan hubungi Bapak Alex Sitanggang secara langsung melalui email:
📧 *alex.sitanggang@supernesia.id*

Atau langsung chat via WhatsApp untuk diskusi lebih lanjut! 👇`,
    options: [
      { text: "💬 Chat WhatsApp", value: "whatsapp" },
      { text: "◀️ Kembali ke Tentang", value: "tentang" },
      { text: "🏠 Menu Utama", value: "menu" },
    ],
  },

  "tim-kami": {
    text: `👨‍💻 *Tim Supernesia*

Kami dipimpin oleh profesional berpengalaman yang passionate di dunia tech & bisnis:

🎯 *Alex Sitanggang — CEO*
Bertanggung jawab atas visi, strategi & pertumbuhan perusahaan.

💡 *Herdiyan Adam Putra — CIO*
Mengawasi inovasi teknologi & pengembangan sistem.

⚙️ *Rivan Rizky Chaeroni — COO*
Memastikan operasional berjalan lancar & efisien.

Didukung oleh 15+ expert di bidang development, design & digital marketing.

Mau ngobrol langsung sama tim kami? 👇`,
    options: [
      { text: "💬 Chat Tim di WA", value: "whatsapp" },
      { text: "◀️ Kembali ke Tentang", value: "tentang" },
      { text: "🏠 Menu Utama", value: "menu" },
    ],
  },

  "cara-kerja": {
    text: `⚙️ *Cara Kerja Supernesia*

Proses kami yang terbukti menghasilkan produk digital berkualitas:

1️⃣ *Research* 🔍
Pahami bisnis, target market & kompetitor untuk solusi tepat sasaran.

2️⃣ *Planning & Design* 📐
Wireframe, architecture, UI/UX mockup. Kamu approve dulu, baru kami build.

3️⃣ *Development* 💻
Clean code, teknologi terkini & best practice. Progress bisa dipantau real-time.

4️⃣ *Testing & QA* ✅
QA menyeluruh — functionality, performance, security & mobile responsiveness.

5️⃣ *Launch & Support* 🚀
Go live! Kami bantu deploy & tetap standby untuk support & maintenance.

Transparansi adalah prioritas kami! 💪`,
    options: [
      { text: "🚀 Mulai Project di WA", value: "whatsapp" },
      { text: "◀️ Kembali ke Tentang", value: "tentang" },
      { text: "🏠 Menu Utama", value: "menu" },
    ],
  },

  hubungi: {
    text: `📞 *Hubungi Supernesia*

Kami siap membantu kamu kapan saja! 🕐

📱 *WhatsApp (Paling Cepat!)*
+62 812-8189-2625
Respon < 5 menit di jam kerja ⚡

📧 *Email*
info@supernesia.id

📍 *Kantor*
Gedung Wirausaha Lt. 1, Jakarta

⏰ *Jam Operasional*
Senin – Jumat: 08.00 – 17.00 WIB

🌐 *Website*
supernesia.id

Cara paling cepat? Langsung WhatsApp kami! 👇`,
    options: [
      { text: "💬 Chat WhatsApp Sekarang!", value: "whatsapp" },
      { text: "🏠 Menu Utama", value: "menu" },
    ],
  },

  whatsapp: {
    text: `🚀 *Mengarahkan ke WhatsApp...*

Kamu akan segera terhubung dengan tim Supernesia! 

📱 WhatsApp: *+62 812-8189-2625*

Tim kami aktif Senin–Jumat, 08.00–17.00 WIB.
Rata-rata respon: < 5 menit ⚡

Sampai bertemu di sana ya! 👋`,
    options: [{ text: "🏠 Kembali ke Menu", value: "menu" }],
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function genId() { return Math.random().toString(36).substr(2, 9) }
function fmtTime(d: Date) { return d.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) }
function fmtDate(d: Date) {
  return d.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
}

// Minimal markdown: *bold* and _italic_
function renderText(text: string) {
  return text.split("\n").map((line, i) => {
    const html = line
      .replace(/\*(.+?)\*/g, "<strong>$1</strong>")
      .replace(/_(.+?)_/g, "<em>$1</em>")
    return <span key={i} className="block" dangerouslySetInnerHTML={{ __html: html || "&nbsp;" }} />
  })
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function SupernesiaChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showQuickPrompts, setShowQuickPrompts] = useState(false)
  const [hasNewMessage, setHasNewMessage] = useState(false)
  const [leadState, setLeadState] = useState<LeadState>("name")
  const [leadData, setLeadData] = useState({ name: "", phone: "", email: "" })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Realtime clock
  useEffect(() => {
    const t = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  // New message badge
  useEffect(() => {
    if (!isOpen && messages.length > 0) setHasNewMessage(true)
    if (isOpen) setHasNewMessage(false)
  }, [isOpen, messages])

  // Init welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: genId(),
        text: "Halo! 👋 Dengan AI Assistant dari Supernesia di sini.\n\nBoleh tahu dengan siapa kami bicara? (Nama panggilan juga boleh 😊)",
        timestamp: new Date(),
        sender: "bot",
      }])
    }
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen, messages.length])

  // Generate response
  const generateResponse = useCallback((input: string): Omit<Message, "id"> => {
    const lower = input.toLowerCase().trim()

    if (GREETINGS.some(g => lower.includes(g))) {
      return { text: `Halo juga! 😊 Senang bisa bantu kamu!\n\nAda yang bisa Supernesia bantu hari ini?`, timestamp: new Date(), sender: "bot", options: BOT_DATA.welcome.options }
    }
    if (lower.includes("terima kasih") || lower.includes("makasih") || lower.includes("thanks")) {
      return { text: `Sama-sama! 🙏 Senang bisa membantu!\n\nKalau ada pertanyaan lain, jangan ragu tanya ya! 💪`, timestamp: new Date(), sender: "bot", options: [{ text: "🏠 Menu Utama", value: "menu" }, { text: "💬 Chat WhatsApp", value: "whatsapp" }] }
    }

    // Direct key lookup
    const keyMap: Record<string, string> = {
      layanan: "layanan", service: "layanan",
      "layanan-web": "layanan-web", web: "layanan-web",
      "layanan-software": "layanan-software", software: "layanan-software", crm: "layanan-software", erp: "layanan-software",
      "layanan-maintenance": "layanan-maintenance", maintenance: "layanan-maintenance", revamp: "layanan-maintenance",
      "layanan-ai": "layanan-ai", ai: "layanan-ai", chatbot: "layanan-ai",
      harga: "harga", price: "harga", paket: "harga", biaya: "harga",
      "harga-web": "harga-web", "harga-software": "harga-software", "harga-mobile": "harga-mobile",
      mobile: "harga-mobile", apps: "harga-mobile",
      whatsapp: "whatsapp", wa: "whatsapp",
      tentang: "tentang", about: "tentang",
      partnership: "partnership", spk: "partnership", b2b: "partnership", kerjasama: "partnership",
      "tim-kami": "tim-kami", tim: "tim-kami", team: "tim-kami",
      "cara-kerja": "cara-kerja",
      hubungi: "hubungi", kontak: "hubungi", contact: "hubungi",
      menu: "menu", kembali: "menu",
    }

    const botKey = keyMap[lower]
    if (botKey) {
      if (botKey === "menu") return { text: BOT_DATA.welcome.text, timestamp: new Date(), sender: "bot", options: BOT_DATA.welcome.options }
      if (botKey === "whatsapp") {
        setTimeout(() => window.open(WA_URL, "_blank"), 1200)
        return { text: BOT_DATA.whatsapp.text, timestamp: new Date(), sender: "bot", options: BOT_DATA.whatsapp.options }
      }
      const d = BOT_DATA[botKey]
      if (d) return { text: d.text, timestamp: new Date(), sender: "bot", options: d.options }
    }

    // Fuzzy keyword matching
    if (lower.includes("harga") || lower.includes("biaya") || lower.includes("price") || lower.includes("paket") || lower.includes("berapa")) {
      // All harga → WA
      setTimeout(() => window.open(WA_URL, "_blank"), 1800)
      return { text: BOT_DATA.harga.text, timestamp: new Date(), sender: "bot", options: BOT_DATA.harga.options }
    }
    if (lower.includes("web") || lower.includes("website") || lower.includes("landing")) return generateResponse("layanan-web")
    if (lower.includes("software") || lower.includes("sistem") || lower.includes("crm")) return generateResponse("layanan-software")
    if (lower.includes("ai") || lower.includes("bot") || lower.includes("otomatis")) return generateResponse("layanan-ai")
    if (lower.includes("maintenance") || lower.includes("perbaikan") || lower.includes("bug")) return generateResponse("layanan-maintenance")
    if (lower.includes("layanan") || lower.includes("service")) return generateResponse("layanan")
    if (lower.includes("tentang") || lower.includes("about") || lower.includes("perusahaan")) return generateResponse("tentang")
    if (lower.includes("tim") || lower.includes("ceo") || lower.includes("team")) return generateResponse("tim-kami")
    if (lower.includes("kontak") || lower.includes("hubungi") || lower.includes("telp") || lower.includes("email")) return generateResponse("hubungi")
    if (lower.includes("mobile") || lower.includes("android") || lower.includes("ios") || lower.includes("app")) return generateResponse("harga-mobile")

    // Fallback
    return {
      text: `Hmm, aku belum bisa jawab itu secara spesifik 🤔\n\nTapi tim Supernesia siap bantu langsung via WhatsApp! 💬\nAtau pilih menu di bawah ini:`,
      timestamp: new Date(),
      sender: "bot",
      options: [{ text: "💬 Tanya di WhatsApp", value: "whatsapp" }, { text: "🌐 Layanan Kami", value: "layanan" }, { text: "🏠 Menu Utama", value: "menu" }],
    }
  }, [])

  // Send message handler
  const handleSend = useCallback((text: string) => {
    if (!text.trim()) return
    setMessages(prev => [...prev, { id: genId(), text, timestamp: new Date(), sender: "user" }])
    setInputValue("")
    setShowQuickPrompts(false)
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)

      if (leadState === "name") {
        setLeadData(prev => ({ ...prev, name: text }))
        setLeadState("phone")
        setMessages(prev => [...prev, {
          id: genId(),
          text: `Salam kenal, ${text}! Senang mengobrol denganmu. 😊\n\nBoleh minta nomor WhatsApp atau telepon dari ${text}? Tim sales kami bisa follow up nanti kalau ada kerjasama potensial.`,
          timestamp: new Date(),
          sender: "bot",
        }])
        return
      }

      if (leadState === "phone") {
        setLeadData(prev => ({ ...prev, phone: text }))
        setLeadState("email")
        setMessages(prev => [...prev, {
          id: genId(),
          text: `Siap! Satu data lagi nih, boleh minta alamat email kamu? 📧`,
          timestamp: new Date(),
          sender: "bot",
        }])
        return
      }

      if (leadState === "email") {
        setLeadData(prev => ({ ...prev, email: text }))
        setLeadState("completed")
        setMessages(prev => [...prev, {
          id: genId(),
          text: `Terima kasih atas datanya! 🙏 Tim Supernesia akan menyimpan nomor dan email kamu untuk mempermudah follow up kebutuhan project/SPK / inquiry.\n\nNah, sekarang ada yang bisa Supernesia bantu? Silakan pilih opsi di bawah ya:`,
          timestamp: new Date(),
          sender: "bot",
          options: BOT_DATA.welcome.options,
        }])
        setTimeout(() => setShowQuickPrompts(true), 1500)
        return
      }

      setMessages(prev => [...prev, { ...generateResponse(text.toLowerCase()), id: genId() }])
      setTimeout(() => setShowQuickPrompts(true), 1000)
    }, Math.random() * 400 + 700)
  }, [generateResponse, leadState])

  // Download chat
  const downloadChat = useCallback(() => {
    const header = `SUPERNESIA CREATIVE TECHNOLOGY\nRiwayat Percakapan\nTanggal: ${fmtDate(new Date())}\nWA: +62 812-8189-2625 | Email: info@supernesia.id\n${"─".repeat(50)}\n\n`
    const body = messages.map(m => `[${fmtTime(m.timestamp)}] ${m.sender === "user" ? "🙋 Anda" : "🤖 Supernesia AI"}\n${m.text}\n`).join("\n")
    const footer = `\n${"─".repeat(50)}\nwa.me/${WA_NUMBER} | supernesia.id`
    const blob = new Blob([header + body + footer], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `supernesia-chat-${new Date().toISOString().slice(0, 10)}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }, [messages])

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Google Font ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .sn-chat * { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; }
        .sn-scroll::-webkit-scrollbar { width: 4px; }
        .sn-scroll::-webkit-scrollbar-track { background: transparent; }
        .sn-scroll::-webkit-scrollbar-thumb { background: rgba(217,224,97,0.3); border-radius: 4px; }
        .sn-qs::-webkit-scrollbar { display: none; }
        .sn-qs { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes sn-bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
      `}</style>

      {/* ── WhatsApp Float ── */}
      <Link href={WA_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 group" aria-label="Chat on WhatsApp">
        <div className="relative">
          <Image src="/wa.png" alt="WhatsApp" width={52} height={52}
            className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-200" />
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25 -z-10" />
        </div>
      </Link>

      {/* ── Trigger Button ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #D9E061 0%, #EC5B70 100%)", border: "2px solid rgba(217,224,97,0.4)" }}
          aria-label={isOpen ? "Tutup chat" : "Buka chat"}
        >
          {isOpen ? (
            <X className="h-6 w-6 m-auto text-[#16232A]" strokeWidth={3} />
          ) : (
            <>
              <Image src="/robot.png" alt="Supernesia AI" fill className="object-contain p-1" />
              <span className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#16232A]" />
            </>
          )}
        </button>

        {hasNewMessage && !isOpen && (
          <span className="absolute -top-1 -left-1 bg-[#EC5B70] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce shadow-lg">!</span>
        )}

        {/* ── Chat Window ── */}
        {isOpen && (
          <div
            className="sn-chat fixed bottom-[88px] right-3 left-3 sm:left-auto sm:right-6 sm:w-[370px] md:w-[400px] z-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{
              background: "#16232A",
              maxHeight: "82vh",
              border: "1px solid rgba(217,224,97,0.2)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(217,224,97,0.1)",
            }}
          >

            {/* ── Header ── */}
            <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #1e2f39 0%, #16232A 100%)", borderBottom: "1px solid rgba(217,224,97,0.15)" }}>
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src="/robot.png" alt="AI" fill
                  className="object-contain rounded-full p-0.5"
                  style={{ background: "rgba(217,224,97,0.15)", border: "1.5px solid rgba(217,224,97,0.3)" }} />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2"
                  style={{ borderColor: "#16232A" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm leading-tight" style={{ color: "#D9E061" }}>Supernesia AI</p>
                <p className="text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                  Online · Respon &lt; 5 menit
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1">
                {/* Clock */}
                <div className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full"
                  style={{ background: "rgba(217,224,97,0.12)", color: "#D9E061", border: "1px solid rgba(217,224,97,0.2)", marginRight: "4px" }}>
                  <Clock className="w-3 h-3" />
                  {currentTime.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                </div>

                {/* Download */}
                {messages.length > 1 && (
                  <button onClick={downloadChat} title="Unduh percakapan"
                    className="p-1.5 rounded-lg transition-all hover:bg-white/10 opacity-75 hover:opacity-100"
                    style={{ color: "#D9E061" }}>
                    <Download className="w-4 h-4" />
                  </button>
                )}

                {/* Minimize/Close */}
                <button onClick={() => setIsOpen(false)} title="Tutup (Minimize)"
                  className="p-1 rounded-lg transition-all hover:bg-white/10 opacity-75 hover:opacity-100"
                  style={{ color: "rgba(255,255,255,0.7)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Date bar */}
            <div className="flex items-center gap-2 px-4 py-2 flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>{fmtDate(currentTime)}</span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>

            {/* ── Messages ── */}
            <div className="sn-scroll flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 0, background: "#16232A" }}>
              {messages.map(msg => (
                <div key={msg.id}
                  className={`flex items-end gap-2 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>

                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full flex-shrink-0 overflow-hidden flex-shrink-0"
                      style={{ background: "rgba(217,224,97,0.15)", border: "1px solid rgba(217,224,97,0.3)" }}>
                      <Image src="/robot.png" alt="Bot" width={24} height={24} className="object-contain p-0.5" />
                    </div>
                  )}

                  <div className={`max-w-[83%] flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                    {/* Bubble */}
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.sender === "user" ? "rounded-br-sm" : "rounded-bl-sm"}`}
                      style={
                        msg.sender === "user"
                          ? { background: "linear-gradient(135deg, #D9E061, #b8bc45)", color: "#16232A" }
                          : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.08)" }
                      }
                    >
                      <div className="space-y-0.5 font-medium">{renderText(msg.text)}</div>
                    </div>

                    {/* Options */}
                    {msg.options && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {msg.options.map((opt, i) => (
                          <button key={i} onClick={() => handleSend(opt.value)}
                            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                            style={{ background: "rgba(217,224,97,0.1)", border: "1.5px solid rgba(217,224,97,0.35)", color: "#D9E061" }}>
                            {opt.text}
                            <ChevronRight className="w-3 h-3 opacity-60" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Time */}
                    <span className="text-[10px] mt-1 px-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {fmtTime(msg.timestamp)}{msg.sender === "user" && " ✓✓"}
                    </span>
                  </div>
                </div>
              ))}

              {/* Typing */}
              {isTyping && (
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 overflow-hidden"
                    style={{ background: "rgba(217,224,97,0.15)", border: "1px solid rgba(217,224,97,0.3)" }}>
                    <Image src="/robot.png" alt="" width={24} height={24} className="object-contain p-0.5" />
                  </div>
                  <div className="rounded-2xl rounded-bl-sm px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex items-center gap-1">
                      {[0, 0.18, 0.36].map((delay, i) => (
                        <div key={i} className="w-2 h-2 rounded-full"
                          style={{ background: "#D9E061", animation: `sn-bounce 1.2s ease-in-out ${delay}s infinite` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* ── Quick Prompts ── */}
            {showQuickPrompts && (
              <div className="px-3 py-2 flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.03)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3 h-3" style={{ color: "#D9E061" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>Pertanyaan Populer</span>
                </div>
                <div className="sn-qs flex gap-1.5 overflow-x-auto pb-0.5">
                  {QUICK_PROMPTS.map((p, i) => (
                    <button key={i} onClick={() => handleSend(p.value)}
                      className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 hover:scale-105"
                      style={{ background: "rgba(217,224,97,0.1)", color: "#D9E061", border: "1px solid rgba(217,224,97,0.25)" }}>
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Input ── */}
            <div className="px-3 py-3 flex-shrink-0"
              style={{ background: "#16232A", borderTop: "1px solid rgba(217,224,97,0.12)" }}>
              <form onSubmit={e => { e.preventDefault(); handleSend(inputValue) }}
                className="flex items-center gap-2">

                {/* WA shortcut icon */}
                <button type="button" onClick={() => handleSend("whatsapp")}
                  className="flex-shrink-0 p-2 rounded-full transition-all hover:scale-110"
                  style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)" }}
                  title="Chat WhatsApp">
                  <MessageCircle className="w-4 h-4" style={{ color: "#25d366" }} />
                </button>

                <input ref={inputRef} type="text" value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder="Ketik pesan atau pertanyaan..."
                  className="flex-1 rounded-full px-4 py-2 text-sm outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(217,224,97,0.2)",
                    color: "rgba(255,255,255,0.9)",
                    fontFamily: "inherit",
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(217,224,97,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.09)" }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(217,224,97,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)" }}
                />

                <button type="submit" disabled={!inputValue.trim()}
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:hover:scale-100"
                  style={{ background: "linear-gradient(135deg, #D9E061, #b8bc45)" }}>
                  <Send className="w-4 h-4 text-[#16232A]" strokeWidth={2.5} />
                </button>
              </form>

              <p className="text-center text-[10px] mt-2" style={{ color: "rgba(255,255,255,0.2)" }}>
                Powered by <span style={{ color: "#D9E061" }}>Supernesia</span> · supernesia.id
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
