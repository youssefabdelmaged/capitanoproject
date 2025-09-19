import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Reservation } from "@/models/Reservation";
import { requireAdmin } from "@/lib/auth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string | string[] } }
) {
  const admin = await requireAdmin(req.headers);
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  const body = await req.json();
  const { status } = body || {};
  if (!status || !["pending", "accepted", "rejected"].includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const updated = await Reservation.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
  if (!updated)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ reservation: updated });
}
