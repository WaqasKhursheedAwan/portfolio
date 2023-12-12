import React from "react";
import Express from "../images/express.png";
import MDB from "../images/mongodb.png";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Advance",
      count: 86,
    },
    {
      logo: "logo-css3",
      level: "Expect",
      count: 90,
    },
    {
      logo: "logo-nodejs",
      level: "Intermediate",
      count: 80,
    },
    {
      logo: "logo-react",
      level: "Beginner",
      count: 40,
    },
    {
      logo: "logo-github",
      level: "Intermediate",
      count: 50,
    },
  ];
  return (
    <section id="skills" className="py-10  relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-bold text-gray-400">
          My <span className="text-white"> Skills </span>
        </h3>
        <p className="text-gray-100 my-3 text-2xl font-medium">
          {" "}
          My Introduction{" "}
        </p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-gray-100 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-gray-100">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3 text-white">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
