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
  { label: "Servicios", href: "/servicios" },
  { label: "Planes", href: "/planes" },
  { label: "Tecnología", href: "/tecnologia" },
  { label: "Casos", href: "/casos" },
  { label: "Nosotros", href: "/nosotros" },
];

/* 01 · HERO */
export const hero = {
  label: "01 · INICIO",
  title: "Tu departamento de marketing completo.",
  lead: ["Operado por expertos.", "Potenciado por IA.", "Por lo que cuesta una sola persona."],
  ctaPrimary: { label: "Ver planes", href: "/planes" },
  ctaSecondary: { label: "Hablar con nosotros", href: "/contacto" },
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
    { n: "01", title: "Estrategia & dirección", icon: "bars" },
    { n: "02", title: "Contenido & redes", icon: "asterisk" },
    { n: "03", title: "Vídeo", icon: "waves" },
    { n: "04", title: "Email, WhatsApp & outbound", icon: "circles" },
    { n: "05", title: "Web & SEO", icon: "pyramid" },
    { n: "06", title: "Paid Ads", icon: "square" },
    { n: "07", title: "Eventos & webinars", icon: "rings" },
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
  // Taxonomía MECE — 7 categorías en ORDEN FIJO en los 3 planes (spec v2 §7.2).
  catLabels: {
    estrategia: "Estrategia & dirección",
    contenido: "Contenido & redes",
    video: "Vídeo",
    comms: "Email, WhatsApp & outbound",
    web: "Web & SEO",
    ads: "Paid Ads",
    eventos: "Eventos & webinars",
  } as const,
  note: "Posts incluye estáticos y carruseles. El mix de piezas puede ajustarse en el onboarding según tu estrategia.",
  cards: [
    {
      name: "CORE",
      pricePrefix: "desde",
      price: "1.000 €",
      period: "/mes",
      setup: "Setup desde 600 €",
      team: "1 persona + IA",
      cta: "Empezar con CORE",
      tagline: "Tu presencia, siempre activa.",
      featured: false,
      inherits: undefined as string | undefined,
      groups: [
        { cat: "estrategia", items: ["Estrategia + reporting mensual"] },
        { cat: "contenido", items: ["Hasta 2 canales", "8 posts/mes", "8 stories/mes", "6 piezas gráficas/mes", "Moderación básica"] },
        { cat: "video", items: ["3 reels/mes"] },
        { cat: "comms", items: ["Newsletter mensual", "WhatsApp Business (plantillas)"] },
        { cat: "web", items: ["Soporte web: ajustes menores (bolsa ~2h/mes)"] },
      ],
      excludes: ["Outbound", "SEO", "Paid Ads", "Vídeo de producto"] as string[] | undefined,
      footnote: "Para empresas que quieren orden, claridad y resultados.",
    },
    {
      name: "ACTIVE",
      pricePrefix: "desde",
      price: "2.500 €",
      period: "/mes",
      setup: "Setup desde 1.200 €",
      team: "1 persona + IA",
      cta: "Empezar con ACTIVE",
      tagline: "Tu marketing creciendo en todos los frentes.",
      featured: true,
      inherits: "CORE",
      groups: [
        { cat: "estrategia", items: ["Estrategia + reporting quincenal"] },
        { cat: "contenido", items: ["Hasta 4 canales", "16 posts/mes", "20 stories/mes", "16 piezas gráficas/mes", "Community + reseñas"] },
        { cat: "video", items: ["5 reels/mes + 1 vídeo de producto/mes"] },
        { cat: "comms", items: ["Newsletter quincenal", "WhatsApp completo + automatizaciones", "Hasta 6 campañas de outbound"] },
        { cat: "web", items: ["Soporte web ampliado + 1 landing/trimestre", "SEO on-page + local + 1 artículo/mes"] },
        { cat: "ads", items: ["Meta + Google (hasta 2 campañas)"] },
        { cat: "eventos", items: ["Webinars/eventos puntuales"] },
      ],
      excludes: undefined as string[] | undefined,
      footnote: "Para empresas que quieren acelerar y escalar con consistencia.",
    },
    {
      name: "SCALE",
      pricePrefix: "desde",
      price: "6.500 €",
      period: "/mes",
      setup: "Setup desde 2.500 €",
      team: "2 personas + IA",
      cta: "Hablar con el equipo",
      tagline: "Tu departamento completo, a máxima potencia.",
      featured: false,
      inherits: "ACTIVE",
      groups: [
        { cat: "estrategia", items: ["Estrategia + reporting semanal", "Dashboard en vivo · plan anual · asesoramiento C-Level"] },
        { cat: "contenido", items: ["Hasta 5-6 canales", "24 posts/mes", "40 stories/mes", "30 piezas gráficas/mes", "Community management completo"] },
        { cat: "video", items: ["10 reels/mes + 2 vídeos de producto/mes + 1 testimonio/mes"] },
        { cat: "comms", items: ["Newsletter semanal", "WhatsApp completo", "Hasta 12 campañas de outbound (con tope)"] },
        { cat: "web", items: ["Web + landing pages (bolsa alta)", "SEO completo + técnico + link building + 3 artículos/mes"] },
        { cat: "ads", items: ["Hasta 4 plataformas (4 campañas)"] },
        { cat: "eventos", items: ["1 evento/trimestre completo"] },
      ],
      excludes: undefined as string[] | undefined,
      footnote: "Para empresas que no aceptan límites.",
    },
  ],
  badge: "★ MÁS ELEGIDO",
  foot: "Compromiso mínimo 3 meses · Pre-aviso 30 días · Inversión publicitaria aparte",
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
      role: "FOUNDER",
      photo: "/img/team-victor.webp" as string | undefined,
      bio: "Fundador de Aether Labs (Barcelona). Experto en marketing y en aplicar IA al marketing, sobre todo para crecimiento. Define la estrategia y la dirección de cada cuenta.",
      links: [
        { label: "aetherlabs.es", href: "https://www.aetherlabs.es" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/victor-torres-aether" },
      ],
    },
    {
      name: "Dustin Gallegos",
      role: "FOUNDER",
      photo: "/img/team-dustin.webp" as string | undefined,
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
      title: "Navegación",
      links: [
        { label: "Servicios", href: "/servicios" },
        { label: "Planes", href: "/planes" },
        { label: "Tecnología", href: "/tecnologia" },
        { label: "Casos", href: "/casos" },
        { label: "Nosotros", href: "/nosotros" },
      ],
    },
    {
      title: "Planes",
      links: [
        { label: "CORE", href: "/planes" },
        { label: "ACTIVE", href: "/planes" },
        { label: "SCALE", href: "/planes" },
        { label: "Comparar", href: "/planes#comparativa" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "victor@aeris.es", href: "mailto:victor@aeris.es" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/aeris" },
        { label: "Reservar sesión", href: "/contacto" },
      ],
    },
  ],
  legalLeft: "© 2026 AERIS · Estrategia + Ejecución + IA",
  legalRight: ["Privacidad", "Términos", "Cookies"],
};

/* ============================================================
   v2 — Páginas dedicadas (multipágina)
   ============================================================ */

/* /planes — contenido extra (hero, matriz, add-ons, letra pequeña) */
export const planesPage = {
  label: "PLANES",
  title: "Una carta. Tres tamaños. Sin sorpresas.",
  lead: "Precio fijo mensual desde el que partes. El volumen exacto lo ajustamos juntos en el onboarding. Sin permanencias trampa, sin costes ocultos.",
  matrix: {
    label: "07 · COMPARATIVA COMPLETA",
    title: "Qué entra en cada plan.",
    // Cabecera de columnas: nombre + precio + setup + equipo
    columns: [
      { name: "CORE", price: "desde 1.000 €", setup: "Setup 600 €", team: "1 persona + IA" },
      { name: "ACTIVE", price: "desde 2.500 €", setup: "Setup 1.200 €", team: "1 persona + IA" },
      { name: "SCALE", price: "desde 6.500 €", setup: "Setup 2.500 €", team: "2 personas + IA" },
    ],
    // Grupos en el ORDEN FIJO de la taxonomía (mismo que las cards)
    groups: [
      {
        cat: "Estrategia & dirección",
        rows: [{ label: "Estrategia & reporting", values: ["Mensual", "Quincenal", "Semanal + dashboard + C-Level"] }],
      },
      {
        cat: "Contenido & redes",
        rows: [
          { label: "Canales de redes", values: ["Hasta 2", "Hasta 4", "Hasta 5-6"] },
          { label: "Posts / mes", values: ["8", "16", "24"] },
          { label: "Stories / mes", values: ["8", "20", "40"] },
          { label: "Piezas gráficas / mes", values: ["6", "16", "30"] },
          { label: "Community management", values: ["Moderación", "Básico + reseñas", "Completo"] },
        ],
      },
      {
        cat: "Vídeo",
        rows: [
          { label: "Reels / mes", values: ["3", "5", "10"] },
          { label: "Vídeo de producto", values: ["—", "1 / mes", "2 / mes"] },
          { label: "Testimonio en vídeo", values: ["—", "—", "1 / mes"] },
        ],
      },
      {
        cat: "Email, WhatsApp & outbound",
        rows: [
          { label: "Newsletter", values: ["Mensual", "Quincenal", "Semanal"] },
          { label: "WhatsApp Business", values: ["Plantillas", "Completo + auto.", "Completo + auto."] },
          { label: "Outbound", values: ["—", "Hasta 6 camp.", "Hasta 12 camp."] },
        ],
      },
      {
        cat: "Web & SEO",
        rows: [
          { label: "Soporte web", values: ["Ajustes (~2h/mes)", "Ampliado + 1 landing/trim", "Bolsa alta + landings"] },
          { label: "SEO", values: ["—", "On-page + local + 1 art.", "Completo + técnico + link building + 3 art."] },
        ],
      },
      {
        cat: "Paid Ads",
        rows: [{ label: "Plataformas", values: ["—", "Meta + Google (2 camp.)", "Hasta 4 plataformas (4 camp.)"] }],
      },
      {
        cat: "Eventos & webinars",
        rows: [{ label: "Eventos / webinars", values: ["—", "Puntuales", "1 / trimestre completo"] }],
      },
    ],
  },
  addons: {
    label: "AMPLIACIONES",
    title: "¿Necesitas más de lo que da tu plan?",
    intro: "No te cambiamos de plan: lo ampliamos.",
    items: [
      { name: "Canal de redes adicional", price: "desde 150 €/mes" },
      { name: "Pack de 5 reels extra", price: "desde 200 €/mes" },
      { name: "Vídeo de producto adicional", price: "desde 150 €/ud" },
      { name: "Landing page adicional", price: "desde 300 €/ud" },
      { name: "Evento/webinar completo", price: "desde 800 €/ud" },
      { name: "Campaña de paid en plataforma extra", price: "desde 200 €/mes" },
    ],
  },
  smallprint: [
    "* Web: ajustes sobre web existente (bolsa de horas). Webs nuevas y ecommerce son proyecto aparte presupuestado.",
    "Inversión publicitaria aparte.",
    "Compromiso mínimo 3 meses · pre-aviso 30 días · sin penalizaciones tras el mínimo.",
    'Todos los volúmenes son "hasta"/"desde", se ajustan en onboarding. Ningún servicio es ilimitado.',
  ],
};

/* /servicios */
export const servicios = {
  label: "SERVICIOS",
  title: "Todas las disciplinas del marketing. Una sola dirección.",
  lead: "No somos especialistas de una cosa. Somos un departamento completo: cada disciplina coordinada bajo una única estrategia.",
  disciplines: [
    {
      n: "01", title: "Estrategia & dirección", icon: "bars",
      oneLine: "El cerebro de todo lo demás.",
      includes: "Diagnóstico, plan, dirección mensual/quincenal/semanal, reporting, dashboard en vivo, plan anual, asesoramiento C-Level.",
      how: "100% criterio humano, apoyado en datos que la IA agrega y ordena.",
      plans: "CORE (mensual) · ACTIVE (quincenal) · SCALE (semanal + dashboard + C-Level)",
    },
    {
      n: "02", title: "Contenido & redes", icon: "asterisk",
      oneLine: "Tu marca, presente y consistente donde está tu audiencia.",
      includes: "Estrategia de contenido y calendario, posts (estáticos y carruseles), stories, piezas gráficas (banners, infografías, decks, cartelería), gestión de hasta 6 canales, community management y reseñas.",
      how: "El estratega define línea editorial, voz y dirección de arte; la IA acelera la producción de copy e imagen; revisión humana antes de publicar.",
      plans: "CORE (2 canales · 8 posts · 8 stories · 6 gráficas · moderación) · ACTIVE (4 canales · 16/20/16 · community + reseñas) · SCALE (5-6 canales · 24/40/30 · community completo)",
    },
    {
      n: "03", title: "Vídeo", icon: "waves",
      oneLine: "El formato que más pesa, sin el coste de una productora.",
      includes: "Reels, vídeos de producto, vídeos testimonio.",
      how: "Guion y dirección humana + generación y edición de vídeo asistida por IA; curaduría humana de cada toma.",
      plans: "CORE (3 reels) · ACTIVE (5 reels + 1 producto) · SCALE (10 reels + 2 producto + 1 testimonio)",
    },
    {
      n: "04", title: "Email, WhatsApp & outbound", icon: "circles",
      oneLine: "Comunicación directa que convierte, no spam.",
      includes: "Newsletters, automatizaciones y flujos, WhatsApp Business (plantillas y completo), secuencias de outbound por segmento (copy, listas, seguimiento).",
      how: "Estrategia de segmentación e ICP humana + generación y personalización a escala con IA.",
      plans: "CORE (newsletter mensual · WhatsApp plantillas) · ACTIVE (quincenal · WhatsApp completo + autom. · hasta 6 outbound) · SCALE (semanal · hasta 12 outbound)",
    },
    {
      n: "05", title: "Web & SEO", icon: "pyramid",
      oneLine: "Que te encuentren y que, cuando lleguen, conviertan.",
      includes: "Soporte y ajustes web (bolsa de horas), landing pages, SEO on-page, local, técnico, link building, artículos optimizados.",
      how: "Estrategia SEO y arquitectura humana + producción de contenido y código asistida por IA (incl. landings con Aura). Webs nuevas o ecommerce = proyecto aparte.",
      plans: "CORE (soporte ~2h/mes) · ACTIVE (+1 landing/trim · SEO on-page + local + 1 artículo/mes) · SCALE (web + landings bolsa alta · SEO completo + técnico + link building + 3 artículos/mes)",
    },
    {
      n: "06", title: "Paid Ads", icon: "square",
      oneLine: "Inversión que se mide, no que se quema.",
      includes: "Creatividades, audiencias y optimización en Meta, Google, LinkedIn, TikTok, YouTube.",
      how: "Estrategia y gestión humana de campañas + creatividades a escala con IA. La inversión publicitaria la pones tú.",
      plans: "ACTIVE (Meta + Google, 2 campañas) · SCALE (hasta 4 plataformas, 4 campañas) · No incluido en CORE",
    },
    {
      n: "07", title: "Eventos & webinars", icon: "rings",
      oneLine: "Momentos que generan pipeline.",
      includes: "Landing, convocatoria por email y WhatsApp, creatividades, seguimiento.",
      how: "Planificación humana + producción de todos los activos con IA.",
      plans: "ACTIVE (puntuales) · SCALE (1/trimestre completo) · No incluido en CORE",
    },
  ],
  closing: { pre: "No eliges servicios sueltos. Eliges ", accent: "cuánto marketing", post: " quieres." },
};

/* /tecnologia */
export const tecnologia = {
  label: "TECNOLOGÍA",
  title: "La IA no dirige tu marketing. Nosotros sí.",
  lead: "Detrás de cada entrega hay una orquesta de modelos de IA trabajando en paralelo. Pero quien decide qué se hace, cómo y por qué, siempre es una persona con criterio.",
  layersLabel: "EL MODELO EN TRES CAPAS",
  layers: [
    { n: "[ 01 ]", kicker: "CRITERIO HUMANO", title: "Lo que no se delega", text: "Estrategia, voz de marca, decisiones, aprobación. El héroe de todo el sistema." },
    { n: "[ 02 ]", kicker: "CAPA DE ORQUESTACIÓN", title: "Aura", text: "Nuestra herramienta propia: coordina múltiples IAs especializadas y las pone a trabajar juntas sobre tu marca. Desarrollo propio de AERIS y nuestra ventaja competitiva." },
    { n: "[ 03 ]", kicker: "EJECUCIÓN POR IA", title: "El músculo", text: "Texto, imagen, vídeo, web, email: producción a una velocidad y escala imposibles para un equipo tradicional." },
  ],
  benefitsLabel: "POR QUÉ ESTO TE IMPORTA",
  benefits: [
    { title: "Velocidad", text: "Lo que una agencia entrega en semanas, nosotros en días." },
    { title: "Escala", text: "El volumen de un equipo de diez, con la coherencia de uno." },
    { title: "Criterio", text: "Cada salida pasa por una persona que conoce tu negocio. La IA nunca publica sola." },
  ],
  closing: "El futuro del marketing no es más IA. Es mejor criterio dirigiéndola.",
};

/* /casos — hero (los casos reutilizan `casos`) */
export const casosPage = {
  label: "CASOS",
  title: "Resultados que hablan.",
  lead: "Estrategia, ejecución e IA. Impacto real en negocios reales.",
};

/* /nosotros */
export const nosotros = {
  label: "NOSOTROS",
  title: "Detrás de AERIS.",
  lead: "Dos personas que vivieron por dentro lo que falla en el marketing, y construyeron la alternativa.",
  historyLabel: "LA HISTORIA",
  history:
    "El marketing está roto en sus tres salidas: la agencia que no conoce tu negocio, el equipo interno que no te alcanza, el freelance que solo ejecuta. La IA por fin permite una cuarta salida — criterio humano con la capacidad de ejecución de un equipo entero. AERIS existe para operarla.",
  manifesto: [
    "El marketing del futuro no es más actividad. Es más criterio.",
    "No son más personas ejecutando. Es la persona correcta dirigiendo.",
    "No es ruido. Es la fuerza invisible que mueve todo.",
  ],
};

/* /contacto */
export const contacto = {
  label: "CONTACTO",
  title: "¿Listo para cambiar?",
  lead: "Sesión de 30 minutos. Sin compromiso. Te decimos honestamente si AERIS encaja con tu empresa o no.",
  planOptions: ["CORE", "ACTIVE", "SCALE", "No lo sé"],
  submit: "Reservar sesión",
  altLabel: "O ESCRÍBENOS DIRECTAMENTE",
};

/* Bloque CTA reutilizable (cierre de páginas) */
export const ctaSection = {
  title: "¿Listo para tener el marketing resuelto?",
  lead: "Sesión de 30 minutos. Sin compromiso. Te decimos honestamente si AERIS encaja con tu empresa o no.",
  cta: "Reservar sesión",
  href: "/contacto",
  micro: "victor@aeris.es · BARCELONA",
};

/* Teaser de tecnología en la home */
export const techTeaser = {
  label: "09 · TECNOLOGÍA",
  title: "Detrás de cada entrega, una orquesta de IA dirigida por personas.",
  lead: "Aura, nuestra capa de orquestación propia, coordina múltiples IAs especializadas. Pero quien decide siempre es una persona con criterio.",
  cta: { label: "Cómo lo hacemos", href: "/tecnologia" },
};
