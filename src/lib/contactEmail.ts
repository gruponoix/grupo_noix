export interface ContactPayload {
  name: string;
  email: string;
  business?: string;
  message: string;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Builds the branded notification email sent to Grupo NOIX. */
export function buildContactEmail(p: ContactPayload) {
  const name = esc(p.name);
  const email = esc(p.email);
  const business = p.business ? esc(p.business) : "";
  const messageHtml = esc(p.message).replace(/\n/g, "<br />");

  const date = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Madrid",
  }).format(new Date());

  const subject = `Nuevo contacto web — ${p.name}`;

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:11px 0;border-bottom:1px solid #1a2845;font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:#6f86ad;width:96px;vertical-align:top;font-family:Helvetica,Arial,sans-serif;">${label}</td>
      <td style="padding:11px 0;border-bottom:1px solid #1a2845;font-size:15px;color:#ffffff;font-family:Helvetica,Arial,sans-serif;">${value}</td>
    </tr>`;

  const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><title>${subject}</title></head>
<body style="margin:0;padding:0;background:#0a0f1c;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1c;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#0f1830;border:1px solid #1e2d4d;border-radius:16px;overflow:hidden;">
        <tr><td style="padding:28px 32px;background:linear-gradient(135deg,#13203a,#0a0f1c);border-bottom:1px solid #1e2d4d;">
          <div style="font-size:26px;font-weight:800;letter-spacing:-1px;color:#ffffff;font-family:Helvetica,Arial,sans-serif;">NO<span style="color:#2f8bff;">I</span>X</div>
          <div style="margin-top:6px;font-size:12px;color:#8aa0c6;font-family:Helvetica,Arial,sans-serif;">Nuevo mensaje desde la web</div>
        </td></tr>
        <tr><td style="padding:28px 32px 6px;">
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#c8d6ef;font-family:Helvetica,Arial,sans-serif;">Has recibido una nueva solicitud de contacto a través de <strong style="color:#ffffff;">gruponoix.com</strong>:</p>
        </td></tr>
        <tr><td style="padding:0 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Nombre", name)}
            ${row("Email", `<a href="mailto:${email}" style="color:#7cc0ff;text-decoration:none;">${email}</a>`)}
            ${business ? row("Negocio", business) : ""}
          </table>
        </td></tr>
        <tr><td style="padding:22px 32px 6px;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:1.2px;color:#6f86ad;margin-bottom:9px;font-family:Helvetica,Arial,sans-serif;">Mensaje</div>
          <div style="background:#0a1322;border:1px solid #1e2d4d;border-radius:12px;padding:16px 18px;font-size:15px;line-height:1.65;color:#dfe8f7;font-family:Helvetica,Arial,sans-serif;">${messageHtml}</div>
        </td></tr>
        <tr><td style="padding:22px 32px 30px;">
          <a href="mailto:${email}" style="display:inline-block;background:#2f8bff;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:13px 24px;border-radius:10px;font-family:Helvetica,Arial,sans-serif;">Responder a ${name}</a>
        </td></tr>
        <tr><td style="padding:18px 32px;background:#0a0f1c;border-top:1px solid #1e2d4d;">
          <p style="margin:0;font-size:11px;line-height:1.6;color:#5d7298;font-family:Helvetica,Arial,sans-serif;">Enviado el ${date} · Grupo NOIX — No es una web bonita. Es una web que vende.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const text = [
    "Nuevo contacto desde gruponoix.com",
    "",
    `Nombre: ${p.name}`,
    `Email: ${p.email}`,
    p.business ? `Negocio: ${p.business}` : null,
    "",
    "Mensaje:",
    p.message,
    "",
    date,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return { subject, html, text };
}
