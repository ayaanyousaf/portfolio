import { Loader } from "../components/ui/Loader";
import { StarsCanvas } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection"
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { WorkSection } from "../components/WorkSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

import React, { useState, useEffect } from "react"; // Use for loading screen

export const Home = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => { // Will run once, when the page is rendered
      setLoading(true); 
      setTimeout(() => {
        setLoading(false); 
      }, 1000) // 1 second load
    }, [])

    return (
      <div className="flex flex-col min-h-dvh bg-background text-foreground overflow-x-hidden"> 
        { loading ? <Loader /> : 
        <>
          {/* Background Effects */}
          <StarsCanvas />

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1">
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
        </>
      }
      </div>
    )
};