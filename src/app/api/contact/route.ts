import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmail } from "@/lib/contactEmail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "gruponoixx@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Grupo NOIX <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Petición inválida." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const business =
    typeof body.business === "string" ? body.business.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const honeypot = typeof body.website === "string" ? body.website.trim() : "";

  // Honeypot: a real user never fills this hidden field. Pretend success.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const missing: string[] = [];
  if (name.length < 2) missing.push("nombre");
  if (!EMAIL_RE.test(email)) missing.push("email");
  if (message.length < 5) missing.push("mensaje");
  if (missing.length) {
    return NextResponse.json(
      { error: `Revisa estos campos: ${missing.join(", ")}.` },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Surface a clear message during setup instead of failing silently.
    return NextResponse.json(
      {
        error:
          "El envío de correo aún no está configurado. Añade RESEND_API_KEY en .env.local.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { subject, html, text } = buildContactEmail({
    name,
    email,
    business,
    message,
  });

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el correo. Inténtalo de nuevo más tarde." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Error inesperado al enviar el mensaje." },
      { status: 500 },
    );
  }
}
