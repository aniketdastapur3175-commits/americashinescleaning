"use client";

import React, { useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0A1128]/70 backdrop-blur-sm transition-opacity"
      />

      <div
        className="relative w-full max-w-xl bg-[#FAF9F5] rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden z-10 p-6 sm:p-8 space-y-5"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#3A6EA5]" />
            <h2 id="privacy-modal-title" className="text-xl font-editorial font-bold text-[#0A1128]">
              Privacy & Information Policy
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#0A1128] rounded-full hover:bg-[#EBF3FC] cursor-pointer"
            aria-label="Close privacy policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-[#38455B] space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <p>
            At <strong>{BUSINESS_INFO.name}</strong>, we respect your personal privacy and the sanctuary of your home.
          </p>

          <h3 className="font-semibold text-[#0A1128] pt-1">Information Collection & Use</h3>
          <p>
            When you request an estimate or contact us through our website, we collect only the information necessary to fulfill your request: your name, contact phone number, email address, property ZIP code, and any cleaning notes you choose to share.
          </p>

          <h3 className="font-semibold text-[#0A1128] pt-1">No Sale or Sharing of Data</h3>
          <p>
            We do not sell, rent, or distribute your personal details to any third-party marketers. Information provided is strictly utilized to prepare service estimates, coordinate cleaning visits, and communicate directly regarding your service.
          </p>

          <h3 className="font-semibold text-[#0A1128] pt-1">Security & Communication</h3>
          <p>
            Submissions over our website are transmitted securely using industry-standard encryption. You may opt out of future communications from us at any time by calling {BUSINESS_INFO.phoneFormatted}.
          </p>
        </div>

        <div className="pt-3 border-t border-[#E2E8F0] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#0A1128] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#162447] transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
