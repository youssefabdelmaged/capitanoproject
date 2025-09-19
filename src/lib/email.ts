import nodemailer from "nodemailer";

export function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP env vars are not fully set");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendReservationConfirmation(
  to: string,
  details: {
    name: string;
    date: string;
    time: string;
    guests: number;
  }
): Promise<void> {
  const transporter = getTransport();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER!;
  await transporter.sendMail({
    from,
    to,
    subject: "Your reservation request",
    text: `Thanks ${details.name}! We received your reservation for ${details.guests} on ${details.date} at ${details.time}. We'll confirm shortly.`,
  });
}
