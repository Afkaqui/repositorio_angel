"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/translations";

interface LanguageContextValue {
    lang: Lang;
    toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
    lang: "es",
    toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang") as Lang | null;
        if (saved === "es" || saved === "en") setLang(saved);
    }, []);

    const toggle = () => {
        setLang((prev) => {
            const next: Lang = prev === "es" ? "en" : "es";
            localStorage.setItem("lang", next);
            return next;
        });
    };

    return (
        <LanguageContext.Provider value={{ lang, toggle }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
