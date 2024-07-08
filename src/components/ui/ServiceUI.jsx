import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import {useRef, useEffect} from "react"


export default function ServiceUi({ title, description, items }) {
  
  const serviceUi = useRef(null)
  const heading = useRef(null)
  const body = useRef(null)
  const services = useRef(null)
  const line = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: serviceUi.current,
      // markers: true,
      start:"150px bottom",
      scrub: 4,
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.5 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.30 }, 0.2)
        .to (line.current, { width: "100%", ease: "power4.inOut", duration: 1.5 }, 0.2)
        .to(services.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.35}, 0.5),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [serviceUi])

  return (
    <div ref={serviceUi} className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24">
      <div className="space-y-6">
        <div className="space-y-3 2xl:space-y-10">
          <h3 ref={heading} className="text-heading-3 2xl:text-7xl font-bold leading-tight translate-y-10 opacity-0">
            {title}
          </h3>
          <p ref={body} className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl translate-y-10 opacity-0">{description}</p>
        </div>
      </div>

      <div ref={services} className="select-none leading-[2.3rem] text-secondary md:leading-[2.5rem] lg:leading-[3.4rem] translate-y-10 opacity-0">
        {items.map((item, index) => (
          <p key={index} className="font-general text-special 2xl:text-7xl font-extrabold">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
