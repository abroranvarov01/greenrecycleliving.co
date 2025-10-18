import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Environmental Advocate",
      image: "/smiling-woman-portrait.png",
      rating: 5,
      text: "GreenRecycleLiving has completely transformed how I shop. The quality is amazing and I feel good about every purchase!",
    },
    {
      name: "Michael Chen",
      role: "Zero Waste Enthusiast",
      image: "/smiling-man-portrait.png",
      rating: 5,
      text: "Finally, a store that makes sustainable living accessible and affordable. The bamboo products are my absolute favorite!",
    },
    {
      name: "Emma Williams",
      role: "Eco-Conscious Parent",
      image: "/happy-woman-portrait.png",
      rating: 5,
      text: "Teaching my kids about sustainability is so much easier now. These products are durable, beautiful, and planet-friendly.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[#F4F8F4]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance">
            What Our <span className="text-[#7AC74F]">Community</span> Says
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed text-pretty">
            Join thousands of happy customers who've made the switch to sustainable living.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#7AC74F] opacity-10" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFC857] text-[#FFC857]" />
                ))}
              </div>

              <p className="text-[#2E2E2E] leading-relaxed mb-6 text-pretty">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-[#2E2E2E]">{testimonial.name}</div>
                  <div className="text-sm text-[#6B7280]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
