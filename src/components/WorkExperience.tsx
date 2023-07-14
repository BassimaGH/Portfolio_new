import React from "react";

const experiences = [
  {
    role: "Frontend develoepr",
    company: "SLOVE",
    duration: "Mar 2023 - Jul 2023",
  },
  {
    role: "Frontend develoepr and UI/UX designer",
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
  return (
    <>
      <div
        id="work_experience"
        className="bg-pink-400 p-10 py-[5rem] flex flex-col items-center"
      >
        <h1>Work Experience</h1>
        {/* Make a grid with divs that contain information about my experience: role, company name, and duration.(Make arrange the dives in a zigzag. Make them float and add animation when the are shown on the screen)*/}
        <div className="grid grid-rows-3 grid-cols-2">
          {experiences.map((experience, i) => {
            return (
              <div className="">
                {i % 2 == 0 ? (
                  <div className="border border-slate-900 p-10 flex flex-col col-span-2 row-span-2">
                    <h1>{experience.role}</h1>
                    <h2>{experience.company}</h2>
                    <span>{experience.duration}</span>
                  </div>
                ) : (
                  <div className="border border-blue-900 p-10 flex flex-col col-span-1 row-span-1">
                    <h1>{experience.role}</h1>
                    <h2>{experience.company}</h2>
                    <span>{experience.duration}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
