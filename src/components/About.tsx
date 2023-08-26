import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        id="about"
        className="bg-primaryLight p-[4rem] sm:p-[6rem] md:p-[10rem] py-[5rem] h-[35rem] text-primaryDark flex flex-col justify-center items-start rounded-t-[5rem]"
      >
        <div data-aos="fade-left">
          <h1 className="text-[2.5rem] sm:text-[3rem] font-bold">About</h1>
          <p className="pr-0 lx:pr-[35rem] text-[1.3rem] sm:text-[1.5rem]">
            I am a front-end developer that has a solid programming foundation
            and is passionate about learning new programming technologies. My
            current programming stack makes it possible for me to create and
            deploy websites or web-applications that are fully responsive and
            secure.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
