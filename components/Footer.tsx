export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                borderTop: "1px solid var(--border-subtle)",
                background: "var(--bg-secondary)",
                padding: "2rem 1.5rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                        className="mono"
                        style={{
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            background: "var(--gradient-accent)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        &lt;afkaqui /&gt;
                    </span>
                    <span style={{ color: "var(--border-subtle)" }}>|</span>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                        © {year} Angel Francisco Kaqui Aquino
                    </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <span
                        className="mono"
                        style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}
                    >
                        Built with{" "}
                        <span style={{ color: "var(--accent-light)" }}>Next.js 16</span> +{" "}
                        <span style={{ color: "var(--accent-2)" }}>TypeScript</span>
                    </span>

                    <div style={{ display: "flex", gap: "1rem" }}>
                        {[
                            { href: "https://github.com/afkaqui", label: "GH" },
                            { href: "https://linkedin.com/in/afkaqui", label: "LI" },
                            { href: "mailto:afkaqui@gmail.com", label: "ML" },
                        ].map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                target={l.label !== "ML" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="mono"
                                style={{
                                    fontSize: "0.75rem",
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.target as HTMLElement).style.color = "var(--accent-light)")
                                }
                                onMouseLeave={(e) =>
                                    ((e.target as HTMLElement).style.color = "var(--text-muted)")
                                }
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
