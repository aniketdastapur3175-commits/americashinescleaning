import React from "react";
import Link from "next/link";
import { Home, Phone, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#242E3E] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#0A1128] text-[#C5A880] ring-1 ring-[#C5A880]/50 flex items-center justify-center mx-auto shadow-md">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#3A6EA5] font-bold">
            404 Error
          </span>
          <h1 className="text-4xl sm:text-5xl font-editorial font-normal text-[#0A1128]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#64748B] mt-2 leading-relaxed">
            The page you are looking for does not exist or has been moved. Let&apos;s guide you back to our home care presentation.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A1128] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#162447] transition-all shadow-sm cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#C5A880]" />
            <span>Return Home</span>
          </Link>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#0A1128] text-xs font-bold uppercase tracking-wider hover:bg-[#EBF3FC] transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#3A6EA5]" />
            <span>Call {BUSINESS_INFO.phoneFormatted}</span>
          </a>
        </div>

        <p className="text-xs text-[#64748B] pt-4">
          {BUSINESS_INFO.name} · {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}
        </p>
      </div>
    </main>
  );
}
