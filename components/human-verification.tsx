"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function HumanVerification() {
  const [language, setLanguage] = useState("English")

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-md flex flex-col items-center">
        <h1 className="text-[28px] font-medium text-amber-600 text-center mb-8">Let&apos;s confirm you are human</h1>

        <div className="max-w-[350px] mb-8">
          <p className="text-center text-[14px] leading-[1.5] text-gray-800">
            Complete the security check before continuing. This step verifies that you are not a bot, which helps to
            protect your account and prevent spam.
          </p>
        </div>

        <button
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-2 rounded flex items-center justify-center mb-8 transition-colors"
          onClick={() => console.log("Begin verification")}
        >
          Begin <ChevronRight className="ml-1 h-4 w-4" />
        </button>

        <div className="w-full max-w-[350px] flex justify-center">
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm w-32"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Indonesia">Bahasa Indonesia</option>
            <option value="Spanish">Español</option>
            <option value="French">Français</option>
            <option value="German">Deutsch</option>
          </select>
        </div>
      </div>
    </div>
  )
}
