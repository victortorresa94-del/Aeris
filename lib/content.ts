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
    events: "Eventos & Webinars",
    strategy: "Estrategia",
    team: "Equipo",
  } as const,
  cards: [
    {
      name: "CORE",
      pricePrefix: "desde",
      price: "1.000 €",
      period: "/mes",
      setup: "Setup desde 600 €",
      cta: "Empezar con CORE",
      tagline: "Tu presencia, siempre activa.",
      featured: false,
      inherits: undefined as string | undefined,
      groups: [
        { cat: "social", items: ["Hasta 2 canales de redes", "8 posts/mes", "8 stories/mes"] },
        { cat: "content", items: ["2 reels/mes", "6 piezas gráficas/mes"] },
        { cat: "email", items: ["Newsletter mensual", "WhatsApp Business (plantillas básicas)"] },
        { cat: "web", items: ["Soporte web: ajustes menores (bolsa ~2h/mes)"] },
        { cat: "strategy", items: ["Estrategia + reporting mensual"] },
        { cat: "team", items: ["1 persona + IA"] },
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
      cta: "Empezar con ACTIVE",
      tagline: "Tu marketing creciendo en todos los frentes.",
      featured: true,
      inherits: "CORE",
      groups: [
        { cat: "social", items: ["Hasta 4 canales", "16 posts/mes", "20 stories/mes", "Community management básico + reseñas"] },
        { cat: "content", items: ["16 piezas gráficas/mes", "5 reels/mes + 1 vídeo de producto/mes"] },
        { cat: "email", items: ["Newsletter quincenal", "WhatsApp Business completo + automatizaciones"] },
        { cat: "outbound", items: ["Hasta 6 campañas de outbound"] },
        { cat: "web", items: ["Soporte web ampliado + 1 landing/trimestre", "SEO on-page + local + 1 artículo/mes"] },
        { cat: "ads", items: ["Meta + Google (hasta 2 campañas)"] },
        { cat: "events", items: ["Webinars/eventos puntuales"] },
        { cat: "strategy", items: ["Estrategia + reporting quincenal"] },
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
      cta: "Hablar con el equipo",
      tagline: "Tu departamento completo, a máxima potencia.",
      featured: false,
      inherits: "ACTIVE",
      groups: [
        { cat: "social", items: ["Hasta 5-6 canales", "24 posts/mes", "40 stories/mes", "Community management completo"] },
        { cat: "content", items: ["30 piezas gráficas/mes", "10 reels/mes + 2 vídeos de producto/mes + 1 testimonio/mes"] },
        { cat: "email", items: ["Newsletter semanal"] },
        { cat: "outbound", items: ["Hasta 12 campañas de outbound"] },
        { cat: "web", items: ["Web + landing pages (bolsa alta)", "SEO completo + técnico + link building + 3 artículos/mes"] },
        { cat: "ads", items: ["Hasta 4 plataformas (4 campañas)"] },
        { cat: "events", items: ["1 evento/trimestre completo"] },
        { cat: "strategy", items: ["Estrategia semanal + dashboard en vivo + plan anual + asesoramiento C-Level"] },
        { cat: "team", items: ["2 personas dedicadas + IA"] },
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
    columns: ["CORE", "ACTIVE", "SCALE"],
    rows: [
      { label: "Canales de redes", values: ["Hasta 2", "Hasta 4", "Hasta 5-6"] },
      { label: "Posts / mes", values: ["8", "16", "24"] },
      { label: "Stories / mes", values: ["8", "20", "40"] },
      { label: "Reels / mes", values: ["2", "5", "10"] },
      { label: "Vídeo de producto", values: ["—", "1 / mes", "2 / mes"] },
      { label: "Testimonio en vídeo", values: ["—", "—", "1 / mes"] },
      { label: "Piezas gráficas / mes", values: ["6", "16", "30"] },
      { label: "Newsletter", values: ["Mensual", "Quincenal", "Semanal"] },
      { label: "WhatsApp Business", values: ["Plantillas", "Completo + auto.", "Completo + auto."] },
      { label: "Outbound", values: ["—", "Hasta 6 camp.", "Hasta 12 camp."] },
      { label: "Community management", values: ["—", "Básico + reseñas", "Completo"] },
      { label: "Web", values: ["Ajustes (~2h/mes)", "Ampliado + 1 landing/trim", "Bolsa alta + landings"] },
      { label: "SEO", values: ["—", "On-page + local + 1 art.", "Completo + técnico + link building + 3 art."] },
      { label: "Paid Ads", values: ["—", "Meta + Google (2 camp.)", "Hasta 4 plataformas (4 camp.)"] },
      { label: "Eventos / webinars", values: ["—", "Puntuales", "1 / trimestre completo"] },
      { label: "Estrategia & reporting", values: ["Mensual", "Quincenal", "Semanal + dashboard + C-Level"] },
      { label: "Equipo", values: ["1 persona + IA", "1 persona + IA", "2 personas + IA"] },
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
      n: "01", title: "Redes sociales", icon: "asterisk",
      oneLine: "Tu marca, presente y consistente donde está tu audiencia.",
      includes: "Estrategia de contenido, calendario, posts, stories, reels, gestión de hasta 6 canales, community management.",
      how: "El estratega define línea editorial y voz; la IA acelera producción de copy y creatividades; revisión humana antes de publicar.",
      plans: "CORE (básico) · ACTIVE · SCALE (completo)",
    },
    {
      n: "02", title: "Email & WhatsApp", icon: "circles",
      oneLine: "Conversaciones que convierten, no spam.",
      includes: "Newsletters, automatizaciones, secuencias, WhatsApp Business, plantillas y flujos.",
      how: "Estrategia de segmentación humana + generación y personalización asistida por IA.",
      plans: "CORE (newsletter) · ACTIVE/SCALE (completo + automatizaciones)",
    },
    {
      n: "03", title: "Outbound", icon: "outbound",
      oneLine: "Prospección que abre puertas.",
      includes: "Secuencias de email por segmento, copy, listas, seguimiento.",
      how: "Definición de ICP y ángulos por el estratega; producción y personalización a escala con IA.",
      plans: "ACTIVE (hasta 6 campañas) · SCALE (hasta 12)",
    },
    {
      n: "04", title: "Contenido gráfico", icon: "frame",
      oneLine: "Piezas que se entienden y se recuerdan.",
      includes: "Banners, carruseles, infografías, decks, cartelería digital.",
      how: "Dirección de arte humana + generación de imagen con modelos de última generación; control de marca en cada pieza.",
      plans: "CORE (6/mes) · ACTIVE (16) · SCALE (30)",
    },
    {
      n: "05", title: "Vídeo", icon: "waves",
      oneLine: "El formato que más pesa, sin el coste de una productora.",
      includes: "Reels, vídeos de producto, testimonios.",
      how: "Guion y dirección humana + generación y edición de vídeo asistida por IA; curaduría humana de cada toma.",
      plans: "CORE (2 reels) · ACTIVE (5 + 1 producto) · SCALE (10 + 2 producto + testimonio)",
    },
    {
      n: "06", title: "Web & SEO", icon: "pyramid",
      oneLine: "Que te encuentren y que, cuando lleguen, conviertan.",
      includes: "Ajustes y soporte web, landing pages, SEO on-page, local, técnico, link building, artículos.",
      how: "Estrategia SEO y arquitectura humana + producción de contenido y código asistida por IA (incl. landings con Aura).",
      plans: "CORE (soporte) · ACTIVE (SEO local + 1 artículo) · SCALE (completo + link building + 3 artículos)",
    },
    {
      n: "07", title: "Paid Ads", icon: "square",
      oneLine: "Inversión que se mide, no que se quema.",
      includes: "Meta, Google, LinkedIn, TikTok, YouTube; creatividades, audiencias, optimización.",
      how: "Estrategia y gestión humana de campañas + creatividades a escala con IA. La inversión publicitaria la pones tú.",
      plans: "ACTIVE (Meta + Google, 2 campañas) · SCALE (hasta 4 plataformas, 4 campañas)",
    },
    {
      n: "08", title: "Eventos & webinars", icon: "rings",
      oneLine: "Momentos que generan pipeline.",
      includes: "Landing, convocatoria por email y WhatsApp, creatividades, seguimiento.",
      how: "Planificación humana + producción de todos los activos con IA.",
      plans: "ACTIVE (puntuales) · SCALE (1/trimestre completo)",
    },
    {
      n: "09", title: "Estrategia & Reporting", icon: "bars",
      oneLine: "El cerebro de todo lo demás.",
      includes: "Diagnóstico, plan, dirección mensual/quincenal/semanal, reporting, dashboard, asesoramiento C-Level.",
      how: "100% criterio humano, apoyado en datos que la IA agrega y ordena.",
      plans: "CORE (mensual) · ACTIVE (quincenal) · SCALE (semanal + dashboard + C-Level)",
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
