"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "@/Components/ThemeProvider";

const lines = [
  ["Empowering"],
  ["Brands", "With", "Premium", "Traffic"],
  ["Across", "The", "Globe", "Since", "2021"],
  ["Join", "The", "Revolution", "In", "Digital", "Advertising"],
];

// 👇 Default pl-0, add indent only on sm+
const indentSizes = ["pl-0", "sm:pl-4", "sm:pl-6", "sm:pl-8"];

const wordVariant = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: (i) => ({
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

const underlineVariant = {
  hidden: { width: 0 },
  visible: (i) => ({
    width: "100%",
    transition: {
      delay: i * 0.15 + 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const HeroText = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const handleClick = () => {
    router.push("/contact-us");
  };

  const totalWordsBeforeLine = (lineIndex) =>
    lines.slice(0, lineIndex).reduce((acc, line) => acc + line.length, 0);

  return (
    <div className="text-center px-4 py-12 space-y-6 sm:px-6 md:px-0">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight space-y-4">
        {lines.map((line, lineIndex) => (
          <div
            key={lineIndex}
            className={`${indentSizes[lineIndex] || "pl-0"} flex flex-wrap justify-center gap-x-3`}
          >
            {line.map((word, wordIndex) => {
              const globalIndex = totalWordsBeforeLine(lineIndex) + wordIndex;
              return (
                <motion.div
                  key={wordIndex}
                  className="relative inline-block overflow-hidden"
                  custom={globalIndex}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariant}
                >
                  <span style={{ color: "var(--text-color3)" }}>{word}</span>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="text-base sm:text-lg max-w-xl mx-auto pt-3"
      >
        We drive real results for global brands through performance-first
        advertising and precision targeting.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="pt-6"
      >
        <button
          onClick={handleClick}
          className="hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition duration-300 cursor-pointer"
          style={{ backgroundColor: "var(--bg-main3)" }}
        >
          Let's Connect
        </button>
      </motion.div>
    </div>
  );
};

export default HeroText;
