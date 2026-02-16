export default function GridBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Perspective Grid */}
            <div className="absolute inset-0 preserve-3d perspective-1000">
                <div
                    className="absolute inset-x-[-50%] top-[-50%] bottom-[-50%] w-[200%] h-[200%] animate-grid-move"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(204, 68, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(204, 68, 0, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px',
                        transform: 'rotateX(60deg) translateY(-100px) translateZ(-200px)',
                        maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
                    }}
                />
            </div>

            {/* Horizon Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-retro-dark via-retro-dark/80 to-transparent" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-retro-orange/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-retro-orange/30 to-transparent" />
        </div>
    );
}
