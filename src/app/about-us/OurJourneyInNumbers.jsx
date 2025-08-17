"use client";

import FadeUpOnScroll from "@/Components/FadeUpOnScroll";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function OurJourneyInNumbers() {
  const stats = [
    { value: 10, label: "Projects Completed", suffix: "k+" },
    { value: 320, label: "Happy Clients", suffix: "+" },
    { value: 85, label: "Team Members" },
  ];

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" px-4 py-16 flex flex-col items-center justify-center" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-center">
        Our Journey in Numbers
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        A snapshot of our growth and success over the years.
      </p>

      <FadeUpOnScroll className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full justify-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className=" p-8 rounded-xl text-center shadow-lg hover:scale-105 transition-transform duration-300 border border-blue-800 w-full"
               style={{
               backgroundColor: "var(--bg-main4)",
               color: "var(--text-color)",}}
            >
              <div className="text-blue-500 text-5xl font-extrabold mb-2 flex justify-center items-center">
                {startCount ? (
                  <>
                    <CountUp end={stat.value} duration={2} />
                    {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
                  </>
                ) : (
                  <>
                    0
                    {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
                  </>
                )}
              </div>
              <p className=" text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeUpOnScroll>
    </section>
  );
}
