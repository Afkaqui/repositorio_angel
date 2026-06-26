"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [activeSection, setActiveSection] = useState("home");
    const [dark, setDark] = useState(false);
    const { lang, toggle } = useLanguage();

    useEffect(() => {
        const saved = localStorage.getItem("darkMode") === "true";
        setDark(saved);
        document.documentElement.classList.toggle("dark", saved);
    }, []);

    const toggleDark = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("darkMode", String(next));
    };
    const t = translations.nav;

    const navLinks = [
        { href: "#about",      label: t.about[lang] },
        { href: "#projects",   label: t.projects[lang] },
        { href: "#experience", label: t.experience[lang] },
        { href: "#awards",     label: t.awards[lang] },
        { href: "#contact",    label: t.contact[lang] },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const total = document.body.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
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
                    ? dark ? "rgba(15, 23, 42, 0.88)" : "rgba(255, 255, 255, 0.88)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(37,99,235,0.1)" : "1px solid transparent",
                boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.06)" : "none",
                padding: "0 1.5rem",
            }}
        >
            {/* Scroll progress bar */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "2px",
                    width: `${progress}%`,
                    background: "var(--gradient-accent)",
                    transition: "width 0.1s linear",
                    zIndex: 101,
                }}
            />
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
                    {navLinks.map((link) => {
                        const sectionId = link.href.replace("#", "");
                        const isActive = activeSection === sectionId;
                        return (
                            <li key={link.href} style={{ position: "relative" }}>
                                <a
                                    href={link.href}
                                    style={{
                                        color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                                        textDecoration: "none",
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.9rem",
                                        fontWeight: isActive ? 600 : 500,
                                        transition: "color 0.2s ease, font-weight 0.2s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        ((e.target as HTMLElement).style.color = "var(--text-primary)")
                                    }
                                    onMouseLeave={(e) =>
                                        ((e.target as HTMLElement).style.color = isActive ? "var(--text-primary)" : "var(--text-secondary)")
                                    }
                                >
                                    {link.label}
                                </a>
                                {isActive && (
                                    <span
                                        style={{
                                            position: "absolute",
                                            bottom: "-4px",
                                            left: 0,
                                            right: 0,
                                            height: "2px",
                                            background: "var(--gradient-accent)",
                                            borderRadius: "1px",
                                        }}
                                    />
                                )}
                            </li>
                        );
                    })}
                    <li>
                        <button
                            onClick={toggleDark}
                            title={dark ? "Modo claro" : "Modo oscuro"}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "36px",
                                height: "36px",
                                borderRadius: "var(--radius)",
                                border: "1px solid var(--border)",
                                background: "transparent",
                                color: "var(--text-muted)",
                                fontSize: "1rem",
                                cursor: "pointer",
                                transition: "border-color 0.2s, color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                            }}
                        >
                            {dark ? "☀️" : "🌙"}
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={toggle}
                            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.35rem",
                                padding: "0.45rem 0.9rem",
                                borderRadius: "999px",
                                border: "1px solid var(--border)",
                                background: "transparent",
                                color: "var(--text-secondary)",
                                fontSize: "0.8rem",
                                fontFamily: "var(--font-mono)",
                                cursor: "pointer",
                                transition: "border-color 0.2s, color 0.2s",
                                letterSpacing: "0.05em",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                            }}
                        >
                            🌐 {lang === "es" ? "EN" : "ES"}
                        </button>
                    </li>
                    <li style={{ display: "flex", gap: "0.4rem" }}>
                        {[
                            {
                                href: "https://github.com/Afkaqui",
                                label: "GitHub",
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                ),
                            },
                            {
                                href: "https://www.linkedin.com/in/afkaqui/",
                                label: "LinkedIn",
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                ),
                            },
                        ].map(({ href, label, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "var(--radius)",
                                    border: "1px solid var(--border)",
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    transition: "border-color 0.2s, color 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                                }}
                            >
                                {icon}
                            </a>
                        ))}
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
                    <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                        <button
                            onClick={toggleDark}
                            style={{
                                flex: 1,
                                padding: "0.6rem",
                                borderRadius: "var(--radius)",
                                border: "1px solid var(--border)",
                                background: "transparent",
                                color: "var(--text-secondary)",
                                fontSize: "0.85rem",
                                cursor: "pointer",
                                fontFamily: "var(--font-mono)",
                            }}
                        >
                            {dark ? "☀️ Claro" : "🌙 Oscuro"}
                        </button>
                        <button
                            onClick={toggle}
                            style={{
                                flex: 1,
                                padding: "0.6rem",
                                borderRadius: "var(--radius)",
                                border: "1px solid var(--border)",
                                background: "transparent",
                                color: "var(--text-secondary)",
                                fontSize: "0.85rem",
                                cursor: "pointer",
                                fontFamily: "var(--font-mono)",
                            }}
                        >
                            🌐 {lang === "es" ? "English" : "Español"}
                        </button>
                    </div>
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
