function Dress({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 180" className="dress">
      <path
        d="M60 16c14 0 20 12 16 26 18 10 28 22 20 40L78 172H42L24 82c-8-18 2-30 20-40-4-14 2-26 16-26z"
        fill={color}
      />
    </svg>
  );
}

export function Screen({ id }: { id: string }) {
  switch (id) {
    case "babygold":
      return (
        <div className="screen s-gold">
          <header>
            <b>BABY GOLD</b>
            <span />
            <span />
            <span />
          </header>
          <div className="gold-hero">
            <i className="gold-ring" />
            <i className="gold-ring small" />
          </div>
          <div className="row">
            {[0, 1, 2].map((n) => (
              <div key={n} className="tile">
                <i className="gold-dot" />
              </div>
            ))}
          </div>
        </div>
      );
    case "guess":
      return (
        <div className="screen s-guess">
          <header>
            <b>GUESS</b>
            <span />
            <span />
          </header>
          <p className="guess-word">GUESS</p>
          <i className="guess-line" />
          <div className="row">
            {[0, 1, 2].map((n) => (
              <div key={n} className="tile" />
            ))}
          </div>
        </div>
      );
    case "ny":
      return (
        <div className="screen s-ny">
          <header>
            <b>NY&amp;CO</b>
            <span />
            <span />
            <span />
          </header>
          <div className="ny-grid">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      );
    case "ivy":
      return (
        <div className="screen s-ivy">
          <header>
            <b>IVY CITY</b>
            <span />
            <span />
          </header>
          <div className="ivy-row">
            <Dress color="#2f6b4b" />
            <Dress color="#e46f8f" />
            <Dress color="#f3d6a4" />
          </div>
        </div>
      );
    case "erp":
      return (
        <div className="screen s-desk">
          <div className="menu">
            <span>Archivo</span>
            <span>Ventas</span>
            <span>Almacén</span>
            <span>Compras</span>
            <span>Caja</span>
          </div>
          <div className="toolbar">
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <i key={n} />
            ))}
          </div>
          <div className="grid-table">
            {Array.from({ length: 24 }, (_, n) => (
              <i key={n} />
            ))}
          </div>
        </div>
      );
    case "erp-web":
      return (
        <div className="screen s-web">
          <aside>
            <b>ERP</b>
            <span className="on" />
            <span />
            <span />
            <span />
          </aside>
          <div className="dash">
            <div className="cards">
              <div />
              <div />
              <div />
            </div>
            <div className="chart">
              {[46, 70, 52, 84, 64, 92, 76].map((h, n) => (
                <i key={n} style={{ height: `${h}%`, transitionDelay: `${n * 60}ms` }} />
              ))}
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="screen s-route">
          <svg viewBox="0 0 320 200" className="route">
            <path className="street" d="M0 60H320M0 140H320M80 0V200M200 0V200" />
            <path id="tenvio-path" className="path" d="M30 170 C 90 170, 100 50, 170 80 S 260 160, 296 34" />
            <circle cx="30" cy="170" r="7" className="pin" />
            <circle cx="296" cy="34" r="7" className="pin end" />
            <g className="truck">
              <rect x="-10" y="-7" width="20" height="14" rx="3" />
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#tenvio-path" />
              </animateMotion>
            </g>
          </svg>
          <div className="route-card">
            <b>Carga en ruta</b>
            <span />
          </div>
        </div>
      );
  }
}
