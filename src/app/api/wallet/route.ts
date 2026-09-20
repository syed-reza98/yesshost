import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { walletTransactions } from "@/lib/db/schema";
import { eq, desc, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const [txns, balanceRow] = await Promise.all([
      db.query.walletTransactions.findMany({
        where: eq(walletTransactions.userId, userId),
        orderBy: [desc(walletTransactions.createdAt)],
      }),
      db
        .select({
          credits: sql<number>`COALESCE(SUM(CASE WHEN type IN ('deposit', 'refund') THEN amount_bdt ELSE 0 END), 0)`,
          debits: sql<number>`COALESCE(SUM(CASE WHEN type IN ('payment', 'withdrawal') THEN amount_bdt ELSE 0 END), 0)`,
        })
        .from(walletTransactions)
        .where(eq(walletTransactions.userId, userId)),
    ]);

    const balance = Number(balanceRow[0]?.credits || 0) - Number(balanceRow[0]?.debits || 0);

    return NextResponse.json({
      balance: Math.max(0, balance),
      transactions: txns,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { amount, method, trxId } = body;
    const numAmount = Number(amount);

    if (!numAmount || numAmount <= 0) {
      return NextResponse.json({ error: "Invalid deposit amount" }, { status: 400 });
    }

    const newTxnId = crypto.randomUUID();
    await db.insert(walletTransactions).values({
      id: newTxnId,
      userId: session.user.id,
      type: "deposit",
      amountBdt: numAmount.toFixed(2),
      description: `Wallet top-up via ${method || "bKash"} (TrxID: ${trxId || "TRX-" + Date.now().toString().slice(-6)})`,
      status: "completed",
    });

    return NextResponse.json({ success: true, transactionId: newTxnId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
