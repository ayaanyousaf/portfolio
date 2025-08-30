import { SectionFade } from "./ui/SectionFade"
import { cn } from "../lib/utils";
import SpringFade from "./ui/SpringFade";
import SpringGrow from "./ui/SpringGrow";

// Data
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

// Timeline cards
const Card = ({ school }) => {
  const side = (school.id % 2) === 0 ? "right" : "left";

  return (
    <div
      className={cn(
        "relative md:mx-auto col-start-2",
        side === "right"
          ? "md:col-start-3 md:translate-y-[20rem] md:-translate-x-[1.875rem]"
          : "md:col-start-1 md:translate-x-7.5"
      )}
    >
      {/* Timeline Connector Circle */}
      <SpringGrow className={cn(
            "absolute top-6 md:top-4 h-12 w-12 md:h-16 md:w-16 rounded-full flex items-center justify-center bg-white",
            "left-[-2.4rem] md:left-auto",
            side === "right" ? "md:-translate-x-26.5" : "md:translate-x-[34.5rem]"
          )}
      >
        <div>
          <img
            src={school.logo}
            alt={school.name}
            className="h-8 w-8 md:h-10 md:w-10"
          />
        </div>
      </SpringGrow>

      {/* Timeline Card */}
      <SpringFade
        direction={side === "right" ? "right" : "left"}
        delay={side === "right" ? 0.2 : 0.1 }
        threshold={0.5}
      >
        <div
          className={cn(
            "relative ml-8 md:mx-auto gradient-border border-primary border-2 font-[Poppins] rounded-lg p-8 max-w-lg w-full"
          )}
        >
          {/* Card Arrow */}
          <span
            className={cn(
              "absolute top-10 arrow-left -left-[0.883rem]",
              side === "left" ? "md:scale-x-[-1] md:-right-3.5 md:left-auto" : "md:-left-[0.9rem]"
            )}
          />

          {/* Card Text */}
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
        </div>
      </SpringFade>
    </div>
  );
};

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:mb-60 px-4 relative"> 
      <div className="container mx-auto">
        <SectionFade animate="animate-fade-in-down" threshold={0.7}>
          <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold mb-12 text-center">
            My <span className="text-primary"> Education</span>
          </h2>
        </SectionFade>
        
        {/* Timeline grid */}
        <div className="relative mx-auto my-20 pt-2 grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12">
          {/* Timeline rail */}
          <div className="absolute inset-y-0 w-1 pb-[45rem] md:pb-[42rem] bg-white left-4 md:left-1/2 md:-translate-x-1/2" />

          {schools.map((school) => (
            <Card key={school.id} school={school} />
          ))}
        </div>
      </div>
    </section>
  )
}