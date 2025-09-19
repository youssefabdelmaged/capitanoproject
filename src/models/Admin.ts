import { Schema, model, models } from "mongoose";

export interface AdminDocument {
  email: string;
  password: string; // hashed
}

const AdminSchema = new Schema<AdminDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const Admin = models.Admin || model<AdminDocument>("Admin", AdminSchema);
