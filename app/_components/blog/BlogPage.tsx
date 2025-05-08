"use client";
import React, { useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import { blogs } from "../../data";

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  published_date: string;
}

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const totalPages = Math.ceil(blogs.length / pageSize);

  const currentBlogs = blogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-8 flex flex-col gap-11">
      <div className="mt-24">
        <BlogCards blogs={currentBlogs} />
      </div>
      <div className="my-6">
        <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};

export default BlogPage;
