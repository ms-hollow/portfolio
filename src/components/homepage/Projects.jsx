import Projects from "../ui/ProjectUI";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
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
          
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          
        </div>
        <div className="col-span-1 h-fit md:col-span-4"> 
        </div>
      </div>
    </section>
  );
}
