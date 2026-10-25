"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

interface NavbarProps {
  onOpenQuote: (service?: string) => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Our Standard", href: "#approach" },
    { name: "Service Areas", href: "#service-areas" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "editorial-glass border-b border-[#E2E8F0]/80 shadow-[0_2px_14px_rgba(10,17,40,0.04)] py-3"
            : "bg-[#FAF9F5]/90 backdrop-blur-sm border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Wordmark Logo */}
            <a
              href="#"
              className="group flex items-center gap-3 shrink-0 focus:outline-none"
              aria-label="America Shines Cleaning Service Home"
            >
              <div className="w-9 h-9 rounded-full bg-[#0A1128] ring-1 ring-[#C5A880]/60 flex items-center justify-center text-[#C5A880] font-editorial text-sm font-semibold tracking-wider group-hover:scale-105 transition-transform shadow-xs shrink-0">
                AS
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-xl font-bold tracking-tight text-[#0A1128] leading-none whitespace-nowrap">
                  {BUSINESS_INFO.shortName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#64748B] font-sans font-medium mt-1 whitespace-nowrap">
                  Joppatowne, MD · Harford Co.
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Visible on lg and above) */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-medium text-[#38455B] hover:text-[#0A1128] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A880] hover:after:w-full after:transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              
              {/* Desktop Phone Pill (Visible on xl and above) */}
              <a
                href={BUSINESS_INFO.phoneTel}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-[#0A1128] bg-[#EBF3FC] hover:bg-[#D0E1F9] border border-[#D0E1F9] px-3.5 py-2 rounded-full transition-all whitespace-nowrap shrink-0"
                aria-label={`Call America Shines at ${BUSINESS_INFO.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#3A6EA5] shrink-0" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              {/* Compact Phone Icon Button (Visible on lg and md only to save space) */}
              <a
                href={BUSINESS_INFO.phoneTel}
                className="hidden md:inline-flex xl:hidden items-center justify-center w-9 h-9 rounded-full bg-[#EBF3FC] hover:bg-[#D0E1F9] border border-[#D0E1F9] text-[#3A6EA5] transition-all shrink-0"
                aria-label={`Call ${BUSINESS_INFO.phoneFormatted}`}
                title={`Call ${BUSINESS_INFO.phoneFormatted}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Estimate Request Button */}
              <button
                onClick={() => onOpenQuote()}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0A1128] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162447] border border-[#C5A880]/30 shadow-xs hover:shadow-md transition-all active:scale-[0.98] inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Request Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
              </button>

              {/* Mobile / Tablet Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#0A1128] hover:bg-[#EBF3FC] transition-colors lg:hidden shrink-0 cursor-pointer"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF9F5] animate-fadeIn">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0A1128] ring-1 ring-[#C5A880]/50 flex items-center justify-center text-[#C5A880] font-editorial text-sm font-bold">
                AS
              </div>
              <span className="font-editorial text-xl font-bold text-[#0A1128]">
                {BUSINESS_INFO.shortName}
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-[#EBF3FC] text-[#0A1128] cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 px-6 py-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-widest text-[#64748B] font-bold">
                Menu & Navigation
              </span>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-editorial font-medium text-[#0A1128] hover:text-[#3A6EA5] py-2.5 border-b border-[#E2E8F0] cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 space-y-3.5">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#EBF3FC] border border-[#D0E1F9] text-[#0A1128] font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#3A6EA5]" />
                Call {BUSINESS_INFO.phoneFormatted}
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-xl bg-[#0A1128] text-white font-semibold text-sm hover:bg-[#162447] border border-[#C5A880]/50 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request an Estimate</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-[#64748B]">
                  Joppatowne, MD · Harford County & Nearby
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
