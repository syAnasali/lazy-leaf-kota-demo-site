"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Laptop Animation Sequence (Unpinned scroll scrub)
      mm.add("(min-width: 768px)", () => {
        if (!containerRef.current || !mediaRef.current || !contentRef.current) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        // 1. Hero typography moves independently upward
        tl.to(
          contentRef.current,
          {
            y: -120,
            opacity: 0,
            scale: 0.96,
            ease: "none",
          },
          0
        );

        // 2. Hero image container smoothly transforms into boxy card shape as we scroll
        tl.to(
          mediaRef.current,
          {
            scale: 0.88,
            borderRadius: "32px",
            opacity: 0.35,
            ease: "none",
          },
          0
        );
      });

      // Mobile Touch Interaction
      mm.add("(max-width: 767px)", () => {
        if (!containerRef.current || !mediaRef.current || !contentRef.current) return;

        const tlMobile = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });

        tlMobile.to(
          contentRef.current,
          {
            y: -60,
            opacity: 0,
            ease: "none",
          },
          0
        );

        tlMobile.to(
          mediaRef.current,
          {
            scale: 0.92,
            borderRadius: "20px",
            opacity: 0.35,
            ease: "none",
          },
          0
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-screen min-h-[100dvh] bg-[#0c0e0d] overflow-hidden flex items-center justify-center select-none"
    >
      {/* Cinematic Media Layer: Sharp background photo with reduced brightness for high-contrast legibility */}
      <div
        ref={mediaRef}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-transform transform-gpu origin-center z-0"
      >
        {/* Sharp High-Res Cafe Background Photo with Reduced Brightness */}
        <Image
          src="/hero-bg.jpg"
          fill
          priority
          alt="The Lazy Leaf Cafe - Kota, Rajasthan"
          className="object-cover object-center filter brightness-[0.58] contrast-[1.15] saturate-[1.1]"
          sizes="100vw"
          quality={95}
        />

        {/* Delicate Amber & Deep Charcoal Filmic Gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(12, 14, 13, 0.6) 0%, rgba(12, 14, 13, 0.15) 45%, rgba(12, 14, 13, 0.8) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200, 156, 108, 0.05) 0%, rgba(12, 14, 13, 0.6) 100%)",
          }}
        />
      </div>

      {/* Editorial Content Layer: Stylish typography inspired by the luxury brand aesthetic */}
      <div
        ref={contentRef}
        className="relative z-20 container mx-auto px-6 sm:px-8 max-w-5xl flex flex-col items-center justify-center text-center will-change-transform transform-gpu pt-8 md:pt-4"
      >
        {/* Stylish Grand Headline: Multi-tone luxurious serif display */}
        <h1 className="font-primary text-[58px] sm:text-[90px] md:text-[118px] lg:text-[144px] xl:text-[164px] leading-[0.92] tracking-tight mb-2 md:mb-3 select-none">
          <span className="text-[#c89c6c] font-normal drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            The{" "}
          </span>
          <span className="italic font-light text-[#dfb78c] drop-shadow-[0_0_35px_rgba(200,156,108,0.45)]">
            Lazy{" "}
          </span>
          <span className="text-[#f4eee4] font-normal drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            Leaf
          </span>
        </h1>

        {/* Delicate Hairline Separator with Leaf Flourish */}
        <div className="flex items-center justify-center gap-3.5 my-3 mb-6 opacity-85">
          <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-amber/60" />
          <svg
            className="w-4 h-4 text-amber drop-shadow-sm"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-amber/60" />
        </div>

        {/* Supporting Line with warm amber italic glow */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <p className="font-primary italic font-light text-[#f4eee4]/95 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-normal drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            Take your <span className="font-normal text-[#c89c6c] not-italic tracking-wider uppercase font-secondary text-[0.65em] border-b border-amber/40 pb-0.5">time.</span>
          </p>
        </div>

        {/* Editorial Sub-copy */}
        <p className="text-xs sm:text-sm md:text-base font-light text-[#c4bcad] max-w-xl mx-auto leading-relaxed mb-8 md:mb-10 font-secondary px-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          A serene botanical sanctuary in Kota crafted for slow sips, honest conversations, gourmet bakes, and unhurried afternoons.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            href="#menu"
            className="btn w-full sm:w-auto shadow-2xl hover:scale-102 transition-transform"
          >
            The Menu
          </Link>
          <Link
            href="#experience"
            className="btn-outline w-full sm:w-auto shadow-2xl backdrop-blur-md hover:scale-102 transition-transform"
          >
            The Space
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
