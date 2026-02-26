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
        name: "Eywa",
        description:
            "Plataforma de análisis e inteligencia artificial que procesa datos en tiempo real para generar insights accionables.",
        longDescription:
            "Eywa es un sistema de análisis avanzado que combina procesamiento de datos en tiempo real con modelos de AI/ML para proporcionar decisiones inteligentes automatizadas. Incluye dashboards interactivos, alertas configurables y pipelines de datos escalables.",
        tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "OpenAI"],
        githubUrl: "https://github.com/afkaqui/eywa",
        featured: true,
        status: "production",
        accentColor: "#6366f1",
    },
    {
        id: "lucy",
        name: "Lucy",
        description:
            "Asistente conversacional inteligente con procesamiento de lenguaje natural y contexto persistente de conversaciones.",
        longDescription:
            "Lucy es una IA conversacional diseñada para interacciones de alto valor. Implementa memoria contextual, comprensión semántica profunda y flujos de conversación personalizables. Orientada a la automatización de procesos de negocio complejos.",
        tech: ["React", "Node.js", "LangChain", "OpenAI", "MongoDB", "WebSocket", "TailwindCSS"],
        githubUrl: "https://github.com/afkaqui/lucy",
        featured: true,
        status: "development",
        accentColor: "#06b6d4",
    },
    {
        id: "portfolio",
        name: "afkaqui.dev",
        description:
            "Portafolio personal desarrollado con Next.js 16, Tailwind CSS v4 y arquitectura basada en componentes.",
        longDescription:
            "Este portafolio fue construido con un enfoque en rendimiento, accesibilidad y diseño premium. Incluye un sistema de diseño personalizado, animaciones CSS, modo oscuro nativo y estructura completamente basada en componentes TypeScript.",
        tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "React 19"],
        githubUrl: "https://github.com/afkaqui/portfolio",
        liveUrl: "/",
        featured: false,
        status: "production",
        accentColor: "#818cf8",
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
