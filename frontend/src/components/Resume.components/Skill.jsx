import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dsidebar from "../Dsidebar";
import Rnavbar from "./Rnavbar";
import Step from "./Step";
import FileInfo from "./FileInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Areatext from "./Areatext";

const Skill = () => {
  const navigate = useNavigate();
  // const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [Skills, setSkills] = useState([1]);

  const [skillData, setSkillDate] = useState({
    skill: "",
    category: "",
    level: "",
    Sexperience: "",
    description: "",
  });

  const Shandlechange = (e) => {
    setSkillDate({
      ...skillData,
      [e.target.name]: e.target.value,
    });
  };

  const ShandleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("resumeData")) || {};

    const updatedData = {
      ...oldData,
      skills: skillData,
    };

    localStorage.setItem("resumeData", JSON.stringify(updatedData));

    navigate("/resume/projects");
  };

  const addExperience = () => {
    setSkills([...Skills, Date.now()]);
  };

  const deleteExperience = (id) => {
    setSkills(Skills.filter((exp) => exp !== id));
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
                      <h1 className="text-2xl font-semibold ">Skills</h1>
                      <p className="text-[20px] text-gray-300">
                        Add your skills and expertise.
                      </p>
                    </div>
                    {/* add btn  */}
                    <div className="">
                      <button
                        className="border border-purple-500 text-purple-600 px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-600"
                        type="button"
                        onClick={addExperience}
                      >
                        + Add New Skill
                      </button>
                    </div>
                  </div>
                  {/* fill information  */}
                  {/* <form onSubmit={handleSubmit}> */}
                  <form onSubmit={ShandleSubmit} className="">
                    {Skills.map((id) => (
                      <div key={id}>
                        <div className="mt-4 text-white flex flex-col gap-4 mb-5">
                          {/* job, start and delete  */}
                          <div className="flex gap-7  ">
                            <FileInfo
                              name="Skill Name"
                              type="text"
                              namei="skill"
                              place="Enter a skill"
                              change={Shandlechange}
                            />

                            <div className="flex ">
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
                            <div className="flex flex-col gap-1">
                              <label>Skill Category</label>

                              <select
                                name="category"
                                className="border border-gray-500 rounded-xl p-3 bg-transparent"
                                onChange={Shandlechange}
                              >
                                <option value="" className="bg-gray-950">
                                  Select Category
                                </option>
                                <option
                                  value="Programming Languages"
                                  className="bg-gray-950"
                                >
                                  Programming Languages
                                </option>
                                <option
                                  value="Frontend Development"
                                  className="bg-gray-950"
                                >
                                  Frontend Development
                                </option>
                                <option
                                  value="Backend Development"
                                  className="bg-gray-950"
                                >
                                  Backend Development
                                </option>
                                <option
                                  value="Database"
                                  className="bg-gray-950"
                                >
                                  Database
                                </option>
                                <option value="DevOps" className="bg-gray-950">
                                  DevOps
                                </option>
                                <option
                                  value="Cloud Computing"
                                  className="bg-gray-950"
                                >
                                  Cloud Computing
                                </option>
                                <option
                                  value="Mobile Development"
                                  className="bg-gray-950"
                                >
                                  Mobile Development
                                </option>
                                <option
                                  value="UI/UX Design"
                                  className="bg-gray-950"
                                >
                                  UI/UX Design
                                </option>
                                <option
                                  value="Tools & Software"
                                  className="bg-gray-950"
                                >
                                  Tools & Software
                                </option>
                                <option
                                  value="Soft Skills"
                                  className="bg-gray-950"
                                >
                                  Soft Skills
                                </option>
                              </select>
                            </div>{" "}
                            <div className="flex flex-col gap-1">
                              <label>Proficiency Level</label>

                              <select
                                name="level"
                                className="border border-gray-500 rounded-xl p-3 bg-transparent"
                                onChange={Shandlechange}
                              >
                                <option value="" className="bg-gray-950">
                                  Select Level
                                </option>
                                <option
                                  value="Beginner"
                                  className="bg-gray-950"
                                >
                                  Beginner
                                </option>
                                <option
                                  value="Intermediate"
                                  className="bg-gray-950"
                                >
                                  Intermediate
                                </option>
                                <option
                                  value="Advanced"
                                  className="bg-gray-950"
                                >
                                  Advanced
                                </option>
                                <option value="Expert" className="bg-gray-950">
                                  Expert
                                </option>
                              </select>
                            </div>
                          </div>
                          <FileInfo
                            name="Experience (Optional)"
                            type="text"
                            namei="Sexperience"
                            place="eg 2+ years, 6months,etc"
                            change={Shandlechange}
                          />

                          <Areatext
                            name="Description (Optional)"
                            names="description"
                            row="3"
                            place="Describe your experience with this skill..."
                            change={Shandlechange}
                          />
                        </div>
                      </div>
                    ))}
                    {/* button  */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="text-xl w-full text-center p-2 rounded-xl border cursor-pointer "
                        onClick={() => navigate("/resume/education")}
                      >
                        ← Previous
                      </button>
                      <button
                        type="submit"
                        className="text-xl w-full text-center p-2 rounded-xl from-[#6366f1] to-[#A855F7] bg-gradient-to-r cursor-pointer "
                        // onClick={(e) => {
                        //   ShandleSubmit(e);
                        //   navigate("/resume/projects");
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

export default Skill;
