"use client"

import Image from "next/image"
import { useState } from "react"

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("programming")

  const tabs = [
    { id: "programming", label: "Programming Tools" },
    { id: "database", label: "Database Tools" },
    { id: "project", label: "Project Management" },
    { id: "security", label: "Security Tools" },
  ]

  const technologies = {
    programming: [
      "JavaScript",
      "TypeScript",
      "PHP",
      "Python",
      "Java",
      "Go",
      "React.js",
      "Vue.js",
      "Angular",
      "Next.js",
      "Laravel",
      "Node.js",
      "Express.js",
      "React Native",
      "Flutter",
      "Kotlin",
      "Swift",
      "HTML5",
      "CSS3",
    ],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
    project: ["Jira", "Trello", "Asana", "GitHub", "GitLab", "Notion"],
    security: ["OAuth", "JWT", "SSL/TLS", "Cloudflare", "AWS Security", "Firebase Auth"],
  }

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2">Tech Stack Kami</h2>
        <p className="text-gray-600 text-center mb-12">
          Kami memanfaatkan teknologi dan alat mutakhir untuk memberikan solusi digital yang luar biasa bagi klien kami.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === tab.id ? "bg-primary" : "bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies[activeTab].map((tech, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                <Image
                  src={`/tech-icons/${tech.toLowerCase().replace(/\./g, "")}.svg`}
                  alt={tech}
                  width={32}
                  height={32}
                  className="w-8 h-8 opacity-70"
                />
              </div>
              <span className="text-sm font-medium text-center">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
