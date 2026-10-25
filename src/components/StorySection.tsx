"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Moon, Clock } from "lucide-react";

interface StorySectionProps {
  onOpenQuote: () => void;
}

export default function StorySection({ onOpenQuote }: StorySectionProps) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(1);

  const stories = [
    {
      id: "busy-day",
      phase: "Chapter 01",
      title: "The rush of the outside day.",
      tag: "The Outside Rush",
      icon: Clock,
      description:
        "Long commutes along I-95 or Route 40, back-to-back meetings, and endless family commitments. When the day demands everything from you, the last thing you should face when walking in the door is a mountain of chores.",
      quote: "You shouldn't have to spend your evenings cleaning the home you worked all day to afford.",
      image: "/images/hero.jpg",
    },
    {
      id: "refreshed-space",
      phase: "Chapter 02",
      title: "The unmistakable moment of arrival.",
      tag: "The Moment of Arrival",
      icon: Sparkles,
      description:
        "Turning the key in the latch and stepping across the threshold. The faint scent of clean air. Sunlight reflecting off freshly washed floors. The quiet satisfaction of seeing every counter cleared and every cushion placed.",
      quote: "The instant feeling of a deep breath you didn't even realize you were holding.",
      image: "/images/service_recurring.jpg",
    },
    {
      id: "peaceful-sanctuary",
      phase: "Chapter 03",
      title: "A calm, restored sanctuary.",
      tag: "The Rest of the Evening",
      icon: Moon,
      description:
        "Pouring a cup of tea or a cold drink, sinking into your favorite chair, and feeling entirely at ease. Your home is no longer a checklist—it is once again your sanctuary.",
      quote: "Coming home should feel like coming back to yourself.",
      image: "/images/story_peaceful.jpg",
    },
  ];

  const current = stories[activeStoryIndex];
  const CurrentIcon = current.icon;

  return (
    <section className="py-28 sm:py-36 bg-[#0A1128] text-white relative overflow-hidden">
      {/* Background ambient light washes */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-[#3A6EA5] rounded-full blur-[140px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 bg-[#C5A880] rounded-full blur-[140px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Apple-style Headline Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-bold block">
            The Philosophy of Care
          </span>
          <h2 className="text-4xl sm:text-6xl font-editorial font-normal tracking-tight leading-[1.08]">
            Coming home should
            <br />
            <span className="italic font-light text-[#D0E1F9]">feel different.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Cleaning isn&apos;t merely wiping countertops and sweeping corners. It&apos;s about transforming how
            your mind and body feel the second you cross your front threshold.
          </p>
        </div>

        {/* Story Scrubber Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-12 sm:mb-16">
          {stories.map((story, idx) => {
            const Icon = story.icon;
            const isActive = activeStoryIndex === idx;

            return (
              <button
                key={story.id}
                onClick={() => setActiveStoryIndex(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-[#0A1128] shadow-lg scale-105"
                    : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#0A1128]" : "text-[#C5A880]"}`} />
                <span>{story.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Story Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Visual Showcase (Animated Image Transition) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-[#C5A880]/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  {/* Subtle dark gradient overlay for cinematic contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/85 via-black/20 to-transparent" />

                  {/* Caption pill */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                    <span className="font-editorial text-sm sm:text-base italic text-white/90">
                      &ldquo;{current.quote}&rdquo;
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Narrative Card */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
                className="space-y-5 bg-[#101B38]/90 backdrop-blur-md p-7 sm:p-9 rounded-3xl border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A880]">
                  <CurrentIcon className="w-4 h-4" />
                  <span>{current.phase}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-white">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
                  {current.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#C5A880] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Bring This Standard Home</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Step Indicators */}
            <div className="flex items-center justify-between px-3 text-xs text-white/60">
              <span>Chapter {activeStoryIndex + 1} of 3</span>
              <div className="flex gap-2">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStoryIndex(i)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeStoryIndex === i
                        ? "w-8 bg-[#C5A880]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Jump to story chapter ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
