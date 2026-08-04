/** WhatsApp contact, in international format (no "+" and no spaces). */
export const WHATSAPP_NUMBER = "34660568060";

export const WHATSAPP_DISPLAY = "660 56 80 60";

/** Default message pre-filled for the visitor. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "¡Hola! Vengo de gruponoix.com. Tengo un negocio y me gustaría información sobre vuestros planes para tener una web que venda. ¿Me contáis?";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
