"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, Shield, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative min-h-[94vh] pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center overflow-hidden bg-[#FAF9F5]">
      {/* Subtle architectural ambient backdrop */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#EBF3FC] rounded-full blur-[140px] opacity-70 pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#E8DCC8]/40 rounded-full blur-[120px] opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Editorial Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Conversion (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 z-10"
          >
            {/* Architectural Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EBF3FC] border border-[#D0E1F9] text-xs font-semibold tracking-wider text-[#0A1128]">
              <span className="w-2 h-2 rounded-full bg-[#3A6EA5]" />
              <span className="uppercase tracking-[0.14em]">Joppatowne, MD · Harford & Baltimore Counties</span>
            </div>

            {/* Oversized Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-editorial font-normal tracking-tight text-[#0A1128] leading-[1.06]">
              The Quiet Luxury of a{" "}
              <span className="italic font-light text-[#3A6EA5] block sm:inline">
                Truly Spotless
              </span>{" "}
              Home.
            </h1>

            {/* Editorial Body Text */}
            <p className="text-base sm:text-lg text-[#38455B] max-w-xl font-normal leading-relaxed">
              Thoughtful, methodical residential home care tailored to the cadence of your life.
              We take the weight of house cleaning off your shoulders with prompt communication,
              disciplined cleaners, and an elevated standard of clean.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 rounded-full bg-[#0A1128] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#162447] border border-[#C5A880]/50 shadow-[0_8px_24px_rgba(10,17,40,0.18)] hover:shadow-[0_12px_32px_rgba(10,17,40,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Request Your Free Estimate</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="px-6 py-4 rounded-full bg-white text-[#0A1128] font-semibold text-sm border border-[#E2E8F0] hover:border-[#3A6EA5]/50 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                aria-label={`Call America Shines at ${BUSINESS_INFO.phoneFormatted}`}
              >
                <div className="w-6 h-6 rounded-full bg-[#EBF3FC] flex items-center justify-center text-[#3A6EA5]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Trust Pill & Directory Reference Citation */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-full border border-[#E2E8F0] shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#3A6EA5]" />
                <span className="font-bold text-[#0A1128]">Joppatowne, MD</span>
                <span className="text-[#64748B]">· Reported Directory Listing</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[#64748B]">
                <Shield className="w-4 h-4 text-[#3A6EA5]" />
                <span>Customized Scope · Direct Communication</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Layered Editorial Composition (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Residential Image Container with Architectural Framing */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,17,40,0.12)] border-2 border-white ring-1 ring-[#0A1128]/10 group">
              <Image
                src="/images/hero.jpg"
                alt="Sunlit architectural luxury living room cared for by America Shines Cleaning Service, LLC"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              
              {/* Subtle architectural gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 via-transparent to-black/10" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-md flex items-center gap-1.5 text-[11px] font-semibold text-[#0A1128]">
                <Sparkles className="w-3 h-3 text-[#C5A880]" />
                <span>Harford County Care</span>
              </div>

              {/* Bottom Inset Content inside image */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A880] block">
                  The American Shines Standard
                </span>
                <p className="font-editorial text-xl sm:text-2xl font-light text-white leading-snug">
                  Meticulous floors, scrubbed tile, and restored calm.
                </p>
                <p className="text-xs text-white/80 flex items-center gap-1 pt-1">
                  <MapPin className="w-3 h-3 text-[#C5A880]" />
                  <span>219 Philadelphia Rd, Joppatowne, MD</span>
                </p>
              </div>
            </div>

            {/* Overlapping Floating Editorial Inset Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-8 bg-white p-4 rounded-2xl border border-[#E2E8F0] shadow-xl items-center gap-3.5 max-w-[280px] z-20">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 ring-1 ring-[#C5A880]/50">
                <Image
                  src="/images/service_deep.jpg"
                  alt="Detailed surface care"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#0A1128]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3A6EA5]" />
                  <span>Detailed Surface Care</span>
                </div>
                <p className="text-[10px] text-[#64748B] leading-tight">
                  Methodical room-by-room attention on every visit.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Architectural Metadata Datum Strip */}
        <div className="mt-16 pt-8 border-t border-[#E2E8F0] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#38455B]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EBF3FC] flex items-center justify-center text-[#3A6EA5] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-[#0A1128]">Joppatowne Headquarters</p>
              <p className="text-[#64748B]">219 Philadelphia Rd · Bel Air & Harford Dispatch</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EBF3FC] flex items-center justify-center text-[#3A6EA5] shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-[#0A1128]">Direct Communications</p>
              <p className="text-[#64748B]">+1 (443) 286-1945 · Fast quotes, no endless phone trees</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#EBF3FC] flex items-center justify-center text-[#3A6EA5] shrink-0">
              <Calendar className="w-4 h-4 text-[#3A6EA5]" />
            </div>
            <div>
              <p className="font-bold text-[#0A1128]">Flexible Scheduling</p>
              <p className="text-[#64748B]">Weekly, bi-weekly, or deep seasonal resets</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
