"use client";
import { useParams } from "next/navigation";
import React from "react";
import { blogs } from "../../data";

const BlogDetails: React.FC = () => {
  const params = useParams();
  const id = Number(params.id);
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      {/* Section for displaying blog content */}
      <section className="mt-8">
        {blog.paragraphs.map((paragraph, index) => (
          <div key={index} className="flex justify-center mb-8">
            {blog.images[index] && (
              <div
                className={`flex gap-10 items-center ${
                  index === 1 ? "flex-row-reverse" : "flex-row"
                } space-x-6 border-solid`}
              >
                <p
                  className={`text-justify mx-8 ${
                    index < 2
                      ? "font-inter text-[18px] leading-[26px] font-medium text-[#3B3C4A]"
                      : "font-source-serif text-[20px] leading-[32px] font-normal text-[#3B3C4A]"
                  }`}
                  style={{
                    width: index < 2 ? "868px" : "1395px",
                    textAlign: "justify",
                  }}
                >
                  {paragraph}
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={blog.images[index]}
                    alt={`Blog Image ${index + 1}`}
                    className="object-cover rounded-[20px]"
                    style={{
                      width: index % 2 === 0 ? "405px" : "402px",
                      height: index % 2 === 0 ? "316px" : "633px",
                    }}
                  />
                  {index === 1 && (
                    <p
                      className="mt-4 mx-4"
                      style={{
                        fontFamily: "Futura",
                        fontWeight: 500,
                        fontSize: "32px",
                        lineHeight: "42.5px",
                        color: "#767676",
                        textAlign: "center",
                      }}
                    >
                      {blog.description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Static content section */}
      <section className="text-justify mt-8">
        {blog.paragraphs.slice(2).map((paragraph, index) => (
          <p
            key={index}
            className="font-source-serif text-[20px] leading-[32px] text-[#3B3C4A] mx-auto mt-4"
            style={{
              width: "1395px",
              fontWeight: 400,
              paddingLeft: "81px",
              paddingRight: "81px",
              textAlign: "justify",
            }}
          >
            {paragraph}
          </p>
        ))}
      </section>
    </>
  );
};

export default BlogDetails;
