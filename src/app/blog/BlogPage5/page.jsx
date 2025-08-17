"use client";

import React from "react";
import Link from "next/link";
import blogPage5 from "@/data/blog/BlogPage5";
import FadeUpOnScroll from "@/Components/FadeUpOnScroll";

const page = () => {
  return (
    <section className=" px-4 sm:px-10 md:px-20 py-20 min-h-screen" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
      <div className="max-w-4xl mx-auto space-y-6">
        <FadeUpOnScroll>
          <p className="text-sm text-gray-400">{blogPage5?.date || ""}</p>
        </FadeUpOnScroll>

        <FadeUpOnScroll>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {blogPage5?.title || ""}
          </h1>
        </FadeUpOnScroll>

        {Array.isArray(blogPage5?.sections) &&
          blogPage5.sections.map((section, idx) => (
            <FadeUpOnScroll key={idx}>
              <div className="space-y-3">
                {section.heading && (
                  <h2 className="text-xl font-semibold text-blue-400 mt-6">
                    {section.heading}
                  </h2>
                )}

                {typeof section.text === "string" &&
                  section.text.split("\n").map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}

                {typeof section.additionalText === "string" &&
                  section.additionalText.split("\n").map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
              </div>
            </FadeUpOnScroll>
          ))}


        <FadeUpOnScroll>
          <div className="pt-10">
            <Link href="/blog" className="text-blue-400 underline text-sm">
              ← Back to all blogs
            </Link>
          </div>
        </FadeUpOnScroll>
      </div>
    </section>
  );
};

export default page;
