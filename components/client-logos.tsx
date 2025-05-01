import Image from "next/image"

export default function ClientLogos() {
  const logos = [
    { name: "Logo 1", src: "/logo1.svg" },
    { name: "Logo 2", src: "/logo2.svg" },
    { name: "Logo 3", src: "/logo3.svg" },
    { name: "Logo 4", src: "/logo4.svg" },
    { name: "Logo 5", src: "/logo5.svg" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="w-24 md:w-32 h-12 relative grayscale hover:grayscale-0 transition-all">
              <Image src={logo.src || "/placeholder.svg"} alt={logo.name} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
