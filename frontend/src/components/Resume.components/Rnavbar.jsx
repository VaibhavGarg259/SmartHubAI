import React from "react";
import { useNavigate } from "react-router-dom";

const Rnavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between ml-7 w-275">
      {/* text  */}
      <div className="">
        <h1 className="text-2xl text-white ">Build Your Resume</h1>
        <p className="text-gray-300">
          Create a professional resume that gets you hired
        </p>
      </div>
      {/* button  */}
      <div className=" flex gap-4">
        <button
          className="border border-gray-800 rounded-xl px-6 cursor-pointer hover:bg-gray-500"
          onClick={() => navigate("/deshboard")}
        >
          Back to Deshboard
        </button>
        <button className="border border-gray-800 rounded-xl px-6 cursor-pointer hover:text-gray-300  from-[#6366f1] to-[#A855F7] bg-gradient-to-r">
          Save Resume
        </button>
      </div>
    </div>
  );
};

export default Rnavbar;
