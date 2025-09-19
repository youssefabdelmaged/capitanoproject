import { Schema, model, models, Document } from "mongoose";

export interface MenuDocument extends Document{
  pdfUrl: string;
  uploadedAt: Date;
}

const MenuSchema = new Schema<MenuDocument>({
  pdfUrl: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

export const Menu = models.Menu || model<MenuDocument>("Menu", MenuSchema);
