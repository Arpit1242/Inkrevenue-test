"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaGlobe, FaComments, FaHandshake, FaThLarge } from "react-icons/fa";
import './OrbitingIcons.css';
const icons = [
  {
    icon: <FaGlobe size={28} />,
    label: "Global",
    description: "Expand your worldwide presence.",
  },
  {
    icon: <FaComments size={28} />,
    label: "Chat",
    description: "Engage in real-time conversations.",
  },
  {
    icon: <FaHandshake size={28} />,
    label: "Connect",
    description: "Build meaningful business relationships.",
  },
  {
    icon: <FaThLarge size={28} />,
    label: "Platform",
    description: "Access all tools from one powerful hub.",
  },
];

const OrbitingIcons = () => {
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const iconRefs = useRef([]);
  const intervalRef = useRef(null);

  const [rotation, setRotation] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const step = 90;
  const stepCountRef = useRef(0);
  const directionRef = useRef(1);
  const prevDisplayIndex = useRef(0);

  // Initial fast spin
  useEffect(() => {
    const initialSpin = step * 3;
    setRotation(initialSpin);

    gsap.to(containerRef.current, {
      rotation: initialSpin,
      duration: 1.0,
      ease: "power2.out",
    });

    iconRefs.current.forEach((el) => {
      gsap.to(el, {
        rotation: -initialSpin,
        duration: 1.0,
        ease: "power2.out",
      });
    });
  }, []);

  const animate = () => {
    stepCountRef.current += 1;

    if (stepCountRef.current % 4 === 0) {
      directionRef.current *= -1;
    }

    const delta = step * directionRef.current;
    const newRotation = rotation + delta;
    const newIndex =
      (focusedIndex + directionRef.current + icons.length) % icons.length;

    setRotation(newRotation);
    setFocusedIndex(newIndex);

    gsap.to(containerRef.current, {
      rotation: newRotation,
      duration: 2.4,
      ease: "power2.inOut",
    });

    iconRefs.current.forEach((el) => {
      gsap.to(el, {
        rotation: -newRotation,
        duration: 2.4,
        ease: "power2.inOut",
      });
    });
  };

  // Loop animation
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        animate();
      }, 3200);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused, rotation, focusedIndex]);

  const handleMouseEnter = (i) => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
    setHoveredIndex(i);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
  };

  const displayIndex = hoveredIndex !== null ? hoveredIndex : focusedIndex;

  // Animate center bubble on index change
  useEffect(() => {
    if (prevDisplayIndex.current !== displayIndex) {
      gsap.set(centerRef.current, {
        scale: 0.85,
        transformOrigin: "center center",
      });
      gsap.to(centerRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      prevDisplayIndex.current = displayIndex;
    }
  }, [displayIndex]);

  return (
    <div className="flex items-center justify-center h-screen bg-transparent">
      <div className="relative w-[500px] h-[500px]">
        {/* Orbit Dotted Rings */}
        <div className="absolute top-1/2 left-1/2 w-[380px] h-[380px] -translate-x-1/2 -translate-y-1/2 border-2 border-dotted border-blue-500 rounded-full z-0" />
        <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 border-2 border-dotted border-blue-500 rounded-full z-0" />

        {/* Rotating Icons */}
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-full">
          {icons.map((item, i) => {
            const angle = (360 / icons.length) * i;
            const rad = (angle * Math.PI) / 180;
            const radius = i % 2 === 0 ? 190 : 210;
            const x = 250 + radius * Math.cos(rad);
            const y = 250 + radius * Math.sin(rad);

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: y,
                  left: x,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  ref={(el) => (iconRefs.current[i] = el)}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer
                    ${
                      displayIndex === i
                        ? "bg-blue-600 text-white"
                        : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                >
                  {item.icon}
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Circle */}
        <div
          ref={centerRef}
          className="absolute top-1/2 left-1/2 w-[310px] h-[310px] -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full text-white flex flex-col items-center justify-center text-center px-6 shadow-xl z-10"
        >
          <p className="text-2xl font-bold mb-2">{icons[displayIndex].label}</p>
          <p className="text-base font-medium leading-snug">
            {icons[displayIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrbitingIcons;
