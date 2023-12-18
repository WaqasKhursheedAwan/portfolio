import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import Picture2 from "../images/profile.PNG";
import Button from "./Button";
import CV from "../cv/waqas.pdf";

const Hero = () => {
  return (
    <section id="home" className="w-screen">
      <div className="flex flex-wrap justify-evenly mt-32">
        <div className="flex-col items-center justify-center">
          <img
            className=" flex rounded-2xl border-2 md:w-[70%] md:h-[95%]"
            src={Picture2}
            alt={Picture2}
          />
        </div>
        <div className="flex flex-col text-2xl md:text-5xl lg:text-3xl text-center items-center md:items-start md:justify-center md:mr-60 justify-end sm:align-middle">
          <div className="font-bold">Hello</div>
          <div className="font-bold">I am Waqas Khursheed</div>
          <div className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-white font-bold">
            MERN Stack Developer . . .
          </div>
          <a href={CV} download>
            <Button name="Download My Resume" />
          </a>

          <div className="flex gap-4 my-2 ml-6">
            <AiFillFacebook
              className="hover:text-[#657fff] md:hover:scale-125 scale-100 hover:rounded-full"
              size={36}
            />
            <AiFillTwitterSquare
              className="hover:text-[#08a0e9] hover:scale-125 hover:rounded-full"
              size={36}
            />
            <AiFillGithub
              className="hover:text-black hover:bg-white hover:rounded-full hover:scale-110"
              size={36}
            />
            <AiFillLinkedin
              className="hover:text-[#0077b5] hover:scale-125 hover:rounded-full"
              size={36}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
