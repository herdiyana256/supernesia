import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="px-4 md:px-12 lg:px-20 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/footer.png" alt="Supernesia" width={150} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-sm mb-4">Memberdayakan bisnis dengan solusi transformasi digital strategis sejak 2025</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Strategi Teknologi & Digital
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Pengembangan Produk
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Otomatisasi Proses Bisnis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Konsultasi Tech Stack
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Pengembangan Web & Mobile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Desain UI/UX
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Klien Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">
                  Karir
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-sm">Jakarta Timur, Indonesia</li>
              <li className="text-sm">WhatsApp: 089628127896</li>
              <li className="text-sm">info@supernesia.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Supernesia. Semua hak dilindungi undang-undang.</p>
          <div className="mt-4 text-xs text-white/60 max-w-full">
            <p className="leading-relaxed">
              Transformasi Digital, Pengembangan Web dan Mobile, Konsultasi Teknologi, Solusi Digital, Desain UI/UX,
              Pengembangan Produk Digital, Otomatisasi Bisnis, Strategi Teknologi Digital, Layanan IT, Konsultan
              Teknologi, Jasa Pengembangan Website, Platform Digital, Jasa Desain Web dan Mobile, IT Solutions, Layanan
              Bisnis Digital
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              Syarat Layanan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
