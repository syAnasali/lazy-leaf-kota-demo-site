"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Separator from "./Separator";

export type EditorialReview = {
  id: string;
  index: string;
  quote: string;
  author: string;
  context: string;
  source: string;
  rating: number;
};

export const reviewsData: EditorialReview[] = [
  {
    id: "r1",
    index: "01",
    quote:
      "The Lazy Leaf has completely redefined what a cafe can be in Kota. The botanical calm, the slow tempo, and the single-origin cold steep make it the only place I can truly unplug, read, and think.",
    author: "Aanya Sharma",
    context: "Architect & Regular Guest",
    source: "Google Review &bull; 5.0 ★ &bull; Kota",
    rating: 5,
  },
  {
    id: "r2",
    index: "02",
    quote:
      "Every dish here tastes like it was cooked with intention. The truffle mushroom sourdough and handcrafted coolers are sensational. An aesthetic haven with genuine warmth and unhurried hospitality.",
    author: "Rohan Mathur",
    context: "Food Enthusiast",
    source: "Google Review &bull; 5.0 ★ &bull; Kota",
    rating: 5,
  },
  {
    id: "r3",
    index: "03",
    quote:
      "The atmosphere here is pure medicine. Thoughtful music, warm lighting, wonderful staff, and the Lotus Biscoff cheesecake is unforgettable. You never feel rushed to leave.",
    author: "Pooja Verma",
    context: "Writer & Designer",
    source: "Google Review &bull; 5.0 ★ &bull; Kota",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const nextReview = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  }, []);

  const prevReview = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  }, []);

  // Auto-cycle review every 7 seconds when active
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      nextReview();
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextReview]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextReview();
      } else {
        prevReview();
      }
    }
    setTouchStartX(null);
  };

  const current = reviewsData[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-24 bg-[#0c0e0d] text-cream border-t border-cream/10 relative overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015] select-none">
        <span className="font-primary text-[28vw] uppercase leading-none text-cream">
          VOICES
        </span>
      </div>

      <div className="container mx-auto px-6 sm:px-10 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-amber font-secondary font-medium mb-2 block">
            Guest Reflections &bull; Kota
          </span>
          <h2 className="font-primary text-3xl sm:text-5xl md:text-6xl text-cream font-normal mt-1 mb-3">
            They <span className="italic font-light text-amber">stayed.</span>
          </h2>
          <div className="my-2">
            <Separator bg="accent" />
          </div>
        </div>

        {/* Viewport-Dominant Review Stage */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative min-h-[260px] sm:min-h-[290px] md:min-h-[310px] flex flex-col justify-center items-center text-center px-4 sm:px-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center max-w-3xl"
            >
              {/* Star Rating Tag */}
              <div className="flex items-center gap-1 mb-4 text-amber text-xs">
                {"★".repeat(current.rating)}
              </div>

              {/* Quote Headline */}
              <blockquote className="font-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#f4eee4] font-normal leading-[1.2] tracking-tight mb-6">
                &ldquo;{current.quote.replace(/^“|”$/g, "")}&rdquo;
              </blockquote>

              {/* Author Attribution */}
              <div className="flex flex-col items-center gap-0.5">
                <span className="font-secondary text-sm sm:text-base font-semibold text-[#f4eee4] tracking-wide">
                  {current.author}
                </span>
                <span className="text-xs text-[#c89c6c] font-light font-secondary">
                  {current.context}
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.2em] text-cream-faint font-secondary mt-1"
                  dangerouslySetInnerHTML={{ __html: current.source }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Navigation & Progress Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={prevReview}
            className="w-10 h-10 rounded-full border border-cream/20 hover:border-amber flex items-center justify-center text-cream hover:text-amber transition-colors text-sm cursor-pointer"
            aria-label="Previous review"
          >
            &larr;
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {reviewsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-amber"
                    : "w-2 bg-cream/20 hover:bg-cream/40"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextReview}
            className="w-10 h-10 rounded-full border border-cream/20 hover:border-amber flex items-center justify-center text-cream hover:text-amber transition-colors text-sm cursor-pointer"
            aria-label="Next review"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
