"use client";

import React from "react";
import ServiceBlock from "./ServiceBlock";
import services from "@/data/services/assistance"; // adjust the path if needed

const Assistance = () => {
  return (
    <section className="  py-20 px-4 sm:px-8 lg:px-16 space-y-28" style={{ backgroundColor: "var(--bg-main1)",  }}>
      {services.map((service, index) => (
        <ServiceBlock
          key={index}
          service={service}
          isReversed={index % 2 === 0}
          id={`service-${index}`}
        />
      ))}
    </section>
  );
};

export default Assistance;
