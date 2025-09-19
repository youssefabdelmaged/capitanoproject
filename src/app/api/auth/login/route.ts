import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Admin } from "@/models/Admin";
import { comparePassword, signJwt, ensureSeedAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  await connectToDatabase();
  await ensureSeedAdmin();
  const { email, password } = await req.json();
  if (!email || !password)
    return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
  const admin = await Admin.findOne({ email });
  if (!admin)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const ok = await comparePassword(password, admin.password);
  if (!ok)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const token = signJwt({ email: admin.email });
  return NextResponse.json({ token });
}
