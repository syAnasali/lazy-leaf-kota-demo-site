"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Separator from "../Separator";
import { menuCategories, MenuCategory } from "@/data/menuCategories";
import FullscreenMenuModal from "./FullscreenMenuModal";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(menuCategories[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section id="menu" className="py-16 sm:py-20 md:py-24 bg-[#0c0e0d] text-cream border-t border-cream/10 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-amber font-secondary font-medium mb-2 block">
            Gastronomy &bull; Kota &bull; Kitchen &amp; Brews
          </span>
          <h2 className="font-primary text-3xl sm:text-5xl md:text-6xl text-cream font-normal mt-1 mb-3">
            Come <span className="italic font-light text-amber">hungry.</span>
          </h2>
          <div className="my-2">
            <Separator bg="accent" />
          </div>
          <p className="text-cream-muted text-xs sm:text-sm md:text-base font-light max-w-lg mx-auto font-secondary leading-relaxed">
            From 16-hour slow-steeped cold roasts to hand-stretched sourdough pizzas and rich desserts, every plate is crafted with patient care.
          </p>
        </div>

        {/* Interactive Image-Led Category Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center max-w-5xl mx-auto">
          {/* Left Column: Interactive Categories */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-cream/10">
            {menuCategories.map((category) => {
              const isActive = activeCategory.id === category.id;

              return (
                <div
                  key={category.id}
                  onMouseEnter={() => setActiveCategory(category)}
                  onClick={() => setActiveCategory(category)}
                  className={`py-4 transition-all duration-300 cursor-pointer group flex flex-col ${
                    isActive ? "opacity-100" : "opacity-50 hover:opacity-85"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-3.5">
                      <span className={`text-xs font-secondary tracking-[0.3em] font-semibold transition-colors duration-300 ${
                        isActive ? "text-amber" : "text-cream-faint"
                      }`}>
                        {category.index}
                      </span>
                      <h3 className={`font-primary text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight transition-colors duration-300 ${
                        isActive ? "text-[#f4eee4]" : "text-cream-muted"
                      }`}>
                        {category.name}
                      </h3>
                    </div>

                    <span className={`text-[10px] sm:text-xs uppercase tracking-widest font-secondary transition-opacity duration-300 ${
                      isActive ? "text-amber opacity-100" : "opacity-0 group-hover:opacity-60"
                    }`}>
                      View &rarr;
                    </span>
                  </div>

                  {/* Expanded Active Category Details */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden pt-2.5 pl-6"
                    >
                      <p className="text-xs sm:text-sm font-primary italic text-amber mb-1.5">
                        {category.tagline}
                      </p>
                      <p className="text-xs text-cream-muted font-light leading-relaxed mb-2.5 max-w-md font-secondary">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {category.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[9px] uppercase tracking-wider px-2.5 py-0.5 bg-[#131615] border border-cream/15 text-[#f4eee4] font-secondary rounded-full"
                          >
                            {h.name}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Editorial Image Canvas */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl border border-cream/15 bg-[#131615] shadow-2xl overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeCategory.imgSrc}
                    fill
                    alt={activeCategory.name}
                    className="object-cover object-center filter brightness-[0.92] contrast-[1.08]"
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0d]/90 via-[#0c0e0d]/25 to-transparent" />

                  {/* Micro Category Overlay Information */}
                  <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-amber font-semibold font-secondary">
                        {activeCategory.index} &bull; {activeCategory.name}
                      </span>
                      <span className="text-[8px] uppercase tracking-widest text-cream-faint bg-[#0c0e0d]/85 px-2 py-0.5 rounded border border-cream/15">
                        KOTA &bull; KITCHEN
                      </span>
                    </div>
                    <p className="font-primary text-lg sm:text-xl text-[#f4eee4] font-normal mt-0.5">
                      {activeCategory.tagline}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Prominent Menu CTA */}
        <div className="mt-14 text-center flex flex-col items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn inline-flex items-center gap-3 text-xs sm:text-sm tracking-widest shadow-xl hover:scale-102 transition-transform cursor-pointer px-7 py-3"
          >
            <span>EXPLORE THE MENU</span>
            <span className="text-base">&rarr;</span>
          </button>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-cream-faint font-secondary">
            Tap to view complete selections &amp; dietary details
          </p>
        </div>
      </div>

      {/* Fullscreen Menu Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <FullscreenMenuModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;
