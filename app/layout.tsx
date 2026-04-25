import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "afkaqui | Angel Kaqui – Tech Lead & Fundador",
  description:
    "Portafolio de Angel Francisco Kaqui Aquino – Ingeniero de Sistemas (Décimo Superior, UNHEVAL), Tech Lead y Fundador de startups Deep Tech. EYWA, Lucy, BioMulch Andino.",
  keywords: [
    "Tech Lead", "Fundador", "Ingeniero de Sistemas", "Deep Tech", "Next.js",
    "Python", "Machine Learning", "Power BI", "DataOps", "HealthTech", "afkaqui"
  ],
  authors: [{ name: "Angel Francisco Kaqui Aquino", url: "https://github.com/afkaqui" }],
  openGraph: {
    title: "afkaqui | Angel Kaqui – Tech Lead & Fundador",
    description:
      "Fundador de startups Deep Tech (EYWA, Lucy, BioMulch Andino) e Ingeniero de Sistemas con distinción académica. Portafolio de proyectos, experiencia y reconocimientos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
