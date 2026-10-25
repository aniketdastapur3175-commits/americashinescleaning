"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import StorySection from "@/components/StorySection";
import ApproachSection from "@/components/ApproachSection";
import ServiceAreas from "@/components/ServiceAreas";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import PrivacyModal from "@/components/PrivacyModal";
import FloatingAction from "@/components/FloatingAction";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [initialZip, setInitialZip] = useState<string | undefined>(undefined);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleOpenQuote = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setInitialZip(undefined);
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithZip = (zip: string) => {
    setInitialZip(zip);
    setIsQuoteOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#242E3E] flex flex-col relative selection:bg-[#0A1128] selection:text-[#FAF9F5]">
      {/* Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Cinematic Hero */}
      <Hero onOpenQuote={() => handleOpenQuote()} />

      {/* Trust & Reputation */}
      <TrustBar />

      {/* Immersive Services Showcase */}
      <ServicesSection onOpenQuote={handleOpenQuote} />

      {/* Apple-style Storytelling ("Coming home should feel different.") */}
      <StorySection onOpenQuote={() => handleOpenQuote()} />

      {/* The America Shines Standard */}
      <ApproachSection />

      {/* Service Areas with Interactive Coverage Checker */}
      <ServiceAreas onOpenQuoteWithZip={handleOpenQuoteWithZip} />

      {/* Testimonials */}
      <ReviewsSection />

      {/* FAQs */}
      <FaqSection onOpenQuote={() => handleOpenQuote()} />

      {/* Final Conversion Section */}
      <FinalCta onOpenQuote={() => handleOpenQuote()} />

      {/* Footer */}
      <Footer
        onOpenQuote={() => handleOpenQuote()}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Floating Action Bar for Mobile Conversion */}
      <FloatingAction onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive 3-Step Quote Request Modal */}
      <QuoteModal
        key={`${preselectedService || "default"}_${initialZip || "nozip"}_${isQuoteOpen ? "open" : "closed"}`}
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedService={preselectedService}
        initialZip={initialZip}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </main>
  );
}
