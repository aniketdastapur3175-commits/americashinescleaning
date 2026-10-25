"use client";

import React, { useState } from "react";
import { MapPin, Search, CheckCircle2, ArrowRight, Phone, Navigation } from "lucide-react";
import { SERVICE_AREAS, SURROUNDING_COVERAGE_NOTE, BUSINESS_INFO } from "@/lib/constants";

interface ServiceAreasProps {
  onOpenQuoteWithZip: (zip: string) => void;
}

export default function ServiceAreas({ onOpenQuoteWithZip }: ServiceAreasProps) {
  const [query, setQuery] = useState("");
  const [checkResult, setCheckResult] = useState<{
    status: "confirmed" | "surrounding" | "idle";
    message: string;
    zip?: string;
  }>({ status: "idle", message: "" });

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = query.trim().toLowerCase();
    if (!clean) return;

    // Check if matches confirmed town name or zip code
    const isPrimaryMatch = SERVICE_AREAS.some(
      (area) =>
        area.name.toLowerCase() === clean ||
        area.zipCodes.some((z) => z === clean)
    );

    if (isPrimaryMatch) {
      setCheckResult({
        status: "confirmed",
        message: `Great news! ${query.trim()} is in our primary Harford County reported service zone. Availability will be confirmed upon estimate inquiry.`,
        zip: clean,
      });
    } else {
      setCheckResult({
        status: "surrounding",
        message: `America Shines is reported to accommodate surrounding communities throughout Harford and Baltimore Counties. Submit an inquiry to confirm scheduling for your address.`,
        zip: clean,
      });
    }
  };

  return (
    <section id="service-areas" className="py-28 sm:py-36 bg-[#FAF9F5] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3A6EA5]">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>03 / Regional Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-[#0A1128] tracking-tight">
            Rooted in Joppatowne. Serving Harford County.
          </h2>
          <p className="text-base text-[#64748B] font-normal leading-relaxed max-w-xl mx-auto">
            From our headquarters at 219 Philadelphia Rd along the Route 40 corridor, our teams travel across Harford and Baltimore Counties with dependable punctuality.
          </p>
        </div>

        {/* Interactive Coverage Checker Form */}
        <div className="max-w-xl mx-auto mb-16">
          <form
            onSubmit={handleCheck}
            className="p-2 sm:p-2.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-md flex flex-col sm:flex-row items-center gap-2 focus-within:ring-2 focus-within:ring-[#3A6EA5]/30"
          >
            <div className="relative w-full flex-1">
              <Search className="w-4 h-4 text-[#64748B] absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Enter your ZIP or town (e.g. 21085, Bel Air)..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (checkResult.status !== "idle") {
                    setCheckResult({ status: "idle", message: "" });
                  }
                }}
                className="w-full pl-11 pr-4 py-2.5 text-sm bg-transparent text-[#0A1128] placeholder-[#64748B] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0A1128] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162447] transition-all shrink-0 cursor-pointer shadow-sm"
            >
              Check Availability
            </button>
          </form>

          {/* Interactive Check Result Alert */}
          {checkResult.status !== "idle" && (
            <div
              className={`mt-4 p-4 rounded-xl border text-xs sm:text-sm transition-all ${
                checkResult.status === "confirmed"
                  ? "bg-[#EBF3FC] border-[#D0E1F9] text-[#0A1128]"
                  : "bg-amber-50 border-amber-200 text-amber-900"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#3A6EA5]" />
                  <span>{checkResult.message}</span>
                </div>
                <button
                  onClick={() => onOpenQuoteWithZip(checkResult.zip || "")}
                  className="px-4 py-1.5 rounded-full bg-[#0A1128] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162447] shrink-0 flex items-center gap-1 shadow-sm cursor-pointer"
                >
                  Book Area
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Primary Confirmed Service Area Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {SERVICE_AREAS.map((area) => (
            <button
              key={area.name}
              onClick={() => onOpenQuoteWithZip(area.zipCodes[0])}
              className="group p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#3A6EA5] text-left shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-[#EBF3FC] text-[#3A6EA5] flex items-center justify-center group-hover:bg-[#0A1128] group-hover:text-[#C5A880] transition-colors">
                  <Navigation className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] font-bold text-[#64748B] uppercase">
                  {area.state}
                </span>
              </div>
              <h3 className="text-lg font-editorial font-medium text-[#0A1128] group-hover:text-[#3A6EA5] transition-colors">
                {area.name}
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                ZIP {area.zipCodes.join(", ")}
              </p>
              <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#0A1128] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Request estimate</span>
                <ArrowRight className="w-3 h-3 text-[#C5A880]" />
              </div>
            </button>
          ))}

          {/* Surrounding Areas Card in Midnight Navy */}
          <div className="p-5 rounded-2xl bg-[#0A1128] text-white border border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold block mb-1">
                Extended Corridor
              </span>
              <h3 className="text-lg font-editorial font-medium text-white">
                Surrounding MD Areas
              </h3>
              <p className="text-xs text-white/75 mt-2 leading-relaxed font-light">
                We also accommodate nearby neighborhoods along I-95 and Route 40 across Harford and Baltimore Counties.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-white font-semibold cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>

        {/* Note */}
        <div className="text-center text-xs text-[#64748B] max-w-lg mx-auto">
          {SURROUNDING_COVERAGE_NOTE}
        </div>

      </div>
    </section>
  );
}
