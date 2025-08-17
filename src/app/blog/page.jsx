"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const blogs = [
  {
    title: "InkRevenue Fostering Enhanced Productivity via...",
    date: "May 29, 2024 - Team Ink Revenue",
    content: "Effective management plays a crucial role....",
    image: "/img/blogs-1.jpg",
    path: "/blog/BlogPage1",
  },
  {
    title: "From data analytics to personalisation...",
    date: "May 29, 2024 - Team Ink Revenue",
    content: "Marketing is undergoing its next level....",
    image: "/img/blogs-2.jpg",
    path: "/blog/BlogPage2",
  },
  {
    title: "From Flexible Hours To ESOP, InkRevenue Innovates...",
    date: "May 29, 2024 - Team Ink Revenue",
    content: "InkRevenue promotes a hybrid model....",
    image: "/img/blogs-0-03.jpg",
    path: "/blog/BlogPage3",
  },
  {
    title: "Advertising with AI, changing digital...",
    date: "May 29, 2024 - Team Ink Revenue",
    content: "AI-Driven Programmatic Advertising Revolutionizes....",
    image: "/img/blogs-4.jpg",
    path: "/blog/BlogPage4",
  },
  {
    title: "Achieving Balance: Nurturing Well-being...",
    date: "May 29, 2024 - Team Ink Revenue",
    content: "In today's fast-paced work environment, striking a balance....",
    image: "/img/blogs-5.jpg",
    path: "/blog/BlogPage5",
  },
  {
    title: "From dorm room discussions to startup stardom...",
    date: "May 29, 2024 - Team Ink Revenue",
    content: "The digital marketing and advertising firm known as InkRevenue....",
    image: "/img/blogs-6.jpeg",
    path: "/blog/BlogPage6",
  },
];

const BlogSection = () => {
  const { ref: footerRef } = useInView({ threshold: 0.1 });

  return (
    <>
      <div className="relative w-full min-h-[100vh]  overflow-x-hidden lg:mt-15" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
        {/* 🔹 Mobile & Tablet View */}
        <div className="block md:hidden px-4 py-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-lg text-gray-400 tracking-widest">OUR BLOGS</h2>
            <h1 className="text-3xl font-extrabold mb-2">
              Inside <span className="text-blue-500">Ink</span>Revenue
            </h1>
            <p className="text-gray-400 text-sm">
              Insights, innovations, and inspiring stories from our team to help you stay ahead in the digital landscape.
            </p>
          </div>

          <div className="space-y-8">
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-[#1b1b1b] p-5 rounded-xl shadow-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-1">{blog.title}</h3>
                <p className="text-xs text-gray-400 mb-2">{blog.date}</p>
                <p className="text-gray-300 mb-3">{blog.content}</p>
                <Link href={blog.path} className="text-blue-400 underline text-sm">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Desktop View: 6 Animated Cards */}
        <div className="hidden md:block px-16 py-20" style={{
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)"
  }}>
          <div className="text-center mb-16">
            <h2 className="text-lg text-gray-400 tracking-widest">OUR BLOGS</h2>
            <h1 className="text-5xl font-extrabold mb-4">
              Inside <span className="text-blue-500">Ink</span>Revenue
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Insights, innovations, and inspiring stories from our team to help you stay ahead in the digital landscape.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="grid grid-cols-3 gap-8"
            
          >
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className=" p-6 rounded-xl shadow-lg border border-blue-500"
                style={{
               backgroundColor: "var(--bg-main4)",
               color: "var(--text-color)",}}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-blue-500" >{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <p className=" mb-4">{blog.content}</p>
                <Link
                  href={blog.path}
                  className="text-blue-400 underline text-sm"
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div ref={footerRef} className="h-1" />
    </>
  );
};

export default BlogSection;
