import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Menu } from "@/models/Menu";
import { ensureCloudinaryConfigured, cloudinary } from "@/lib/cloudinary";
import { requireAdmin } from "@/lib/auth";

type CloudinaryUploadResult = { secure_url: string };

export async function GET() {
  await connectToDatabase();
  const latest = await Menu.findOne().sort({ uploadedAt: -1 }).lean();
  return NextResponse.json({ pdfUrl: latest?.pdfUrl || null });
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin(req.headers);
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectToDatabase();
  ensureCloudinaryConfigured();

  const form = await req.formData();
  const file = form.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadRes: CloudinaryUploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { resource_type: "raw", folder: "menu_pdfs" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result as CloudinaryUploadResult);
        }
      )
      .end(buffer);
  });

  const doc = await Menu.create({ pdfUrl: uploadRes.secure_url });
  return NextResponse.json({ pdfUrl: doc.pdfUrl });
}
