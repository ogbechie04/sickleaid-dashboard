// app/api/webhook/route.ts
import { NextResponse } from "next/server";

let clients: any[] = []; // connected frontend clients

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Webhook received:", body);

    // 1. Forward to Node.js backend for DB storage
    fetch("https://sickle-aid-backend.onrender.com/store-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch(err => console.error("Forwarding error:", err));

    // 2. Notify all connected SSE clients
    clients.forEach((res) => res.write(`data: ${JSON.stringify(body)}\n\n`));

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Webhook relay error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// SSE endpoint
export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      const send = (msg: string) => controller.enqueue(encoder.encode(`data: ${msg}\n\n`));

      // Store connection
      clients.push({ write: send });

      // Send a ping every 15s to keep the connection alive
      const interval = setInterval(() => send("ping"), 15000);

      controller.close = () => {
        clearInterval(interval);
        clients = clients.filter((c) => c.write !== send);
      };
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
