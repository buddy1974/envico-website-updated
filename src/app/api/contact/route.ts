import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body as {
      name: string;
      email: string;
      phone?: string;
      subject: string;
      message: string;
    };

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Envico Website <noreply@envicosl.co.uk>",
      to: ["ops@envicosl.co.uk"],
      replyTo: email,
      subject: `[Website] ${subject} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? "not provided"}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
