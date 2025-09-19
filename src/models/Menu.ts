import { Schema, model, models } from "mongoose";

export interface MenuDocument {
  pdfUrl: string;
  uploadedAt: Date;
}

const MenuSchema = new Schema<MenuDocument>({
  pdfUrl: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

export const Menu = models.Menu || model<MenuDocument>("Menu", MenuSchema);
