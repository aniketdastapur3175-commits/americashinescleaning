"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Calendar } from "lucide-react";
import { SERVICES } from "@/lib/constants";

interface ServicesSectionProps {
  onOpenQuote: (serviceId?: string) => void;
}

export default function ServicesSection({ onOpenQuote }: ServicesSectionProps) {
  const recurring = SERVICES.find((s) => s.id === "recurring")!;
  const deep = SERVICES.find((s) => s.id === "deep")!;
  const moveIn = SERVICES.find((s) => s.id === "move-in")!;
  const airbnb = SERVICES.find((s) => s.id === "airbnb")!;
  const office = SERVICES.find((s) => s.id === "home-office")!;

  return (
    <section id="services" className="py-28 sm:py-36 bg-[#FAF9F5] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Editorial & Asymmetrical */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8 pb-8 border-b border-[#E2E8F0]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3A6EA5]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>01 / The Home Care Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-editorial font-normal tracking-tight text-[#0A1128] leading-[1.08]">
              Methodical Care for Every Living Rhythm.
            </h2>
          </div>
          <p className="text-base text-[#38455B] max-w-md font-normal leading-relaxed">
            Rather than generic, one-size checklists, each service is structured around real living habits.
            Explore our curated residential disciplines below.
          </p>
        </div>

        {/* PORTFOLIO PIECE 1: Full-Width Panoramic Spotlight (Recurring Care) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] shadow-xl grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Panoramic Image on Left / Top (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px]">
            <Image
              src={recurring.image}
              alt="Recurring Residential Cleaning by America Shines Cleaning Service"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            
            <div className="absolute top-6 left-6 bg-[#0A1128]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Weekly · Bi-Weekly · Monthly</span>
            </div>
          </div>

          {/* Editorial Content on Right (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-[#0A1128] text-white">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A880]">
                  Core Foundation
                </span>
                <h3 className="text-3xl sm:text-4xl font-editorial font-normal leading-tight text-white">
                  {recurring.title}
                </h3>
                <p className="text-sm font-medium text-[#D0E1F9]">
                  {recurring.shortDesc}
                </p>
              </div>

              <p className="text-sm text-white/80 leading-relaxed font-light">
                {recurring.fullDesc}
              </p>

              {/* Core checklist items */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 block">
                  Included Focus:
                </span>
                <ul className="grid grid-cols-1 gap-2 text-xs text-white/90">
                  {recurring.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => onOpenQuote("recurring")}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#0A1128] font-semibold text-xs uppercase tracking-wider hover:bg-[#EBF3FC] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md"
              >
                <span>Schedule Recurring Care</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#3A6EA5] group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-xs text-white/60">No contract required</span>
            </div>
          </div>
        </motion.div>

        {/* PORTFOLIO PIECES 2 & 3: Asymmetrical 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Deep Cleaning Reset: Tall Vertical Composition (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] shadow-lg flex flex-col justify-between group hover:shadow-xl transition-all"
          >
            {/* Image Container with vertical aspect ratio */}
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
              <Image
                src={deep.image}
                alt="Deep Cleaning Reset by America Shines Cleaning Service"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0A1128] shadow-sm">
                {deep.badge}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3A6EA5]">
                  Intensive Seasonal Renewal
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-[#0A1128]">
                  {deep.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {deep.fullDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                    Detailed Scope:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#242E3E]">
                    {deep.details.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#3A6EA5] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                <button
                  onClick={() => onOpenQuote("deep")}
                  className="px-6 py-3 rounded-full bg-[#0A1128] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162447] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Request Deep Reset Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
                <span className="text-xs text-[#64748B]">Seasonal or Annual</span>
              </div>
            </div>
          </motion.div>

          {/* Move-In / Move-Out: Architectural Landscape Composition (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] shadow-lg flex flex-col justify-between group hover:shadow-xl transition-all"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
              <Image
                src={moveIn.image}
                alt="Move-In and Move-Out Cleaning by America Shines"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0A1128] shadow-sm">
                {moveIn.badge}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3A6EA5]">
                  Transition & Turnover
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-[#0A1128]">
                  {moveIn.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {moveIn.fullDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                    Turnover Checklist:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#242E3E]">
                    {moveIn.details.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#3A6EA5] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                <button
                  onClick={() => onOpenQuote("move-in")}
                  className="px-6 py-3 rounded-full bg-[#0A1128] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162447] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Plan Move-In / Move-Out</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
                <span className="text-xs text-[#64748B]">Empty-Home Readiness</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* PORTFOLIO PIECES 4 & 5: Specialty Home & Business Duo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Airbnb / Vacation Rental */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#3A6EA5]">
                  Short-Term Hosting
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#EBF3FC] text-[#0A1128] font-semibold">
                  {airbnb.badge}
                </span>
              </div>
              <h3 className="text-2xl font-editorial font-normal text-[#0A1128]">
                {airbnb.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {airbnb.fullDesc}
              </p>
              <div className="pt-2">
                <ul className="space-y-1.5 text-xs text-[#242E3E]">
                  {airbnb.details.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
              <button
                onClick={() => onOpenQuote("airbnb")}
                className="text-xs font-bold uppercase tracking-wider text-[#0A1128] hover:text-[#3A6EA5] flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Request Host Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>
          </motion.div>

          {/* Office / Commercial Space */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#3A6EA5]">
                  Workplace Care
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#EBF3FC] text-[#0A1128] font-semibold">
                  {office.badge}
                </span>
              </div>
              <h3 className="text-2xl font-editorial font-normal text-[#0A1128]">
                {office.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {office.fullDesc}
              </p>
              <div className="pt-2">
                <ul className="space-y-1.5 text-xs text-[#242E3E]">
                  {office.details.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
              <button
                onClick={() => onOpenQuote("home-office")}
                className="text-xs font-bold uppercase tracking-wider text-[#0A1128] hover:text-[#3A6EA5] flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Inquire for Workspace Care</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
