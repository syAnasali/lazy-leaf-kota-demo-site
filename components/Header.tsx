"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav/Nav";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setNavActive(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          navActive
            ? "bg-transparent py-5 sm:py-7 border-b border-transparent"
            : scrolled
            ? "bg-charcoal/92 backdrop-blur-lg py-3.5 border-b border-charcoal-border shadow-2xl"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Editorial Brandmark with Official Logo */}
            <Link
              href="#home"
              className="flex items-center gap-3.5 group z-[90]"
              onClick={handleBrandClick}
            >
              {/* Official Logo Frame */}
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-cream/25 overflow-hidden bg-charcoal group-hover:border-amber transition-colors duration-300 shadow-md">
                <Image
                  src="/lazy-leaf-logo.jpg"
                  fill
                  alt="The Lazy Leaf Logo"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-primary text-xl sm:text-2xl tracking-wider text-cream font-normal group-hover:text-amber transition-colors duration-300 leading-none">
                  THE LAZY LEAF
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-editorial-widest text-cream-faint uppercase font-secondary mt-1">
                  Kota &bull; Cafe &amp; Kitchen
                </span>
              </div>
            </Link>

            {/* Quick Menu Button & Hamburger Trigger */}
            <div className="flex items-center gap-6 sm:gap-8 z-[90]">
              <Link
                href="#menu"
                onClick={() => setNavActive(false)}
                className="hidden md:inline-flex text-[11px] uppercase tracking-editorial-widest text-cream/80 hover:text-amber transition-colors duration-300 border-b border-cream/20 hover:border-amber pb-0.5 font-secondary"
              >
                The Menu
              </Link>

              {/* Editorial Hamburger Button */}
              <button
                onClick={() => setNavActive(!navActive)}
                className="w-10 h-10 rounded-full border border-cream/20 hover:border-amber flex flex-col items-center justify-center gap-1.5 text-cream relative z-[90] outline-none transition-all duration-300 cursor-pointer bg-charcoal/40 backdrop-blur-sm"
                aria-label="Toggle navigation"
              >
                <span
                  className={`w-4 h-[1px] bg-cream transition-all duration-300 ${
                    navActive ? "translate-y-[7px] rotate-45 bg-amber" : ""
                  }`}
                />
                <span
                  className={`w-4 h-[1px] bg-cream transition-opacity duration-300 ${
                    navActive ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-4 h-[1px] bg-cream transition-all duration-300 ${
                    navActive ? "-translate-y-[7px] -rotate-45 bg-amber" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {navActive && <Nav onClose={() => setNavActive(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
