import React from "react";
import Dsidebar from "../components/Dsidebar";
import Step from "../components/Resume.components/Step";

const Resume = () => {
  return (
    <div className="flex bg-[#050816] text-white select-none ">
      <Dsidebar />
      <div className="flex flex-col gap-2 mt-5">
        {/* header  */}
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
            <button className="border border-gray-800 rounded-xl px-6 cursor-pointer hover:bg-gray-500">
              Back to Deshboard
            </button>
            <button className="border border-gray-800 rounded-xl px-6 cursor-pointer hover:text-gray-300  from-[#6366f1] to-[#A855F7] bg-gradient-to-r">
              Save Resume
            </button>
          </div>
        </div>
        {/* resume details  */}
        <div className="bg-[#0B1023] mt-3">
          <div className="flex gap-2 ml-7 ">
            {/* details  */}
            <div className="">
              {/* step  */}
              <div className="flex items-center ml-9 mt-5">
                <Step />
              </div>
              {/* personal information  */}
              <div className="mt-7">
                <h1 className="text-2xl font-semibold ">
                  Personal Information
                </h1>
                <p className="text-[20px] text-gray-300">
                  Add your basic details to get started.
                </p>
                {/* fill information  */}

                {/* button  */}
                <button className="text-xl w-full text-center p-2 rounded-xl from-[#6366f1] to-[#A855F7] bg-gradient-to-r ">
                  sava&continue{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
