"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeUpOnScroll from "@/Components/FadeUpOnScroll";
import faqs from "@/data/home/faqs"; // 👈 Importing the data
import { useTheme } from "../../Components/ThemeProvider";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const { theme } = useTheme(); // ⬅️ Get current theme
  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const isDark = theme === "dark";
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <div>
      <div className="w-[80%] mx-auto pt-20 pb-40">
        <h2 className="text-3xl font-bold text-center mb-20">
          Frequently Asked Questions
        </h2>

        <FadeUpOnScroll>
          <div className="space-y-1">
            {visibleFaqs.map((faq, index) => {
              const actualIndex = showAll ? index : index;
              const isOpen = openIndex === actualIndex;

              return (
                <div
                  key={actualIndex}
                  className={`rounded-lg p-4 transition-all duration-300 ease-in-out ${
                    isOpen ? "bg-white" : ""
                  }`}
                  style={{
                    backgroundColor: !isOpen
                      ? isDark
                        ? "#171717"
                        : "var(--bg-main1)"
                      : undefined,
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(actualIndex)}
                    className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span
                      className={`text-lg font-medium transition-colors duration-300 ${
                        isOpen ? "text-blue-600" : ""
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 text-blue-600"
                          : "rotate-0 text-white"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isOpen
                        ? "max-h-[500px] mt-2 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className={`text-sm transition-colors duration-300 ${
                        isOpen ? "text-black" : "text-gray-300"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}

            {faqs.length > 5 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-all duration-300"
                  style={{backgroundColor : "var(--bg-main3)"}}
                >
                  {showAll ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  );
};

export default Faqs;
