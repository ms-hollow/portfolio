import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoImg from "../../assets/icons/logo.svg";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });

  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#FBF9F4" })
          .to(cta.current, { backgroundColor: "#C7AA43", color: "#191710" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#191710" }, 0),
        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <img src={logoImg} className="w-20 h-20" alt='akkey'></img>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 w-full h-[0.125em] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 w-full h-[0.125em] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 w-full h-[0.125em] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit bg-accent text-text-c1 px-4 py-2 rounded-full font-general font-medium text-body-3 hover:bg-yellow-600 text-left">
            <span className="absolute bottom-0 left-0 w-full h-[0.125em] bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
