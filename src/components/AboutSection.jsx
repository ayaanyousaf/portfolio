import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Introduction</h3>

                <p className="flex items-start text-lg text-muted-foreground">
                  <span className="shrink-0 pr-2 text-2xl">👨🏽‍💻</span>
                  <span className="flex-1 text-left">I am a 4th year Computer Science student with a strong passion for software development.</span>
                </p> 

                <p className="flex items-start text-lg text-muted-foreground">
                  <span className="shrink-0 pr-2 text-2xl">🎓</span>
                  <span className="flex-1 text-left">Currently pursuing a Bachelor's Degree (Honours) in Computer Science.</span>
                </p> 

                <p className="flex items-start text-lg text-muted-foreground">
                  <span className="shrink-0 pr-2 text-2xl">📝</span>
                  <span className="flex-1 text-left">I enjoy what I do because of the thrill of solving new problems.</span>
                </p> 

                <p className="flex items-start text-lg text-muted-foreground">
                  <span className="shrink-0 pr-2 text-2xl">🛠️</span>
                  <span className="flex-1 text-left">I combine languages and frameworks to design, build, and iterate on impactful software.</span>
                </p> 


                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  <a href="#contact" className="cosmic-button">
                    Get In Touch
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="card-glow w-80 h-80 mb-2 rounded-full overflow-hidden mx-auto">
                  <img src="../../public/selfie.jpg" className="w-full h-full object-cover"/>
                </div>

                <div className="gradient-border p-6">
                  <div className="flex items-start gap-4">
                    <a href="../../public/AyaanYousaf_Resume.pdf" 
                        target="_blank"
                        className="resume-gradient button-hover block rounded-lg p-2 w-30 text-sm font-bold"
                    >
                      Resume
                    </a>
                  
                    <a href="https://linkedin.com/ayaanysf" 
                        target="_blank"
                        className="linkedin-gradient button-hover block rounded-lg p-2 w-30 text-sm font-bold"
                    >
                      LinkedIn
                    </a>

                    <a href="https://github.com/ayaanyousaf" 
                        target="_blank"
                        className="github-gradient button-hover block rounded-lg p-2 w-30 text-sm font-semibold"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
        </section>
    )
}