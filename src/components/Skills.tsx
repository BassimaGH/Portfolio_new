import React from "react";

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
];

function Skills() {
  return (
    <>
      <div
        id="skills"
        className="bg-green-400 p-10 py-[5rem] flex flex-col gap-5 items-center"
      >
        <h1 className="text-3xl font-bold">Skills</h1>
        <div className="flex flex-row flex-wrap gap-5">
          {skills.map((skill, id) => {
            return <h1 key={id}>{skill}</h1>;
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
