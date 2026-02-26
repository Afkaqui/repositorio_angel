import { experience } from "@/lib/data";

const typeColors: Record<string, string> = {
    work: "#6366f1",
    freelance: "#06b6d4",
    education: "#f59e0b",
};

const typeLabels: Record<string, string> = {
    work: "Trabajo",
    freelance: "Freelance",
    education: "Educación",
};

export default function Experience() {
    return (
        <section id="experience" style={{ background: "var(--bg-secondary)" }}>
            <div className="section">
                <p className="section-label">03. Experiencia</p>
                <h2 className="section-title">
                    Mi <span className="gradient-text">trayectoria</span>
                </h2>
                <p className="section-subtitle">
                    Del aula a la producción — construyendo experiencia en cada proyecto.
                </p>

                {/* Timeline */}
                <div style={{ position: "relative" }}>
                    {/* Vertical line */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            left: "16px",
                            top: 0,
                            bottom: 0,
                            width: "2px",
                            background:
                                "linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)",
                            opacity: 0.3,
                        }}
                    />

                    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingLeft: "3rem" }}>
                        {experience.map((exp) => {
                            const color = typeColors[exp.type] ?? "#6366f1";
                            return (
                                <article
                                    key={exp.id}
                                    style={{ position: "relative" }}
                                >
                                    {/* Timeline dot */}
                                    <div
                                        aria-hidden="true"
                                        style={{
                                            position: "absolute",
                                            left: "-2.85rem",
                                            top: "1.25rem",
                                            width: "14px",
                                            height: "14px",
                                            borderRadius: "50%",
                                            background: color,
                                            border: "3px solid var(--bg-secondary)",
                                            boxShadow: `0 0 10px ${color}60`,
                                        }}
                                    />

                                    <div
                                        className="glass"
                                        style={{
                                            padding: "1.75rem 2rem",
                                            borderRadius: "var(--radius-lg)",
                                            border: `1px solid ${color}20`,
                                            transition: "border-color 0.2s ease",
                                        }}
                                    >
                                        {/* Header */}
                                        <div
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                alignItems: "flex-start",
                                                justifyContent: "space-between",
                                                gap: "0.5rem",
                                                marginBottom: "0.75rem",
                                            }}
                                        >
                                            <div>
                                                <h3
                                                    style={{
                                                        fontFamily: "var(--font-sans)",
                                                        fontWeight: 700,
                                                        fontSize: "1.2rem",
                                                        color: "var(--text-primary)",
                                                        marginBottom: "0.2rem",
                                                    }}
                                                >
                                                    {exp.role}
                                                </h3>
                                                <span
                                                    style={{
                                                        fontFamily: "var(--font-sans)",
                                                        fontWeight: 600,
                                                        fontSize: "0.95rem",
                                                        color,
                                                    }}
                                                >
                                                    {exp.company}
                                                </span>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.3rem" }}>
                                                <span
                                                    className="mono"
                                                    style={{
                                                        fontSize: "0.78rem",
                                                        color: "var(--text-muted)",
                                                    }}
                                                >
                                                    {exp.period}
                                                </span>
                                                <span
                                                    style={{
                                                        padding: "0.15rem 0.6rem",
                                                        borderRadius: "999px",
                                                        background: `${color}15`,
                                                        border: `1px solid ${color}35`,
                                                        fontSize: "0.7rem",
                                                        color,
                                                        fontFamily: "var(--font-mono)",
                                                    }}
                                                >
                                                    {typeLabels[exp.type]}
                                                </span>
                                            </div>
                                        </div>

                                        <p
                                            style={{
                                                color: "var(--text-secondary)",
                                                fontSize: "0.92rem",
                                                marginBottom: "1rem",
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {exp.description}
                                        </p>

                                        <ul
                                            style={{
                                                listStyle: "none",
                                                padding: 0,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.5rem",
                                                marginBottom: "1.25rem",
                                            }}
                                        >
                                            {exp.bullets.map((b, i) => (
                                                <li
                                                    key={i}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "flex-start",
                                                        gap: "0.6rem",
                                                        color: "var(--text-secondary)",
                                                        fontSize: "0.9rem",
                                                    }}
                                                >
                                                    <span style={{ color, marginTop: "0.2rem", flexShrink: 0 }}>▸</span>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                            {exp.tech.map((t) => (
                                                <span key={t} className="tag" style={{ fontSize: "0.68rem" }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
