import { ArrowDown } from "lucide-react"


export const HomeSection = () => {
    return (
        <section id="home" className="relative min-h-dvh flex flex-col items-center justify-center px-4">
          <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1"> Ayaan</span>
                <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Yousaf</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                I'm interested in Full Stack Development.
              </p>

              <div className="transition-transform hover:scale-[1.08] pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                  My Work
                </a>
              </div>


            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <ArrowDown className="h-20 w-15 text-primary" />
          </div>

        </section>
    )
}