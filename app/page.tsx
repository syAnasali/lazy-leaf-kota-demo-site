"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import SignatureSequence from "@/components/SignatureSequence";
import StayForAWhile from "@/components/StayForAWhile";
import About from "@/components/About";
import Menu from "@/components/Menu/Menu";
import OpeningHours from "@/components/OpeningHours";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  useEffect(() => {
    let locomotiveInstance: any = null;
    let isMounted = true;

    const loadLocomotiveScroll = async () => {
      try {
        if (typeof window === "undefined") return;
        gsap.registerPlugin(ScrollTrigger);
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        
        if (!isMounted) return;

        locomotiveInstance = new LocomotiveScroll({
          autoResize: true,
          scrollCallback: () => {
            ScrollTrigger.update();
          },
        });

        setTimeout(() => {
          if (isMounted) {
            ScrollTrigger.refresh();
          }
        }, 300);
      } catch (e) {
        console.warn("Smooth scroll initialization notice:", e);
      }
    };

    loadLocomotiveScroll();

    return () => {
      isMounted = false;
      if (locomotiveInstance && typeof locomotiveInstance.destroy === "function") {
        try {
          locomotiveInstance.destroy();
        } catch (_) {}
      }
    };
  }, []);

  return (
    <div className="h-full overflow-x-hidden bg-charcoal">
      <Hero />
      <SignatureSequence />
      <StayForAWhile />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonials />
    </div>
  );
};

export default Home;
