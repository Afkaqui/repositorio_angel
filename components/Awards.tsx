import { awards } from "@/lib/data";

const typeConfig = {
    winner: { label: "🏆 Ganador", color: "#f59e0b" },
    finalist: { label: "🥈 Finalista", color: "#8b5cf6" },
    representative: { label: "🌟 Representante", color: "#6366f1" },
};

export default function Awards() {
    // Group by year, descending
    const byYear = awards.reduce<Record<string, typeof awards>>((acc, award) => {
        if (!acc[award.year]) acc[award.year] = [];
        acc[award.year].push(award);
        return acc;
    }, {});

    const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

    return (
        <section id="awards" style={{ background: "var(--bg-secondary)" }}>
            <div className="section">
                <p className="section-label">04. Reconocimientos</p>
                <h2 className="section-title">
                    Logros &amp; <span className="gradient-text">Premios</span>
                </h2>
                <p className="section-subtitle">
                    Competencias, hackathons y fondos ganados a lo largo del camino.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    {years.map((year) => (
                        <div key={year}>
                            {/* Year header */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "1.1rem",
                                }}
                            >
                                <span
                                    className="mono"
                                    style={{
                                        fontSize: "0.75rem",
                                        color: "var(--accent-primary)",
                                        letterSpacing: "0.14em",
                                        fontWeight: 700,
                                    }}
                                >
                                    {year}
                                </span>
                                <div
                                    style={{
                                        flex: 1,
                                        height: "1px",
                                        background:
                                            "linear-gradient(90deg, var(--accent-primary)40, transparent)",
                                    }}
                                />
                            </div>

                            {/* Awards grid */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                                    gap: "1rem",
                                }}
                            >
                                {byYear[year].map((award) => {
                                    const cfg = typeConfig[award.type];
                                    return (
                                        <div
                                            key={award.id}
                                            className="glass"
                                            style={{
                                                padding: "1.2rem 1.4rem",
                                                borderRadius: "var(--radius)",
                                                border: `1px solid ${award.accentColor}22`,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "0.5rem",
                                                position: "relative",
                                                overflow: "hidden",
                                                transition: "transform 0.22s ease, box-shadow 0.22s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLDivElement).style.transform =
                                                    "translateY(-3px)";
                                                (e.currentTarget as HTMLDivElement).style.boxShadow =
                                                    `0 8px 28px rgba(0,0,0,0.4), 0 0 0 1px ${award.accentColor}30`;
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLDivElement).style.transform = "";
                                                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                                            }}
                                        >
                                            {/* Subtle glow */}
                                            <div
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    top: "-30px",
                                                    right: "-30px",
                                                    width: "120px",
                                                    height: "120px",
                                                    background: `radial-gradient(circle, ${award.accentColor}14 0%, transparent 70%)`,
                                                    pointerEvents: "none",
                                                }}
                                            />

                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    gap: "0.5rem",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "0.65rem",
                                                        fontFamily: "var(--font-mono)",
                                                        color: cfg.color,
                                                        background: `${cfg.color}15`,
                                                        border: `1px solid ${cfg.color}35`,
                                                        borderRadius: "999px",
                                                        padding: "0.1rem 0.55rem",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {cfg.label}
                                                </span>
                                            </div>

                                            <p
                                                style={{
                                                    fontFamily: "var(--font-sans)",
                                                    fontWeight: 600,
                                                    fontSize: "0.93rem",
                                                    color: "var(--text-primary)",
                                                    lineHeight: 1.45,
                                                    margin: 0,
                                                }}
                                            >
                                                {award.title}
                                            </p>

                                            <span
                                                style={{
                                                    fontSize: "0.75rem",
                                                    color: "var(--text-muted)",
                                                    fontFamily: "var(--font-mono)",
                                                }}
                                            >
                                                {award.organization}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
