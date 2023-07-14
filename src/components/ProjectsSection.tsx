import React from "react";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "1",
    instance: (
      <ProjectCard
        project_img="project 1 img"
        project_name="jumping"
        project_stack={["fs", "fss", "rbvf"]}
        project_url="https://bassimagh.github.io/jumping-boy/"
      />
    ),
  },
  {
    id: "2",
    instance: (
      <ProjectCard
        project_img="project 2 img"
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
        project_img="project 3 img"
        project_name="coding"
        project_stack={["fs", "fss", "rbvf"]}
        project_url="https://bassimagh.github.io/jumping-boy/"
      />
    ),
  },
];

function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<any | null>(null);
  return (
    <>
      <div
        id="projects"
        className="bg-red-400 p-10 py-[5rem] flex flex-col items-center"
      >
        <h1>Projects Section</h1>
        <div className="flex flex-row gap-5">
          {projects.map((project) => (
            <motion.div
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
            >
              <motion.h5>{project.instance}</motion.h5>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              {projects.map((project) => (
                <motion.h5>{project.instance}</motion.h5>
              ))}
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ProjectsSection;
