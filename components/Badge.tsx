import React from "react";
import Image from "next/image";

type PropsType = {
  containerStyles: string;
};

const Badge = ({ containerStyles }: PropsType) => {
  return (
    <div className={`relative flex items-center justify-center ${containerStyles}`}>
      <div className="w-full h-full rounded-full border border-cream/20 flex items-center justify-center p-1.5 relative bg-charcoal/85 backdrop-blur-md shadow-2xl overflow-hidden group">
        {/* Subtle inner concentric hairline */}
        <div className="w-full h-full rounded-full border border-amber/30 flex items-center justify-center overflow-hidden relative transition-transform duration-700 group-hover:scale-105">
          <Image
            src="/lazy-leaf-logo.jpg"
            fill
            alt="The Lazy Leaf Official Logo"
            className="object-cover filter brightness-[0.95] contrast-[1.05]"
            sizes="(max-width: 768px) 120px, 200px"
          />
          <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Badge;
