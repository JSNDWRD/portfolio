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
  return NextResponse.json(blog);
}
