import { alsoUsed, projects, skills } from "@/data/content";

export function Stack({ onPick }: { onPick: (tech: string) => void }) {
  const groups = Array.from(new Set(skills.map((skill) => skill.group)));

  return (
    <section className="stack" id="tecnologias" aria-labelledby="stack-title">
      <p className="kicker">Tecnologías</p>
      <h2 id="stack-title">
        Con lo que <em>construyo</em>
      </h2>
      <p className="stack-hint">Toca una tecnología para ver los proyectos donde la usé.</p>

      <div className="stack-groups">
        {groups.map((group) => (
          <div key={group} className="stack-group">
            <h3>{group}</h3>
            <ul>
              {skills
                .filter((skill) => skill.group === group)
                .map((skill) => {
                  const count = projects.filter((item) => item.stack.includes(skill.name)).length;
                  return (
                    <li key={skill.name}>
                      <button
                        type="button"
                        className="skill"
                        style={{ ["--tile" as string]: skill.color, ["--tile-ink" as string]: skill.ink }}
                        onClick={() => onPick(skill.name)}
                        disabled={count === 0}
                      >
                        <span className="tile" aria-hidden="true">
                          {skill.short}
                        </span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-count">
                          {count ? `${count} ${count === 1 ? "proyecto" : "proyectos"}` : null}
                        </span>
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>

      {alsoUsed.length ? (
        <p className="also">
          <span>También he usado</span>
          {alsoUsed.join(" · ")}
        </p>
      ) : null}
    </section>
  );
}
