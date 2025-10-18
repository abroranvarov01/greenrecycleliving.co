import { Facebook, Instagram, Twitter, Youtube, Leaf } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Shop: ["All Products", "Kitchen", "Bathroom", "Office", "Outdoor", "Best Sellers"],
    Company: ["About Us", "Our Mission", "Sustainability", "Careers", "Press"],
    Support: ["Contact", "FAQ", "Shipping", "Returns", "Track Order"],
    Resources: ["Blog", "Guides", "Eco Calculator", "Community", "Events"],
  }

  return (
    <footer className="bg-[#2E2E2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-[#7AC74F]" />
              <span className="font-serif text-2xl font-bold">GreenRecycleLiving</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Making sustainable living simple, accessible, and beautiful for everyone. Join us in creating a greener
              future.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7AC74F] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7AC74F] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7AC74F] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7AC74F] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-[#7AC74F] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">© 2025 GreenRecycleLiving.co. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-[#7AC74F] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-[#7AC74F] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-[#7AC74F] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
