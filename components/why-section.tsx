'use client'
import React, { useState } from 'react'

export default function WhySection() {
  const [activeCard, setActiveCard] = useState(null)
  const [clickedCards, setClickedCards] = useState(new Set())

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index)
    setClickedCards(prev => new Set([...prev, index]))
  }

  const features = [
    {
      icon: '🔧',
      title: 'Support After Sales',
      text: 'Website udah jadi? Tenang, kita tetap standby bantuin kalo ada kendala teknis, update konten, atau pengembangan lebih lanjut.',
      details: 'Tim support kami siap 24/7 untuk membantu Anda. Gratis konsultasi teknis, panduan penggunaan, dan update keamanan rutin.'
    },
    {
      icon: '⚡',
      title: 'Fitur Sesuai Kebutuhan',
      text: 'Ga semua UMKM butuh fitur ribet. Kita baru sediain fitur yang katalog produk, tombol WA, form order, sampai booking jadwal. Simpel, tapi powerful.',
      details: 'Katalog produk dengan foto HD, integrasi WhatsApp otomatis, sistem booking online, dan dashboard analytics sederhana.'
    },
    {
      icon: '✂️',
      title: 'Bisa Custom Bebas',
      text: 'Mau request khusus? Bisa! Supernesia ngasih fleksibilitas buat custom konten, warna, layout, sampe fitur. Biar websitenya sesuai identitas brand kamu.',
      details: 'Logo placement, color scheme, layout structure, dan fitur khusus sesuai industri Anda. Unlimited revisi sampai puas!'
    },
    {
      icon: '✨',
      title: 'Harga Terjangkau, Value Maksimal',
      text: 'Gak perlu budget gede buat punya website keren. Supernesia kasih solusi harga bersahabat tapi kualitas tetap premium.',
      details: 'Mulai dari 500rb untuk website profesional. Termasuk hosting 1 tahun, SSL certificate, dan maintenance rutin.'
    },
    {
      icon: '🎨',
      title: 'Desain Eksklusif untuk UMKM',
      text: 'Website bukan cuma buat tampil keren, tapi harus bisa naikin trust & jualan. Desain dari Supernesia udah disesuaikan buat kebutuhan UMKM, biar kelihatan profesional tapi tetap hemat.',
      details: 'Template khusus untuk restoran, fashion, jasa, dan retail. Optimized untuk konversi dan user experience terbaik.'
    },
    {
      icon: '🚀',
      title: 'Proses Cepat & Gampang',
      text: 'Ga pake ribet. Dari konsultasi sampai website live, semua diproses cepat dengan panduan step-by-step yang gampang dipahami. Cocok buat yang baru mulai digital.',
      details: 'Konsultasi gratis → Desain mockup → Approval → Live dalam 7 hari kerja. Termasuk training penggunaan dan panduan SEO dasar.'
    }
  ]

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 rounded-3xl mx-4 md:mx-12 lg:mx-20 my-16" style={{backgroundColor: '#e9e15b'}}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-black animate-pulse">
          WHY CHOOSE US
        </h2>
        <h1 className="text-5xl md:text-6xl font-black text-black">
          KENAPA <span style={{color: '#2b2b2b'}}>SUPERNESIA</span>
          <br />
          ADALAH <span className="text-black">SOLUSI?</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Klik kartu di bawah untuk mengetahui lebih detail! 👇
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((item, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105
              ${activeCard === index 
                ? 'bg-white shadow-2xl ring-4 ring-opacity-50' 
                : clickedCards.has(index)
                  ? 'bg-white shadow-lg hover:shadow-xl'
                  : 'bg-white shadow-md hover:shadow-lg'
              }
            `}
            onClick={() => handleCardClick(index)}
          >
            {/* Primary color overlay for active card */}
            {activeCard === index && (
              <div className="absolute top-0 left-0 w-full h-1" style={{backgroundColor: '#e9e15b'}} />
            )}
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold flex items-center text-black">
                  <span className="text-3xl mr-3 transform transition-transform duration-300 hover:scale-110">
                    {item.icon}
                  </span> 
                  {item.title}
                </h3>
                <div className={`
                  w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center
                  transition-all duration-300
                  ${activeCard === index ? 'border-opacity-50' : ''}
                  ${clickedCards.has(index) ? 'border-gray-400' : ''}
                `} style={{
                  backgroundColor: activeCard === index ? '#2b2b2b' : 'transparent',
                  borderColor: activeCard === index ? '#2b2b2b' : undefined
                }}>
                  {activeCard === index && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
              
              {/* Expanded details */}
              <div className={`
                transition-all duration-500 ease-in-out overflow-hidden
                ${activeCard === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
              `}>
                <div className="p-4 rounded-lg bg-gray-100">
                  <h4 className="font-semibold text-black mb-2">Detail Layanan:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.details}
                  </p>
                  <button 
                    className="mt-3 px-4 py-2 rounded-full text-white text-sm font-medium hover:shadow-lg transform transition-all duration-200 hover:scale-105"
                    style={{backgroundColor: '#2b2b2b'}}
                  >
                    Konsultasi Gratis
                  </button>
                </div>
              </div>
            </div>
            
            {/* Click indicator */}
            {clickedCards.has(index) && (
              <div className="absolute top-2 right-2">
                <div className="w-3 h-3 rounded-full animate-ping" style={{backgroundColor: '#e9e15b'}} />
                <div className="w-3 h-3 rounded-full absolute top-0" style={{backgroundColor: '#2b2b2b'}} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-4">
            Siap Mulai Digitalisasi Bisnis Anda?
          </h3>
          <p className="text-gray-600 mb-6">
            Konsultasi gratis dengan tim Supernesia untuk menentukan solusi terbaik untuk bisnis Anda
          </p>
          <button 
            className="text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
            style={{backgroundColor: '#2b2b2b'}}
          >
            Mulai Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  )
}