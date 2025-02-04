import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const experiences = [
  {
    role: "Web developer and designer",
    company: "Freelance",
    duration: "Jan 2025 - present",
  },
  {
    role: "Teaching Assistant",
    company: "Jönköping University",
    duration: "Jan 2024 - May 2024, Aug 2024 - Dec 2024",
  },
  {
    role: "Frontend developer",
    company: "SLOVE",
    duration: "Mar 2023 - Jul 2023",
  },
  {
    role: "Frontend developer and UI/UX designer",
    company: "Chingu",
    duration: "Jan 2023 - Feb 2023",
  },
  {
    role: "UI designer",
    company: "The Dynamics",
    duration: "Nov 2021 - May 2022",
  },
];

function WorkExperience() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const text = "WORK EXPERIENCE";

  return (
    <>
      <div
        id="work_experience"
        className="p-10 py-[5rem] md:py-[8rem] text-primaryLight flex flex-col md:flex-row justify-center shadow-inner shadow-black"
      >
        <h1 className="hidden md:flex flex-col mr-[4rem] bg-primaryAccent py-5 pl-5 shadow-inner shadow-black items-center justify-center text-[2rem] mb-[2rem] font-bold opacity-75 tracking-[1.5rem]">
          {text.match(/./gu)!.map((char, index) => (
            <span
              className="animate-text-reveal [animation-fill-mode:backwards]"
              key={`${char}-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <h1 className="block md:hidden mb-[4rem] md:mb-0 text-3xl font-light text-center tracking-widest">
          Work Experience
        </h1>
        {/* Make a grid with divs that contain information about my experience: role, company name, and duration.(Make arrange the dives in a zigzag. Make them float and add animation when the are shown on the screen)*/}
        <div className="flex flex-col md:grid grid-cols-2 grid-rows-5 grid-flow-row-dense items-center md:items-start gap-5">
          {experiences.map((experience, i) => {
            return (
              <div
                key={i}
                data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
                className={`shadow-inner shadow-black w-[23rem] sm:w-[33rem] md:w-auto bg-darkBlue hover:drop-shadow-xl transition ease-in-out text-primaryLight rounded-3xl p-10 flex flex-col gap-2 ${
                  i % 2 === 0 ? 'col-start-1 row-span-2' : 'col-start-2 row-span-2 md:mt-[12rem]'
                }`}
              >
                <h1 className="text-2xl font-bold">{experience.role}</h1>
                <h2 className="tracking-widest">{experience.company}</h2>
                <span className="font-thin text-sm">{experience.duration}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
