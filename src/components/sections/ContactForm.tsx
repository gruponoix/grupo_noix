"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-noix-blue/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-noix-blue/30";

const labelClass = "mb-1 block text-xs font-medium text-white/70";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Pre-fill the message when a plan card / budget CTA is clicked.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const text = (e as CustomEvent<string>).detail;
      if (text) setMessage(text);
      // focus after the smooth scroll settles
      window.setTimeout(() => messageRef.current?.focus(), 700);
    };
    window.addEventListener("noix:prefill", onPrefill as EventListener);
    return () =>
      window.removeEventListener("noix:prefill", onPrefill as EventListener);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      business: String(data.get("business") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error || "No se pudo enviar el mensaje.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      setMessage("");
    } catch {
      setError("No hay conexión con el servidor. Inténtalo de nuevo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-strong flex flex-col items-center rounded-2xl p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-noix-blue/15 text-noix-blue">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-white">¡Mensaje enviado!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Gracias por escribirnos. Te responderemos lo antes posible, normalmente
          en menos de 24&nbsp;horas.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-noix-blue-soft transition-colors hover:text-white"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-strong rounded-2xl p-5 text-left sm:p-6"
      noValidate
    >
      {/* Honeypot (hidden from users, catches bots) */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label>
          No rellenar
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Nombre *
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email *
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-3">
        <label htmlFor="cf-business" className={labelClass}>
          Tu negocio <span className="text-muted-foreground/60">(opcional)</span>
        </label>
        <input
          id="cf-business"
          name="business"
          type="text"
          placeholder="Nombre y tipo de negocio"
          className={inputClass}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="cf-message" className={labelClass}>
          Mensaje *
        </label>
        <textarea
          id="cf-message"
          name="message"
          ref={messageRef}
          required
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Cuéntanos qué necesitas y cómo es tu negocio…"
          className={cn(inputClass, "resize-y")}
        />
      </div>

      {status === "error" && (
        <p className="mt-3 flex items-start gap-2 text-sm text-red-400">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-noix-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-[#4a9bff] hover:shadow-glow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-noix-night disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Enviar mensaje
          </>
        )}
      </button>

      <p className="mt-2.5 text-center text-xs text-muted-foreground/70">
        Al enviar aceptas que te contactemos sobre tu consulta.
      </p>
    </form>
  );
}
