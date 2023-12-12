import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import Picture2 from "../images/profile.PNG";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className="w-screen">
      <div className="flex flex-wrap justify-around mt-32">
        <div className=" flex-col text-center items-center justify-center">
          <img
            className=" flex h-auto max-w-lg  rounded-2xl border-2"
            src={Picture2}
            alt={Picture2}
          />
        </div>
        <div className="flex flex-col lg:text-3xl sm:text-4xl md:text-xl xl:text-5xl text-center items-start justify-center mr-36 sm:justify-center sm:align-middle">
          <div className="font-bold">Hello</div>
          <div className="font-bold">I am Waqas Khursheed</div>
          <div className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-white font-bold">
            MERN Stack Developer <>. .</>
          </div>
          <a href="../cv/waqas.pdf" download>
            <Button name="Download My Resume" />
          </a>

          <div className="flex gap-4 my-2 ml-6">
            <AiFillFacebook className="hover:text-[#657fff] hover:scale-125 hover:rounded-full" />
            <AiFillTwitterSquare className="hover:text-[#08a0e9] hover:scale-125 hover:rounded-full" />
            <AiFillGithub className="hover:text-black hover:bg-white hover:rounded-full hover:scale-110" />
            <AiFillLinkedin className="hover:text-[#0077b5] hover:scale-125 hover:rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
