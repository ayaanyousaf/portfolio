import { FileUser, Github, Linkedin } from "lucide-react"
import { SectionFade } from "./ui/SectionFade"
import SpringFade from "./ui/SpringFade"
import { track } from "@vercel/analytics"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-5xl">
            <SectionFade animate="animate-fade-in-down" threshold={0.7}>
              <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold mb-12 text-center">
                About <span className="text-primary"> Me</span>
              </h2>
            </SectionFade>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[4.5rem] items-center">
              <SpringFade direction="right" distance={100} delay={0.2} className="order-2 md:order-1">
                <div className="font-[Poppins] md:max-w-lg space-y-6">

                  <p className="flex items-start text-lg text-muted-foreground">
                    <span className="shrink-0 pr-2 text-2xl">👨🏽‍💻</span>
                    <span className="flex-1 text-left">4th-year Computer Science student passionate about building scalable software that solves real-world problems.</span>
                  </p> 

                  <p className="flex items-start text-lg text-muted-foreground">
                    <span className="shrink-0 pr-2 text-2xl">🎓</span>
                    <span className="flex-1 text-left">Pursuing a Bachelor's Degree (Honours) in Computer Science.</span>
                  </p> 

                  <p className="flex items-start text-lg text-muted-foreground">
                    <span className="shrink-0 pr-2 text-2xl">📝</span>
                    <span className="flex-1 text-left">I enjoy taking on new challenges and continuously learning new frameworks and tools.</span>
                  </p> 

                  <p className="flex items-start text-lg text-muted-foreground">
                    <span className="shrink-0 pr-2 text-2xl">🛠️</span>
                    <span className="flex-1 text-left">Beyond code, I enjoy lifting weights, travelling, and playing video games.</span>
                  </p> 

                  <div className="flex w-full pt-4 justify-center">
                    <a href="#contact" className="transparent-button inline-flex">
                      Get In Touch
                    </a>
                  </div>
                </div>
              </SpringFade>
              <SpringFade direction="left" distance={100} delay={0.2} className="order-1 md:order-2">
                <div className="grid grid-cols-1 gap-6">
                  <div className="image-glow h-56 w-56 md:w-80 md:h-80 md:mb-2 rounded-full overflow-hidden mx-auto">
                    <img src="/selfie.jpg" className="w-full h-full object-cover"/>
                  </div>
                  <div className="justify-self-center p-6">
                    <div className="grid grid-cols-2 items-center justify-center gap-4">
                      <a href="https://www.linkedin.com/in/ayaanysf" 
                          target="_blank"
                          className="flex justify-center items-center linkedin-gradient button-hover block rounded-lg p-4 w-30 text-sm font-semibold"
                          onClick={() => track("LinkedIn Clicked")}
                      >
                        <Linkedin className="mr-1" size={20} /> LinkedIn
                      </a>

                      <a href="https://github.com/ayaanyousaf" 
                          target="_blank"
                          className="flex justify-center items-center github-gradient button-hover block rounded-lg p-4 w-[7.5rem] text-sm font-semibold"
                          onClick={() => track("GitHub Clicked")}
                      >
                        <Github className="mr-1" size={20} /> GitHub
                      </a>

                      <a href="/AyaanYousaf_Resume.pdf" 
                          target="_blank"
                          className="col-span-2 flex justify-center justify-self-center items-center resume-gradient button-hover block rounded-lg p-4 w-30 text-sm font-semibold"
                          onClick={() => track("Resume Clicked")}
                      >
                        <FileUser className="mr-1" size={20} /> Resume
                      </a>
                    </div>
                  </div>
                </div>
              </SpringFade>
            </div>
          </div>
            
        </section>
    )
}