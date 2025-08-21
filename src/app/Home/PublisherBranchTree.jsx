"use client";

import FadeUpOnScroll from "@/Components/FadeUpOnScroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import publisherCards from "@/data/home/publishersCard";

export default function PublisherBranchTree() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <>
      {/* Desktop View */}
      <div
        className="hidden lg:flex justify-center items-center w-full h-screen  px-4 relative pr-35 lg:ml-34"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <div ref={ref} className="relative flex items-center">
          <motion.div
            className="relative flex items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div
              className="h-1 bg-blue-500 relative"
              style={{ width: "762px" }}
            />

            <div className="absolute right-0 top-1/2 flex flex-col justify-center items-end mr-10">
              {/* Top Cards */}
              <FadeUpOnScroll>
                <div className="flex justify-end absolute top-[-250px] right-0 space-x-10">
                  {publisherCards.slice(0, 3).map((card, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        delay: inView ? 0.5 + index * 0.3 : 0,
                        duration: 0.5,
                      }}
                    >
                      <div
                        className=" border border-blue-500 shadow-md p-4 rounded-lg text-center w-64 h-58"
                        style={{
                          backgroundColor: "var(--bg-main)",
                        }}
                      >
                        <h3 className="font-semibold text-xl text-blue-400">
                          {card.title}
                        </h3>
                        <p className="text-md  mt-1">{card.text}</p>
                      </div>
                      <div className="w-1 h-5 bg-blue-500" />
                    </motion.div>
                  ))}
                </div>
              </FadeUpOnScroll>

              {/* Bottom Cards */}
              <FadeUpOnScroll>
                <div className="flex justify-end absolute top-[100px] lg:top-0 right-0 space-x-10">
                  {publisherCards.slice(3).map((card, index) => (
                    <motion.div
                      key={index + 3}
                      className="flex flex-col items-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{
                        delay: inView ? 1.4 + index * 0.3 : 0,
                        duration: 0.5,
                      }}
                    >
                      <div className="w-1 h-5 bg-blue-500" />
                      <div
                        className="border border-blue-500 shadow-md p-4 rounded-lg text-center w-64 h-54"
                        style={{
                          backgroundColor: "var(--bg-main)",
                        }}
                      >
                        <h3 className="font-semibold text-xl text-blue-400">
                          {card.title}
                        </h3>
                        <p className="text-md    mt-1">{card.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeUpOnScroll>
            </div>
          </motion.div>

          {/* Publisher Box */}
          <motion.div
            className="shadow-xl p-6 rounded-xl text-center border-2 border-blue-400 w-72 h-80 content-center cursor-pointer z-10 ml-0"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              backgroundColor: "var(--bg-main)",
            }}
          >
            <h2 className="text-4xl font-bold text-blue-600">Publishers</h2>
            <p className="text-md text-xl  mt-2">
              Join InkRevenue Publisher Network and maximise your revenue from
              your visitors.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mobile + Tablet View */}
      <div className="lg:hidden w-full bg-black py-12 px-4 flex flex-col items-center gap-6" style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}>
        <div className="bg-[#171717] shadow-xl p-6 rounded-xl text-center border-2 border-blue-400 w-[90%]">
          <h2 className="text-3xl font-bold text-blue-600">Publishers</h2>
          <p className="text-md text-white mt-2">
            Join InkRevenue Publisher Network and maximise your revenue from
            your visitors.
          </p>
        </div>

        <div className="w-1 h-8 bg-blue-500" />

        {publisherCards.map((card, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="bg-[#171717] border border-gray-300 shadow-md p-4 rounded-lg text-center w-[90%]">
              <h3 className="font-semibold text-xl text-blue-400">
                {card.title}
              </h3>
              <p className="text-md text-white mt-1">{card.text}</p>
            </div>
            {index < publisherCards.length - 1 && (
              <div className="w-1 h-5 bg-blue-500" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
