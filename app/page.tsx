import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhySection from "@/components/why-section"
import ServicesSection from "@/components/services-section"
import TestimonialSection from "@/components/testimonial-section"
import PortfolioSection from "@/components/portfolio-section"
import PricingSection from "@/components/pricing-section"
import CTASection from "@/components/cta-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <TestimonialSection />
      <PortfolioSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}
