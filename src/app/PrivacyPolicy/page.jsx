"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import privacyPolicySections from "@/data/privacypolicy/privacyPolicyContent";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MotionBlock = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-10"
    >
      {children}
    </motion.div>
  );
};

const PrivacyPolicy = () => {
  return (
    <section className=" px-4 sm:px-10 md:px-20 py-20 max-w-6xl mx-auto mt-10" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center text-blue-500"
      >
        Privacy Policy
      </motion.h1>

      {privacyPolicySections.map((section, index) => (
        <MotionBlock key={index}>
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-500">
            {section.heading}
          </h2>
          <p className="whitespace-pre-wrap">{section.content}</p>
        </MotionBlock>
      ))}
    </section>
  );
};

export default PrivacyPolicy;
