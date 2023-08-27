import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const contacts = [
  {
    icon: <AiFillGithub />,
    link: "https://github.com/BassimaGH",
  },
  {
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/bassima-ghassan-4940b3228/",
  },
  {
    icon: <AiOutlineMail />,
    link: "mailto:bassimagh03@gmail.com",
  },
];

function Contact() {
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
        id="contact"
        className="bg-primaryAccent text-primaryLight p-[4rem] sm:p-[6rem] md:p-[10rem] py-[5rem] h-[35rem] flex flex-col gap-5 justify-center items-start shadow-inner shadow-slate-700"
      >
        <h1 className="text-[3rem] font-bold">Contact</h1>
        <p className="text-[1.5rem]">
          I'm looking for internships or entry-level work. If you're interested,
          please get in touch with me via these platforms or email!
        </p>

        <div className="flex flex-row gap-5 mt-4" data-aos="fade-up">
          {contacts.map((contact, id) => {
            return (
              <div
                key={id}
                className="bg-primaryDark hover:bg-darkBlue transition ease-in-out p-5 sm:p-7 rounded-full"
              >
                <Link target="_blank" to={contact.link}>
                  <h1 className="text-[2rem] sm:text-[2.9rem]" key={id}>
                    {contact.icon}
                  </h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Contact;
