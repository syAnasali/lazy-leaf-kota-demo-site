import React from "react";

type PropsType = {
  itemCSS: string;
  number: string;
  iconType: "brew" | "kitchen" | "space" | "dessert";
  text: {
    title: string;
    description: string;
  };
};

const icons = {
  brew: (
    <svg className="w-6 h-6 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  kitchen: (
    <svg className="w-6 h-6 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  ),
  space: (
    <svg className="w-6 h-6 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  dessert: (
    <svg className="w-6 h-6 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M12 2a3 3 0 0 0-3 3c0 1.2.7 2.2 1.7 2.7C7.3 8.3 5 11 5 14c0 3.9 3.1 7 7 7s7-3.1 7-7c0-3-2.3-5.7-5.7-6.3C14.3 7.2 15 6.2 15 5a3 3 0 0 0-3-3z" />
    </svg>
  ),
};

const ExploreItem = ({ itemCSS, number, iconType, text }: PropsType) => {
  return (
    <div className="relative flex items-start group">
      <div className={`xl:max-w-[420px] flex flex-col ${itemCSS}`}>
        {/* Index & Minimalist Icon Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-secondary tracking-editorial-widest text-olive-light uppercase font-semibold">
            {number}
          </span>
          <div className="w-10 h-10 rounded-full border border-charcoal-border bg-charcoal-surface flex items-center justify-center group-hover:border-amber/40 transition-colors duration-300">
            {icons[iconType]}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-primary font-normal mb-2.5 text-cream group-hover:text-amber transition-colors duration-300">
          {text.title}
        </h3>

        {/* Description */}
        <p className="max-w-[380px] text-cream-muted text-sm sm:text-[15px] leading-relaxed font-light">
          {text.description}
        </p>
      </div>
    </div>
  );
};

export default ExploreItem;
