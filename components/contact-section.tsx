import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F4F8F4]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6 text-balance">
              Get in <span className="text-[#7AC74F]">Touch</span>
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed text-pretty">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#7AC74F]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#7AC74F]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2E2E2E] mb-2">Email Us</h3>
                  <p className="text-[#6B7280]">hello@greenrecycleliving.co</p>
                  <p className="text-[#6B7280]">support@greenrecycleliving.co</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#7AC74F]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#7AC74F]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2E2E2E] mb-2">Call Us</h3>
                  <p className="text-[#6B7280]">+1 336-822-8685</p>
                  <p className="text-sm text-[#6B7280]">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#7AC74F]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#7AC74F]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2E2E2E] mb-2">Visit Us</h3>
                  <p className="text-[#6B7280]">4162 Fire Access Road</p>
                  <p className="text-[#6B7280]">High Point, North Carolina 27260</p>
                  <p className="text-[#6B7280]">United States</p>
                </div>
              </div>
            </div>

            <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
              <div>
                <Input placeholder="Your Name" className="px-4 py-6 rounded-xl" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="px-4 py-6 rounded-xl" />
              </div>
              <div>
                <Input placeholder="Subject" className="px-4 py-6 rounded-xl" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={5} className="px-4 py-4 rounded-xl resize-none" />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#7AC74F] hover:bg-[#6AB63F] text-white py-6 text-lg rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
