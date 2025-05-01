import Image from "next/image"

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20">
      <div className="mb-12">
        <p className="text-secondary font-medium mb-2">TESTIMONI</p>
        <h2 className="text-5xl md:text-6xl font-black leading-tight">INTIP APA KATA MEREKA</h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          Kami telah bermitra dengan berbagai bisnis inovatif di berbagai industri untuk mendorong transformasi digital
          dan pertumbuhan bisnis mereka.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-12">
        <div className="md:w-1/2">
          {/* Testimonial chat bubbles will go here */}
          <div className="flex gap-4 mb-6 hover:bg-yellow-400 transition duration-300 ease-in-out rounded-2xl p-4">
            <Image src="/andi.png" alt="Testimonial" width={48} height={48} className="rounded-full h-12 w-12" />
            <div className="bg-white rounded-2xl p-4 max-w-md">
              <p className="text-gray-700">"Layanan ini sangat membantu kami meningkatkan efisiensi operasional. Platformnya mudah digunakan dan fitur-fiturnya sangat mendukung kebutuhan tim kami."</p>
              <p className="text-gray-500 text-sm mt-2">Andi Saputra - CEO, PT Solusi Digital</p>
              <p className="text-gray-400 text-xs">April 20, 2025</p>
            </div>
          </div>

          <div className="flex gap-4 mb-6 hover:bg-yellow-400 transition duration-300 ease-in-out rounded-2xl p-4">
            <Image src="/budi.png" alt="Testimonial" width={48} height={48} className="rounded-full h-12 w-12" />
            <div className="bg-white rounded-2xl p-4 max-w-md">
              <p className="text-gray-700">"Sangat puas dengan hasil yang diberikan. Layanan pelanggan sangat responsif dan solusi yang ditawarkan sesuai dengan kebutuhan perusahaan kami."</p>
              <p className="text-gray-500 text-sm mt-2">Budi Santoso - Marketing Director, PT Global Makmur Utama</p>
              <p className="text-gray-400 text-xs">April 15, 2025</p>
            </div>
          </div>

          <div className="flex gap-4 mb-6 hover:bg-yellow-400 transition duration-300 ease-in-out rounded-2xl p-4">
            <Image src="/dewi.png" alt="Testimonial" width={48} height={48} className="rounded-full h-12 w-12" />
            <div className="bg-white rounded-2xl p-4 max-w-md">
              <p className="text-gray-700">"Proses integrasi yang sangat mulus dan fitur yang sangat membantu kami dalam mengelola proyek lebih efisien. Sangat direkomendasikan!"</p>
              <p className="text-gray-500 text-sm mt-2">Citra Dewi - Project Manager, Innovate Supply Solutions</p>
              <p className="text-gray-400 text-xs">April 10, 2025</p>
            </div>
          </div>

          <div className="flex gap-4 mb-6 hover:bg-yellow-400 transition duration-300 ease-in-out rounded-2xl p-4">
            <Image src="/fahri.png" alt="Testimonial" width={48} height={48} className="rounded-full h-12 w-12" />
            <div className="bg-white rounded-2xl p-4 max-w-md">
              <p className="text-gray-700">"Aplikasi ini benar-benar meningkatkan produktivitas tim kami. Fitur yang disediakan sangat sesuai dengan yang kami butuhkan!"</p>
              <p className="text-gray-500 text-sm mt-2">Fahri Alamsyah - CTO, TechnoWorks</p>
              <p className="text-gray-400 text-xs">April 5, 2025</p>
            </div>
          </div>

          <div className="flex gap-4 hover:bg-yellow-400 transition duration-300 ease-in-out rounded-2xl p-4">
            <Image src="/rina.png" alt="Testimonial" width={48} height={48} className="rounded-full h-12 w-12" />
            <div className="bg-white rounded-2xl p-4 max-w-md">
              <p className="text-gray-700">"Kami sangat puas dengan pengalaman menggunakan layanan ini. Alur kerja yang terstruktur membuat tim lebih efisien dalam menyelesaikan tugas."</p>
              <p className="text-gray-500 text-sm mt-2">Rina Kurniawati - Operations Lead, NextGen Digital</p>
              <p className="text-gray-400 text-xs">April 1, 2025</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <Image src="/testimonial.jpg" alt="Testimonial" width={300} height={300} className="w-auto h-auto" />
        </div>
      </div>
    </section>
  )
}
