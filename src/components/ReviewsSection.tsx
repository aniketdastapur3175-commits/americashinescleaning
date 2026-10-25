"use client";

import React from "react";
import { Shield, Sparkles, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import { CLIENT_CARE_STANDARDS } from "@/lib/constants";

export default function ReviewsSection() {
  const icons = [MessageSquare, Sparkles, Shield, Clock];

  return (
    <section id="reviews" className="py-28 sm:py-36 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3A6EA5]">
            <Shield className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>04 / Client Care Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-[#0A1128] tracking-tight">
            Our Commitments to Every Home We Enter.
          </h2>
          <p className="text-base text-[#64748B] max-w-xl mx-auto leading-relaxed">
            We hold ourselves to a defined code of conduct. Here is what you can consistently rely upon when you welcome America Shines into your space.
          </p>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_CARE_STANDARDS.map((standard, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={standard.id}
                className="p-7 rounded-3xl bg-[#FAF9F5] border border-[#E2E8F0] shadow-xs hover:border-[#3A6EA5]/40 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#EBF3FC] text-[#3A6EA5] ring-1 ring-[#D0E1F9] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#3A6EA5]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C5A880] block mb-1">
                      Pillar 0{idx + 1} · {standard.pillar}
                    </span>
                    <h3 className="text-xl font-editorial font-normal text-[#0A1128]">
                      {standard.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#38455B] leading-relaxed">
                    {standard.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-semibold text-[#3A6EA5]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standard of Service</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-12 p-5 rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#64748B] leading-relaxed">
            <strong className="text-[#0A1128]">Preview Notice:</strong> Client reviews, testimonials, and verified references will be displayed here once confirmed with the business owner. No reviews are fabricated.
          </p>
        </div>

      </div>
    </section>
  );
}
