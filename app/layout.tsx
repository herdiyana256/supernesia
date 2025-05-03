import type { Metadata } from "next"
import { Anton } from "next/font/google"
import "./globals.css"
import SupernesiaChatbot from "@/components/supernesia-chatbot"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
})

export const metadata: Metadata = {
  title: "Supernesia - Transformasikan Bisnismu Jadi Lebih Super",
  description: "Jasa pembuatan Website & Aplikasi untuk UMKM atau Bisnis yang mau naik kelas.",
  keywords: "jasa pembuatan website, aplikasi mobile, pembuatan aplikasi, digital transformation, UMKM, solusi digital, web development Indonesia, jasa pembuatan aplikasi, digital marketing UMKM, aplikasi custom untuk bisnis, solusi teknologi untuk bisnis, pembuatan website profesional",
  generator: "Next.js",
  author: "Supernesia Team",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="rDv4azVm7pImPiuru4Q-YvU6yrYRuVHpUzLaUTTb1Ho" />
      </head>
      <body className={`${anton.variable} font-sans`}>
        {children}
        <SupernesiaChatbot />
      </body>
    </html>
  )
}
