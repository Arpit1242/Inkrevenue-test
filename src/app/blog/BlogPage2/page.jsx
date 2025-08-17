"use client";

import React from "react";
import FadeUpOnScroll from "@/Components/FadeUpOnScroll";
import Link from "next/link";

import blogData from "@/data/blog/BlogPage2";

const BlogPage2 = () => {
  return (
    <div className="relative overflow-hidden" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
      <div className="absolute top-0 left-0 w-full h-[180vh] pointer-events-none -z-10">
        <div className="animate-gradient-animation w-full h-full rounded-full blur-[180px] opacity-30"></div>
      </div>

      <section className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <FadeUpOnScroll>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            {blogData.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4">
            {blogData.subtitle}
          </h2>
          <p className="text-sm text-gray-400 mb-10">{blogData.date}</p>
        </FadeUpOnScroll>

        {blogData.sections.map((section, index) => (
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

export default BlogPage2;
