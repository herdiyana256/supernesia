import { usePathname } from 'next/navigation'

const tickerContent: Record<string, string[]> = {
  '/': [
    '🚀 We turn ideas into digital products',
    '⚡ Web · Mobile · AI · Custom Software',
    '🎯 75+ Projects delivered across Indonesia',
    '💡 From MVP to Enterprise — we build it all',
    '🔥 Trusted by 100+ businesses',
    '✨ Make it real. Make it super.',
  ],
  '/layanan': [
    '🌐 Web Development — fast, responsive, scalable',
    '📱 Mobile Apps — iOS · Android · Flutter',
    '🤖 AI & Automation — work smarter, not harder',
    '🎨 UI/UX Design — pixel-perfect, user-first',
    '💻 Custom Software — built exactly how you need it',
    '🔧 Maintenance & Revamp — we keep your product healthy',
    '💳 Payment Gateway ready — Midtrans · Xendit',
  ],
  '/tentang': [
    '👋 Hello, we are Supernesia',
    '🏢 Founded 2024 · Jakarta, Indonesia',
    '🧠 15+ Expert engineers & designers',
    '❤️ Partnership over vendor — we grow with you',
    '🏆 4.9/5 rating dari klien kami',
    '🚀 50+ brands trusted us to build their digital future',
  ],
  '/kontak': [
    '📞 WhatsApp: 0812-8189-2625',
    '✉️ info@supernesia.id',
    '⏱️ Respon dalam 5 menit di jam kerja',
    '📍 Gedung Wirausaha, HR Rasuna Said · Jakarta Selatan',
    '🕐 Office Hour: Senin – Jumat 08.00 – 17.00',
    '💬 Free konsultasi — no commitment needed',
  ],
}

export function useTickerContent() {
  const pathname = usePathname()
  return tickerContent[pathname] || tickerContent['/']
}
