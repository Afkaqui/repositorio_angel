export type Lang = "es" | "en";

export const translations = {
    nav: {
        about:       { es: "Sobre mí",         en: "About" },
        projects:    { es: "Proyectos",         en: "Projects" },
        experience:  { es: "Experiencia",       en: "Experience" },
        awards:      { es: "Reconocimientos",   en: "Awards" },
        contact:     { es: "Contacto",          en: "Contact" },
    },
    hero: {
        available:   { es: "Disponible para proyectos", en: "Available for work" },
        titles_es:   ["Ingeniero de Sistemas", "Tech Lead & Fundador", "Full Stack Developer", "Builder de Productos"],
        titles_en:   ["Systems Engineer", "Tech Lead & Founder", "Full Stack Developer", "Product Builder"],
        description: {
            es: "Fundador de startups Deep Tech y arquitecto de soluciones con propósito. Del dato al producto — con enfoque en impacto real, escalabilidad y rigor técnico.",
            en: "Deep Tech startup founder and purpose-driven solution architect. From data to product — focused on real impact, scalability and technical rigor.",
        },
        cta_projects: { es: "Ver Proyectos →",  en: "View Projects →" },
        cta_contact:  { es: "Contactar",         en: "Contact" },
    },
    about: {
        label:    { es: "01. Sobre mí",  en: "01. About" },
        title_1:  { es: "Arquitecto de soluciones",  en: "Solution architect" },
        title_2:  { es: "con propósito",             en: "with purpose" },
        subtitle: {
            es: "Ingeniero de Sistemas (2.° Puesto · Orden de Mérito, UNHEVAL) · Fundador de startups Deep Tech · Apasionado por resolver problemas estructurales con datos e inteligencia artificial.",
            en: "Systems Engineer (2nd Place · Merit Award, UNHEVAL) · Deep Tech startup founder · Passionate about solving structural problems with data and artificial intelligence.",
        },
        bio_1: {
            es: "Soy Angel Francisco Kaqui Aquino — Egresado de Ingeniería de Sistemas en la UNHEVAL — 2.° Puesto de 59 alumnos · Promedio 15.19 (Constancia de Orden de Mérito N° 0026.10), con estudios en la Universidad de Manizales (Colombia) y especialización en Business Intelligence y Gestión de Proyectos en la UNMSM (Lima).",
            en: "I'm Angel Francisco Kaqui Aquino — Systems Engineering graduate from UNHEVAL — 2nd place out of 59 students · GPA 15.19 (Merit Certificate No. 0026.10), with academic exchange at Universidad de Manizales (Colombia) and a specialization in Business Intelligence & Project Management at UNMSM (Lima).",
        },
        bio_2: {
            es: "Como Tech Lead y Fundador, lidero startups de base tecnológica (Deep Tech) que buscan resolver problemas estructurales mediante el uso inteligente de datos: EYWA (DataOps & Sostenibilidad), Lucy (HealthTech & IA) y BioMulch Andino (Biotecnología & Economía Circular).",
            en: "As Tech Lead and Founder, I lead technology-based startups (Deep Tech) that solve structural problems through intelligent use of data: EYWA (DataOps & Sustainability), Lucy (HealthTech & AI) and BioMulch Andino (Biotechnology & Circular Economy).",
        },
        bio_3: {
            es: "Graduado del Aspire Leaders Program (fundado por profesores de Harvard) y seleccionado en Jóvenes, Ciudadanía y Democracia (JCD). Mi base operativa se extiende entre Huánuco, Lima y Pasco.",
            en: "Graduate of the Aspire Leaders Program (founded by Harvard professors) and selected for the Youth, Citizenship and Democracy (JCD) program. My operational base spans Huánuco, Lima and Pasco.",
        },
        stat_projects: { es: "Proyectos",  en: "Projects" },
        stat_awards:   { es: "Premios",    en: "Awards" },
        stat_years:    { es: "Años exp.",  en: "Yrs. exp." },
    },
    projects: {
        label:    { es: "02. Proyectos",              en: "02. Projects" },
        title:    { es: "Lo que he ",                 en: "What I've " },
        title_2:  { es: "construido",                 en: "built" },
        subtitle: {
            es: "Proyectos reales que resuelven problemas reales — con tecnología moderna y código que escala.",
            en: "Real projects solving real problems — with modern technology and code that scales.",
        },
        featured: { es: "Proyecto destacado",  en: "Featured project" },
        others:   { es: "— otros proyectos",   en: "— other projects" },
        status: {
            production:  { es: "En producción",  en: "In production" },
            development: { es: "En desarrollo",  en: "In development" },
            research:    { es: "Investigación",  en: "Research" },
        },
    },
    experience: {
        label:    { es: "03. Experiencia",  en: "03. Experience" },
        title:    { es: "Mi ",              en: "My " },
        title_2:  { es: "trayectoria",      en: "journey" },
        subtitle: {
            es: "Del aula a la producción — construyendo experiencia en cada proyecto.",
            en: "From the classroom to production — building experience with every project.",
        },
        type: {
            work:      { es: "Trabajo",    en: "Work" },
            freelance: { es: "Freelance",  en: "Freelance" },
            education: { es: "Educación",  en: "Education" },
        },
    },
    awards: {
        label:    { es: "04. Reconocimientos",                           en: "04. Awards" },
        title:    { es: "Logros & ",                                     en: "Achievements & " },
        title_2:  { es: "Premios",                                       en: "Awards" },
        subtitle: {
            es: "Competencias, hackathons y fondos ganados a lo largo del camino.",
            en: "Competitions, hackathons and grants won along the way.",
        },
        type: {
            winner:         { es: "🏆 Ganador",       en: "🏆 Winner" },
            finalist:       { es: "🥈 Finalista",     en: "🥈 Finalist" },
            representative: { es: "🌟 Representante", en: "🌟 Representative" },
        },
    },
    contact: {
        label:    { es: "05. Contacto",  en: "05. Contact" },
        title:    { es: "¿Trabajamos ",  en: "Work " },
        title_2:  { es: "juntos?",       en: "together?" },
        subtitle: {
            es: "Estoy disponible para proyectos freelance, colaboraciones o conversaciones sobre tecnología. ¡No dudes en escribirme!",
            en: "Available for freelance projects, collaborations or tech conversations. Don't hesitate to reach out!",
        },
        comment: { es: "// encuéntrame en",  en: "// find me on" },
        send:    { es: "Enviar mensaje →",   en: "Send message →" },
    },
    experienceData: {
        "exp-startups": {
            role:        { es: "Tech Lead & Fundador",    en: "Tech Lead & Founder" },
            period:      { es: "2023 – Presente",         en: "2023 – Present" },
            description: { es: "Fundador y líder técnico de startups Deep Tech orientadas a resolver problemas estructurales mediante el uso inteligente de datos, con base operativa en Huánuco, Lima y Pasco.", en: "Founder and technical lead of Deep Tech startups focused on solving structural problems through intelligent use of data, with an operational base in Huánuco, Lima and Pasco." },
            bullets: {
                es: [
                    "EYWA: plataforma de DataOps y monitoreo climático — pivot a modelo de suscripción con módulos de diagnóstico empresarial y scoring digital en Next.js",
                    "Lucy: solución HealthTech con IA para salud preventiva — arquitectura propia y escalable, admitida en UTEC Ventures y Kaman 2026",
                    "BioMulch Andino: biotecnología y economía circular — Finalista II Hackathon de Química Verde 2026",
                    "Administración de servidores VPS, despliegue con Docker y Kubernetes, gestión de proyectos con PMBOK y SCRUM",
                ],
                en: [
                    "EYWA: DataOps and climate monitoring platform — pivoted to a subscription model with business diagnostics and digital scoring modules in Next.js",
                    "Lucy: HealthTech AI solution for preventive health — proprietary scalable architecture, admitted to UTEC Ventures and Kaman 2026",
                    "BioMulch Andino: biotechnology and circular economy — Finalist at II Green Chemistry Hackathon 2026",
                    "VPS server management, deployment with Docker and Kubernetes, project management with PMBOK and SCRUM",
                ],
            },
        },
        "exp-genes": {
            role:        { es: "Pasante Pre-Profesional",  en: "Pre-Professional Intern" },
            period:      { es: "2024",                     en: "2024" },
            description: { es: "Modernización de infraestructura web y estructuración de estrategias de captación de talento para iniciativas de impacto democrático.", en: "Web infrastructure modernization and talent acquisition strategy structuring for democratic impact initiatives." },
            bullets: {
                es: [
                    "Migración y modernización de la infraestructura web bajo Next.js",
                    "Estructuración de estrategias de captación de talento para iniciativas de impacto democrático",
                    "Colaboración en proyectos de tecnología cívica y participación ciudadana",
                ],
                en: [
                    "Migration and modernization of the web infrastructure to Next.js",
                    "Structuring of talent acquisition strategies for democratic impact initiatives",
                    "Collaboration on civic technology and citizen participation projects",
                ],
            },
        },
        "exp-education": {
            role:        { es: "Ingeniería de Sistemas — 2.° Puesto · Orden de Mérito",  en: "Systems Engineering — 2nd Place · Merit Award" },
            period:      { es: "2019 – 2024",  en: "2019 – 2024" },
            description: { es: "Egresado con Constancia de Orden de Mérito N° 0026.10 — 2.° Puesto de 59 alumnos, promedio acumulado 15.19 (año académico 2025). Formación complementada con intercambio en Colombia y especialización en Lima.", en: "Graduated with Merit Certificate No. 0026.10 — 2nd place out of 59 students, cumulative GPA 15.19 (academic year 2025). Training complemented by an exchange in Colombia and a specialization in Lima." },
            bullets: {
                es: [
                    "2.° Puesto de 59 alumnos · Promedio acumulado 15.19 · Constancia de Orden de Mérito N° 0026.10 (UNHEVAL, 2025)",
                    "Intercambio académico en la Universidad de Manizales, Colombia",
                    "Especialización en Business Intelligence y Gestión de Proyectos — UNMSM, Lima",
                    "Investigación de tesis en ML aplicado al bienestar psicopedagógico (Mishisimi)",
                    "Graduado del Aspire Leaders Program (fundado por profesores de Harvard)",
                    "Seleccionado en el programa Jóvenes, Ciudadanía y Democracia (JCD)",
                ],
                en: [
                    "2nd place out of 59 students · Cumulative GPA 15.19 · Merit Certificate No. 0026.10 (UNHEVAL, 2025)",
                    "Academic exchange at Universidad de Manizales, Colombia",
                    "Specialization in Business Intelligence and Project Management — UNMSM, Lima",
                    "Thesis research in ML applied to psychopedagogical wellbeing (Mishisimi)",
                    "Graduate of the Aspire Leaders Program (founded by Harvard professors)",
                    "Selected for the Youth, Citizenship and Democracy (JCD) program",
                ],
            },
        },
    },
    projectData: {
        eywa: {
            name:            { es: "EYWA — DataOps & Sostenibilidad",    en: "EYWA — DataOps & Sustainability" },
            description:     { es: "Plataforma de transparencia y monitoreo climático con modelo de suscripción para validación de planes de negocio y tokens.", en: "Transparency and climate monitoring platform with a subscription model for business plan and token validation." },
            longDescription: { es: "Como fundador, lidero EYWA: una plataforma Deep Tech enfocada en la transparencia de datos y el monitoreo climático. Ha pivotado hacia un modelo de suscripción para la validación de planes de negocio y tokens, con un roadmap técnico que incluye módulos de diagnóstico empresarial y scoring digital, todo desarrollado en Next.js sobre infraestructura VPS propia.", en: "As founder, I lead EYWA: a Deep Tech platform focused on data transparency and climate monitoring. It has pivoted to a subscription model for business plan and token validation, with a technical roadmap including corporate diagnostics and digital scoring modules, all built in Next.js on self-managed VPS infrastructure." },
        },
        lucy: {
            name:            { es: "Lucy — HealthTech & IA",             en: "Lucy — HealthTech & AI" },
            description:     { es: "Solución de inteligencia artificial aplicada a la salud preventiva, admitida en evaluación de aceleradoras UTEC Ventures y Kaman 2026.", en: "Artificial intelligence solution for preventive health, admitted for evaluation at UTEC Ventures and Kaman 2026 accelerators." },
            longDescription: { es: "Lucy es una solución HealthTech con IA aplicada a la salud preventiva. Bajo un rigor técnico absoluto, prescinde de herramientas no-code para garantizar una arquitectura propia y escalable. El proyecto fue admitido en fases de evaluación de aceleradoras como UTEC Ventures y Kaman 2026, y cuenta con interfaces web (Next.js) y análisis clínico asistido por visión computacional.", en: "Lucy is a HealthTech solution with AI applied to preventive health. With absolute technical rigor, it avoids no-code tools to guarantee a proprietary, scalable architecture. The project was admitted for evaluation at accelerators such as UTEC Ventures and Kaman 2026, featuring web interfaces (Next.js) and computer vision-assisted clinical analysis." },
        },
        lazaria: {
            name:            { es: "Chaleco Inteligente (LazarIA)",      en: "Smart Vest (LazarIA)" },
            description:     { es: "Wearable con visión artificial para personas con discapacidad visual — 1.° Puesto Nacional en Buenas Prácticas de Gestión Inclusiva 2025.", en: "Wearable with computer vision for visually impaired people — 1st Place National Award in Inclusive Management Best Practices 2025." },
            longDescription: { es: "LazarIA es un wearable de asistencia para personas con discapacidad visual que integra visión por computador, navegación con la API de Google Maps e IoT. La app Flutter se conecta en tiempo real con el backend NestJS para ofrecer retroalimentación auditiva y háptica, mejorando la autonomía del usuario. Ganó el 1.° Puesto Nacional en Buenas Prácticas de Gestión Inclusiva (UNHEVAL / Ministerio de Transportes, 2025).", en: "LazarIA is an assistive wearable for visually impaired people that integrates computer vision, Google Maps API navigation and IoT. The Flutter app connects in real time with the NestJS backend to provide auditory and haptic feedback, improving user autonomy. It won 1st Place Nationally in Inclusive Management Best Practices (UNHEVAL / Ministry of Transport, 2025)." },
        },
        "biomulch-andino": {
            name:            { es: "BioMulch Andino",                    en: "BioMulch Andino" },
            description:     { es: "Proyecto de biotecnología y economía circular — Finalista de la II Hackathon de Química Verde 2026.", en: "Biotechnology and circular economy project — Finalist at the II Green Chemistry Hackathon 2026." },
            longDescription: { es: "BioMulch Andino aplica principios de biotecnología y economía circular al sector agrícola andino. El proyecto alcanzó la final de la II Hackathon de Química Verde 2026, demostrando la viabilidad de ingeniería aplicada a la sostenibilidad. Integra análisis de datos para optimizar la producción de mulch biodegradable y reducir residuos agroindustriales.", en: "BioMulch Andino applies biotechnology and circular economy principles to Andean agriculture. The project reached the final of the II Green Chemistry Hackathon 2026, demonstrating the viability of engineering applied to sustainability. It integrates data analysis to optimize biodegradable mulch production and reduce agro-industrial waste." },
        },
        "cib-pucallpa": {
            name:            { es: "CIB Pucallpa — Nodo de Bioeconomía", en: "CIB Pucallpa — Bioeconomy Hub" },
            description:     { es: "Centro de Innovación y Biodiversidad Sostenible en la Amazonía peruana. Seleccionado entre los 500 Mejores Proyectos 2026 · Premios Verdes (Economía Circular).", en: "Center for Innovation and Sustainable Biodiversity in the Peruvian Amazon. Selected among the Top 500 Projects 2026 · Premios Verdes (Circular Economy)." },
            longDescription: { es: "El CIB Pucallpa nace para resolver una falla sistémica en la Amazonía: la depredación de la biodiversidad por falta de modelos económicos competitivos frente a la extracción ilegal. Mediante Ingeniería Financiera Aplicada y un modelo Bio-Lean Startups (Ley 30309), se atrae capital privado reduciendo el riesgo de inversión hasta en un 60%. Incluye trazabilidad digital, procesos industriales modulares de bajo impacto y articulación con comunidades nativas de Ucayali. Reconocido entre los 500 Mejores Proyectos 2026 por Premios Verdes en la categoría Economía Circular.", en: "CIB Pucallpa was created to solve a systemic failure in the Amazon: biodiversity loss due to a lack of competitive economic models against illegal extraction. Through Applied Financial Engineering and a Bio-Lean Startups model (Law 30309), private capital is attracted while reducing investment risk by up to 60%. It includes digital traceability, low-impact modular industrial processes and engagement with native communities in Ucayali. Recognized among the Top 500 Projects 2026 by Premios Verdes in the Circular Economy category." },
        },
        "pulsera-inteligente": {
            name:            { es: "Pulsera Inteligente para Ansiedad Pediátrica", en: "Smart Bracelet for Pediatric Anxiety" },
            description:     { es: "Dispositivo IoT con IA para monitorear la ansiedad de pacientes pediátricos durante atención odontológica.", en: "IoT device with AI to monitor anxiety in pediatric patients during dental care." },
            longDescription: { es: "Proyecto de investigación y desarrollo orientado a la promoción de la salud mental infantil. La pulsera combina sensores IoT, aprendizaje supervisado y una app Flutter para detectar y monitorear niveles de ansiedad en niños durante procedimientos odontológicos, permitiendo intervenciones tempranas y personalizadas.", en: "Research and development project aimed at promoting children's mental health. The bracelet combines IoT sensors, supervised learning and a Flutter app to detect and monitor anxiety levels in children during dental procedures, enabling early and personalized interventions." },
        },
        mishisimi: {
            name:            { es: "Mishisimi",                          en: "Mishisimi" },
            description:     { es: "Sistema basado en Machine Learning para el bienestar psicopedagógico — eje central de la investigación de tesis.", en: "Machine Learning system for psychopedagogical wellbeing — core of the thesis research." },
            longDescription: { es: "Mishisimi es el proyecto de investigación de tesis, orientado al bienestar psicopedagógico mediante Machine Learning. El sistema analiza patrones de comportamiento y rendimiento académico para generar alertas e intervenciones tempranas en estudiantes, aplicando modelos supervisados y no supervisados sobre datos recolectados en entornos universitarios.", en: "Mishisimi is the thesis research project focused on psychopedagogical wellbeing through Machine Learning. The system analyzes behavioral patterns and academic performance to generate early alerts and interventions for students, applying supervised and unsupervised models on data collected in university environments." },
        },
        cottya: {
            name:            { es: "COTTYA",                             en: "COTTYA" },
            description:     { es: "Sistema de trazabilidad textil para garantizar la cadena de custodia y autenticidad en la industria de la moda.", en: "Textile traceability system to guarantee chain of custody and authenticity in the fashion industry." },
            longDescription: { es: "COTTYA es una plataforma de trazabilidad textil que utiliza tecnología blockchain e identificadores digitales para garantizar la transparencia en toda la cadena de suministro de la industria textil, desde la fibra hasta el consumidor final.", en: "COTTYA is a textile traceability platform that uses blockchain technology and digital identifiers to guarantee transparency throughout the textile supply chain, from fiber to end consumer." },
        },
        "boya-inteligente": {
            name:            { es: "Boya Inteligente para Piscigranjas",  en: "Smart Buoy for Fish Farms" },
            description:     { es: "Dispositivo IoT con IA para monitoreo y control automático de parámetros acuícolas en piscigranjas.", en: "IoT device with AI for automatic monitoring and control of aquaculture parameters in fish farms." },
            longDescription: { es: "Sistema de monitoreo acuícola inteligente que despliega boyas equipadas con sensores para medir parámetros críticos del agua en tiempo real. La IA integrada activa mecanismos de control automático, mejorando la productividad y reduciendo la mortalidad en piscigranjas de la región.", en: "Smart aquaculture monitoring system that deploys sensor-equipped buoys to measure critical water parameters in real time. The integrated AI activates automatic control mechanisms, improving productivity and reducing mortality in regional fish farms." },
        },
        intiedu: {
            name:            { es: "IntiEdu",                            en: "IntiEdu" },
            description:     { es: "Plataforma de venta de tickets enfocada en eventos educativos, con metodologías ágiles y stack moderno.", en: "Ticketing platform focused on educational events, with agile methodologies and a modern stack." },
            longDescription: { es: "IntiEdu es una plataforma end-to-end para la comercialización de entradas a eventos educativos. Desarrollada con Next.js en el frontend, NestJS en el backend y Flutter para la app móvil, siguiendo metodologías Agile y Waterfall para una entrega estructurada y eficiente.", en: "IntiEdu is an end-to-end platform for selling tickets to educational events. Built with Next.js on the frontend, NestJS on the backend and Flutter for the mobile app, following Agile and Waterfall methodologies for structured and efficient delivery." },
        },
        "reforestacion-valdizana": {
            name:            { es: "Integración y Reforestación Valdizana", en: "Valdizana Integration & Reforestation" },
            description:     { es: "Proyecto de reforestación de áreas con sistema de riego automatizado mediante IoT.", en: "Reforestation project with an IoT-based automated irrigation system." },
            longDescription: { es: "Iniciativa socioambiental desarrollada en la Universidad Nacional Hermilio Valdizán que combinó reforestación de áreas degradadas con el diseño e implementación de un sistema de riego automatizado basado en IoT, promoviendo el desarrollo sostenible en la región.", en: "Socio-environmental initiative developed at Universidad Nacional Hermilio Valdizán that combined the reforestation of degraded areas with the design and implementation of an IoT-based automated irrigation system, promoting sustainable development in the region." },
        },
    },
} as const;

export function tr<T extends Record<"es" | "en", string>>(
    obj: T,
    lang: Lang,
): string {
    return obj[lang];
}
