import { Schema, model, models } from "mongoose";

export interface ReservationDocument {
  name: string;
  phone: string;
  date: Date;
  time: string;
  guests: number;
  notes?: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}

const ReservationSchema = new Schema<ReservationDocument>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true, min: 1 },
    notes: { type: String },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Reservation =
  models.Reservation ||
  model<ReservationDocument>("Reservation", ReservationSchema);
