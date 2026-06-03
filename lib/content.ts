/**
 * AERIS — Single source of truth for all copy & data (spec §6).
 * Edit prices / copy / features here; components never hardcode content.
 */

export const site = {
  name: "AERIS",
  claimEn: "The unseen force that moves everything",
  category: "Marketing Operations Company",
  city: "Barcelona",
  email: "victor@aeris.es", // TODO: confirm real domain
  linkedin: "https://www.linkedin.com/company/aeris",
};

export const nav = [
  { label: "Servicios", href: "#que-incluye" },
  { label: "Planes", href: "#planes" },
  { label: "Casos", href: "#casos" },
  { label: "Contacto", href: "#cta" },
];

/* 01 · HERO */
export const hero = {
  label: "01 · INICIO",
  title: "Tu departamento de marketing completo.",
  lead: ["Operado por expertos.", "Potenciado por IA.", "Por lo que cuesta una sola persona."],
  ctaPrimary: { label: "Ver planes", href: "#planes" },
  ctaSecondary: { label: "Hablar con nosotros", href: "#cta" },
  micro: "+10 EMPRESAS CONFÍAN EN AERIS · BARCELONA",
};

/* 02 · EL PROBLEMA */
export const problema = {
  label: "02 · EL PROBLEMA",
  title: "Hacer marketing hoy tiene tres salidas. Las tres fallan.",
  doors: [
    {
      n: "01",
      name: "AGENCIA",
      text: "Hablas con un comercial. Ejecuta alguien que no conoce tu negocio.",
      img: "agencia",
    },
    {
      n: "02",
      name: "EQUIPO",
      text: "8.000-10.000€/mes que aún no te alcanzan.",
      img: "equipo",
    },
    {
      n: "03",
      name: "FREELANCE",
      text: "Ejecuta, pero rara vez decide.",
      img: "freelance",
    },
  ],
  hook: "Falta una cuarta salida. La estás leyendo.",
  hookMicro: "UN EQUIPO COMPLETO. DIRIGIDO POR EXPERTOS. POTENCIADO POR IA.",
};

/* 03 · LA PROPUESTA */
export const propuesta = {
  label: "03 · LA PROPUESTA",
  title: "Un estratega con criterio. Múltiples IAs ejecutando. Un equipo completo.",
  lead: "No automatizamos tu marketing. Lo dirigimos. La IA pone la velocidad; nosotros el criterio.",
  blocks: [
    {
      n: "[ 01 ]",
      kicker: "CRITERIO HUMANO",
      title: "Estratega",
      text: "Define la dirección. Prioriza lo que importa.",
    },
    {
      n: "[ 02 ]",
      kicker: "INTELIGENCIA ARTIFICIAL",
      title: "Múltiples IAs",
      text: "Múltiples IAs especializadas ejecutan en paralelo.",
    },
    {
      n: "[ 03 ]",
      kicker: "RESULTADOS UNIFICADOS",
      title: "Resultado",
      text: "Más velocidad. Más calidad. Más impacto en tu negocio.",
    },
  ],
};

/* 04 · QUÉ INCLUYE */
export const queIncluye = {
  label: "04 · QUÉ INCLUYE",
  title: "Todo el marketing que tu empresa necesita. En un solo sitio.",
  micro: "UN EQUIPO COMPLETO. TODAS LAS DISCIPLINAS. UNA ÚNICA DIRECCIÓN.",
  tiles: [
    { n: "01", title: "Redes sociales", icon: "asterisk" },
    { n: "02", title: "Email & WhatsApp", icon: "circles" },
    { n: "03", title: "Contenido gráfico", icon: "frame" },
    { n: "04", title: "Vídeo", icon: "waves" },
    { n: "05", title: "Web & SEO", icon: "pyramid" },
    { n: "06", title: "Paid Ads", icon: "square" },
    { n: "07", title: "Outbound", icon: "outbound" },
    { n: "08", title: "Estrategia & Reporting", icon: "bars" },
  ] as const,
  hook: { pre: "No eliges servicios sueltos. Eliges ", accent: "cuánto marketing", post: " quieres." },
};

/* 05 · CÓMO TRABAJAMOS */
export const comoTrabajamos = {
  label: "05 · CÓMO TRABAJAMOS",
  title: "Te desconectas del marketing operativo. Nosotros nos encargamos.",
  steps: [
    { n: "01", title: "Diagnóstico", text: "Entendemos tu negocio en una sesión." },
    { n: "02", title: "Onboarding", text: "Accesos, voz de marca, objetivos." },
    { n: "03", title: "Operación", text: "Proponemos, apruebas, ejecutamos." },
    { n: "04", title: "Iteración", text: "Cada mes, mejor que el anterior." },
  ],
};

/* 06 · PLANES */
export const planes = {
  label: "06 · PLANES",
  title: "Elige el plan que impulsa tu próximo salto.",
  micro: "FLEXIBLES. TRANSPARENTES. DISEÑADOS PARA CRECER CONTIGO.",
  // Cada categoría = una sección con icono. Coherente con el bento (sección 04).
  catLabels: {
    social: "Redes sociales",
    email: "Email & WhatsApp",
    outbound: "Outbound",
    content: "Contenido",
    video: "Vídeo",
    web: "Web & SEO",
    ads: "Paid Ads",
    strategy: "Estrategia",
    team: "Equipo",
  } as const,
  cards: [
    {
      name: "CORE",
      pricePrefix: "desde",
      price: "1.000 €",
      period: "/mes",
      tagline: "Tu presencia, siempre activa.",
      featured: false,
      inherits: undefined as string | undefined,
      groups: [
        { cat: "social", items: ["Hasta 2 canales", "~10 posts/mes"] },
        { cat: "email", items: ["Email + newsletter mensual", "WhatsApp Business básico"] },
        { cat: "outbound", items: ["Hasta 5 campañas/mes"] },
        { cat: "content", items: ["~10 piezas gráficas/mes", "~3 reels/mes"] },
        { cat: "strategy", items: ["Estrategia + reporting mensual"] },
      ],
      footnote: "Para empresas que quieren orden, claridad y resultados.",
    },
    {
      name: "ACTIVE",
      pricePrefix: "desde",
      price: "2.000 €",
      period: "/mes",
      tagline: "Tu marketing creciendo en todos los frentes.",
      featured: true,
      inherits: "CORE",
      groups: [
        { cat: "social", items: ["Hasta 4 canales · ~20 posts/mes"] },
        { cat: "email", items: ["Newsletter quincenal", "WhatsApp completo + automatizaciones"] },
        { cat: "outbound", items: ["Hasta 10 campañas · email + LinkedIn"] },
        { cat: "content", items: ["~25 piezas gráficas/mes", "~7 reels + 1 vídeo producto/mes"] },
        { cat: "web", items: ["4 cambios + 1 landing/trimestre", "SEO on-page + local"] },
        { cat: "ads", items: ["Meta + LinkedIn + Google"] },
        { cat: "strategy", items: ["Estrategia + reporting quincenal"] },
      ],
      footnote: "Para empresas que quieren acelerar y escalar con consistencia.",
    },
    {
      name: "SCALE",
      pricePrefix: "desde",
      price: "5.000 €",
      period: "/mes",
      tagline: "Tu departamento completo, a máxima potencia.",
      featured: false,
      inherits: "ACTIVE",
      groups: [
        { cat: "social", items: ["Hasta 6 canales · ~30 posts/mes"] },
        { cat: "email", items: ["Newsletter semanal"] },
        { cat: "outbound", items: ["Outbound ilimitado + nurturing"] },
        { cat: "content", items: ["~50 piezas gráficas/mes", "~15 reels + hasta 3 vídeos/mes"] },
        { cat: "web", items: ["Web ilimitada · SEO completo + link building"] },
        { cat: "ads", items: ["+ TikTok + YouTube"] },
        { cat: "strategy", items: ["Estrategia semanal + dashboard en vivo + C-Level"] },
        { cat: "team", items: ["2 personas dedicadas + IA"] },
      ],
      footnote: "Para empresas que no aceptan límites.",
    },
  ],
  badge: "★ MÁS ELEGIDO",
  foot: "COMPROMISO MÍNIMO 3 MESES · PRE-AVISO 30 DÍAS · INVERSIÓN PUBLICITARIA APARTE",
};

/* 07 · COMPARATIVA */
export const comparativa = {
  label: "07 · COMPARATIVA",
  title: "No somos una agencia más. Somos tu partner estratégico.",
  micro: "MÁS ESTRATEGIA. MÁS EJECUCIÓN. MEJORES RESULTADOS.",
  columns: ["AERIS", "Agencias tradicionales", "Freelancers"],
  rows: [
    {
      icon: "target",
      title: "Estrategia basada en datos e IA",
      sub: "Decisiones inteligentes, no suposiciones.",
      values: [true, true, false],
    },
    {
      icon: "people",
      title: "Equipo multidisciplinar senior",
      sub: "Especialistas en cada área.",
      values: [true, true, false],
    },
    {
      icon: "chart",
      title: "Enfoque 360º",
      sub: "Todos los canales. Una sola estrategia.",
      values: [true, true, false],
    },
    {
      icon: "clock",
      title: "Agilidad & flexibilidad",
      sub: "Sin burocracia. Sin tiempos muertos.",
      values: [true, false, true],
    },
    {
      icon: "bars",
      title: "Reporting transparente",
      sub: "Resultados claros. En tiempo real.",
      values: [true, false, false],
    },
    {
      icon: "euro",
      title: "ROI medible",
      sub: "Invertimos para que ganes.",
      values: [true, false, false],
    },
  ] as const,
};

/* 08 · CASOS */
export const casos = {
  label: "08 · CASOS",
  title: "Resultados que hablan.",
  micro: "ESTRATEGIA, EJECUCIÓN E IA. IMPACTO REAL EN NEGOCIOS REALES.",
  // NOTE (Inés): métricas placeholder del mockup — sustituir por datos reales antes de publicar.
  placeholder: true,
  items: [
    {
      n: "01",
      name: "KMELEON.TECH",
      img: "kmeleon",
      metrics: [
        { value: "+312%", label: "leads cualificados" },
        { value: "-45%", label: "coste por lead" },
      ],
    },
    {
      n: "02",
      name: "ARTIVERSE.STUDIO",
      img: "artiverse",
      metrics: [
        { value: "+168%", label: "ventas online" },
        { value: "+2,1x", label: "ROAS" },
      ],
    },
    {
      n: "03",
      name: "CLOSIUS.COM",
      img: "closius",
      metrics: [
        { value: "+230%", label: "tráfico orgánico" },
        { value: "+180%", label: "palabras clave en top 10" },
      ],
    },
  ],
  cta: "VER CASO",
};

/* 09 · EQUIPO */
export const equipo = {
  label: "09 · EQUIPO",
  title: "Detrás de AERIS.",
  intro:
    "Los creadores. Dos perfiles que combinan criterio de marketing y profundidad técnica en IA.",
  members: [
    {
      name: "Víctor Torres",
      role: "FOUNDER & CEO",
      // Drop a headshot at public/img/team-victor.{webp,avif} and set photo: "/img/team-victor.webp"
      photo: undefined as string | undefined,
      bio: "Fundador de Aether Labs (Barcelona). Experto en marketing y en aplicar IA al marketing, sobre todo para crecimiento. Define la estrategia y la dirección de cada cuenta.",
      links: [
        { label: "aetherlabs.es", href: "https://www.aetherlabs.es" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/victor-torres-aether" },
      ],
    },
    {
      name: "Dustin Gallegos",
      role: "CO-FOUNDER & STRATEGY",
      photo: undefined as string | undefined,
      bio: "Ex-Microsoft (Cloud Solutions Architect). Fundador y CEO de KMeleon (Miami), pionero en IA generativa para empresas. Aporta la visión técnica y de negocio.",
      links: [
        { label: "kmeleon.tech", href: "https://www.kmeleon.tech" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/dustin-gallegos" },
      ],
    },
  ],
  teamNote:
    "Y debajo de nosotros, un equipo de IAs especializadas y profesionales humanos ejecutando para cada cliente.",
};

/* 10 · FAQ */
export const faq = {
  label: "10 · PREGUNTAS FRECUENTES",
  title: "Todo lo que quieres saber antes de hablar.",
  items: [
    {
      q: "¿Y si necesito algo que no está en mi plan?",
      a: "AERIS define cada mes qué ejecutar según tus objetivos. El plan define los tipos de trabajo y los límites razonables, no un menú rígido.",
    },
    {
      q: "¿Por qué no contratar a un freelance más barato?",
      a: "Un freelance ejecuta lo que le pides. AERIS piensa qué hay que hacer, te lo propone y lo ejecuta. La diferencia es la misma que entre un empleado y un director de marketing.",
    },
    {
      q: "¿La IA va a hacer mi marketing genérico?",
      a: "La IA no dirige. Ejecuta lo que el estratega decide. El criterio y la voz de marca los pone el humano. La IA es la velocidad; el estratega, el cerebro.",
    },
    {
      q: "¿Mi sector es muy específico, encajará?",
      a: "Mejor. Los sectores con terminología propia son donde el criterio estratégico marca más diferencia.",
    },
    {
      q: "¿Cuánto tarda en verse resultado?",
      a: "Los primeros resultados aparecen entre el mes 2 y 3. Por eso el compromiso mínimo es de 3 meses: necesitamos un ciclo completo.",
    },
    {
      q: "¿Puedo cambiar de plan?",
      a: "Sí, con pre-aviso de 30 días. Lo normal es empezar en CORE o ACTIVE y escalar cuando los resultados lo justifican.",
    },
    {
      q: "¿Y el presupuesto de Ads?",
      a: "La inversión publicitaria es aparte y la gestionas tú. AERIS gestiona creatividad, estrategia, audiencias y optimización.",
    },
    {
      q: "¿Y si quiero salir?",
      a: "Pre-aviso de 30 días tras los 3 meses iniciales. Sin penalizaciones.",
    },
  ],
};

/* 11 · CTA FINAL */
export const ctaFinal = {
  title: "¿Listo para tener el marketing resuelto?",
  lead: "Sesión de 30 minutos. Sin compromiso. Te decimos honestamente si AERIS encaja con tu empresa o no.",
  cta: "Reservar sesión",
  micro: "victor@aeris.es · BARCELONA",
};

/* FOOTER */
export const footer = {
  brandLine: "The unseen force that moves everything.",
  brandMicro: "MARKETING OPERATIONS COMPANY · BARCELONA",
  cols: [
    {
      title: "Planes",
      links: [
        { label: "CORE", href: "#planes" },
        { label: "ACTIVE", href: "#planes" },
        { label: "SCALE", href: "#planes" },
        { label: "Comparar", href: "#comparativa" },
      ],
    },
    {
      title: "Compañía",
      links: [
        { label: "Servicios", href: "#que-incluye" },
        { label: "Casos", href: "#casos" },
        { label: "Equipo", href: "#equipo" },
        { label: "Contacto", href: "#cta" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "victor@aeris.es", href: "mailto:victor@aeris.es" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/aeris" },
        { label: "Reservar sesión", href: "#cta" },
      ],
    },
  ],
  legalLeft: "© 2026 AERIS · Estrategia + Ejecución + IA",
  legalRight: ["Privacidad", "Términos", "Cookies"],
};
