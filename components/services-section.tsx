"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20">
      <div className="mb-12">
        <p className="text-secondary font-medium mb-2">PILIH LAYANANNYA</p>
        <h2 className="text-5xl md:text-6xl font-black leading-tight">
          BANGUN MASA DEPAN DIGITAL
          <br />
          BERSAMA SUPERNESIA!
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          Kami menawarkan pendekatan unik untuk transformasi digital yang berfokus pada hasil bisnis nyata dan solusi
          yang disesuaikan dengan kebutuhan spesifik Anda.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Mobile App */}
        <div
          className={`bg-white border border-gray-200 rounded-xl p-6 hover:bg-yellow-400 transition-all duration-300 ease-in-out ${
            selectedCategory === "mobile" ? "bg-yellow-400" : ""
          }`}
          onClick={() => handleCategoryClick("mobile")}
        >
          <h3 className="text-xl font-bold mb-2 border-b border-gray-200 pb-4 text-black dark:text-black">
            Mobile & Desktop App
          </h3>
          <p className="text-gray-600 mb-12">
            Konsultasi strategis untuk menyelaraskan inisiatif teknologi dengan tujuan bisnis Anda.
          </p>
          <div className="flex justify-end">
            <Link href="/layanan/mobile-app" className="text-secondary">
              <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>

        {/* Web Development */}
        <div
          className={`bg-white border border-gray-200 rounded-xl p-6 hover:bg-yellow-400 transition-all duration-300 ease-in-out ${
            selectedCategory === "web" ? "bg-yellow-400" : ""
          }`}
          onClick={() => handleCategoryClick("web")}
        >
          <h3 className="text-xl font-bold mb-2 border-b border-gray-200 pb-4 text-black dark:text-black">
            Web Development
          </h3>
          <p className="text-gray-700 mb-12">
            Konsultasi strategis untuk menyelaraskan inisiatif teknologi dengan tujuan bisnis Anda.
          </p>
          <div className="flex justify-end">
            <Link href="/layanan/web-development" className="text-secondary">
              <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>

        {/* Custom Software */}
        <div
          className={`bg-white border border-gray-200 rounded-xl p-6 hover:bg-yellow-400 transition-all duration-300 ease-in-out ${
            selectedCategory === "custom" ? "bg-yellow-400" : ""
          }`}
          onClick={() => handleCategoryClick("custom")}
        >
          <h3 className="text-xl font-bold mb-2 border-b border-gray-200 pb-4 text-black dark:text-black">
            Custom Software Development
          </h3>
          <p className="text-gray-600 mb-12">
            Konsultasi strategis untuk menyelaraskan inisiatif teknologi dengan tujuan bisnis Anda.
          </p>
          <div className="flex justify-end">
            <Link href="/layanan/custom-software" className="text-secondary">
              <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
