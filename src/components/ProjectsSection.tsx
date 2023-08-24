import React from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../imgs/beauty.png";

const projects = [
  {
    id: "1",
    instance: (
      <ProjectCard
        project_img={img1}
        project_name="Landing page"
        project_stack={["JS", "Tailwind", "HTML"]}
        project_url="https://bassimagh.github.io/jumping-boy/"
      />
    ),
  },
  {
    id: "2",
    instance: (
      <ProjectCard
        project_img={img1}
        project_name="playing"
        project_stack={["fs", "fss", "rbvf"]}
        project_url="https://bassimagh.github.io/jumping-boy/"
      />
    ),
  },
  {
    id: "3",
    instance: (
      <ProjectCard
        project_img={img1}
        project_name="coding"
        project_stack={["fs", "fss", "rbvf"]}
        project_url="https://bassimagh.github.io/jumping-boy/"
      />
    ),
  },
];

function ProjectsSection() {
  return (
    <>
      <div
        id="projects"
        className="bg-primaryLight p-10 py-[5rem] flex flex-col items-center"
      >
        <h1 className="mb-[3rem] text-3xl">Personal Projects</h1>
        <div className="flex flex-row flex-wrap justify-center gap-5">
          {projects.map((project, i) => (
            <section key={i}>{project.instance}</section>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsSection;
