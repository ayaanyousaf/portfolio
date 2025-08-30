import { SectionFade } from "./ui/SectionFade"

export const WorkSection = () => {
    return (
        <section id="work" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-5xl">
            <SectionFade animate="animate-fade-in-down" threshold={0.7}>
              <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold mb-12 text-center">
                Work <span className="text-primary"> Experience</span>
              </h2>
            </SectionFade>

            <SectionFade animate="animate-fade-in-up" threshold={0.4}>
              <div className="flex flex-col md:flex-row gradient-border font-[Poppins] max-w-4xl gap-8 rounded-xl p-8 card-hover">
                <a href="https://www.rkstudios.ca" target="_blank" className="h-48 w-48 flex justify-center md:block">
                  <img src="/assets/RK.jpg" alt="RK Studios" />
                </a>
                <div className="text-start w-full block">
                  <h3 className="text-lg md:text-2xl font-semibold">
                    IT Support Technician - RK Studios
                  </h3>
                  <p className="mt-2 text-sm md:text-lg text-gray-400">
                    RK Studios
                  </p>
                  <p className="mt-1 text-xs md:text-sm">
                    Aug 2021 - Aug 2022
                  </p>
                  <ul className="mt-2 text-sm md:text-base list-disc ml-8 space-y-2">
                    <li>Set up and configured software for photography, allowing for operation on schedule. </li>
                    <li>Managed IT systems and software, including Adobe Photoshop and Lightroom. </li>
                    <li>Provided technical troubleshooting, resolving issues with Dropbox and Google Drive.</li>
                    <li>Effectively communicated solutions to staff and event organizers.</li>
                  </ul>
                </div>
              </div>
            </SectionFade>
          </div>
        </section>
    )
}