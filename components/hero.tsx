import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F4F8F4] to-[#E8EDE6]">
      {/* Animated floating leaves */}
      <div className="absolute inset-0 pointer-events-none">
        <Leaf
          className="absolute top-20 left-[10%] w-12 h-12 text-[#7AC74F] opacity-20 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <Leaf
          className="absolute top-40 right-[15%] w-16 h-16 text-[#7AC74F] opacity-15 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Leaf
          className="absolute bottom-32 left-[20%] w-10 h-10 text-[#7AC74F] opacity-25 animate-float"
          style={{ animationDelay: "4s" }}
        />
        <Leaf
          className="absolute top-60 right-[25%] w-14 h-14 text-[#7AC74F] opacity-10 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-[#7AC74F]/10 rounded-full border border-[#7AC74F]/20">
            <span className="text-[#7AC74F] font-medium text-sm">🌱 Small Steps for a Big Planet</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2E2E2E] leading-tight text-balance">
            Live Green,
            <br />
            <span className="text-[#7AC74F]">Choose Sustainable</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed text-pretty">
            Discover eco-friendly products that make sustainable living simple, stylish, and accessible for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-[#7AC74F] hover:bg-[#6AB63F] text-white px-8 py-6 text-lg rounded-full">
              Shop Eco Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#7AC74F] text-[#7AC74F] hover:bg-[#7AC74F]/10 px-8 py-6 text-lg rounded-full bg-transparent"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7AC74F]">50K+</div>
              <div className="text-sm text-[#6B7280] mt-1">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7AC74F]">500+</div>
              <div className="text-sm text-[#6B7280] mt-1">Eco Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#7AC74F]">100%</div>
              <div className="text-sm text-[#6B7280] mt-1">Sustainable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
