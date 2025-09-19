import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Admin } from "@/models/Admin";
import { connectToDatabase } from "@/lib/db";

const TOKEN_EXPIRY = "7d";

export async function hashPassword(plain: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

export async function comparePassword(
  plain: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

export function signJwt(payload: object): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not set");
  return jwt.sign(payload, secret, { expiresIn: TOKEN_EXPIRY });
}

export function verifyJwt<T = any>(token: string): T | null {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET is not set");
    return jwt.verify(token, secret) as T;
  } catch {
    return null;
  }
}

export async function ensureSeedAdmin(): Promise<void> {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) return; // silently skip if not provided
  await connectToDatabase();
  const existing = await Admin.findOne({ email });
  if (!existing) {
    const hashed = await hashPassword(password);
    await Admin.create({ email, password: hashed });
  }
}

export function getBearerToken(headers: Headers): string | null {
  const auth = headers.get("authorization") || headers.get("Authorization");
  if (!auth) return null;
  const [scheme, token] = auth.split(" ");
  if (scheme?.toLowerCase() !== "bearer" || !token) return null;
  return token;
}

export async function requireAdmin(
  headers: Headers
): Promise<{ email: string } | null> {
  const token = getBearerToken(headers);
  if (!token) return null;
  const decoded = verifyJwt<{ email: string }>(token);
  if (!decoded) return null;
  return { email: decoded.email };
}
