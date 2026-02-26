import { skills } from "@/lib/data";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" style={{ background: "var(--bg-secondary)" }}>
            <div className="section">
                <p className="section-label">01. Sobre mí</p>
                <h2 className="section-title">
                    Construyendo el futuro,{" "}
                    <span className="gradient-text">una línea a la vez</span>
                </h2>
                <p className="section-subtitle">
                    Ingeniero de Sistemas con pasión por las tecnologías emergentes y el desarrollo de
                    productos que generan impacto real.
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
                        className="animate-scaleIn"
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
                                { label: "Proyectos", value: "10+" },
                                { label: "Tecnologías", value: "20+" },
                                { label: "Años exp.", value: "3+" },
                            ].map((s) => (
                                <div key={s.label} style={{ textAlign: "center" }}>
                                    <div
                                        style={{
                                            fontSize: "1.5rem",
                                            fontWeight: 700,
                                            fontFamily: "var(--font-sans)",
                                            background: "var(--gradient-accent)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {s.value}
                                    </div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Text + Skills */}
                    <div>
                        <div style={{ marginBottom: "2.5rem" }}>
                            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "1rem" }}>
                                Soy <strong style={{ color: "var(--text-primary)" }}>Angel Francisco Kaqui Aquino</strong> —
                                Ingeniero de Sistemas y Full Stack Developer apasionado por construir soluciones
                                que combinan diseño, rendimiento e inteligencia artificial.
                            </p>
                            <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "1rem" }}>
                                Me especializo en el ecosistema JavaScript moderno (React, Next.js, Node.js) y
                                desarrollo backend con Python/FastAPI. Tengo especial interés en la integración
                                de IA en productos reales — como en mis proyectos{" "}
                                <strong style={{ color: "var(--accent-light)" }}>Eywa</strong> y{" "}
                                <strong style={{ color: "var(--accent-2)" }}>Lucy</strong>.
                            </p>
                            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                                Busco constantemente resolver problemas complejos con arquitecturas limpias y
                                código que escale. Trabajo de forma remota y colaboro con equipos distribuidos.
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
