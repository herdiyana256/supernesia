"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const teamMembers = [
    {
      name: "Alex Sitanggang",
      role: "CEO",
      description: "Chief Executive Officer yang bertanggung jawab atas visi dan strategi perusahaan.",
      image: "/alex-sitanggang.png",
      linkedin: "https://www.linkedin.com/in/alexander-h-sitanggang-654693153/",
    },
    {
      name: "Herdiyan Adam Putra",
      role: "CIO",
      description: "Chief Information Officer yang mengelola inovasi teknologi dan pengembangan sistem.",
      image: "/herdiyan-adam-putra.png",
      linkedin: "https://www.linkedin.com/in/herdiyan-adam-putra",
    },
    {
      name: "Rivan Rizky Chaeroni",
      role: "COO",
      description: "Chief Operations Officer yang mengelola operasi sehari-hari dan inisiatif strategis.",
      image: "/rivan-rizky-chaeroni.png",
      linkedin: "https://www.linkedin.com/in/rivanrizkyc/",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">Tim Kepemimpinan</h2>
        <p className="text-gray-600 text-center mb-12">
          Temui para profesional berpengalaman yang memimpin visi dan operasi strategis Supernesia.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div
                  className="relative cursor-pointer mb-4"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                  onClick={() => window.open(member.linkedin, "_blank")}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover object-top rounded-lg transition-all duration-300"
                  />
                  {hoveredMember === index && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg transition-all duration-300">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-3 rounded-full"
                      >
                        <Linkedin className="h-6 w-6" />
                      </Link>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-secondary font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
