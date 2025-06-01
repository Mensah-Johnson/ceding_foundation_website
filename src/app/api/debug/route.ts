import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    uploadthingToken: process.env.UPLOADTHING_TOKEN ? "SET" : "NOT SET",
    uploadthingSecret: process.env.UPLOADTHING_SECRET ? "SET" : "NOT SET",
    convexUrl: process.env.NEXT_PUBLIC_CONVEX_URL ? "SET" : "NOT SET",
    nodeEnv: process.env.NODE_ENV,
    // Show partial token for verification (first 20 chars)
    tokenPreview: process.env.UPLOADTHING_TOKEN
      ? process.env.UPLOADTHING_TOKEN.substring(0, 20) + "..."
      : "N/A",
  });
}
