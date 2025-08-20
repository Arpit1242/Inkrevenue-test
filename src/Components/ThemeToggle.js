"use client";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 15px rgba(59,130,246,0.7)",
      }}
      animate={{
        boxShadow: [
          "0px 0px 6px rgba(59,130,246,0.3)",
          "0px 0px 12px rgba(59,130,246,0.6)",
          "0px 0px 6px rgba(59,130,246,0.3)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className={`fixed top-[750px] md:top-1/2 right-7 -translate-y-1/2 z-50 
        px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base 
        rounded-full font-medium border border-blue-500 shadow-lg
        ${
          theme === "light"
            ? "bg-white text-black hover:bg-gray-100"
            : "bg-[#1f1f1f] text-white hover:bg-[#2a2a2a]"
        }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -180, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 180, scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          {theme === "light" ? "☀️" : "🌙"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
