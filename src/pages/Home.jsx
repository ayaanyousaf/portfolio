import { ThemeToggle } from "../components/ThemeToggle";
import { SpaceBackground } from "../components/SpaceBackground";
import { Navbar } from "../components/Navbar";

export const Home = () => {
    return (
      <div className="min-h-dvh bg-background text-foreground overflow-x-hidden"> 
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <SpaceBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* TODO */}
        </main>

        {/* Footer */}


      </div>
    )
};