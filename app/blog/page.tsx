"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
}

export default function page() {
  const [blog, setBlog] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/`);
      const blogData: Blog[] = await res.json();
      setBlog(blogData);
    };
    fetchBlog();
  }, []);
  const limit = 10;
  const offset = 10;
  const filteredBlog = blog.filter(
    (e) => e.id > offset && e.id <= limit + offset,
  );
  return (
    <div className="flex min-h-[100dvh] flex-col items-center gap-8 p-6 pt-24 lg:pt-36">
      <h1 className="self-start">Blog</h1>
      <ul className="w-full">
        {filteredBlog.map((item, i) => {
          return (
            <li
              key={i}
              className="flex items-center border-b border-b-zinc-900"
            >
              <Link
                href={`blog/${item.id}`}
                className="group w-full p-1 transition-all hover:bg-zinc-900"
              >
                <div className="group flex items-center gap-2 text-xl font-medium group-hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                  {item.title}
                </div>
                <p className="overflow-hidden text-ellipsis text-nowrap text-light/70">
                  {item.content.toString()}
                </p>
                <p className="text-light">
                  {item.createdAt.toString().substring(0, 10)}
                </p>
              </Link>
            </li>
          );
        })}
        {blog.length == 0 ? (
          <li className="flex items-center border-b border-b-zinc-900">
            <Link
              href={`blog/`}
              className="group w-full p-1 transition-all hover:bg-zinc-900"
            >
              <div className="group flex items-center gap-2 text-xl font-medium group-hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                Blog empty
              </div>
              <p className="overflow-hidden text-ellipsis text-nowrap text-light/70"></p>
              <p className="text-light"></p>
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
