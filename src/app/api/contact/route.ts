import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name:    z.string().min(1, "Name is required").max(100),
  email:   z.string().email("Invalid email address"),
  phone:   z.string().max(30).optional(),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from:    "Envico Website <noreply@envicosl.co.uk>",
      to:      ["ops@envicosl.co.uk"],
      replyTo: email,
      subject: `[Website] ${subject} — from ${name}`,
      text:    `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? "not provided"}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
