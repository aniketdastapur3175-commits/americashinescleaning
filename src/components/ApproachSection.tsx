"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, Calendar, Sparkles, HeartHandshake, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export default function ApproachSection() {
  const pillars = [
    {
      icon: MessageSquare,
      title: "Direct, Reliable Communication",
      desc: "No automated phone trees or days waiting for replies. When you reach out, you receive fast, courteous communication directly from our team in Joppatowne.",
    },
    {
      icon: Calendar,
      title: "Flexible, Predictable Scheduling",
      desc: "Scheduling your recurring or one-time clean is straightforward and flexible, designed to fit your family's weekly calendar and lifestyle.",
    },
    {
      icon: Sparkles,
      title: "Meticulous Attention to Detail",
      desc: "We focus on thorough care in the areas where life happens—scrubbing countertops, shining bathroom fixtures, wiping baseboards, and refreshing floors.",
    },
    {
      icon: HeartHandshake,
      title: "Respect for Your Space & Privacy",
      desc: "We treat your home, personal belongings, pets, and privacy with the highest degree of discretion, care, and professional respect on every visit.",
    },
  ];

  return (
    <section id="approach" className="py-28 sm:py-36 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Photo & Regional Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-white ring-1 ring-[#0A1128]/10 group">
              <Image
                src="/images/story_peaceful.jpg"
                alt="Pristine, light-filled residential living space cared for by America Shines Cleaning Service"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle bottom gradient and floating badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 space-y-2.5">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs flex items-center justify-between text-[#0A1128] shadow-md border border-white/80">
                  <span className="font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#3A6EA5]" />
                    Joppatowne, MD Hub
                  </span>
                  <span className="text-[#C5A880] font-bold uppercase tracking-wider text-[10px]">
                    Harford Co.
                  </span>
                </div>
                <p className="text-[11px] text-white/90 italic text-center font-light leading-relaxed">
                  &ldquo;A clean home provides quiet calm, order, and renewed time for what matters most.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Approach Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#3A6EA5] font-bold block">
                02 / The America Shines Standard
              </span>
              <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-[#0A1128] tracking-tight leading-tight">
                Quiet Excellence in Every Corner.
              </h2>
              <p className="text-base text-[#64748B] font-normal leading-relaxed pt-1">
                We believe exceptional cleaning begins before anyone knocks on your door.
                It starts with clear expectations, friendly communication, and genuine care for your home.
              </p>
            </div>

            {/* Approach Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] shadow-xs hover:border-[#3A6EA5]/40 transition-colors space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] text-[#3A6EA5] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#3A6EA5]" />
                    </div>
                    <h3 className="text-base font-editorial font-semibold text-[#0A1128]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#38455B] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct phone badge */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#64748B]">
              <span className="w-2 h-2 rounded-full bg-[#3A6EA5]" />
              <span>
                Questions before booking? Speak directly with us at{" "}
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="font-bold text-[#0A1128] hover:text-[#3A6EA5] underline decoration-[#C5A880]"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
                .
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
