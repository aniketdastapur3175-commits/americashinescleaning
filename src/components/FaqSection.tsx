"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";
import { FAQS, BUSINESS_INFO } from "@/lib/constants";

interface FaqSectionProps {
  onOpenQuote: () => void;
}

export default function FaqSection({ onOpenQuote }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-28 sm:py-36 bg-[#FAF9F5] border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3A6EA5]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>05 / Clarity & Expectations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-[#0A1128] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#64748B] max-w-xl mx-auto">
            Transparent information regarding scheduling, equipment, access, and service areas.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all duration-200 shadow-xs hover:border-[#3A6EA5]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-editorial text-lg sm:text-xl font-medium text-[#0A1128] hover:text-[#3A6EA5] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#0A1128] text-white rotate-180"
                        : "bg-[#EBF3FC] text-[#3A6EA5]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#38455B] leading-relaxed border-t border-[#E2E8F0] mt-1"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="font-editorial text-xl font-semibold text-[#0A1128]">
              Have a special request or unique property layout?
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Speak directly with our Joppatowne team or submit a customized estimate request.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-5 py-3 rounded-full border border-[#0A1128] text-[#0A1128] text-xs font-semibold uppercase tracking-wider hover:bg-[#EBF3FC] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#3A6EA5]" />
              Call {BUSINESS_INFO.phoneFormatted}
            </a>

            <button
              onClick={onOpenQuote}
              className="px-5 py-3 rounded-full bg-[#0A1128] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162447] shadow-sm transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
