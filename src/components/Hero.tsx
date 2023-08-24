import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Hero() {
  return (
    <>
      <div
        id="hero"
        className="bg-primaryDark p-10 py-[10rem] h-[37rem] flex text-primaryLight flex-col justify-center items-center"
      >
        <h1 className="text-[3rem] font-bold">Bassima Ghassan</h1>
        <p className="text-2xl font-thin">Frontend developer</p>
        <Link smooth to={"#projects"}>
          <button className="mt-[4rem] rounded-lg bg-primaryAccent hover:bg-slate-950 transition ease-in-out px-[4rem] py-3">
            My projects
          </button>
        </Link>
      </div>
    </>
  );
}

export default Hero;
