export type ContactMessage = {
  name: string;
  email: string;
  company: string;
  reason: string;
  message: string;
};

export type ContactResult = "sent" | "offline";

/** Conectar aquí el servicio elegido (Formspree, Resend, una ruta propia…). */
export async function sendContact(message: ContactMessage): Promise<ContactResult> {
  void message;
  return "offline";
}
