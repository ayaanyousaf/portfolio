import { SpaceBackground } from "../components/SpaceBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection"
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { WorkSection } from "../components/WorkSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
      <div className="flex flex-col min-h-dvh bg-background text-foreground overflow-x-hidden"> 
        {/* Background Effects */}
        <SpaceBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="grow">
          <HomeSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <WorkSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

      </div>
    )
};