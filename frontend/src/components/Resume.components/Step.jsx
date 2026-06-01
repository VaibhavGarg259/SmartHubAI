import React from "react";
import { useLocation } from "react-router-dom";

const Step = () => {
  const location = useLocation();
  return (
    <div className="flex">
      {/* step 1  */}
      <div className="flex flex-col  ">
        <div className="flex items-center">
          <div
            className={`text-center px-5 py-3  rounded-full ${
              location.pathname === "/resume" ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            1
          </div>
          <div className="h-0.5 w-20 bg-gray-600"></div>
        </div>
        <h4 className="ml-[-15px]">Personal Info</h4>
      </div>
      {/* step 2  */}
      <div className="flex flex-col  ">
        <div className="flex items-center">
          <div
            className={`text-center px-5 py-3  rounded-full ${
              location.pathname === "/resume/experience"
                ? "bg-blue-500"
                : "bg-gray-500"
            }`}
          >
            2
          </div>
          <div className="h-0.5 w-20 bg-gray-600"></div>
        </div>
        <h4 className="ml-[-15px]">Experience</h4>
      </div>
      {/* step 3  */}
      <div className="flex flex-col  ">
        <div className="flex items-center">
          <div
            className={`text-center px-5 py-3  rounded-full ${
              location.pathname === "/resume/education"
                ? "bg-blue-500"
                : "bg-gray-500"
            }`}
          >
            3
          </div>
          <div className="h-0.5 w-20 bg-gray-600"></div>
        </div>
        <h4 className="ml-[-15px]">Education</h4>
      </div>
      {/* step 4  */}
      <div className="flex flex-col  ">
        <div className="flex items-center">
          <div
            className={`text-center px-5 py-3  rounded-full ${
              location.pathname === "/resume/skill"
                ? "bg-blue-500"
                : "bg-gray-500"
            }`}
          >
            4
          </div>
          <div className="h-0.5 w-20 bg-gray-600"></div>
        </div>
        <h4 className="ml-[5px]">Skills</h4>
      </div>
      {/* step 5  */}
      <div className="flex flex-col  ">
        <div className="flex items-center">
          <div
            className={`text-center px-5 py-3  rounded-full ${
              location.pathname === "/resume/projects"
                ? "bg-blue-500"
                : "bg-gray-500"
            }`}
          >
            5
          </div>
          {/* <div className="h-0.5 w-20 bg-gray-600"></div> */}
        </div>
        <h4 className="ml-[-5px]">Projects</h4>
      </div>
    </div>
  );
};

export default Step;
