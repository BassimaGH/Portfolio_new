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
      <div className="bg-primaryDark border border-4 border-primaryDark text-primaryLight rounded-3xl w-[25rem] ">
        <img
          src={props.project_img}
          className="rounded-t-3xl"
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
          <Link to={props.project_url}>
            <button className="rounded-lg bg-primaryAccent w-[5rem]">Go</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
