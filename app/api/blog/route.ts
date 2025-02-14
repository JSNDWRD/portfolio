import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/prisma";

// GET Blog Data
export async function GET() {
  const blogData = await prisma.post.findMany({});
  return NextResponse.json(blogData);
}

// Post Blog Data
export async function POST(req: NextRequest) {
  const body = await req.json();
  const blogData = await prisma.post.create({
    data: body,
  });
  return NextResponse.json(blogData);
}

// Delete Blog Data
export async function DELETE() {
  const deletePosts = await prisma.post.deleteMany({});
  return NextResponse.json(deletePosts);
}
