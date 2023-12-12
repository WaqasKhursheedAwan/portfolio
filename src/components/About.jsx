import React from "react";

const About = () => {
  const info = [
    { text: "Years Of Experience", count: "02" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];

  return (
    <section id="about" className="text-white py-10 sm:px-10 ">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-gray-400">
          About <span className="text-white"> Me </span>
        </h3>
        <p className="text-gray-100 my-3 text-2xl font-medium">
          {" "}
          My Introduction{" "}
        </p>
        <p className="text-justify leading-8 text-lg font-thin">
          I'm Waqas Khursheed, a MERN stack enthusiast passionate about crafting
          innovative web solutions. With expertise in JavaScript, React.js,
          Node.js, Express.js, and MongoDB, I specialize in building scalable
          applications. My experience spans diverse projects, from e-commerce
          platforms to interactive web apps, always aiming for user-centric
          designs and top-notch performance. I thrive in collaborative
          environments, valuing teamwork and continuous learning to stay ahead
          in this ever-evolving tech landscape. My goal is to create impactful
          digital experiences that push the boundaries of web development,
          combining creativity and technical prowess to make a difference
        </p>
      </div>
      <div className="flex mt-10 text-center justify-center gap-7">
        {info.map((content) => (
          <div className="" key={content.count}>
            <h3 className="text-2xl md:text-4xl font-semibold">
              {" "}
              {content.count}{" "}
            </h3>
            <span className="text-gray-400 text-xs md:text-lg">
              {" "}
              {content.text}{" "}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
