"use client";

import FadeUpOnScroll from "@/Components/FadeUpOnScroll";
import { features } from "@/data/about-us/whatWeBringData";

export default function WhatWeBring() {
  return (
    <section
      className=" px-4 py-16 flex flex-col items-center"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-center">
        What We Bring to the Table
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        Our core values drive everything we do, ensuring we deliver the best for
        our clients.
      </p>

      <FadeUpOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full justify-center">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className=" p-8 rounded-xl text-center shadow-lg hover:scale-105 transition-transform duration-300 border border-blue-800"
                style={{
               backgroundColor: "var(--bg-main4)",
               color: "var(--text-color)",
      }}
              >
                <div className="text-blue-500 mb-4 text-4xl flex justify-center">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold  mb-4" style={{color: "var(--text-color2)",}}>
                  {feature.text}
                </h3>
                <p className=" text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </FadeUpOnScroll>
    </section>
  );
}
