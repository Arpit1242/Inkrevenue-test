import React from "react";
import WavyText from "@/HelpComponent/WavyText";
import FadeUpOnScroll from "./FadeUpOnScroll";
import AnimatedLetters from "@/HelpComponent/AnimatedLetters";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const addressStyle = "text-lg text-[#999] mt-2";

  return (
    <div className="overflow-hidden w-full bg-black">
      <FadeUpOnScroll>
        <div className="border-b border-gray-300 bg-black overflow-hidden lg:mt-25">
          <div className="w-[90%] mx-auto text-white grid grid-cols-1 lg:grid-cols-12 lg:gap-4 overflow-hidden">
            {/* Column 1 */}
            <div className="flex flex-col gap-8 lg:col-span-6">
              <img
                src="/img/logo-white.png"
                alt="Logo"
                className="max-w-[200px]"
              />

              <div>
                <div className="text-xl font-bold text-[#999]">
                  CORPORATE OFFICES
                </div>
                <div className={addressStyle}>
                <span className="font-bold text-xl">Head Office</span>  - 98B, Udyog Vihar, Phase V, Gurgaon, <br />
                  Haryana - 122016
                </div>
                <div className={addressStyle}>
                <span className="font-bold text-xl">Branch Office</span>  - Banamalipur Jessore Road, Near Eco hospital, Opposite Canara
                  Bank, Barasat, Kolkata, West Bengal, 700124
                </div>
              </div>

              <div>
                <div className="text-xl font-bold text-[#999]">
                  Contact Us -
                </div>
                <div className={addressStyle}>+91 8368232392,   +91 8860780181</div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 text-center mt-5 lg:mt-0 lg:col-span-6 overflow-hidden">
              <div className="flex justify-center max-w-full overflow-hidden cursor-pointer">
                <Link href="/contact-us">
                  <WavyText />
                </Link>
              </div>

              <div className="flex justify-center space-x-10 mt-10 flex-wrap mb-10 md:mb-10 lg:mb-0">
                <a
                  href="https://www.facebook.com/inkrevenue/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-white text-4xl hover:text-blue-500 transition" />
                </a>
                <a
                  href="https://www.instagram.com/inkrevenue/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white text-4xl hover:text-pink-500 transition" />
                </a>
                <a
                  href="https://www.linkedin.com/company/inkrevenue/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-white text-4xl hover:text-blue-400 transition" />
                </a>
                <a
                  href="https://wa.me/918368232392"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-white text-4xl hover:text-green-500 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeUpOnScroll>
      <FadeUpOnScroll>
        <footer className="w-full border-t border-gray-300 text-sm text-gray-500 py-6 bg-black overflow-hidden">
          <div className="max-w-[90%] mx-auto  grid grid-cols-1 gap-y-4 text-center lg:text-left">
            {/* ROW 1: Links - center on mobile, right-align on desktop */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 order-1">
              <a href="/about-us" className="text-xl  whitespace-nowrap font-bold ">
                <AnimatedLetters text="About Us"/>
              </a>
              <a
                href="/career"
                className="text-xl  whitespace-nowrap font-bold"
              >
                <AnimatedLetters text="Career" />
              </a>
              <Link
                href="/TermsAndConditions"
                className="text-xl  whitespace-nowrap font-bold"
              >
                <AnimatedLetters text="Terms & Condition" />
              </Link>
              <Link
                href="/PrivacyPolicy"
                className="text-xl  whitespace-nowrap font-bold"
              >
                <AnimatedLetters text="PrivacyPolicy" />
              </Link>
              {/* <a
                href="/privacy"
                className="text-lg text-white whitespace-nowrap"
              >
                <AnimatedLetters text="Privacy Policy" />
              </a> */}
            </div>

            {/* ROW 2: Copyright */}
            <div className="text-lg text-white order-2">
              © 2025 InkRevenue Rights Reserved. Designed by InkRevenue.
            </div>
          </div>
        </footer>
      </FadeUpOnScroll>
    </div>
  );
};

export default Footer;
