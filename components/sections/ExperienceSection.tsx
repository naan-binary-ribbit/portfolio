"use client";

import RetroContainer from "@/components/ui/RetroContainer";

export default function ExperienceSection() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-retro-offwhite/20" />
                <h2 className="font-techno text-2xl md:text-3xl text-retro-offwhite uppercase tracking-widest">
                    System Event Log
                </h2>
                <div className="h-px flex-1 bg-retro-offwhite/20" />
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Role 1 */}
                <div className="relative pl-8 md:pl-0">
                    {/* Timeline line */}
                    <div className="absolute left-[11px] top-2 bottom-0 w-px bg-retro-offwhite/20 md:left-1/2 md:-ml-px" />

                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-6 h-6 rounded-full border border-retro-orange bg-retro-dark z-10 flex items-center justify-center md:left-1/2 md:-ml-3">
                        <div className="w-2 h-2 bg-retro-orange rounded-full animate-pulse" />
                    </div>

                    <div className="md:flex md:justify-between md:items-start group">
                        {/* Date (Left on desktop) */}
                        <div className="md:w-[45%] md:text-right md:pr-8 mb-2 md:mb-0">
                            <div className="font-mono text-retro-orange text-sm">Sep 2021 — PRESENT</div>
                            <div className="font-techno text-xl font-bold text-retro-offwhite">Devex IT</div>
                            <div className="font-mono text-xs text-retro-offwhite/50">Full Stack Developer</div>
                        </div>

                        {/* Content (Right on desktop) */}
                        <div className="md:w-[45%] md:pl-8">
                            <RetroContainer className="p-4 md:p-6 group-hover:border-retro-orange/50 transition-colors">
                                <ul className="space-y-3 text-sm text-retro-offwhite/80 font-mono list-disc list-inside marker:text-retro-green">
                                    <li>Integrated seamless RESTful APIs & 3rd-party services.</li>
                                    <li>Optimized database schemas & implemented Redis caching.</li>
                                    <li>Engineered secure authentication/authorization flows.</li>
                                    <li>Resolved performance bottlenecks in db queries & code.</li>
                                    <li>Integrated Payment Gateways (Stripe, etc.) securely.</li>
                                    <li>Implemented Prompt Engineering & GenAI via OpenAI.</li>
                                </ul>
                            </RetroContainer>
                        </div>
                    </div>
                </div>

                {/* End of Log */}
                <div className="flex justify-center pt-8">
                    <div className="font-mono text-xs text-retro-offwhite/30 tracking-widest">
                        -- END OF LOG --
                    </div>
                </div>

            </div>
        </section>
    );
}
