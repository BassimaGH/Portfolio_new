import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const text = "Bassima Ghassan";

  return (
    <>
      <div
        id="hero"
        className="bg-primaryDark p-6 sm:p-10 py-[10rem] h-[37rem] flex text-primaryLight flex-col justify-center items-center"
      >
        <h1 className="text-[0.8rem] sm:text-[1.3rem] md:text-[2rem] mb-[2rem] font-normal md:font-thin tracking-[0.6rem] sm:tracking-[1rem] md:tracking-[2rem]">
          {text.match(/./gu)!.map((char, index) => (
            <span
              className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="text-[2.3rem] sm:text-[3.5rem] font-bold">
          Frontend developer
        </p>
        <Link smooth to={"#projects"}>
          <button
            data-aos="fade-up"
            className="mt-[4rem] rounded-lg bg-primaryAccent hover:bg-slate-950 transition ease-in-out px-[4rem] py-3"
          >
            My projects
          </button>
        </Link>
      </div>
    </>
  );
}

export default Hero;
