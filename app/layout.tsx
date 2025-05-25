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
  title: "Supernesia - Jasa Pembuatan Website & Aplikasi, Software untuk UMKM dan Bisnis",
  description:
    "Supernesia menyediakan jasa pembuatan website profesional, aplikasi mobile, dan solusi digital custom untuk UMKM dan bisnis yang ingin naik kelas. Transformasi digital dengan layanan terpercaya di Indonesia.",
  keywords:
    "jasa pembuatan website, jasa pembuatan aplikasi, aplikasi mobile, pengembangan aplikasi custom, solusi digital untuk UMKM, digital marketing UMKM, pembuatan website profesional, transformasi digital bisnis, pengembangan software bisnis, layanan IT untuk UMKM",
  generator: "Next.js",
  author: "Supernesia Creative Technology",
  robots: "index, follow",
  icons: {
    icon: [
            { url: "/favicon.ico", sizes: "16x16", type: "image/ico" },
      { url: "/favicon_16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/favicon_32.png",
    apple: "/apple-touch-icon.png",
  },
};


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
