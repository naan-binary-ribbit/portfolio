"use client";

import { motion } from "framer-motion";

export default function DevOpsSection() {
    return (
        <section className="container mx-auto px-4 py-20 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="h-px flex-1 bg-retro-offwhite/20" />
                <h2 className="font-techno text-2xl md:text-3xl text-retro-offwhite uppercase tracking-widest text-center">
                    Infrastructure & Orchestration
                </h2>
                <div className="h-px flex-1 bg-retro-offwhite/20" />
            </div>

            <div className="relative min-h-[400px] border border-retro-offwhite/10 bg-black/50 backdrop-blur-sm p-8 flex items-center justify-center">
                {/* Background Grid for this section */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(204,68,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(204,68,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                {/* Pipeline Diagram */}
                <div className="relative w-full max-w-4xl h-full flex flex-col md:flex-row items-center justify-between gap-8 z-10">

                    {/* Node: Code */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 border-2 border-retro-offwhite/50 rounded-lg flex items-center justify-center bg-retro-dark relative group hover:border-retro-orange transition-colors">
                            <span className="font-mono text-xs text-retro-offwhite">COMMIT</span>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-retro-orange rounded-full animate-pulse" />
                        </div>
                        <span className="font-mono text-xs text-retro-offwhite/50">GITHUB</span>
                    </div>

                    {/* Animated Path 1 */}
                    <div className="flex-1 h-1 bg-retro-offwhite/10 relative overflow-hidden hidden md:block">
                        <motion.div
                            className="absolute top-0 bottom-0 left-0 w-20 bg-retro-orange/50 blur-sm"
                            animate={{ x: ["-100%", "500%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    {/* Node: CI */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 border-2 border-retro-offwhite/30 rounded-full flex items-center justify-center bg-retro-dark relative group hover:border-retro-green transition-colors">
                            <span className="font-mono text-xs text-retro-offwhite">BUILD</span>
                            {/* Spinner */}
                            <div className="absolute inset-[-4px] border-2 border-retro-green/30 rounded-full border-t-retro-green animate-spin" />
                        </div>
                        <span className="font-mono text-xs text-retro-offwhite/50">ACTIONS</span>
                    </div>

                    {/* Animated Path 2 */}
                    <div className="flex-1 h-1 bg-retro-offwhite/10 relative overflow-hidden hidden md:block">
                        <motion.div
                            className="absolute top-0 bottom-0 left-0 w-20 bg-retro-green/50 blur-sm"
                            animate={{ x: ["-100%", "500%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                        />
                    </div>

                    {/* Node: Deploy */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 border-2 border-retro-offwhite/50 rounded-lg flex items-center justify-center bg-retro-dark relative group hover:border-retro-orange transition-colors">
                            <span className="font-mono text-xs text-retro-offwhite">DEPLOY</span>
                        </div>
                        <span className="font-mono text-xs text-retro-offwhite/50">DOCKER</span>
                    </div>

                    {/* Animated Path 3 */}
                    <div className="flex-1 h-1 bg-retro-offwhite/10 relative overflow-hidden hidden md:block">
                        <motion.div
                            className="absolute top-0 bottom-0 left-0 w-20 bg-retro-orange/50 blur-sm"
                            animate={{ x: ["-100%", "500%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
                        />
                    </div>


                    {/* Node: Cloud */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-28 h-20 border-2 border-dashed border-retro-offwhite/30 rounded-lg flex items-center justify-center bg-retro-dark relative group hover:border-retro-offwhite transition-colors">
                            <span className="font-mono text-xs text-retro-offwhite">CLUSTER</span>
                            <div className="absolute bottom-2 right-2 w-2 h-2 bg-retro-green rounded-full animate-ping" />
                        </div>
                        <span className="font-mono text-xs text-retro-offwhite/50">AWS/DIGITALOCEAN</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
