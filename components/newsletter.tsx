import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#7AC74F] to-[#6AB63F] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
            <Mail className="w-10 h-10 text-white" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Join Our Green Community</h2>

          <p className="text-xl text-white/90 mb-8 leading-relaxed text-pretty">
            Get exclusive eco-tips, sustainable living guides, and special offers delivered to your inbox every week.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-6 rounded-full bg-white text-[#2E2E2E] border-0 text-lg"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-[#FFC857] hover:bg-[#FFB627] text-white px-8 py-6 text-lg rounded-full whitespace-nowrap"
            >
              Subscribe Now
            </Button>
          </form>

          <p className="text-sm text-white/70 mt-4">🌱 Join 50,000+ eco-conscious subscribers. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
