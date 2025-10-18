import { Button } from "@/components/ui/button"
import { Droplet, TreePine, Trash2, Users } from "lucide-react"

export default function ImpactSection() {
  const stats = [
    {
      icon: TreePine,
      value: "2.5M",
      label: "Trees Saved",
      color: "text-[#7AC74F]",
    },
    {
      icon: Droplet,
      value: "500K",
      label: "Liters Water Conserved",
      color: "text-[#7AC74F]",
    },
    {
      icon: Trash2,
      value: "1.2M",
      label: "Kg Waste Reduced",
      color: "text-[#FFC857]",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Community Members",
      color: "text-[#FFC857]",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#7AC74F] to-[#6AB63F] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Our Collective Impact</h2>
          <p className="text-xl text-white/90 leading-relaxed text-pretty">
            Together, we're making a real difference. Here's the environmental impact our community has achieved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-white/90 mb-6">Want to see your personal impact?</p>
          <Button size="lg" className="bg-white text-[#7AC74F] hover:bg-white/90 px-8 py-6 text-lg rounded-full">
            Calculate Your CO₂ Savings
          </Button>
        </div>
      </div>
    </section>
  )
}
