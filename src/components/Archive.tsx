"use client";

import { useState } from "react";
import { projects } from "@/data/content";

const LIMIT = 9;
const ALL = "Todo";

export function Archive() {
  const [kind, setKind] = useState(ALL);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const kinds = [ALL, ...Array.from(new Set(projects.map((item) => item.kind)))];
  const needle = query.trim().toLowerCase();
  const matches = projects.filter(
    (item) =>
      (kind === ALL || item.kind === kind) &&
      (!needle || `${item.name} ${item.role} ${item.kind}`.toLowerCase().includes(needle)),
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
        </div>
        <label className="search">
          <span className="sr-only">Buscar proyecto</span>
          <input
            type="search"
            placeholder="Buscar proyecto, rol…"
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
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${item.name}`}>
                  ↗
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">Nada con “{query}”. Prueba con otra palabra.</p>
      )}

      {matches.length > LIMIT ? (
        <button type="button" className="more" onClick={() => setExpanded((open) => !open)}>
          {expanded ? "Ver menos" : `Ver todo (${matches.length})`}
        </button>
      ) : null}
    </section>
  );
}
