import { NextResponse } from "next/server";

/** Frontend liveness probe — mirrors the backend's /health contract. */
export async function GET() {
  return NextResponse.json({
    success: true,
    data: { status: "ok", timestamp: new Date().toISOString() },
  });
}
