"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WavyText = ({ text = "Let's Talk" }) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const jumpWave = () => {
      const timeline = gsap.timeline();

      lettersRef.current.forEach((el, i) => {
        if (!el) return;

        timeline.to(el, {
          y: -25,
          scaleY: 1.1,
          color: `hsl(${i * 30}, 100%, 60%)`,
          duration: 0.6,
          ease: "power2.out",
        }, i * 0.2);

        timeline.to(el, {
          y: 0,
          scaleY: 1,
          duration: 0.5,
          ease: "bounce.out",
        }, i * 0.2 + 0.6);
      });
    };

    const loop = () => {
      jumpWave();
      setTimeout(loop, 5000);
    };

    loop();
  }, []);

  return (
    <div className="text-[50px] md:text-[120px] font-bold mt-10 tracking-wide flex flex-wrap justify-center max-w-full overflow-hidden">
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => (lettersRef.current[i] = el)}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default WavyText;
