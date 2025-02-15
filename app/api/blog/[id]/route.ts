import { prisma } from "@/app/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const blog = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  const author = await prisma.user.findUnique({
    where: {
      id: blog?.authorId,
    },
    select: {
      email: true,
      name: true,
      posts: true,
    },
  });
  const blogData = { ...blog, ...author };
  return NextResponse.json(blogData);
}
