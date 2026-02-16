import clsx from 'clsx';
import { ReactNode } from 'react';

interface RetroContainerProps {
    children: ReactNode;
    className?: string;
    title?: string;
}

export default function RetroContainer({ children, className, title }: RetroContainerProps) {
    return (
        <div className={clsx("relative border border-retro-charcoal bg-black/50 backdrop-blur-sm p-6 group", className)}>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-retro-orange opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-retro-orange opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-retro-orange opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-retro-orange opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Header if title exists */}
            {title && (
                <div className="absolute -top-3 left-4 bg-black px-2 text-xs font-techno text-retro-orange uppercase tracking-widest">
                    {title}
                </div>
            )}

            {children}
        </div>
    );
}
