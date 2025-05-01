import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import SupernesiaChatbot from "@/components/supernesia-chatbot"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: "Supernesia - Transformasikan Bisnismu Jadi Lebih Super",
  description: "Jasa pembuatan Website & Aplikasi untuk UMKM atau Bisnis yang mau naik kelas.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans`}>
        {children}
        <SupernesiaChatbot />
      </body>
    </html>
  )
}
