"use client";

import { useEffect, useRef } from "react";

interface GlobeProps {
    className?: string;
    size?: number;
}

export default function WireframeGlobe({ className, size = 400 }: GlobeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let rotation = 0;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = size / 2.5;

            ctx.strokeStyle = "rgba(204, 68, 0, 0.4)"; // Retro orange
            ctx.lineWidth = 1.5;

            // Draw latitude lines
            for (let lat = -90; lat <= 90; lat += 15) {
                ctx.beginPath();
                for (let lon = -180; lon <= 180; lon += 5) {
                    const radLat = (lat * Math.PI) / 180;
                    const radLon = ((lon + rotation) * Math.PI) / 180;

                    const x = centerX + radius * Math.cos(radLat) * Math.cos(radLon);
                    const y = centerY + radius * Math.sin(radLat);
                    // Simplified projection for 3D effect: modify z-index or opacity based on depth?
                    // For now, just a flat projection of a sphere

                    if (lon === -180) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            // Draw longitude lines
            for (let lon = 0; lon < 360; lon += 30) {
                ctx.beginPath();
                for (let lat = -90; lat <= 90; lat += 5) {
                    const radLat = (lat * Math.PI) / 180;
                    const radLon = ((lon + rotation) * Math.PI) / 180;

                    const x = centerX + radius * Math.cos(radLat) * Math.cos(radLon);
                    const y = centerY + radius * Math.sin(radLat);

                    if (lat === -90) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            rotation += 0.2;
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [size]);

    return (
        <canvas
            ref={canvasRef}
            width={size}
            height={size}
            className={className}
        />
    );
}
