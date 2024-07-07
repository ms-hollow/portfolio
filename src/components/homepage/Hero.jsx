import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import heroImg from "../../assets/images/akkey revise.png";

export default function Hero() {
  const img = useRef(null);
  const imgContainer = useRef(null);
  const titles = useRef([]);
  const underline = useRef(null);
  const loc = useRef(null);
  const scrollMore = useRef(null);

  useEffect(() => {
    gsap.set([loc.current, scrollMore.current], { opacity: 1 });
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" })
      .to(img.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2")
      .fromTo(
        underline.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 2.35, ease: "power4.inOut" },
        "-=1.5"
      )
      .from(loc.current, { y: 0, opacity: 0, duration: 1, ease: "power4.out" }, "-=1.5")
      .from(scrollMore.current, { y: 0, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8");
    return () => {
      tl.kill(); // Kill the timeline on component unmount
    };

  }, [titles.current, img.current, underline.current, loc.current, scrollMore.current]);

  return (
    <section id="hero" className="hero relative flex w-full h-screen select-none items-center justify-between px-10">
      <div className="z-10 flex flex-col w-1/2 items-start text-title 2xl:text-[10vw] 2xl:space-y-16 font-bold font-general">
        <div className="title xl:py-16 relative">
          <h1 ref={(el) => (titles.current[0] = el)} className="translate-y-96 overflow-hidden text-6xl sm:text-8xl md:text-9xl z-10">
            <span className="relative inline-block leading-[1]">
              hey, i'm 
              akkey
              <span ref={underline} className="absolute bottom-0 left-0 w-5/12 h-2 bg-accent transform origin-left z-0"></span>
            </span>
          </h1>
          <div ref={loc} className="flex flex-col">
            <span className="text-works-title text-secondary mt-2">AVAILABLE FOR WORK JULY 2024</span>
            <span className="text-body-3 text-primary font-grotesk font-normal">QUEZON CITY, PHILIPPINES</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-end mt-[-50px] z-20">
        <div ref={imgContainer} className="relative">
          <img ref={img} src={heroImg} alt="akkey" className="translate-y-96 w-[100%] h-auto"/>
        </div>
        <span ref={scrollMore} className="text-body-3 text-primary font-grotesk font-normal mt-2">(SCROLL FOR MORE ↓)</span>
      </div>
    </section>
  );
}
