import React from "react";
import project1 from "../images/project-1.png";
import project2 from "../images/project-2.jpg";
import project3 from "../images/project-3.jpg";
import project4 from "../images/project-4.jpg";
import "swiper/css";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Movie App",
      github_link: "",
      live_link: "",
    },
    {
      img: project2,
      name: "Job search Web App",
      github_link: "",
      live_link: "",
    },
    {
      img: project3,
      name: "Highking",
      github_link: "",
      live_link: "",
    },
    {
      img: project4,
      name: "React Nav",
      github_link: "",
      live_link: "",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-gray-400">
          My <span className="text-white"> Projects </span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative justify-center ">
        <div className="lg:w-2/3 w-full flex items-center gap-4 flex-wrap justify-center">
          {projects.map((project_info, i) => (
            <div
              key={i}
              className="flex items-center justify-center mt-12 gap-10 flex-wrap "
            >
              <div className=" h-fit w-72 p-4 bg-slate-700 rounded-xl">
                <img src={project_info.img} alt="" className="rounded-lg" />
                <h3 className="text-xl my-4">{project_info.name}</h3>
                <div className="flex gap-3">
                  <a
                    href={project_info.github_link}
                    target="_blank"
                    className="text-white bg-gray-800 px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                  <a
                    href={project_info.live_link}
                    target="_blank"
                    className="text-white bg-gray-800 px-2 py-1 inline-block"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
