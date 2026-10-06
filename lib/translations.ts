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
            es: "Ingeniero de Sistemas · CTO de EYWA Agro · Fundador de startups Deep Tech · Apasionado por resolver problemas estructurales con datos e inteligencia artificial.",
            en: "Systems Engineer · CTO at EYWA Agro · Deep Tech startup founder · Passionate about solving structural problems with data and artificial intelligence.",
        },
        bio_1: {
            es: "Soy Angel Francisco Kaqui Aquino — Bachiller en Ingeniería de Sistemas por la UNHEVAL, Quinto Superior (2.° puesto de 59 egresados, promedio 15.19), con intercambios en la Universidad Nacional Mayor de San Marcos (Lima) y la Universidad de Manizales (Colombia).",
            en: "I'm Angel Francisco Kaqui Aquino — Bachelor in Systems Engineering from UNHEVAL, top fifth of my class (2nd out of 59 graduates, GPA 15.19), with exchange programs at Universidad Nacional Mayor de San Marcos (Lima) and Universidad de Manizales (Colombia).",
        },
        bio_2: {
            es: "Como Tech Lead y Fundador, lidero startups de base tecnológica (Deep Tech) que resuelven problemas estructurales con datos: EYWA (DataOps & Sostenibilidad), donde soy CTO de EYWA Agro —ganador de ProInnóvate InnovaSuyu Cusco 2026—, Lucy (HealthTech & IA) y BioMulch Andino (Biotecnología & Economía Circular).",
            en: "As Tech Lead and Founder, I lead technology-based startups (Deep Tech) that solve structural problems with data: EYWA (DataOps & Sustainability), where I'm CTO of EYWA Agro —winner of ProInnóvate InnovaSuyu Cusco 2026—, Lucy (HealthTech & AI) and BioMulch Andino (Biotechnology & Circular Economy).",
        },
        bio_3: {
            es: "Actualmente apoyo la gestión de ciencia, tecnología e innovación en el CONCYTEC. Investigo en semilleros financiados por la UNHEVAL, soy co-inventor de LazarIA (patente en proceso) y participo en el 2026 Aspire Leaders Program.",
            en: "I currently support science, technology and innovation management at CONCYTEC. I do research in UNHEVAL-funded research groups, I'm co-inventor of LazarIA (patent pending) and I'm part of the 2026 Aspire Leaders Program.",
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
        "exp-concytec": {
            role:        { es: "Practicante Profesional — Innovación y Transferencia Tecnológica", en: "Professional Intern — Innovation and Technology Transfer" },
            period:      { es: "Abr 2026 – Presente", en: "Apr 2026 – Present" },
            description: { es: "Subdirección de Innovación y Transferencia Tecnológica: gestión de instrumentos de ciencia, tecnología e innovación (CTI), datos y sistemas internos en el marco de la gestión pública.", en: "Innovation and Technology Transfer Sub-directorate: management of science, technology and innovation (STI) instruments, data and internal systems within public management." },
            bullets: {
                es: [
                    "Apoyo en la gestión de instrumentos de CTI, Beneficios Tributarios para I+D+i (Ley N.° 30309) e iniciativas del Estado en materia de investigación",
                    "Elaboración y seguimiento de Términos de Referencia (TDR), verificación de entregables y seguimiento a equipos de desarrollo",
                    "Procesos de QA (pruebas funcionales y de carga) y auditoría de software institucional",
                    "Normalización e integración de bases de datos y automatización de procesos con Python",
                    "Reportes estadísticos e indicadores de CTI con Power BI, y apoyo en eventos nacionales como la Semana de la Innovación y Vinculatech",
                ],
                en: [
                    "Support in managing STI instruments, R&D+i Tax Benefits (Law No. 30309) and government research initiatives",
                    "Drafting and follow-up of Terms of Reference (ToR), deliverable verification and oversight of development teams",
                    "QA processes (functional and load testing) and auditing of institutional software",
                    "Database normalization and integration, and process automation with Python",
                    "Statistical reports and STI indicators with Power BI, and support for national events such as Innovation Week and Vinculatech",
                ],
            },
        },
        "exp-startups": {
            role:        { es: "Fundador & Tech Lead · CTO de EYWA Agro", en: "Founder & Tech Lead · CTO at EYWA Agro" },
            period:      { es: "2023 – Presente",         en: "2023 – Present" },
            description: { es: "Fundador y líder técnico de startups Deep Tech orientadas a resolver problemas estructurales mediante el uso inteligente de datos, con base operativa en Huánuco, Lima y Pasco.", en: "Founder and technical lead of Deep Tech startups focused on solving structural problems through intelligent use of data, with an operational base in Huánuco, Lima and Pasco." },
            bullets: {
                es: [
                    "EYWA Agro (CTO): IA, blockchain y trazabilidad digital para cadenas agropecuarias de Cusco — Ganador ProInnóvate InnovaSuyu Cusco 2026 (1 de 10 entre 147 postulantes)",
                    "EYWA: plataforma de DataOps y monitoreo climático con módulos de diagnóstico empresarial y scoring digital en Next.js",
                    "Lucy: solución HealthTech con IA para salud preventiva — ganadora de Incuval Ventures 2024, admitida en UTEC Ventures y Kaman 2026",
                    "BioMulch Andino: biotecnología y economía circular — Finalista II Hackathon de Química Verde 2026",
                    "Administración de servidores VPS, despliegue con Docker y gestión de proyectos con PMBOK y Scrum",
                ],
                en: [
                    "EYWA Agro (CTO): AI, blockchain and digital traceability for agricultural value chains in Cusco — Winner of ProInnóvate InnovaSuyu Cusco 2026 (1 of 10 among 147 applicants)",
                    "EYWA: DataOps and climate monitoring platform with business diagnostics and digital scoring modules in Next.js",
                    "Lucy: HealthTech AI solution for preventive health — winner of Incuval Ventures 2024, admitted to UTEC Ventures and Kaman 2026",
                    "BioMulch Andino: biotechnology and circular economy — Finalist at II Green Chemistry Hackathon 2026",
                    "VPS server management, Docker deployments and project management with PMBOK and Scrum",
                ],
            },
        },
        "exp-handin": {
            role:        { es: "Programador de Sistemas (Full Stack)", en: "Systems Developer (Full Stack)" },
            period:      { es: "Ene 2025 – Oct 2025", en: "Jan 2025 – Oct 2025" },
            description: { es: "Responsable integral del desarrollo full stack de la plataforma web principal de la empresa.", en: "Fully responsible for the full stack development of the company's main web platform." },
            bullets: {
                es: [
                    "Definición de la arquitectura de software y del diseño de la plataforma",
                    "Implementación de funcionalidades clave con React.js y Flutter",
                    "Despliegue a producción y evolución continua de la plataforma",
                ],
                en: [
                    "Defined the software architecture and platform design",
                    "Implemented key features with React.js and Flutter",
                    "Production deployment and continuous evolution of the platform",
                ],
            },
        },
        "exp-atids": {
            role:        { es: "Consultor Junior — Programa Agrotech Perú", en: "Junior Consultant — Agrotech Peru Program" },
            period:      { es: "Ene 2025 – Ene 2026", en: "Jan 2025 – Jan 2026" },
            description: { es: "Diseño e implementación de soluciones tecnológicas para el desarrollo sostenible del sector agrícola peruano.", en: "Design and implementation of technology solutions for the sustainable development of Peru's agricultural sector." },
            bullets: {
                es: [
                    "Gestión de proyectos de desarrollo web para el programa Agrotech Perú",
                    "Impulso de EYWA DataOps, iniciativa de datos e IA asociada al programa (3.° puesto en Lanza tu Startup Regional)",
                ],
                en: [
                    "Web development project management for the Agrotech Peru program",
                    "Drove EYWA DataOps, a data and AI initiative linked to the program (3rd place at Lanza tu Startup Regional)",
                ],
            },
        },
        "exp-genes": {
            role:        { es: "Pasante de Tecnología y Sistemas",  en: "Technology & Systems Intern" },
            period:      { es: "Ene 2024 – Dic 2024",               en: "Jan 2024 – Dec 2024" },
            description: { es: "Desarrollo de soluciones tecnológicas orientadas a la sostenibilidad y el escalamiento de emprendimientos nacionales.", en: "Development of technology solutions for the sustainability and scaling of Peruvian ventures." },
            bullets: {
                es: [
                    "Migración y modernización de la infraestructura web bajo Next.js",
                    "Gestión de datos, evaluación de proyectos de impacto y optimización de procesos",
                    "Colaboración en proyectos de tecnología cívica y participación ciudadana",
                ],
                en: [
                    "Migration and modernization of the web infrastructure to Next.js",
                    "Data management, impact project evaluation and process optimization",
                    "Collaboration on civic technology and citizen participation projects",
                ],
            },
        },
        "exp-education": {
            role:        { es: "Bachiller en Ingeniería de Sistemas — Quinto Superior",  en: "Bachelor in Systems Engineering — Top Fifth of Class" },
            period:      { es: "2020 – 2025",  en: "2020 – 2025" },
            description: { es: "Quinto Superior: 2.° puesto de 59 egresados, promedio acumulado 15.19. Formación complementada con intercambios en la UNMSM (Lima) y la Universidad de Manizales (Colombia).", en: "Top fifth of class: 2nd out of 59 graduates, cumulative GPA 15.19. Complemented by exchange programs at UNMSM (Lima) and Universidad de Manizales (Colombia)." },
            bullets: {
                es: [
                    "2.° puesto de 59 egresados · Promedio acumulado 15.19 (Constancia de Orden de Mérito, 2026)",
                    "Intercambio estudiantil en la Universidad Nacional Mayor de San Marcos (Lima, 2025) y en la Universidad de Manizales (Colombia, 2024)",
                    "Tesis en curso: Sistema Inteligente para Optimizar la Atención Psicopedagógica en estudiantes de la FIISMEC (Mishisimi)",
                    "Investigador en semilleros financiados por la UNHEVAL: KotoshTech y Pulsera inteligente (2025)",
                    "Participante del 2026 Aspire Leaders Program y seleccionado en Jóvenes, Ciudadanía y Democracia (JCD)",
                ],
                en: [
                    "2nd out of 59 graduates · Cumulative GPA 15.19 (Merit Ranking Certificate, 2026)",
                    "Student exchange at Universidad Nacional Mayor de San Marcos (Lima, 2025) and Universidad de Manizales (Colombia, 2024)",
                    "Thesis in progress: Intelligent System to Optimize Psycho-pedagogical Support for FIISMEC students (Mishisimi)",
                    "Researcher in UNHEVAL-funded research groups: KotoshTech and Smart bracelet (2025)",
                    "Participant in the 2026 Aspire Leaders Program and selected for Youth, Citizenship and Democracy (JCD)",
                ],
            },
        },
    },
    projectData: {
        eywa: {
            name:            { es: "EYWA — DataOps & Sostenibilidad",    en: "EYWA — DataOps & Sustainability" },
            description:     { es: "Datos, IA y trazabilidad digital para la sostenibilidad. EYWA Agro: ganador ProInnóvate InnovaSuyu Cusco 2026.", en: "Data, AI and digital traceability for sustainability. EYWA Agro: winner of ProInnóvate InnovaSuyu Cusco 2026." },
            longDescription: { es: "EYWA es una plataforma Deep Tech enfocada en la transparencia de datos y el monitoreo climático, con módulos de diagnóstico empresarial y scoring digital desarrollados en Next.js sobre infraestructura VPS propia. Como CTO de EYWA Agro, lidero su vertical agropecuaria: IA, blockchain y trazabilidad digital para valorizar cadenas agropecuarias sostenibles de Cusco, proyecto ganador del Concurso Emprendimientos Innovadores InnovaSuyu Cusco 2026 de ProInnóvate (1 de 10 proyectos financiados entre 147 postulantes).", en: "EYWA is a Deep Tech platform focused on data transparency and climate monitoring, with business diagnostics and digital scoring modules built in Next.js on self-managed VPS infrastructure. As CTO of EYWA Agro, I lead its agricultural vertical: AI, blockchain and digital traceability to add value to sustainable agricultural chains in Cusco — winner of ProInnóvate's InnovaSuyu Cusco 2026 Innovative Ventures Competition (1 of 10 funded projects among 147 applicants)." },
        },
        lucy: {
            name:            { es: "Lucy — HealthTech & IA",             en: "Lucy — HealthTech & AI" },
            description:     { es: "Solución de inteligencia artificial aplicada a la salud preventiva, admitida en evaluación de aceleradoras UTEC Ventures y Kaman 2026.", en: "Artificial intelligence solution for preventive health, admitted for evaluation at UTEC Ventures and Kaman 2026 accelerators." },
            longDescription: { es: "Lucy es una solución HealthTech con IA aplicada a la salud preventiva. Bajo un rigor técnico absoluto, prescinde de herramientas no-code para garantizar una arquitectura propia y escalable. El proyecto fue admitido en fases de evaluación de aceleradoras como UTEC Ventures y Kaman 2026, y cuenta con interfaces web (Next.js) y análisis clínico asistido por visión computacional.", en: "Lucy is a HealthTech solution with AI applied to preventive health. With absolute technical rigor, it avoids no-code tools to guarantee a proprietary, scalable architecture. The project was admitted for evaluation at accelerators such as UTEC Ventures and Kaman 2026, featuring web interfaces (Next.js) and computer vision-assisted clinical analysis." },
        },
        lazaria: {
            name:            { es: "Chaleco Inteligente (LazarIA)",      en: "Smart Vest (LazarIA)" },
            description:     { es: "Wearable con visión artificial para personas con discapacidad visual — 1.° Puesto Nacional en Buenas Prácticas de Gestión Inclusiva 2025 · Patente en proceso.", en: "Wearable with computer vision for visually impaired people — 1st Place National Award in Inclusive Management Best Practices 2025 · Patent pending." },
            longDescription: { es: "LazarIA es un wearable de asistencia para personas con discapacidad visual que integra visión por computador, navegación con la API de Google Maps e IoT. La app Flutter se conecta en tiempo real con el backend NestJS para ofrecer retroalimentación auditiva y háptica, mejorando la autonomía del usuario. Ganó el 1.° Puesto Nacional en Buenas Prácticas de Gestión Inclusiva 2025 (CONADIS) y el 2.° puesto en el Concurso de Invenciones UNHEVAL 2025; su patente se encuentra en proceso ante INDECOPI, con la UNHEVAL como solicitante.", en: "LazarIA is an assistive wearable for visually impaired people that integrates computer vision, Google Maps API navigation and IoT. The Flutter app connects in real time with the NestJS backend to provide auditory and haptic feedback, improving user autonomy. It won 1st Place Nationally in Inclusive Management Best Practices 2025 (CONADIS) and 2nd place in the UNHEVAL Inventions Contest 2025; its patent is pending before INDECOPI, with UNHEVAL as applicant." },
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
            description:     { es: "Dispositivo IoT con IA para monitorear la ansiedad de pacientes pediátricos durante la atención odontológica — Semilleros UNHEVAL 2025.", en: "IoT device with AI to monitor anxiety in pediatric patients during dental care — UNHEVAL Research Groups 2025." },
            longDescription: { es: "Proyecto de investigación y desarrollo orientado a la promoción de la salud mental infantil. La pulsera combina sensores IoT, aprendizaje supervisado y una app Flutter para detectar y monitorear niveles de ansiedad en niños durante procedimientos odontológicos, permitiendo intervenciones tempranas y personalizadas. Proyecto ganador del fondo Semilleros de Investigación UNHEVAL 2025.", en: "Research and development project aimed at promoting children's mental health. The bracelet combines IoT sensors, supervised learning and a Flutter app to detect and monitor anxiety levels in children during dental procedures, enabling early and personalized interventions. Winner of the UNHEVAL Research Groups 2025 grant." },
        },
        kotoshtech: {
            name:            { es: "KotoshTech",                         en: "KotoshTech" },
            description:     { es: "Plataforma IoT y Machine Learning para la gestión productiva del ganado — Semilleros Proyectos Especiales UNHEVAL 2025.", en: "IoT and Machine Learning platform for livestock management — UNHEVAL Special Research Projects 2025." },
            longDescription: { es: "KotoshTech, desarrollada por el semillero de investigación Work Mates de la UNHEVAL, moderniza la ganadería del Centro de Producción Kotosh (Huánuco) con monitoreo continuo e inteligencia artificial: visión por computadora para el seguimiento del comportamiento de cada animal, control de peso y curvas de crecimiento, fichas individuales y procesamiento automático de video de los corrales. Proyecto ganador del fondo Semilleros – Proyectos Especiales UNHEVAL 2025.", en: "KotoshTech, developed by UNHEVAL's Work Mates research group, modernizes cattle farming at the Kotosh Production Center (Huánuco) through continuous monitoring and artificial intelligence: computer vision to track each animal's behavior, weight control and growth curves, individual records and automatic processing of corral video. Winner of the UNHEVAL Special Research Projects 2025 grant." },
        },
        xrai: {
            name:            { es: "xRAI",                               en: "xRAI" },
            description:     { es: "Anonimizador de radiografías panorámicas con visión por computadora — 1.° Puesto VII Concurso de Innovación UNHEVAL 2025.", en: "Panoramic X-ray anonymizer with computer vision — 1st Place at the VII UNHEVAL Innovation Contest 2025." },
            longDescription: { es: "xRAI elimina los datos del paciente incrustados en los píxeles de radiografías panorámicas mediante segmentación con YOLOv8, y organiza la salida en paquetes trazables conforme a normas ISO. Incluye una aplicación gráfica, un modo por lotes para uso técnico y un revisor de segmentación. Ganó el 1.° puesto en el VII Concurso de Innovación UNHEVAL 2025.", en: "xRAI removes patient data burned into the pixels of panoramic X-rays using YOLOv8 segmentation, and organizes the output into traceable packages compliant with ISO standards. It includes a desktop app, a batch mode for technical use and a segmentation reviewer. It won 1st place at the VII UNHEVAL Innovation Contest 2025." },
        },
        mishisimi: {
            name:            { es: "Mishisimi",                          en: "Mishisimi" },
            description:     { es: "Sistema inteligente con Machine Learning para optimizar la atención psicopedagógica — proyecto de tesis con título aprobado.", en: "Intelligent Machine Learning system to optimize psycho-pedagogical support — thesis project with approved title." },
            longDescription: { es: "Mishisimi es el proyecto de tesis colectiva «Implementación de un Sistema Inteligente para Optimizar la Atención Psicopedagógica en estudiantes de la FIISMEC, UNHEVAL», con título aprobado y proyecto en evaluación por jurado. El sistema analiza patrones de comportamiento y rendimiento académico para generar alertas e intervenciones tempranas en estudiantes, aplicando modelos supervisados y no supervisados sobre datos recolectados en entornos universitarios.", en: "Mishisimi is the joint thesis project 'Implementation of an Intelligent System to Optimize Psycho-pedagogical Support for FIISMEC students, UNHEVAL', with an approved title and the proposal under committee review. The system analyzes behavioral patterns and academic performance to generate early alerts and interventions for students, applying supervised and unsupervised models on data collected in university environments." },
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
