import type {
  NavLink,
  FooterLinkGroup,
  Stat,
  Step,
  TeamMember,
  CompanyValue,
  Category,
  SelectOption,
} from "./types";

// ─── Brand ──────────────────────────────────────────────────────────
export const BRAND = {
  name: "kore",
  tagline: "Rendimiento desde adentro",
  fullTagline: "Rendimiento que nace desde adentro",
  description:
    "Alimento deportivo con nitratos de remolacha bioactivados. Rendimiento que nace desde adentro.",
} as const;

// ─── WhatsApp ───────────────────────────────────────────────────────
export const WHATSAPP = {
  number: "573046048677",
  message: "Hola Kore! Me gustaría saber más sobre sus productos 🏃‍♂️",
  get url() {
    return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
  },
} as const;

// ─── Navigation ─────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

// ─── Footer ─────────────────────────────────────────────────────────
export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Productos",
    links: [
      { name: "Gelatinas", href: "/productos?categoria=gelatinas" },
      { name: "Jugos", href: "/productos?categoria=jugos" },
      { name: "Packs", href: "/productos?categoria=packs" },
      { name: "Ver todos", href: "/productos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Nosotros", href: "/nosotros" },
      { name: "La ciencia", href: "/nosotros#ciencia" },
      { name: "Blog", href: "#" },
      { name: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { name: "Preguntas frecuentes", href: "#" },
      { name: "Envíos y devoluciones", href: "#" },
      { name: "Política de privacidad", href: "#" },
      { name: "Términos y condiciones", href: "#" },
    ],
  },
];

export const SOCIAL_LINKS = ["instagram", "facebook", "tiktok"] as const;

export const PAYMENT_METHODS = ["Visa", "MC", "PSE", "Nequi"] as const;

// ─── Top bar ────────────────────────────────────────────────────────
export const TOP_BAR_MESSAGE =
  "Envío gratis en pedidos mayores a $50.000 | Nitratos de remolacha bioactivados";

// ─── Trust bar stats ────────────────────────────────────────────────
export const TRUST_STATS: Stat[] = [
  { value: "100+", label: "Atletas confían en Kore" },
  { value: "98%", label: "Repiten compra" },
  { value: "100%", label: "Ingredientes naturales" },
  { value: "15g", label: "Barra práctica de gelatina" },
];

// ─── How it works ───────────────────────────────────────────────────
export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    num: "01",
    title: "Carga",
    desc: "Consume tu Kore 2-3 horas antes de la actividad. Sin agua, sin preparación. Sácala del empaque y listo.",
  },
  {
    num: "02",
    title: "Activa",
    desc: "Tu cuerpo convierte los nitratos bioactivados en óxido nítrico, dilatando los vasos sanguíneos de forma natural.",
  },
  {
    num: "03",
    title: "Rinde",
    desc: "Mayor flujo sanguíneo = más oxígeno a tus músculos. Menos fatiga, mejor rendimiento, mejores tiempos.",
  },
];

// ─── Product categories ─────────────────────────────────────────────
export const PRODUCT_CATEGORIES: Category[] = [
  { name: "Todos", slug: "todos" },
  { name: "Gelatinas", slug: "gelatinas" },
  { name: "Jugos", slug: "jugos" },
  { name: "Packs", slug: "packs" },
];

// ─── About / Nosotros ───────────────────────────────────────────────
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Eduardo Martínez",
    role: "Director Científico",
    bio: "PhD en Fisiología del Ejercicio, especialista en suplementación con nitratos y rendimiento deportivo.",
  },
  {
    name: "Carolina Restrepo",
    role: "Nutricionista Deportiva",
    bio: "Máster en Nutrición Deportiva, asesora de atletas de élite y triatlonistas profesionales.",
  },
  {
    name: "Julián Arias",
    role: "Jefe de Formulación",
    bio: "Ingeniero de alimentos con 15 años de experiencia en desarrollo de gelatinas funcionales y alimentos deportivos.",
  },
];

export const COMPANY_VALUES: CompanyValue[] = [
  {
    title: "Ciencia deportiva aplicada",
    description:
      "Nuestras fórmulas están basadas en estudios publicados sobre los beneficios de los nitratos de remolacha en el rendimiento atlético.",
  },
  {
    title: "100% Natural",
    description:
      "Sin aditivos artificiales, sin conservantes, sin azúcares añadidos. Solo remolacha bioactivada y ingredientes naturales.",
  },
  {
    title: "Rendimiento real",
    description:
      "No prometemos magia. Nuestros productos funcionan porque la ciencia de los nitratos y el óxido nítrico está comprobada.",
  },
  {
    title: "Para todos los atletas",
    description:
      "Desde el runner de fin de semana hasta el maratonista de élite. El rendimiento natural es para todos.",
  },
];

// ─── Contact ────────────────────────────────────────────────────────
export const CONTACT_SUBJECTS: SelectOption[] = [
  { value: "productos", label: "Consulta sobre productos" },
  { value: "protocolo", label: "Protocolo de carga" },
  { value: "pedido", label: "Estado de mi pedido" },
  { value: "distribucion", label: "Distribución / Mayoreo" },
  { value: "otro", label: "Otro" },
];

// ─── Stars (reusable) ──────────────────────────────────────────────
export const STAR_RANGE = [1, 2, 3, 4, 5] as const;
