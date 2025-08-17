"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogPage1Content from "@/data/blog/BlogPage1";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogPage1 = () => {
  const { title, subtitle, date, intro, sections } = BlogPage1Content;

  return (
    <div className=" min-h-screen" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-20 space-y-10 lg:pt-30">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug">{title}</h1>
          <h2 className="text-2xl text-blue-400 font-medium">{subtitle}</h2>
          <p className="text-sm text-gray-400">{date}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-8"
        >
          <p className="text-lg leading-8 " style={{color: "var(--text-color)"}}>{intro}</p>

          {sections.map((section, index) => (
            <section key={index}>
              <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                {section.heading}
              </h3>
              <p className="leading-7"style={{color: "var(--text-color)"}}>{section.text}</p>
            </section>
          ))}
        </motion.div>

        <div className="pt-10">
          <Link href="/blog" className="text-blue-400 underline text-sm">
            ← Back to all blogs
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogPage1;
