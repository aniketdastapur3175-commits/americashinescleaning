"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Home,
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
} from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/lib/constants";
import { QuoteFormData } from "@/lib/schema";

type ServiceType = "recurring" | "deep" | "move-in" | "airbnb" | "home-office";
type PropertyType = "house" | "apartment" | "office" | "other";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  initialZip?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedService,
  initialZip,
}: QuoteModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State initialized from props
  const [serviceType, setServiceType] = useState<ServiceType>(
    (preselectedService as ServiceType) || "recurring"
  );
  const [frequency, setFrequency] = useState<"recurring" | "one-time">("recurring");
  const [propertyType, setPropertyType] = useState<PropertyType>("house");
  const [zipCode, setZipCode] = useState<string>(initialZip || "");
  const [propertySize, setPropertySize] = useState<string>("");

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [additionalNotes, setAdditionalNotes] = useState<string>("");
  const [consent, setConsent] = useState<boolean>(false);
  const [websiteTrap, setWebsiteTrap] = useState<string>("");

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverResult, setServerResult] = useState<{
    success: boolean;
    mode?: string;
    message: string;
  } | null>(null);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!serviceType) errs.serviceType = "Please select a cleaning service";
    if (!frequency) errs.frequency = "Please choose a frequency option";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!propertyType) errs.propertyType = "Please select a property type";
    if (!zipCode || zipCode.trim().length < 5) {
      errs.zipCode = "Please provide a valid 5-digit ZIP code (e.g. 21085)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!fullName || fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errs.email = "Please enter a valid email address";
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone || phoneDigits.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }
    if (!consent) {
      errs.consent = "Please confirm your consent for service contact";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setServerResult(null);

    const payload: Partial<QuoteFormData> = {
      serviceType,
      frequency,
      propertyType,
      zipCode: zipCode.trim(),
      propertySize: propertySize.trim() || undefined,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      preferredDate: preferredDate || undefined,
      additionalNotes: additionalNotes.trim() || undefined,
      consent: true as const,
      websiteTrap,
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setServerResult({
          success: true,
          mode: data.mode,
          message: data.message,
        });
      } else {
        setServerResult({
          success: false,
          message:
            data.error ||
            `Unable to submit quote. Please call ${BUSINESS_INFO.phoneFormatted} directly.`,
        });
      }
    } catch {
      setServerResult({
        success: false,
        message: `Network error while sending inquiry. Please call us directly at ${BUSINESS_INFO.phoneFormatted}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setServerResult(null);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A1128]/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#FAF9F5] rounded-3xl shadow-2xl border border-[#E2E8F0] overflow-hidden z-10 my-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          {/* Header */}
          <div className="bg-[#0A1128] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-bold block">
                {BUSINESS_INFO.name}
              </span>
              <h2 id="quote-modal-title" className="text-xl sm:text-2xl font-editorial font-normal text-white">
                Request an Upfront Estimate
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step Progress Indicator (Only shown if not finished) */}
          {!serverResult?.success && (
            <div className="bg-[#EBF3FC] border-b border-[#D0E1F9] px-6 py-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#0A1128] mb-1.5">
                <span>
                  Step {step} of 3:{" "}
                  {step === 1 && "Service Selection"}
                  {step === 2 && "Property Details"}
                  {step === 3 && "Contact & Schedule"}
                </span>
                <span className="text-[#3A6EA5]">{step === 1 ? "33%" : step === 2 ? "66%" : "100%"}</span>
              </div>
              <div className="w-full bg-[#D0E1F9] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#0A1128] h-full transition-all duration-300"
                  style={{
                    width: step === 1 ? "33.3%" : step === 2 ? "66.6%" : "100%",
                  }}
                />
              </div>
            </div>
          )}

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {/* SUCCESS STATE */}
            {serverResult?.success ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0A1128] text-white flex items-center justify-center mx-auto shadow-md ring-1 ring-[#C5A880]/50">
                  <CheckCircle2 className="w-9 h-9 text-[#C5A880]" />
                </div>
                <h3 className="text-2xl font-editorial text-[#0A1128]">
                  Estimate Request Received
                </h3>
                <p className="text-sm text-[#38455B] max-w-md mx-auto leading-relaxed">
                  {serverResult.message}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0A1128] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#162447] transition-all cursor-pointer shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#C5A880]" />
                    Call {BUSINESS_INFO.phoneFormatted}
                  </a>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#0A1128] text-xs font-bold uppercase tracking-wider hover:bg-[#EBF3FC] transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for bot protection */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="websiteTrap">Leave blank</label>
                  <input
                    type="text"
                    id="websiteTrap"
                    name="websiteTrap"
                    tabIndex={-1}
                    value={websiteTrap}
                    onChange={(e) => setWebsiteTrap(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                {/* STEP 1: SERVICE & FREQUENCY */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-[#0A1128] mb-3">
                        Choose Desired Home Care Discipline
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {SERVICES.map((srv) => (
                          <button
                            type="button"
                            key={srv.id}
                            onClick={() => {
                              setServiceType(srv.id as ServiceType);
                              setErrors((prev) => ({ ...prev, serviceType: "" }));
                            }}
                            className={`flex flex-col text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                              serviceType === srv.id
                                ? "bg-[#0A1128] text-white border-[#0A1128] shadow-md ring-1 ring-[#C5A880]/40"
                                : "bg-white text-[#0A1128] border-[#E2E8F0] hover:border-[#3A6EA5] hover:bg-[#EBF3FC]/40"
                            }`}
                          >
                            <span className="font-semibold text-sm flex items-center justify-between">
                              {srv.title}
                              {serviceType === srv.id && (
                                <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                              )}
                            </span>
                            <span
                              className={`text-xs mt-1 leading-snug ${
                                serviceType === srv.id
                                  ? "text-white/80"
                                  : "text-[#64748B]"
                              }`}
                            >
                              {srv.shortDesc}
                            </span>
                          </button>
                        ))}
                      </div>
                      {errors.serviceType && (
                        <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.serviceType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#0A1128] mb-2">
                        Preferred Frequency
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFrequency("recurring")}
                          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                            frequency === "recurring"
                              ? "bg-[#0A1128] text-white border-[#0A1128] shadow-md ring-1 ring-[#C5A880]/40"
                              : "bg-white text-[#0A1128] border-[#E2E8F0] hover:bg-[#EBF3FC]/40"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm">Recurring Care</span>
                            <Clock className="w-4 h-4 text-[#C5A880]" />
                          </div>
                          <span
                            className={`text-xs block mt-1 ${
                              frequency === "recurring"
                                ? "text-white/80"
                                : "text-[#64748B]"
                            }`}
                          >
                            Weekly, bi-weekly, or monthly
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFrequency("one-time")}
                          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                            frequency === "one-time"
                              ? "bg-[#0A1128] text-white border-[#0A1128] shadow-md ring-1 ring-[#C5A880]/40"
                              : "bg-white text-[#0A1128] border-[#E2E8F0] hover:bg-[#EBF3FC]/40"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm">One-Time Reset</span>
                            <Sparkles className="w-4 h-4 text-[#C5A880]" />
                          </div>
                          <span
                            className={`text-xs block mt-1 ${
                              frequency === "one-time"
                                ? "text-white/80"
                                : "text-[#64748B]"
                            }`}
                          >
                            Deep seasonal clean or move-in
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: PROPERTY DETAILS */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-[#0A1128] mb-3">
                        Property Architecture
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {[
                          { id: "house", label: "Single Family", icon: Home },
                          { id: "apartment", label: "Townhome / Apt", icon: Building2 },
                          { id: "office", label: "Office", icon: Building2 },
                          { id: "other", label: "Other", icon: Sparkles },
                        ].map((item) => {
                          const IconComp = item.icon;
                          const isSelected = propertyType === item.id;
                          return (
                            <button
                              type="button"
                              key={item.id}
                              onClick={() => {
                                setPropertyType(item.id as PropertyType);
                                setErrors((prev) => ({ ...prev, propertyType: "" }));
                              }}
                              className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-[#0A1128] text-white border-[#0A1128] shadow-md ring-1 ring-[#C5A880]/40"
                                  : "bg-white text-[#0A1128] border-[#E2E8F0] hover:bg-[#EBF3FC]/40"
                              }`}
                            >
                              <IconComp className="w-5 h-5 text-[#C5A880]" />
                              <span className="text-xs font-semibold">{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                      {errors.propertyType && (
                        <p className="text-xs text-red-600 mt-1.5">
                          {errors.propertyType}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="zipCode"
                          className="block text-sm font-bold text-[#0A1128] mb-1.5"
                        >
                          Property ZIP Code <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="zipCode"
                            type="text"
                            maxLength={10}
                            placeholder="e.g. 21085"
                            value={zipCode}
                            onChange={(e) => {
                              setZipCode(e.target.value);
                              setErrors((prev) => ({ ...prev, zipCode: "" }));
                            }}
                            className={`w-full px-4 py-3 rounded-xl border bg-white text-[#0A1128] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1128] ${
                              errors.zipCode ? "border-red-500" : "border-[#E2E8F0]"
                            }`}
                          />
                          <MapPin className="w-4 h-4 text-[#64748B] absolute right-3.5 top-3.5" />
                        </div>
                        {errors.zipCode && (
                          <p className="text-xs text-red-600 mt-1">
                            {errors.zipCode}
                          </p>
                        )}
                        <p className="text-[11px] text-[#64748B] mt-1">
                          Serving Joppatowne, Bel Air, Edgewood, Abingdon & nearby Harford County.
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="propertySize"
                          className="block text-sm font-bold text-[#0A1128] mb-1.5"
                        >
                          Approximate Size <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
                        </label>
                        <input
                          id="propertySize"
                          type="text"
                          placeholder="e.g. 3 bed, 2.5 bath or 2,400 sq ft"
                          value={propertySize}
                          onChange={(e) => setPropertySize(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1128] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1128]"
                        />
                        <p className="text-[11px] text-[#64748B] mt-1">
                          Assists in calibrating crew scheduling.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: CONTACT & PREFERENCES */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-bold text-[#0A1128] mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Your full name"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          setErrors((prev) => ({ ...prev, fullName: "" }));
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white text-[#0A1128] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1128] ${
                          errors.fullName ? "border-red-500" : "border-[#E2E8F0]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold text-[#0A1128] mb-1.5"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setErrors((prev) => ({ ...prev, email: "" }));
                            }}
                            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-[#0A1128] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1128] ${
                              errors.email ? "border-red-500" : "border-[#E2E8F0]"
                            }`}
                          />
                          <Mail className="w-4 h-4 text-[#64748B] absolute right-3.5 top-3.5" />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-bold text-[#0A1128] mb-1.5"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="phone"
                            type="tel"
                            placeholder="(443) 286-1945"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              setErrors((prev) => ({ ...prev, phone: "" }));
                            }}
                            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-[#0A1128] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1128] ${
                              errors.phone ? "border-red-500" : "border-[#E2E8F0]"
                            }`}
                          />
                          <Phone className="w-4 h-4 text-[#64748B] absolute right-3.5 top-3.5" />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="preferredDate"
                          className="block text-sm font-bold text-[#0A1128] mb-1.5"
                        >
                          Preferred Date <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
                        </label>
                        <input
                          id="preferredDate"
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full px-4 py-2 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1128] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1128]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="notes"
                          className="block text-sm font-bold text-[#0A1128] mb-1.5"
                        >
                          Special Instructions <span className="text-xs font-normal text-[#64748B]">(Optional)</span>
                        </label>
                        <input
                          id="notes"
                          type="text"
                          placeholder="Pets, focus surfaces, key lockbox"
                          value={additionalNotes}
                          onChange={(e) => setAdditionalNotes(e.target.value)}
                          className="w-full px-4 py-2 rounded-xl border border-[#E2E8F0] bg-white text-[#0A1128] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1128]"
                        />
                      </div>
                    </div>

                    {/* Consent checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => {
                            setConsent(e.target.checked);
                            setErrors((prev) => ({ ...prev, consent: "" }));
                          }}
                          className="mt-1 w-4 h-4 text-[#0A1128] border-[#E2E8F0] rounded focus:ring-[#0A1128] cursor-pointer"
                        />
                        <span className="text-xs text-[#38455B] leading-relaxed">
                          I consent to {BUSINESS_INFO.name} contacting me via phone or email regarding this estimate request.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {/* Server error / fallback notice */}
                    {serverResult && !serverResult.success && (
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-950 text-xs space-y-2.5">
                        <div className="flex items-start gap-2.5">
                          <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
                          <div className="space-y-1">
                            <p className="font-semibold text-amber-900">Direct Contact Available</p>
                            <p className="text-amber-800 leading-relaxed">{serverResult.message}</p>
                          </div>
                        </div>
                        <div className="pt-1 flex items-center gap-3">
                          <a
                            href={BUSINESS_INFO.phoneTel}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A1128] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#162447] transition-all cursor-pointer shadow-sm"
                          >
                            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                            <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                          </a>
                          <span className="text-[11px] text-amber-800/80">Direct Joppatowne dispatch</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* MODAL FOOTER BUTTONS */}
                <div className="pt-5 border-t border-[#E2E8F0] flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#38455B] hover:text-[#0A1128] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <span className="text-xs text-[#64748B]">
                      Zero obligation · Free estimate
                    </span>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-[#0A1128] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#162447] flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-full bg-[#0A1128] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#162447] flex items-center gap-2 shadow-sm disabled:opacity-70 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#C5A880]" />
                          <span>Submit Estimate Request</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
