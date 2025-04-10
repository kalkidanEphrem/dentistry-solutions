"use client";

import React from "react";
import { useParams } from "next/navigation";
import { blogs } from "../../data";
import InfiniteBlogCards from "@/app/_components/blog/InfiniteBlogCards";
import QuoteBox from "@/app/_components/blog/QuoteBox";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const { id } = useParams();
  const blogId = parseInt(id as string, 10);

  const blog = blogs.find((b) => b.id === blogId);
  const quote = blog?.quote;

  return (
    <div>
      <main>{children}</main>

      {/* Only shows if quote exists */}
      <QuoteBox quote={quote} />

      <section className="mt-12 text-center">
        <hr className="w-[1395px] h-[4px] bg-[#EFBF04] mx-auto" />
        <h1 className="text-[48px] font-futura font-bold mt-8">
          Check Out Our Top Blogs
        </h1>
        <h3 className="text-[32px] font-inter font-medium mt-4 text-gray-500">
          Here are our top blogs
        </h3>
      </section>

      <InfiniteBlogCards />
    </div>
  );
};

export default BlogLayout;
