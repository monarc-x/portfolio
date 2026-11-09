"use client";

import { useState } from "react";
import { projects } from "@/data/content";

const LIMIT = 9;
const ALL = "Todo";

export function Archive({ tech, onTech }: { tech: string | null; onTech: (tech: string | null) => void }) {
  const [kind, setKind] = useState(ALL);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const kinds = [ALL, ...Array.from(new Set(projects.map((item) => item.kind)))];
  const needle = query.trim().toLowerCase();
  const matches = projects.filter(
    (item) =>
      (kind === ALL || item.kind === kind) &&
      (!tech || item.stack.includes(tech)) &&
      (!needle || `${item.name} ${item.role} ${item.kind} ${item.stack.join(" ")}`.toLowerCase().includes(needle)),
  );
  const visible = expanded ? matches : matches.slice(0, LIMIT);

  return (
    <section className="archive" id="archivo" aria-labelledby="archive-title">
      <div className="archive-head">
        <p className="kicker">Archivo</p>
        <h2 id="archive-title">
          Todo en lo que <em>trabajé</em>
        </h2>
        <p className="archive-total">
          <strong>{projects.length}</strong> proyectos
        </p>
      </div>

      <div className="archive-tools">
        <div className="filters" role="group" aria-label="Filtrar por tipo">
          {kinds.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={kind === name}
              onClick={() => {
                setKind(name);
                setExpanded(false);
              }}
            >
              {name}
              <span>{name === ALL ? projects.length : projects.filter((item) => item.kind === name).length}</span>
            </button>
          ))}
          {tech ? (
            <button type="button" className="tech-filter" onClick={() => onTech(null)} aria-label={`Quitar filtro ${tech}`}>
              {tech}
              <span aria-hidden="true">✕</span>
            </button>
          ) : null}
        </div>
        <label className="search">
          <span className="sr-only">Buscar proyecto</span>
          <input
            type="search"
            placeholder="Buscar proyecto, rol o tecnología…"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setExpanded(false);
            }}
          />
        </label>
      </div>

      {visible.length ? (
        <ul className="cards">
          {visible.map((item) => (
            <li key={item.name} style={{ ["--dot" as string]: item.color }}>
              <span className="card-kind">{item.kind}</span>
              <h3>{item.name}</h3>
              <p>{item.role}</p>
              {item.stack.length ? (
                <ul className="tags" aria-label="Tecnologías">
                  {item.stack.map((name) => (
                    <li key={name} className={name === tech ? "is-on" : undefined}>
                      {name}
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${item.name}`}>
                  ↗
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">No hay proyectos con ese filtro. Prueba con otro.</p>
      )}

      {matches.length > LIMIT ? (
        <button type="button" className="more" onClick={() => setExpanded((open) => !open)}>
          {expanded ? "Ver menos" : `Ver todo (${matches.length})`}
        </button>
      ) : null}
    </section>
  );
}
