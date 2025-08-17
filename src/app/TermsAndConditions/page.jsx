"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import termsSections from "@/data/termsConditions/termsData";

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
      className="mb-6"
    >
      {children}
    </motion.div>
  );
};

const TermsAndConditions = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-10 md:px-20 py-20 max-w-6xl mx-auto mt-10" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center text-blue-500"
      >
        Terms & Conditions
      </motion.h1>

      <MotionBlock>
        <p>
          This agreement is between you, the Advertiser (“Advertiser”), and Wolf Masters Private Limited referred as (InkRevenue), a company registered and incorporated under the provisions of the Companies Act 2013 in India having its registered office at 98B, Udyog Vihar, Phase 5, Gurugram Haryana 122016, India (“InkRevenue”, “Partner Network”).
        </p>
      </MotionBlock>

      {termsSections.map(({ title, content }, index) => (
        <MotionBlock key={index}>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            <span className="text-blue-500">{title.split(".")[0]}.</span>{" "}
            {title.split(".")[1].trim()}
          </h2>
          {content.length > 1 ? (
            <ul className="list-disc list-inside space-y-2">
              {content.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{content[0]}</p>
          )}
        </MotionBlock>
      ))}
    </section>
  );
};

export default TermsAndConditions;
