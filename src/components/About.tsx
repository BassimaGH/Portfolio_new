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
        className="bg-primaryLight p-[4rem] sm:p-[6rem] md:p-[10rem] py-[5rem] md:h-[44rem] h-[50rem] text-primaryDark flex flex-col justify-center items-start rounded-t-[5rem]"
      >
        <div data-aos="fade-left">
          <h1 className="text-[2.5rem] text-center sm:text-start pb-4 sm:pb-0 sm:text-[3rem] font-bold">About</h1>
          <p className="pr-0 lx:pr-[35rem] text-[1.3rem] sm:text-[1.5rem]">
            I am a <b>front-end developer</b> and a <b>UI designer</b> that has a solid programming/design foundation
            and is passionate about learning new programming technologies and design trends. My
            current programming stack makes it possible for me to create and
            deploy websites or web-applications that are fully responsive and
            secure. Further, my design skills allow me to design interfaces for any digital platform 
            depending on its theme!
            Also, my knowladge in <b>cybersecurity</b> gives me a broad prespictive on an organisation/product security and the 
            tools used to ensure their safety and compliance to relevant standards.   
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
