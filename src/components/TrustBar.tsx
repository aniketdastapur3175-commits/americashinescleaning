"use client";

import React from "react";
import { MessageSquare, MapPin, CheckCircle2, Shield, Info } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section id="trust" className="py-20 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#E2E8F0]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3A6EA5] block mb-1">
              Dependability & Standard of Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-editorial font-normal text-[#0A1128]">
              Why Harford County Homeowners Turn to America Shines
            </h2>
          </div>
          <p className="text-xs text-[#64748B] max-w-md md:text-right">
            Rooted in Joppatowne, Maryland. Every appointment is approached with meticulous care, courteous communication, and dependable scheduling.
          </p>
        </div>

        {/* 3 Editorial Authority Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Pillar 1: Local Directory Record */}
          <div className="p-7 rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#3A6EA5]/40 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A1128] text-[#C5A880] ring-1 ring-[#C5A880]/40 flex items-center justify-center shrink-0 shadow-sm">
                <Shield className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3A6EA5] block">
                  Reported Business Listing
                </span>
                <h3 className="text-xl font-editorial font-medium text-[#0A1128]">
                  Established Joppatowne Record
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                  Reported in Maryland public business records at 219 Philadelphia Rd. Focused on providing honest, attentive residential and commercial cleaning.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] text-[#3A6EA5] font-semibold">
              <Info className="w-3.5 h-3.5" />
              <span>Preview concept · Details subject to owner confirmation</span>
            </div>
          </div>

          {/* Pillar 2: Prompt Communication & Direct Contact */}
          <div className="p-7 rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#3A6EA5]/40 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A1128] text-[#D0E1F9] ring-1 ring-[#3A6EA5]/40 flex items-center justify-center shrink-0 shadow-sm">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3A6EA5] block">
                  Fast Direct Support
                </span>
                <h3 className="text-xl font-editorial font-medium text-[#0A1128]">
                  Direct Phone Contact
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                  No automated phone trees or days waiting for replies. When you contact us for an estimate or adjustment, you speak with our local team directly at {BUSINESS_INFO.phoneFormatted}.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] text-[#3A6EA5] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Direct call & email inquiries</span>
            </div>
          </div>

          {/* Pillar 3: Joppatowne Roots & Route 40 Corridor */}
          <div className="p-7 rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:border-[#3A6EA5]/40 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0A1128] text-[#C5A880] ring-1 ring-[#C5A880]/40 flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3A6EA5] block">
                  Harford County Corridor
                </span>
                <h3 className="text-xl font-editorial font-medium text-[#0A1128]">
                  219 Philadelphia Rd
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                  Centrally positioned on the Route 40 corridor to reliably serve Joppatowne, Bel Air, Edgewood, Abingdon, Fallston, and Baltimore County communities.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] text-[#3A6EA5] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Local dispatch & familiar team</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
