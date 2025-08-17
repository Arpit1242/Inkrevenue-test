"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeUpOnScroll from "@/Components/FadeUpOnScroll";
import clientLogos from "@/data/home/clientLogos"; // imported logos array
import "./ClientSlider.css"; // optional if you have custom styles

gsap.registerPlugin(ScrollTrigger);

const ClientSlider = () => {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--bg-main1)",
        color: "var(--text-color)",
      }}
    >
      <div className="mx-auto h-2 md:w-[800px] w-[300px] rounded-2xl"
      style={{
    backgroundColor: "var(--bg-main7)"  
  }}></div>
      <div className="py-20 overflow-hidden w-[90%] max-w-[1440px] mx-auto">
        <FadeUpOnScroll className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 tracking-wide">
          OUR CLIENTS
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <div ref={sliderRef} className="relative w-full mt-10">
            <div
              ref={trackRef}
              className="scroll-track flex gap-8 md:gap-12 lg:gap-16"
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0 w-28 md:w-36 lg:w-40"
                >
                  <img
                    src={logo}
                    alt={`Client ${index}`}
                    className="h-28 md:h-36 lg:h-60 object-contain transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  );
};

export default ClientSlider;
