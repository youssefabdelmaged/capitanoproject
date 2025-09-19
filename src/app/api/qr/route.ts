import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const target = `${appUrl}/menu`;
  const dataUrl = await QRCode.toDataURL(target, {
    margin: 1,
    width: 300,
    color: { dark: "#3c2a21", light: "#fff" },
  });
  const base64 = dataUrl.split(",")[1];
  const buffer = Buffer.from(base64, "base64");
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Content-Length": buffer.length.toString(),
      "Cache-Control": "public, max-age=3600",
    },
  });
}
