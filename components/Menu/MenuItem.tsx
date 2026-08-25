import Image from "next/image";
import React from "react";

export type MenuItemProps = {
  imgSrc: string;
  name: string;
  description: string;
  price: number;
  tag?: string;
  isVeg?: boolean;
};

const MenuItem = ({ imgSrc, name, description, price, tag, isVeg = true }: MenuItemProps) => {
  return (
    <div className="flex items-start gap-4 p-3.5 rounded-none border border-transparent hover:border-charcoal-border hover:bg-charcoal-surface/60 transition-all duration-300 group">
      {/* Circular Item Thumbnail */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border border-charcoal-border group-hover:border-amber/40 transition-colors duration-300 shadow-lg bg-charcoal">
        <Image
          src={imgSrc}
          fill
          alt={name}
          quality={85}
          className="object-cover filter brightness-95 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Item Details */}
      <div className="flex flex-col flex-1 gap-1 min-w-0">
        {/* Name, Dashed Line, Price */}
        <div className="flex justify-between items-baseline gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Minimalist Veg / Non-Veg Indicator */}
            <span
              className={`w-3 h-3 border flex items-center justify-center flex-shrink-0 ${
                isVeg ? "border-green-600/80" : "border-red-600/80"
              }`}
              title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isVeg ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </span>

            <p className="font-primary font-normal text-xl sm:text-2xl text-cream group-hover:text-amber transition-colors duration-300 truncate">
              {name}
            </p>

            {tag && (
              <span className="text-[8px] uppercase tracking-editorial-widest px-2 py-0.5 bg-olive/20 text-olive-light border border-olive/30 font-secondary flex-shrink-0">
                {tag}
              </span>
            )}
          </div>

          {/* Delicate hairline rule */}
          <div className="flex-1 border-b border-charcoal-border mx-2 hidden sm:block opacity-50" />

          {/* Price in INR */}
          <p className="font-primary font-normal text-xl sm:text-2xl text-amber leading-none whitespace-nowrap">
            ₹{price}
          </p>
        </div>

        {/* Description */}
        <p className="text-cream-muted text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
