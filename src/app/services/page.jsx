"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import "../globals.css";
import Assistance from "./Assistance";
import FadeRightOnScroll from "@/Components/FadeRightOnScroll";

const phrases = [
  ["TRIGGER", "REACH"],
  ["DRIVE", "GROWTH"],
  ["ENGAGE", "AUDIENCE"],
  ["ENHANCE", "BUYERS"],
  ["SCALE", "RESULTS"],
  ["UNLOCK", "ACTIONS"],
];

const wordVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { y: -50, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

export default function page() {
  const [index, setIndex] = useState(0);
  const [headerText, setHeaderText] = useState("");
  const fullHeader = "YOUR ONE-STOP SOLUTIONS PARTNER TO";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setHeaderText(fullHeader.slice(0, i));
      i++;
      if (i > fullHeader.length) clearInterval(typing);
    }, 40);
    return () => clearInterval(typing);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 500); // give layout time to stabilize
        }
      }
    }
  }, []);

  const [leftWord, rightWord] = phrases[index];
  // style={{
  //   backgroundColor: "var(--bg-color)",
  //   color: "var(--text-color)"
  // }}

  return (
    <>
      <section className="relative  overflow-hidden flex items-center justify-center  w-full mt-40" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
        <div className="max-w-7xl w-full mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-lg uppercase tracking-widest text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {headerText}
          </motion.div>

          <div className="flex flex-wrap md:flex-nowrap items-start justify-between w-full overflow-hidden mb-0 md:mb-[80px] lg:mb-0">
            <div className="overflow-hidden w-full md:w-1/2 pr-2">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={leftWord}
                  variants={wordVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-6xl lg:text-[120px] md:text-[70px] font-extrabold whitespace-nowrap overflow-hidden mb-0 md:mb-6"
                >
                  {leftWord}
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="overflow-hidden w-full md:w-1/2 text-right pl-2 ">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={rightWord}
                  variants={wordVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-6xl lg:text-[120px] md:text-[70px] font-extrabold whitespace-nowrap overflow-hidden md:mt-25 mt-5"
                >
                  {rightWord}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative">
            <motion.p
              className="text-lg text-gray-600 max-w-xl z-10 relative md:-top-15 mt-5 md:mt-"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Fueling brand success through innovative strategies, compelling
              content, and dynamic campaigns – your journey to digital
              excellence starts here.
            </motion.p>
          </div>
        </div>
      </section>
      <FadeRightOnScroll>
        <div className="flex justify-end  relative md:-top-15 overflow-x-hidden mt-5 md:mt-15 lg:mt-0">
        <img
          src="/img/office-image.webp"
          alt="Office"
          className="w-screen sm:w-[500px] md:w-full lg:w-[850px] h-auto opacity-80"
        />
      </div>
      </FadeRightOnScroll>
      <Assistance />
    </>
  );
}
