"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Separator from "./Separator";

export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  category: "food" | "drinks" | "interior" | "exterior" | "people" | "ambience" | "details" | "evening";
  title: string;
  caption: string;
  size: "large" | "medium" | "small" | "tall" | "wide";
  offsetY?: number; // Differential floating parallax offset in pixels
  aspectRatio: "aspect-[3/4]" | "aspect-[4/3]" | "aspect-[16/9]" | "aspect-square" | "aspect-[9/16]";
};

// Reusable data structure: easy to swap images/videos later without touching component logic
export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    type: "image",
    src: "/assets/about/photo-1.jpg",
    category: "interior",
    title: "The Morning Light",
    caption: "Sunlight filtering across the botanical reading tables.",
    size: "large",
    offsetY: -20,
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "g2",
    type: "image",
    src: "/assets/explore/cup.png",
    category: "drinks",
    title: "16-Hour Cold Steep",
    caption: "Handcrafted clear ice and single-origin roast.",
    size: "tall",
    offsetY: 30,
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "g3",
    type: "image",
    src: "/assets/about/photo-2.jpg",
    category: "food",
    title: "From the Hearth",
    caption: "Wild mushroom sourdough & fresh herbs from our kitchen.",
    size: "medium",
    offsetY: -35,
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "g4",
    type: "video",
    src: "/assets/hero/video.mp4",
    category: "ambience",
    title: "The Rhythm of the Bar",
    caption: "Slow drip extractions and steamed velvety milk.",
    size: "wide",
    offsetY: 15,
    aspectRatio: "aspect-[16/9]",
  },
  {
    id: "g5",
    type: "image",
    src: "/assets/about/photo-3.jpg",
    category: "people",
    title: "The Gathering",
    caption: "Laughter, creative sparks, and unhurried conversations.",
    size: "large",
    offsetY: -15,
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "g6",
    type: "image",
    src: "/assets/menu/coffee-5.png",
    category: "details",
    title: "Rich Belgian Notes",
    caption: "Dark 70% chocolate poured over artisanal ice.",
    size: "small",
    offsetY: 40,
    aspectRatio: "aspect-square",
  },
  {
    id: "g7",
    type: "image",
    src: "/assets/opening-hours/img.png",
    category: "exterior",
    title: "The Leaf Sanctuary",
    caption: "Lush botanical corners and quiet courtyards in Kota.",
    size: "tall",
    offsetY: -25,
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "g8",
    type: "image",
    src: "/assets/footer/bg.png",
    category: "evening",
    title: "Evening Atmosphere",
    caption: "Warm amber glow and mellow acoustic melodies as night falls.",
    size: "wide",
    offsetY: 20,
    aspectRatio: "aspect-[16/9]",
  },
];

const VisualGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Pinned Horizontal Track (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        if (!containerRef.current || !trackRef.current) return;

        const totalScrollWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalScrollWidth - viewportWidth;

        // Master horizontal translation
        const masterTween = gsap.fromTo(
          trackRef.current,
          { x: 0 },
          {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: () => `+=${scrollDistance + 200}`,
              scrub: 0.9,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          }
        );

        // Independent Differential Parallax on individual frames
        itemRefs.current.forEach((item, index) => {
          if (!item) return;
          const data = galleryData[index];
          const customOffset = data.offsetY || (index % 2 === 0 ? -30 : 30);

          gsap.fromTo(
            item,
            { y: customOffset },
            {
              y: -customOffset,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${scrollDistance + 200}`,
                scrub: 1.2,
              },
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="gallery"
      className="bg-charcoal text-cream relative overflow-hidden border-t border-charcoal-border"
    >
      {/* Editorial Section Header */}
      <div className="container mx-auto px-6 sm:px-12 pt-24 pb-12 text-center max-w-4xl">
        <span className="editorial-eyebrow mb-3">
          Moments &bull; Interiors &bull; Gastronomy &bull; Kota
        </span>
        <h2 className="h2 text-cream mb-4">A Little Look Around</h2>
        <div className="my-2">
          <Separator bg="accent" />
        </div>
        <p className="lead text-sm sm:text-base max-w-xl mx-auto font-light">
          Glimpses of unhurried mornings, golden afternoons, and quiet evening conversations under the leaves.
        </p>
      </div>

      {/* Desktop Horizontal Cinematic Gallery Track (>= 1024px) */}
      <div className="hidden lg:block h-[78vh] w-full relative overflow-hidden pb-12">
        <div
          ref={trackRef}
          className="flex items-center gap-10 xl:gap-14 h-full px-12 xl:px-20 w-max will-change-transform"
        >
          {galleryData.map((item, index) => {
            const isTall = item.size === "tall";
            const isWide = item.size === "wide";
            const isLarge = item.size === "large";

            const widthClass = isWide
              ? "w-[560px] xl:w-[640px]"
              : isLarge
              ? "w-[480px] xl:w-[540px]"
              : isTall
              ? "w-[340px] xl:w-[380px]"
              : "w-[300px] xl:w-[340px]";

            return (
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`relative flex-shrink-0 flex flex-col group will-change-transform ${widthClass}`}
              >
                {/* Media Container with Hairline Border & Subtle Contrast */}
                <div
                  className={`relative w-full ${item.aspectRatio} overflow-hidden border border-charcoal-border bg-charcoal-surface shadow-2xl transition-all duration-500 group-hover:border-charcoal-borderLight`}
                >
                  {item.type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.src}
                      fill
                      alt={item.title}
                      className="object-cover filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                      quality={90}
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                  )}

                  {/* Deep Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Micro Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] uppercase tracking-editorial-widest text-cream font-medium bg-charcoal/85 px-2.5 py-1 border border-charcoal-border backdrop-blur-sm font-secondary">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Editorial Caption Row */}
                <div className="mt-4 flex justify-between items-baseline px-1">
                  <div>
                    <p className="font-primary text-xl xl:text-2xl text-cream font-normal group-hover:text-amber transition-colors">
                      {item.title}
                    </p>
                    <p className="text-xs text-cream-muted font-light mt-0.5 max-w-sm font-secondary">
                      {item.caption}
                    </p>
                  </div>
                  <span className="text-[10px] font-secondary text-cream-faint tracking-widest uppercase">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Responsive Asymmetric Photo Story (< 1024px) */}
      <div className="lg:hidden px-6 pb-24 flex flex-col gap-12 max-w-2xl mx-auto">
        {galleryData.map((item, index) => {
          return (
            <div key={item.id} className="flex flex-col group">
              {/* Media Container */}
              <div
                className={`relative w-full ${item.aspectRatio} overflow-hidden border border-charcoal-border bg-charcoal-surface shadow-xl`}
              >
                {item.type === "video" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    fill
                    alt={item.title}
                    className="object-cover filter brightness-[0.9] contrast-[1.05]"
                    quality={85}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[9px] uppercase tracking-editorial-widest text-cream font-medium bg-charcoal/85 px-2.5 py-1 border border-charcoal-border">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 flex justify-between items-baseline">
                <div>
                  <p className="font-primary text-xl text-cream font-normal">
                    {item.title}
                  </p>
                  <p className="text-xs text-cream-muted font-light mt-0.5">
                    {item.caption}
                  </p>
                </div>
                <span className="text-[10px] font-secondary text-cream-faint tracking-widest uppercase">
                  0{index + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VisualGallery;
