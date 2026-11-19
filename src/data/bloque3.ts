export const BLOQUE3_CONFIG = {
  brand: "Bloque3",
  tagline:
    "Colectivo independiente de ingeniería: herramientas para desarrolladores, juegos, automatización de procesos y desarrollo web.",
  email: "crincones578@gmail.com",
  whatsappDigits: "573012695248",
  whatsappDisplay: "+57 301 269 5248",
  githubOrgUrl: "https://github.com/bloque3",
  githubDotRepoUrl: "https://github.com/bloque3/.github",
  formAction: "https://formsubmit.co/crincones578@gmail.com",
  formAjaxAction: "https://formsubmit.co/ajax/crincones578@gmail.com",
  location: "Colombia · Colectivo Remoto",
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BLOQUE3_CONFIG.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export interface WhatsAppIntent {
  id: string;
  label: string;
  tag: string;
  placeholder: string;
  defaultTopic: string;
}

export const WHATSAPP_INTENTS: WhatsAppIntent[] = [
  {
    id: "automatizacion",
    label: "Automatizar un proceso",
    tag: "Operaciones / n8n / APIs",
    placeholder: "Ej. Sincronizar pedidos de WhatsApp con Excel o facturación",
    defaultTopic: "automatizar un proceso en mi empresa",
  },
  {
    id: "sitio-web",
    label: "Hacer un sitio web",
    tag: "Landing / Marca / Catálogo",
    placeholder: "Ej. Página rápida con dominio propio y catálogo de servicios",
    defaultTopic: "crear un sitio web para mi negocio",
  },
  {
    id: "idea-negocio",
    label: "Idea de negocio / App",
    tag: "MVP / Móvil / SaaS",
    placeholder: "Ej. Validar una app o producto digital desde cero",
    defaultTopic: "revisar una idea de negocio y su viabilidad técnica",
  },
  {
    id: "contribuir",
    label: "Contribuir en un proyecto",
    tag: "Open source / Juegos / Tools",
    placeholder: "Ej. Me interesa aportar en herramientas dev o juegos",
    defaultTopic: "contribuir en los proyectos de Bloque3",
  },
];

export interface ServiceItem {
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    index: "01",
    title: "Automatización de procesos",
    summary:
      "Eliminamos trabajo manual repetitivo conectando tus herramientas actuales: WhatsApp, correo, hojas de cálculo, CRMs, webhooks y APIs internas.",
    deliverables: [
      "Flujos automáticos con n8n y scripts en Python",
      "Integración de formularios, reportes y alertas",
      "Conexión entre sistemas sin cambiar tu operación",
    ],
  },
  {
    index: "02",
    title: "Sitios web y plataformas",
    summary:
      "Diseñamos y publicamos sitios web rápidos, claros y listos para convertir visitas en conversaciones reales por WhatsApp o formularios.",
    deliverables: [
      "Landing pages y sitios corporativos con dominio propio",
      "Paneles administrativos y sistemas web en Astro o Angular",
      "Arquitectura ligera con hosting de bajo o cero costo",
    ],
  },
  {
    index: "03",
    title: "Laboratorio de productos propios",
    summary:
      "Además de proyectos para clientes, incubamos nuestras propias herramientas para desarrolladores, juegos y aplicaciones móviles — algunas open source y otras privadas.",
    deliverables: [
      "Apps Flutter offline-first y utilidades de ingeniería",
      "Backends en .NET, Spring Boot o AWS SAM (serverless)",
      "Juegos, simuladores y prototipos iterativos",
    ],
  },
];

export interface ProjectItem {
  index: string;
  slug: "byte-lab" | "acumulapp" | "synapse-labs" | "agendate";
  name: string;
  category: string;
  visibility: "Código privado · Docs públicas" | "Código privado";
  repoSlug: string;
  description: string;
  highlights: string[];
  stack: string[];
  publicUrl?: {
    label: string;
    url: string;
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    index: "01",
    slug: "byte-lab",
    name: "ByteLab",
    category: "Herramienta dev · Offline-first",
    visibility: "Código privado · Docs públicas",
    repoSlug: "bloque3/byte-lab",
    description:
      "Estación de trabajo móvil 100 % offline para electrónica digital y arquitectura de computadores (com.bloque3.bytelab). Sin telemetría, sin red y pensada para estudio y laboratorio.",
    highlights: [
      "Simulador interactivo de circuitos lógicos con canvas EDA",
      "Conversor multi-base en tiempo real hasta 64 bits",
      "Inspector IEEE-754 y laboratorio de ALU con banderas CCR",
    ],
    stack: ["Flutter", "Dart", "CustomPainter", "Offline-first"],
    publicUrl: {
      label: "Ficha pública y privacidad",
      url: "https://github.com/bloque3/.github/blob/main/bytelab/README.md",
    },
  },
  {
    index: "02",
    slug: "acumulapp",
    name: "Acumulapp",
    category: "Producto comercial · Fidelización QR",
    visibility: "Código privado",
    repoSlug: "bloque3/acumulapp",
    description:
      "Plataforma de fidelización digital con tarjetas de sellos y códigos QR para conectar clientes con comercios locales sin depender de tarjetas físicas.",
    highlights: [
      "App móvil para clientes, dueños y colaboradores",
      "Backend serverless en AWS Lambda + DynamoDB Single Table",
      "Panel administrativo web y sitio público en Astro",
    ],
    stack: ["Flutter", "AWS SAM", "Python 3.12", "DynamoDB", "Astro"],
  },
  {
    index: "03",
    slug: "synapse-labs",
    name: "Synapse Labs",
    category: "Juego / Simulación · AI Startup",
    visibility: "Código privado",
    repoSlug: "bloque3/idle-game",
    description:
      "Idle tycoon de una startup de cómputo e inferencia IA con diorama isométrico 3D de oficina. Construido con arquitectura hexagonal lista para sincronización remota.",
    highlights: [
      "Núcleo de inferencia neural y gestión térmica de racks",
      "Motor de simulación puro en Dart separado de la UI",
      "Árbol de I+D, flota GPU y contratos SLA dinámicos",
    ],
    stack: ["Flutter", "BLoC", "CustomPainter", "Arquitectura Hexagonal"],
  },
  {
    index: "04",
    slug: "agendate",
    name: "Agéndate (Appointify)",
    category: "Plataforma SaaS · Servicios y citas",
    visibility: "Código privado",
    repoSlug: "bloque3/appointments",
    description:
      "Sistema SaaS para agendamiento y gestión de citas en servicios domésticos e informales con reglas comerciales reales, disponibilidad y analítica por prestador.",
    highlights: [
      "Monolito modular en .NET 10 con MediatR (CQRS)",
      "Colas asíncronas de notificación y pruebas de integración",
      "Portal web SPA desarrollado en Angular 20",
    ],
    stack: ["C# .NET 10", "PostgreSQL", "Angular 20", "Docker"],
  },
];
