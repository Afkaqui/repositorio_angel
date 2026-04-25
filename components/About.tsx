"use client";
import { skills } from "@/lib/data";
import Image from "next/image";
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
                    Ingeniero de Sistemas (Décimo Superior, UNHEVAL) · Fundador de startups Deep Tech ·
                    Apasionado por resolver problemas estructurales con datos e inteligencia artificial.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.6fr",
                        gap: "4rem",
                        alignItems: "start",
                    }}
                    className="about-grid"
                >
                    {/* Profile image */}
                    <div
                        style={{ position: "relative", maxWidth: "340px" }}
                        className="reveal-left"
                    >
                        <div
                            style={{
                                position: "relative",
                                borderRadius: "var(--radius-lg)",
                                overflow: "hidden",
                                border: "1px solid var(--border)",
                                boxShadow: "var(--shadow-glow)",
                            }}
                        >
                            <Image
                                src="/profile.png"
                                alt="Angel Francisco Kaqui Aquino – afkaqui"
                                width={340}
                                height={400}
                                style={{ objectFit: "cover", display: "block", width: "100%", height: "auto" }}
                                priority
                            />
                            {/* Overlay gradient */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: "50%",
                                    background:
                                        "linear-gradient(to top, rgba(8,11,20,0.85), transparent)",
                                }}
                            />
                        </div>
                        {/* Decorative corner */}
                        <div
                            style={{
                                position: "absolute",
                                top: "-12px",
                                right: "-12px",
                                width: "80px",
                                height: "80px",
                                border: "2px solid var(--accent)",
                                borderRadius: "var(--radius)",
                                opacity: 0.4,
                                pointerEvents: "none",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: "-12px",
                                left: "-12px",
                                width: "60px",
                                height: "60px",
                                border: "2px solid var(--accent-2)",
                                borderRadius: "var(--radius)",
                                opacity: 0.35,
                                pointerEvents: "none",
                            }}
                        />

                        {/* Stats card */}
                        <div
                            className="glass animate-fadeInUp"
                            style={{
                                marginTop: "1.5rem",
                                padding: "1.2rem 1.5rem",
                                display: "flex",
                                justifyContent: "space-around",
                                gap: "1rem",
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
                    </div>

                    {/* Text + Skills */}
                    <div className="reveal" style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}>
                        <div style={{ marginBottom: "2.5rem" }}>
                            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "1rem" }}>
                                Soy <strong style={{ color: "var(--text-primary)" }}>Angel Francisco Kaqui Aquino</strong> —
                                Egresado de Ingeniería de Sistemas en la UNHEVAL (Décimo Superior), con estudios en la
                                Universidad de Manizales (Colombia) y especialización en Business Intelligence y Gestión de
                                Proyectos en la UNMSM (Lima).
                            </p>
                            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "1rem" }}>
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
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
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
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
