"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Relation {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
}

interface Blog {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
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
    content: "",
    email: "",
    name: "",
    posts: [],
  });
  const [content, setContent] = useState<string[]>([]);
  useEffect(() => {
    const fetchPost = async () => {
      const { id } = await params;
      const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/${id}`);
      const data: Blog = await res.json();
      setPost(data);
      const text = data.content.toString().split(String.raw`\n`);
      setContent(text);
      setLoading(false);
    };
    fetchPost();
  }, []);
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
          <div className="flex max-w-screen-lg flex-col gap-4">
            {content.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
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
                    {e.content.toString()}
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
