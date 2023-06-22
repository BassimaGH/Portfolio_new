import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <>
      <div
        id="projects"
        className="bg-red-400 p-10 py-[5rem] flex flex-col items-center"
      >
        <h1>Projects Section</h1>
        <ProjectCard />
      </div>
    </>
  );
}

export default ProjectsSection;
