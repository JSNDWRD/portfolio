import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_URL || "", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: body.email,
      subject: body.subject,
      message: body.message,
    }),
  });

  const data = await res.json();

  const response = NextResponse.json(data, { status: res.status });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "POST");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}
