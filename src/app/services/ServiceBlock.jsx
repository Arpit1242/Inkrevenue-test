"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Assistance from "./Assistance";
const ServiceBlock = ({ service, isReversed, id }) => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      id={id}
      style={{ scrollMarginTop: "120px" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid lg:grid-cols-2 gap-10 items-center"
    >
      {/* Image container with responsive height */}
      <div
        
        ref={imageRef}
        className={`relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-xl ${
          isReversed ? "lg:order-last" : ""
        }`}
      >
        <motion.img
          style={{ y: smoothY }}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text block */}
      <motion.div variants={fadeInUp} className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800">
          {service.title}
        </h2>
        {service.content.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-base leading-relaxed "
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServiceBlock;
