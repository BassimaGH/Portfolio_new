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
      <div className="p-10 border border-green-800">
        <img src={props.project_img} alt="project_img" />
        <h1>{props.project_name}</h1>
        <h1>project stack</h1>
        <ul>
          {props.project_stack.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
        <Link to={props.project_url}>
          <button>Go</button>
        </Link>
      </div>
    </>
  );
}

export default ProjectCard;
