"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ── Types ── */
interface ImageItem {
    file: string;
    caption: string;
}
interface Section {
    id: string;
    icon: string;
    title: string;
    description: string;
    color: string;
    images: ImageItem[];
}

/* ── Image Sections ── */
const sections: Section[] = [
    {
        id: "sgi",
        icon: "🖥️",
        title: "Borrador de Tesis · SGI",
        description:
            "Trámite para presentar el borrador de tesis a través del Sistema de Gestión de Investigación Pregrado (SGI) de la FIISMEC. Incluye requisitos de Turnitin, plazos y resolución de jurados.",
        color: "#6366f1",
        images: [
            { file: "WhatsApp Image 2026-04-27 at 12.11.13 PM.jpeg", caption: "Trámite Borrador de Tesis — FIISMEC (instructivo interior)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.25 PM.jpeg", caption: "Trámite Borrador de Tesis — FIISMEC (instructivo pared)" },
        ],
    },
    {
        id: "formularios",
        icon: "📝",
        title: "Formularios de Trámite Virtual",
        description:
            "Formularios Únicos de Trámite Virtual para procedimientos ante el Decano de la FIISMEC. Incluye modelos llenados de referencia con sellos RECIBIDO.",
        color: "#06b6d4",
        images: [
            { file: "WhatsApp Image 2026-04-27 at 12.11.14 PM.jpeg", caption: "Formulario — Otorgamiento de Título Profesional (modelo)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.27 PM.jpeg", caption: "Formulario — Otorgamiento de Título Profesional (en tablón)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.15 PM.jpeg", caption: "Formulario — Grado Académico de Bachiller (modelo)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.24 PM.jpeg", caption: "Formulario — Grado Académico de Bachiller (en tablón)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.17 PM.jpeg", caption: "Formulario — Autorización Prácticas Preprofesionales (modelo)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.18 PM.jpeg", caption: "Formulario — Autorización Prácticas Preprofesionales (vista 2)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.29 PM.jpeg", caption: "Formulario — Autorización Prácticas Preprofesionales (en tablón)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.19 PM.jpeg", caption: "Formulario — Aprobación de Prácticas Preprofesionales (modelo)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.30 PM.jpeg", caption: "Formulario — Aprobación de Prácticas Preprofesionales (en tablón)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.20 PM.jpeg", caption: "Formulario RECIBIDO — Aprobación PP sellado por Decanato (ejemplo real)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.22 PM.jpeg", caption: "Formulario RECIBIDO — Aprobación PP sellado (vista 2)" },
        ],
    },
    {
        id: "matricula",
        icon: "🎓",
        title: "Cuarta Matrícula",
        description:
            "Procedimiento TUPA para cuarta matrícula en pregrado (PA65003S08). Solicitud al Decano con mínimo 7 días hábiles antes del inicio del semestre. Pago: S/140 (1.ª carrera) · S/259 (2.ª carrera a más).",
        color: "#f59e0b",
        images: [
            { file: "WhatsApp Image 2026-04-27 at 12.11.12 PM.jpeg", caption: "TUPA — Cuarta Matrícula Pregrado · Código PA65003S08" },
        ],
    },
    {
        id: "laboratorios",
        icon: "🔬",
        title: "Unidad de Laboratorios",
        description:
            "Encuentra los documentos de tu laboratorio mediante QR: horarios, atención, documentos de gestión y guías de práctica — todos alojados en SharePoint UNHEVAL.",
        color: "#10b981",
        images: [
            { file: "WhatsApp Image 2026-04-27 at 12.11.08 PM.jpeg", caption: "Laboratorios UNHEVAL — Documentos con QR (vista 1)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.09 PM.jpeg", caption: "Laboratorios UNHEVAL — Documentos con QR (vista 2)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.11 PM.jpeg", caption: "Laboratorios UNHEVAL — Documentos con QR (vista 3)" },
        ],
    },
    {
        id: "constancias",
        icon: "📜",
        title: "Constancias y Certificados",
        description:
            "Cuadro de tazas (Banco de la Nación / Scotiabank), modelos de solicitud y requisitos. Trámites vía Mesa de Partes Digital: mesapartesdigital.unheval.edu.pe — Lun-Vie 7:30–13:00 / 15:00–17:15.",
        color: "#8b5cf6",
        images: [
            { file: "WhatsApp Image 2026-04-27 at 12.11.33 PM.jpeg", caption: "Modelo Solicitud de Constancia (vista 1)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.34 PM.jpeg", caption: "Modelo Solicitud de Constancia (vista 2)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.36 PM.jpeg", caption: "Panel Registro Central — Solicitud Certificado + Cuadro Tazas" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.37 PM.jpeg", caption: "Cuadro de Tazas — Constancias y Certificados (vista 1)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.39 PM.jpeg", caption: "Cuadro de Tazas — Constancias y Certificados (vista 2)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.41 PM.jpeg", caption: "Mesa de Partes Digital — Requisitos y Horarios (vista 1)" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.43 PM.jpeg", caption: "Mesa de Partes Digital — Requisitos y Horarios (vista 2)" },
        ],
    },
    {
        id: "calendario",
        icon: "📅",
        title: "Calendario y Horarios",
        description:
            "Calendario Académico 2026 UNHEVAL–SUNEDU con fechas de apertura, matrículas y finalización de labores. Horario institucional vigente: lunes a viernes 7:30 am – 3:30 pm (Comunicado N° 02-2026).",
        color: "#ec4899",
        images: [
            { file: "WhatsApp Image 2026-04-27 at 12.11.32 PM.jpeg", caption: "Calendario Académico 2026 — UNHEVAL · SUNEDU" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.45 PM.jpeg", caption: "Comunicado N° 02-2025 — Horario de Trabajo Institucional" },
            { file: "WhatsApp Image 2026-04-27 at 12.11.46 PM.jpeg", caption: "Comunicado N° 02-2026 — Horario de Trabajo (7:30 am – 3:30 pm)" },
        ],
    },
];

/* ── All nav items (image sections + text-only sections) ── */
const allNavItems = [
    ...sections.map((s) => ({ id: s.id, icon: s.icon, label: s.title.split("·")[0].trim(), color: s.color })),
    { id: "tesis", icon: "📋", label: "Proceso de Tesis", color: "#a855f7" },
    { id: "grados", icon: "🏅", label: "Grados y Títulos", color: "#f59e0b" },
    { id: "recursos", icon: "🔗", label: "Recursos", color: "#06b6d4" },
];

/* ── TUPA data for PPP ── */
const tupaData = [
    {
        code: "PA65004C2C",
        name: "Carta de Presentación PPP",
        cost: "Ver TUPA",
        color: "#06b6d4",
        requisitos: [
            "Mínimo 7.° ciclo matriculado",
            "Ing. de Sistemas: ≥ 137 créditos aprobados",
            "Ing. Industrial: ≥ 140 créditos aprobados",
            "Solicitud dirigida al Decano",
        ],
    },
    {
        code: "PA650002E2",
        name: "Autorización de Prácticas Preprofesionales",
        cost: "GRATUITO",
        color: "#10b981",
        platform: "https://practicasfiismec.unheval.edu.pe/",
        requisitos: [
            "FUT (Formulario Único de Trámite)",
            "Plan de trabajo de prácticas",
            "Carta de aceptación de la empresa (fechas, horario, área)",
            "Historial académico oficial",
        ],
    },
    {
        code: "PA65000958",
        name: "Aprobación de Prácticas Preprofesionales",
        cost: "GRATUITO",
        color: "#f59e0b",
        platform: "https://practicasfiismec.unheval.edu.pe/",
        requisitos: [
            "3 copias del informe (anverso-reverso)",
            "Hoja de evaluación de la empresa",
            "Carta de conformidad del asesor",
            "Acta de visita del asesor",
            "Cargo de entrega",
        ],
    },
];

/* ── Proceso de Tesis (10 trámites, noticia=1234) ── */
const tesisSteps = [
    { n: 1, title: "Designación de asesor de tesis de pregrado", icon: "👤" },
    { n: 2, title: "Designación de jurado evaluador y revisión del proyecto", icon: "👥" },
    { n: 3, title: "Cambio de jurado evaluador y revisión del proyecto", icon: "🔄" },
    { n: 4, title: "Revisión de levantamiento de observaciones del proyecto", icon: "🔎" },
    { n: 5, title: "Cambio de título del proyecto de tesis", icon: "✏️" },
    { n: 6, title: "Plazo adicional para la presentación del borrador", icon: "⏳" },
    { n: 7, title: "Revisión de borrador por el jurado evaluador (pregrado)", icon: "📖" },
    { n: 8, title: "Revisión de levantamiento de observaciones del borrador", icon: "✅" },
    { n: 9, title: "Lugar, fecha y hora para sustentación de tesis", icon: "📆" },
    { n: 10, title: "Lugar, fecha y hora para sustentación por segunda oportunidad", icon: "🔁" },
];

const imgSrc = (file: string) => `/media/${encodeURIComponent(file)}`;

/* ── Component ── */
export default function LuchoChivo() {
    const [lightbox, setLightbox] = useState<{ sIdx: number; iIdx: number } | null>(null);
    const [activeSection, setActiveSection] = useState(sections[0].id);

    const currentImg = lightbox ? sections[lightbox.sIdx].images[lightbox.iIdx] : null;
    const currentSection = lightbox ? sections[lightbox.sIdx] : null;

    /* Lightbox navigation */
    const closeLightbox = useCallback(() => setLightbox(null), []);

    const prevImg = useCallback(() => {
        if (!lightbox) return;
        const total = sections[lightbox.sIdx].images.length;
        setLightbox({ ...lightbox, iIdx: (lightbox.iIdx - 1 + total) % total });
    }, [lightbox]);

    const nextImg = useCallback(() => {
        if (!lightbox) return;
        const total = sections[lightbox.sIdx].images.length;
        setLightbox({ ...lightbox, iIdx: (lightbox.iIdx + 1) % total });
    }, [lightbox]);

    /* Keyboard */
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (!lightbox) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prevImg();
            if (e.key === "ArrowRight") nextImg();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [lightbox, closeLightbox, prevImg, nextImg]);

    /* Lock scroll when lightbox open */
    useEffect(() => {
        document.body.style.overflow = lightbox ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lightbox]);

    /* Active section tracking (all sections including text-only) */
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
            { rootMargin: "-40% 0px -55% 0px" }
        );
        allNavItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    return (
        <>
            <div style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)" }}>

                {/* ── Top bar ── */}
                <div
                    style={{
                        position: "sticky",
                        top: 0,
                        zIndex: 50,
                        background: "rgba(8,11,20,0.9)",
                        backdropFilter: "blur(18px)",
                        borderBottom: "1px solid var(--border-subtle)",
                        padding: "0 1.5rem",
                    }}
                >
                    <div style={{ maxWidth: "1100px", margin: "0 auto", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                        <Link
                            href="/"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                color: "var(--text-secondary)",
                                textDecoration: "none",
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.82rem",
                                transition: "color 0.2s",
                                flexShrink: 0,
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-light)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                        >
                            ← afkaqui.dev
                        </Link>

                        {/* Section pill nav */}
                        <div style={{ display: "flex", gap: "0.25rem", overflowX: "auto", scrollbarWidth: "none" }}>
                            {allNavItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    title={item.label}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.35rem",
                                        padding: "0.3rem 0.75rem",
                                        borderRadius: "999px",
                                        fontSize: "0.75rem",
                                        fontFamily: "var(--font-sans)",
                                        fontWeight: 500,
                                        textDecoration: "none",
                                        whiteSpace: "nowrap",
                                        transition: "all 0.2s ease",
                                        background: activeSection === item.id ? `${item.color}22` : "transparent",
                                        color: activeSection === item.id ? item.color : "var(--text-muted)",
                                        border: `1px solid ${activeSection === item.id ? item.color + "50" : "transparent"}`,
                                    }}
                                >
                                    <span style={{ fontSize: "0.85rem" }}>{item.icon}</span>
                                    <span className="hide-mobile">{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Hero ── */}
                <div
                    className="grid-bg"
                    style={{ position: "relative", overflow: "hidden", padding: "5rem 1.5rem 4rem" }}
                >
                    <div aria-hidden style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

                    <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                        <span className="mono" style={{ fontSize: "0.72rem", letterSpacing: "0.18em", color: "var(--accent-light)", textTransform: "uppercase" }}>
                            FIISMEC · UNHEVAL — Guía de Trámites
                        </span>
                        <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.2rem)", lineHeight: 1.15, margin: "0.75rem 0 1.25rem" }}>
                            Trámites Académicos{" "}
                            <span style={{ background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                paso a paso
                            </span>
                        </h1>
                        <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                            Recopilación de documentos, formularios y procedimientos vigentes de la
                            Facultad de Ingeniería Industrial, de Sistemas y Mecatrónica —{" "}
                            <strong style={{ color: "var(--text-primary)" }}>UNHEVAL, Huánuco</strong>.
                        </p>

                        <a
                            href="https://unires.unheval.edu.pe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}
                        >
                            <span>🖥️</span>
                            Ingresar al SGI — unires.unheval.edu.pe
                            <span style={{ fontSize: "0.8rem" }}>↗</span>
                        </a>

                        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
                            {[
                                { label: "9 secciones", color: "#6366f1" },
                                { label: "27 documentos", color: "#06b6d4" },
                                { label: "FIISMEC · 2026", color: "#10b981" },
                            ].map((pill) => (
                                <span
                                    key={pill.label}
                                    style={{
                                        padding: "0.25rem 0.85rem",
                                        borderRadius: "999px",
                                        background: `${pill.color}15`,
                                        border: `1px solid ${pill.color}35`,
                                        color: pill.color,
                                        fontSize: "0.78rem",
                                        fontFamily: "var(--font-mono)",
                                    }}
                                >
                                    {pill.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Image Sections ── */}
                <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
                    {sections.map((section) => (
                        <section key={section.id} id={section.id} style={{ paddingTop: "5rem" }}>
                            {/* Section header */}
                            <div style={{ marginBottom: "2rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                    <span
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "44px",
                                            height: "44px",
                                            borderRadius: "var(--radius)",
                                            background: `${section.color}18`,
                                            border: `1px solid ${section.color}35`,
                                            fontSize: "1.3rem",
                                        }}
                                    >
                                        {section.icon}
                                    </span>
                                    <h2
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontWeight: 700,
                                            fontSize: "clamp(1.4rem,3vw,1.85rem)",
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        {section.title}
                                    </h2>
                                </div>

                                <p style={{ color: "var(--text-secondary)", fontSize: "0.97rem", lineHeight: 1.75, maxWidth: "680px" }}>
                                    {section.description}
                                </p>

                                <div style={{ height: "2px", background: `linear-gradient(90deg, ${section.color}60, transparent)`, marginTop: "1.25rem", borderRadius: "1px" }} />
                            </div>

                            {/* ── Extra info for formularios: TUPA cards ── */}
                            {section.id === "formularios" && (
                                <div style={{ marginBottom: "2.5rem" }}>
                                    <p className="mono" style={{ fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.12em", marginBottom: "1rem" }}>
                                        — códigos TUPA y requisitos por trámite
                                    </p>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
                                        {tupaData.map((t) => (
                                            <div
                                                key={t.code}
                                                style={{
                                                    background: "var(--bg-card)",
                                                    border: `1px solid ${t.color}30`,
                                                    borderRadius: "var(--radius)",
                                                    padding: "1.25rem 1.4rem",
                                                    position: "relative",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <div aria-hidden style={{ position: "absolute", top: "-20px", right: "-20px", width: "100px", height: "100px", background: `radial-gradient(circle, ${t.color}14 0%, transparent 70%)`, pointerEvents: "none" }} />
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem", flexWrap: "wrap", gap: "0.4rem" }}>
                                                    <span
                                                        style={{
                                                            fontFamily: "var(--font-mono)",
                                                            fontSize: "0.68rem",
                                                            color: t.color,
                                                            background: `${t.color}15`,
                                                            border: `1px solid ${t.color}35`,
                                                            borderRadius: "999px",
                                                            padding: "0.15rem 0.6rem",
                                                        }}
                                                    >
                                                        TUPA {t.code}
                                                    </span>
                                                    <span
                                                        style={{
                                                            fontFamily: "var(--font-mono)",
                                                            fontSize: "0.68rem",
                                                            color: t.cost === "GRATUITO" ? "#22c55e" : "var(--text-muted)",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {t.cost}
                                                    </span>
                                                </div>
                                                <p style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                                                    {t.name}
                                                </p>
                                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                                                    {t.requisitos.map((r) => (
                                                        <li key={r} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                                                            <span style={{ color: t.color, flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                                                            {r}
                                                        </li>
                                                    ))}
                                                </ul>
                                                {t.platform && (
                                                    <a
                                                        href={t.platform}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "0.3rem",
                                                            marginTop: "0.85rem",
                                                            fontSize: "0.75rem",
                                                            color: t.color,
                                                            textDecoration: "none",
                                                            fontFamily: "var(--font-mono)",
                                                        }}
                                                    >
                                                        🔗 practicasfiismec.unheval.edu.pe ↗
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Image grid */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                                    gap: "1rem",
                                }}
                            >
                                {section.images.map((img, iIdx) => (
                                    <button
                                        key={img.file}
                                        onClick={() => setLightbox({ sIdx: sections.indexOf(section), iIdx })}
                                        style={{
                                            all: "unset",
                                            cursor: "zoom-in",
                                            display: "block",
                                            borderRadius: "var(--radius)",
                                            overflow: "hidden",
                                            border: `1px solid ${section.color}22`,
                                            background: "var(--bg-card)",
                                            transition: "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease",
                                        }}
                                        className="img-card"
                                        aria-label={img.caption}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                                            (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px rgba(0,0,0,0.5), 0 0 0 1px ${section.color}50`;
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.transform = "";
                                            (e.currentTarget as HTMLElement).style.boxShadow = "";
                                        }}
                                    >
                                        <div style={{ position: "relative", paddingBottom: "70%", background: "var(--bg-secondary)", overflow: "hidden" }}>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={imgSrc(img.file)}
                                                alt={img.caption}
                                                loading="lazy"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    transition: "transform 0.35s ease",
                                                }}
                                                className="thumb-img"
                                            />
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    background: `linear-gradient(to top, ${section.color}40 0%, transparent 50%)`,
                                                    display: "flex",
                                                    alignItems: "flex-end",
                                                    justifyContent: "flex-end",
                                                    padding: "0.5rem",
                                                    opacity: 0,
                                                    transition: "opacity 0.2s ease",
                                                }}
                                                className="img-overlay"
                                            >
                                                <span style={{ fontSize: "1.4rem" }}>🔍</span>
                                            </div>
                                        </div>
                                        <div style={{ padding: "0.65rem 0.85rem" }}>
                                            <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0, textAlign: "left" }}>
                                                {img.caption}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* ── Proceso de Tesis ── */}
                    <section id="tesis" style={{ paddingTop: "5rem" }}>
                        <div style={{ marginBottom: "2rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "var(--radius)",
                                        background: "#a855f718",
                                        border: "1px solid #a855f735",
                                        fontSize: "1.3rem",
                                    }}
                                >
                                    📋
                                </span>
                                <h2
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontWeight: 700,
                                        fontSize: "clamp(1.4rem,3vw,1.85rem)",
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    Proceso de Tesis — 10 Trámites
                                </h2>
                            </div>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.97rem", lineHeight: 1.75, maxWidth: "680px" }}>
                                Flujo completo de trámites del proceso de investigación de pregrado en la FIISMEC.
                                Desde la designación del asesor hasta la segunda oportunidad de sustentación —
                                todos gestionados a través del SGI en{" "}
                                <a href="https://unires.unheval.edu.pe/" target="_blank" rel="noopener noreferrer" style={{ color: "#a855f7", textDecoration: "none" }}>
                                    unires.unheval.edu.pe ↗
                                </a>
                            </p>
                            <div style={{ height: "2px", background: "linear-gradient(90deg, #a855f760, transparent)", marginTop: "1.25rem", borderRadius: "1px" }} />
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                            {tesisSteps.map((step) => (
                                <div
                                    key={step.n}
                                    style={{
                                        background: "var(--bg-card)",
                                        border: "1px solid #a855f722",
                                        borderRadius: "var(--radius)",
                                        padding: "1.15rem 1.3rem",
                                        display: "flex",
                                        gap: "1rem",
                                        alignItems: "flex-start",
                                        transition: "transform 0.2s ease, border-color 0.2s ease",
                                    }}
                                    className="tesis-card"
                                >
                                    <div
                                        style={{
                                            minWidth: "36px",
                                            height: "36px",
                                            borderRadius: "50%",
                                            background: "#a855f718",
                                            border: "1px solid #a855f740",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "0.75rem",
                                            fontWeight: 700,
                                            color: "#a855f7",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {step.n < 10 ? `0${step.n}` : step.n}
                                    </div>
                                    <div>
                                        <span style={{ fontSize: "1.1rem", marginBottom: "0.3rem", display: "block" }}>{step.icon}</span>
                                        <p style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 500, margin: 0, lineHeight: 1.55 }}>
                                            {step.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            style={{
                                marginTop: "1.75rem",
                                padding: "1rem 1.4rem",
                                borderRadius: "var(--radius)",
                                background: "#a855f70d",
                                border: "1px solid #a855f725",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                flexWrap: "wrap",
                            }}
                        >
                            <span style={{ fontSize: "1.1rem" }}>💡</span>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                                Cada trámite debe iniciarse en el SGI. Contacto directo:{" "}
                                <a href="mailto:dfiis@unheval.edu.pe" style={{ color: "#a855f7", textDecoration: "none" }}>dfiis@unheval.edu.pe</a>
                                {" "}· Oficina: Pabellón IV — FIISMEC.
                            </p>
                        </div>
                    </section>

                    {/* ── Grados y Títulos ── */}
                    <section id="grados" style={{ paddingTop: "5rem" }}>
                        <div style={{ marginBottom: "2rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "var(--radius)",
                                        background: "#f59e0b18",
                                        border: "1px solid #f59e0b35",
                                        fontSize: "1.3rem",
                                    }}
                                >
                                    🏅
                                </span>
                                <h2
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontWeight: 700,
                                        fontSize: "clamp(1.4rem,3vw,1.85rem)",
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    Grados y Títulos
                                </h2>
                            </div>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.97rem", lineHeight: 1.75, maxWidth: "680px" }}>
                                Procedimientos para la obtención del Grado Académico de Bachiller y el Título Profesional
                                en la FIISMEC — UNHEVAL. Reglamento vigente 2025.
                            </p>
                            <div style={{ height: "2px", background: "linear-gradient(90deg, #f59e0b60, transparent)", marginTop: "1.25rem", borderRadius: "1px" }} />
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
                            {/* Bachiller */}
                            <div
                                style={{
                                    background: "var(--bg-card)",
                                    border: "1px solid #22c55e28",
                                    borderRadius: "var(--radius-lg)",
                                    padding: "1.75rem",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <div aria-hidden style={{ position: "absolute", top: "-30px", right: "-30px", width: "130px", height: "130px", background: "radial-gradient(circle, #22c55e10 0%, transparent 70%)", pointerEvents: "none" }} />
                                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem" }}>
                                    <span style={{ fontSize: "1.5rem" }}>🎓</span>
                                    <div>
                                        <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)", margin: 0 }}>Grado de Bachiller</h3>
                                        <span style={{ fontSize: "0.7rem", color: "#22c55e", fontFamily: "var(--font-mono)" }}>Automático · Sin costo adicional</span>
                                    </div>
                                </div>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                    {[
                                        "Egreso de la carrera profesional",
                                        "Sin deudas pendientes con la UNHEVAL",
                                        "Cumplir el Reglamento de Grados y Títulos 2025",
                                        "Trámite vía SGI — unires.unheval.edu.pe",
                                    ].map((r) => (
                                        <li key={r} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.84rem", color: "var(--text-secondary)" }}>
                                            <span style={{ color: "#22c55e", flexShrink: 0 }}>▸</span>{r}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Título Profesional */}
                            <div
                                style={{
                                    background: "var(--bg-card)",
                                    border: "1px solid #f59e0b28",
                                    borderRadius: "var(--radius-lg)",
                                    padding: "1.75rem",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <div aria-hidden style={{ position: "absolute", top: "-30px", right: "-30px", width: "130px", height: "130px", background: "radial-gradient(circle, #f59e0b10 0%, transparent 70%)", pointerEvents: "none" }} />
                                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem" }}>
                                    <span style={{ fontSize: "1.5rem" }}>📜</span>
                                    <div>
                                        <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)", margin: 0 }}>Título Profesional</h3>
                                        <span style={{ fontSize: "0.7rem", color: "#f59e0b", fontFamily: "var(--font-mono)" }}>Modalidad Tesis · Ver TUPA</span>
                                    </div>
                                </div>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                                    {[
                                        "Grado de Bachiller obtenido previamente",
                                        "Sustentar y aprobar tesis de pregrado",
                                        "Entregar CDs con el informe de tesis",
                                        "Pago de tasas según TUPA vigente",
                                        "Sin deudas con la UNHEVAL",
                                        "Reglamento de Grados y Títulos 2025",
                                    ].map((r) => (
                                        <li key={r} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.84rem", color: "var(--text-secondary)" }}>
                                            <span style={{ color: "#f59e0b", flexShrink: 0 }}>▸</span>{r}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ── Recursos Clave ── */}
                    <section id="recursos" style={{ paddingTop: "5rem" }}>
                        <div style={{ marginBottom: "2rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "var(--radius)",
                                        background: "#06b6d418",
                                        border: "1px solid #06b6d435",
                                        fontSize: "1.3rem",
                                    }}
                                >
                                    🔗
                                </span>
                                <h2
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontWeight: 700,
                                        fontSize: "clamp(1.4rem,3vw,1.85rem)",
                                        color: "var(--text-primary)",
                                    }}
                                >
                                    Recursos y Plataformas
                                </h2>
                            </div>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.97rem", lineHeight: 1.75, maxWidth: "680px" }}>
                                Enlaces oficiales, plataformas de gestión y contacto directo de la FIISMEC — UNHEVAL.
                            </p>
                            <div style={{ height: "2px", background: "linear-gradient(90deg, #06b6d460, transparent)", marginTop: "1.25rem", borderRadius: "1px" }} />
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
                            {[
                                {
                                    icon: "🖥️",
                                    label: "SGI — Sistema de Gestión de Investigación",
                                    url: "https://unires.unheval.edu.pe/",
                                    display: "unires.unheval.edu.pe",
                                    color: "#6366f1",
                                    desc: "Borrador de tesis, sustentaciones, designación de jurados.",
                                },
                                {
                                    icon: "🏭",
                                    label: "Plataforma de Prácticas FIISMEC",
                                    url: "https://practicasfiismec.unheval.edu.pe/",
                                    display: "practicasfiismec.unheval.edu.pe",
                                    color: "#10b981",
                                    desc: "Autorización y aprobación de Prácticas Preprofesionales.",
                                },
                                {
                                    icon: "📂",
                                    label: "Repositorio Institucional UNHEVAL",
                                    url: "https://repositorio.unheval.edu.pe/",
                                    display: "repositorio.unheval.edu.pe",
                                    color: "#8b5cf6",
                                    desc: "Tesis, artículos y producción académica de la UNHEVAL.",
                                },
                                {
                                    icon: "📬",
                                    label: "Mesa de Partes Digital",
                                    url: "https://mesapartesdigital.unheval.edu.pe/",
                                    display: "mesapartesdigital.unheval.edu.pe",
                                    color: "#ec4899",
                                    desc: "Trámites digitales · Lun–Vie 7:30–13:00 / 15:00–17:15.",
                                },
                                {
                                    icon: "🌐",
                                    label: "Portal FIISMEC",
                                    url: "http://gi.unheval.edu.pe/",
                                    display: "gi.unheval.edu.pe",
                                    color: "#06b6d4",
                                    desc: "Sitio web oficial de la facultad.",
                                },
                                {
                                    icon: "📧",
                                    label: "Correo FIISMEC",
                                    url: "mailto:dfiis@unheval.edu.pe",
                                    display: "dfiis@unheval.edu.pe",
                                    color: "#f59e0b",
                                    desc: "Consultas directas al Decanato · Pabellón IV.",
                                },
                            ].map((res) => (
                                <a
                                    key={res.url}
                                    href={res.url}
                                    target={res.url.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "block",
                                        textDecoration: "none",
                                        background: "var(--bg-card)",
                                        border: `1px solid ${res.color}25`,
                                        borderRadius: "var(--radius)",
                                        padding: "1.2rem 1.3rem",
                                        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                                    }}
                                    className="resource-card"
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                                        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px rgba(0,0,0,0.4), 0 0 0 1px ${res.color}40`;
                                        (e.currentTarget as HTMLElement).style.borderColor = `${res.color}50`;
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = "";
                                        (e.currentTarget as HTMLElement).style.boxShadow = "";
                                        (e.currentTarget as HTMLElement).style.borderColor = `${res.color}25`;
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                        <span style={{ fontSize: "1.2rem" }}>{res.icon}</span>
                                        <span
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                fontSize: "0.7rem",
                                                color: res.color,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {res.display}
                                        </span>
                                        <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "var(--text-muted)" }}>↗</span>
                                    </div>
                                    <p style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--text-primary)", margin: "0 0 0.3rem" }}>
                                        {res.label}
                                    </p>
                                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>
                                        {res.desc}
                                    </p>
                                </a>
                            ))}
                        </div>

                        {/* PDF download */}
                        <div
                            style={{
                                marginTop: "2rem",
                                padding: "1.25rem 1.5rem",
                                borderRadius: "var(--radius)",
                                background: "var(--bg-card)",
                                border: "1px solid var(--border)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "1rem",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <span style={{ fontSize: "1.5rem" }}>📄</span>
                                <div>
                                    <p style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-primary)", margin: 0 }}>
                                        Guía de Trámites — FIISMEC
                                    </p>
                                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0 }}>
                                        Documento oficial con todos los procedimientos académicos vigentes
                                    </p>
                                </div>
                            </div>
                            <a
                                href="/tramites-fiismec.pdf"
                                download
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    padding: "0.5rem 1.1rem",
                                    borderRadius: "var(--radius)",
                                    background: "#6366f118",
                                    border: "1px solid #6366f140",
                                    color: "#818cf8",
                                    textDecoration: "none",
                                    fontSize: "0.82rem",
                                    fontFamily: "var(--font-mono)",
                                    transition: "background 0.2s",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#6366f130")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#6366f118")}
                            >
                                ⬇ Descargar PDF
                            </a>
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <div
                        style={{
                            marginTop: "5rem",
                            marginBottom: "6rem",
                            padding: "2.5rem",
                            borderRadius: "var(--radius-lg)",
                            border: "1px solid var(--border)",
                            background: "var(--bg-secondary)",
                            textAlign: "center",
                        }}
                    >
                        <p className="mono" style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.75rem", letterSpacing: "0.1em" }}>
                            // sistema de gestión académica
                        </p>
                        <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                            ¿Listo para iniciar tu trámite?
                        </h3>
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1.75rem" }}>
                            Accede al SGI de la FIISMEC para gestionar tus trámites de tesis, prácticas y titulación de forma digital.
                        </p>
                        <a
                            href="https://unires.unheval.edu.pe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Ir a unires.unheval.edu.pe ↗
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Lightbox ── */}
            {lightbox && currentImg && currentSection && (
                <div
                    onClick={closeLightbox}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "rgba(4,6,14,0.96)",
                        backdropFilter: "blur(12px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem",
                        animation: "fadeIn 0.18s ease",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: "relative",
                            maxWidth: "min(90vw, 900px)",
                            maxHeight: "90vh",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1rem",
                            animation: "scaleIn 0.2s ease",
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={imgSrc(currentImg.file)}
                            alt={currentImg.caption}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "78vh",
                                objectFit: "contain",
                                borderRadius: "var(--radius-lg)",
                                border: `1px solid ${currentSection.color}40`,
                                boxShadow: `0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px ${currentSection.color}30`,
                            }}
                        />

                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                            <span className="mono" style={{ fontSize: "0.7rem", color: currentSection.color, padding: "0.15rem 0.6rem", background: `${currentSection.color}18`, border: `1px solid ${currentSection.color}35`, borderRadius: "999px" }}>
                                {lightbox.iIdx + 1} / {currentSection.images.length}
                            </span>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", margin: 0, textAlign: "center" }}>
                                {currentImg.caption}
                            </p>
                        </div>

                        {currentSection.images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevImg(); }}
                                    style={{
                                        position: "absolute",
                                        left: "-3.5rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "50%",
                                        border: `1px solid ${currentSection.color}50`,
                                        background: `${currentSection.color}18`,
                                        color: currentSection.color,
                                        cursor: "pointer",
                                        fontSize: "1.1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "background 0.2s",
                                    }}
                                    aria-label="Anterior"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); nextImg(); }}
                                    style={{
                                        position: "absolute",
                                        right: "-3.5rem",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "50%",
                                        border: `1px solid ${currentSection.color}50`,
                                        background: `${currentSection.color}18`,
                                        color: currentSection.color,
                                        cursor: "pointer",
                                        fontSize: "1.1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "background 0.2s",
                                    }}
                                    aria-label="Siguiente"
                                >
                                    ›
                                </button>
                            </>
                        )}
                    </div>

                    <button
                        onClick={closeLightbox}
                        aria-label="Cerrar"
                        style={{
                            position: "fixed",
                            top: "1.25rem",
                            right: "1.25rem",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "1px solid var(--border-subtle)",
                            background: "var(--bg-card)",
                            color: "var(--text-primary)",
                            cursor: "pointer",
                            fontSize: "1.1rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        ✕
                    </button>
                </div>
            )}

            <style>{`
        .hide-mobile { display: inline; }
        @media (max-width: 600px) {
          .hide-mobile { display: none; }
        }
        .img-card:hover .img-overlay { opacity: 1 !important; }
        .img-card:hover .thumb-img { transform: scale(1.04); }
        .tesis-card:hover { transform: translateY(-2px); border-color: #a855f745 !important; }
      `}</style>
        </>
    );
}
