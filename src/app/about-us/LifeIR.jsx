"use client";

import FadeUpOnScroll from "@/Components/FadeUpOnScroll";
import FloatingImage from "../../HelpComponent/FloatingImage";
import { floatingImages, lifeIrText } from "@/data/about-us/lifeIrData";

export default function LifeIR() {
  return (
    <FadeUpOnScroll>
      <div className="relative lg:min-h-screen overflow-hidden px-4 md:px-6 py-16 md:py-20 lg:mt-20 lg:mb-30"  style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
        {/* 🌐 Floating Images — Only visible on large screens (lg and up) */}
        <div className="hidden lg:block">
          {floatingImages.map((img, index) => (
            <FloatingImage key={index} {...img} />
          ))}
        </div>

        {/* 🧠 Center Text */}
        <div className="relative z-10 text-center max-w-3xl mx-auto lg:p-30 lg:mt-4">
          {/* 🔹 Heading for Mobile & Tablet */}
          <h3 className="block lg:hidden mb-4 text-xl sm:text-2xl font-bold text-[#999]">
            Life At <span className="text-blue-500">Ink</span>Revenue
          </h3>

          {/* ✍️ Paragraph */}
          <p className="italic text-base sm:text-lg md:text-2xl leading-relaxed">
            {lifeIrText}
          </p>

          {/* 🔸 Heading for Desktop */}
          <h3 className="hidden lg:block mt-8 text-2xl sm:text-3xl font-bold text-[#999]">
            Life At <span className="text-blue-500">Ink</span>Revenue
          </h3>
        </div>
      </div>
    </FadeUpOnScroll>
  );
}
