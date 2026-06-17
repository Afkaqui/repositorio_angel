"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ViewCounter() {
    const [count, setCount] = useState<number | null>(null);
    const { lang } = useLanguage();

    useEffect(() => {
        const key = "visited_afkaqui";
        const alreadyCounted = sessionStorage.getItem(key);
        const method = alreadyCounted ? "GET" : "POST";

        fetch("/api/views", { method })
            .then((r) => r.json())
            .then((d) => {
                if (d.ok) {
                    setCount(d.count);
                    if (!alreadyCounted) sessionStorage.setItem(key, "1");
                }
                // Si ok:false (BD caída) → no mostrar el contador
            })
            .catch(() => {
                // Error de red → no mostrar el contador
            });
    }, []);

    if (count === null) return null;

    return (
        <span
            title={lang === "es" ? "Visitas totales" : "Total visits"}
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
            }}
        >
            <span style={{ fontSize: "0.6rem", color: "var(--accent)" }}>●</span>
            {count.toLocaleString()} {lang === "es" ? "visitas" : "visits"}
        </span>
    );
}
