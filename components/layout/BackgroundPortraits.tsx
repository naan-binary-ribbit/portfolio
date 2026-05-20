"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import DitheredImage from '@/components/ui/DitheredImage';

export default function BackgroundPortraits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Parallax offsets
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[1] pointer-events-none overflow-hidden select-none">

      {/* Background Portrait 1 - Top Leftish Area */}
      <motion.div
        style={{ y: y1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 0.5 }}
        className="absolute top-[15%] left-[10%] hidden lg:flex flex-col gap-3 mix-blend-screen"
      >
        <div className="relative w-48 h-64 border border-retro-green/10 bg-black/10 overflow-hidden">
          <DitheredImage
            src="/assets/glitch_green.png"
            colorNum={2}
            pixelSize={2}
            className="transition-transform duration-[10s] hover:scale-110"
          />
          {/* Glitchy Loading Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-retro-green/20">
            <motion.div
              className="h-full bg-retro-green/60"
              animate={{
                width: ["0%", "40%", "35%", "70%", "65%", "100%", "0%"],
                opacity: [0.8, 0.4, 0.9, 0.5, 1, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="absolute bottom-2 right-2 text-[8px] font-mono text-retro-green/40">
            SYNCING_NEURAL_LINK...
          </div>
        </div>
        <div className="text-[10px] font-mono text-retro-green/20 tracking-[0.5em] uppercase">
          Bio_Signal_Detected
        </div>
      </motion.div>

      {/* Background Portrait 2 - Bottom Rightish Area */}
      <motion.div
        style={{ y: y2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute bottom-[20%] right-[15%] hidden lg:flex flex-col gap-3 items-end mix-blend-screen"
      >
        <div className="relative w-64 h-48 border border-retro-orange/10 bg-black/10 overflow-hidden">
          <DitheredImage
            src="/assets/glitch_orange.png"
            colorNum={2}
            pixelSize={2}
          />
          {/* Glitchy Loading Ring / Indicator */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
            <div className="w-12 h-[2px] bg-retro-orange/20 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-retro-orange/60"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="text-[8px] font-mono text-retro-orange/40 animate-pulse">
              M_DUMP [0xFB2]
            </div>
          </div>
        </div>
        <div className="text-[10px] font-mono text-retro-orange/20 tracking-[0.5em] uppercase">
          Memory_Archive_09
        </div>
      </motion.div>

      {/* Global Background Scanlines (on images only) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_2px] pointer-events-none opacity-10" />

    </div>
  );
}
