"use client";

import LetterGlitch from "@/components/ui/LetterGlitch";

export default function SideMatrixBars() {
    return (
        <>
            {/* Left Bar */}
            <div className="fixed left-0 top-0 bottom-0 w-20 border-r border-retro-orange/20 z-0 pointer-events-none hidden md:block">
                <LetterGlitch
                    glitchColors={['#CC4400', '#FFB000', '#E0E0E0']}
                    glitchSpeed={50}
                    centerVignette={false}
                    outerVignette={false}
                    smooth={true}
                />
            </div>

            {/* Right Bar */}
            <div className="fixed right-0 top-0 bottom-0 w-20 border-l border-retro-orange/20 z-0 pointer-events-none hidden md:block">
                <LetterGlitch
                    glitchColors={['#CC4400', '#FFB000', '#E0E0E0']}
                    glitchSpeed={50}
                    centerVignette={false}
                    outerVignette={false}
                    smooth={true}
                />
            </div>
        </>
    );
}
