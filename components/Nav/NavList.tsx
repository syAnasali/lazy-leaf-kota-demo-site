"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "#home", name: "Home", sub: "01" },
  { href: "#experience", name: "The Slowness", sub: "02" },
  { href: "#stay", name: "Stay a While", sub: "03" },
  { href: "#about", name: "Our Story", sub: "04" },
  { href: "#menu", name: "The Menu", sub: "05" },
  { href: "#hours", name: "Hours & Place", sub: "06" },
  { href: "#testimonials", name: "Notes & Reviews", sub: "07" },
  { href: "#contact", name: "Visit Us", sub: "08" },
] as const;

const letterAnim = {
  initial: {
    y: "110%",
    opacity: 0,
  },
  enter: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i[0],
    },
  }),
  exit: (i: [number, number]) => ({
    y: "110%",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      delay: i[1],
    },
  }),
};

const getLetter = (name: (typeof links)[number]["name"]) => {
  const letters: JSX.Element[] = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.025, (name.length - index) * 0.006]}
        key={index}
        className={letter === " " ? "mr-2 md:mr-3" : ""}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

type NavListProps = {
  onClose?: () => void;
};

const NavList = ({ onClose }: NavListProps) => {
  const handleClick = (href: string, e: React.MouseEvent) => {
    if (href === "#home") {
      e.preventDefault();
      if (onClose) onClose();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.pushState(null, "", window.location.pathname);
      }
    } else {
      if (onClose) onClose();
    }
  };

  return (
    <ul className="flex flex-col gap-3.5 md:gap-4.5 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            onClick={(e) => handleClick(link.href, e)}
            className="group flex items-baseline gap-3 text-cream font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight hover:text-amber transition-colors duration-300 cursor-pointer overflow-hidden py-0.5"
          >
            <span className="text-[10px] sm:text-xs font-secondary text-cream-faint group-hover:text-olive-light transition-colors font-medium tracking-widest">
              {link.sub}
            </span>
            <div className="flex overflow-hidden">
              {getLetter(link.name)}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
