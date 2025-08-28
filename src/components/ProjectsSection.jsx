import { ArrowRight, ExternalLink, Github, Tag } from "lucide-react"
import { SectionFade } from "./SectionFade"


const projects = [
  {
    id: 1,
    title: "BookNest", 
    description: "A digital library platform built using Vue.js, Node.js, Express, and MongoDB. View, save, and rate books of all genres. Filter by author, genre, and more.",
    image: "/projects/BookNest.png",
    tags: ["Vue.js", "JavaScript", "Tailwind CSS", "Node.js", "D3.js", "Express", "MongoDB"],
    githubURL: "https://github.com/6lvcknight/WebDev"
  },
  {
    id: 2,
    title: "Tic-Tac-Chat", 
    description: "A web server platform that allows you to chat and play tic tac toe with others in real time.",
    image: "/projects/Tic-Tac-Chat_2.png",
    tags: ["Java", "JavaScript", "HTML/CSS", "RESTful APIs"],
    githubURL: "https://github.com/ayaanyousaf/tic-tac-chat"
  },
  {
    id: 3,
    title: "ByeSpam", 
    description: "An application designed to accurately and efficiently identify spam emails in your inbox. Achieved 88% accuracy and 84% precision.",
    image: "/projects/ByeSpam.png",
    tags: ["Java", "JavaScript", "HTML/CSS", "RESTful APIs"],
    githubURL: "https://github.com/ayaanyousaf/"
  },
  {
    id: 4,
    title: "Anime Filler Tracker", 
    description: "A Python web scraping application built using Beautiful Soup. Search for any anime and instantly view the episode name and number of all filler episodes for it.",
    image: "/projects/anime_filler_tracker.gif",
    tags: ["Python", "Beautiful Soup", "Tkinter", "Web Scraping"],
    githubURL: "https://github.com/ayaanyousaf/anime-filler-tracker",
  },
  {
    id: 5,
    title: "PumpAI", 
    description: "An AI-powered fitness tracker for weightlifters. Log workouts, nutrition, and get AI recommendations based on your habits.",
    image: "/projects/PumpAI-WIP.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Node.js"],
    githubURL: "https://github.com/ayaanyousaf/PumpAI"
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionFade animate="animate-fade-in-down" threshold={0.7}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Featured <span className="text-primary"> Projects</span>
          </h2>

          <p className="text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
            My most recent projects! 
          </p>
        </SectionFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <SectionFade animate="animate-fade-in-up" threshold={0.3}>
              <div key={key} className="group relative bg-card rounded-lg overflow-hidden h-full flex flex-col shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}

                    {/* WIP in different colour for PumpAI project */}
                    {project.title === "PumpAI" && (
                      <span className="text-primary"> (WIP)</span>
                    )}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-14">
                    {project.description}
                  </p>
                
                  <a href={project.githubURL} 
                    target="_blank" 
                    className="github-gradient rounded-full w-11 h-11 inline-flex justify-center items-center absolute bottom-5 right-31 text-foreground/80 hover:text-primary transition-colors duration-300"
                  > 
                    <Github size={30} />
                  </a>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/ayaanyousaf" target="_blank">
            Check My Github <ArrowRight size={16}/>
          </a>
        </div>

      </div>
    </section>
  )
}