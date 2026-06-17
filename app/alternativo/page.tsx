"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── Data ── */
const selectedProjects = [
    {
        name: "LazarIA — Chaleco Inteligente",
        category: "Inclusión · IoT · IA",
        description:
            "Wearable con visión artificial para personas con discapacidad visual. Integra navegación por Google Maps, retroalimentación háptica y app móvil Flutter. Ganador del 1.er Puesto Nacional — Buenas Prácticas de Gestión Inclusiva 2025.",
        tech: ["Flutter", "NestJS", "Computer Vision", "IoT"],
        highlight: "1.° Puesto Nacional 2025",
    },
    {
        name: "EYWA",
        category: "DataOps · SaaS",
        description:
            "Plataforma de monitoreo de datos y validación de modelos de negocio con módulos de diagnóstico y scoring digital. Arquitectura full-stack propia sobre infraestructura VPS con Docker.",
        tech: ["Next.js", "Python", "Docker", "Power BI"],
        highlight: null,
    },
    {
        name: "Lucy",
        category: "HealthTech · IA",
        description:
            "Herramienta de salud preventiva con procesamiento de imagen médica. Diseñada sin dependencias no-code para garantizar escalabilidad. Admitida en evaluación de UTEC Ventures y Kaman 2026.",
        tech: ["Next.js", "Python", "Computer Vision", "FastAPI"],
        highlight: "UTEC Ventures · Kaman 2026",
    },
    {
        name: "CIB Pucallpa",
        category: "Bioeconomía · Economía Circular",
        description:
            "Modelo de financiamiento para bionegocios amazónicos bajo Ley 30309 — reduce el riesgo de inversión en investigación de biodiversidad. Seleccionado entre los 500 Mejores Proyectos · Premios Verdes 2026.",
        tech: ["Ingeniería Financiera", "Trazabilidad Digital", "TRL"],
        highlight: "Top 500 Premios Verdes 2026",
        url: "https://500-mejores.premiosverdes.org/es/proyecto-500-mejores?proyecto=hub-de-innovacion-sostenible-eduardo-noriega",
    },
];

const timeline = [
    {
        period: "2023 – presente",
        role: "Fundador · Tech Lead",
        org: "EYWA · Lucy · BioMulch Andino",
        description: "Diseño y desarrollo de tres startups tecnológicas simultáneas. Arquitectura de software, gestión de infraestructura y dirección de equipos.",
    },
    {
        period: "2024",
        role: "Pasante Pre-Profesional",
        org: "GENES PERÚ · Lima",
        description: "Modernización de infraestructura web a Next.js. Proyectos de tecnología cívica y participación ciudadana.",
    },
    {
        period: "2019 – 2024",
        role: "Ingeniería de Sistemas",
        org: "UNHEVAL · Huánuco",
        description: "Egresado 2.° Puesto de 59 alumnos · Promedio 15.19. Intercambio en Universidad de Manizales (Colombia). Especialización en BI y Gestión de Proyectos — UNMSM, Lima.",
    },
];

const recognitions = [
    "1.° Puesto Nacional · Buenas Prácticas de Gestión Inclusiva 2025",
    "1.° Puesto · VII Concurso de Innovación UNHEVAL 2025",
    "2.° Puesto · VII Concurso de Invenciones UNHEVAL 2025",
    "Ganador · Incuval Ventures 2024",
    "Ganador · Hackathon Inspiratec 2024",
    "Finalista · II Hackathon de Química Verde 2026",
    "Top 500 Proyectos · Premios Verdes 2026",
    "Graduado · Aspire Leaders Program (Harvard)",
    "Seleccionado · Jóvenes, Ciudadanía y Democracia (JCD)",
];

/* ── Fade-in hook ── */
function useFadeIn() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    obs.disconnect();
                }
            },
            { threshold: 0.08 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(18px)";
        el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    obs.disconnect();
                }
            },
            { threshold: 0.08 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [delay]);
    return <div ref={ref}>{children}</div>;
}

/* ── Component ── */
export default function Alternativo() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("afkaqui@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <div
                style={{
                    background: "var(--bg-primary)",
                    minHeight: "100vh",
                    color: "var(--text-primary)",
                }}
            >
                {/* ── Nav minimal ── */}
                <nav
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 40,
                        borderBottom: "1px solid var(--border-subtle)",
                        background: "rgba(8,11,20,0.85)",
                        backdropFilter: "blur(20px)",
                        padding: "0 2rem",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "820px",
                            margin: "0 auto",
                            height: "54px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.82rem",
                                color: "var(--text-muted)",
                            }}
                        >
                            Angel Kaqui
                        </span>
                        <div style={{ display: "flex", gap: "1.75rem" }}>
                            {["Proyectos", "Experiencia", "Reconocimientos", "Contacto"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    style={{
                                        fontSize: "0.82rem",
                                        color: "var(--text-muted)",
                                        textDecoration: "none",
                                        transition: "color 0.15s",
                                    }}
                                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>

                <div style={{ maxWidth: "820px", margin: "0 auto", padding: "0 2rem" }}>

                    {/* ── Hero ── */}
                    <section style={{ padding: "7rem 0 5rem" }}>
                        <FadeIn>
                            <p
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.75rem",
                                    color: "#6366f1",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                Ingeniería de Sistemas · UNHEVAL · Huánuco, Perú
                            </p>
                            <h1
                                style={{
                                    fontFamily: "var(--font-sans)",
                                    fontWeight: 800,
                                    fontSize: "clamp(2.6rem, 6vw, 4rem)",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.02em",
                                    marginBottom: "1.5rem",
                                    color: "var(--text-primary)",
                                }}
                            >
                                Angel Francisco<br />
                                <span style={{ color: "#6366f1" }}>Kaqui Aquino</span>
                            </h1>
                            <p
                                style={{
                                    fontSize: "1.1rem",
                                    color: "var(--text-secondary)",
                                    lineHeight: 1.8,
                                    maxWidth: "560px",
                                    marginBottom: "2.5rem",
                                }}
                            >
                                Desarrollador de software y emprendedor tecnológico.
                                Egresado con distinción de Ingeniería de Sistemas (2.° Puesto, UNHEVAL).
                                Construyo productos digitales y lidero proyectos de impacto real.
                            </p>
                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                <a
                                    href="https://github.com/afkaqui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                        padding: "0.6rem 1.25rem",
                                        borderRadius: "var(--radius)",
                                        background: "var(--bg-secondary)",
                                        border: "1px solid var(--border)",
                                        color: "var(--text-secondary)",
                                        fontSize: "0.85rem",
                                        textDecoration: "none",
                                        fontFamily: "var(--font-sans)",
                                        transition: "border-color 0.2s, color 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#6366f160";
                                        (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                                        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                                    }}
                                >
                                    GitHub ↗
                                </a>
                                <a
                                    href="https://linkedin.com/in/afkaqui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                        padding: "0.6rem 1.25rem",
                                        borderRadius: "var(--radius)",
                                        background: "var(--bg-secondary)",
                                        border: "1px solid var(--border)",
                                        color: "var(--text-secondary)",
                                        fontSize: "0.85rem",
                                        textDecoration: "none",
                                        transition: "border-color 0.2s, color 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#6366f160";
                                        (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                                        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                                    }}
                                >
                                    LinkedIn ↗
                                </a>
                                <button
                                    onClick={copyEmail}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                        padding: "0.6rem 1.25rem",
                                        borderRadius: "var(--radius)",
                                        background: copied ? "#6366f118" : "var(--bg-secondary)",
                                        border: `1px solid ${copied ? "#6366f150" : "var(--border)"}`,
                                        color: copied ? "#818cf8" : "var(--text-secondary)",
                                        fontSize: "0.85rem",
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                        fontFamily: "var(--font-sans)",
                                    }}
                                >
                                    {copied ? "✓ Copiado" : "afkaqui@gmail.com"}
                                </button>
                            </div>
                        </FadeIn>

                        {/* Stats row */}
                        <FadeIn delay={120}>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: "1px",
                                    marginTop: "4rem",
                                    borderRadius: "var(--radius-lg)",
                                    overflow: "hidden",
                                    border: "1px solid var(--border)",
                                    background: "var(--border)",
                                }}
                            >
                                {[
                                    { value: "2.°", label: "Puesto · 59 alumnos", sub: "Orden de Mérito UNHEVAL" },
                                    { value: "9+", label: "Premios y reconocimientos", sub: "Nacionales e internacionales" },
                                    { value: "6+", label: "Proyectos tecnológicos", sub: "En producción o desarrollo" },
                                ].map((s) => (
                                    <div
                                        key={s.label}
                                        style={{
                                            background: "var(--bg-secondary)",
                                            padding: "1.5rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontFamily: "var(--font-sans)",
                                                fontWeight: 800,
                                                fontSize: "2rem",
                                                color: "#6366f1",
                                                lineHeight: 1,
                                                marginBottom: "0.4rem",
                                            }}
                                        >
                                            {s.value}
                                        </div>
                                        <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontWeight: 500, marginBottom: "0.2rem" }}>
                                            {s.label}
                                        </div>
                                        <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                                            {s.sub}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </section>

                    <Divider />

                    {/* ── Projects ── */}
                    <section id="proyectos" style={{ padding: "4rem 0" }}>
                        <FadeIn>
                            <SectionHeader label="01" title="Proyectos seleccionados" />
                        </FadeIn>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {selectedProjects.map((p, i) => (
                                <FadeIn key={p.name} delay={i * 80}>
                                    <div
                                        style={{
                                            padding: "1.75rem",
                                            borderRadius: "var(--radius-lg)",
                                            border: "1px solid var(--border)",
                                            background: "var(--bg-secondary)",
                                            transition: "border-color 0.2s",
                                        }}
                                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#6366f140")}
                                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                            <div>
                                                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                                                    {p.url ? (
                                                        <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                                                            {p.name} <span style={{ color: "#6366f1" }}>↗</span>
                                                        </a>
                                                    ) : p.name}
                                                </h3>
                                                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
                                                    {p.category}
                                                </span>
                                            </div>
                                            {p.highlight && (
                                                <span
                                                    style={{
                                                        fontFamily: "var(--font-mono)",
                                                        fontSize: "0.68rem",
                                                        color: "#818cf8",
                                                        background: "#6366f112",
                                                        border: "1px solid #6366f130",
                                                        borderRadius: "999px",
                                                        padding: "0.2rem 0.65rem",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {p.highlight}
                                                </span>
                                            )}
                                        </div>
                                        <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "1rem" }}>
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
                                                        background: "var(--bg-primary)",
                                                        border: "1px solid var(--border)",
                                                        borderRadius: "3px",
                                                        padding: "0.15rem 0.45rem",
                                                    }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </section>

                    <Divider />

                    {/* ── Experience ── */}
                    <section id="experiencia" style={{ padding: "4rem 0" }}>
                        <FadeIn>
                            <SectionHeader label="02" title="Experiencia" />
                        </FadeIn>
                        <div style={{ position: "relative" }}>
                            {/* Vertical line */}
                            <div
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    left: "5px",
                                    top: "8px",
                                    bottom: 0,
                                    width: "1px",
                                    background: "var(--border)",
                                }}
                            />
                            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingLeft: "2.25rem" }}>
                                {timeline.map((item, i) => (
                                    <FadeIn key={item.role} delay={i * 80}>
                                        <div style={{ position: "relative" }}>
                                            {/* Dot */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    left: "-2.25rem",
                                                    top: "6px",
                                                    width: "11px",
                                                    height: "11px",
                                                    borderRadius: "50%",
                                                    background: "#6366f1",
                                                    border: "2px solid var(--bg-primary)",
                                                    boxShadow: "0 0 0 1px #6366f140",
                                                }}
                                            />
                                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.35rem" }}>
                                                <div>
                                                    <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)" }}>{item.role}</span>
                                                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}> · {item.org}</span>
                                                </div>
                                                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", flexShrink: 0 }}>
                                                    {item.period}
                                                </span>
                                            </div>
                                            <p style={{ color: "var(--text-secondary)", fontSize: "0.87rem", lineHeight: 1.7 }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Divider />

                    {/* ── Recognitions ── */}
                    <section id="reconocimientos" style={{ padding: "4rem 0" }}>
                        <FadeIn>
                            <SectionHeader label="03" title="Reconocimientos" />
                        </FadeIn>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                                gap: "0.6rem",
                            }}
                        >
                            {recognitions.map((r, i) => (
                                <FadeIn key={r} delay={i * 40}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                            padding: "0.85rem 1rem",
                                            borderRadius: "var(--radius)",
                                            border: "1px solid var(--border)",
                                            background: "var(--bg-secondary)",
                                            fontSize: "0.85rem",
                                            color: "var(--text-secondary)",
                                            transition: "border-color 0.15s",
                                        }}
                                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#6366f140")}
                                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                                    >
                                        <span style={{ color: "#6366f1", fontSize: "0.6rem", flexShrink: 0 }}>◆</span>
                                        {r}
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </section>

                    <Divider />

                    {/* ── Contact ── */}
                    <section id="contacto" style={{ padding: "4rem 0 6rem" }}>
                        <FadeIn>
                            <SectionHeader label="04" title="Contacto" />
                            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.8, maxWidth: "480px", marginBottom: "2rem" }}>
                                Disponible para proyectos, colaboraciones y convocatorias.
                                Escríbeme directamente o conéctate por LinkedIn.
                            </p>
                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                <button
                                    onClick={copyEmail}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        padding: "0.75rem 1.5rem",
                                        borderRadius: "var(--radius)",
                                        background: copied ? "#6366f1" : "var(--bg-secondary)",
                                        border: `1px solid ${copied ? "#6366f1" : "var(--border)"}`,
                                        color: copied ? "#fff" : "var(--text-primary)",
                                        fontSize: "0.88rem",
                                        cursor: "pointer",
                                        fontFamily: "var(--font-sans)",
                                        fontWeight: 500,
                                        transition: "all 0.2s",
                                    }}
                                >
                                    {copied ? "✓ Correo copiado" : "Copiar correo"}
                                </button>
                                <a
                                    href="https://linkedin.com/in/afkaqui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        padding: "0.75rem 1.5rem",
                                        borderRadius: "var(--radius)",
                                        background: "transparent",
                                        border: "1px solid var(--border)",
                                        color: "var(--text-secondary)",
                                        fontSize: "0.88rem",
                                        textDecoration: "none",
                                        transition: "all 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#6366f160";
                                        (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                                        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                                    }}
                                >
                                    LinkedIn ↗
                                </a>
                            </div>
                        </FadeIn>
                    </section>

                    {/* ── Footer ── */}
                    <footer
                        style={{
                            borderTop: "1px solid var(--border)",
                            padding: "1.75rem 0",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "0.75rem",
                        }}
                    >
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                            Angel Francisco Kaqui Aquino · {new Date().getFullYear()}
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
                            versión principal →
                        </Link>
                    </footer>
                </div>
            </div>

            <style>{`
                @media (max-width: 600px) {
                    nav div:last-child { display: none; }
                }
            `}</style>
        </>
    );
}

/* ── Helpers ── */
function Divider() {
    return <div style={{ height: "1px", background: "var(--border)" }} />;
}

function SectionHeader({ label, title }: { label: string; title: string }) {
    return (
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "2rem" }}>
            <span
                style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "#6366f1",
                    letterSpacing: "0.1em",
                }}
            >
                {label}
            </span>
            <h2
                style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                }}
            >
                {title}
            </h2>
        </div>
    );
}
