export type Work = {
  id: string;
  name: string;
  role: string;
  summary: string;
  href?: string;
  host?: string;
  /** Color de fondo de la página mientras este trabajo está en pantalla. */
  bg: string;
  ink: string;
  accent: string;
};

export const profile = {
  name: "Jorge Contreras",
  title: "Desarrollador de software",
  statement:
    "Frontend de tiendas en producción, y la modernización de un ERP de escritorio a la web.",
  /** Los botones de contacto solo aparecen si el campo tiene valor. */
  email: "",
  linkedin: "",
  cv: "",
};

export const work: Work[] = [
  {
    id: "babygold",
    name: "Baby Gold",
    role: "Frontend",
    summary:
      "Interfaz de la tienda de Baby Gold, joyería de oro de 14k. El sitio está en producción y el trabajo es la capa que ve quien compra.",
    href: "https://www.babygold.com/",
    host: "babygold.com",
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
    bg: "#ff7a1a",
    ink: "#1f0e00",
    accent: "#fff4e8",
  },
];
