import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

import AOS from "aos";
import "aos/dist/aos.css";

const navItems = [
  {
    title: "Home",
    to: "hero",
  },
  {
    title: "About",
    to: "about",
  },
  {
    title: "Skills",
    to: "skills",
  },
  {
    title: "Experience",
    to: "work_experience",
  },

  {
    title: "Projects",
    to: "projects",
  },
  {
    title: "Contact",
    to: "contact",
  },
];

function Navigation() {
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
        data-aos="fade-left"
        className="bg-yellow-400 p-10 py-[5rem] flex flex-col items-center"
      >
        <h1>Navigation bar</h1>
        <div className="flex flex-row justify-between items-start lg:items-center">
          <ul>
            {navItems.map((item, i) => {
              return (
                <Link smooth to={"#" + item.to} key={i}>
                  <li>{item.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
