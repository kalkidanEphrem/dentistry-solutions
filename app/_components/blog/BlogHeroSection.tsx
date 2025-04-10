"use client";

import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const BlogHeroSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Technology",
      description:
        "The impact of Technology on the Workplace: How Technology is Changing the Way We Work.",
      author: "Kalkidan Ephrem",
      published_date: "August 20, 2022",
      imageUrl: "/images/cardImage/kal.png",
      authorImageUrl: "/images/cardImage/kal.png",
    },
    {
      id: 2,
      title: "Health & Wellness",
      description: "Exploring health trends, nutrition, and well-being tips.",
      author: "Jane Smith",
      published_date: "August 21, 2022",
      imageUrl: "/images/cardImage/kal.png",
      authorImageUrl: "",
    },
    {
      id: 3,
      title: "Travel",
      description: "Adventures and guides to explore new destinations.",
      author: "Emily Johnson",
      published_date: "August 22, 2022",
      imageUrl: "/images/cardImage/kal.png",
    },
    {
      id: 4,
      title: "Finance",
      description: "Understanding personal finance and investment strategies.",
      author: "Robert Brown",
      published_date: "August 23, 2022",
      imageUrl: "/images/cardImage/kal.png",
      authorImageUrl: "/images/cardImage/kal.png",
    },
    {
      id: 5,
      title: "Lifestyle",
      description: "Tips and trends for a balanced lifestyle.",
      author: "Sarah Davis",
      published_date: "August 24, 2022",
      imageUrl: "/images/cardImage/kal.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [blogs.length]);

  const currentBlog = blogs[currentIndex];

  return (
    <div className="w-full h-[575px] relative overflow-hidden bg-gray-900">
      <img
        src={currentBlog.imageUrl}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 m-8 text-white h-auto flex flex-col gap-3">
        {/* Title */}
        <div
          className="bg-[#4B6BFB] text-white text-md rounded-[6px] mb-2 flex items-center justify-center"
          style={{
            maxWidth: "120px",
            padding: "2px 8px",
            fontFamily: "Work Sans",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {currentBlog.title}
        </div>

        {/* Description */}
        <h1
          className="font-['Work_Sans'] font-semibold text-left mb-4"
          style={{
            width: "720px",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "40px",
          }}
        >
          {currentBlog.description}
        </h1>

        {/* Author Section */}
        <div
          className="flex items-center gap-4 mt-1"
          style={{ width: "328px", height: "36px" }}
        >
          {currentBlog.authorImageUrl &&
          currentBlog.authorImageUrl.trim() !== "" ? (
            <img
              src={currentBlog.authorImageUrl}
              alt="Author"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <FaUser style={{ color: "gray", fontSize: "24px" }} />
            </div>
          )}
          <div className="flex gap-8">
            <span
              className="font-['Work_Sans'] font-bold"
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 500,
              }}
            >
              {currentBlog.author}
            </span>
            <span
              className="text-white"
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 300,
              }}
            >
              {currentBlog.published_date}
            </span>
          </div>
        </div>
      </div>

      {/* Centered Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {blogs.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogHeroSection;
