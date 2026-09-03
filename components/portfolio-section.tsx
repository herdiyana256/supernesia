"use client"
import React, { useState } from "react"

const portfolios = [
  {
    id: 1,
    title: "Web Development",
    description: "Website profesional, landing page, e-commerce, hingga web app kompleks yang cepat, responsif, dan scalable.",
    tech: ["Next.js", "React", "Laravel"],
    image: "/porto-web-development.png",
    results: "Dibangun dengan teknologi terkini dan SEO-ready"
  },
  {
    id: 2,
    title: "Custom Software",
    description: "Sistem CRM, ERP, inventory, POS, dan internal tools yang dirancang khusus sesuai alur kerja bisnis kamu.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/porto-custom-software.png",
    results: "Solusi yang benar-benar fit untuk bisnis kamu"
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Aplikasi iOS & Android native maupun cross-platform yang intuitif, cepat, dan siap scale.",
    tech: ["Flutter", "React Native", "Firebase"],
    image: "/porto-mobile-development.png",
    results: "Cross-platform, satu codebase untuk semua device"
  },
  {
    id: 4,
    title: "AI & Automation",
    description: "Chatbot AI, WhatsApp bot, automasi workflow, dan integrasi AI ke sistem yang sudah ada untuk efisiensi maksimal.",
    tech: ["Python", "OpenAI", "n8n"],
    image: "/porto-ai-automation.png",
    results: "Otomatisasi proses bisnis 24/7 tanpa henti"
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Desain antarmuka yang indah dan intuitif — dari wireframe, prototype, hingga design system siap development.",
    tech: ["Figma", "Principle", "Maze"],
    image: "/porto-ui-ux-design.png",
    results: "Desain yang meningkatkan konversi dan retensi user"
  },
  {
    id: 6,
    title: "Klinik & Healthcare",
    description: "Sistem manajemen klinik, rekam medis digital, antrian pasien, billing otomatis, dan telemedicine.",
    tech: ["React", "Laravel", "MySQL"],
    image: "/porto-clinic.png",
    results: "Digitalisasi layanan kesehatan yang lebih efisien"
  },
  {
    id: 7,
    title: "ERP & Enterprise",
    description: "Sistem ERP terintegrasi untuk manufaktur, distribusi, dan perusahaan skala menengah ke besar.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    image: "/porto-erp.png",
    results: "Operasional bisnis dalam satu platform terpadu"
  },
  {
    id: 8,
    title: "Maintenance & Revamp",
    description: "Perbaikan bug, optimasi performa, upgrade UI/UX, dan revamp total sistem digital yang sudah ada.",
    tech: ["Next.js", "React", "Node.js"],
    image: "/porto-maintenance-revamp.png",
    results: "Produk lama jadi lebih cepat, modern, dan aman"
  },
]

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolios[0] | null>(null)

  return (
    <section id="portfolio" className="bg-[#f9fafb] py-20 px-6 md:px-12 lg:px-20 font-sans relative">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
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

        {/* Grid 4 col desktop, 2 col mobile — NO filter */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolios.map((project) => (
            <div
              key={project.id}
              className="portfolio-card bg-white shadow-sm cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-thumbnail">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="card-overlay">
                  <h3 className="text-lg font-bold text-center px-4 leading-snug">{project.title}</h3>
                  <button className="mt-3 px-5 py-2 bg-[#D9E061] text-[#16232A] border-none rounded-full font-bold text-sm cursor-pointer transition-transform hover:scale-105">
                    Lihat Detail →
                  </button>
                </div>
              </div>
              <div className="p-4 border-t border-gray-100">
                <h3 className="text-[#16232A] font-black text-base leading-snug">{project.title}</h3>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-[24px] max-w-xl w-full max-h-[88vh] overflow-y-auto shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white font-bold hover:bg-black/80 transition-colors z-10"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <div className="w-full aspect-video overflow-hidden rounded-t-[24px]">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black text-[#16232A] leading-tight mb-3">{selectedProject.title}</h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-semibold border border-gray-200">{t}</span>
                  ))}
                </div>
                <div className="bg-[#D9E061]/20 border border-[#D9E061] rounded-[14px] p-4 flex items-start gap-3">
                  <div className="text-xl">🚀</div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Hasil</p>
                    <p className="text-[#16232A] font-bold text-base leading-tight">{selectedProject.results}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .portfolio-card { border-radius: 16px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .portfolio-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
        .card-thumbnail { position: relative; aspect-ratio: 4/3; overflow: hidden; }
        .card-thumbnail img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .portfolio-card:hover img { transform: scale(1.05); }
        .card-overlay { position: absolute; inset: 0; background: rgba(22,35,42,0.85); display: flex; flex-direction: column; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.3s ease; color: white; gap: 8px; }
        .portfolio-card:hover .card-overlay { opacity: 1; }
      `}</style>
    </section>
  )
}
