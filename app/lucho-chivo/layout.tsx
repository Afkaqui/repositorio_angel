import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lucho x Maryory | Trámites FIISMEC — UNHEVAL",
    description:
        "Guía de trámites académicos de la FIISMEC hecha con amor (y con desvelo) por Lucho, porque Maryory preguntó. Tesis, PPP, Bachiller, Constancias — todo lo que necesitas sin morir en el intento.",
    keywords: [
        "FIISMEC",
        "UNHEVAL",
        "trámites académicos",
        "tesis",
        "prácticas preprofesionales",
        "bachiller",
        "lucho",
        "maryory",
        "Huánuco",
    ],
    authors: [{ name: "Lucho (afkaqui)", url: "https://afkaqui.dev" }],
    openGraph: {
        type: "website",
        locale: "es_PE",
        url: "https://afkaqui.dev/lucho-chivo",
        siteName: "afkaqui.dev",
        title: "Lucho x Maryory 💛 | Guía de Trámites FIISMEC",
        description:
            "Hecha con amor y tres tazas de café. Todo lo que necesitas para tus trámites en la FIISMEC — UNHEVAL: tesis, PPP, bachiller, constancias y más.",
        images: [
            {
                url: "/og-lucho-chivo.png",
                width: 1200,
                height: 630,
                alt: "Lucho x Maryory — Guía de Trámites FIISMEC · UNHEVAL",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lucho x Maryory 💛 | Trámites FIISMEC",
        description:
            "Hecha con amor y tres tazas de café. Todo lo que necesitas para tus trámites en la FIISMEC — UNHEVAL.",
        images: ["/og-lucho-chivo.png"],
        creator: "@afkaqui",
    },
    other: {
        "lucho:dedicado-a": "Maryory 💛",
        "lucho:compilado-con": "desvelo, amor y Next.js",
        "lucho:git-commit": "fix: añadí los trámites que me preguntaste",
        "lucho:status": "v1.0-amor · sin bugs (según Lucho)",
    },
};

export default function LuchoChivoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
