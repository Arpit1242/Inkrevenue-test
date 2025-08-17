"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import blogData from "@/data/blog/BlogPage6";

const page = () => {
  return (
    <section className=" px-4 sm:px-10 md:px-20 py-20 min-h-screen" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-sm text-gray-400">
            {blogData.date} | {blogData.author}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {blogData.title}
          </h1>

          {blogData.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {blogData.sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-blue-400 mt-6">
                {sec.heading}
              </h2>
              <p>{sec.text}</p>
            </div>
          ))}

          <p>{blogData.outro}</p>

         

          <div className="pt-10">
            <Link href="/blog" className="text-blue-400 underline text-sm">
              ← Back to all blogs
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default page;
