"use client";
import React, { useEffect, useRef, useState } from "react";

const FloatingImage = ({
  src,
  top,
  left,
  right,
  bottom,
  width,
  delay = 0,
  floatRange = 30,
  zIndex = 1,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const imgRef = useRef(null);

  // Floating effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * floatRange;
      const y = (e.clientY / window.innerHeight - 0.5) * floatRange;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [floatRange]);

  // Viewport visibility using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect(); // trigger only once
        }
      },
      {
        threshold: 0.3, // trigger when 30% visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt=""
      className={`absolute rounded-xl transition-all duration-700 ease-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
      style={{
        top,
        left,
        right,
        bottom,
        width,
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex,
      }}
    />
  );
};

export default FloatingImage;
