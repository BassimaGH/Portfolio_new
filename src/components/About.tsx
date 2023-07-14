import React from "react";

function About() {
  return (
    <>
      <div
        id="about"
        className="bg-blue-400 p-10 py-[5rem] flex flex-col items-start"
      >
        <h1 className="text-3xl font-bold">About</h1>
        <p className="pr-0 md:pr-[35rem]">
          I am a front-end developer that has a solid programming foundation and
          is passionate about learning new programming technologies. My current
          programming <u>stack</u> makes it possible for me to create and deploy
          websites or web-applications that are fully responsive and secure.
        </p>
      </div>
    </>
  );
}

export default About;
