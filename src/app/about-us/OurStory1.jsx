"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeUpOnScroll from "@/Components/FadeUpOnScroll";
import FadeLeftOnScroll from "@/Components/FadeLeftOnScroll";
import content from "@/data/about-us/ourStoryContent";
import FadeRightOnScroll from "@/Components/FadeRightOnScroll";
gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const floatRef = useRef(null);

  useEffect(() => {
    if (!floatRef.current) return;

    gsap.to(floatRef.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: floatRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <FadeUpOnScroll>
      <div  style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }} >
        <section className="w-[90%] mx-auto py-20 text-white overflow-hidden">
        <div className="flex justify-end">
          <div className="pr-15 pl-8 pt-4 pb-2 bg-blue-600 flex">
            <div className="text-center">
              <span className="pr-7 text-lg">from <br /></span>
              <span className="text-3xl font-bold">{content.fromYear}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          <div className="md:col-span-5 md:pr-8">
            <FadeLeftOnScroll>
              <h2 className="text-4xl text-blue-400 mb-2 font-semibold">
                {content.title}
              </h2>
            </FadeLeftOnScroll>
            {/* <p className="text-[#999] mb-6 text-2xl">{content.subheading}</p> */}
          <FadeLeftOnScroll>
            <div className="mt-5">
              <img src="/img/growth1.jpg" alt="" />
            </div>
          </FadeLeftOnScroll>
          </div>

          <div className="md:col-span-7 mt-10">
            <p className="text-lg leading-7 mb-4 text-[#999]">
              {content.description1}
            </p>
            <p className="text-lg leading-7 text-[#999]">
              {content.description2}
            </p>
          </div>
        </div>
      </section>
      </div>
    </FadeUpOnScroll>
  );
};

export default OurStory;
