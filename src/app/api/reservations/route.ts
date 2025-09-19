import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Reservation } from "@/models/Reservation";
import { sendReservationConfirmation } from "@/lib/email";
import { requireAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const body = await req.json();
  const { name, phone, date, time, guests, notes } = body || {};

  if (!name || !phone || !date || !time || !guests) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const reservation = await Reservation.create({
    name,
    phone,
    date: new Date(date),
    time,
    guests: Number(guests),
    notes,
  });

  try {
    await sendReservationConfirmation(
      phone.includes("@")
        ? phone
        : process.env.FALLBACK_CONFIRMATION_EMAIL || "",
      {
        name,
        date: new Date(date).toDateString(),
        time,
        guests: Number(guests),
      }
    );
  } catch (_e) {
    // ignore email errors in API response
  }

  return NextResponse.json({ reservation });
}

export async function GET(req: NextRequest) {
  const admin = await requireAdmin(req.headers);
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  const reservations = await Reservation.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ reservations });
}
