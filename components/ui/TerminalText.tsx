"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalTextProps {
    text: string | string[];
    speed?: number;
    className?: string;
    onComplete?: () => void;
    typingDelay?: number;
}

export default function TerminalText({
    text,
    speed = 30,
    className = "",
    onComplete,
    typingDelay = 0
}: TerminalTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    // Handle array of strings or single string
    const textToType = Array.isArray(text) ? text.join('\n') : text;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        // Initial delay
        const startTimeout = setTimeout(() => {
            setIsTyping(true);
        }, typingDelay);

        return () => clearTimeout(startTimeout);
    }, [typingDelay]);

    useEffect(() => {
        if (!isTyping) return;

        if (currentIndex < textToType.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + textToType[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            if (onComplete) onComplete();
        }
    }, [currentIndex, isTyping, speed, textToType, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[1ch] h-[1.2em] bg-retro-green align-middle ml-1"
            />
        </span>
    );
}
