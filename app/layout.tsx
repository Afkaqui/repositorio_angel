import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "afkaqui | Angel Kaqui – Full Stack Developer",
  description:
    "Portafolio personal de Angel Francisco Kaqui Aquino – Ingeniero de Sistemas y Full Stack Developer. Proyectos, experiencia y tecnología.",
  keywords: ["Full Stack Developer", "Ingeniero de Sistemas", "Next.js", "React", "afkaqui"],
  authors: [{ name: "Angel Francisco Kaqui Aquino", url: "https://github.com/afkaqui" }],
  openGraph: {
    title: "afkaqui | Angel Kaqui – Full Stack Developer",
    description: "Portafolio personal de Angel Francisco Kaqui Aquino.",
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
