"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Terminal } from 'lucide-react';

export default function DisclaimerPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show after a small delay
        const timer = setTimeout(() => setIsOpen(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: -20 }}
                        transition={{ type: "spring", damping: 20, stiffness: 200 }}
                        className="relative w-full max-w-lg border-2 border-retro-red bg-black p-8 shadow-[0_0_30px_rgba(255,17,0,0.3)] overflow-hidden"
                    >
                        {/* Glitch Overlay Effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,17,0,0.1)_1px,transparent_1px)] bg-[length:100%_4px]" />

                        <div className="relative z-10 flex flex-col items-center text-center gap-6">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-retro-red/10 border border-retro-red animate-pulse">
                                <AlertTriangle className="w-8 h-8 text-retro-red" />
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-2xl font-techno font-bold text-retro-red tracking-widest uppercase">
                                    SYSTEM_CRITICAL_NOTICE
                                </h2>
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-retro-red to-transparent" />
                            </div>

                            <p className="font-mono text-retro-offwhite text-sm leading-relaxed tracking-wide uppercase">
                                "warning, do not take this website seriously, this is just me fucking around and finding out"
                            </p>

                            {/* Cat GIF as requested - squared */}
                            <div className="w-48 h-48 relative border border-retro-red/20 overflow-hidden">
                                <img
                                    src="https://media1.tenor.com/m/wujhfJnnMDkAAAAd/he-died-cat-falling-over.gif"
                                    alt="Cat falling over"
                                    className="w-full h-full object-cover grayscale contrast-125"
                                />
                                <div className="absolute inset-0 bg-retro-red/10 pointer-events-none" />
                            </div>

                            <div className="flex flex-col gap-4 w-full pt-4">
                                <button
                                    onClick={handleDismiss}
                                    className="group relative px-6 py-3 border border-retro-red bg-retro-red/5 hover:bg-retro-red hover:text-black transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10 font-techno font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                                        <Terminal className="w-4 h-4" />
                                        ACKNOWLEDGE_LOGS
                                    </span>
                                    {/* Button Glitch Hover Effect */}
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                                </button>

                                <div className="flex items-center justify-between text-[10px] font-mono text-retro-red/40 uppercase tracking-tighter">
                                    <span>ERR_CODE: 0xBAD_IDEA</span>
                                    <span>STATUS: FUCKED_AROUND</span>
                                </div>
                            </div>
                        </div>

                        {/* Corner Markers */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-retro-red" />
                        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-retro-red" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-retro-red" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-retro-red" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
