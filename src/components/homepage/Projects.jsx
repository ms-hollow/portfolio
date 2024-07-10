import Projects from "../ui/ProjectUI";
import Heading from "../ui/Heading";
import image from "../../assets/icons/akkey.webp"

export default function Projects({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://musical-stroopwafel-1c2327.netlify.app/landing.html"
            img={image}
            alt="IBGroup vietnam website mockup"
            name="ibgroup vietnam website"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript • Figma"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://mementostudio.netlify.app/"
            img={image}
            alt="memento landing page mockup"
            name="memento studio landing page"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://realbusinessaccountants.netlify.app"
            img={image}
            alt="real business accountant project mockup"
            name="real business accountants"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://godaddyuiclone.netlify.app"
            img={image}
            alt="godaddy clone page mockup"
            name="GODADDY LANDING PAGE CLONE"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={image}
            alt="sunnyside project mockup"
            name="SUNNYSIDE LANDING PAGE"
            type="Frontend Development"
            year="2022"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
      </div>
    </section>
  );
}
