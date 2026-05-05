import { ArrowRight, ExternalLink, Github, Tag, Youtube } from "lucide-react";
import { SectionFade } from "./ui/SectionFade";
import { track } from "@vercel/analytics";

const projects = [
  {
    id: 1,
    title: "Plagued Abyss",
    description:
      "A 2D survival shooter game built in Godot Engine. Features wave-based enemy spawning, dynamic upgrade systems, and progressive difficulty that encourages strategic decision-making.",
    image: "/projects/Plagued_Abyss.png",
    tags: [
      "Godot",
      "Game Systems Design",
      "Object-Oriented Programming",
      "Gameplay Programming",
    ],
    githubURL: "https://github.com/ayaanyousaf/plagued-abyss",
    videoURL: "https://youtu.be/mvnx856TFW8?si=nuDfpZ704KnzGffW",
  },
  {
    id: 2,
    title: "DRL Framework for Software Testing",
    description:
      "A modular Deep Reinforcement Learning framework that automates software testing. Train agents with different reward designs to explore and interact with apps to identify bugs.",
    image: "/projects/DRL_Demo.gif",
    tags: ["Python", "Stable Baselines3", "Gymnasium", "Selenium", "Jupyter"],
    githubURL: "https://github.com/ayaanyousaf/drl-testing-framework",
    videoURL: "https://youtu.be/1MSFtFpwVgA",
  },
  {
    id: 3,
    title: "PatchGen - AI Game Patch Note Generator",
    description:
      "An LLM-powered web application that converts raw updates for video games into clean, structured, professional developer patch notes.",
    image: "/projects/PatchGen.gif",
    tags: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Google Gemini API",
    ],
    githubURL: "https://github.com/ayaanyousaf/patch-gen",
    videoURL: "https://youtu.be/1Xs7qCIkZpw?si=vvb628UDZXy9-0As",
  },
  {
    id: 4,
    title: "BookNest",
    description:
      "A digital library platform built using Vue.js, Node.js, Express, and MongoDB. View, save, and rate books of all genres. Filter by author, genre, and more.",
    image: "/projects/BookNest.png",
    tags: [
      "Vue.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "D3.js",
      "Express",
      "MongoDB",
    ],
    githubURL: "https://github.com/6lvcknight/WebDev",
  },
  {
    id: 5,
    title: "Tic-Tac-Chat",
    description:
      "A web server platform that allows you to chat and play tic tac toe with others in real time.",
    image: "/projects/Tic-Tac-Chat_2.png",
    tags: ["Java", "JavaScript", "HTML/CSS", "RESTful APIs"],
    githubURL: "https://github.com/ayaanyousaf/tic-tac-chat",
  },
  {
    id: 6,
    title: "ByeSpam",
    description:
      "A machine learning-based spam email classifier developed using logistic regression in Java, achieving 88% accuracy. Features a simple interface for displaying results in real-time.",
    image: "/projects/ByeSpam.png",
    tags: ["Java", "JavaScript", "HTML/CSS", "RESTful APIs"],
    githubURL: "https://github.com/ayaanyousaf/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionFade animate="animate-fade-in-down" threshold={0.7}>
          <h2 className="font[Poppins] text-4xl md:text-5xl font-semibold mb-20 text-center">
            Featured <span className="text-primary"> Projects</span>
          </h2>

          <p className="text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
            {/* Add description for section if needed */}
          </p>
        </SectionFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <SectionFade animate="animate-fade-in-up" threshold={0.3}>
              <div
                key={key}
                className="group relative bg-card rounded-lg overflow-hidden h-full flex flex-col shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
                  </h3>

                  <p className="text-muted-foreground text-sm mb-14">
                    {project.description}
                  </p>
                  {/* Demo video links for specific projects */}
                  {project.title === "DRL Framework for Software Testing" ||
                  project.title === "PatchGen - AI Game Patch Note Generator" ||
                  project.title === "Plagued Abyss" ? (
                    <div className="mt-auto flex gap-4">
                      <a
                        href={project.videoURL}
                        target="_blank"
                        className="github-gradient rounded-full ml-auto w-11 h-11 inline-flex justify-center justify-self-center items-center text-foreground/80 hover:text-red-500 transition-colors duration-300"
                        onClick={() =>
                          track(`${project.title} YouTube Clicked`)
                        }
                      >
                        <Youtube size={30} />
                      </a>
                      <a
                        href={project.githubURL}
                        target="_blank"
                        className="github-gradient rounded-full mr-auto w-11 h-11 inline-flex justify-center justify-self-center items-center text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => track(`${project.title} GitHub Clicked`)}
                      >
                        <Github size={30} />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="github-gradient rounded-full mt-auto mx-auto w-11 h-11 inline-flex justify-center justify-self-center items-center text-foreground/80 hover:text-primary transition-colors duration-300"
                      onClick={() => track(`${project.title} GitHub Clicked`)}
                    >
                      <Github size={30} />
                    </a>
                  )}
                </div>
              </div>
            </SectionFade>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="transparent-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/ayaanyousaf"
            target="_blank"
            onClick={() => track("GitHub Clicked in Projects")}
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
