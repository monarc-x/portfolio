export type Work = {
  id: string;
  name: string;
  role: string;
  summary: string;
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
    "Frontend y backend: tiendas en producción, y la modernización de un ERP de escritorio a la web.",
  /** Los botones de contacto solo aparecen si el campo tiene valor. */
  focus: ["Frontend", "Backend", "Full stack"],
  email: "",
  linkedin: "https://www.linkedin.com/in/jorge-code",
  cv: "",
  location: "Perú · remoto o híbrido",
};

export type Project = {
  name: string;
  /** Agrupa los filtros del archivo. */
  kind: string;
  role: string;
  href?: string;
  /** Color del punto en la tarjeta. */
  color: string;
};

/**
 * Todo en lo que trabajaste. Puede ser larga: el archivo filtra, busca
 * y muestra solo las primeras tarjetas hasta pulsar "Ver todo".
 */
export const projects: Project[] = [
  { name: "Baby Gold", kind: "Tiendas online", role: "Frontend", href: "https://www.babygold.com/", color: "#f5c443" },
  { name: "Guess", kind: "Tiendas online", role: "Frontend", href: "https://www.guess.com/", color: "#e3242b" },
  { name: "NY & Company", kind: "Tiendas online", role: "Frontend", href: "https://www.nyandcompany.com/", color: "#c2185b" },
  { name: "Ivy City", kind: "Tiendas online", role: "Frontend", href: "https://ivycityco.com/", color: "#f7a8bf" },
  { name: "SiempreSoft ERP", kind: "ERP", role: "Desarrollo", href: "https://www.siempresoft.com/", color: "#14b8a6" },
  { name: "SiempreSoft ERP Web", kind: "ERP", role: "Modernización web", href: "https://www.siempresoft.com/", color: "#2b59e8" },
  { name: "Tenvio", kind: "Logística", role: "Desarrollo", href: "https://tenvio.pe/", color: "#ff7a1a" },
];

export const contactReasons = ["Oferta de trabajo", "Proyecto freelance", "Solo saludar"];

export const work: Work[] = [
  {
    id: "babygold",
    name: "Baby Gold",
    role: "Frontend",
    summary:
      "Interfaz de la tienda de Baby Gold, joyería de oro de 14k. El sitio está en producción y el trabajo es la capa que ve quien compra.",
    href: "https://www.babygold.com/",
    host: "babygold.com",
    image: "/screens/babygold.png",
    bg: "#f5c443",
    ink: "#2a1d05",
    accent: "#fff3cf",
  },
  {
    id: "guess",
    name: "Guess",
    role: "Frontend",
    summary:
      "Frontend de la tienda de Guess. Mantengo la interfaz publicada, dentro de la imagen que la marca ya tiene.",
    href: "https://www.guess.com/",
    host: "guess.com",
    image: "/screens/guess.png",
    bg: "#e3242b",
    ink: "#fff7f2",
    accent: "#140707",
  },
  {
    id: "ny",
    name: "NY & Company",
    role: "Frontend",
    summary:
      "Frontend del storefront de NY & Company. Catálogo amplio, sitio en producción.",
    href: "https://www.nyandcompany.com/",
    host: "nyandcompany.com",
    bg: "#6b1b3a",
    ink: "#fff0f4",
    accent: "#ffb1c8",
  },
  {
    id: "ivy",
    name: "Ivy City",
    role: "Frontend",
    summary:
      "Frontend del sitio de Ivy City. Vestidos, y una tienda que tiene que sentirse como la ropa.",
    href: "https://ivycityco.com/",
    host: "ivycityco.com",
    image: "/screens/ivy.png",
    bg: "#f7a8bf",
    ink: "#2b1520",
    accent: "#2f6b4b",
  },
  {
    id: "erp",
    name: "SiempreSoft ERP",
    role: "Desarrollo",
    summary:
      "El ERP de escritorio: ventas, almacén, compras, caja y comprobantes electrónicos. El punto de partida de la modernización.",
    href: "https://www.siempresoft.com/",
    host: "siempresoft.com",
    bg: "#0f766e",
    ink: "#ecfffb",
    accent: "#fde68a",
  },
  {
    id: "erp-web",
    name: "SiempreSoft ERP Web",
    role: "Modernización web",
    summary:
      "El trabajo principal en SiempreSoft: llevar el ERP del escritorio al navegador. Ventas, almacén y comprobantes, en una aplicación web.",
    href: "https://www.siempresoft.com/",
    host: "siempresoft.com",
    bg: "#2b59e8",
    ink: "#f2f6ff",
    accent: "#9ff0ff",
  },
  {
    id: "tenvio",
    name: "Tenvio",
    role: "Desarrollo",
    summary:
      "Plataforma para enviar carga con empresas de transporte. Conecta a quien manda el encargo con quien lo lleva.",
    href: "https://tenvio.pe/",
    host: "tenvio.pe",
    image: "/screens/tenvio.png",
    bg: "#ff7a1a",
    ink: "#1f0e00",
    accent: "#fff4e8",
  },
];
