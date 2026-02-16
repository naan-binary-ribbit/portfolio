import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import DevOpsSection from '@/components/sections/DevOpsSection';

export default function Home() {
    return (
        <div className="flex flex-col gap-0 pb-20 overflow-hidden">
            <HeroSection />

            <div className="relative">
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <DevOpsSection />

                {/* Background decorative grid line connecting sections */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-retro-orange/20 to-transparent -z-10" />
            </div>

            <footer className="text-center py-10 text-retro-offwhite/30 font-mono text-xs">
                System Architecture by Moeed Rehman © 2026. All Systems Operational.
            </footer>
        </div>
    )
}
