import { Recycle, Heart, Sprout, Globe } from "lucide-react"

export default function WhySection() {
  const reasons = [
    {
      icon: Recycle,
      title: "Zero Waste",
      description: "Every product is designed to minimize waste and maximize reusability for a cleaner planet.",
    },
    {
      icon: Heart,
      title: "Conscious Living",
      description: "Make mindful choices that benefit both you and the environment with every purchase.",
    },
    {
      icon: Sprout,
      title: "Natural Materials",
      description: "All products are made from sustainable, biodegradable, and eco-friendly materials.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Join thousands making a difference. Together we reduce carbon footprint worldwide.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance">
            Why Choose <span className="text-[#7AC74F]">Green Living?</span>
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed text-pretty">
            Every small action creates ripples of positive change. Start your sustainable journey today and be part of
            the solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-[#F4F8F4] hover:bg-[#7AC74F] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-[#7AC74F]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2E2E2E] mb-3 group-hover:text-white transition-colors">
                {reason.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed group-hover:text-white/90 transition-colors">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
