import { SectionFade } from "./ui/SectionFade"
import { cn } from "../lib/utils";
import SpringFade from "./ui/SpringFade";
import SpringGrow from "./ui/SpringGrow";

// Data for timeline cards
const schools = [
  { 
    id: 1,
    name: "Ontario Tech University", 
    logo: "/assets/OTU.png",
    date: "2022-2027",
    degree: "Bachelor of Science (Honours) in Computer Science Co-op",
    p1: "President's Honours List - Fall 2024, Winter 2023",
    p2: "Dean's Honours List - Winter 2025, Fall 2023, Fall 2022",
    p3: "Computer Science Club - General Member",
    p4: "Participated in multiple hackathons",
  },
  {
    id: 2,
    name: "Maxwell Heights Secondary School", 
    logo: "/assets/MHSS.png",
    date: "2018-2022",
    degree: "Ontario Secondary School Diploma",
    p1: "Ontario Scholar",
    p2: "Achieved Honour Roll award all four years",
    p3: "Volunteered for community",
    p4: "Created a 2D platformer game in C#",
  },
]

// Card Text Component
const CardText = ({ school }) => {
  return (
    <div className="relative text-start w-full block">
      <div className="flex justify-between gap-2 items-start">
        <h3 className="text-lg md:text-2xl font-semibold">{school.name}</h3>
        <p className="mt-1 text-sm md:text-base whitespace-nowrap">{school.date}</p>
      </div>
      <p className="mt-2 text-sm md:text-lg text-gray-400">{school.degree}</p>
      <ul className="mt-4 text-xs md:text-sm list-disc md:ml-8 space-y-2">
        <li>{school.p1}</li>
        <li>{school.p2}</li>
        <li>{school.p3}</li>
        <li>{school.p4}</li>
      </ul>
    </div>
  );
};

// Timeline Card Component
const Card = ({ school }) => {
  const side = (school.id % 2) === 0 ? "right" : "left"; // keep track of which side to put the card on (desktop only)

  return (
    <div className="mb-16 last:mb-0 relative">
      <div className="flex items-start">
        {/* Left content (desktop only) */}
        <div className={cn("hidden md:block w-1/2 pr-8")}>
          {side === "left" && (
            <SpringFade
              direction="left"
              delay={0.1}
              threshold={0.5}
            >
              <div
                className={cn(
                  "relative gradient-border border-primary border-2 font-[Poppins] rounded-lg p-8 w-full"
                )}
              >
                {/* Card Arrow (pointing right) */}
                <span
                  className={cn(
                    "absolute top-10 arrow-left scale-x-[-1] -right-[1rem]"
                  )}
                />
                <CardText school={school} />
              </div>
            </SpringFade>
          )}
        </div>

        {/* Timeline Connector Circle */}
        <SpringGrow>
          <div className="mt-6 md:mt-4 shrink-0 h-12 w-12 md:h-16 md:w-16 rounded-full flex items-center justify-center bg-white z-10">
            <img
              src={school.logo}
              alt={school.name}
              className="h-8 w-8 md:h-10 md:w-10"
            />
          </div>
        </SpringGrow>

        {/* Right content (mobile always, desktop conditional) */}
        <div className={cn("ml-8 md:ml-0 md:pl-8 w-full md:w-1/2")}>
          {/* Mobile Card for mobile specific animations */}
          <div className="md:hidden">
            <SpringFade
              direction="left"
              delay={side === "right" ? 0.2 : 0.1}
              threshold={0.5}
            >
              <div
                className={cn(
                  "relative gradient-border border-primary border-2 font-[Poppins] rounded-lg p-8 w-full"
                )}
              >
                {/* Card Arrow (pointing left) */}
                <span
                  className={cn(
                    "absolute top-10 arrow-left -left-[1rem]"
                  )}
                />
                <CardText school={school} />
              </div>
            </SpringFade>
          </div>
          
          {/* Desktop card for desktop specific animations */}
          {side === "right" && (
            <div className="hidden md:block">
              <SpringFade
                direction="right"
                delay={side === "right" ? 0.2 : 0.1}
                threshold={0.5}
              >
                <div
                  className={cn(
                    "relative gradient-border border-primary border-2 font-[Poppins] rounded-lg p-8 w-full"
                  )}
                >
                  {/* Card Arrow (pointing left) */}
                  <span
                    className={cn(
                      "absolute top-10 arrow-left -left-[1rem]"
                    )}
                  />
                  <CardText school={school} />
                </div>
              </SpringFade>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative"> 
      <div className="container mx-auto">
        <SectionFade animate="animate-fade-in-down" threshold={0.7}>
          <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold mb-12 text-center">
            My <span className="text-primary"> Education</span>
          </h2>
        </SectionFade>
        
        {/* Timeline Container */}
        <div className="relative mx-auto pb-[4rem] pt-4 max-w-6xl">
          {/* Timeline rail */}
          <div className="absolute top-0 bottom-0 w-1 bg-white left-[1.5rem] md:left-1/2 md:-translate-x-0.5" />

          {schools.map((school) => (
            <Card key={school.id} school={school} />
          ))}
        </div>
      </div>
    </section>
  )
}