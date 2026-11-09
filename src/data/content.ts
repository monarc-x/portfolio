export type Work = {
  id: string;
  name: string;
  role: string;
  summary: string;
  stack: string[];
  href?: string;
  host?: string;
  /** Captura en /public. Sin captura se muestra la ilustración. */
  image?: string;
  /** Color de fondo de la página mientras este trabajo está en pantalla. */
  bg: string;
  ink: string;
  accent: string;
};

export const profile = {
  name: "Jorge Contreras",
  title: "Desarrollador de software",
  statement:
    "Frontend, backend y móvil: tiendas Shopify en producción, un ERP llevado del escritorio a la web y apps en Flutter.",
  focus: ["Frontend", "Backend", "Full stack", "Móvil"],
  /** Los botones de contacto solo aparecen si el campo tiene valor. */
  email: "",
  linkedin: "https://www.linkedin.com/in/jorge-code",
  github: "https://github.com/monarc-x",
  cv: "",
  location: "Perú · remoto o híbrido",
};

export type Skill = {
  name: string;
  /** Monograma de la ficha. */
  short: string;
  color: string;
  ink: string;
  group: string;
};

/** Los nombres deben coincidir con los de `stack` para contar y filtrar proyectos. */
export const skills: Skill[] = [
  { name: "React", short: "Re", color: "#61dafb", ink: "#082a33", group: "Frontend" },
  { name: "TypeScript", short: "TS", color: "#3178c6", ink: "#ffffff", group: "Frontend" },
  { name: "JavaScript", short: "JS", color: "#f7df1e", ink: "#1f1b00", group: "Frontend" },
  { name: "Next.js", short: "N", color: "#111111", ink: "#ffffff", group: "Frontend" },
  { name: "Shopify", short: "Sh", color: "#95bf47", ink: "#14240a", group: "Frontend" },
  { name: "Astro", short: "As", color: "#bc52ee", ink: "#ffffff", group: "Frontend" },
  { name: "HTML y CSS", short: "</>", color: "#e34f26", ink: "#ffffff", group: "Frontend" },
  { name: "C#", short: "C#", color: "#68217a", ink: "#ffffff", group: "Backend" },
  { name: "VB.NET", short: "VB", color: "#004e8c", ink: "#ffffff", group: "Backend" },
  { name: "SQL Server", short: "SQL", color: "#cc2927", ink: "#ffffff", group: "Backend" },
  { name: "Flutter", short: "Fl", color: "#02569b", ink: "#ffffff", group: "Móvil" },
  { name: "Dart", short: "Da", color: "#0dc8b4", ink: "#03201c", group: "Móvil" },
  { name: "Git", short: "Git", color: "#f05032", ink: "#ffffff", group: "Herramientas" },
  { name: "GitHub", short: "GH", color: "#24292f", ink: "#ffffff", group: "Herramientas" },
  { name: "Claude Code", short: "CC", color: "#d97757", ink: "#ffffff", group: "Herramientas" },
  { name: "Figma", short: "Fi", color: "#a259ff", ink: "#ffffff", group: "Herramientas" },
];

/** Tecnologías que usaste antes; se muestran en una línea aparte. */
export const alsoUsed = ["Python", "Django", "Java", "C++", "Vite", "Tailwind CSS", "MySQL"];

export type Project = {
  name: string;
  /** Agrupa los filtros del archivo. */
  kind: string;
  role: string;
  stack: string[];
  href?: string;
  /** Color del punto en la tarjeta. */
  color: string;
};

const shopify = ["Shopify", "React", "TypeScript", "Git", "Claude Code"];

/**
 * Todo en lo que trabajaste. Puede ser larga: el archivo filtra, busca
 * y muestra solo las primeras tarjetas hasta pulsar "Ver todo".
 */
export const projects: Project[] = [
  { name: "Baby Gold", kind: "Tiendas Shopify", role: "Frontend", stack: shopify, href: "https://www.babygold.com/", color: "#f5c443" },
  { name: "Guess", kind: "Tiendas Shopify", role: "Frontend", stack: shopify, href: "https://www.guess.com/", color: "#e3242b" },
  { name: "Soho", kind: "Tiendas Shopify", role: "Frontend", stack: shopify, href: "https://www.shopthesoho.com/", color: "#1e3a8a" },
  { name: "NY & Company", kind: "Tiendas Shopify", role: "Frontend", stack: shopify, href: "https://www.nyandcompany.com/", color: "#c2185b" },
  { name: "Bombshell", kind: "Tiendas Shopify", role: "Frontend", stack: shopify, href: "https://www.bombshellsportswear.com/", color: "#ff4f8b" },
  { name: "Ivy City", kind: "Tiendas Shopify", role: "Frontend", stack: shopify, href: "https://ivycityco.com/", color: "#f7a8bf" },
  { name: "SiempreSoft ERP Web", kind: "ERP", role: "Full stack", stack: ["React", "C#", "SQL Server", "Git"], href: "https://www.siempresoft.com/", color: "#2b59e8" },
  { name: "SiempreSoft ERP", kind: "ERP", role: "Escritorio", stack: ["C#", "VB.NET", "SQL Server"], href: "https://www.siempresoft.com/", color: "#14b8a6" },
  { name: "Agentes de IA para el ERP", kind: "IA", role: "Desarrollo", stack: [], color: "#a855f7" },
  { name: "GRE · Guía de remisión", kind: "Apps móviles", role: "Móvil", stack: ["Flutter", "Dart"], color: "#22c55e" },
  { name: "SiempreSoft B2B", kind: "Apps móviles", role: "Móvil", stack: ["Flutter", "Dart"], color: "#0ea5e9" },
  { name: "Tenvio", kind: "Apps móviles", role: "Móvil", stack: ["Flutter", "Dart"], href: "https://tenvio.pe/", color: "#ff7a1a" },
  { name: "MTO Community", kind: "Landing pages", role: "Frontend", stack: ["Astro"], href: "https://mtocommunity.com/", color: "#facc15" },
  { name: "Este portafolio", kind: "Landing pages", role: "Diseño y desarrollo", stack: ["Next.js", "React", "TypeScript", "HTML y CSS", "GitHub", "Claude Code"], href: "https://github.com/monarc-x/portfolio", color: "#ff5a36" },
];

export const contactReasons = ["Oferta de trabajo", "Proyecto freelance", "Solo saludar"];

export const work: Work[] = [
  {
    id: "babygold",
    name: "Baby Gold",
    role: "Frontend · Shopify",
    summary:
      "Mantenimiento del tema de Shopify de esta joyería de oro de 14k, y corrección de los errores de React que aparecen con las recomendaciones de Azure.",
    stack: shopify,
    href: "https://www.babygold.com/",
    host: "babygold.com",
    image: "/screens/babygold.webp",
    bg: "#f5c443",
    ink: "#2a1d05",
    accent: "#fff3cf",
  },
  {
    id: "guess",
    name: "Guess",
    role: "Frontend · Shopify",
    summary:
      "Mantengo el tema de Shopify de Guess. La empresa inyecta Azure en el tema para recomendar productos según cada usuario, y yo arreglo los errores de React que eso provoca.",
    stack: shopify,
    href: "https://www.guess.com/",
    host: "guess.com",
    image: "/screens/guess.webp",
    bg: "#e3242b",
    ink: "#fff7f2",
    accent: "#140707",
  },
  {
    id: "ny",
    name: "NY & Company",
    role: "Frontend · Shopify",
    summary:
      "Tema de Shopify de un catálogo amplio de moda, en producción. Mantenimiento y corrección de errores de React en las recomendaciones personalizadas.",
    stack: shopify,
    href: "https://www.nyandcompany.com/",
    host: "nyandcompany.com",
    bg: "#6b1b3a",
    ink: "#fff0f4",
    accent: "#ffb1c8",
  },
  {
    id: "ivy",
    name: "Ivy City",
    role: "Frontend · Shopify",
    summary:
      "Frontend de la tienda de vestidos de Ivy City, sobre su tema de Shopify.",
    stack: shopify,
    href: "https://ivycityco.com/",
    host: "ivycityco.com",
    image: "/screens/ivy.webp",
    bg: "#f7a8bf",
    ink: "#2b1520",
    accent: "#2f6b4b",
  },
  {
    id: "erp",
    name: "SiempreSoft ERP",
    role: "Escritorio",
    summary:
      "El ERP de escritorio: ventas, almacén, compras, caja y comprobantes electrónicos. El punto de partida de la modernización.",
    stack: ["C#", "VB.NET", "SQL Server"],
    href: "https://www.siempresoft.com/",
    host: "siempresoft.com",
    bg: "#0f766e",
    ink: "#ecfffb",
    accent: "#fde68a",
  },
  {
    id: "erp-web",
    name: "SiempreSoft ERP Web",
    role: "Full stack",
    summary:
      "El trabajo principal en SiempreSoft: llevar el ERP del escritorio al navegador. Ventas, almacén y comprobantes, en una aplicación web.",
    stack: ["React", "C#", "SQL Server", "Git"],
    href: "https://www.siempresoft.com/",
    host: "siempresoft.com",
    bg: "#2b59e8",
    ink: "#f2f6ff",
    accent: "#9ff0ff",
  },
  {
    id: "tenvio",
    name: "Tenvio",
    role: "Móvil",
    summary:
      "Plataforma para enviar carga con empresas de transporte. Conecta a quien manda el encargo con quien lo lleva.",
    stack: ["Flutter", "Dart"],
    href: "https://tenvio.pe/",
    host: "tenvio.pe",
    image: "/screens/tenvio.webp",
    bg: "#ff7a1a",
    ink: "#1f0e00",
    accent: "#fff4e8",
  },
];
