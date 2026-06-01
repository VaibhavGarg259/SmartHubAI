import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dsidebar from "../Dsidebar";
import Rnavbar from "./Rnavbar";
import Step from "./Step";
import FileInfo from "./FileInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Areatext from "./Areatext";

const Projects = () => {
  const navigate = useNavigate();
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [project, setProject] = useState([1]);

  const [ProjectData, setProjectData] = useState({
    Project: "",
    role: "",
    enddate: "",
    startdate: "",
    currently: false,
    technologes: "",
    projectLink: "",
    gitlink: "",
    description: "",
  });

  const Phandlechange = (e) => {
    setProjectData({
      ...ProjectData,
      [e.target.name]: e.target.value,
    });
  };

  const PhandleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("resumeData")) || {};

    const updatedData = {
      ...oldData,
      projects: ProjectData,
    };

    localStorage.setItem("resumeData", JSON.stringify(updatedData));

    // navigate("/resume/projects");
  };

  const addExperience = () => {
    setProject([...project, Date.now()]);
  };

  const deleteExperience = (id) => {
    setProject(project.filter((exp) => exp !== id));
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
                      <h1 className="text-2xl font-semibold ">Projects</h1>
                      <p className="text-[20px] text-gray-300">
                        Add your projects to showcase your work.
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
                  <form onSubmit={PhandleSubmit} className="">
                    {project.map((id) => (
                      <div key={id}>
                        <div className="mt-4 text-white flex flex-col gap-4 mb-5">
                          {/* job, start and delete  */}
                          <div className="flex gap-7  ">
                            <FileInfo
                              name="Project Title"
                              type="text"
                              namei="Project"
                              place="Enter a Project"
                              change={Phandlechange}
                            />

                            <div className="flex ">
                              <FileInfo
                                name="Role Position"
                                type="text"
                                namei="role"
                                change={Phandlechange}
                                place="Enter a Role"
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
                          <div className="flex gap-4  ">
                            <div className="w-fit">
                              <FileInfo
                                name="Start Date"
                                type="date"
                                namei="startdate"
                                change={Phandlechange}
                                // place=""
                              />
                            </div>
                            <div className="w-fit">
                              <FileInfo
                                name="End Date"
                                type="date"
                                namei="enddate"
                                change={Phandlechange}
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
                                  setProjectData({
                                    ...ProjectData,
                                    currently: e.target.checked,
                                  });
                                }}
                              />
                              <label className="text-[15px]">
                                Ongoing Project
                              </label>
                            </div>
                          </div>
                          <FileInfo
                            name="Technologies Used"
                            type="text"
                            namei="technologes"
                            place="e.g. MonogoDB, Express.js, React.js, Node.js, Tailwind CSS"
                            change={Phandlechange}
                          />
                          <div className="flex gap-7">
                            <FileInfo
                              name="Project Link"
                              type="text"
                              namei="projectLink"
                              place=""
                              change={Phandlechange}
                            />
                            <FileInfo
                              name="GitHub Link"
                              type="text"
                              namei="gitlink"
                              place=""
                              change={Phandlechange}
                            />
                          </div>
                          <Areatext
                            name="Project Description"
                            names="description"
                            row="5"
                            change={Phandlechange}
                          />
                        </div>
                      </div>
                    ))}
                    {/* button  */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="text-xl w-full text-center p-2 rounded-xl border cursor-pointer "
                        onClick={() => navigate("/resume/skill")}
                      >
                        ← Previous
                      </button>
                      <button
                        type="submit"
                        className="text-xl w-full text-center p-2 rounded-xl from-[#6366f1] to-[#A855F7] bg-gradient-to-r cursor-pointer "
                      >
                        Submit
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

export default Projects;
