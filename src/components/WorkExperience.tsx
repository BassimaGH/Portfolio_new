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
        className="p-10 py-[5rem] text-primaryLight flex flex-col items-center"
      >
        <h1 className="mb-[3rem] text-3xl">Work Experience</h1>
        {/* Make a grid with divs that contain information about my experience: role, company name, and duration.(Make arrange the dives in a zigzag. Make them float and add animation when the are shown on the screen)*/}
        <div className="flex flex-col md:grid grid-cols-2 grid-rows-3 items-start gap-5">
          {experiences.map((experience, i) => {
            return (
              <div
                key={i}
                className={
                  i % 2 === 0
                    ? "w-[33rem] md:w-auto bg-primaryLight text-primaryDark rounded-3xl p-10 flex flex-col gap-2 col-start-2 col-end-1 row-span-2"
                    : "w-[33rem] md:w-auto bg-primaryLight text-primaryDark rounded-3xl p-10 flex flex-col gap-2 col-start-2 col-end-2 row-start-2"
                }
              >
                <h1 className="font-bold text-2xl">{experience.role}</h1>
                <h2>{experience.company}</h2>
                <span className="font-thin text-primaryAccent">
                  {experience.duration}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
