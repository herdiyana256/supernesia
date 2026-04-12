import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhySection from "@/components/why-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import StatsSection from "@/components/stats-section"
import TestimonialSection from "@/components/testimonial-section"
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
      <PortfolioSection />
      <StatsSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
