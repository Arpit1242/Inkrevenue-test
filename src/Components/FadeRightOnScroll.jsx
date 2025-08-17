"use client";
import React, { useEffect, useRef, useState } from "react";

const FadeRightOnScroll = ({ children, className = "", threshold = 0.3 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeRightOnScroll;
