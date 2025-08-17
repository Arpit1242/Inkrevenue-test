"use client";

import React from "react";
import { motion } from "framer-motion";
import FadeUpOnScroll from "@/Components/FadeUpOnScroll";
import Link from "next/link";
import BlogPage4Data from "@/data/blog/BlogPage4";


const page = () => {
  return (
    <div className="relative overflow-hidden" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
      <div className="absolute top-0 left-0 w-full h-[180vh] pointer-events-none -z-10">
        <div className="w-full h-full rounded-full blur-[180px] opacity-30"></div>
      </div>
      <section className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <FadeUpOnScroll>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            {BlogPage4Data.title}
          </h1>
          <p className="text-sm text-gray-400 mb-10">{BlogPage4Data.date}</p>
        </FadeUpOnScroll>
        {BlogPage4Data.sections.map((section, index) => (
          <FadeUpOnScroll key={index}>
            {section.type === "heading" && (
              <h3 className="text-2xl font-bold text-blue-300 mb-4">
                {section.content}
              </h3>
            )}
            {section.type === "paragraph" && (
              <p className="text-lg leading-8 mb-8">{section.content}</p>
            )}
            
          </FadeUpOnScroll>
        ))}

        <div className="pt-10">
          <Link href="/blog" className="text-blue-400 underline text-sm">
            ← Back to all blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
