import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Menu } from "@/models/Menu";

export async function GET(_req: NextRequest) {
  await connectToDatabase();
  const latest = await Menu.findOne().sort({ uploadedAt: -1 }).lean();
  if (!latest?.pdfUrl) {
    return NextResponse.json({ error: "No menu uploaded" }, { status: 404 });
  }

  try {
    const res = await fetch(latest.pdfUrl);
    if (!res.ok) throw new Error("Upstream fetch failed");
    const buf = Buffer.from(await res.arrayBuffer());
    return new NextResponse(buf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=menu.pdf",
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (_e) {
    return NextResponse.json({ error: "Failed to fetch PDF" }, { status: 502 });
  }
}
