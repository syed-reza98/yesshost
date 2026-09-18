import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { liveChatMessages } from "@/lib/db/schema";
import { eq, gt } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const chatId = request.nextUrl.searchParams.get("chatId");
  let lastMessageTime = new Date();

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      // 1. Send initial connected event
      controller.enqueue(
        encoder.encode(`event: connected\ndata: ${JSON.stringify({ status: "connected", time: new Date().toISOString() })}\n\n`)
      );

      // 2. Setup polling loop for new messages (100% self-contained SSE)
      const intervalId = setInterval(async () => {
        try {
          if (chatId) {
            const newMessages = await db.query.liveChatMessages.findMany({
              where: eq(liveChatMessages.chatId, chatId),
            });

            const recent = newMessages.filter((m) => new Date(m.createdAt) > lastMessageTime);
            if (recent.length > 0) {
              lastMessageTime = new Date(recent[recent.length - 1].createdAt);
              for (const msg of recent) {
                controller.enqueue(
                  encoder.encode(`event: message\ndata: ${JSON.stringify(msg)}\n\n`)
                );
              }
            }
          }

          // Heartbeat keep-alive every tick
          controller.enqueue(encoder.encode(`event: ping\ndata: "keep-alive"\n\n`));
        } catch (err) {
          // Stream error or client disconnect
          clearInterval(intervalId);
        }
      }, 3000);

      // Clean up on cancel
      request.signal.addEventListener("abort", () => {
        clearInterval(intervalId);
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no", // Disables Nginx/LiteSpeed proxy buffering
    },
  });
}
