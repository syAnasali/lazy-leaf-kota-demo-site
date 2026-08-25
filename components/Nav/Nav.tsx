"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import NavList from "./NavList";

const navVariants = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  close: {
    opacity: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

type NavProps = {
  onClose?: () => void;
};

const Nav = ({ onClose }: NavProps) => {
  // Lock body scroll while navigation menu is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="open"
      exit="close"
      className="fixed inset-0 bg-[#0c0e0d] z-[70] w-full h-screen min-h-[100dvh] flex flex-col justify-between pt-28 pb-10 overflow-y-auto"
    >
      <div className="container mx-auto flex-1 flex flex-col items-center justify-center relative z-10 px-6 my-auto">
        <NavList onClose={onClose} />
      </div>

      {/* Editorial Navigation Footer */}
      <div className="container mx-auto text-center border-t border-charcoal-border pt-6 relative z-10 px-6">
        <p className="text-[11px] uppercase tracking-editorial-widest text-amber font-medium font-secondary">
          The Lazy Leaf &bull; Kota, Rajasthan
        </p>
        <p className="text-xs text-cream-faint mt-1 font-secondary">
          B-257, Commerce College Road, Talwandi &bull; 09:00 AM – 11:00 PM
        </p>
      </div>
    </motion.nav>
  );
};

export default Nav;
