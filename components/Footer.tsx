"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="min-h-[85vh] sm:min-h-screen bg-charcoal text-cream relative flex flex-col justify-between pt-24 pb-12 overflow-hidden select-none border-t border-charcoal-border"
    >
      {/* Background Subtle Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-[#080908] pointer-events-none" />

      {/* Atmospheric Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="font-primary text-[28vw] uppercase leading-none text-cream">
          LEAF
        </span>
      </div>

      {/* Top Subtle Coordinates Bar */}
      <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs uppercase tracking-editorial-widest text-cream-faint font-secondary pb-8 border-b border-charcoal-border gap-4">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
            Kota, Rajasthan &bull; India
          </span>
          <span className="hidden sm:inline">
            B-257, Commerce College Road &bull; Talwandi
          </span>
          <span>
            Open Daily &bull; 09:00 AM – 11:00 PM
          </span>
        </div>
      </div>

      {/* Center Cinematic Brand-Film Closing Climax */}
      <div className="container mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-10 flex flex-col items-center justify-center text-center my-auto max-w-5xl">
        {/* Official Logo Emblem & Subtle Organic Swaying Motion */}
        <div className="relative mb-8 sm:mb-10 flex flex-col items-center">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-olive/20 filter blur-2xl scale-150 pointer-events-none" />

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, -2, 0],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-cream/25 p-1.5 bg-charcoal/90 shadow-2xl overflow-hidden"
          >
            <div className="relative w-full h-full rounded-full border border-amber/40 overflow-hidden">
              <Image
                src="/lazy-leaf-logo.jpg"
                fill
                alt="The Lazy Leaf Official Emblem"
                className="object-cover"
                sizes="96px"
              />
            </div>
          </motion.div>
        </div>

        {/* Final Typography - Grand Statement */}
        <h2 className="font-primary font-normal text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-cream tracking-tight leading-[0.95] mb-4">
          Take your <span className="italic font-light text-amber">time.</span>
        </h2>

        {/* Brand Sign-off */}
        <p className="font-primary text-xl sm:text-3xl md:text-4xl tracking-widest text-cream uppercase font-light mt-3">
          The Lazy Leaf
        </p>

        {/* Understated Location Anchor */}
        <p className="text-[11px] sm:text-xs uppercase tracking-editorial-widest text-cream-faint font-secondary mt-3">
          B-257, Commerce College Road &bull; Talwandi &bull; Kota
        </p>

        {/* Cinematic Quick Connect Links */}
        <div className="flex items-center gap-6 sm:gap-8 mt-12 pt-8 border-t border-charcoal-border/80">
          <a
            href="https://maps.google.com/?q=The+Lazy+Leaf+B-257+Commerce+College+Road+Talwandi+Kota+Rajasthan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-editorial-widest text-cream-muted hover:text-amber transition-colors font-secondary"
          >
            <FaMapMarkerAlt className="text-amber text-xs" />
            <span className="hidden sm:inline">Directions</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-editorial-widest text-cream-muted hover:text-amber transition-colors font-secondary"
          >
            <FaInstagram className="text-amber text-xs" />
            <span>Instagram</span>
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-editorial-widest text-cream-muted hover:text-amber transition-colors font-secondary"
          >
            <FaWhatsapp className="text-amber text-xs" />
            <span>WhatsApp</span>
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-xs uppercase tracking-editorial-widest text-cream-muted hover:text-amber transition-colors font-secondary"
          >
            <FaPhoneAlt className="text-amber text-xs" />
            <span className="hidden sm:inline">Call</span>
          </a>
        </div>
      </div>

      {/* Bottom Minimal Copyright Bar */}
      <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-[11px] tracking-editorial-wide text-cream-faint font-secondary pt-8 border-t border-charcoal-border gap-2">
          <p>&copy; {new Date().getFullYear()} The Lazy Leaf &bull; All rights reserved.</p>
          <Link
            href="#home"
            className="hover:text-amber transition-colors uppercase tracking-editorial-widest cursor-pointer"
          >
            Back to top &uarr;
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
