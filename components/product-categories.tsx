import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProductCategories() {
  const categories = [
    {
      name: "Kitchen",
      description: "Reusable containers, bamboo utensils, eco-friendly cleaning",
      image: "/eco-friendly-kitchen-products-bamboo-utensils.jpg",
      color: "bg-[#7AC74F]",
    },
    {
      name: "Bathroom",
      description: "Organic cosmetics, bamboo toothbrushes, zero waste essentials",
      image: "/eco-friendly-bathroom-products-bamboo-toothbrush.jpg",
      color: "bg-[#FFC857]",
    },
    {
      name: "Office",
      description: "Recycled paper, eco-friendly stationery, sustainable supplies",
      image: "/eco-friendly-office-supplies-recycled-paper.jpg",
      color: "bg-[#7AC74F]",
    },
    {
      name: "Outdoor",
      description: "Reusable bottles, eco-bags, sustainable outdoor gear",
      image: "/eco-friendly-outdoor-products-reusable-water-bottl.jpg",
      color: "bg-[#FFC857]",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-[#E8EDE6]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance">
            Shop by <span className="text-[#7AC74F]">Category</span>
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed text-pretty">
            Find sustainable alternatives for every room in your home and every aspect of your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-[#2E2E2E] mb-2">{category.name}</h3>
                <p className="text-[#6B7280] mb-4 leading-relaxed">{category.description}</p>
                <Button variant="ghost" className="text-[#7AC74F] hover:text-[#6AB63F] hover:bg-[#7AC74F]/10 p-0">
                  Explore
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
