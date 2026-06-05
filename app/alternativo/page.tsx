"use client";
import Link from "next/link";

const stack = ["Next.js", "TypeScript", "Python", "FastAPI", "Docker", "PostgreSQL", "Power BI", "Machine Learning"];

const projects = [
    {
        name: "EYWA",
        period: "2023 – presente",
        description: "Plataforma de monitoreo de datos y validación de modelos de negocio. Módulos de diagnóstico empresarial y scoring digital. Stack propio sobre VPS con Next.js y Docker.",
        tech: ["Next.js", "Python", "Docker", "VPS", "DataOps"],
        status: "En desarrollo",
        url: null,
    },
    {
        name: "Lucy",
        period: "2024 – presente",
        description: "Herramienta de salud preventiva con procesamiento de imagen médica. Arquitectura diseñada desde cero, sin no-code. Admitida en evaluación de UTEC Ventures y Kaman 2026.",
        tech: ["Next.js", "Python", "Computer Vision", "FastAPI"],
        status: "En desarrollo",
        url: null,
    },
    {
        name: "LazarIA — Chaleco Inteligente",
        period: "2024 – 2025",
        description: "Wearable con visión artificial para asistencia a personas con discapacidad visual. Navegación con Google Maps API, retroalimentación háptica y auditiva vía app Flutter. 1.° Puesto Nacional en Buenas Prácticas de Gestión Inclusiva 2025.",
        tech: ["Flutter", "NestJS", "Computer Vision", "IoT", "Google Maps API"],
        status: "Prototipo funcional",
        url: null,
    },
    {
        name: "BioMulch Andino",
        period: "2025 – 2026",
        description: "Investigación aplicada en biotecnología y economía circular para el sector agrícola andino. Finalista — II Hackathon de Química Verde 2026.",
        tech: ["Python", "Análisis de Datos", "Power BI"],
        status: "Investigación",
        url: null,
    },
    {
        name: "CIB Pucallpa",
        period: "2025 – 2026",
        description: "Centro de Innovación y Biodiversidad Sostenible en la Amazonía peruana. Modelo de financiamiento bajo Ley 30309 para reducir el riesgo de inversión en bionegocios. Seleccionado entre los 500 Mejores Proyectos · Premios Verdes 2026.",
        tech: ["Bioeconomía", "Ingeniería Financiera", "Trazabilidad Digital"],
        status: "En desarrollo",
        url: "https://500-mejores.premiosverdes.org/es/proyecto-500-mejores?proyecto=hub-de-innovacion-sostenible-eduardo-noriega",
    },
    {
        name: "IntiEdu",
        period: "2024",
        description: "Plataforma de venta de tickets para eventos educativos. Frontend en Next.js, backend en NestJS, app móvil en Flutter.",
        tech: ["Next.js", "NestJS", "Flutter", "PostgreSQL"],
        status: "Producción",
        url: null,
    },
];

const experience = [
    {
        role: "Fundador / Tech Lead",
        company: "EYWA · Lucy · BioMulch Andino",
        period: "2023 – presente",
        bullets: [
            "Diseño de arquitectura y desarrollo full-stack de tres productos simultáneos",
            "Gestión de servidores VPS, CI/CD con Docker y Kubernetes",
            "Dirección de equipos pequeños con metodologías SCRUM y PMBOK",
        ],
    },
    {
        role: "Pasante Pre-Profesional",
        company: "GENES PERÚ",
        period: "2024",
        bullets: [
            "Migración de infraestructura web a Next.js",
            "Estrategias de captación de talento para proyectos de tecnología cívica",
        ],
    },
    {
        role: "Ingeniería de Sistemas",
        company: "UNHEVAL",
        period: "2019 – 2024",
        bullets: [
            "Egresado — 2.° Puesto de 59 alumnos · Promedio 15.19 (Orden de Mérito N° 0026.10)",
            "Intercambio académico — Universidad de Manizales, Colombia",
            "Especialización en Business Intelligence y Gestión de Proyectos — UNMSM, Lima",
            "Aspire Leaders Program · Jóvenes, Ciudadanía y Democracia (JCD)",
        ],
    },
];

const awards = [
    { title: "1.° Puesto Nacional — Buenas Prácticas de Gestión Inclusiva 2025", org: "UNHEVAL / Ministerio de Transportes" },
    { title: "1.° Puesto — VII Concurso de Innovación 2025", org: "UNHEVAL" },
    { title: "2.° Puesto — VII Concurso de Invenciones 2025", org: "UNHEVAL" },
    { title: "Ganador Startup — Incuval Ventures 2024", org: "Incuval Ventures" },
    { title: "Ganador Hackathon Inspiratec 2024 Pachaqtec", org: "Inspiratec" },
    { title: "Ganador Fondo — Semilleros de Investigación 2025", org: "UNHEVAL" },
    { title: "Finalista — Hult Prize 2025", org: "USIL" },
    { title: "Finalista — II Hackathon de Química Verde 2026", org: "Hackathon Química Verde" },
    { title: "500 Mejores Proyectos 2026", org: "Premios Verdes · Economía Circular" },
];

export default function Alternativo() {
    return (
        <div style={{ background: "var(--bg-primary)", minHeight: "100vh", color: "var(--text-primary)" }}>
            <div
                style={{
                    maxWidth: "680px",
                    margin: "0 auto",
                    padding: "5rem 1.5rem 8rem",
                }}
            >
                {/* ── Header ── */}
                <header style={{ marginBottom: "4rem" }}>
                    <h1
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontWeight: 700,
                            fontSize: "1.5rem",
                            color: "var(--text-primary)",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Angel Kaqui
                    </h1>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                        Ingeniero de Sistemas · Huánuco, Perú.{" "}
                        Construyo software y lidero equipos pequeños.
                        Trabajo en proyectos que van desde apps web hasta hardware con visión artificial.
                    </p>
                    <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                        {[
                            { label: "GitHub", href: "https://github.com/afkaqui" },
                            { label: "LinkedIn", href: "https://linkedin.com/in/afkaqui" },
                            { label: "Correo", href: "mailto:afkaqui@gmail.com" },
                            { label: "← versión principal", href: "/" },
                        ].map((link) => (
                            link.href.startsWith("/") || link.href.startsWith("mailto") ? (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    style={{
                                        color: "var(--text-muted)",
                                        fontSize: "0.85rem",
                                        textDecoration: "none",
                                        borderBottom: "1px solid var(--border)",
                                        paddingBottom: "1px",
                                        transition: "color 0.15s, border-color 0.15s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--text-secondary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "var(--text-muted)",
                                        fontSize: "0.85rem",
                                        textDecoration: "none",
                                        borderBottom: "1px solid var(--border)",
                                        paddingBottom: "1px",
                                        transition: "color 0.15s, border-color 0.15s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--text-secondary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                                    }}
                                >
                                    {link.label}
                                </a>
                            )
                        ))}
                    </div>
                </header>

                {/* ── Stack ── */}
                <section style={{ marginBottom: "4rem" }}>
                    <SectionLabel>Stack</SectionLabel>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {stack.map((t) => (
                            <span
                                key={t}
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.75rem",
                                    color: "var(--text-secondary)",
                                    background: "var(--bg-secondary)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "4px",
                                    padding: "0.2rem 0.55rem",
                                }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </section>

                {/* ── Projects ── */}
                <section style={{ marginBottom: "4rem" }}>
                    <SectionLabel>Proyectos</SectionLabel>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
                        {projects.map((p) => (
                            <div key={p.name}>
                                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                                        <h3
                                            style={{
                                                fontFamily: "var(--font-sans)",
                                                fontWeight: 600,
                                                fontSize: "0.97rem",
                                                color: "var(--text-primary)",
                                            }}
                                        >
                                            {p.url ? (
                                                <a
                                                    href={p.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid var(--border)" }}
                                                >
                                                    {p.name} ↗
                                                </a>
                                            ) : p.name}
                                        </h3>
                                        <span
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                fontSize: "0.68rem",
                                                color: "var(--text-muted)",
                                            }}
                                        >
                                            {p.status}
                                        </span>
                                    </div>
                                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", flexShrink: 0 }}>
                                        {p.period}
                                    </span>
                                </div>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "0.6rem" }}>
                                    {p.description}
                                </p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                fontSize: "0.68rem",
                                                color: "var(--text-muted)",
                                                background: "var(--bg-secondary)",
                                                border: "1px solid var(--border)",
                                                borderRadius: "3px",
                                                padding: "0.1rem 0.4rem",
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Experience ── */}
                <section style={{ marginBottom: "4rem" }}>
                    <SectionLabel>Experiencia</SectionLabel>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        {experience.map((e) => (
                            <div key={e.role}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.35rem" }}>
                                    <div>
                                        <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)" }}>{e.role}</span>
                                        <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}> · {e.company}</span>
                                    </div>
                                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", flexShrink: 0 }}>{e.period}</span>
                                </div>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                                    {e.bullets.map((b) => (
                                        <li key={b} style={{ display: "flex", gap: "0.6rem", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                                            <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>–</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Awards ── */}
                <section style={{ marginBottom: "4rem" }}>
                    <SectionLabel>Reconocimientos</SectionLabel>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {awards.map((a) => (
                            <div key={a.title} style={{ display: "flex", gap: "0.75rem", alignItems: "baseline" }}>
                                <span style={{ color: "var(--text-muted)", fontSize: "0.75rem", flexShrink: 0, fontFamily: "var(--font-mono)" }}>–</span>
                                <div>
                                    <span style={{ fontSize: "0.88rem", color: "var(--text-primary)" }}>{a.title}</span>
                                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}> · {a.org}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Contact ── */}
                <section>
                    <SectionLabel>Contacto</SectionLabel>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.75 }}>
                        Disponible para proyectos freelance, colaboraciones técnicas y posiciones remotas.
                        La forma más directa es por correo:{" "}
                        <a
                            href="mailto:afkaqui@gmail.com"
                            style={{ color: "var(--text-primary)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}
                        >
                            afkaqui@gmail.com
                        </a>
                        .
                    </p>
                </section>

                {/* ── Footer ── */}
                <footer style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                            Angel Kaqui · {new Date().getFullYear()}
                        </span>
                        <Link
                            href="/"
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.72rem",
                                color: "var(--text-muted)",
                                textDecoration: "none",
                                transition: "color 0.15s",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                        >
                            ← versión principal
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}

/* ── Helper ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span
                style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                }}
            >
                {children}
            </span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>
    );
}
