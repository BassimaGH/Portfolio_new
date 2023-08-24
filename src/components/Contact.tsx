import React from "react";

const contacts = ["Github", "LinkedIn", "Email"];

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="bg-primaryAccent text-primaryLight p-[10rem] py-[5rem] h-[35rem] flex flex-col gap-5 justify-center items-start"
      >
        <h1 className="text-[3rem] font-bold">Contact</h1>
        <p className="text-[1.5rem]">
          I am intrested in remote internships or jobs. If you are intrested,
          you can contact me using these platforms.
        </p>

        <div className="flex flex-row flex-wrap gap-5">
          {contacts.map((contact, id) => {
            return <h1 key={id}>{contact}</h1>;
          })}
        </div>
      </div>
    </>
  );
}

export default Contact;
