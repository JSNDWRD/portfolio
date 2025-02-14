"use client";
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
}

export default function page({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Blog>({
    id: 0,
    createdAt: "",
    updatedAt: "",
    title: "",
    content: "",
  });
  useEffect(() => {
    const fetchPost = async () => {
      const { id } = await params;
      const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/${id}`);
      const data: Blog = await res.json();
      setPost(data);
    };
    fetchPost();
  }, []);

  try {
    return <div className="min-h-[100dvh]">{post.title}</div>;
  } catch {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center gap-4 max-md:flex-col">
        <h1>Article Not Found</h1>
      </div>
    );
  }
}
