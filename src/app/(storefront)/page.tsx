"use client";

import HeroSection from "@/components/HeroSection";
import DomainSearch from "@/components/DomainSearch";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import NeedHelpSection from "@/components/NeedHelpSection";
import ServerStatus from "@/components/ServerStatus";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import TrustedBySection from "@/components/TrustedBySection";
import OfferBanner from "@/components/OfferBanner";

export default function HomePage() {
  return (
    <>
      <OfferBanner />
      <HeroSection />
      <DomainSearch />
      <WhyChooseUs />
      <FeaturesSection />
      <PricingSection />
      <NeedHelpSection />
      <ServerStatus />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <TrustedBySection />
    </>
  );
}
