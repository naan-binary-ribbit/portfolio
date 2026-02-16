"use client";

import { useEffect, useRef } from "react";

export default function AsciiWaves() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        // Resize handler
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        // Mouse handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        // ASCII characters for waves
        const chars = " .:-=+*#%@";

        const render = () => {
            // Clear with destination-out to fade out previous frames while keeping background transparent
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'source-over';

            ctx.fillStyle = "rgba(204, 68, 0, 0.3)"; // Retro orange, low opacity
            ctx.font = "12px monospace";

            const cols = Math.floor(canvas.width / 15);
            const rows = Math.floor(canvas.height / 15);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * 15;
                    const y = j * 15;

                    // Calculate distance from mouse
                    const dx = x - mouseRef.current.x;
                    const dy = y - mouseRef.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Only draw if close to mouse (e.g., within 200px)
                    if (dist < 250) {
                        // Create wave effect based on distance and time
                        const angle = dist * 0.05 - time;
                        const wave = Math.sin(angle);

                        // Map wave to character
                        const charIndex = Math.floor(((wave + 1) / 2) * chars.length);
                        const char = chars[Math.max(0, Math.min(chars.length - 1, charIndex))];

                        // Opacity fades with distance
                        const opacity = 1 - Math.min(1, dist / 250);
                        ctx.globalAlpha = opacity;

                        // Occasional random glitch character
                        if (Math.random() > 0.98) {
                            ctx.fillText(Math.random() > 0.5 ? "0" : "1", x, y);
                        } else {
                            ctx.fillText(char, x, y);
                        }
                    }
                }
            }

            ctx.globalAlpha = 1;

            time += 0.05;
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}
