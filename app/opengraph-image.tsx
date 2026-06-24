import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Angel Kaqui – Tech Lead & Fundador";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "#0f172a",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Glow top-left */}
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        left: "-100px",
                        width: "500px",
                        height: "500px",
                        background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />
                {/* Glow bottom-right */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-100px",
                        right: "-100px",
                        width: "400px",
                        height: "400px",
                        background: "radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />

                {/* Tag */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "28px",
                    }}
                >
                    <div
                        style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#2563eb",
                            display: "flex",
                        }}
                    />
                    <span
                        style={{
                            color: "#2563eb",
                            fontSize: "18px",
                            fontWeight: 600,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                        }}
                    >
                        afkaqui.vercel.app
                    </span>
                </div>

                {/* Name */}
                <div
                    style={{
                        fontSize: "72px",
                        fontWeight: 900,
                        color: "#f8fafc",
                        lineHeight: 1.05,
                        marginBottom: "20px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <span>Angel Kaqui</span>
                </div>

                {/* Title */}
                <div
                    style={{
                        fontSize: "28px",
                        color: "#94a3b8",
                        marginBottom: "40px",
                        display: "flex",
                    }}
                >
                    Ingeniero de Sistemas · Deep Tech · Lima, Perú 🇵🇪
                </div>

                {/* Pills */}
                <div style={{ display: "flex", gap: "12px" }}>
                    {["IA / ML", "IoT", "Full Stack", "Startup Founder"].map((tag) => (
                        <div
                            key={tag}
                            style={{
                                padding: "8px 20px",
                                borderRadius: "999px",
                                background: "rgba(37,99,235,0.15)",
                                border: "1px solid rgba(37,99,235,0.4)",
                                color: "#93c5fd",
                                fontSize: "18px",
                                fontWeight: 600,
                                display: "flex",
                            }}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}
