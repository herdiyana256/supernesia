"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"

const portfolios = [
  {
    id: 1,
    title: 'Portal Berita Nabi — Saintek Muhammadiyah',
    client: 'Universitas Saintek Muhammadiyah',
    category: 'Web Development',
    year: '2024',
    description: 'Portal berita dan konten islami untuk civitas akademika universitas dengan fitur membership dan kategori konten.',
    tech: ['Next.js', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
    results: 'Traffic naik 300% dalam 3 bulan pertama'
  },
  {
    id: 2,
    title: 'Sistem POS & Inventory Retail',
    client: 'Retail Client',
    category: 'Custom Software',
    year: '2024',
    description: 'Point of Sale terintegrasi dengan manajemen stok real-time, laporan penjualan otomatis, dan multi-kasir.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    results: 'Proses checkout 60% lebih cepat'
  },
  {
    id: 3,
    title: 'HR & Absensi Management System',
    client: 'Perusahaan Manufaktur',
    category: 'Custom Software',
    year: '2024',
    description: 'Sistem HRIS lengkap: absensi fingerprint/GPS, payroll otomatis, cuti online, dan dashboard HR.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    results: 'Hemat 40 jam/bulan proses administrasi HR'
  },
  {
    id: 4,
    title: 'Learning Management System (LMS)',
    client: 'Lembaga Pendidikan',
    category: 'Web Development',
    year: '2024',
    description: 'Platform e-learning dengan video course, kuis interaktif, sertifikat otomatis, dan dashboard progress siswa.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
    results: '500+ siswa aktif di bulan pertama'
  },
  {
    id: 5,
    title: 'Aplikasi Mobile Delivery & Tracking',
    client: 'Startup Logistik',
    category: 'Mobile Apps',
    year: '2025',
    description: 'App kurir dan pelanggan dengan real-time GPS tracking, notifikasi WhatsApp, dan laporan pengiriman.',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800',
    results: 'On-time delivery rate 94%'
  },
  {
    id: 6,
    title: 'Dashboard Analytics & BI',
    client: 'Perusahaan E-commerce',
    category: 'Custom Software',
    year: '2025',
    description: 'Business intelligence dashboard dengan visualisasi data penjualan, prediksi stok, dan laporan real-time.',
    tech: ['React', 'Python', 'Tableau API'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    results: 'Keputusan bisnis 3x lebih cepat'
  },
  {
    id: 7,
    title: 'WhatsApp Chatbot CS Otomatis',
    client: 'Brand Fashion',
    category: 'AI & Automation',
    year: '2025',
    description: 'Bot WhatsApp Business dengan AI untuk menjawab pertanyaan produk, cek stok, dan proses order 24/7.',
    tech: ['Node.js', 'OpenAI API', 'WhatsApp Business API'],
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800',
    results: 'Respon time dari 4 jam → 30 detik'
  },
  {
    id: 8,
    title: 'Sistem Manajemen Aset & Properti',
    client: 'Perusahaan Properti',
    category: 'Custom Software',
    year: '2025',
    description: 'Platform manajemen aset gedung, jadwal maintenance, kontrak tenant, dan laporan keuangan properti.',
    tech: ['React', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    results: 'Efisiensi operasional naik 45%'
  },
  {
    id: 9,
    title: 'UI/UX Redesign — Fintech App',
    client: 'Startup Fintech',
    category: 'UI/UX Design',
    year: '2025',
    description: 'Redesign total aplikasi fintech: user research, wireframing, design system, dan prototype siap development.',
    tech: ['Figma', 'Principle', 'Maze'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    results: 'User retention naik 68% setelah redesign'
  },
  {
    id: 10,
    title: 'E-Commerce Multi-Vendor Platform',
    client: 'Marketplace UMKM',
    category: 'Web Development',
    year: '2025',
    description: 'Marketplace dengan fitur multi-vendor, manajemen toko, sistem review, dan integrasi Midtrans & Xendit.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Midtrans'],
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800',
    results: '150+ UMKM onboard dalam 2 bulan'
  },
  {
    id: 11,
    title: 'Sistem Manajemen Rumah Sakit',
    client: 'Klinik Swasta Jakarta',
    category: 'Custom Software',
    year: '2025',
    description: 'Sistem rekam medis digital, antrian pasien, manajemen dokter & jadwal, billing otomatis.',
    tech: ['React', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800',
    results: 'Waktu administrasi turun 70%'
  },
  {
    id: 12,
    title: 'Aplikasi Koperasi Digital',
    client: 'Koperasi Simpan Pinjam',
    category: 'Custom Software',
    year: '2025',
    description: 'Sistem simpan pinjam digital dengan approval online, laporan keuangan, dan notifikasi cicilan.',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    results: '200+ anggota aktif di bulan pertama'
  },
  {
    id: 13,
    title: 'Platform Booking & Reservasi',
    client: 'Hotel Butik Bandung',
    category: 'Web Development',
    year: '2025',
    description: 'Website hotel dengan sistem booking real-time, payment gateway, dan manajemen kamar.',
    tech: ['Next.js', 'Stripe', 'Midtrans'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    results: 'Booking online naik 85%'
  },
  {
    id: 14,
    title: 'Sistem Absensi GPS Mobile',
    client: 'Perusahaan Konstruksi',
    category: 'Mobile Apps',
    year: '2025',
    description: 'Absensi lapangan berbasis GPS dengan foto selfie, geofencing, dan laporan harian otomatis.',
    tech: ['Flutter', 'Firebase', 'Google Maps'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    results: 'Akurasi absensi naik dari 60% → 99%'
  },
  {
    id: 15,
    title: 'AI Document Processor',
    client: 'Firma Hukum',
    category: 'AI & Automation',
    year: '2025',
    description: 'Otomatisasi ekstraksi data dari dokumen legal, kontrak, dan akta menggunakan AI OCR.',
    tech: ['Python', 'OpenAI', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800',
    results: 'Review dokumen 10x lebih cepat'
  },
  {
    id: 16,
    title: 'Toko Online Fashion Brand',
    client: 'Brand Lokal Jakarta',
    category: 'Web Development',
    year: '2025',
    description: 'E-commerce fashion dengan lookbook, size guide interaktif, wishlist, dan integrasi Shopee/Tokopedia.',
    tech: ['Next.js', 'Sanity CMS', 'Xendit'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    results: 'Konversi meningkat 120% vs sosmed only'
  },
  {
    id: 17,
    title: 'Sistem ERP Manufaktur',
    client: 'Pabrik Garmen Tangerang',
    category: 'Custom Software',
    year: '2025',
    description: 'ERP terintegrasi: produksi, QC, pengiriman, dan laporan profit/loss per SKU.',
    tech: ['React', 'Django', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800',
    results: 'Efisiensi produksi naik 35%'
  },
  {
    id: 18,
    title: 'Mobile Banking Mini App',
    client: 'BPR Daerah',
    category: 'Mobile Apps',
    year: '2025',
    description: 'Aplikasi mobile banking untuk BPR: cek saldo, transfer, mutasi, dan top-up.',
    tech: ['React Native', 'Node.js', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800',
    results: 'Nasabah digital naik 3x lipat'
  },
  {
    id: 19,
    title: 'Design System & Brand Identity',
    client: 'Startup SaaS',
    category: 'UI/UX Design',
    year: '2025',
    description: 'Design system lengkap: color palette, typography, komponen UI, dan panduan brand.',
    tech: ['Figma', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    results: 'Development speed naik 50%'
  },
  {
    id: 20,
    title: 'Chatbot Lead Generation',
    client: 'Agen Properti',
    category: 'AI & Automation',
    year: '2025',
    description: 'Chatbot AI di website untuk kualifikasi leads properti, jadwal viewing, dan follow-up otomatis.',
    tech: ['Node.js', 'OpenAI', 'WhatsApp API'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    results: 'Leads qualified naik 200%'
  },
  {
    id: 21,
    title: 'Platform Ujian Online CBT',
    client: 'SMA Swasta Surabaya',
    category: 'Web Development',
    year: '2025',
    description: 'Computer Based Test dengan anti-cheat, timer, randomize soal, dan hasil instan.',
    tech: ['Next.js', 'WebSocket', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    results: '1200+ siswa ujian serentak tanpa gangguan'
  },
  {
    id: 22,
    title: 'Sistem Donasi & Fundraising',
    client: 'Yayasan Sosial',
    category: 'Web Development',
    year: '2025',
    description: 'Platform donasi online dengan campaign, progress bar, laporan transparan, dan sertifikat donatur.',
    tech: ['Next.js', 'Midtrans', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800',
    results: 'Rp 500 juta terkumpul dalam 6 bulan'
  },
  {
    id: 23,
    title: 'Aplikasi Manajemen Masjid',
    client: 'Masjid Agung Bekasi',
    category: 'Mobile Apps',
    year: '2025',
    description: 'App jadwal sholat, pengumuman, infaq digital, dan manajemen kegiatan masjid.',
    tech: ['Flutter', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800',
    results: '2000+ jamaah aktif menggunakan app'
  },
  {
    id: 24,
    title: 'Portal Alumni Universitas',
    client: 'Universitas Swasta Bandung',
    category: 'Web Development',
    year: '2025',
    description: 'Portal alumni dengan job board, networking, tracer study, dan direktori alumni.',
    tech: ['Next.js', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    results: '5000+ alumni terdaftar dalam 3 bulan'
  },
  {
    id: 25,
    title: 'Sistem Inventory Apotek',
    client: 'Apotek Chain Jabodetabek',
    category: 'Custom Software',
    year: '2025',
    description: 'Manajemen stok obat, expired date alert, pembelian otomatis, dan laporan BPJS.',
    tech: ['React', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800',
    results: 'Stok mati turun 80%, expired 0 kasus'
  },
  {
    id: 26,
    title: 'App Fitness & Workout Tracker',
    client: 'Gym Chain Startup',
    category: 'Mobile Apps',
    year: '2025',
    description: 'App workout dengan program latihan, progress tracker, nutrisi, dan booking kelas.',
    tech: ['React Native', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    results: 'Retensi member naik 45%'
  },
  {
    id: 27,
    title: 'Automation Laporan Keuangan',
    client: 'Perusahaan Distribusi',
    category: 'AI & Automation',
    year: '2025',
    description: 'Otomatisasi rekap data penjualan, generate laporan Excel/PDF, dan kirim ke email stakeholder.',
    tech: ['Python', 'n8n', 'Google Sheets API'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    results: 'Hemat 20 jam/minggu proses manual'
  },
  {
    id: 28,
    title: 'Website Klinik Kecantikan',
    client: 'Klinik Estetika Jakarta',
    category: 'Web Development',
    year: '2025',
    description: 'Website dengan booking treatment, galeri before/after, blog edukasi, dan live chat.',
    tech: ['Next.js', 'Sanity CMS'],
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800',
    results: 'Booking online naik 250%'
  },
  {
    id: 29,
    title: 'UI/UX Mobile Banking Redesign',
    client: 'Fintech Jakarta',
    category: 'UI/UX Design',
    year: '2025',
    description: 'Redesign UX flow transfer, top-up, dan investasi untuk meningkatkan task completion rate.',
    tech: ['Figma', 'ProtoPie', 'Maze'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    results: 'Task completion rate naik dari 62% → 91%'
  },
  {
    id: 30,
    title: 'IoT Dashboard Monitoring Pabrik',
    client: 'Pabrik Makanan Bekasi',
    category: 'Custom Software',
    year: '2025',
    description: 'Dashboard real-time monitoring mesin produksi, suhu, kelembaban, dan alert breakdown.',
    tech: ['React', 'MQTT', 'InfluxDB'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    results: 'Downtime berkurang 60%'
  },
  {
    id: 31,
    title: 'Multi-Branch POS Restaurant',
    client: 'Franchise F&B Jakarta',
    category: 'Custom Software',
    year: '2026',
    description: 'Sistem kasir multi-cabang terintegrasi: menu digital, kitchen display, laporan per outlet.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    results: '15 cabang beroperasi dalam 1 sistem'
  },
  {
    id: 32,
    title: 'Platform Rekrutmen Online',
    client: 'HR Tech Startup',
    category: 'Web Development',
    year: '2026',
    description: 'Job portal dengan ATS, screening otomatis, video interview, dan scoring kandidat berbasis AI.',
    tech: ['Next.js', 'Python', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800',
    results: 'Time-to-hire turun dari 30 → 12 hari'
  },
  {
    id: 33,
    title: 'Sistem Ticketing & Event',
    client: 'Event Organizer Nasional',
    category: 'Web Development',
    year: '2026',
    description: 'Platform penjualan tiket event dengan QR code, gate check-in, dan laporan real-time.',
    tech: ['Next.js', 'Xendit', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    results: '10.000+ tiket terjual dalam 24 jam'
  },
  {
    id: 34,
    title: 'Aplikasi Logistik Last Mile',
    client: 'Startup Kurir Lokal',
    category: 'Mobile Apps',
    year: '2026',
    description: 'App driver dan dispatcher: optimasi rute, bukti pengiriman foto, dan COD management.',
    tech: ['Flutter', 'Google Maps', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1609429019995-8c40f49535a5?w=800',
    results: 'Efisiensi rute naik 40%, COD fraud 0%'
  },
  {
    id: 35,
    title: 'AI Recommendation Engine',
    client: 'E-Commerce Fashion',
    category: 'AI & Automation',
    year: '2026',
    description: 'Engine rekomendasi produk berbasis perilaku user, riwayat pembelian, dan tren real-time.',
    tech: ['Python', 'TensorFlow', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800',
    results: 'Average order value naik 35%'
  },
  {
    id: 36,
    title: 'Sistem Manajemen Sekolah',
    client: 'Yayasan Pendidikan',
    category: 'Custom Software',
    year: '2026',
    description: 'SIMS lengkap: nilai, absensi, SPP online, rapor digital, dan komunikasi ortu-guru.',
    tech: ['React', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    results: '1200 siswa, 80 guru dalam 1 platform'
  },
  {
    id: 37,
    title: 'Dashboard Monitoring Fleet',
    client: 'Perusahaan Transportasi',
    category: 'Custom Software',
    year: '2026',
    description: 'Tracking armada real-time, konsumsi BBM, jadwal servis, dan laporan perjalanan driver.',
    tech: ['React', 'GPS API', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800',
    results: 'Biaya operasional turun 28%'
  },
  {
    id: 38,
    title: 'Super App UMKM',
    client: 'Komunitas UMKM Nasional',
    category: 'Mobile Apps',
    year: '2026',
    description: 'All-in-one app UMKM: kasir, stok, laporan keuangan, dan marketplace B2B.',
    tech: ['React Native', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    results: '500+ UMKM aktif dalam 2 bulan'
  },
  {
    id: 39,
    title: 'Portal Berita & Media Online',
    client: 'Media Digital Nasional',
    category: 'Web Development',
    year: '2026',
    description: 'Portal berita dengan CMS custom, AMP support, push notification, dan monetisasi iklan.',
    tech: ['Next.js', 'Sanity', 'Cloudflare'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
    results: '1 juta pageview/bulan di bulan ke-3'
  },
  {
    id: 40,
    title: 'Sistem Pengadaan & Procurement',
    client: 'BUMN Jakarta',
    category: 'Custom Software',
    year: '2026',
    description: 'E-procurement dengan approval workflow, vendor management, dan audit trail lengkap.',
    tech: ['React', 'Spring Boot', 'Oracle DB'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    results: 'Proses pengadaan dari 30 → 7 hari'
  },
  {
    id: 41, 
    title: 'Aplikasi Telemedicine',
    client: 'Startup Healthtech',
    category: 'Mobile Apps', 
    year: '2026',
    description: 'Konsultasi dokter online, resep digital, booking lab, dan rekam medis personal.',
    tech: ['React Native', 'WebRTC', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    results: '800+ konsultasi per hari'
  },
  {
    id: 42, 
    title: 'Platform Investasi Reksa Dana',
    client: 'Fintech Investment',
    category: 'Web Development', 
    year: '2026',
    description: 'Platform investasi dengan portofolio tracker, auto-invest, dan edukasi finansial.',
    tech: ['Next.js', 'Python', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    results: 'AUM Rp 10 miliar di bulan ke-6'
  },
  {
    id: 43, 
    title: 'Sistem Parkir Digital',
    client: 'Pengelola Gedung Jakarta',
    category: 'Custom Software', 
    year: '2026',
    description: 'Manajemen parkir dengan RFID, pembayaran cashless, dan laporan okupansi real-time.',
    tech: ['React', 'IoT', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800',
    results: 'Antrean masuk turun 75%'
  },
  {
    id: 44, 
    title: 'E-Learning Coding Bootcamp',
    client: 'Lembaga Pelatihan IT',
    category: 'Web Development', 
    year: '2026',
    description: 'Platform bootcamp dengan live coding, code review AI, progress tracking, dan sertifikasi.',
    tech: ['Next.js', 'WebSocket', 'Judge0 API'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    results: '300+ lulusan bersertifikat'
  },
  {
    id: 45, 
    title: 'Automation Social Media Marketing',
    client: 'Digital Agency',
    category: 'AI & Automation', 
    year: '2026',
    description: 'Otomatisasi konten sosmed: generate caption AI, jadwal posting, dan laporan engagement.',
    tech: ['Python', 'OpenAI', 'Meta API'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    results: 'Output konten naik 5x dengan tim sama'
  },
  {
    id: 46, 
    title: 'Sistem Rental & Sewa Aset',
    client: 'Perusahaan Rental Alat Berat',
    category: 'Custom Software', 
    year: '2026',
    description: 'Manajemen penyewaan alat berat: booking, kontrak digital, GPS tracking, dan billing.',
    tech: ['React', 'Laravel', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    results: 'Utilisasi aset naik dari 55% → 82%'
  },
  {
    id: 47, 
    title: 'App Komunitas & Forum',
    client: 'Komunitas Developer Indonesia',
    category: 'Mobile Apps', 
    year: '2026',
    description: 'App komunitas dengan forum, event, job board, mentoring, dan sistem poin gamifikasi.',
    tech: ['React Native', 'Firebase', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
    results: '10.000+ member aktif'
  },
  {
    id: 48, 
    title: 'Website Portofolio Interaktif',
    client: 'Creative Agency',
    category: 'UI/UX Design', 
    year: '2026',
    description: 'Website agency dengan animasi Framer Motion, case study interaktif, dan dark/light mode.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800',
    results: 'Bounce rate turun 40%, inquiry naik 3x'
  },
  {
    id: 49, 
    title: 'Sistem Manajemen Kontrakan',
    client: 'Investor Properti',
    category: 'Custom Software', 
    year: '2026',
    description: 'Kelola unit kos/kontrakan: tagihan otomatis, laporan pemasukan, dan komplain tenant.',
    tech: ['React', 'Laravel', 'Xendit'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    results: '120 unit terkelola otomatis'
  },
  {
    id: 50, 
    title: 'AI Customer Insights Dashboard',
    client: 'Retail Chain Nasional',
    category: 'AI & Automation', 
    year: '2026',
    description: 'Dashboard analitik pelanggan berbasis AI: segmentasi, prediksi churn, dan rekomendasi promo.',
    tech: ['Python', 'React', 'OpenAI', 'BigQuery'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    results: 'Churn turun 30%, repeat purchase naik 45%'
  },
]

const categories = ['All', 'Web Development', 'Custom Software', 'Mobile Apps', 'AI & Automation', 'UI/UX Design']
const perPageOptions = [6, 10, 20, 50]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(6)
  const [selectedProject, setSelectedProject] = useState<typeof portfolios[0] | null>(null)

  const filtered = activeFilter === 'All'
    ? portfolios
    : portfolios.filter((p) => p.category === activeFilter)

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage)

  // Reset page logic
  useEffect(() => setCurrentPage(1), [activeFilter])

  const openModal = (project: typeof portfolios[0]) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  const getPaginationGroup = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    
    if (currentPage <= 3) return [1, 2, 3, 4, '...', totalPages];
    
    if (currentPage >= totalPages - 2) return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <section id="portfolio" className="bg-[#f9fafb] py-20 px-6 md:px-12 lg:px-20 font-sans relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Area */}
        <div className="relative inline-block transform -rotate-[1deg] hover:rotate-0 transition-transform duration-500 mb-14">
          <div
            className="text-[#16232A] px-10 py-7 shadow-xl relative inline-block"
            style={{
              background: "linear-gradient(225deg, transparent 36px, #D9E061 0)",
              borderRadius: "24px 0 24px 24px",
            }}
          >
            <div className="absolute top-4 left-4 w-4 h-4 bg-[#16232A] rounded-full z-20" />
            <h2 className="text-[3rem] md:text-[4rem] font-black tracking-tighter lowercase mt-2 text-[#16232A]">our portfolio</h2>
            <svg className="w-36 h-5 mt-2 stroke-[#16232A]" viewBox="0 0 100 10" fill="none">
              <path d="M0,5 Q10,0 20,5 T40,5 T60,5 Q70,10 80,5 T100,5" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <div className="absolute top-0 right-0 w-10 h-10 bg-white/60 shadow-md" style={{ borderRadius: "0 0 0 16px" }} />
          </div>
        </div>

        {/* Controls Area (Filter & Per Page) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10">
          
          {/* Main Filter Bar */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start flex-1 w-full text-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-[#16232A] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-[#16232A] border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items Per Page Control */}
          <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-[20px] shadow-sm border border-gray-200 w-full md:w-auto justify-center flex-shrink-0">
            <span className="text-sm font-bold text-gray-400 mr-2 uppercase tracking-widest text-[10px]">Tampilkan</span>
            {perPageOptions.map(n => (
              <button
                key={n}
                onClick={() => { setPerPage(n); setCurrentPage(1) }}
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-black transition-all ${
                  perPage === n 
                    ? 'bg-[#D9E061] text-[#16232A] shadow-md scale-105' 
                    : 'bg-transparent text-gray-400 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map((project) => (
            <div key={project.id} className="portfolio-card bg-white shadow-sm" onClick={() => openModal(project)}>
              {/* Thumbnail */}
              <div className="card-thumbnail">
                <img src={project.image} alt={project.title} loading="lazy" />
                
                {/* Hover overlay */}
                <div className="card-overlay">
                  <span className="text-[#D9E061] text-xs font-black uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-xl font-bold text-center px-4 leading-snug">{project.title}</h3>
                  <button className="mt-4 px-6 py-2 bg-[#D9E061] text-[#16232A] border-none rounded-full font-bold cursor-pointer transition-transform hover:scale-105">
                    Lihat Detail →
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100">
                <span className="inline-block px-3 py-1 bg-[#16232A]/5 text-[#16232A] text-xs font-bold rounded-md mb-3">
                  {project.category}
                </span>
                <h3 className="text-[#16232A] font-black text-lg leading-snug mb-1 line-clamp-1">{project.title}</h3>
                <p className="text-gray-500 text-sm font-medium">{project.client}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Logic */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-14">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              className="w-11 h-11 rounded-[12px] flex items-center justify-center font-bold bg-white text-[#16232A] border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
            >
              &lt;
            </button>
            
            {getPaginationGroup().map((item, i) => (
              <button
                key={i}
                disabled={item === '...'}
                onClick={() => typeof item === 'number' && setCurrentPage(item)}
                className={`w-11 h-11 flex items-center justify-center font-black transition-all ${
                  item === currentPage 
                    ? 'bg-[#16232A] text-white shadow-lg rounded-[12px] scale-105' 
                    : item === '...'
                    ? 'bg-transparent text-gray-400 cursor-default px-2'
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200 rounded-[12px] shadow-sm'
                }`}
              >
                {item}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              className="w-11 h-11 rounded-[12px] flex items-center justify-center font-bold bg-white text-[#16232A] border border-gray-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
            >
              &gt;
            </button>
          </div>
        )}

        {/* Modal Overlay Component */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={closeModal} style={{ opacity: 1, animation: 'fadeIn 0.2s ease-in' }}>
            <div className="bg-white rounded-[24px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={e => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white font-bold hover:bg-black/80 transition-colors z-10" 
                onClick={closeModal}
              >
                ✕
              </button>
              
              <div className="w-full aspect-[16/9] relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-[#16232A] text-white text-xs font-bold tracking-wider uppercase rounded-md mb-4">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-black text-[#16232A] leading-tight mb-2">{selectedProject.title}</h2>
                <p className="text-gray-500 font-semibold mb-6 flex items-center gap-2">
                  👤 {selectedProject.client} <span className="text-gray-300">•</span> {selectedProject.year}
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-8">{selectedProject.description}</p>

                {/* Tech stack badges */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold border border-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Result highlight */}
                <div className="bg-[#D9E061]/20 border border-[#D9E061] rounded-[16px] p-5 flex items-start gap-4">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <h4 className="text-[#16232A] text-xs font-black uppercase tracking-widest mb-1">Project Impact</h4>
                    <p className="text-[#16232A] font-bold text-lg leading-tight">{selectedProject.results}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .portfolio-card {
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .card-thumbnail {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .card-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .portfolio-card:hover img {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(22, 35, 42, 0.85);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          color: white;
          gap: 8px;
        }

        .portfolio-card:hover .card-overlay {
          opacity: 1;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
