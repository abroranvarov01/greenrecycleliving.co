export default function Partners() {
  const partners = [
    { name: "Eco Certified", logo: "/eco-certification-badge.jpg" },
    { name: "Fair Trade", logo: "/fair-trade-certification-logo.png" },
    { name: "Carbon Neutral", logo: "/carbon-neutral-badge.jpg" },
    { name: "B Corporation", logo: "/b-corporation-certified-logo.jpg" },
    { name: "Organic", logo: "/organic-certification-badge.png" },
    { name: "Plastic Free", logo: "/plastic-free-certification.jpg" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">Certified & Trusted</h2>
          <p className="text-[#6B7280]">Our commitment to sustainability is verified by leading organizations</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
