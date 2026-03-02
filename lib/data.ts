export interface Project {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    tech: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    status: "production" | "development" | "research";
    accentColor: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    location: string;
    description: string;
    bullets: string[];
    tech: string[];
    type: "work" | "education" | "freelance";
}

export interface SkillGroup {
    category: string;
    icon: string;
    skills: string[];
}

/* ── Projects ── */
export const projects: Project[] = [
    {
        id: "ewya-dataops",
        name: "EWYA DataOPS",
        description:
            "Plataforma de DataOps con inteligencia artificial para gestión y análisis de datos en tiempo real, asociada a ATIDS.",
        longDescription:
            "EWYA DataOPS es una plataforma integral de operaciones de datos impulsada por IA, desarrollada en asociación con ATIDS - Espacio de Cocreación y Desarrollo Sostenible. Combina gestión de proyectos, pipelines de datos y modelos de inteligencia artificial para entregar insights acionables y acelerar la toma de decisiones basada en datos.",
        tech: ["Inteligencia Artificial", "Gestión de Proyectos", "Desarrollo Web"],
        featured: true,
        status: "production",
        accentColor: "#6366f1",
    },
    {
        id: "pulsera-inteligente",
        name: "Pulsera Inteligente para Ansiedad Pediátrica",
        description:
            "Dispositivo IoT con IA para monitorear la ansiedad de pacientes pediátricos durante atención odontológica.",
        longDescription:
            "Proyecto de investigación y desarrollo orientado a la promoción de la salud mental infantil. La pulsera combina sensores IoT, aprendizaje supervisado y una app Flutter para detectar y monitorear niveles de ansiedad en niños durante procedimientos odontológicos, permitiendo intervenciones tempranas y personalizadas.",
        tech: ["Flutter", "IoT", "Aprendizaje Supervisado", "Diseño 3D", "Inteligencia Artificial", "Gestión de Proyectos"],
        featured: true,
        status: "development",
        accentColor: "#f59e0b",
    },
    {
        id: "lazaria",
        name: "Chaleco Inteligente (LazarIA)",
        description:
            "Chaleco inteligente impulsado con visión artificial para personas con discapacidad visual.",
        longDescription:
            "LazarIA es un wearable de asistencia para personas con discapacidad visual que integra visión por computador, navegación mediante la API de Google Maps e IoT. La app Flutter conecta en tiempo real con el backend NestJS para ofrecer retroalimentación auditiva y háptica al usuario, mejorando su autonomía y seguridad.",
        tech: ["Flutter", "NestJS", "Visión por Computador", "API de Google Maps", "IoT", "Gestión de Proyectos"],
        featured: true,
        status: "development",
        accentColor: "#10b981",
    },
    {
        id: "lucy",
        name: "Lucy — Detección Temprana de Cáncer de Piel",
        description:
            "Algoritmo de IA para detección temprana de cáncer de piel con interfaz web y móvil.",
        longDescription:
            "Lucy es un sistema de diagnóstico asistido por inteligencia artificial desarrollado en la Universidad Nacional Hermilio Valdizán. Utiliza modelos de visión computacional para analizar imágenes dermatológicas y detectar lesiones potencialmente malignas de forma temprana. Cuenta con interfaces web (React.js / Next.js) y móvil (Flutter) para maximizar su alcance.",
        tech: ["Inteligencia Artificial", "Flutter", "React.js", "Next.js", "Programación"],
        featured: true,
        status: "development",
        accentColor: "#06b6d4",
    },
    {
        id: "boya-inteligente",
        name: "Boya Inteligente para Piscigranjas",
        description:
            "Dispositivo IoT con IA para monitoreo y control automático de parámetros acuícolas en piscigranjas.",
        longDescription:
            "Sistema de monitoreo acuícola inteligente que despliega boyas equipadas con sensores para medir parámetros críticos del agua en tiempo real. La IA integrada activa mecanismos de control automático, mejorando la productividad y reduciendo la mortalidad en piscigranjas de la región.",
        tech: ["IoT", "Inteligencia Artificial", "Diseño 3D", "Programación", "Gestión de Proyectos"],
        featured: false,
        status: "development",
        accentColor: "#3b82f6",
    },
    {
        id: "intiedu",
        name: "IntiEdu",
        description:
            "Plataforma de venta de tickets enfocada en eventos educativos, con metodologías ágiles y stack moderno.",
        longDescription:
            "IntiEdu es una plataforma end-to-end para la comercialización de entradas a eventos educativos. Desarrollada con Next.js en el frontend, NestJS en el backend y Flutter para la app móvil, siguiendo metodologías Agile y Waterfall para una entrega estructurada y eficiente.",
        tech: ["Next.js", "NestJS", "Flutter", "Metodologías Agile", "Gestión de Proyectos"],
        featured: false,
        status: "production",
        accentColor: "#8b5cf6",
    },
    {
        id: "reforestacion-valdizana",
        name: "Integración y Reforestación Valdizana",
        description:
            "Proyecto de reforestación de áreas con sistema de riego automatizado mediante IoT.",
        longDescription:
            "Iniciativa socioambiental desarrollada en la Universidad Nacional Hermilio Valdizán que combinó reforestación de áreas degradadas con el diseño e implementación de un sistema de riego automatizado basado en IoT, promoviendo el desarrollo sostenible en la región.",
        tech: ["IoT", "Desarrollo Sostenible"],
        featured: false,
        status: "production",
        accentColor: "#22c55e",
    },
];

/* ── Experience ── */
export const experience: Experience[] = [
    {
        id: "exp1",
        role: "Full Stack Developer",
        company: "Freelance / Proyectos Propios",
        period: "2023 – Presente",
        location: "Remoto",
        description:
            "Desarrollo de plataformas web y móviles completas utilizando tecnologías modernas del ecosistema JavaScript y Python.",
        bullets: [
            "Diseño y desarrollo de Eywa: plataforma de análisis con AI integrada",
            "Desarrollo de Lucy: asistente conversacional con LangChain y OpenAI",
            "Arquitectura de APIs RESTful y GraphQL con Node.js y FastAPI",
            "Despliegue y gestión de infraestructura con Docker y servicios cloud",
        ],
        tech: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL", "Docker"],
        type: "freelance",
    },
    {
        id: "exp2",
        role: "Ingeniero de Sistemas",
        company: "Formación Académica",
        period: "2019 – 2024",
        location: "Perú",
        description:
            "Carrera universitaria en Ingeniería de Sistemas con especialización en desarrollo de software y arquitecturas escalables.",
        bullets: [
            "Especialización en algoritmos, estructuras de datos y sistemas distribuidos",
            "Proyectos integradores con tecnologías de backend y frontend modernas",
            "Investigación en inteligencia artificial y procesamiento de datos",
            "Liderazgo de equipos en proyectos colaborativos de desarrollo",
        ],
        tech: ["Java", "Python", "SQL", "Redes", "Arquitectura de Software"],
        type: "education",
    },
];

/* ── Skills ── */
export const skills: SkillGroup[] = [
    {
        category: "Frontend",
        icon: "⚡",
        skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML5", "CSS3"],
    },
    {
        category: "Backend",
        icon: "🔧",
        skills: ["Node.js", "Python", "FastAPI", "Express.js", "REST API", "GraphQL"],
    },
    {
        category: "Base de Datos",
        icon: "🗄️",
        skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"],
    },
    {
        category: "AI / ML",
        icon: "🤖",
        skills: ["OpenAI API", "LangChain", "Python ML", "Embeddings", "Prompt Engineering"],
    },
    {
        category: "DevOps & Tools",
        icon: "🛠️",
        skills: ["Docker", "Git", "GitHub", "Linux", "Vercel", "Postman"],
    },
];

/* ── Awards ── */
export interface Award {
    id: string;
    title: string;
    organization: string;
    year: string;
    type: "winner" | "finalist" | "representative";
    projectRef?: string;
    accentColor: string;
}

export const awards: Award[] = [
    {
        id: "award-1",
        title: "Ganador Concurso 2G",
        organization: "UNHEVAL",
        year: "2023",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-2",
        title: "Representante Delegación Peruana — VIII Encuentro de Jóvenes",
        organization: "Alianza del Pacífico",
        year: "2023",
        type: "representative",
        accentColor: "#6366f1",
    },
    {
        id: "award-3",
        title: "Ganadores Hackathon Nodo Norte 2023",
        organization: "KOICA – INHA",
        year: "2023",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-4",
        title: "Representante Parlamento Joven",
        organization: "Gobierno Regional de Huánuco",
        year: "2023",
        type: "representative",
        accentColor: "#6366f1",
    },
    {
        id: "award-5",
        title: "Ganador Fondo — Semilleros de Investigación 2023",
        organization: "UNHEVAL",
        year: "2023",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-6",
        title: "Ganador Startup Incuval Ventures 2024 — Lucy",
        organization: "Incuval Ventures",
        year: "2024",
        type: "winner",
        projectRef: "lucy",
        accentColor: "#f59e0b",
    },
    {
        id: "award-7",
        title: "Ganador Hackathon Inspiratec 2024 Pachaqtec",
        organization: "Inspiratec",
        year: "2024",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-8",
        title: "Ganador Hackathon Edutech Solagri",
        organization: "Solagri",
        year: "2024",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-9",
        title: "Ganador Fondo — Semilleros de Investigación 2025",
        organization: "UNHEVAL",
        year: "2025",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-10",
        title: "Ganador Fondo — Semilleros Proyectos Especiales 2025",
        organization: "UNHEVAL",
        year: "2025",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-11",
        title: "Finalista Hult Prize",
        organization: "USIL",
        year: "2025",
        type: "finalist",
        accentColor: "#8b5cf6",
    },
    {
        id: "award-12",
        title: "1° Puesto — VII Concurso de Innovación 2025",
        organization: "UNHEVAL",
        year: "2025",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-13",
        title: "2° Puesto — VII Concurso de Invenciones 2025",
        organization: "UNHEVAL",
        year: "2025",
        type: "finalist",
        accentColor: "#8b5cf6",
    },
    {
        id: "award-14",
        title: "1° Puesto — Buenas Prácticas de Gestión Inclusiva 2025 (Nivel Nacional) — LazarIA",
        organization: "UNHEVAL / Ministerio de Transportes",
        year: "2025",
        type: "winner",
        projectRef: "lazaria",
        accentColor: "#f59e0b",
    },
    {
        id: "award-15",
        title: "3° Puesto — Lanza tu Startup Regional — EywaDataOps",
        organization: "Programa Regional",
        year: "2025",
        type: "finalist",
        projectRef: "ewya-dataops",
        accentColor: "#8b5cf6",
    },
];
