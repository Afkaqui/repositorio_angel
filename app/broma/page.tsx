"use client";
import { useState } from "react";

const pasos = [
    { de: "sandro", texto: "Oye Angel, ¿te sabes la broma?" },
    { de: "angel", texto: "No..." },
    { de: "sandro", texto: "Perfecto." },
    { de: "sandro", texto: "Ahora los dos." },
];

export default function Broma() {
    const [visibles, setVisibles] = useState(1);

    const siguiente = () => {
        if (visibles < pasos.length) setVisibles((v) => v + 1);
    };

    const terminado = visibles >= pasos.length;

    return (
        <main
            style={{
                minHeight: "100vh",
                background: "#0f172a",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            <p
                style={{
                    color: "#475569",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    marginBottom: "2rem",
                    textTransform: "uppercase",
                }}
            >
                Hoy — {new Date().toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" })}
            </p>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    width: "100%",
                    maxWidth: "380px",
                }}
            >
                {pasos.slice(0, visibles).map((paso, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            justifyContent: paso.de === "angel" ? "flex-end" : "flex-start",
                            animation: "fadeUp 0.3s ease",
                        }}
                    >
                        <div
                            style={{
                                maxWidth: "75%",
                                padding: "0.65rem 1rem",
                                borderRadius: paso.de === "angel"
                                    ? "18px 18px 4px 18px"
                                    : "18px 18px 18px 4px",
                                background: paso.de === "angel" ? "#2563eb" : "#1e293b",
                                color: paso.de === "angel" ? "#fff" : "#e2e8f0",
                                fontSize: "0.95rem",
                                lineHeight: 1.5,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                            }}
                        >
                            {paso.de === "sandro" && (
                                <span style={{ fontSize: "0.65rem", color: "#38bdf8", display: "block", marginBottom: "0.2rem", fontWeight: 600 }}>
                                    Sandro
                                </span>
                            )}
                            {paso.texto}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: "2rem", textAlign: "center" }}>
                {!terminado ? (
                    <button
                        onClick={siguiente}
                        style={{
                            background: "none",
                            border: "1px solid #334155",
                            color: "#94a3b8",
                            padding: "0.5rem 1.5rem",
                            borderRadius: "999px",
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "#2563eb";
                            (e.currentTarget as HTMLElement).style.color = "#2563eb";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "#334155";
                            (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                        }}
                    >
                        ...
                    </button>
                ) : (
                    <p style={{ color: "#475569", fontSize: "0.8rem", marginTop: "1rem" }}>
                        😶
                    </p>
                )}
            </div>

            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </main>
    );
}
