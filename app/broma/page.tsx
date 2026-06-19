"use client";
import { useState } from "react";

const miembros = [
    "Julca El Robado",
    "Leonardo Romero 2",
    "Ángel Francisco",
    "Eduardo Rosas UNHEVAL",
    "Kevin Claudio Montes",
    "Luis Manuela El Robado",
    "Pardavé",
    "Sandro",
];

const SANDRO = miembros.indexOf("Sandro");

const colores = [
    "#6366f1", "#f59e0b", "#10b981", "#ef4444",
    "#3b82f6", "#ec4899", "#14b8a6", "#f97316",
];

export default function Broma() {
    const [seleccionado, setSeleccionado] = useState<number | null>(null);
    const [girando, setGirando] = useState(false);
    const [resultado, setResultado] = useState(false);

    const girar = () => {
        if (girando) return;
        setGirando(true);
        setResultado(false);
        setSeleccionado(null);

        let iteraciones = 0;
        const total = 36;

        const siguiente = (delay: number) => {
            setTimeout(() => {
                iteraciones++;
                if (iteraciones < total) {
                    setSeleccionado(Math.floor(Math.random() * miembros.length));
                    const newDelay = delay + (iteraciones > 24 ? 60 : 6);
                    siguiente(newDelay);
                } else {
                    setSeleccionado(SANDRO);
                    setGirando(false);
                    setResultado(true);
                }
            }, delay);
        };

        siguiente(40);
    };

    return (
        <main
            style={{
                minHeight: "100vh",
                background: "radial-gradient(ellipse at top, #1e1b4b 0%, #0f0f0f 60%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 1rem",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <p style={{ color: "#6366f1", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    SORTEO OFICIAL
                </p>
                <h1
                    style={{
                        fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
                        fontWeight: 900,
                        color: "#fff",
                        margin: 0,
                        lineHeight: 1.1,
                    }}
                >
                    ¿Quién se va
                    <br />
                    <span style={{ background: "linear-gradient(90deg, #6366f1, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        del grupo?
                    </span>
                </h1>
            </div>

            {/* Grid de participantes */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "0.6rem",
                    width: "100%",
                    maxWidth: "420px",
                    marginBottom: "2rem",
                }}
            >
                {miembros.map((nombre, i) => {
                    const activo = seleccionado === i;
                    const color = colores[i];
                    return (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.65rem",
                                padding: "0.75rem 1rem",
                                borderRadius: "12px",
                                background: activo ? `${color}22` : "rgba(255,255,255,0.04)",
                                border: `2px solid ${activo ? color : "rgba(255,255,255,0.07)"}`,
                                transition: "all 0.07s ease",
                                boxShadow: activo ? `0 0 20px ${color}55` : "none",
                                transform: activo ? "scale(1.04)" : "scale(1)",
                            }}
                        >
                            <div
                                style={{
                                    width: "34px",
                                    height: "34px",
                                    borderRadius: "50%",
                                    background: activo ? color : "rgba(255,255,255,0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "0.85rem",
                                    fontWeight: 700,
                                    color: activo ? "#fff" : "rgba(255,255,255,0.5)",
                                    flexShrink: 0,
                                    transition: "all 0.07s ease",
                                }}
                            >
                                {nombre[0]}
                            </div>
                            <span
                                style={{
                                    fontSize: "0.78rem",
                                    fontWeight: activo ? 700 : 400,
                                    color: activo ? "#fff" : "rgba(255,255,255,0.45)",
                                    lineHeight: 1.3,
                                    transition: "all 0.07s ease",
                                }}
                            >
                                {nombre}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Botón */}
            <button
                onClick={girar}
                disabled={girando}
                style={{
                    background: girando
                        ? "rgba(255,255,255,0.06)"
                        : "linear-gradient(135deg, #6366f1, #ec4899)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    padding: "0.9rem 3rem",
                    fontSize: "1rem",
                    fontWeight: 800,
                    cursor: girando ? "not-allowed" : "pointer",
                    letterSpacing: "0.05em",
                    transition: "all 0.2s",
                    boxShadow: girando ? "none" : "0 0 30px rgba(99,102,241,0.5)",
                }}
            >
                {girando ? "🎰 Girando..." : "🎰 GIRAR"}
            </button>

            {/* Resultado */}
            {resultado && (
                <div
                    style={{
                        marginTop: "2rem",
                        textAlign: "center",
                        animation: "pop 0.5s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                >
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", marginBottom: "0.4rem" }}>
                        El sistema ha hablado
                    </p>
                    <p
                        style={{
                            fontSize: "clamp(1.4rem, 5vw, 2rem)",
                            fontWeight: 900,
                            color: "#f97316",
                            margin: "0 0 0.3rem",
                            textShadow: "0 0 30px #f9731688",
                        }}
                    >
                        🚪 Sandro, hasta luego.
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
                        Feliz aniversario de tu expulsión — por afk.
                    </p>
                </div>
            )}

            <style>{`
                @keyframes pop {
                    from { opacity: 0; transform: scale(0.7); }
                    to   { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </main>
    );
}
