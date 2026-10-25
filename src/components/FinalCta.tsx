"use client";

import React from "react";
import { ArrowRight, Phone, Mail, Sparkles, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

interface FinalCtaProps {
  onOpenQuote: () => void;
}

export default function FinalCta({ onOpenQuote }: FinalCtaProps) {
  return (
    <section className="py-28 sm:py-36 bg-[#0A1128] text-white relative overflow-hidden">
      {/* Soft background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#3A6EA5] rounded-full blur-[160px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[#C5A880] rounded-full blur-[140px] opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A880]/30 text-xs font-bold text-[#C5A880] tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complimentary, Tailored Home Estimates</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-normal tracking-tight text-white leading-[1.08]">
          Let&apos;s make room
          <br />
          <span className="italic font-light text-[#D0E1F9]">for what matters.</span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
          Tell us about your space and living cadence. Whether you need reliable weekly maintenance or an intensive seasonal reset, we are ready to assist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0A1128] font-bold text-sm uppercase tracking-wider hover:bg-[#EBF3FC] shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Request Your Free Estimate</span>
            <ArrowRight className="w-4 h-4 text-[#3A6EA5] group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
            <span>Call {BUSINESS_INFO.phoneFormatted}</span>
          </a>

          <a
            href={`mailto:${BUSINESS_INFO.emailReported}`}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-transparent hover:bg-white/10 text-white/80 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#C5A880]" />
            <span>Email Inquiry</span>
          </a>
        </div>

        {/* Footnote */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            Local Joppatowne Business Record
          </span>
          <span>·</span>
          <span>219 Philadelphia Rd, Joppatowne, MD</span>
          <span>·</span>
          <span>Serving Harford & Baltimore Counties</span>
        </div>

      </div>
    </section>
  );
}
