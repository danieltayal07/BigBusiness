import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhySection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <ContactForm />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
