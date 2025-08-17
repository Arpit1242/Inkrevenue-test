"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import blogPage3Data from "@/data/blog/BlogPage3";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const BlogPage3 = () => {
  const { date, title, paragraphs, sections, externalLink } = blogPage3Data;

  return (
    <section className="min-h-screen px-4 sm:px-8 py-24 overflow-hidden" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <p className="text-blue-400 font-semibold text-sm mb-1">{date}</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">{title}</h1>

        <div className="space-y-6  text-[15px] leading-relaxed" style={{color: "var(--text-color1)"}} >
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold mt-8 text-blue-500">{section.heading}</h2>
              {Array.isArray(section.content) ? (
                section.content.map((p, j) => <p key={j}>{p}</p>)
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          ))}

        
        </div>

        <div className="pt-10">
          <Link href="/blog" className="text-blue-400 underline text-sm">
            ← Back to all blogs
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogPage3;
