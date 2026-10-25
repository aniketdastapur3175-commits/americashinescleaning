"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

interface FloatingActionProps {
  onOpenQuote: () => void;
}

export default function FloatingAction({ onOpenQuote }: FloatingActionProps) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden flex items-center gap-2.5">
      <a
        href={BUSINESS_INFO.phoneTel}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white/95 backdrop-blur-md text-[#0A1128] border border-[#E2E8F0] shadow-lg text-xs font-bold active:scale-95 transition-all cursor-pointer"
        aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phoneFormatted}`}
      >
        <Phone className="w-4 h-4 text-[#3A6EA5]" />
        <span>Call {BUSINESS_INFO.phoneFormatted}</span>
      </a>

      <button
        onClick={onOpenQuote}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0A1128] text-white border border-[#C5A880]/50 shadow-lg text-xs font-bold uppercase tracking-wider active:scale-95 transition-all cursor-pointer"
        aria-label="Request an estimate"
      >
        <span>Get Estimate</span>
        <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
      </button>
    </div>
  );
}
