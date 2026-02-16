"use client";

import { motion } from "framer-motion";
import TerminalText from "@/components/ui/TerminalText";
import RetroContainer from "@/components/ui/RetroContainer";
import WireframeGlobe from "@/components/ui/WireframeGlobe";

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 relative overflow-hidden">
            {/* Left: Terminal Interface */}
            <div className="md:w-1/2 z-10 flex flex-col gap-6">
                <RetroContainer className="min-h-[300px] flex flex-col justify-center">
                    <div className="font-mono text-retro-green text-sm mb-4">
                        <span className="opacity-50">root@SYSTEM:~$</span> <span className="text-white">whoami</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-techno font-bold text-retro-offwhite mb-2 uppercase tracking-tight">
                        Moeed Rehman
                    </h1>

                    <div className="text-xl md:text-2xl text-retro-orange font-mono mb-4">
                        <TerminalText
                            text={[
                                "Backend Engineer",
                                "Systems Architect",
                                "Full Stack Developer"
                            ]}
                            speed={50}
                            typingDelay={1000}
                        />
                    </div>

                    <div className="text-retro-offwhite/70 text-sm md:text-base max-w-md leading-relaxed">
                        Specializing in scalable distributed systems, high-performance APIs, and robust infrastructure.
                        Building the backend of the future with Node.js & Golang.
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button className="px-6 py-2 border border-retro-orange text-retro-orange hover:bg-retro-orange hover:text-black transition-colors font-techno uppercase tracking-wider text-sm">
                            Initialize Protocol
                        </button>
                        <button className="px-6 py-2 border border-retro-offwhite/30 text-retro-offwhite/70 hover:border-retro-offwhite hover:text-retro-offwhite transition-colors font-techno uppercase tracking-wider text-sm">
                            View Logs
                        </button>
                    </div>
                </RetroContainer>
            </div>

            {/* Right: Visual System */}
            <div className="md:w-1/2 flex items-center justify-center relative mt-10 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-retro-orange/20 blur-[100px] rounded-full" />
                    <WireframeGlobe className="relative z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px]" size={800} />

                    {/* Orbital rings or data points could go here */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-retro-offwhite/10 rounded-full animate-spin-slow pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
