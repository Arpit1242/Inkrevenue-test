"use client";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      className={`px-5 py-2 rounded-full font-medium border transition-all duration-300 shadow-md
        ${
          theme === "light"
            ? "bg-white text-black border-gray-300 hover:bg-gray-100"
            : "bg-[#1f1f1f] text-white border-gray-700 hover:bg-[#2a2a2a]"
        }`}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </motion.button>
  );
}
