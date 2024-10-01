"use client";
import * as React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const PAGE_COUNT = 5;

function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const clipPath = useTransform(
    scrollYProgress,
    (scrollYProgress) => `circle(${scrollYProgress * 100}%)`,
  );

  const yPercent = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["100%", "100%", "0%"],
  );

  return (
    <div className="h-full w-full bg-gray-900">
      <div className="h-full w-full ">
        <motion.div
          className="bg-orange-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full fixed"
          style={{
            clipPath,
          }}
        >
          <h1 className="leading-normal pl-[8vw] font-bold text-[8vw] gap-1">
            <span className="overflow-hidden block">
              <motion.span
                className={"overflow-hidden block"}
                style={{ y: yPercent }}
              >
                Aha!
              </motion.span>
            </span>
            <span className="overflow-hidden block text-[rgb(5, 74, 238)]">
              <motion.span className={"block"} style={{ y: yPercent }}>
                You found me!
              </motion.span>
            </span>
          </h1>
        </motion.div>
      </div>
      {Array.from({ length: PAGE_COUNT }, (_, i) => i).map((index) => (
        <div className="w-screen h-screen" key={index} />
      ))}
    </div>
  );
}

export default ScrollLinked;
