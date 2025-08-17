"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedLetters from "@/HelpComponent/AnimatedLetters";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarBg = scrolled ? "backdrop-blur-md shadow-md" : "";
  const navBg =
    scrolled && theme === "dark"
      ? "#0f0f0f"
      : scrolled && theme === "light"
      ? "#ffffff"
      : "transparent";
  const textColor = theme === "dark" ? "#ffffff" : "#1a1a1a";

  const hoverGradient =
    theme === "dark"
      ? "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400"
      : "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-blue-500";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
      style={{
        backgroundColor: navBg,
        color: textColor,
      }}
    >
      <div className="w-[90%] mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/img/logo-white.png"
            alt="logo"
            className={`w-35 md:w-[220px] h-auto ${theme === "dark" ? "block" : "hidden"}`}
          />
          <img
            src="/img/logo-color.png"
            alt="logo"
            className={`w-35 md:w-[220px] h-auto ${theme === "light" ? "block" : "hidden"}`}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex space-x-10 items-center p-4 font-bold">
          {[
            ["Home", "/"],
            ["About Us", "/about-us"],
            ["Services", "/services"],
            ["Career", "/career"],
            ["Blog", "/blog"],
            ["Contact Us", "/contact-us"],
          ].map(([text, href]) => (
            <li key={text}>
              <Link
                href={href}
                className={`relative group text-xl transition-all duration-300 ${hoverGradient}`}
              >
                <AnimatedLetters text={text} />
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current group-hover:w-full transition-all duration-500"></span>
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="xl:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul
          className="xl:hidden px-6 pb-4 space-y-3 p-3 text-lg backdrop-blur-md shadow-md"
          style={{
            backgroundColor: navBg,
            color: textColor,
          }}
        >
          {[
            ["Home", "/"],
            ["About Us", "/about-us"],
            ["Services", "/services"],
            ["Career", "/career"],
            ["Blog", "/blog"],
            ["Contact Us", "/contact-us"],
          ].map(([text, href]) => (
            <li key={text}>
              <Link
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-semibold transition-all duration-300 ${hoverGradient}`}
              >
                {text}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
