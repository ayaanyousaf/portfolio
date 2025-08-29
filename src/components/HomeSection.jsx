import { TypeAnimation } from "react-type-animation"

export const HomeSection = () => {
    return (
        <section id="home" className="relative min-h-dvh flex flex-col items-center justify-center px-4">
          <div className="container max-w-5xl mx-auto text-center z-10">
            <div className="justify-center space-y-6">
              <h1 className="flex flex-col md:flex-row items-center justify-self-center text-5xl md:text-7xl font-[Poppins] font-bold tracking-tight">
                <span className="block md:inline opacity-0 animate-fade-in-up">Hi <span className="inline-flex md:hidden wave">👋</span>, I'm</span>
                <div className="ml-3 flex gap-2">
                  <span className="md:inline text-primary opacity-0 animate-fade-in-up-delay-1"> Ayaan</span>
                  <span className="md:inline text-primary opacity-0 animate-fade-in-up-delay-2"> Yousaf</span>
                </div>
                <span className="hidden md:inline wave">👋</span>
              </h1>

              <p className="font-[Poppins] text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up-delay-4">
                I'm interested in
                <TypeAnimation
                  sequence={[
                    " Full Stack Development", 2000,
                    " Artificial Intelligence", 2000,
                    " Data Structures & Algorithms", 2000, 
                    " Data Science", 2000,
                    " Game Development", 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-primary"
                />
              </p>

              <div className="transition-transform hover:scale-[1.08] pt-4 opacity-0 animate-fade-in-up-delay-4">
                <a href="#projects" className="transparent-button">
                  My Work
                </a>
              </div>


            </div>
          </div>
        </section>
    )
}