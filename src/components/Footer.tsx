"use client";

import React from "react";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from "@/lib/constants";

interface FooterProps {
  onOpenQuote: (service?: string) => void;
  onOpenPrivacy: () => void;
}

export default function Footer({ onOpenQuote, onOpenPrivacy }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="bg-[#060B1C] text-white pt-24 pb-14 border-t border-[#16233B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#16233B]">
          
          {/* Col 1: Business Brand & Details */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0A1128] ring-1 ring-[#C5A880]/60 flex items-center justify-center text-[#C5A880] font-editorial text-sm font-bold">
                AS
              </div>
              <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-white">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm font-light">
              Contemporary residential care and deep sanitization services.
              Headquartered in Joppatowne, Maryland, and serving homes across Harford and Baltimore Counties.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.formatted}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="hover:text-white font-medium underline underline-offset-4 decoration-[#3A6EA5]"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.emailReported}`}
                  className="hover:text-white font-medium underline underline-offset-4 decoration-[#3A6EA5]"
                >
                  {BUSINESS_INFO.emailReported}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
              Home Care Services
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onOpenQuote(srv.id)}
                    className="hover:text-white text-left transition-colors cursor-pointer"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-white/75">
              {SERVICE_AREAS.map((area) => (
                <li key={area.name}>
                  <span>
                    {area.name}, {area.state} ({area.zipCodes.join(", ")})
                  </span>
                </li>
              ))}
              <li className="text-[11px] text-[#C5A880] pt-1">
                Plus Route 40 & I-95 corridor communities
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
              Quick Contact
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              Receive a fast, tailored estimate for your residence.
            </p>
            <button
              onClick={() => onOpenQuote()}
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#EBF3FC] text-[#0A1128] text-xs font-bold uppercase tracking-wider transition-colors text-center shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3A6EA5]" />
            </button>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full block py-2.5 px-4 rounded-xl border border-white/20 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center cursor-pointer"
            >
              Call {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>

        </div>

        {/* Concept Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-white/35 max-w-2xl leading-relaxed">
              Concept Redesign Notice: This project is an independent contemporary concept redesign prepared for America Shines Cleaning Service, LLC based on publicly accessible directory information. It is an unsolicited concept proposal and has not been officially approved or endorsed by the business owner.
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
