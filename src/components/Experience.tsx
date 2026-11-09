"use client";

import { useEffect, useRef, useState } from "react";
import { profile, projects, work } from "@/data/content";
import { Archive } from "@/components/Archive";
import { Contact } from "@/components/Contact";
import { Screen } from "@/components/Screens";
import { Stack } from "@/components/Stack";

const HERO = { bg: "#fff4e4", ink: "#1b1310", accent: "#ff5a36" };
const OUTRO = { bg: "#17120f", ink: "#fff4e4", accent: "#f5c443" };

export function Experience() {
  const rootRef = useRef<HTMLElement>(null);
  const chapters = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(-1);
  const [tech, setTech] = useState<string | null>(null);

  const pickTech = (name: string) => {
    setTech(name);
    document.getElementById("archivo")?.scrollIntoView({ block: "start" });
  };

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const mid = window.innerHeight * (window.innerWidth <= 860 ? 0.72 : 0.5);
      let next = -1;
      let local = 0;
      chapters.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= mid && rect.bottom > mid) {
          next = index;
          local = (mid - rect.top) / rect.height;
        }
      });
      const last = chapters.current[work.length - 1];
      if (next === -1 && last && last.getBoundingClientRect().bottom <= mid) next = work.length;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const root = rootRef.current;
      if (root) {
        root.style.setProperty("--local", local.toFixed(3));
        root.style.setProperty("--page", max > 0 ? (window.scrollY / max).toFixed(4) : "0");
      }
      setActive(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onPointer = (event: PointerEvent) => {
      const root = rootRef.current;
      if (!root || event.pointerType !== "mouse") return;
      root.style.setProperty("--mx", ((event.clientX / window.innerWidth) * 2 - 1).toFixed(3));
      root.style.setProperty("--my", ((event.clientY / window.innerHeight) * 2 - 1).toFixed(3));
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  const inStory = active >= 0 && active < work.length;
  const theme = inStory ? work[active] : active >= work.length ? OUTRO : HERO;
  const shown = work[Math.min(Math.max(active, 0), work.length - 1)];
  return (
    <main
      ref={rootRef}
      id="top"
      className="show"
      style={{
        backgroundColor: theme.bg,
        color: theme.ink,
        ["--bg" as string]: theme.bg,
        ["--ink" as string]: theme.ink,
        ["--accent" as string]: theme.accent,
      }}
    >
      <div className="meter" aria-hidden="true" />

      <header className="hero">
        <div className="blobs" aria-hidden="true">
          {work.slice(0, 6).map((item) => (
            <span key={item.id} style={{ background: item.bg }} />
          ))}
        </div>
        <a className="hero-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">in</span>
          LinkedIn
        </a>
        <p className="kicker">Portafolio · {profile.title}</p>
        <h1>
          Jorge
          <br />
          <em>Contreras</em>
        </h1>
        <p className="statement">{profile.statement}</p>
        <ul className="chips" aria-label="Trabajos">
          {work.map((item) => (
            <li key={item.id}>
              <a href={`#w-${item.id}`} style={{ background: item.bg, color: item.ink }}>
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a className="chip-all" href="#archivo">
              Ver todo →
            </a>
          </li>
        </ul>
        <dl className="facts">
          <div>
            <dt>Rol</dt>
            <dd>{profile.title}</dd>
          </div>
          <div>
            <dt>Experiencia en</dt>
            <dd>{profile.focus.join(" · ")}</dd>
          </div>
          <div>
            <dt>Proyectos</dt>
            <dd>{projects.length}</dd>
          </div>
        </dl>
        <p className="cue" aria-hidden="true">
          Desliza
          <i />
        </p>
      </header>

      <section className="story" aria-label="Experiencia">
        <div className="stage-col" style={{ backgroundColor: theme.bg }}>
          <div className="stage">
            <p className="watermark" aria-hidden="true" key={shown.id}>
              {shown.name}
            </p>
            <div className="browser">
              <div className="bar">
                <i />
                <i />
                <i />
                <span className="url">{shown.host ?? shown.name}</span>
              </div>
              <div className="viewport">
                {work.map((item) => (
                  <div
                    key={item.id}
                    className={item.id === shown.id ? "layer is-on" : "layer"}
                    aria-hidden={item.id !== shown.id}
                  >
                    <Screen id={item.id} image={item.image} name={item.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="chapters">
          {work.map((item, index) => (
            <article
              key={item.id}
              id={`w-${item.id}`}
              ref={(el) => {
                chapters.current[index] = el;
              }}
              className={index === active ? "chapter is-on" : "chapter"}
            >
              <p className="count">
                {String(index + 1).padStart(2, "0")}
                <span> / {String(work.length).padStart(2, "0")}</span>
              </p>
              <p className="pill">{item.role}</p>
              <h2>{item.name}</h2>
              <p className="summary">{item.summary}</p>
              <ul className="chapter-stack" aria-label="Tecnologías">
                {item.stack.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              {item.href ? (
                <a className="visit" href={item.href} target="_blank" rel="noopener noreferrer">
                  Ver {item.host}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <nav className={inStory ? "dots is-on" : "dots"} aria-label="Ir a un trabajo">
        {work.map((item, index) => (
          <a
            key={item.id}
            href={`#w-${item.id}`}
            aria-label={item.name}
            aria-current={index === active ? "true" : undefined}
            style={{ ["--dot" as string]: item.bg }}
          />
        ))}
      </nav>

      <Stack onPick={pickTech} />
      <Archive tech={tech} onTech={setTech} />
      <Contact />
    </main>
  );
}
