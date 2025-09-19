import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var mongooseConn: Promise<typeof mongoose> | undefined;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (global.mongooseConn) return global.mongooseConn;

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not set in environment variables");
  }

  global.mongooseConn = mongoose.connect(mongoUri, {
    dbName: process.env.MONGODB_DB || "capitano",
  });

  return global.mongooseConn;
}
