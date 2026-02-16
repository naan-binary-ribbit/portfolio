"use client";

import RetroContainer from "@/components/ui/RetroContainer";
import { Cpu, Server, Database, Globe, CreditCard, Shield } from "lucide-react";

const skills = [
    {
        category: "Node.js Core",
        icon: <Server className="w-5 h-5" />,
        items: ["Express", "Fastify", "NestJS", "Socket.io", "PM2"]
    },
    {
        category: "Golang Systems",
        icon: <Cpu className="w-5 h-5" />,
        items: ["GORM", "Fiber", "Gin", "Chi", "Goroutines"]
    },
    {
        category: "Data Storage",
        icon: <Database className="w-5 h-5" />,
        items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "TypeORM"]
    },
    {
        category: "Infrastructure",
        icon: <Shield className="w-5 h-5" />,
        items: ["Docker", "CI/CD", "AWS", "DigitalOcean", "Linux"]
    },
    {
        category: "Web Frontend",
        icon: <Globe className="w-5 h-5" />,
        items: ["Vue", "Nuxt.js", "SvelteKit", "Tailwind", "SASS"]
    },
    {
        category: "Integrations",
        icon: <CreditCard className="w-5 h-5" />,
        items: ["Stripe", "Braintree", "RevenueCat", "Glassfy", "OpenAI"]
    }
];

export default function SkillsSection() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-retro-offwhite/20" />
                <h2 className="font-techno text-2xl md:text-3xl text-retro-offwhite uppercase tracking-widest">
                    Installed Modules
                </h2>
                <div className="h-px flex-1 bg-retro-offwhite/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <RetroContainer key={index} className="hover:bg-retro-offwhite/5 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-retro-orange">
                            {skill.icon}
                            <h3 className="font-mono text-sm uppercase tracking-wider font-bold">
                                {skill.category}
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 text-xs font-mono border border-retro-offwhite/20 text-retro-offwhite/80 hover:border-retro-green hover:text-retro-green transition-colors cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </RetroContainer>
                ))}
            </div>
        </section>
    );
}
