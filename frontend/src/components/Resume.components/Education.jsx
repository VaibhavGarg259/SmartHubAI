import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dsidebar from "../Dsidebar";
import Rnavbar from "./Rnavbar";
import Step from "./Step";
import FileInfo from "./FileInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Areatext from "./Areatext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  const navigate = useNavigate();
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [education, setEducation] = useState([1]);

  const [educationData, seteducationDate] = useState({
    course: "",
    field: "",
    university: "",
    enddate: "",
    startdate: "",
    currently: false,
    address: "",
    percentage: "",
    description: "",
  });

  const Ehandlechange = (e) => {
    seteducationDate({
      ...educationData,
      [e.target.name]: e.target.value,
    });
  };

  const EhandleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("resumeData")) || {};

    const updatedData = {
      ...oldData,
      education: educationData,
    };

    localStorage.setItem("resumeData", JSON.stringify(updatedData));

    navigate("/resume/skill");
  };

  const addExperience = () => {
    setEducation([...education, Date.now()]);
  };

  const deleteExperience = (id) => {
    setEducation(education.filter((exp) => exp !== id));
  };
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
                        Education Details
                      </h1>
                      <p className="text-[20px] text-gray-300">
                        Add your educational background.
                      </p>
                    </div>
                    {/* add btn  */}
                    <div className="">
                      <button
                        className="border border-purple-500 text-purple-600 px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-600"
                        type="button"
                        onClick={addExperience}
                      >
                        + Add Education
                      </button>
                    </div>
                  </div>
                  {/* fill information  */}
                  {/* <form onSubmit={handleSubmit}> */}
                  <form onSubmit={EhandleSubmit} className="">
                    {education.map((id) => (
                      <div key={id}>
                        <div className="mt-4 text-white flex flex-col gap-4 mb-5">
                          {/* job, start and delete  */}
                          <div className="flex gap-7  ">
                            <FileInfo
                              name="Degree/Course"
                              type="text"
                              namei="course"
                              place="Enter a course"
                              change={Ehandlechange}
                            />

                            <div className="flex ">
                              <FileInfo
                                name="Field of study"
                                type="text"
                                namei="field"
                                change={Ehandlechange}
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
                              name="University/School"
                              type="text"
                              namei="university"
                              place="Enter school Name"
                              change={Ehandlechange}
                            />
                            <FileInfo
                              name="Location"
                              type="text"
                              namei="address"
                              place="Enter address"
                              change={Ehandlechange}
                            />
                          </div>
                          <div className="flex gap-4  ">
                            <div className="w-fit">
                              <FileInfo
                                name="Start Date"
                                type="text"
                                namei="startdate"
                                change={Ehandlechange}
                                // place=""
                              />
                            </div>
                            <div className="w-fit">
                              <FileInfo
                                name="End Date"
                                type="text"
                                namei="enddate"
                                change={Ehandlechange}
                                // place=""
                              />
                            </div>

                            <div className="flex items-center gap-2 text-center">
                              <input
                                type="checkbox"
                                name="currently"
                                checked={currentlyWorking}
                                onChange={(e) => {
                                  setCurrentlyWorking(e.target.checked);

                                  seteducationDate({
                                    ...educationData,
                                    currently: e.target.checked,
                                  });
                                }}
                              />

                              <label className="text-[15px]">
                                Currently Pursuing
                              </label>
                            </div>
                          </div>
                          <div className="flex gap-2  ">
                            <div className="w-50">
                              <FileInfo
                                name="CGPA/Percentage"
                                type="text"
                                namei="percentage"
                                place="8.6/10"
                                change={Ehandlechange}
                              />
                            </div>
                            <div className="w-100">
                              <Areatext
                                name="Description"
                                names="description"
                                row="3"
                                change={Ehandlechange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* button  */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="text-xl w-full text-center p-2 rounded-xl border cursor-pointer "
                        onClick={() => navigate("/resume/experience")}
                      >
                        ← Previous
                      </button>
                      <button
                        type="submit"
                        className="text-xl w-full text-center p-2 rounded-xl from-[#6366f1] to-[#A855F7] bg-gradient-to-r cursor-pointer "
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

export default Education;
