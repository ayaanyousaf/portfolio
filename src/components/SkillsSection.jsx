import { useState } from "react"
import { cn } from "../lib/utils";
import { SectionFade } from "./SectionFade";


const skills = [
    // Programming
    {name: "Java", category: "programming", logo: "/assets/Java.svg"},
    {name: "Python", category: "programming", logo: "/assets/Python.svg"},
    {name: "C++", category: "programming", logo: "/assets/CPP.svg"},
    {name: "C#", category: "programming", logo: "/assets/CSharp.svg"},
    {name: "JavaScript", category: "programming", logo: "/assets/JS.svg"},
    {name: "TypeScript", category: "programming", logo: "/assets/TS.svg"},
    {name: "React.js", category: "programming", logo: "/assets/React.svg"},
    {name: "Tailwind CSS", category: "programming", logo: "/assets/Tailwind.svg"},
    {name: "Vue.js", category: "programming", logo: "/assets/Vue.svg"},
    {name: "Node.js", category: "programming", logo: "/assets/Node.svg"},
    {name: "MongoDB", category: "programming", logo: "/assets/MongoDB.png"},
    {name: "PostgreSQL", category: "programming", logo: "/assets/PostgreSQL.svg"},

    // Tools
    {name: "Git", category: "tools", logo: "/assets/Git.svg"},
    {name: "VS Code", category: "tools", logo: "/assets/VSCode.svg"},
    {name: "Visual Studio", category: "tools", logo: "/assets/VisualStudio.svg"},
    {name: "IntelliJ IDEA", category: "tools", logo: "/assets/IntelliJ.svg"},
    {name: "Linux/Ubuntu", category: "tools", logo: "/assets/Ubuntu.svg"},
    {name: "Jupyter Notebook", category: "tools", logo: "/assets/Jupyter.svg"},
]

const categories = ["all", "programming", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all"); 

    const filteredSkills = skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
            <SectionFade animate="animate-fade-in-down" threshold={0.7}>
              <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
              </h2>
            

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                  <button key={key} 
                          onClick={() => setActiveCategory(category)}
                          className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                          )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </SectionFade>

            <div className="flex flex-wrap gap-4 justify-center">  {/* skill hex */}
              {filteredSkills.map((skill, key) => (
                <SectionFade animate="animate-fade-in-up" threshold={0.3}>  
                  <div key={key} className="px-6 flex flex-col justify-center items-center overflow-hidden rounded-xl h-20 w-20 md:h-40 md:w-40 bg-primary/20 p-2 shadow-xs card-hover hover:card-glow active:card-hover active:card-glow"> 
                    <img src={skill.logo} alt={skill.name} className="mx-auto max-w-10 max-h-10 md:max-w-25 md:max-h-25 justify-self-center" />
                    <h3 className="mt-2 text-primary-foreground text-xs md:text-base text-center font-semibold"> {skill.name} </h3>
                  </div>
                </SectionFade>
              ))}
            </div>
          </div>
        </section>
    )
}