import React from "react";

function About() {
  return (
    <>
      <div
        id="about"
        className="bg-primaryLight p-[10rem] py-[5rem] h-[35rem] text-primaryDark flex flex-col justify-center items-start"
      >
        <h1 className="text-[3rem] font-bold">About</h1>
        <p className="pr-0 lg:pr-[35rem] text-[1.5rem]">
          I am a front-end developer that has a solid programming foundation and
          is passionate about learning new programming technologies. My current
          programming stack makes it possible for me to create and deploy
          websites or web-applications that are fully responsive and secure.
        </p>
      </div>
    </>
  );
}

export default About;
