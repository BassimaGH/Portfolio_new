import React from "react";

const contacts = ["Github", "LinkedIn", "Email"];

function Contact() {
  return (
    <>
      <div
        id="contact"
        className="bg-gray-500 p-10 py-[5rem] flex flex-col gap-5 items-start"
      >
        <h1 className="text-3xl font-bold">Contact</h1>
        <p>
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
