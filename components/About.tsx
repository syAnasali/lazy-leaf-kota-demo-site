"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Badge from "./Badge";
import Separator from "./Separator";
import Image from "next/image";
import Link from "next/link";

const panels = [
  {
    chapter: "Chapter I",
    imgSrc: "/assets/about/chapter1.jpg",
    tagline: "The Space & Philosophy",
    title: "A Calm Sanctuary",
    quote: "“Take your time. There is no rush in a place made for living.”",
    description:
      "The Lazy Leaf began as an antidote to hurry. Nestled in Kota, we created an intimate, botanical living room where specialty coffee, warm acoustics, and greenery invite you to slow down, read, and linger.",
  },
  {
    chapter: "Chapter II",
    imgSrc: "/assets/about/chapter2.jpg",
    tagline: "The Culinary Craft",
    title: "The Honest Kitchen",
    quote: "“Honest ingredients, patient roasting, and uncompromised flavor.”",
    description:
      "We source single-origin coffee beans and farm-fresh ingredients to craft hearty sourdough toasts, artisanal pastas, and handcrafted coolers. Everything is cooked to order with deep culinary care.",
  },
  {
    chapter: "Chapter III",
    imgSrc: "/assets/about/chapter3.jpg",
    tagline: "The Community & Vibe",
    title: "The Shared Table",
    quote: "“A gathering ground for Kota’s thinkers, dreamers, and friends.”",
    description:
      "Whether you need an inspiring work table with fast Wi-Fi, a quiet afternoon book corner, or a vibrant evening sharing wood-fired pizzas with friends, our doors and tables are warmly open.",
  },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableSectionRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Pin & Horizontal Scrub Animation
      mm.add("(min-width: 1024px)", () => {
        if (!scrollableSectionRef.current || !scrollTriggerRef.current) return;

        gsap.fromTo(
          scrollableSectionRef.current,
          { x: 0 },
          {
            x: () => -(scrollableSectionRef.current!.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: scrollTriggerRef.current,
              start: "top top",
              end: () => `+=${scrollableSectionRef.current!.scrollWidth - window.innerWidth + 300}`,
              scrub: 0.6,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="overflow-hidden bg-[#0c0e0d] border-t border-cream/10 relative">
      <div ref={scrollTriggerRef} className="relative">
        <div
          ref={scrollableSectionRef}
          className="flex flex-col lg:flex-row lg:h-screen lg:w-max relative"
        >
          {panels.map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-screen py-20 lg:py-0 lg:h-screen flex flex-col justify-center items-center relative border-b lg:border-b-0 lg:border-r border-cream/10 px-6 md:px-12"
            >
              <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl mx-auto">
                  {/* Left Narrative Text */}
                  <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    {/* Chapter & Badge */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <span className="text-[11px] font-secondary tracking-[0.35em] uppercase text-olive-light font-semibold">
                        {item.chapter}
                      </span>
                      <span className="text-cream/30">&bull;</span>
                      <span className="text-[11px] font-secondary tracking-[0.25em] uppercase text-cream-faint font-medium">
                        {item.tagline}
                      </span>
                    </div>
                    
                    <h2 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-normal text-cream mb-3">
                      <span>{item.title.split(" ")[0]} </span>
                      <span className="italic font-light text-amber">{item.title.split(" ").slice(1).join(" ")}</span>
                    </h2>
                    
                    <div className="my-3 self-center lg:self-start">
                      <Separator bg="accent" />
                    </div>

                    <p className="text-base sm:text-lg font-primary italic text-cream/90 mb-4 max-w-lg leading-relaxed">
                      {item.quote}
                    </p>
                    
                    <p className="leading-relaxed text-cream-muted text-sm sm:text-[15px] font-light mb-8 max-w-lg font-secondary">
                      {item.description}
                    </p>
                    
                    <div className="flex gap-4">
                      <Link href="#menu" className="btn shadow-xl">
                        View Menu
                      </Link>
                      <Link href="#hours" className="btn-outline">
                        Get Directions
                      </Link>
                    </div>
                  </div>

                  {/* Right Film Frame Photo (Matched to Chapter Content) */}
                  <div className="w-full lg:flex-1 h-[340px] sm:h-[440px] lg:h-[62vh] relative rounded-2xl border border-cream/15 shadow-2xl overflow-hidden group bg-[#131615]">
                    <Image
                      src={item.imgSrc}
                      fill
                      className="object-cover filter brightness-[0.92] contrast-[1.06] group-hover:scale-104 transition-transform duration-700 ease-out"
                      quality={92}
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0d]/75 via-transparent to-transparent opacity-60" />
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-4 right-4 z-20">
                      <Badge containerStyles="w-[84px] h-[84px]" />
                    </div>

                    {/* Micro Chapter Watermark Label */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-cream bg-[#0c0e0d]/85 px-3 py-1.5 rounded-full border border-cream/15 backdrop-blur-sm font-secondary">
                        {item.chapter} &bull; {item.tagline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
