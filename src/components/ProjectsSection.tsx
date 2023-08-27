import React from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../imgs/floatingBoy.png";
import img2 from "../imgs/portfolio-database.png";
import img3 from "../imgs/lunarLander.png";
import img4 from "../imgs/beauty.png";
import img5 from "../imgs/guessTheNum.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    id: "1",
    instance: (
      <ProjectCard
        project_img={img1}
        project_name="Floating Boy"
        project_stack={["JS", "P5JS", "HTML"]}
        project_url="https://bassimagh.github.io/jumping-boy/"
      />
    ),
  },
  {
    id: "2",
    instance: (
      <ProjectCard
        project_img={img2}
        project_name="Portfolio app"
        project_stack={["Node.js", "Express", "Tailwind", "Handelbars"]}
        project_url="https://portfolio-web-application.onrender.com/"
      />
    ),
  },
  {
    id: "3",
    instance: (
      <ProjectCard
        project_img={img3}
        project_name="Lunar Lander"
        project_stack={["P5JS", "HTML"]}
        project_url="https://bassimagh.github.io/Lunar-Lander/"
      />
    ),
  },
  {
    id: "4",
    instance: (
      <ProjectCard
        project_img={img4}
        project_name="Landing page"
        project_stack={["HTML", "JS", "Tailwind"]}
        project_url="https://bassimagh.github.io/Landing-page/"
      />
    ),
  },
  {
    id: "5",
    instance: (
      <ProjectCard
        project_img={img5}
        project_name="Guessing Game"
        project_stack={["HTML", "JS", "CSS"]}
        project_url="https://bassimagh.github.io/guess-the-number-js/"
      />
    ),
  },
];

function ProjectsSection() {
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
        id="projects"
        className="bg-primaryLight p-10 py-[5rem] flex flex-col items-center"
      >
        <h1 className="mb-[3rem] text-3xl md:text-[2rem] md:font-bold md:tracking-[1rem]">
          Personal Projects
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {projects.map((project, i) => (
            <section
              data-aos={i % 2 === 0 ? "flip-left" : "flip-right"}
              key={i}
            >
              {project.instance}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsSection;
