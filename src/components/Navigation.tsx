import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../imgs/logo.svg";

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

  const [isNavExpanded, setIsNavExpanded] = useState(true);

  return (
    <>
      <div
        data-aos="fade-down"
        className="p-10  mx-[2rem] flex flex-row justify-between items-center"
      >
        <div className="">
          <img src={logo} alt="my_logo" className="w-[3rem]" />
        </div>

        <div className="flex flex-col items-end gap-5">
          <div
            className="block lg:hidden"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FiMenu className="cursor-pointer text-primaryLight text-[2rem] mobile:text-[2.5rem] hover:text-slate-500 transition ease-in-out" />
          </div>

          <div
            className={
              isNavExpanded
                ? "hidden lg:flex"
                : "flex z-40 fixed lg:static right-0 top-0 h-screen lg:h-auto"
            }
          >
            <ul className="flex flex-col lg:flex-row gap-12 text-right p-[4rem] bg-primaryAccent lg:bg-transparent lg:p-0 items-end lg:items-center">
              <div
                className="block self-start lg:hidden"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                <MdClose className="cursor-pointer text-primaryLight text-2xl hover:text-slate-500 transition ease-in-out" />
              </div>
              <div className="flex flex-col lg:flex-row gap-12 text-secondaryColor_lilac text-manrope">
                {navItems.map((item, i) => {
                  if (window.innerWidth < 1022) {
                    return (
                      <Link smooth to={"#" + item.to} key={i}>
                        <li
                          className="text-xl font-clashDisplay text-primaryLight hover:text-slate-600 transition ease-in-out"
                          onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                          }}
                        >
                          {item.title}
                        </li>
                      </Link>
                    );
                  } else {
                    return (
                      <Link smooth to={"#" + item.to} key={i}>
                        <li className="text-xl font-clashDisplay text-primaryLight hover:text-slate-600 transition ease-in-out">
                          {item.title}
                        </li>
                      </Link>
                    );
                  }
                })}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
