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
        id: "eywa",
        name: "EYWA — DataOps & Sostenibilidad",
        description:
            "Plataforma de transparencia y monitoreo climático con modelo de suscripción para validación de planes de negocio y tokens.",
        longDescription:
            "Como fundador, lidero EYWA: una plataforma Deep Tech enfocada en la transparencia de datos y el monitoreo climático. Ha pivotado hacia un modelo de suscripción para la validación de planes de negocio y tokens, con un roadmap técnico que incluye módulos de diagnóstico empresarial y scoring digital, todo desarrollado en Next.js sobre infraestructura VPS propia.",
        tech: ["Next.js", "TypeScript", "Python", "Docker", "VPS", "Power BI", "DataOps"],
        featured: true,
        status: "development",
        accentColor: "#6366f1",
    },
    {
        id: "lucy",
        name: "Lucy — HealthTech & IA",
        description:
            "Solución de inteligencia artificial aplicada a la salud preventiva, admitida en evaluación de aceleradoras UTEC Ventures y Kaman 2026.",
        longDescription:
            "Lucy es una solución HealthTech con IA aplicada a la salud preventiva. Bajo un rigor técnico absoluto, prescinde de herramientas no-code para garantizar una arquitectura propia y escalable. El proyecto fue admitido en fases de evaluación de aceleradoras como UTEC Ventures y Kaman 2026, y cuenta con interfaces web (Next.js) y análisis clínico asistido por visión computacional.",
        tech: ["Next.js", "React", "Python", "Computer Vision", "Machine Learning", "FastAPI"],
        featured: true,
        status: "development",
        accentColor: "#06b6d4",
    },
    {
        id: "lazaria",
        name: "Chaleco Inteligente (LazarIA)",
        description:
            "Wearable con visión artificial para personas con discapacidad visual — 1.° Puesto Nacional en Buenas Prácticas de Gestión Inclusiva 2025.",
        longDescription:
            "LazarIA es un wearable de asistencia para personas con discapacidad visual que integra visión por computador, navegación con la API de Google Maps e IoT. La app Flutter se conecta en tiempo real con el backend NestJS para ofrecer retroalimentación auditiva y háptica, mejorando la autonomía del usuario. Ganó el 1.° Puesto Nacional en Buenas Prácticas de Gestión Inclusiva (UNHEVAL / Ministerio de Transportes, 2025).",
        tech: ["Flutter", "NestJS", "Computer Vision", "API de Google Maps", "IoT"],
        featured: true,
        status: "development",
        accentColor: "#10b981",
    },
    {
        id: "biomulch-andino",
        name: "BioMulch Andino",
        description:
            "Proyecto de biotecnología y economía circular — Finalista de la II Hackathon de Química Verde 2026.",
        longDescription:
            "BioMulch Andino aplica principios de biotecnología y economía circular al sector agrícola andino. El proyecto alcanzó la final de la II Hackathon de Química Verde 2026, demostrando la viabilidad de ingeniería aplicada a la sostenibilidad. Integra análisis de datos para optimizar la producción de mulch biodegradable y reducir residuos agroindustriales.",
        tech: ["Python", "Análisis de Datos", "Biotecnología", "Economía Circular", "Power BI"],
        featured: true,
        status: "research",
        accentColor: "#22c55e",
    },
    {
        id: "pulsera-inteligente",
        name: "Pulsera Inteligente para Ansiedad Pediátrica",
        description:
            "Dispositivo IoT con IA para monitorear la ansiedad de pacientes pediátricos durante atención odontológica.",
        longDescription:
            "Proyecto de investigación y desarrollo orientado a la promoción de la salud mental infantil. La pulsera combina sensores IoT, aprendizaje supervisado y una app Flutter para detectar y monitorear niveles de ansiedad en niños durante procedimientos odontológicos, permitiendo intervenciones tempranas y personalizadas.",
        tech: ["Flutter", "IoT", "Aprendizaje Supervisado", "Diseño 3D", "Python"],
        featured: false,
        status: "development",
        accentColor: "#f59e0b",
    },
    {
        id: "mishisimi",
        name: "Mishisimi",
        description:
            "Sistema basado en Machine Learning para el bienestar psicopedagógico — eje central de la investigación de tesis.",
        longDescription:
            "Mishisimi es el proyecto de investigación de tesis, orientado al bienestar psicopedagógico mediante Machine Learning. El sistema analiza patrones de comportamiento y rendimiento académico para generar alertas e intervenciones tempranas en estudiantes, aplicando modelos supervisados y no supervisados sobre datos recolectados en entornos universitarios.",
        tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "FastAPI"],
        featured: false,
        status: "research",
        accentColor: "#8b5cf6",
    },
    {
        id: "cottya",
        name: "COTTYA",
        description:
            "Sistema de trazabilidad textil para garantizar la cadena de custodia y autenticidad en la industria de la moda.",
        longDescription:
            "COTTYA es una plataforma de trazabilidad textil que utiliza tecnología blockchain e identificadores digitales para garantizar la transparencia en toda la cadena de suministro de la industria textil, desde la fibra hasta el consumidor final.",
        tech: ["Next.js", "Blockchain", "Python", "API REST", "PostgreSQL"],
        featured: false,
        status: "development",
        accentColor: "#ec4899",
    },
    {
        id: "boya-inteligente",
        name: "Boya Inteligente para Piscigranjas",
        description:
            "Dispositivo IoT con IA para monitoreo y control automático de parámetros acuícolas en piscigranjas.",
        longDescription:
            "Sistema de monitoreo acuícola inteligente que despliega boyas equipadas con sensores para medir parámetros críticos del agua en tiempo real. La IA integrada activa mecanismos de control automático, mejorando la productividad y reduciendo la mortalidad en piscigranjas de la región.",
        tech: ["IoT", "Python", "Machine Learning", "Diseño 3D", "Sensores"],
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
        tech: ["Next.js", "NestJS", "Flutter", "PostgreSQL", "SCRUM"],
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
        tech: ["IoT", "Arduino", "Python", "Desarrollo Sostenible"],
        featured: false,
        status: "production",
        accentColor: "#22c55e",
    },
];

/* ── Experience ── */
export const experience: Experience[] = [
    {
        id: "exp-startups",
        role: "Tech Lead & Fundador",
        company: "EYWA · Lucy · BioMulch Andino",
        period: "2023 – Presente",
        location: "Huánuco / Lima / Pasco",
        description:
            "Fundador y líder técnico de startups Deep Tech orientadas a resolver problemas estructurales mediante el uso inteligente de datos, con base operativa en Huánuco, Lima y Pasco.",
        bullets: [
            "EYWA: plataforma de DataOps y monitoreo climático — pivot a modelo de suscripción con módulos de diagnóstico empresarial y scoring digital en Next.js",
            "Lucy: solución HealthTech con IA para salud preventiva — arquitectura propia y escalable, admitida en UTEC Ventures y Kaman 2026",
            "BioMulch Andino: biotecnología y economía circular — Finalista II Hackathon de Química Verde 2026",
            "Administración de servidores VPS, despliegue con Docker y Kubernetes, gestión de proyectos con PMBOK y SCRUM",
        ],
        tech: ["Next.js", "Python", "Docker", "Kubernetes", "VPS", "Power BI", "PMBOK", "SCRUM"],
        type: "freelance",
    },
    {
        id: "exp-genes",
        role: "Pasante Pre-Profesional",
        company: "GENES PERÚ",
        period: "2024",
        location: "Lima, Perú",
        description:
            "Modernización de infraestructura web y estructuración de estrategias de captación de talento para iniciativas de impacto democrático.",
        bullets: [
            "Migración y modernización de la infraestructura web bajo Next.js",
            "Estructuración de estrategias de captación de talento para iniciativas de impacto democrático",
            "Colaboración en proyectos de tecnología cívica y participación ciudadana",
        ],
        tech: ["Next.js", "React", "TypeScript", "Git"],
        type: "work",
    },
    {
        id: "exp-education",
        role: "Ingeniería de Sistemas — Décimo Superior",
        company: "Universidad Nacional Hermilio Valdizán (UNHEVAL)",
        period: "2019 – 2024",
        location: "Huánuco, Perú",
        description:
            "Egresado con distinción académica como parte del Décimo Superior. Formación complementada con intercambio en Colombia y especialización en Lima.",
        bullets: [
            "Décimo Superior — distinción académica en la carrera de Ingeniería de Sistemas",
            "Intercambio académico en la Universidad de Manizales, Colombia",
            "Especialización en Business Intelligence y Gestión de Proyectos — UNMSM, Lima",
            "Investigación de tesis en ML aplicado al bienestar psicopedagógico (Mishisimi)",
            "Graduado del Aspire Leaders Program (fundado por profesores de Harvard)",
            "Seleccionado en el programa Jóvenes, Ciudadanía y Democracia (JCD)",
        ],
        tech: ["Java", "Python", "SQL", "Machine Learning", "Power BI", "CEPLAN"],
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
        skills: ["Node.js", "Python", "FastAPI", "NestJS", "Java", "REST API"],
    },
    {
        category: "Datos & BI",
        icon: "📊",
        skills: ["Power BI", "PostgreSQL", "MongoDB", "MySQL", "Prisma", "Pandas"],
    },
    {
        category: "AI / ML",
        icon: "🤖",
        skills: ["Computer Vision", "Scikit-learn", "LangChain", "OpenAI API", "Prompt Engineering"],
    },
    {
        category: "DevOps & Infraestructura",
        icon: "🛠️",
        skills: ["Docker", "Kubernetes", "VPS", "Git", "Linux", "Vercel"],
    },
    {
        category: "Gestión de Proyectos",
        icon: "📋",
        skills: ["PMBOK", "PMO", "SCRUM", "KPIs", "CEPLAN", "Gestión Ágil"],
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
        id: "award-biomulch-2026",
        title: "Finalista — II Hackathon de Química Verde 2026",
        organization: "Hackathon Química Verde",
        year: "2026",
        type: "finalist",
        projectRef: "biomulch-andino",
        accentColor: "#22c55e",
    },
    {
        id: "award-14",
        title: "1.° Puesto — Buenas Prácticas de Gestión Inclusiva 2025 (Nivel Nacional) — LazarIA",
        organization: "UNHEVAL / Ministerio de Transportes",
        year: "2025",
        type: "winner",
        projectRef: "lazaria",
        accentColor: "#f59e0b",
    },
    {
        id: "award-12",
        title: "1.° Puesto — VII Concurso de Innovación 2025",
        organization: "UNHEVAL",
        year: "2025",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-13",
        title: "2.° Puesto — VII Concurso de Invenciones 2025",
        organization: "UNHEVAL",
        year: "2025",
        type: "finalist",
        accentColor: "#8b5cf6",
    },
    {
        id: "award-15",
        title: "3.° Puesto — Lanza tu Startup Regional — EywaDataOps",
        organization: "Programa Regional",
        year: "2025",
        type: "finalist",
        projectRef: "eywa",
        accentColor: "#8b5cf6",
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
        title: "Finalista — Hult Prize",
        organization: "USIL",
        year: "2025",
        type: "finalist",
        accentColor: "#8b5cf6",
    },
    {
        id: "award-aspire",
        title: "Graduado — Aspire Leaders Program",
        organization: "Aspire (fundado por profesores de Harvard)",
        year: "2025",
        type: "representative",
        accentColor: "#6366f1",
    },
    {
        id: "award-jcd",
        title: "Seleccionado — Jóvenes, Ciudadanía y Democracia (JCD)",
        organization: "Programa JCD",
        year: "2025",
        type: "representative",
        accentColor: "#6366f1",
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
];
