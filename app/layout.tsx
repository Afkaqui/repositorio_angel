import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "afkaqui | Angel Kaqui – Tech Lead & Fundador",
  description:
    "Portafolio de Angel Francisco Kaqui Aquino – Ingeniero de Sistemas (2.° Puesto · Orden de Mérito, UNHEVAL), Tech Lead y Fundador de startups Deep Tech. EYWA, Lucy, BioMulch Andino.",
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
    url: "https://afkaqui.vercel.app",
    siteName: "afkaqui",
    images: [
      {
        url: "https://afkaqui.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Angel Kaqui – Tech Lead & Fundador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "afkaqui | Angel Kaqui – Tech Lead & Fundador",
    description:
      "Fundador de startups Deep Tech (EYWA, Lucy, BioMulch Andino) e Ingeniero de Sistemas. Portafolio de proyectos y reconocimientos.",
    images: ["https://afkaqui.vercel.app/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
