"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

async function copyText(text: string): Promise<boolean> {
  // Modern API (secure contexts)
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy method */
  }
  // Legacy fallback (works without secure context / when API is blocked)
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/**
 * Email link that copies the address to the clipboard on click and shows
 * quick "¡Copiado!" feedback — reliable even for visitors without a default
 * mail client (webmail users). The mailto href stays for right-click / a11y.
 */
export default function EmailButton({
  email,
  subject,
  label,
  className,
}: {
  email: string;
  subject?: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const ok = await copyText(email);
    setCopied(ok);
    if (ok) window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      aria-label={`Copiar correo ${email}`}
      title="Clic para copiar el correo"
    >
      {copied ? (
        <Check className="h-4 w-4 shrink-0 text-green-400" />
      ) : (
        <Mail className="h-4 w-4 shrink-0" />
      )}
      <span>{copied ? "¡Copiado al portapapeles!" : (label ?? email)}</span>
    </a>
  );
}
