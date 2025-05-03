import Image from "next/image"

export default function ClientLogos() {
  const logos = [
    { name: "Client 1", src: "/client_001.png" },
    { name: "Client 2", src: "/client_002.png" },
    { name: "Client 3", src: "/client_003.png" },
    { name: "Client 4", src: "/client_004.png" },
    { name: "Client 5", src: "/client_005.png" },
    { name: "Client 6", src: "/client_006.png" },
    { name: "Client 7", src: "/client_007.png" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="w-24 md:w-32 h-12 relative transition-all">
              <Image
                src={logo.src} // PNG logo path
                alt={logo.name}
                width={120} // Set width and height to control image size
                height={48}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
