"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#experience", label: "Experiencia" },
    { href: "#awards", label: "Reconocimientos" },
    { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: "all 0.3s ease",
                background: scrolled
                    ? "rgba(8, 11, 20, 0.85)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(99,102,241,0.12)" : "1px solid transparent",
                padding: "0 1.5rem",
            }}
        >
            <nav
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    height: "72px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        color: "var(--text-primary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                >
                    <span
                        style={{
                            background: "var(--gradient-accent)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        &lt;afkaqui
                    </span>
                    <span style={{ color: "var(--accent-light)" }}>/&gt;</span>
                </Link>

                {/* Desktop links */}
                <ul
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                        listStyle: "none",
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                style={{
                                    color: "var(--text-secondary)",
                                    textDecoration: "none",
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.target as HTMLElement).style.color = "var(--text-primary)")
                                }
                                onMouseLeave={(e) =>
                                    ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                                }
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://github.com/afkaqui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ padding: "0.45rem 1.1rem", fontSize: "0.85rem" }}
                        >
                            GitHub
                        </a>
                    </li>
                </ul>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    className="hamburger"
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "none",
                        flexDirection: "column",
                        gap: "5px",
                        padding: "8px",
                    }}
                >
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            style={{
                                display: "block",
                                width: "22px",
                                height: "2px",
                                background: "var(--text-primary)",
                                borderRadius: "2px",
                                transition: "all 0.3s ease",
                                transform:
                                    menuOpen && i === 0
                                        ? "rotate(45deg) translate(5px, 5px)"
                                        : menuOpen && i === 1
                                            ? "scaleX(0)"
                                            : menuOpen && i === 2
                                                ? "rotate(-45deg) translate(5px, -5px)"
                                                : "none",
                            }}
                        />
                    ))}
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    style={{
                        background: "var(--bg-secondary)",
                        borderTop: "1px solid var(--border-subtle)",
                        padding: "1rem 1.5rem 1.5rem",
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                display: "block",
                                padding: "0.75rem 0",
                                color: "var(--text-secondary)",
                                textDecoration: "none",
                                fontFamily: "var(--font-sans)",
                                fontWeight: 500,
                                borderBottom: "1px solid var(--border-subtle)",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
        </header>
    );
}
