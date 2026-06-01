import React, { useState } from "react";
import Dsidebar from "../Dsidebar";
import Rnavbar from "./Rnavbar";
import Step from "./Step";
import FileInfo from "./FileInfo";
import Areatext from "./Areatext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [experiences, setExperiences] = useState([1]);

  const [ExperienceData, setExperienceDate] = useState({
    job: "",
    startdate: "",
    company: "",
    enddate: "",
    joblocation: "",
    employment: "",
    description: "",
  });

  const handlechange = (e) => {
    setExperienceDate({
      ...ExperienceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("resumeData")) || {};

    const updatedData = {
      ...oldData,
      experience: ExperienceData,
    };

    localStorage.setItem("resumeData", JSON.stringify(updatedData));

    navigate("/resume/education");
  };

  const addExperience = () => {
    setExperiences([...experiences, Date.now()]);
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp !== id));
  };
  // const deleteExperience = (id) => {
  //   if (experiences.length === 1) return;

  //   setExperiences(experiences.filter((exp) => exp !== id));
  // };
  return (
    <div>
      <div className="flex bg-[#050816] text-white select-none ">
        {/* sidebar  */}
        <Dsidebar />
        <div className="flex flex-col gap-2 mt-5">
          {/* header  */}
          <div>
            <Rnavbar />
          </div>
          {/* resume details  */}
          <div className="bg-[#0B1023] mt-3 flex flex-col place-items-center">
            <div className="flex gap-2 ml-7 ">
              {/* details  */}
              <div className="">
                {/* step  */}
                <div className="flex items-center ml-9 mt-5">
                  <Step />
                </div>
                {/* personal information  */}
                <div className="mt-7 pb-5">
                  <div className="flex justify-between ">
                    {/* text  */}
                    <div className="">
                      <h1 className="text-2xl font-semibold ">
                        Work Experience
                      </h1>
                      <p className="text-[20px] text-gray-300">
                        Add your work experience details
                      </p>
                    </div>
                    {/* add btn  */}
                    <div className="">
                      <button
                        className="border border-purple-500 text-purple-600 px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-600"
                        type="button"
                        onClick={addExperience}
                      >
                        + Add Experience
                      </button>
                    </div>
                  </div>
                  {/* fill information  */}
                  {/* <form onSubmit={handleSubmit}> */}
                  <form onSubmit={handleSubmit}>
                    {experiences.map((id) => (
                      <div key={id}>
                        <div className="mt-4 text-white flex flex-col gap-4 mb-5">
                          {/* job, start and delete  */}
                          <div className="flex gap-7  ">
                            <FileInfo
                              name="Job Title"
                              type="text"
                              namei="job"
                              place="Full Stack Developer"
                              change={handlechange}
                            />

                            <div className="flex ">
                              <FileInfo
                                name="Start Date"
                                type="date"
                                namei="startdate"
                                change={handlechange}
                                // place=""
                              />
                              <button
                                type="button"
                                className="mt-[-70px] cursor-pointer"
                                onClick={() => deleteExperience(id)}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  style={{ color: "red" }}
                                />
                              </button>
                            </div>
                          </div>
                          <div className="flex gap-7">
                            <FileInfo
                              name="Company"
                              type="text"
                              namei="company"
                              place="Enter Company Name"
                              change={handlechange}
                            />
                            <div className="w-95 pr-5">
                              {!currentlyWorking && (
                                <FileInfo
                                  name="End Date"
                                  type="date"
                                  namei="enddate"
                                  change={handlechange}
                                  // place=""
                                />
                              )}

                              <div className="flex items-center gap-2 text-center">
                                <input
                                  type="checkbox"
                                  // name="currentlyWorking"
                                  name="enddate"
                                  checked={currentlyWorking}
                                  onChange={(e) => {
                                    setCurrentlyWorking(e.target.checked);
                                    handlechange(e);
                                  }}
                                />

                                <label className="text-[15px]">
                                  I currently work here
                                </label>
                              </div>
                            </div>
                          </div>
                          <FileInfo
                            name="Location"
                            type="text"
                            namei="joblocation"
                            place="Enter your address"
                            change={handlechange}
                          />
                          {/* employment type  */}
                          <div className="flex flex-col w-full gap-1">
                            <label className="text-xl text-gray-300">
                              Employment Type
                            </label>
                            {/* employment type  */}
                            <select
                              name="employment"
                              className="border border-gray-500 rounded-xl p-3 bg-transparent "
                              onChange={handlechange}
                            >
                              <option value="" className="bg-gray-950">
                                Select Employment Type
                              </option>
                              <option value="Part Time" className="bg-gray-950">
                                Part Time
                              </option>
                              <option value="Full Time" className="bg-gray-950">
                                Full Time
                              </option>
                              <option
                                value="Internship"
                                className="bg-gray-950"
                              >
                                Internship
                              </option>
                              <option value="Contract" className="bg-gray-950">
                                Contract
                              </option>
                              <option value="Freelance" className="bg-gray-950">
                                Freelance
                              </option>
                            </select>
                          </div>
                          <Areatext
                            name="Description"
                            names="description"
                            row="3"
                            change={handlechange}
                          />
                        </div>
                      </div>
                    ))}
                    {/* button  */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="text-xl w-full text-center p-2 rounded-xl border cursor-pointer "
                        onClick={() => navigate("/resume")}
                      >
                        ← Previous
                      </button>
                      <button
                        type="submit"
                        className="text-xl w-full text-center p-2 rounded-xl from-[#6366f1] to-[#A855F7] bg-gradient-to-r cursor-pointer "
                        // onClick={(e) => {
                        //   handleSubmit(e);
                        //   navigate("/resume/education");
                        // }}
                      >
                        sava&continue{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
