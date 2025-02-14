import { prisma } from "@/app/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json({ message: "404" });
  }
}
