import React from "react";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  published_date: string;
  images: string[];
}

interface BlogCardsProps {
  blogs: Blog[];
}

const BlogCards: React.FC<BlogCardsProps> = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          <div className="w-[392px] h-[488px] border border-gray-200 rounded-lg p-4 flex flex-col gap-2 cursor-pointer hover:shadow-lg transition-shadow duration-200">
            <div className="w-[360px] h-[240px] overflow-hidden rounded-lg">
              <img
                src={blog.images[0]}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow justify-between gap-5 mt-4">
              <div className="max-w-[250px] h-auto bg-[#4B6BFB0D] text-[#4B6BFB] text-sm px-2 py-1 rounded-md truncate whitespace-nowrap text-ellipsis">
                {blog.title}
              </div>
              <h3 className="text-[#181A2A] font-semibold text-2xl leading-[28px]">
                {blog.description}
              </h3>
              <div className="flex items-center gap-5">
                <img
                  src={blog.images[0]}
                  alt="Author placeholder"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex items-center gap-8">
                  <span className="font-semibold text-gray-500">
                    {blog.author}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {blog.published_date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCards;
