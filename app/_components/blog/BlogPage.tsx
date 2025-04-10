// BlogPage.tsx
"use client";
import React, { useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import { blogs } from "../../data"; // Import blogs data

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  published_date: string;
}

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // Number of blogs per page
  const totalPages = Math.ceil(blogs.length / pageSize);

  // Get the blogs for the current page
  const currentBlogs = blogs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="p-8 flex flex-col gap-11">
      <div className="mt-24">
        <BlogCards blogs={currentBlogs} />
      </div>
      <div className="my-6"> {/* Margin added for spacing */}
        <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};

export default BlogPage;
