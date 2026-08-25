"use client";

import Separator from "./Separator";
import { FaInstagram, FaPhoneAlt, FaDirections } from "react-icons/fa";

const OpeningHours = () => {
  return (
    <section
      id="hours"
      className="py-16 sm:py-20 md:py-24 bg-[#0c0e0d] text-cream border-t border-cream/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-amber font-secondary font-medium mb-2 block">
            Visiting Guide &bull; Kota
          </span>
          <h2 className="font-primary text-3xl sm:text-5xl md:text-6xl text-cream font-normal mt-1 mb-3">
            Come <span className="italic font-light text-amber">find us.</span>
          </h2>
          <div className="my-2">
            <Separator bg="accent" />
          </div>
          <p className="text-cream-muted text-xs sm:text-sm md:text-base font-light max-w-lg mx-auto font-secondary leading-relaxed">
            A quiet sanctuary on Commerce College Road. Step inside, leave the rush at the door, and make yourself at home.
          </p>
        </div>

        {/* Two-Column Location Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Address, Hours, and Direct Actions */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Exact Location Card */}
            <div className="p-6 sm:p-7 rounded-2xl border border-cream/15 bg-[#131615] relative overflow-hidden shadow-xl">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber font-semibold font-secondary">
                  Location &bull; Talwandi
                </span>
                <h3 className="font-primary text-2xl sm:text-3xl text-[#f4eee4] font-normal leading-tight">
                  THE LAZY LEAF
                </h3>
                <p className="text-sm sm:text-base text-[#f4eee4]/90 font-light font-secondary">
                  B-257, Commerce College Road
                </p>
                <p className="text-xs sm:text-sm text-cream-muted font-light font-secondary">
                  Talwandi, Kota, Rajasthan &bull; 324005
                </p>
              </div>

              {/* Service Hours */}
              <div className="mt-6 pt-5 border-t border-cream/10 flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-[0.25em] text-cream-faint font-secondary font-medium">
                  Service Hours
                </span>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-secondary">
                  <span className="text-[#f4eee4]">Monday – Thursday</span>
                  <span className="text-amber font-medium">09:00 AM – 10:30 PM</span>
                </div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-secondary">
                  <span className="text-[#f4eee4]">Friday – Sunday</span>
                  <span className="text-amber font-medium">09:00 AM – 11:30 PM</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://maps.google.com/?q=The+Lazy+Leaf+B-257+Commerce+College+Road+Talwandi+Kota+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center gap-2 text-[11px] sm:text-xs tracking-wider min-w-0 h-[46px] w-full shadow-lg"
              >
                <FaDirections className="text-sm flex-shrink-0" />
                <span>Get Directions</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2 text-[11px] sm:text-xs tracking-wider min-w-0 h-[46px] w-full hover:border-amber hover:text-amber"
              >
                <FaInstagram className="text-sm flex-shrink-0" />
                <span>Instagram</span>
              </a>

              <a
                href="tel:+919876543210"
                className="btn-outline inline-flex items-center justify-center gap-2 text-[11px] sm:text-xs tracking-wider min-w-0 h-[46px] w-full hover:border-amber hover:text-amber"
              >
                <FaPhoneAlt className="text-xs flex-shrink-0" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Custom Stylized Vector Map Frame */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl border border-cream/15 bg-[#131615] overflow-hidden shadow-2xl flex flex-col justify-between p-6 sm:p-8">
              {/* Stylized Dark Grid Map Lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f4eee4" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
              </div>

              {/* Decorative Compass / Heading */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#f4eee4] font-secondary font-medium">
                    25.1396° N, 75.8344° E
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-cream-faint font-secondary border border-cream/15 px-2 py-0.5 rounded">
                  TALWANDI
                </span>
              </div>

              {/* Center Map Destination Pin */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-3">
                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber/20 animate-ping absolute" />
                  <div className="w-10 h-10 rounded-full border border-amber bg-[#0c0e0d] flex items-center justify-center shadow-lg relative z-10">
                    <span className="text-amber text-xs font-bold font-primary">LL</span>
                  </div>
                </div>
                <span className="font-primary text-xl text-[#f4eee4] font-normal mt-3 tracking-wide">
                  THE LAZY LEAF
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c89c6c] font-secondary">
                  Commerce College Road &bull; Kota
                </span>
              </div>

              {/* Map Footer Action */}
              <div className="relative z-10 flex justify-between items-center pt-3 border-t border-cream/10">
                <span className="text-[10px] uppercase tracking-wider text-cream-muted font-secondary">
                  Open 7 Days a Week
                </span>
                <a
                  href="https://maps.google.com/?q=The+Lazy+Leaf+B-257+Commerce+College+Road+Talwandi+Kota+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber font-secondary uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
