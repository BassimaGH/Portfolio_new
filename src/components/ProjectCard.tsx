import React from "react";
import { Link } from "react-router-dom";

type Props = {
  project_img: string;
  project_name: string;
  project_stack: string[];
  project_url: string;
  onClick?: () => void;
};

function ProjectCard(props: Props) {
  return (
    <>
      <div className="bg-primaryDark border border-4 border-primaryDark flex flex-col text-primaryLight rounded-3xl w-[22rem] sm:w-[25rem] ">
        <img
          src={props.project_img}
          className="rounded-t-3xl h-[16.5rem] self-center opacity-75 hover:opacity-100 transition ease-in-out"
          alt="project_img"
        />
        <div className="flex flex-col gap-2 px-10 py-5">
          <h1 className="font-bold text-2xl">{props.project_name}</h1>
          <h1 className="mt-2 text-lg">Used stack:</h1>
          <ul className="flex flex-row flex-wrap gap-3">
            {props.project_stack.map((item, id) => (
              <li className="font-thin" key={id}>
                {item}
              </li>
            ))}
          </ul>
          <button className="rounded-lg bg-primaryAccent hover:bg-darkBlue transition ease-in-out w-[5rem]">
            <Link to={props.project_url}>Go</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
