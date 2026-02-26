"use client";
import { useEffect, useRef } from "react";

const titles = [
    "Ingeniero de Sistemas",
    "Full Stack Developer",
    "AI / ML Enthusiast",
    "Builder de Productos",
];

export default function Hero() {
    const titleRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let titleIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let timeout: ReturnType<typeof setTimeout>;

        const type = () => {
            const current = titles[titleIndex];
            if (!titleRef.current) return;

            if (!deleting) {
                titleRef.current.textContent = current.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    deleting = true;
                    timeout = setTimeout(type, 2000);
                    return;
                }
            } else {
                titleRef.current.textContent = current.slice(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    deleting = false;
                    titleIndex = (titleIndex + 1) % titles.length;
                }
            }
            timeout = setTimeout(type, deleting ? 50 : 80);
        };

        timeout = setTimeout(type, 600);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            id="home"
            className="grid-bg"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                padding: "0 1.5rem",
            }}
        >
            {/* Ambient glow orbs */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "15%",
                    left: "10%",
                    width: "520px",
                    height: "520px",
                    background:
                        "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
                    animation: "floatGlow 8s ease-in-out infinite",
                    pointerEvents: "none",
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    bottom: "20%",
                    right: "8%",
                    width: "380px",
                    height: "380px",
                    background:
                        "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
                    animation: "floatGlow 6s ease-in-out infinite reverse",
                    pointerEvents: "none",
                }}
            />

            {/* Content */}
            <div
                style={{
                    maxWidth: "900px",
                    width: "100%",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* Badge */}
                <div
                    className="animate-fadeInUp"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.35rem 1rem",
                        background: "rgba(99,102,241,0.08)",
                        border: "1px solid rgba(99,102,241,0.25)",
                        borderRadius: "999px",
                        marginBottom: "2rem",
                    }}
                >
                    <span style={{ fontSize: "0.55rem", color: "#22c55e" }}>●</span>
                    <span
                        className="mono"
                        style={{ fontSize: "0.78rem", color: "var(--accent-light)" }}
                    >
                        Disponible para proyectos
                    </span>
                </div>

                {/* Name */}
                <h1
                    className="animate-fadeInUp delay-100"
                    style={{
                        fontSize: "clamp(2.5rem, 7vw, 5rem)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: "1rem",
                        opacity: 0,
                    }}
                >
                    Angel{" "}
                    <span
                        style={{
                            background: "var(--gradient-accent)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Kaqui
                    </span>
                </h1>

                {/* Animated title */}
                <div
                    className="animate-fadeInUp delay-200"
                    style={{
                        fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                        color: "var(--text-secondary)",
                        marginBottom: "1.75rem",
                        minHeight: "2.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0",
                        opacity: 0,
                    }}
                >
                    <span ref={titleRef} style={{ color: "var(--text-primary)", fontFamily: "var(--font-sans)", fontWeight: 600 }} />
                    <span
                        style={{
                            display: "inline-block",
                            width: "2px",
                            height: "1.5em",
                            background: "var(--accent)",
                            marginLeft: "3px",
                            animation: "blink 1s step-end infinite",
                            borderRadius: "1px",
                        }}
                    />
                </div>

                {/* Description */}
                <p
                    className="animate-fadeInUp delay-300"
                    style={{
                        fontSize: "1.05rem",
                        color: "var(--text-secondary)",
                        maxWidth: "600px",
                        margin: "0 auto 2.5rem",
                        lineHeight: 1.8,
                        opacity: 0,
                    }}
                >
                    Construyo productos digitales con tecnología de punta. Del código al producto final — con
                    enfoque en rendimiento, escalabilidad y experiencia de usuario.
                </p>

                {/* CTA Buttons */}
                <div
                    className="animate-fadeInUp delay-400"
                    style={{
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginBottom: "4rem",
                        opacity: 0,
                    }}
                >
                    <a href="#projects" className="btn-primary" id="hero-cta-projects">
                        Ver Proyectos →
                    </a>
                    <a href="#contact" className="btn-outline" id="hero-cta-contact">
                        Contactar
                    </a>
                </div>

                {/* Tech badges */}
                <div
                    className="animate-fadeInUp delay-500"
                    style={{
                        display: "flex",
                        gap: "0.6rem",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        opacity: 0,
                    }}
                >
                    {["Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker"].map(
                        (tech) => (
                            <span key={tech} className="tag">
                                {tech}
                            </span>
                        )
                    )}
                </div>

                {/* Scroll indicator */}
                <div
                    className="animate-fadeInUp delay-600"
                    style={{
                        marginTop: "5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                        opacity: 0,
                    }}
                >
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                        scroll
                    </span>
                    <div
                        style={{
                            width: "1px",
                            height: "48px",
                            background:
                                "linear-gradient(to bottom, var(--accent-light), transparent)",
                            animation: "fadeIn 2s ease infinite alternate",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
