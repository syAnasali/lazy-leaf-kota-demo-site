"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Separator from "./Separator";

type MomentCard = {
  id: string;
  timeTag: string;
  category: string;
  phrase: string;
  highlight: string;
  description: string;
  atmosphere: string;
  imgSrc: string;
};

const moments: MomentCard[] = [
  {
    id: "morning",
    timeTag: "08:30 AM",
    category: "Morning Solitude",
    phrase: "For Quiet Mornings",
    highlight: "Quiet Mornings",
    description:
      "A slow single-origin pour-over, steam catching the early Kota sunlight, a notebook open, and the city still half asleep.",
    atmosphere: "Warm Sunlight &bull; Acoustic Notes",
    imgSrc: "/assets/moments/morning.jpg",
  },
  {
    id: "work",
    timeTag: "11:45 AM",
    category: "The Focused Flow",
    phrase: "For Deep Work",
    highlight: "Deep Work",
    description:
      "Lush floor-to-ceiling greenery, reliable high-speed Wi-Fi, power outlets at every solid oak table, and uninterrupted creative flow.",
    atmosphere: "Botanical Light &bull; Cold Brews",
    imgSrc: "/assets/moments/work.jpg",
  },
  {
    id: "date",
    timeTag: "07:30 PM",
    category: "Intimate Evenings",
    phrase: "For Shared Conversations",
    highlight: "Shared Conversations",
    description:
      "Warm candlelight, decadent desserts, sharing stories over skillet brownies, and staying long past sunset without watching the clock.",
    atmosphere: "Candlelight &bull; Skillet Brownie",
    imgSrc: "/assets/moments/date.jpg",
  },
];

const StayForAWhile = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const climaxRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Reveal Grid Cards with Staggered Parallax
      const cards = gsap.utils.toArray<HTMLElement>(".moment-card");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 78%",
            },
          }
        );
      }

      // 2. Reveal Climax Card with Smooth Scale Parallax
      if (climaxRef.current) {
        gsap.fromTo(
          climaxRef.current,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: climaxRef.current,
              start: "top 82%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredMoments =
    activeFilter === "all"
      ? moments
      : moments.filter((m) => m.id === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="stay"
      className="bg-[#0c0e0d] text-cream py-16 sm:py-20 md:py-24 relative overflow-hidden border-t border-cream/10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-br from-amber/5 via-olive/5 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-amber font-secondary font-medium mb-3">
            The Art of Spending Time &bull; Kota
          </span>

          <h2 className="font-primary text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight font-normal text-cream mb-4">
            Stay for a <span className="italic font-light text-amber">while.</span>
          </h2>

          <div className="my-1.5 mb-3">
            <Separator bg="accent" />
          </div>

          <p className="text-cream-muted text-xs sm:text-sm md:text-base font-light leading-relaxed font-secondary max-w-xl">
            We never ask when you are leaving. Pull up a chair, find your corner, and let the hours take care of themselves.
          </p>

          {/* Interactive Time Dial Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveFilter("all")}
              className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border transition-all duration-300 font-secondary ${
                activeFilter === "all"
                  ? "border-amber bg-amber/15 text-amber shadow-md"
                  : "border-cream/15 text-cream-muted hover:border-cream/35 hover:text-cream bg-[#131615]/60"
              }`}
            >
              All Hours
            </button>
            {moments.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveFilter(m.id)}
                className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border transition-all duration-300 font-secondary ${
                  activeFilter === m.id
                    ? "border-amber bg-amber/15 text-amber shadow-md"
                    : "border-cream/15 text-cream-muted hover:border-cream/35 hover:text-cream bg-[#131615]/60"
                }`}
              >
                {m.timeTag} &bull; {m.category}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Spatial Moments Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10 md:mb-14"
        >
          {filteredMoments.map((moment) => (
            <div
              key={moment.id}
              className="moment-card group relative bg-[#131615] rounded-2xl border border-cream/12 overflow-hidden shadow-xl transition-all duration-500 hover:border-amber/40 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-charcoal">
                <Image
                  src={moment.imgSrc}
                  fill
                  alt={`The Lazy Leaf - ${moment.phrase}`}
                  className="object-cover object-center filter brightness-[0.88] contrast-[1.06] group-hover:scale-104 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131615] via-transparent to-black/20" />

                {/* Floating Top Time Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-cream bg-[#0c0e0d]/85 px-3 py-1 rounded-full border border-cream/20 backdrop-blur-md font-secondary shadow-md">
                    {moment.timeTag}
                  </span>
                </div>
              </div>

              {/* Editorial Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-olive-light font-secondary font-medium block mb-1.5">
                    {moment.category}
                  </span>
                  <h3 className="font-primary text-xl sm:text-2xl text-cream font-normal mb-2 group-hover:text-amber transition-colors duration-300">
                    {moment.phrase}
                  </h3>
                  <p className="text-cream-muted text-xs sm:text-[13px] font-light leading-relaxed font-secondary">
                    {moment.description}
                  </p>
                </div>

                {/* Atmosphere Tag Footer */}
                <div className="pt-4 mt-4 border-t border-cream/10 flex items-center justify-between">
                  <span
                    className="text-[9px] sm:text-[10px] uppercase tracking-wider text-cream-faint font-secondary"
                    dangerouslySetInnerHTML={{ __html: moment.atmosphere }}
                  />
                  <span className="text-amber text-xs group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grand Climax: Full-Width Sanctuary Feature Card */}
        <div
          ref={climaxRef}
          className="relative w-full rounded-2xl sm:rounded-3xl border border-amber/30 overflow-hidden shadow-2xl bg-[#131615] group"
        >
          {/* Panoramic Ambient Backdrop */}
          <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden">
            <Image
              src="/assets/moments/noreason.jpg"
              fill
              alt="The Lazy Leaf Botanical Sanctuary - Kota"
              className="object-cover object-center filter brightness-[0.78] contrast-[1.08] group-hover:scale-102 transition-transform duration-1000 ease-out"
              sizes="100vw"
              quality={95}
            />

            {/* Filmic Vignette Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0d] via-[#0c0e0d]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e0d]/80 via-transparent to-[#0c0e0d]/40" />

            {/* Live Atmosphere Badge */}
            <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber/35 bg-[#0c0e0d]/85 backdrop-blur-md shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-cream font-secondary font-medium">
                  ANY HOUR &bull; ANY DAY
                </span>
              </div>
            </div>

            {/* Grand Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-12 max-w-2xl z-10">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-olive-light font-secondary font-semibold mb-2">
                The Ultimate Permission
              </span>

              <h3 className="font-primary text-2xl sm:text-4xl md:text-5xl text-cream font-normal leading-[1.05] mb-3">
                For <span className="italic font-light text-amber">no reason</span> at all.
              </h3>

              <p className="text-cream-muted text-xs sm:text-sm md:text-base font-light leading-relaxed font-secondary mb-5 max-w-lg">
                Because the weather was nice. Because you wanted twenty minutes of quiet. Because you just felt like sitting under the leaves. You never need an excuse to be here.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="#hours"
                  className="btn text-[11px] sm:text-xs uppercase tracking-widest px-5 py-2.5 shadow-xl"
                >
                  Come Find Us
                </Link>
                <Link
                  href="#menu"
                  className="btn-outline text-[11px] sm:text-xs uppercase tracking-widest px-5 py-2.5 backdrop-blur-sm"
                >
                  View Food &amp; Brews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayForAWhile;
