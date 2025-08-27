import { SpaceBackground } from "../components/SpaceBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
      <div className="min-h-dvh bg-background text-foreground overflow-x-hidden"> 
        {/* Background Effects */}
        <SpaceBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}


      </div>
    )
};