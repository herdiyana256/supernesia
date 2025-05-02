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
      { name: "JavaScript", icon: "/tech-icons/javascript.png" },
      { name: "TypeScript", icon: "/tech-icons/typescript.png" },
      { name: "PHP", icon: "/tech-icons/php.png" },
      { name: "Python", icon: "/tech-icons/python.png" },
      { name: "Java", icon: "/tech-icons/java.png" },
      { name: "Go", icon: "/tech-icons/go.png" },
      { name: "React.js", icon: "/tech-icons/reactjs.png" },
      { name: "Vue.js", icon: "/tech-icons/vuejs.png" },
      { name: "Angular", icon: "/tech-icons/angular.png" },
      { name: "Next.js", icon: "/tech-icons/nextjs.png" },
      { name: "Laravel", icon: "/tech-icons/laravel.png" },
      { name: "Node.js", icon: "/tech-icons/nodejs.png" },
      { name: "Express.js", icon: "/tech-icons/expressjs.png" },
      { name: "React Native", icon: "/tech-icons/react-native.png" },
      { name: "Flutter", icon: "/tech-icons/flutter.png" },
      { name: "Kotlin", icon: "/tech-icons/kotlin.png" },
      { name: "Swift", icon: "/tech-icons/swift.png" },
      { name: "HTML5", icon: "/tech-icons/html5.png" },
      { name: "CSS3", icon: "/tech-icons/css3.png" },
    ],
    database: [
      { name: "MySQL", icon: "/tech-icons/mysql.png" },
      { name: "PostgreSQL", icon: "/tech-icons/postgresql.png" },
      { name: "MongoDB", icon: "/tech-icons/mongodb.png" },
      { name: "Redis", icon: "/tech-icons/redis.png" },
      { name: "Firebase", icon: "/tech-icons/firebase.png" },
      { name: "Supabase", icon: "/tech-icons/supabase.png" },
    ],
    project: [
      { name: "Jira", icon: "/tech-icons/jira.png" },
      { name: "Trello", icon: "/tech-icons/trello.png" },
      { name: "Asana", icon: "/tech-icons/asana.png" },
      { name: "GitHub", icon: "/tech-icons/github.png" },
      { name: "GitLab", icon: "/tech-icons/gitlab.png" },
      { name: "Notion", icon: "/tech-icons/notion.png" },
    ],
    security: [
      { name: "OAuth", icon: "/tech-icons/oauth.png" },
      { name: "JWT", icon: "/tech-icons/jwt.png" },
      { name: "SSL/TLS", icon: "/tech-icons/ssl_tls.png" },
      { name: "Cloudflare", icon: "/tech-icons/cloudflare.png" },
      { name: "AWS Security", icon: "/tech-icons/aws-security.png" },
      { name: "Firebase Auth", icon: "/tech-icons/firebase-auth.png" },
    ],
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
                activeTab === tab.id ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies[activeTab].map((tech, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-center capitalize">{tech.name.replace(/[-_]/g, " ")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
