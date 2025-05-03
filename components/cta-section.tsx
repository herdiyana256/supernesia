import Image from "next/image"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20">
      <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-secondary font-medium mb-2">AYO BERGERAK</p>
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-4 text-black">
            SEGERA HUBUNGI KAMI UNTUK
              <br />
              PERUBAHAN YANG SUPER!!!!!
            </h2>
            <p className="text-gray-600 mb-6">
              Ingin tanya lebih lanjut tentang paket, benefit atupun fitur yang tersedia? atau ingin custom plan juga
              bisa. Kita siap untuk bantu perkembanganmu, gak perlu ragu buat nanya, kami siap melayani dan gratis
              pokoknya.
            </p>
            <Link href="/kontak" className="inline-block bg-primary px-6 py-3 rounded-md font-bold">
              Konsultasi Sekarang, Gratis!
            </Link>
          </div>
          <div className="flex justify-center">
            <Image src="/contact.png" alt="Contact Us" width={300} height={300} className="w-full max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
