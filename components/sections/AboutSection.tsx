"use client";

import RetroContainer from "@/components/ui/RetroContainer";

export default function AboutSection() {
    return (
        <section className="container mx-auto px-4 py-20 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Profile Stats */}
                <RetroContainer title="SYSTEM_PROFILE" className="h-full">
                    <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                        <div className="flex flex-col gap-1">
                            <span className="text-retro-offwhite/50 text-xs uppercase">Identity</span>
                            <span className="text-retro-offwhite">Moeed Rehman</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-retro-offwhite/50 text-xs uppercase">Classification</span>
                            <span className="text-retro-orange">Backend Specialist</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-retro-offwhite/50 text-xs uppercase">Location</span>
                            <span className="text-retro-offwhite">Lahore, PK</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-retro-offwhite/50 text-xs uppercase">Status</span>
                            <div className="flex items-center gap-2 text-retro-green">
                                <span className="animate-pulse w-2 h-2 rounded-full bg-retro-green"></span>
                                ONLINE
                            </div>
                        </div>

                        <div className="col-span-2 mt-4 border-t border-retro-offwhite/10 pt-4">
                            <span className="text-retro-offwhite/50 text-xs uppercase block mb-2">Core Directive</span>
                            <p className="text-retro-offwhite/80 leading-relaxed">
                                Architecting robust backend systems using Node.js and Golang.
                                Optimizing database performance and ensuring seamless API integration.
                            </p>
                        </div>
                    </div>
                </RetroContainer>

                {/* Technical Specs / Education */}
                <RetroContainer title="SYSTEM_SPECS" className="h-full">
                    <div className="space-y-6">

                        {/* Education 1 */}
                        <div className="group relative pl-4 border-l border-retro-offwhite/20 hover:border-retro-orange transition-colors">
                            <div className="text-xs font-mono text-retro-offwhite/50 mb-1">2019 — 2021</div>
                            <h3 className="font-techno text-lg text-retro-offwhite group-hover:text-retro-orange transition-colors">
                                Master of Computer Science
                            </h3>
                            <div className="text-sm font-mono text-retro-offwhite/70">
                                University of Management & Technology (3.75 CGPA)
                            </div>
                        </div>

                        {/* Education 2 */}
                        <div className="group relative pl-4 border-l border-retro-offwhite/20 hover:border-retro-orange transition-colors">
                            <div className="text-xs font-mono text-retro-offwhite/50 mb-1">2017 — 2019</div>
                            <h3 className="font-techno text-lg text-retro-offwhite group-hover:text-retro-orange transition-colors">
                                Associate Degree in CS
                            </h3>
                            <div className="text-sm font-mono text-retro-offwhite/70">
                                University of Central Punjab (3.34 CGPA)
                            </div>
                        </div>

                    </div>

                    {/* Decor */}
                    <div className="absolute top-4 right-4 flex flex-col gap-1 items-end">
                        <div className="w-16 h-[2px] bg-retro-offwhite/20" />
                        <div className="w-8 h-[2px] bg-retro-offwhite/20" />
                        <div className="w-4 h-[2px] bg-retro-offwhite/20" />
                    </div>
                </RetroContainer>
            </div>
        </section>
    );
}
