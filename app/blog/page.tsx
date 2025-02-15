"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

interface Blog {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
}

export default function Page() {
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
  const offset = 0;
  const filteredBlog = blog.slice(offset, limit);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center gap-8 p-6 pt-24 lg:pt-36">
      <motion.h1
        className="self-start"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Blog
      </motion.h1>
      <motion.ul
        className="w-full"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredBlog.map((item, i) => (
          <motion.li
            key={i}
            variants={itemVariants} // Apply item variants
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
          </motion.li>
        ))}
        {blog.length === 0 && (
          <motion.li
            variants={itemVariants}
            className="flex items-center border-b border-b-zinc-900"
          >
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
          </motion.li>
        )}
      </motion.ul>
    </div>
  );
}
