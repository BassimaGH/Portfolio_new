import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skills = [
  "HTML",
  "CSS",
  "JS",
  "Typescript",
  "Tailwind",
  "AWS",
  "Node.js",
  "Express",
  "SQLite3",
  "C#",
  "React",
  "WordPress",
  "Docker",
  "Next.js",
  "Figma",
  "Adobe Illustrator",
  "Adobe XD",
  "Adobe indesign",
];

function Skills() {
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
        id="skills"
        className="bg-primaryAccent text-primaryLight p-10 py-[8rem] flex flex-col gap-8 items-center"
      >
        <h1 className="text-3xl font-bold">Skills</h1>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {skills.map((skill, id) => {
            return (
              <h1
                data-aos="flip-left"
                key={id}
                className="bg-primaryDark hover:bg-darkBlue transition ease-in-out py-2 px-6"
              >
                {skill}
              </h1>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
