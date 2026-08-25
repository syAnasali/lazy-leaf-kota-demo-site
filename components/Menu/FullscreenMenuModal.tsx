"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { menuCategories } from "@/data/menuCategories";

type FullscreenMenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FullscreenMenuModal = ({ isOpen, onClose }: FullscreenMenuModalProps) => {
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      ref={modalContainerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      className="fixed inset-0 z-[100] bg-[#0c0e0d]/98 backdrop-blur-2xl text-cream overflow-y-auto overscroll-contain h-[100dvh] select-text"
      data-scroll-container="false"
    >
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 right-0 z-30 bg-[#0c0e0d]/95 backdrop-blur-md border-b border-cream/15 py-5 sm:py-6 px-6 sm:px-12 flex justify-between items-center shadow-xl">
        <div>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-amber font-semibold font-secondary block">
            The Lazy Leaf &bull; Kota
          </span>
          <h3 className="font-primary text-2xl sm:text-3xl md:text-4xl text-[#f4eee4] font-normal leading-none mt-1">
            Complete Cafe Menu
          </h3>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-cream/25 hover:border-amber flex items-center justify-center text-[#f4eee4] hover:text-amber transition-colors text-base font-semibold cursor-pointer bg-[#131615] shadow-lg"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Scrollable Modal Content */}
      <div className="container mx-auto px-6 sm:px-10 max-w-5xl pt-12 pb-44">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-16">
          {menuCategories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col border-t border-cream/20 pt-6"
            >
              {/* Category Header */}
              <div className="flex items-baseline justify-between mb-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-secondary tracking-[0.35em] text-olive-light font-bold">
                    {cat.index}
                  </span>
                  <h4 className="font-primary text-3xl sm:text-4xl text-[#f4eee4] font-normal tracking-tight">
                    {cat.name}
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#c89c6c] font-light italic mb-6">
                {cat.tagline}
              </p>

              {/* Items List */}
              <div className="flex flex-col gap-6">
                {cat.highlights.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        {item.isVeg && (
                          <span
                            className="w-3 h-3 border border-green-500 flex items-center justify-center flex-shrink-0 rounded-[2px]"
                            title="Vegetarian"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          </span>
                        )}
                        <p className="font-primary text-xl sm:text-2xl text-[#f4eee4] font-medium leading-snug">
                          {item.name}
                        </p>
                      </div>

                      {item.tag && (
                        <span className="text-[9px] uppercase tracking-[0.2em] px-2.5 py-0.5 bg-olive/25 text-olive-light border border-olive/40 font-secondary font-semibold flex-shrink-0 rounded-full">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <p className="text-sm sm:text-[15px] text-[#cfc8bc] font-light pl-5 leading-relaxed font-secondary">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer CTA */}
        <div className="mt-20 border-t border-cream/20 pt-12 text-center flex flex-col items-center gap-5">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#d6cebf] font-secondary">
            Taxes applicable &bull; Custom dietary &amp; vegan milk options available on request
          </p>
          <a
            href="https://wa.me/919876543210?text=Hello%20The%20Lazy%20Leaf%20Kota,%20I%20would%20like%20to%20place%20an%20order%20or%20reserve%20a%20table."
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-sm uppercase tracking-widest px-8 py-3.5 shadow-2xl mt-2"
          >
            Order / Inquire via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FullscreenMenuModal;
