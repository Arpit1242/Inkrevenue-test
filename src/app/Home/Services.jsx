"use client";
import React, { useState } from "react";
import ScrollAnimateText from "../../HelpComponent/ScrollAnimateText";
import FadeRightOnScroll from "@/Components/FadeRightOnScroll";
import { useRouter } from "next/navigation";
import "./Services.css";

import { serviceImages, serviceRows } from "@/data/home/servicesData";

const Services = () => {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className=" pb-20" style={{
    backgroundColor: "var(--bg-main1)",
    color: "var(--text-main)",
  }}>
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className=" text-lg md:text-xl pt-10 font-semibold">
          Services
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-3">
          <ScrollAnimateText>
            <div className="text-3xl md:text-5xl  font-bold">
              Solutions we provide
            </div>
          </ScrollAnimateText>

          <div className="md:col-span-2">
            <ScrollAnimateText>
              <div className=" text-base md:text-lg font-semibold">
                We are a perfect{" "}
                <span className="font-bold" style={{color: "var(--text-color4)"}}>
                  blend of passion and professionalism
                </span>
                , crafting services that elevate your brand while making the
                process enjoyable and seamless.
              </div>
            </ScrollAnimateText>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-14 gap-6">
          <div className="hidden lg:block lg:col-span-4 relative h-[420px] w-[280px]">
            {serviceImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index}`}
                className={`w-full h-full object-cover service__img ${
                  activeImage === index ? "active" : ""
                }`}
              />
            ))}
          </div>

          <div className="col-span-12 lg:col-span-8 font-kanit">
            {serviceRows.map((item, index, arr) => {
              const isHovered = hoveredIndex === index;
              const baseColor = "text-white";
              const hoverColor = "text-blue-800";

              return (
                <div
                  key={index}
                  onClick={() => router.push(`/services#${item.targetId}`)}
                  className={`py-6 border-t border-gray-700 ${
                    index === arr.length - 1 ? "border-b border-gray-700" : ""
                  }`}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setActiveImage(index);
                  }}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-6 w-full ipad-stack">
                    <div
                      className={`font-bold text-xl lg:text-2xl cursor-pointer ${
                        isHovered ? hoverColor : baseColor
                      } lg:w-[40px] shrink-0`}
                    >
                      {item.number}
                    </div>

                    <FadeRightOnScroll>
                      <div
                        className={`font-semibold text-lg lg:text-xl cursor-pointer ${
                          isHovered ? hoverColor : baseColor
                        } lg:w-[280px] shrink-0 ipad-title`}
                      >
                        {item.title}
                      </div>
                    </FadeRightOnScroll>

                    <FadeRightOnScroll>
                      <div className="text-sm lg:text-base   lg:w-[calc(100%-40px)] lg:pr-4 lg:overflow-hidden ipad-description">
                        {item.description}
                      </div>
                    </FadeRightOnScroll>

                    <div
                      className={`hidden lg:flex items-center justify-end text-2xl cursor-pointer ${
                        isHovered ? hoverColor : baseColor
                      } lg:w-[40px] shrink-0 ipad-arrow`}
                      style={{ rotate: "-45deg" }}
                    >
                      ➤
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
