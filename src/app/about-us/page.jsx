"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import "./page.css";

import OurStory1 from "./OurStory1";
import WhatWeBring from "./WhatWeBring";
import OurJourneyInNumbers from "./OurJourneyInNumbers";
import MeetOurTeam from "./MeetOurTeam";
import LifeIR from "./LifeIR";

import { useTheme } from "../../Components/ThemeProvider"; // ✅ Import Theme context

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme(); // ✅ Access current theme

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* 🎯 Hero Section */}
      <header className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full  overflow-hidden">
        <div
          className={cn(
            "absolute inset-0",
            theme === "light"
              ? "light-gradient-animated"
              : "dark-gradient-animated"
          )}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
          <div
            className={cn(
              "transition-all duration-500 ease-out",
              isScrolled ? "scale-95 opacity-60" : "scale-100 opacity-100",
              mounted &&
                !isScrolled &&
                "animate-in fade-in slide-in-from-bottom-12 duration-1000"
            )}
          >
            <span className="text-4xl sm:text-5xl lg:text-6xl font-headline font-extrabold leading-tight tracking-tighter drop-shadow-xl text-white">
              We Are{" "}
              <span className=" text-5xl sm:text-6xl lg:text-7xl">
                <span className="text-blue-600">Ink</span><span>Revenue</span>
              </span>
            </span>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto text-white drop-shadow-lg font-light">
              Pioneering the future of technology with innovative solutions that
              inspire and deliver excellence.
            </p>
          </div>
        </div>
      </header>

      {/* 🔥 Sections */}
      <OurStory1 />
      <WhatWeBring />
      <OurJourneyInNumbers />
      <MeetOurTeam />
      <LifeIR />

      {/* 🦶 Footer */}
      <div className="lg:mt-20"></div>
    </div>
  );
}
