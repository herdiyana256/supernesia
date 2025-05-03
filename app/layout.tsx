import type React from "react"
import type { Metadata } from "next"
import { Anton } from "next/font/google" // Menambahkan Anton font
import "./globals.css"
import SupernesiaChatbot from "@/components/supernesia-chatbot"

const anton = Anton({
  subsets: ["latin"],
  weight: "400", // Anda dapat menyesuaikan beratnya
  variable: "--font-anton", // Variabel untuk font
})

export const metadata: Metadata = {
  title: "Supernesia - Transformasikan Bisnismu Jadi Lebih Super",
  description: "Jasa pembuatan Website & Aplikasi untuk UMKM atau Bisnis yang mau naik kelas.",
  keywords: "jasa pembuatan website, aplikasi mobile, pembuatan aplikasi, digital transformation, UMKM, solusi digital, web development Indonesia, jasa pembuatan aplikasi, digital marketing UMKM, aplikasi custom untuk bisnis, solusi teknologi untuk bisnis, pembuatan website profesional",
  generator: "Next.js", // Menggunakan Next.js sebagai generator
  author: "Supernesia Team", // Nama tim atau perusahaan
  robots: "index, follow", // Memastikan halaman ini diindeks oleh mesin pencari
  icons: {
    icon: "/favicon.ico", // Referensi favicon di folder public
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${anton.variable} font-sans`}>
        {children}
        <SupernesiaChatbot />
      </body>
    </html>
  )
}
