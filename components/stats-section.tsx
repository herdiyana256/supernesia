import React from "react"

const stats = [
  { value: "95%", label: "Satisfaction Rate" },
  { value: "100+", label: "Businesses Digitized" },
  { value: "75+", label: "Projects Delivered" },
  { value: "50+", label: "Brand Trusted" },
]

export default function StatsSection() {
  return (
    <section className="bg-[#16232A] py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden font-sans">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 blur-3xl rounded-full"
          style={{ background: "radial-gradient(ellipse, #D9E061 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Client logos ticker first */}
        <div className="overflow-hidden mb-16">
          <div className="flex items-center gap-12 md:gap-20 animate-[ticker_30s_linear_infinite] whitespace-nowrap">
            {["client_001","client_002","client_003","client_004","client_005","client_006","client_001","client_002","client_003","client_004","client_005","client_006"].map((c, i) => (
              <div key={i} className="flex-shrink-0 w-28 md:w-36 h-10 relative opacity-50 hover:opacity-100 transition-opacity">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/${c}.png`} alt="client" className="h-full w-full object-contain filter brightness-0 invert" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group w-[180px] h-[160px] md:w-[210px] md:h-[185px] cursor-default"
            >
              {/* Shadow layer */}
              <div className="absolute top-3 left-3 w-full h-full bg-[#0f1c22] rounded-[20px] z-0 transition-transform duration-400 group-hover:translate-x-2 group-hover:translate-y-2" />
              {/* Main card */}
              <div className="absolute inset-0 bg-[#D9E061] rounded-[20px] z-10 flex flex-col items-center justify-center p-5 text-center shadow-lg transition-transform duration-400 group-hover:-translate-x-1 group-hover:-translate-y-1">
                {/* Pin dot */}
                <div className="absolute top-3 right-3 w-3 h-3 bg-[#16232A] rounded-full" />
                <h3 className="text-[2.8rem] md:text-[3.5rem] font-black text-[#16232A] tracking-tighter leading-none mb-1">
                  {stat.value}
                </h3>
                <p className="text-[#16232A]/75 font-bold text-xs md:text-sm leading-snug max-w-[110px]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
