import React, { useState } from "react";
import Dsidebar from "../components/Dsidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport, faUser } from "@fortawesome/free-solid-svg-icons";

const Deshboard = () => {
  const { ProfilePic, setProfilePic } = useState();

  return (
    <div className="min-h-screen bg-[#050816] flex gap-2 ">
      {/* sitebar  */}
      <div className="">
        <Dsidebar />
      </div>
      {/* Deshboard  */}
      <div className=" select-none">
        {/* navbar  */}
        <div className="flex justify-between mt-4 p-2 items-center w-275">
          <h1 className="text-white text-2xl font-extrabold"> Dashboard </h1>
          <div className="">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "white", height: "20px", width: "20px" }}
            />
          </div>
        </div>
        {/* card */}
        <div className="flex gap-6 p-4 items-center justify-center mt-5">
          {/* c1  */}
          <div className="bg-[#14182F] text-white p-7 rounded-2xl h-55">
            <h1 className="text-xl text-gray-300 ">Resume Score</h1>
            <h1 className="text-2xl h-9">-</h1>
            <p className="text-gray-400">Good Score</p>
            <div className="h-16 w-28 border-14 border-green-400 border-b-0 rounded-t-full mt-5 ml-5"></div>
          </div>
          {/* c2  */}
          <div className="bg-[#14182F] text-white p-7 rounded-2xl h-55">
            <h1 className="text-xl text-gray-300 ">Study Hours</h1>
            <h1 className="text-2xl h-9">-</h1>
            <p className="text-gray-400">This Week</p>
            {/* graph  */}
            <div className="flex gap-1 mt-5 ml-5">
              <div className="h-1 w-3 bg-blue-400 rounded-xl "></div>
              <div className="h-1 w-3 bg-blue-400 rounded-xl "></div>
              <div className="h-1 w-3 bg-blue-400 rounded-xl "></div>
              <div className="h-1 w-3 bg-blue-400 rounded-xl "></div>
              <div className="h-1 w-3 bg-blue-400 rounded-xl "></div>
              <div className="h-1 w-3 bg-blue-400 rounded-xl "></div>
              <div className="h-1 w-3 bg-blue-400 rounded-xl "></div>
            </div>
          </div>
          {/* c3  */}
          <div className="bg-[#14182F] text-white p-7 rounded-2xl h-55">
            <h1 className="text-xl text-gray-300 ">Files Shared</h1>
            <h1 className="text-2xl h-9">-</h1>
            {/* <p className="text-gray-400"></p> */}
            <FontAwesomeIcon
              icon={faFileExport}
              style={{ height:"80px", width:"40" }}
            />
          </div>
          {/* c4  */}
          <div className="bg-[#14182F] text-white p-7 rounded-2xl h-55">
            <h1 className="text-xl text-gray-300 ">Resume Score</h1>
            <h1 className="text-2xl h-9">-</h1>
            <p className="text-gray-400">Good Score</p>
            <div className="h-16 w-28 border-14 border-green-400 border-b-0 rounded-t-full mt-5 ml-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deshboard;
