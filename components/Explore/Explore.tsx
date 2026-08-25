import Image from "next/image";
import ExploreItem from "./ExploreItem";

const Explore = () => {
  return (
    <section id="experience" className="py-24 xl:py-32 bg-charcoal relative overflow-hidden border-t border-charcoal-border">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="editorial-eyebrow">
            The Slowness &bull; Four Pillars
          </span>
          <h2 className="h2 text-cream mt-3 mb-4">
            An Unhurried <span className="italic font-light text-amber">Ritual</span>
          </h2>
          <p className="lead text-sm sm:text-base">
            Every element at The Lazy Leaf is intentionally curated to invite calm, spark conversation, and honor slow living.
          </p>
        </div>

        {/* 3-Column Experience Grid */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-around items-center lg:items-end text-center lg:text-right gap-12 max-w-[420px] lg:max-w-none">
            <ExploreItem
              number="01"
              itemCSS="lg:text-right lg:items-end items-center"
              iconType="brew"
              text={{
                title: "Artisanal Specialty Coffee",
                description:
                  "Precision-brewed single-origin roasts, 16-hour slow cold steeps, and velvety milk beverages crafted with patience.",
              }}
            />
            <ExploreItem
              number="02"
              itemCSS="lg:text-right lg:items-end items-center"
              iconType="kitchen"
              text={{
                title: "The Gourmet Kitchen",
                description:
                  "Wood-style artisan sourdoughs, stone-baked pizzas, and hearty small plates cooked from scratch with fresh local produce.",
              }}
            />
          </div>

          {/* Center Visual Column */}
          <div className="hidden lg:flex justify-center flex-shrink-0">
            <div className="relative w-[280px] xl:w-[320px] h-[480px] xl:h-[540px] rounded-none overflow-hidden border border-charcoal-border shadow-2xl group">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt="The Lazy Leaf Signature Brew"
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                quality={90}
                data-scroll
                data-scroll-speed="0.1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-70" />
              
              {/* Overlay Micro-caption */}
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="text-[10px] uppercase tracking-editorial-widest text-cream font-medium font-secondary bg-charcoal/80 px-3 py-1 border border-charcoal-border">
                  Handcrafted in Kota
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col justify-around items-center lg:items-start text-center lg:text-left gap-12 max-w-[420px] lg:max-w-none">
            <ExploreItem
              number="03"
              itemCSS="lg:text-left lg:items-start items-center"
              iconType="space"
              text={{
                title: "Botanical Space & Reading",
                description:
                  "An organic sanctuary filled with plants, warm light, fast Wi-Fi, and plush corners made for books and work sessions.",
              }}
            />
            <ExploreItem
              number="04"
              itemCSS="lg:text-left lg:items-start items-center"
              iconType="dessert"
              text={{
                title: "Bakes, Chillers & Shakes",
                description:
                  "Decadent lotus biscoff cheesecakes, botanical coolers, and molten brownies crafted for pure indulgence.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
