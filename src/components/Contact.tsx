"use client";

import { useState, type FormEvent } from "react";
import { contactReasons, profile } from "@/data/content";
import { sendContact, type ContactResult } from "@/lib/contact";

type Status = "idle" | "sending" | ContactResult;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    const result = await sendContact({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      reason: String(data.get("reason") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    if (result === "sent") form.reset();
    setStatus(result);
  }

  return (
    <footer className="outro" id="contacto">
      <div className="outro-copy">
        <p className="kicker">Siguiente paso</p>
        <h2>¿Hablamos?</h2>
        <p className="statement">
          Si buscas a alguien para tu equipo o tienes un proyecto en mente, cuéntame.
        </p>
        <ul className="reach">
          <li>
            <span>Rol</span>
            {profile.title}
          </li>
          <li>
            <span>Ubicación</span>
            {profile.location}
          </li>
          <li>
            <span>Estado</span>
            <i className="live" aria-hidden="true" />
            Abierto a oportunidades
          </li>
        </ul>
        <div className="actions">
          {profile.linkedin ? (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          ) : null}
          {profile.email ? <a href={`mailto:${profile.email}`}>Escribir un correo</a> : null}
          {profile.cv ? (
            <a href={profile.cv} target="_blank" rel="noopener noreferrer">
              Descargar CV
            </a>
          ) : null}
          <a className="ghost" href="#top">
            Volver arriba
          </a>
        </div>
      </div>

      <form className="contact" onSubmit={onSubmit}>
        <fieldset className="reasons">
          <legend>¿De qué se trata?</legend>
          {contactReasons.map((reason, index) => (
            <label key={reason}>
              <input type="radio" name="reason" value={reason} defaultChecked={index === 0} />
              <span>{reason}</span>
            </label>
          ))}
        </fieldset>

        <div className="field-row">
          <label className="field">
            <span>Nombre</span>
            <input name="name" autoComplete="name" required placeholder="Tu nombre" />
          </label>
          <label className="field">
            <span>Correo</span>
            <input name="email" type="email" autoComplete="email" required placeholder="tu@empresa.com" />
          </label>
        </div>
        <label className="field">
          <span>
            Empresa <em>(opcional)</em>
          </span>
          <input name="company" autoComplete="organization" placeholder="Dónde trabajas" />
        </label>
        <label className="field">
          <span>Mensaje</span>
          <textarea name="message" rows={4} required placeholder="Cuéntame del puesto o del proyecto" />
        </label>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
          <span aria-hidden="true">→</span>
        </button>

        <p className="form-status" role="status">
          {status === "sent" ? "¡Gracias! Te respondo pronto." : null}
          {status === "offline"
            ? profile.linkedin
              ? "El formulario todavía no envía mensajes. Mientras tanto, escríbeme por LinkedIn."
              : "El formulario todavía no envía mensajes. Pronto estará activo."
            : null}
        </p>
      </form>
    </footer>
  );
}
