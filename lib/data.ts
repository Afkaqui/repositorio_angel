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
            "Datos, IA y trazabilidad digital para la sostenibilidad. EYWA Agro: ganador ProInnóvate InnovaSuyu Cusco 2026.",
        longDescription:
            "EYWA es una plataforma Deep Tech enfocada en la transparencia de datos y el monitoreo climático, con módulos de diagnóstico empresarial y scoring digital desarrollados en Next.js sobre infraestructura VPS propia. Como CTO de EYWA Agro, lidero su vertical agropecuaria: IA, blockchain y trazabilidad digital para valorizar cadenas agropecuarias sostenibles de Cusco, proyecto ganador del Concurso Emprendimientos Innovadores InnovaSuyu Cusco 2026 de ProInnóvate (1 de 10 proyectos financiados entre 147 postulantes).",
        tech: ["Next.js", "TypeScript", "Python", "Blockchain", "Docker", "VPS", "Power BI"],
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
            "Wearable con visión artificial para personas con discapacidad visual — 1.° Puesto Nacional en Buenas Prácticas de Gestión Inclusiva 2025 · Patente en proceso.",
        longDescription:
            "LazarIA es un wearable de asistencia para personas con discapacidad visual que integra visión por computador, navegación con la API de Google Maps e IoT. La app Flutter se conecta en tiempo real con el backend NestJS para ofrecer retroalimentación auditiva y háptica, mejorando la autonomía del usuario. Ganó el 1.° Puesto Nacional en Buenas Prácticas de Gestión Inclusiva 2025 (CONADIS) y el 2.° puesto en el Concurso de Invenciones UNHEVAL 2025; su patente se encuentra en proceso ante INDECOPI, con la UNHEVAL como solicitante.",
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
            "Dispositivo IoT con IA para monitorear la ansiedad de pacientes pediátricos durante la atención odontológica — Semilleros UNHEVAL 2025.",
        longDescription:
            "Proyecto de investigación y desarrollo orientado a la promoción de la salud mental infantil. La pulsera combina sensores IoT, aprendizaje supervisado y una app Flutter para detectar y monitorear niveles de ansiedad en niños durante procedimientos odontológicos, permitiendo intervenciones tempranas y personalizadas. Proyecto ganador del fondo Semilleros de Investigación UNHEVAL 2025.",
        tech: ["ESP32", "C++", "Flutter", "IoT", "Aprendizaje Supervisado", "Python"],
        featured: false,
        status: "development",
        accentColor: "#f59e0b",
    },
    {
        id: "kotoshtech",
        name: "KotoshTech",
        description:
            "Plataforma IoT y Machine Learning para la gestión productiva del ganado — Semilleros Proyectos Especiales UNHEVAL 2025.",
        longDescription:
            "KotoshTech, desarrollada por el semillero de investigación Work Mates de la UNHEVAL, moderniza la ganadería del Centro de Producción Kotosh (Huánuco) con monitoreo continuo e inteligencia artificial: visión por computadora para el seguimiento del comportamiento de cada animal, control de peso y curvas de crecimiento, fichas individuales y procesamiento automático de video de los corrales. Proyecto ganador del fondo Semilleros – Proyectos Especiales UNHEVAL 2025.",
        tech: ["Next.js", "NestJS", "FastAPI", "YOLOv8", "PostgreSQL", "ESP32", "Raspberry Pi"],
        liveUrl: "https://sistema-kotosh.com/",
        featured: false,
        status: "research",
        accentColor: "#0ea5e9",
    },
    {
        id: "xrai",
        name: "xRAI",
        description:
            "Anonimizador de radiografías panorámicas con visión por computadora — 1.° Puesto VII Concurso de Innovación UNHEVAL 2025.",
        longDescription:
            "xRAI elimina los datos del paciente incrustados en los píxeles de radiografías panorámicas mediante segmentación con YOLOv8, y organiza la salida en paquetes trazables conforme a normas ISO. Incluye una aplicación gráfica, un modo por lotes para uso técnico y un revisor de segmentación. Ganó el 1.° puesto en el VII Concurso de Innovación UNHEVAL 2025.",
        tech: ["Python", "YOLOv8", "Visión por Computadora", "Anonimización", "ISO"],
        featured: false,
        status: "development",
        accentColor: "#6366f1",
    },
    {
        id: "mishisimi",
        name: "Mishisimi",
        description:
            "Sistema inteligente con Machine Learning para optimizar la atención psicopedagógica — proyecto de tesis con título aprobado.",
        longDescription:
            "Mishisimi es el proyecto de tesis colectiva «Implementación de un Sistema Inteligente para Optimizar la Atención Psicopedagógica en estudiantes de la FIISMEC, UNHEVAL», con título aprobado y proyecto en evaluación por jurado. El sistema analiza patrones de comportamiento y rendimiento académico para generar alertas e intervenciones tempranas en estudiantes, aplicando modelos supervisados y no supervisados sobre datos recolectados en entornos universitarios.",
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
        id: "cib-pucallpa",
        name: "CIB Pucallpa — Nodo de Bioeconomía",
        description:
            "Centro de Innovación y Biodiversidad Sostenible en la Amazonía peruana. Seleccionado entre los 500 Mejores Proyectos 2026 · Premios Verdes (Economía Circular).",
        longDescription:
            "El CIB Pucallpa nace para resolver una falla sistémica en la Amazonía: la depredación de la biodiversidad por falta de modelos económicos competitivos frente a la extracción ilegal. Mediante Ingeniería Financiera Aplicada y un modelo Bio-Lean Startups (Ley 30309), se atrae capital privado reduciendo el riesgo de inversión hasta en un 60%. Incluye trazabilidad digital, procesos industriales modulares de bajo impacto y articulación con comunidades nativas de Ucayali. Reconocido entre los 500 Mejores Proyectos 2026 por Premios Verdes en la categoría Economía Circular.",
        tech: ["Bioeconomía", "Economía Circular", "Ingeniería Financiera", "TRL", "Trazabilidad Digital", "Ley 30309"],
        liveUrl: "https://500-mejores.premiosverdes.org/es/proyecto-500-mejores?proyecto=hub-de-innovacion-sostenible-eduardo-noriega",
        featured: false,
        status: "development",
        accentColor: "#22c55e",
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
        id: "exp-concytec",
        role: "Practicante Profesional — Innovación y Transferencia Tecnológica",
        company: "CONCYTEC",
        companyUrl: "https://www.gob.pe/concytec",
        period: "Abr 2026 – Presente",
        location: "Lima, Perú",
        description:
            "Subdirección de Innovación y Transferencia Tecnológica: gestión de instrumentos de ciencia, tecnología e innovación (CTI), datos y sistemas internos en el marco de la gestión pública.",
        bullets: [
            "Apoyo en la gestión de instrumentos de CTI, Beneficios Tributarios para I+D+i (Ley N.° 30309) e iniciativas del Estado en materia de investigación",
            "Elaboración y seguimiento de Términos de Referencia (TDR), verificación de entregables y seguimiento a equipos de desarrollo",
            "Procesos de QA (pruebas funcionales y de carga) y auditoría de software institucional",
            "Normalización e integración de bases de datos y automatización de procesos con Python",
            "Reportes estadísticos e indicadores de CTI con Power BI, y apoyo en eventos nacionales como la Semana de la Innovación y Vinculatech",
        ],
        tech: ["Python", "pandas", "PostgreSQL", "Power BI", "Node.js", "Docker", "QA"],
        type: "work",
    },
    {
        id: "exp-startups",
        role: "Fundador & Tech Lead · CTO de EYWA Agro",
        company: "EYWA · Lucy · BioMulch Andino",
        period: "2023 – Presente",
        location: "Huánuco / Lima / Pasco",
        description:
            "Fundador y líder técnico de startups Deep Tech orientadas a resolver problemas estructurales mediante el uso inteligente de datos, con base operativa en Huánuco, Lima y Pasco.",
        bullets: [
            "EYWA Agro (CTO): IA, blockchain y trazabilidad digital para cadenas agropecuarias de Cusco — Ganador ProInnóvate InnovaSuyu Cusco 2026 (1 de 10 entre 147 postulantes)",
            "EYWA: plataforma de DataOps y monitoreo climático con módulos de diagnóstico empresarial y scoring digital en Next.js",
            "Lucy: solución HealthTech con IA para salud preventiva — ganadora de Incuval Ventures 2024, admitida en UTEC Ventures y Kaman 2026",
            "BioMulch Andino: biotecnología y economía circular — Finalista II Hackathon de Química Verde 2026",
            "Administración de servidores VPS, despliegue con Docker y gestión de proyectos con PMBOK y Scrum",
        ],
        tech: ["Next.js", "Python", "Docker", "VPS", "Blockchain", "Power BI", "SCRUM"],
        type: "freelance",
    },
    {
        id: "exp-handin",
        role: "Programador de Sistemas (Full Stack)",
        company: "Handin",
        period: "Ene 2025 – Oct 2025",
        location: "Trujillo, Perú · Remoto",
        description:
            "Responsable integral del desarrollo full stack de la plataforma web principal de la empresa.",
        bullets: [
            "Definición de la arquitectura de software y del diseño de la plataforma",
            "Implementación de funcionalidades clave con React.js y Flutter",
            "Despliegue a producción y evolución continua de la plataforma",
        ],
        tech: ["React", "Flutter", "TypeScript", "Git"],
        type: "work",
    },
    {
        id: "exp-atids",
        role: "Consultor Junior — Programa Agrotech Perú",
        company: "ATIDS — Espacio de Cocreación y Desarrollo Sostenible",
        period: "Ene 2025 – Ene 2026",
        location: "Perú",
        description:
            "Diseño e implementación de soluciones tecnológicas para el desarrollo sostenible del sector agrícola peruano.",
        bullets: [
            "Gestión de proyectos de desarrollo web para el programa Agrotech Perú",
            "Impulso de EYWA DataOps, iniciativa de datos e IA asociada al programa (3.° puesto en Lanza tu Startup Regional)",
        ],
        tech: ["Next.js", "Python", "Gestión de proyectos"],
        type: "work",
    },
    {
        id: "exp-genes",
        role: "Pasante de Tecnología y Sistemas",
        company: "GENES PERÚ — Gremio Nacional de Emprendimientos Sostenibles",
        period: "Ene 2024 – Dic 2024",
        location: "Perú · Remoto",
        description:
            "Desarrollo de soluciones tecnológicas orientadas a la sostenibilidad y el escalamiento de emprendimientos nacionales.",
        bullets: [
            "Migración y modernización de la infraestructura web bajo Next.js",
            "Gestión de datos, evaluación de proyectos de impacto y optimización de procesos",
            "Colaboración en proyectos de tecnología cívica y participación ciudadana",
        ],
        tech: ["Next.js", "React", "TypeScript", "Git"],
        type: "work",
    },
    {
        id: "exp-education",
        role: "Bachiller en Ingeniería de Sistemas — Quinto Superior",
        company: "Universidad Nacional Hermilio Valdizán (UNHEVAL)",
        period: "2020 – 2025",
        location: "Huánuco, Perú",
        description:
            "Quinto Superior: 2.° puesto de 59 egresados, promedio acumulado 15.19. Formación complementada con intercambios en la UNMSM (Lima) y la Universidad de Manizales (Colombia).",
        bullets: [
            "2.° puesto de 59 egresados · Promedio acumulado 15.19 (Constancia de Orden de Mérito, 2026)",
            "Intercambio estudiantil en la Universidad Nacional Mayor de San Marcos (Lima, 2025) y en la Universidad de Manizales (Colombia, 2024)",
            "Tesis en curso: Sistema Inteligente para Optimizar la Atención Psicopedagógica en estudiantes de la FIISMEC (Mishisimi)",
            "Investigador en semilleros financiados por la UNHEVAL: KotoshTech y Pulsera inteligente (2025)",
            "Participante del 2026 Aspire Leaders Program y seleccionado en Jóvenes, Ciudadanía y Democracia (JCD)",
        ],
        tech: ["Java", "Python", "SQL", "Machine Learning", "Power BI", "Investigación"],
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
        id: "award-proinnovate-2026",
        title: "Ganador — Concurso Emprendimientos Innovadores InnovaSuyu Cusco · EYWA Agro (1 de 10 entre 147)",
        organization: "ProInnóvate",
        year: "2026",
        type: "winner",
        projectRef: "eywa",
        accentColor: "#f59e0b",
    },
    {
        id: "award-premiosverdes-2026",
        title: "500 Mejores Proyectos — Hub de Innovación Sostenible · CIB Pucallpa",
        organization: "Premios Verdes 2026",
        year: "2026",
        type: "representative",
        accentColor: "#22c55e",
    },
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
        title: "1.° Puesto Nacional — Buenas Prácticas de Gestión Inclusiva 2025, categoría Transporte — LazarIA",
        organization: "CONADIS",
        year: "2025",
        type: "winner",
        projectRef: "lazaria",
        accentColor: "#f59e0b",
    },
    {
        id: "award-12",
        title: "1.° Puesto — VII Concurso de Innovación 2025 — xRAI",
        organization: "UNHEVAL",
        year: "2025",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-13",
        title: "2.° Puesto — Concurso de Invenciones 2025 — LazarIA",
        organization: "UNHEVAL",
        year: "2025",
        type: "finalist",
        projectRef: "lazaria",
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
        title: "Ganador Fondo — Semilleros de Investigación 2025 — Pulsera inteligente",
        organization: "UNHEVAL",
        year: "2025",
        type: "winner",
        accentColor: "#f59e0b",
    },
    {
        id: "award-10",
        title: "Ganador Fondo — Semilleros Proyectos Especiales 2025 — KotoshTech",
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
        title: "2026 Aspire Leaders Program",
        organization: "Aspire Institute",
        year: "2026",
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
        id: "award-ponente-2025",
        title: "Ponente — III Congreso Nacional de Semilleros de Investigación",
        organization: "CONCYTEC",
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
        title: "1.° Puesto — Hackathon InspiraTEC 2024",
        organization: "Nova Academy / IDAT",
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
