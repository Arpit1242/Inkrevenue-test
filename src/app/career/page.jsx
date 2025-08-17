"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { jobRoles , culture } from "@/data/career/jobRolesCulture";


export default function CareerPage() {
  return (
    <div className="min-h-screen  px-4 sm:px-10 md:px-20 py-20 lg:mt-10" style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}  >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 "
      >
        Work With Us
      </motion.h1>

      {/* Culture Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {culture.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 border border-blue-700 rounded-xl"
            style={{
               backgroundColor: "var(--bg-main4)",
               color: "var(--text-color)",}}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
            <p className="">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Job Roles Section */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 "
      >
        Open Roles
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobRoles.map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 border border-blue-700 rounded-xl"
             style={{
               backgroundColor: "var(--bg-main4)",
               color: "var(--text-color)",}}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{role.title}</h3>
            <ul className="list-disc list-inside space-y-2 ">
              {role.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-4 flex items-center space-x-2 text-sm text-blue-400">
              <FaEnvelope className="text-blue-400" />
              <a href={`mailto:${role.email}`} className="underline">
                {role.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
