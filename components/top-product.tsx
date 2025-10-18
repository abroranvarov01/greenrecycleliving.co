import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart } from "lucide-react"

export default function TopProduct() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FFC857] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#7AC74F] rounded-full opacity-20 blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/bamboo-reusable-water-bottle-eco-friendly.jpg" alt="Bamboo Water Bottle" className="w-full h-auto" />
              <div className="absolute top-6 right-6 bg-[#FFC857] text-white px-4 py-2 rounded-full font-bold">
                Best Seller
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#7AC74F]/10 rounded-full border border-[#7AC74F]/20">
              <span className="text-[#7AC74F] font-medium text-sm">⭐ Product of the Month</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] text-balance">
              Bamboo Insulated Water Bottle
            </h2>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFC857] text-[#FFC857]" />
                ))}
              </div>
              <span className="text-[#6B7280]">4.9 (2,847 reviews)</span>
            </div>

            <p className="text-lg text-[#6B7280] leading-relaxed">
              Keep your drinks hot or cold for 24 hours with our premium bamboo-wrapped stainless steel bottle. Made
              from sustainable materials, BPA-free, and designed to last a lifetime.
            </p>

            <ul className="space-y-3">
              {[
                "100% sustainable bamboo exterior",
                "Double-wall vacuum insulation",
                "Leak-proof design",
                "Reduces 167 plastic bottles per year",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-[#2E2E2E]">
                  <div className="w-6 h-6 rounded-full bg-[#7AC74F]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#7AC74F]"></div>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-[#7AC74F] hover:bg-[#6AB63F] text-white px-8 flex-1">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#7AC74F] text-[#7AC74F] hover:bg-[#7AC74F]/10 bg-transparent"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
