import type { Metadata } from 'next'
import { JetBrains_Mono, Rajdhani } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import CRTOverlay from '@/components/layout/CRTOverlay'
import GridBackground from '@/components/layout/GridBackground'
import AsciiWaves from '@/components/layout/AsciiWaves'
import BackgroundPortraits from '@/components/layout/BackgroundPortraits'
import DisclaimerPopup from '@/components/ui/DisclaimerPopup'

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono'
})

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-rajdhani'
})

export const metadata: Metadata = {
    title: 'Moeed Rehman | Backend Engineer',
    description: 'Full Stack Node.js & Golang Developer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={clsx(
                jetbrainsMono.variable,
                rajdhani.variable,
                "bg-retro-dark text-retro-offwhite font-mono min-h-screen selection:bg-retro-orange selection:text-black overflow-x-hidden"
            )}>
                <CRTOverlay />
                <GridBackground />
                <BackgroundPortraits />
                <AsciiWaves />
                <DisclaimerPopup />
                <main className="relative z-10">
                    {children}
                </main>
            </body>
        </html>
    )
}
