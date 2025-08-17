"use client";
import React, { useState } from "react";
import './AnimatedLetters.css';

const AnimatedLetters = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`letter-wrapper ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter"
          style={{
            transitionDelay: `${
              isHovered ? i * 0.05 : (text.length - i) * 0.05
            }s`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
