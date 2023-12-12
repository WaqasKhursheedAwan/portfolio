import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Bar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  // Array of objects {name: "Home", link: "#home"}
  // const menuLinks = ["Home", "About", "Skills", "Projects", "Contact"];
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 ${
          sticky ? "text-white" : "text-white"
        }`}
      >
        <div className="flex justify-between items-center ">
          <h1> Portfolio</h1>
          <div className="hidden md:block ">
            <ul
              className={`flex text-lg gap-4 bg-white text-gray-900 py-2 px-6 rounded-bl-full
             ${sticky ? "bg-white/0 text-white" : "bg-white"}`}
            >
              {menuLinks.map((items, i) => (
                <li key={i} className="px-6 hover:text-cyan-600">
                  <a href={items.link}> {items.name} </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${
              isOpen ? "text-gray-900" : "right-[-100%]"
            } z-10 md:hidden`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`${
          isOpen ? "right-0 z-10" : "right-[-100%]"
        } top-0 fixed h-full w-2/3 bg-slate-200 duration-1000 md:hidden `}
      >
        <ul className="flex flex-col items-center text-lg gap-4 text-gray-900 p-6 z-50 my-6">
          {menuLinks.map((items, i) => {
            return (
              <li key={i} className="hover:text-cyan-600 my-3 font-semibold">
                <a href={items.link}>{items.name} </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Bar;
