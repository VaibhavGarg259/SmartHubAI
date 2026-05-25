import {
  faBold,
  faBrush,
  faCloudUploadAlt,
  faEraser,
  faFile,
  faFileExport,
  faFolder,
  faInfinity,
  faList,
  faMultiply,
  faPen,
  faRocket,
  faShapes,
  faShare,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Colors } from "chart.js";
import React, { useEffect } from "react";
import Card from "./card";
import { useNavigate } from "react-router-dom";

const Platform = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");

        // const current = +counter.innerText;
        const current = +counter.innerText.replace(/,/g, "");

        const increment = target / 1600;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment).toLocaleString();

          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      updateCounter();
    });
  }, []);
  return (
    <div className=" bg-[#050816]">
      {/* header  */}
      <div className="flex flex-col gap-4 items-center text-white">
        {/* 1 text  */}
        <div className="flex gap-2 items-center border text-white border-gray-900 rounded-full px-3 py-2 mt-10 bg-gray-900">
          <FontAwesomeIcon icon={faRocket} style={{ color: "#A855F7" }} />
          <p className="text-[12px]">Powerful Features</p>
        </div>
        {/* 2 text  */}
        <h1 className="text-3xl font-bold text-white">
          Everything You Need in One Platform
        </h1>
        <p className="text-gray-400 text-[14px]">
          Five powerful tools to supercharge your productivity and learning
          journey
        </p>
      </div>
      <div className="flex gap-2 mt-5 text-white ml-15 items-center">
        <Card />
      </div>
      {/* whileboard  */}
      <div className="mt-10 bg-[#0B1023] mr-5 ml-5 rounded-2xl border border-gray-900 p-5 flex gap-3 ">
        {/* board  */}
        <div className="flex border border-gray-800 rounded-2xl overflow-auto bg-[#14182F] ">
          {/* sidebar   */}
          <div className="flex gap-2 bg-[#050816] p-2 border-r border-gray-900">
            <div className="flex flex-col gap-2">
              {/* ...  */}
              <div className="flex gap-2 p-2">
                <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
                <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
                <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
              </div>
              {/* tools  */}
              <div className="flex flex-col gap-2 items-center mt-3">
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ color: "white" }}
                  className="p-2 bg-gray-900 rounded-xl"
                />
                {/* tool 2  */}
                <FontAwesomeIcon
                  icon={faTools}
                  style={{ color: "white" }}
                  className="p-2 bg-gray-900 rounded-xl"
                />
                {/* tool 3  */}
                <FontAwesomeIcon
                  icon={faEraser}
                  style={{ color: "white" }}
                  className="p-2 bg-gray-900 rounded-xl"
                />
                {/* tool 4  */}
                <FontAwesomeIcon
                  icon={faBold}
                  style={{ color: "white" }}
                  className="p-2 bg-gray-900 rounded-xl"
                />
                {/* tool 5  */}
                <FontAwesomeIcon
                  icon={faBrush}
                  style={{ color: "white" }}
                  className="p-2 bg-gray-900 rounded-xl"
                />
                {/* tool 6  */}
                <FontAwesomeIcon
                  icon={faFile}
                  style={{ color: "white" }}
                  className="p-2 bg-gray-900 rounded-xl"
                />
                {/* tool 7  */}
                <FontAwesomeIcon
                  icon={faFolder}
                  style={{ color: "white" }}
                  className="p-2 bg-gray-900 rounded-xl"
                />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="text-white flex flex-col gap-4">
            <div className="bg-gray-900 w-150 h-117">
              {/* navbar */}
              <div className="flex gap-2 items-center p-5 justify-between">
                <div className="text-2xl font-bold">
                  <h1>Whiteboard</h1>
                </div>
                <div className="flex gap-2">
                  <img src="woman.png" alt="" className="h-10 w-10" />
                  <img
                    src="man.png"
                    alt=""
                    className="h-10 w-10 absolute ml-7"
                  />
                  <img
                    src="profile.png"
                    alt=""
                    className="h-10 w-10 absolute ml-14"
                  />
                  <button className="border border-none rounded-xl px-6 py-2 ml-16 bg-blue-600">
                    Share
                  </button>
                </div>
              </div>
              <div className="text-center border-l  w-fit ml-65">
                <h1>Project Plan </h1>
              </div>
              <div className="text-center w-fit ml-75">
                <p className="rotate-90 text-6xl text-green-400 ">→</p>
              </div>
              <div className="flex ml-5 items-center">
                <h1 className="border border-sky-800 p-2 rounded-lg border-2">
                  Research
                </h1>
                <p className=" text-6xl text-sky-700 ">→</p>
                <h1 className="border border-sky-900 p-2 rounded-lg border-2">
                  Design
                </h1>
                <p className=" text-6xl text-green-600 ">→</p>

                <h1 className="border border-green-600 p-2 rounded-lg border-2">
                  Development
                </h1>
                <p className=" text-6xl text-pink-600 ">→</p>

                <h1 className="border border-pink-700 p-2 rounded-lg border-2">
                  Testing
                </h1>
                <p className=" text-6xl text-pink-400 rotate-90 ">→</p>
              </div>
              <div className="flex ml-122 mt-5 items-center text-center border border-yellow-500 h-20 w-20 rounded-full border-2">
                <h1 className=" ml-3 ">Launch</h1>
              </div>
              <div className="flex  mb-10">
                <div className="h-20 w-20 bg-yellow-300 ml-10 mt-[-60px]">
                  <h1 className="text-black mt-4 ml-2">User Research</h1>
                </div>

                <div className="h-20 w-20 bg-sky-600 ml-20 mt-[-40px]">
                  <h1 className="text-black mt-4 ml-2">User Research</h1>
                </div>

                <div className="h-20 w-20 bg-pink-500 ml-20 mt-[-60px]">
                  <h1 className="text-black mt-4 ml-2">User Research</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* text  */}
        <div className="flex flex-col gap-4 text-white w-1/3 ml-5 border-l border-gray-900">
          <div className="ml-8 flex flex-col gap-6">
            <div className="flex gap-2 items-center border text-white border-gray-900 rounded-full px-3 py-2  bg-gray-800 w-fit">
              <FontAwesomeIcon icon={faRocket} style={{ color: "#A855F7" }} />
              <p>Collaborate in Real-time</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-5xl">Work Together, Learn Better</h1>
              <p className="text-gray-500 mt-2">
                Our real-time whiteboard helps you and your team brainstorm,
                plan and create together. Perfect for students and
                teams.teachers and remote teams.
              </p>
              <div className=" flex flex-col gap-4 mt-5">
                {/* line 1 */}
                <div className="flex gap-4 items-center ">
                  <FontAwesomeIcon
                    icon={faCloudUploadAlt}
                    style={{ color: "#A855F7" }}
                    className="p-2 border border-violet-500 rounded-xl"
                  />
                  <h4>Real-time collavoration</h4>
                </div>
                {/* line 2 */}
                <div className="flex gap-4 items-center ">
                  <FontAwesomeIcon
                    icon={faInfinity}
                    style={{ color: "#A855F7" }}
                    className="p-2 border border-violet-500 rounded-xl"
                  />
                  <h4>Infinite canvas</h4>
                </div>
                {/* line 3 */}
                <div className="flex gap-4 items-center ">
                  <FontAwesomeIcon
                    icon={faShapes}
                    style={{ color: "#A855F7" }}
                    className="p-2 border border-violet-500 rounded-xl"
                  />
                  <h4>Multiple tools & shapes</h4>
                </div>
                {/* line 4 */}
                <div className="flex gap-4 items-center ">
                  <FontAwesomeIcon
                    icon={faShare}
                    style={{ color: "#A855F7" }}
                    className="p-2 border border-violet-500 rounded-xl"
                  />
                  <h4>Export and share easily</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* coundown +  */}
      <div className=" grid grid-cols-4 ml-5 mr-5 mt-10 bg-[#0B1023] place-items-center p-4 border border-gray-900 rounded-2xl">
        {/* count 1  */}
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "#A855F7", height: "20px", width: "20px" }}
            className="p-4 bg-violet-500/20 rounded-full"
          />
          <div className=" text-white text-center">
            <h1 className="text-2xl">
              <span className="counter" data-target="10000">
                0
              </span>
              +
            </h1>
            <p className="text-white ">Active Users</p>
          </div>
        </div>
        {/* count 2  */}
        <div className="border-l ml-[-80px]">
          <div className="flex gap-2 items-center ml-10">
            <FontAwesomeIcon
              icon={faFileExport}
              style={{ color: "#3B82F6", height: "20px", width: "20px" }}
              className="p-4 bg-blue-500/20 rounded-full"
            />
            <div className=" text-white text-center">
              <h1 className="text-2xl">
                <span className="counter" data-target="50000">
                  0
                </span>
                +
              </h1>
              <p className="text-white ">Files Shared</p>
            </div>
          </div>
        </div>
        {/* count 3  */}
        <div className="border-l ml-[-80px]">
          <div className="flex gap-2 items-center ml-10">
            <FontAwesomeIcon
              icon={faFile}
              style={{ color: "#F59E0B", height: "20px", width: "20px" }}
              className="p-4 bg-orange-300/20 rounded-full"
            />
            <div className=" text-white text-center">
              <h1 className="text-2xl">
                <span className="counter" data-target="5000">
                  0
                </span>
                +
              </h1>
              <p className="text-white ">Active Users</p>
            </div>
          </div>
        </div>
        {/* count 4  */}
        <div className="border-l ml-[-80px]">
          <div className="flex gap-2 items-center ml-10">
            <FontAwesomeIcon
              icon={faList}
              style={{ color: "#EC4899", height: "20px", width: "20px" }}
              className="p-4 bg-pink-500/20 rounded-full"
            />
            <div className=" text-white text-center">
              <h1 className="text-2xl">
                <span className="counter" data-target="2000">
                  0
                </span>
                +
              </h1>
              <p className="text-white ">Active Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* last section  */}
      <div className="flex justify-between bg-[#6366F1] rounded-2xl items-center p-4 ml-5 mr-5 mt-10 ">
        <div className="">
          <h1 className="text-white text-3xl font-semibold">
            Ready to Boost Your Productivity?
          </h1>
          <p className="text-white text-[18px]">
            Join thousands of students and professionals using SmartHub every
            day.
          </p>
        </div>
        <button
          className="bg-white text-purple-600 hover:bg-gray-200 font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Get Started for Free →
        </button>
      </div>
    </div>
  );
};

export default Platform;
