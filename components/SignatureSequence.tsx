"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Separator from "./Separator";

const sequenceData = [
  {
    id: "01",
    tag: "The Brew Craft",
    word: "COFFEE",
    subtitle: "Precision roasts & slow cold steeps",
    description:
      "Single-origin beans, meticulous temperature control, and slow pour-overs crafted with quiet dedication. Coffee served not as fuel, but as a mindful ritual.",
    imgSrc: "/assets/signature/coffee.jpg",
  },
  {
    id: "02",
    tag: "The Honest Kitchen",
    word: "FOOD",
    subtitle: "Artisan sourdoughs & wood-style plates",
    description:
      "Wild mushroom toasts, truffle glazes, stone-baked pizzas, and wholesome small plates cooked from scratch with fresh local produce and uncompromised care.",
    imgSrc: "/assets/signature/food.jpg",
  },
  {
    id: "03",
    tag: "The Gathering Ground",
    word: "PEOPLE",
    subtitle: "Conversations, quiet readers & shared tables",
    description:
      "A living sanctuary for Kota's students, creatives, professionals, and families. Come for focused work sessions, weekend book reading, or laughter over warm meals.",
    imgSrc: "/assets/signature/people.jpg",
  },
  {
    id: "04",
    tag: "Unhurried Slowness",
    word: "TIME",
    subtitle: "The luxury of uncounted afternoon hours",
    description:
      "No rush. No pressure to vacate. Sunlight filtering through green leaves, warm acoustic melodies, and the rare permission to simply be.",
    imgSrc: "/assets/signature/time.jpg",
  },
];

const SignatureSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedSectionRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const [activeMobileTab, setActiveMobileTab] = useState<number>(0);

  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Opening Manifesto Fade
      gsap.fromTo(
        manifestoRef.current,
        { opacity: 0.5, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: manifestoRef.current,
            start: "top 80%",
            end: "top 35%",
            scrub: 0.8,
          },
        }
      );

      const mm = gsap.matchMedia();

      // 2. Desktop Pinned Scroll Sequence (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        if (!pinnedSectionRef.current) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinnedSectionRef.current,
            start: "top top",
            end: "+=300%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Initialize clean non-overlapping states: Only item 0 is visible initially
        imageRefs.current.forEach((img, idx) => {
          if (idx !== 0 && img) {
            gsap.set(img, { opacity: 0, scale: 1.05, y: 20 });
          } else if (idx === 0 && img) {
            gsap.set(img, { opacity: 1, scale: 1, y: 0 });
          }
        });

        wordRefs.current.forEach((word, idx) => {
          if (idx !== 0 && word) {
            gsap.set(word, { opacity: 0, y: 30, pointerEvents: "none" });
          } else if (idx === 0 && word) {
            gsap.set(word, { opacity: 1, y: 0, pointerEvents: "auto" });
          }
        });

        // Transition 1: Stage 0 (COFFEE) -> Stage 1 (FOOD)
        tl.to(
          imageRefs.current[0],
          { opacity: 0, scale: 0.96, y: -25, duration: 1, ease: "power2.inOut" },
          0.8
        )
          .to(
            wordRefs.current[0],
            { opacity: 0, y: -25, duration: 0.8, ease: "power2.inOut" },
            0.8
          )
          .to(
            imageRefs.current[1],
            { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.inOut" },
            1.2
          )
          .to(
            wordRefs.current[1],
            { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" },
            1.2
          );

        // Transition 2: Stage 1 (FOOD) -> Stage 2 (PEOPLE)
        tl.to(
          imageRefs.current[1],
          { opacity: 0, scale: 0.96, y: -25, duration: 1, ease: "power2.inOut" },
          2.0
        )
          .to(
            wordRefs.current[1],
            { opacity: 0, y: -25, duration: 0.8, ease: "power2.inOut" },
            2.0
          )
          .to(
            imageRefs.current[2],
            { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.inOut" },
            2.4
          )
          .to(
            wordRefs.current[2],
            { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" },
            2.4
          );

        // Transition 3: Stage 2 (PEOPLE) -> Stage 3 (TIME)
        tl.to(
          imageRefs.current[2],
          { opacity: 0, scale: 0.96, y: -25, duration: 1, ease: "power2.inOut" },
          3.2
        )
          .to(
            wordRefs.current[2],
            { opacity: 0, y: -25, duration: 0.8, ease: "power2.inOut" },
            3.2
          )
          .to(
            imageRefs.current[3],
            { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.inOut" },
            3.6
          )
          .to(
            wordRefs.current[3],
            { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" },
            3.6
          );

        // Progress line scrub
        if (progressLineRef.current) {
          tl.fromTo(
            progressLineRef.current,
            { scaleY: 0 },
            { scaleY: 1, ease: "none", duration: 4.6 },
            0
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="bg-[#0c0e0d] text-cream relative overflow-hidden"
    >
      {/* 1. Opening Manifesto Statement (Compact responsive padding) */}
      <div
        ref={manifestoRef}
        className="min-h-[50vh] sm:min-h-[55vh] flex flex-col justify-center items-center text-center px-6 sm:px-12 py-16 sm:py-20 border-t border-b border-cream/10 relative bg-gradient-to-b from-[#0c0e0d] via-[#131615]/50 to-[#0c0e0d]"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-amber font-secondary font-medium mb-4">
            A Manifesto of Slowness &bull; Kota
          </span>

          <h2 className="font-primary text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight font-normal text-cream mb-4">
            Some places are meant to be visited.
            <br />
            <span className="italic font-light text-amber">
              Some are meant to be stayed in.
            </span>
          </h2>

          <div className="my-2">
            <Separator bg="accent" />
          </div>

          <p className="max-w-lg text-cream-muted text-xs sm:text-sm md:text-base font-light mt-3 font-secondary leading-relaxed">
            We built The Lazy Leaf around four simple pillars that give shape to our hours.
          </p>
        </div>
      </div>

      {/* 2. Pinned Desktop Experience (>= 1024px) */}
      <div
        ref={pinnedSectionRef}
        className="hidden lg:flex h-screen w-full relative items-center justify-between px-12 xl:px-20 pt-16 pb-6 overflow-hidden"
      >
        {/* Left: Non-Overlapping Editorial Stage */}
        <div className="flex-1 max-w-xl z-20 flex flex-col justify-center relative h-full">
          {sequenceData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                wordRefs.current[index] = el;
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-start will-change-transform w-full"
            >
              {/* Index & Pillar Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-secondary tracking-[0.35em] text-olive-light uppercase font-semibold">
                  {item.id} / 04
                </span>
                <span className="text-cream/30">&bull;</span>
                <span className="text-xs font-secondary tracking-[0.25em] text-cream-faint uppercase font-medium">
                  {item.tag}
                </span>
              </div>

              {/* Dominant Headline Word */}
              <h3 className="font-primary text-6xl xl:text-7xl 2xl:text-8xl tracking-[-0.03em] font-normal leading-[0.9] text-cream mb-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                {item.word}
              </h3>

              {/* Subtitle Accent */}
              <p className="font-primary text-xl xl:text-2xl italic text-amber font-light mb-3 leading-snug">
                {item.subtitle}
              </p>

              {/* Editorial Description */}
              <p className="text-cream-muted font-light text-xs xl:text-sm leading-relaxed max-w-md font-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Center: Minimalist Vertical Progress Track */}
        <div className="hidden xl:flex flex-col items-center gap-2 z-20 mx-6">
          <span className="text-[9px] uppercase tracking-widest text-cream-faint font-secondary">
            01
          </span>
          <div className="w-[1px] h-28 bg-cream/15 relative overflow-hidden">
            <div
              ref={progressLineRef}
              className="w-full h-full bg-amber origin-top will-change-transform"
            />
          </div>
          <span className="text-[9px] uppercase tracking-widest text-cream-faint font-secondary">
            04
          </span>
        </div>

        {/* Right: Clean Framed Image Showcase */}
        <div className="flex-1 flex justify-end items-center z-20 h-full relative">
          <div className="relative w-[320px] xl:w-[380px] 2xl:w-[420px] h-[420px] xl:h-[480px] max-h-[64vh] rounded-2xl border border-cream/15 shadow-2xl overflow-hidden bg-[#131615]">
            {sequenceData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="absolute inset-0 w-full h-full will-change-transform transform-gpu overflow-hidden"
              >
                <Image
                  src={item.imgSrc}
                  fill
                  alt={`The Lazy Leaf - ${item.word}`}
                  className="object-cover object-center filter brightness-[0.92] contrast-[1.06]"
                  quality={92}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0d]/80 via-transparent to-transparent opacity-60" />

                {/* Minimalist Editorial Caption Badge */}
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-cream bg-[#0c0e0d]/85 px-3 py-1 rounded-full border border-cream/15 backdrop-blur-sm shadow-md font-secondary">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Compact Mobile Responsive Pillar Showcase (< 1024px, Non-linear, minimal scroll) */}
      <div className="lg:hidden px-6 py-12 sm:py-16 bg-[#0c0e0d]">
        {/* Mobile Pillar Selector Tabs */}
        <div className="flex items-center justify-between gap-1 border-b border-cream/15 pb-3 mb-6 overflow-x-auto">
          {sequenceData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveMobileTab(idx)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-secondary uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                activeMobileTab === idx
                  ? "bg-amber text-[#0c0e0d] font-bold shadow-md"
                  : "text-cream-muted hover:text-cream"
              }`}
            >
              {item.id} {item.word}
            </button>
          ))}
        </div>

        {/* Active Mobile Stage Card */}
        {sequenceData.map((item, idx) => {
          if (idx !== activeMobileTab) return null;
          return (
            <div key={item.id} className="flex flex-col gap-4">
              <div className="relative w-full h-[240px] sm:h-[300px] rounded-xl border border-cream/15 overflow-hidden bg-[#131615] shadow-xl">
                <Image
                  src={item.imgSrc}
                  fill
                  alt={`The Lazy Leaf - ${item.word}`}
                  className="object-cover object-center filter brightness-[0.92] contrast-[1.06]"
                  quality={88}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0d]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.2em] text-cream bg-[#0c0e0d]/85 px-3 py-1 rounded-full border border-cream/15">
                  {item.tag}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-secondary tracking-[0.3em] text-olive-light uppercase font-semibold">
                    {item.id} / 04
                  </span>
                  <span className="text-cream/30">&bull;</span>
                  <span className="text-[10px] font-secondary tracking-[0.2em] text-cream-faint uppercase">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-primary text-4xl sm:text-5xl text-cream font-normal mb-1">
                  {item.word}
                </h3>
                <p className="font-primary text-lg sm:text-xl italic text-amber font-light mb-2">
                  {item.subtitle}
                </p>
                <p className="text-cream-muted text-xs sm:text-sm font-light leading-relaxed font-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SignatureSequence;
