import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("body:", body);

    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    console.error("Error in webhook:", error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
