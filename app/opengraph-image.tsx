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
                    background: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Glow top-right */}
                <div
                    style={{
                        position: "absolute",
                        top: "-80px",
                        right: "-80px",
                        width: "480px",
                        height: "480px",
                        background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />
                {/* Glow bottom-left */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        left: "-80px",
                        width: "380px",
                        height: "380px",
                        background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />
                {/* Top accent bar */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "6px",
                        background: "linear-gradient(90deg, #2563eb, #0ea5e9)",
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
                        color: "#0f172a",
                        lineHeight: 1.05,
                        marginBottom: "16px",
                        display: "flex",
                    }}
                >
                    Angel Kaqui
                </div>

                {/* Title */}
                <div
                    style={{
                        fontSize: "26px",
                        color: "#334155",
                        marginBottom: "44px",
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
                                background: "rgba(37,99,235,0.08)",
                                border: "1px solid rgba(37,99,235,0.25)",
                                color: "#2563eb",
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
