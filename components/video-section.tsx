import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="py-20 md:py-32 bg-[#E8EDE6]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance">
              See How We're <span className="text-[#7AC74F]">Making a Difference</span>
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed text-pretty">
              Watch our journey from sourcing sustainable materials to delivering eco-friendly products to your door.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <img src="/eco-friendly-factory-sustainable-production-bamboo.jpg" alt="Video thumbnail" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-12 h-12 text-[#7AC74F] ml-1" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-bold text-[#7AC74F] mb-2">100%</div>
              <div className="text-[#6B7280]">Sustainable Sourcing</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-bold text-[#7AC74F] mb-2">Carbon Neutral</div>
              <div className="text-[#6B7280]">Shipping & Production</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-bold text-[#7AC74F] mb-2">Fair Trade</div>
              <div className="text-[#6B7280]">Certified Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
