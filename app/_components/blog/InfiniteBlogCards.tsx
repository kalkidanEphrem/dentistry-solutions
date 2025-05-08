"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { blogs } from "../../data";

const CARD_WIDTH = 400;
const CARD_HEIGHT = 360;

const InfiniteBlogCards: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () =>
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });

  return (
    <div className="relative overflow-hidden w-full py-10 bg-white">
      <div className="mx-auto max-w-[1280px] overflow-hidden">
        <motion.div
          className="flex w-max gap-10"
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...blogs, ...blogs].map((blog, index) => (
            <Link key={`${blog.id}-${index}`} href={`/blog/${blog.id}`}>
              <div
                className="w-[400px] h-[360px] bg-white border rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all flex flex-col"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
              >
                {/* Image */}
                <div className="w-full h-[160px] overflow-hidden rounded-lg">
                  <img
                    src={blog.images?.[0] || "/images/cardImage/CardImage1.png"}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <div className="mt-3 text-sm font-semibold text-[#4B6BFB] bg-[#4B6BFB0D] w-fit px-3 py-1 rounded">
                  {blog.title}
                </div>

                {/* Description */}
                <div className="text-sm text-[#181A2A] font-medium mt-2 line-clamp-2 leading-snug">
                  {blog.description}
                </div>

                {/* Author & Date aligned bottom */}
                <div className="flex items-center gap-3 mt-auto pt-4">
                  <img
                    src={blog.images?.[1] || "/images/cardImage/CardImage1.png"}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600 truncate">
                      {blog.author}
                    </span>
                    <span className="text-xs text-gray-400 truncate">
                      {blog.published_date}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteBlogCards;
