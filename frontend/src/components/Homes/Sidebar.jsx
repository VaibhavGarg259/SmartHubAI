import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between bg-[#050816] p-2 border-b border-gray-600 p-4">
      <div className="text-xl font-bold text-white ml-5 hover:cursor-pointer">
        <h1 className="text-4xl font-extrabold">SmartHub</h1>
      </div>
      <div className="flex gap-6 mr-5">
        {/* <button className="text-white border-r border-gray-600 bg-[#050816] px-1.5 hover:cursor-pointer">
          <img src="moon-solid.png" alt="" className="h-6" />
        </button> */}
        <button
          className="text-white border border-gray-600 rounded-xl bg-[#050816] p-2 px-3 hover:cursor-pointer hover:text-gray-400"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
        <button
          className="text-white border border-none rounded-xl from-[#3B82F6] to-[#A855F7] p-2 bg-gradient-to-r hover:cursor-pointer hover:text-gray-700"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
