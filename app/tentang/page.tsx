import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import TechStack from "@/components/tech-stack"
import TeamSection from "@/components/team-section"
import WhySection from "@/components/why-section"

export default function TentangPage() {
  return (
    <main className="bg-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-secondary font-medium mb-2">ABOUT US</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">TENTANG SUPERNESIA CREATIVE TECHNOLOGY</h1>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Didirikan pada tahun 2024, kami membantu bisnis secara strategis menavigasi transformasi digital dan inovasi
            teknologi melalui jasa pembuatan website profesional dan pengembangan software custom.
          </p>
        </div>
      </section>

      {/* Cerita Kami Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-black mb-6">Cerita Kami</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Didirikan pada tahun 2024, Supernesia Creative Technology hadir dari visi untuk menjembatani kesenjangan antara praktik
                bisnis tradisional dan lanskap digital yang berkembang pesat. Pendiri kami, dengan latar belakang yang
                kuat dalam teknologi, strategi bisnis, dan inovasi digital, menyadari bahwa banyak organisasi berjuang
                menghadapi transformasi digital bukan karena kurangnya kemauan, tetapi karena kompleksitas dan ketidakpastian
                dalam proses tersebut.
              </p>
              <p>
                Sejak awal, kami berdedikasi untuk mendemistifikasi transformasi digital agar dapat diakses oleh semua segmen —
                mulai dari UMKM, perusahaan menengah, hingga komunitas akademik seperti mahasiswa. Apa yang dimulai sebagai
                konsultasi kecil telah berkembang menjadi mitra digital menyeluruh yang membantu berbagai organisasi di
                berbagai industri untuk menavigasi perjalanan digital mereka dengan percaya diri. Pendekatan kami
                menggabungkan pemikiran strategis dan implementasi praktis, memastikan bahwa klien kami tidak hanya membayangkan
                masa depan digital mereka tetapi juga mencapainya.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-black mb-4">Visi</h3>
              <p className="text-gray-600 mb-8">
                Menjadi partner digital tepercaya bagi UMKM, Entitas bisnis progresif , dan kalangan akademik seperti mahasiswa
                yang ingin melakukan transformasi digital strategis dan berkembang dalam dunia yang semakin terdigitalisasi.
              </p>

              <h3 className="text-2xl font-black mb-4">Misi</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span className="text-gray-600">
                    Menyediakan panduan strategis dan solusi digital inovatif yang mendorong hasil bisnis nyata.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span className="text-gray-600">
                    Memberdayakan UMKM, perusahaan menengah, dan mahasiswa dengan alat serta edukasi digital untuk
                    meningkatkan daya saing mereka.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  <span className="text-gray-600">
                    Menumbuhkan budaya inovasi dan keunggulan berkelanjutan dalam layanan dan teknologi yang kami kembangkan.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end items-center">
            <div className="rotate-90 md:rotate-0 origin-center">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black/10">
                WE
                <br />
                DOING
                <br />
                THE
                <br />
                BEST
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <WhySection />

      {/* Team Section */}
      <TeamSection />

      {/* Tech Stack Section */}
      <TechStack />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
