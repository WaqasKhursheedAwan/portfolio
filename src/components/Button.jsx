import React from "react";
import { FiDownload } from "react-icons/fi";

const Button = (props) => {
  return (
    <>
      <button className="flex lg:text-xl text-base md:text-base xl:text-xl my-1 md:my-3 border-4 gap-2 rounded-full text-gray-500 border-white px-7 py-4 hover:bg-transparent hover:font-bold hover:text-white">
        {props.name} <FiDownload size={26} />{" "}
      </button>
    </>
  );
};

export default Button;
