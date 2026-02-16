"use client";

import RetroContainer from "@/components/ui/RetroContainer";

const projects = [
    {
        title: "Payment Gateway Integration",
        type: "DEPLOYMENT",
        status: "ACTIVE",
        stack: ["Stripe", "Braintree", "Node.js"],
        description: "Secure payment processing integration for web applications, ensuring PCI compliance and seamless transactions."
    },
    {
        title: "GenAI Integration",
        type: "MODULE",
        status: "BETA",
        stack: ["OpenAI API", "Zod", "Prompt Eng"],
        description: "Integrated Generative AI for backend processing, including structured output validation via Zod."
    },
    {
        title: "Emotion Detection Survey",
        type: "RESEARCH",
        status: "PUBLISHED",
        stack: ["NLP", "Data Analysis"],
        description: "Co-authored published survey paper on emotion detection from text in social media platforms."
    },
    {
        title: "Dean's Merit Award",
        type: "ACHIEVEMENT",
        status: "GRANTED",
        stack: ["UMT", "Academic Excellence"],
        description: "Awarded for outstanding academic performance during Master of Computer Science."
    }
];

export default function ProjectsSection() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-retro-offwhite/20" />
                <h2 className="font-techno text-2xl md:text-3xl text-retro-offwhite uppercase tracking-widest">
                    System Deployments
                </h2>
                <div className="h-px flex-1 bg-retro-offwhite/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <RetroContainer key={index} className="group hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="px-2 py-1 bg-retro-orange/10 text-retro-orange text-xs font-mono font-bold uppercase tracking-wider border border-retro-orange/20">
                                {project.type}
                            </div>
                            <div className="text-xs font-mono text-retro-green animate-pulse">
                                [{project.status}]
                            </div>
                        </div>

                        <h3 className="font-techno text-xl text-retro-offwhite mb-2 group-hover:text-retro-orange transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-retro-offwhite/70 text-sm font-mono mb-4 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                            {project.stack.map((tech, i) => (
                                <span key={i} className="text-xs text-retro-offwhite/50 font-mono">
                                    #{tech}
                                </span>
                            ))}
                        </div>
                    </RetroContainer>
                ))}
            </div>
        </section>
    );
}
