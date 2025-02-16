"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Content {
  type: string;
  data: string;
}

interface Relation {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: Content[];
}

interface Blog {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: Content[];
  email: string;
  name: string;
  posts: Relation[];
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<Blog>({
    id: 0,
    createdAt: "",
    updatedAt: "",
    title: "",
    content: [],
    email: "",
    name: "",
    posts: [],
  });
  useEffect(() => {
    const fetchPost = async () => {
      const { id } = await params;
      const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/${id}`);
      const data: Blog = await res.json();
      if (typeof data.content === "string") {
        try {
          data.content = JSON.parse(data.content); // Parse string into an array
        } catch (error) {
          console.error("Failed to parse content:", error);
        }
      }
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  if (!loading) {
    try {
      return (
        <div className="flex min-h-[100dvh] flex-col items-center gap-6 bg-light p-6 pt-28 text-dark">
          <div>
            <h1>{post.title}</h1>
            <div className="mt-6 text-center">
              <h2>{post.name}</h2>
              <p>{post.createdAt.toString().substring(0, 10)}</p>
            </div>
          </div>
          <div className="flex max-w-screen-lg flex-col gap-6">
            {post.content.map((item, i) => {
              if (item.type == "text") {
                return (
                  <p key={i} className="indent-6">
                    {item.data.toString()}
                  </p>
                );
              } else if (item.type == "image") {
                const imgUrl = item.data;
                return (
                  <div key={i} className="w-full max-w-screen-lg px-6">
                    <Image
                      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(900, 600))}`}
                      src={imgUrl}
                      alt=""
                      priority
                      layout="responsive"
                      className="object-cover object-center"
                      width={900}
                      height={600}
                    />
                  </div>
                );
              } else if (item.type == "heading") {
                return <h2 key={i}>{item.data}</h2>;
              } else {
                return (
                  <p
                    key={i}
                    className="text-center font-medium italic text-dark/60"
                  >
                    {item.data}
                  </p>
                );
              }
            })}
          </div>
          <div className="flex w-full max-w-screen-lg flex-col gap-6">
            <h2 className="text-4xl max-md:text-2xl">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {post.posts.slice(0, 3).map((e, i) => (
                <Link
                  href={`/blog/${e.id}`}
                  key={i}
                  className="rounded-md border p-6 shadow-sm"
                >
                  <h2 className="text-2xl max-md:text-lg">{e.title}</h2>
                  <p className="overflow-hidden text-ellipsis text-nowrap text-dark/70">
                    {e.content.find((e) => e.type == "text")?.data.toString()}
                  </p>
                  <p className="font-medium text-dark/70">
                    {e.createdAt.substring(0, 10)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    } catch {
      return (
        <div className="flex min-h-[100dvh] items-center justify-center gap-4 bg-light text-dark max-md:flex-col">
          <h1>Article Not Found</h1>
        </div>
      );
    }
  } else {
    return (
      <div className="flex h-[100dvh] items-center justify-center bg-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 animate-spin stroke-dark"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
    );
  }
}
