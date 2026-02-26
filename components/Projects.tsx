import { projects } from "@/lib/data";

const StatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; color: string }> = {
        production: { label: "En producción", color: "#22c55e" },
        development: { label: "En desarrollo", color: "#f59e0b" },
        research: { label: "Investigación", color: "#6366f1" },
    };
    const s = map[status] ?? map.production;
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                padding: "0.15rem 0.6rem",
                borderRadius: "999px",
                background: `${s.color}18`,
                border: `1px solid ${s.color}40`,
                fontSize: "0.7rem",
                color: s.color,
                fontFamily: "var(--font-mono)",
            }}
        >
            <span style={{ fontSize: "0.5rem" }}>●</span>
            {s.label}
        </span>
    );
};

export default function Projects() {
    const featured = projects.filter((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <section id="projects" style={{ background: "var(--bg-primary)" }}>
            <div className="section">
                <p className="section-label">02. Proyectos</p>
                <h2 className="section-title">
                    Lo que he <span className="gradient-text">construido</span>
                </h2>
                <p className="section-subtitle">
                    Proyectos reales que resuelven problemas reales — con tecnología moderna y código que
                    escala.
                </p>

                {/* Featured Projects */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
                    {featured.map((project, i) => (
                        <article
                            key={project.id}
                            className="glass project-card"
                            style={{
                                padding: "2rem",
                                borderRadius: "var(--radius-lg)",
                                border: `1px solid ${project.accentColor}25`,
                                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                                cursor: "default",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Background glow */}
                            <div
                                aria-hidden="true"
                                style={{
                                    position: "absolute",
                                    top: i % 2 === 0 ? "-40px" : "auto",
                                    bottom: i % 2 !== 0 ? "-40px" : "auto",
                                    right: "-40px",
                                    width: "250px",
                                    height: "250px",
                                    background: `radial-gradient(circle, ${project.accentColor}18 0%, transparent 70%)`,
                                    pointerEvents: "none",
                                }}
                            />

                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        gap: "0.75rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.75rem",
                                                marginBottom: "0.35rem",
                                            }}
                                        >
                                            <h3
                                                style={{
                                                    fontSize: "1.5rem",
                                                    fontFamily: "var(--font-sans)",
                                                    fontWeight: 700,
                                                    color: "var(--text-primary)",
                                                }}
                                            >
                                                {project.name}
                                            </h3>
                                            <StatusBadge status={project.status} />
                                        </div>
                                        <span
                                            className="mono"
                                            style={{ fontSize: "0.72rem", color: project.accentColor, letterSpacing: "0.08em" }}
                                        >
                                            Proyecto destacado
                                        </span>
                                    </div>

                                    <div style={{ display: "flex", gap: "0.75rem" }}>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`GitHub - ${project.name}`}
                                                style={{
                                                    color: "var(--text-secondary)",
                                                    textDecoration: "none",
                                                    fontSize: "0.85rem",
                                                    transition: "color 0.2s",
                                                }}
                                                className="icon-link"
                                            >
                                                GitHub ↗
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Live - ${project.name}`}
                                                style={{
                                                    color: "var(--text-secondary)",
                                                    textDecoration: "none",
                                                    fontSize: "0.85rem",
                                                    transition: "color 0.2s",
                                                }}
                                                className="icon-link"
                                            >
                                                Live ↗
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        marginBottom: "1.25rem",
                                        fontSize: "0.97rem",
                                        lineHeight: 1.75,
                                    }}
                                >
                                    {project.longDescription}
                                </p>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                    {project.tech.map((t) => (
                                        <span key={t} className="tag">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Other Projects */}
                {rest.length > 0 && (
                    <>
                        <h3
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "0.8rem",
                                color: "var(--text-muted)",
                                letterSpacing: "0.12em",
                                marginBottom: "1.25rem",
                            }}
                        >
                            — otros proyectos
                        </h3>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                                gap: "1.25rem",
                            }}
                        >
                            {rest.map((project) => (
                                <article
                                    key={project.id}
                                    className="glass project-card"
                                    style={{
                                        padding: "1.5rem",
                                        borderRadius: "var(--radius)",
                                        border: `1px solid ${project.accentColor}20`,
                                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                                        cursor: "default",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            marginBottom: "0.75rem",
                                        }}
                                    >
                                        <h4
                                            style={{
                                                fontFamily: "var(--font-sans)",
                                                fontWeight: 700,
                                                color: "var(--text-primary)",
                                                fontSize: "1.1rem",
                                            }}
                                        >
                                            {project.name}
                                        </h4>
                                        <StatusBadge status={project.status} />
                                    </div>
                                    <p
                                        style={{
                                            color: "var(--text-secondary)",
                                            fontSize: "0.88rem",
                                            lineHeight: 1.7,
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        {project.description}
                                    </p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                        {project.tech.slice(0, 4).map((t) => (
                                            <span key={t} className="tag" style={{ fontSize: "0.67rem" }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <style>{`
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.2);
        }
        .icon-link:hover { color: var(--accent-light) !important; }
      `}</style>
        </section>
    );
}
