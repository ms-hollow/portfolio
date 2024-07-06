import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import heroImg from "../../assets/images/akkey revise.png";

export default function Hero() {
    const img = useRef(null);
    const imgContainer = useRef(null);
    const titles = useRef([]);

    //TODO: finish the hero section
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" })
          .to(img.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2"); // Sync the image animation with the titles
      }, []);

  return (
    <section id="hero" className="hero relative flex w-full h-screen select-none items-center justify-between px-10">
    <div className="z-10 flex flex-col w-1/2 items-start text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold font-general">
    <div className="text-heading-1 xl:py-16">
        <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-96 overflow-hidden">
                hey, I&apos;m akkey
        </h1>
    </div>
    </div>
    <div ref={imgContainer} className="w-1/2 flex justify-end">
        <img ref={img} src={heroImg} alt="akkey" className="translate-y-96"/>
      </div>
    </section>
  );
}

