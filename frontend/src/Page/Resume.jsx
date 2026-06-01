import React, { useState } from "react";
import Dsidebar from "../components/Dsidebar";
import Step from "../components/Resume.components/Step";
import FileInfo from "../components/Resume.components/FileInfo";
import Rnavbar from "../components/Resume.components/Rnavbar";
import { useNavigate } from "react-router-dom";
import Areatext from "../components/Resume.components/Areatext";

const Resume = () => {
  const navigate = useNavigate();
  const [upload, setUpload] = useState("");
  const [ResumeData, setResumeData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    wedsite: "",
    summary: "",
    // upload: "",
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setUpload(URL.createObjectURL(file));
    }
  };

  const handleResume = (e) => {
    setResumeData({
      ...ResumeData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   localStorage.setItem("resumeData", JSON.stringify(ResumeData));

  //   navigate("/resume/experience");
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("resumeData")) || {};

    const updatedData = {
      ...oldData,
      personal: ResumeData,
    };

    localStorage.setItem("resumeData", JSON.stringify(updatedData));

    navigate("/resume/experience");
  };
  return (
    <div className="flex bg-[#050816] text-white select-none ">
      {/* sidebar  */}
      <Dsidebar />
      <div className="flex flex-col gap-2 mt-5">
        {/* header  */}
        <div>
          <Rnavbar />
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
              <div className="mt-7 p-2">
                <h1 className="text-2xl font-semibold ">
                  Personal Information
                </h1>
                <p className="text-[20px] text-gray-300">
                  Add your basic details to get started.
                </p>
                {/* fill information  */}
                <form onSubmit={handleSubmit}>
                  {/* form  */}
                  <div className="mt-4 text-white flex flex-col gap-4 mb-5">
                    <FileInfo
                      name="Full Name"
                      type="text"
                      namei="name"
                      place="John Doe"
                      change={handleResume}
                    />

                    <FileInfo
                      name="Professional Title"
                      type="text"
                      namei="title"
                      place="Full Stack Developer"
                      change={handleResume}
                    />
                    <div className="flex gap-7">
                      <FileInfo
                        name="Email"
                        type="email"
                        namei="email"
                        place="Enter your email"
                        change={handleResume}
                      />
                      <FileInfo
                        name="Phone"
                        type="text"
                        namei="phone"
                        place="7870XXXXXX"
                        change={handleResume}
                      />
                    </div>
                    <div className="flex gap-7">
                      <FileInfo
                        name="Location"
                        type="text"
                        namei="location"
                        place="Enter your address"
                        change={handleResume}
                      />
                      <FileInfo
                        name="Linkedin"
                        type="text"
                        namei="linkedin"
                        place="linkedin.com/in/johndoe"
                        change={handleResume}
                      />
                    </div>
                    <FileInfo
                      name="Website"
                      type="text"
                      namei="wedsite"
                      place="www.johndoe.dev"
                      change={handleResume}
                    />
                    <Areatext
                      name="Professional Summary"
                      names="summary"
                      place=""
                      row="5"
                      change={handleResume}
                    />
                  </div>
                  {/* button  */}
                  <button
                    type="submit"
                    className="text-xl w-full text-center p-2 rounded-xl from-[#6366f1] to-[#A855F7] bg-gradient-to-r cursor-pointer "
                    // onClick={(e) => {
                    //   handleSubmit(e);
                    //   navigate("/resume/experience");
                    // }}
                  >
                    sava&continue
                  </button>
                </form>
              </div>
            </div>
            {/* Resume template  */}
            <div className="text-white flex flex-col gap-4 p-5 h-full w-full">
              <div className="flex justify-between ">
                <h1 className="text-2xl">Resume Template</h1>
                <label className=" text-xl border p-2 rounded-2xl">
                  Upload{" "}
                  <input
                    type="file"
                    className="flex hidden"
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
              {/* <img src={`resume.png || ${upload}`} alt="" className="mt-15" /> */}
              <img
                src={upload || "/resume.png"}
                alt="Resume Template"
                className="mt-15 w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
