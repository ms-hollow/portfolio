import ServiceUi from "../ui/ServiceUI";
import Heading from "../ui/Heading";

export default function Services() {
    const expertiseItems = [
        "Web Development",
        "Software Development",
        "UI/UX Design",
        "Logo and Branding",
    ];
    
    const toolBoxItems = [
        "HTML/CSS",
        "JavaScript",
        "Python",
        "C/C++",
        "Java",
        "Solidity",
    ];

    const otherTechnologies = [
        "ReactJs",
        "NodeJs",
        "NextJs",
        "Truffle",
        "Bootstrap",
        "Tailwind Css",
        "Tkinter/Pygame/Turtle",
    ];

    const designToolKit = [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Tool Sai",
    ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <hr />
        <ServiceUi
          title="my expertises."
          description="I focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <hr />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
        <hr />
        <ServiceUi
            title="other technologies"
            description="These are the libraries, frameworks and version control I work with in my tech stack."
            items={otherTechnologies}
        />
        <hr />
        <ServiceUi
            title="design toolkit"
            description="These are the graphic design and editing software I use to boost and enhance my creativity"
            items={designToolKit}
        />
        <hr />
      </div>
    </section>
  );
}
