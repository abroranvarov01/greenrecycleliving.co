import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function BlogPreview() {
  const posts = [
    {
      title: "10 Easy Swaps for a Zero Waste Kitchen",
      excerpt: "Transform your kitchen into an eco-friendly space with these simple, affordable changes.",
      image: "/zero-waste-kitchen-bamboo-products.jpg",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Kitchen",
    },
    {
      title: "The Complete Guide to Sustainable Living",
      excerpt: "Everything you need to know about starting your journey towards a more sustainable lifestyle.",
      image: "/eco-friendly-home.png",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Lifestyle",
    },
    {
      title: "Why Bamboo is the Future of Eco Products",
      excerpt: "Discover the amazing properties of bamboo and why it's revolutionizing sustainable products.",
      image: "/bamboo-forest-sustainable-material.jpg",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Materials",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-4 text-balance">
              Latest from Our <span className="text-[#7AC74F]">Blog</span>
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Tips, guides, and inspiration for sustainable living.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex border-[#7AC74F] text-[#7AC74F] hover:bg-[#7AC74F]/10 bg-transparent"
          >
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-[#F4F8F4] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[#7AC74F]/20 text-[#7AC74F] rounded-full text-sm font-medium mb-4">
                  {post.category}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2E2E2E] mb-3 group-hover:text-[#7AC74F] transition-colors text-balance">
                  {post.title}
                </h3>
                <p className="text-[#6B7280] mb-4 leading-relaxed text-pretty">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="border-[#7AC74F] text-[#7AC74F] hover:bg-[#7AC74F]/10 bg-transparent">
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
