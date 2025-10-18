import Hero from "@/components/hero"
import WhySection from "@/components/why-section"
import ProductCategories from "@/components/product-categories"
import TopProduct from "@/components/top-product"
import ImpactSection from "@/components/impact-section"
import Testimonials from "@/components/testimonials"
import BlogPreview from "@/components/blog-preview"
import VideoSection from "@/components/video-section"
import Newsletter from "@/components/newsletter"
import Partners from "@/components/partners"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhySection />
      <ProductCategories />
      <TopProduct />
      <ImpactSection />
      <Testimonials />
      <BlogPreview />
      <VideoSection />
      <Newsletter />
      <Partners />
      <ContactSection />
      <Footer />
    </main>
  )
}
