"use client";
import { skills } from "@/lib/data";
import React, { useEffect, useRef, useState } from "react";

function StatCounter({ target, suffix = "" }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let startTime = 0;
                    const duration = 1400;
                    const step = (ts: number) => {
                        if (!startTime) startTime = ts;
                        const progress = Math.min((ts - startTime) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(step);
                        else setCount(target);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div
            ref={ref}
            style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                fontFamily: "var(--font-sans)",
                background: "var(--gradient-accent)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
        >
            {count}{suffix}
        </div>
    );
}

export default function About() {
    return (
        <section id="about" style={{ background: "var(--bg-secondary)" }}>
            <div className="section">
                <p className="section-label">01. Sobre mí</p>
                <h2 className="section-title">
                    Arquitecto de soluciones{" "}
                    <span className="gradient-text">con propósito</span>
                </h2>
                <p className="section-subtitle">
                    Ingeniero de Sistemas (2.° Puesto · Orden de Mérito, UNHEVAL) · Fundador de startups Deep Tech ·
                    Apasionado por resolver problemas estructurales con datos e inteligencia artificial.
                </p>

                {/* Stats row */}
                <div
                    className="glass animate-fadeInUp"
                    style={{
                        marginBottom: "2.5rem",
                        padding: "1.2rem 1.5rem",
                        display: "flex",
                        justifyContent: "center",
                        gap: "3rem",
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        { label: "Proyectos", target: 10, suffix: "+" },
                        { label: "Premios", target: 15, suffix: "+" },
                        { label: "Años exp.", target: 3, suffix: "+" },
                    ].map((s) => (
                        <div key={s.label} style={{ textAlign: "center" }}>
                            <StatCounter target={s.target} suffix={s.suffix} />
                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Text */}
                <div className="reveal" style={{ "--reveal-delay": "0.15s", maxWidth: "780px" } as React.CSSProperties}>
                    <div style={{ marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                            Soy <strong style={{ color: "var(--text-primary)" }}>Angel Francisco Kaqui Aquino</strong> —
                            Egresado de Ingeniería de Sistemas en la UNHEVAL — <strong style={{ color: "var(--accent-light)" }}>2.° Puesto de 59 alumnos · Promedio 15.19</strong> (Constancia de Orden de Mérito N° 0026.10), con estudios en la
                            Universidad de Manizales (Colombia) y especialización en Business Intelligence y Gestión de
                            Proyectos en la UNMSM (Lima).
                        </p>
                        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                            Como Tech Lead y Fundador, lidero startups de base tecnológica (Deep Tech) que buscan
                            resolver problemas estructurales mediante el uso inteligente de datos:{" "}
                            <strong style={{ color: "var(--accent-light)" }}>EYWA</strong> (DataOps &amp; Sostenibilidad),{" "}
                            <strong style={{ color: "var(--accent-2)" }}>Lucy</strong> (HealthTech &amp; IA) y{" "}
                            <strong style={{ color: "#22c55e" }}>BioMulch Andino</strong> (Biotecnología &amp; Economía Circular).
                        </p>
                        <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                            Graduado del <strong style={{ color: "var(--text-primary)" }}>Aspire Leaders Program</strong> (fundado
                            por profesores de Harvard) y seleccionado en Jóvenes, Ciudadanía y Democracia (JCD).
                            Mi base operativa se extiende entre Huánuco, Lima y Pasco.
                        </p>
                    </div>

                    {/* Skill Groups */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                            gap: "1.25rem",
                        }}
                    >
                        {skills.map((group) => (
                            <div key={group.category}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        marginBottom: "0.6rem",
                                    }}
                                >
                                    <span style={{ fontSize: "1rem" }}>{group.icon}</span>
                                    <span
                                        className="mono"
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "var(--text-muted)",
                                            letterSpacing: "0.08em",
                                        }}
                                    >
                                        {group.category}
                                    </span>
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                    {group.skills.map((skill) => (
                                        <span key={skill} className="tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
