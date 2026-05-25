import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCode,
  faFile,
  faFileExport,
  faFolder,
  faGear,
  faList,
  faLock,
  faPen,
  faRobot,
  faRocket,
  faSearch,
  faStore,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import { Chart } from "chart.js/auto";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current;

    const myChart = new Chart(ctx, {
      type: "line",

      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

        datasets: [
          {
            label: "Study Hours",

            data: [1, 2.5, 4, 3, 4, 3, 5],

            borderColor: "#7c6cff",

            backgroundColor: "rgba(124, 108, 255, 0.2)",

            fill: true,

            tension: 0.4,

            pointRadius: 5,

            pointHoverRadius: 8,

            pointBackgroundColor: "#ffffff",

            borderWidth: 4,
          },
        ],
      },

      options: {
        responsive: true,

        maintainAspectRatio: false,

        plugins: {
          legend: {
            display: false,
          },
        },

        scales: {
          x: {
            ticks: {
              color: "white",
            },

            grid: {
              color: "rgba(255,255,255,0.05)",
            },
          },

          y: {
            min: 0,
            max: 6,

            ticks: {
              color: "white",

              callback: function (value) {
                return value + "h";
              },
            },

            grid: {
              color: "rgba(255,255,255,0.05)",
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);
  return (
    <div className="flex gap-4 bg-[#050816] ">
      <div className=" flex flex-col gap-8 text-white font-semibold mt-10 ml-5">
        {/* ad box  */}
        <div className="flex items-center border border-gray-700 rounded-2xl p-1 w-53 mt-3">
          <FontAwesomeIcon
            icon={faRocket}
            style={{ color: "rgb(255, 212, 59)" }}
          />
          <p className="text-gray-300 text-[12px]">
            All-in-One Productivity Platform
          </p>
        </div>
        {/* text  */}
        <div className="text-white">
          <h1 className="text-5xl w-90">
            Your All-in-One <span className="text-violet-700">AI</span>{" "}
            Productivity Platform
          </h1>
          <p className="text-gray-300 mt-4 text-base w-100 mr-5">
            Build resumes, plan studies, share files, save learning resources,
            and collaborate smarter - all in one place.
          </p>
        </div>
        {/* button  */}
        <div className="flex gap-2">
          <button
            className="flex gap-2 justify-center items-center border border-none p-2 px-4 rounded-xl from-[#A855F7] to-[#3B82F6] bg-gradient-to-r hover:cursor-pointer hover:text-gray-700"
            onClick={() => navigate("/signup")}
          >
            Get Started Free{" "}
            <img className="h-4" src="right-arrow.png" alt="" />
          </button>
          <button className="flex gap-2 justify-center items-center border p-2 px-4 rounded-xl hover:cursor-pointer hover:text-sky-400">
            <img src="play-button.png" alt="" />
            WatchDemo
            <img className="h-4" src="play.png" alt="" />
          </button>
        </div>
        {/* bio */}
        <div className="flex">
          <div className="flex relative">
            <img src="woman.png" alt="" className="h-12 w-12" />
            <img src="man.png" alt="" className="h-12 w-12 absolute ml-7" />
            <img
              src="profile.png"
              alt=""
              className="h-12 w-12 absolute ml-14"
            />
          </div>

          <p className="ml-16">
            join 10,000+ students & professionals boosting their productivity
          </p>
        </div>
      </div>
      {/* create a image */}
      <div className=" h-155 mt-10 text-white flex border border-gray-700 rounded-3xl overflow-hidden  mr-7">
        {/* sidebar */}
        <div className="glass flex overflow-hidden">
          {/* Sidebar */}
          <aside className=" bg-[#070B1D] border-r border-white/5 p-4  ">
            <div className="flex gap-2 mb-5 p-3">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="">
              <div className="">
                <div className="flex gap-2 items-center bg-[#111827] p-3 rounded-xl">
                  <FontAwesomeIcon icon={faHouse} className="text-violet-400" />
                  <span>Deshboard</span>
                </div>
                <div className="flex gap-2 items-center  p-3 rounded-xl">
                  <FontAwesomeIcon icon={faFile} />
                  <span>Resume</span>
                </div>
                <div className="flex gap-2 items-center  p-3 rounded-xl">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>Study Planner</span>
                </div>
                <div className="flex gap-2 items-center  p-3 rounded-xl">
                  <FontAwesomeIcon icon={faFolder} />
                  <span>File Share</span>
                </div>
                <div className="flex gap-2 items-center p-3 rounded-xl  ">
                  <FontAwesomeIcon icon={faPen} />
                  <span>Whiteboard</span>
                </div>
                <div className="flex gap-2 items-center p-3 rounded-xl  ">
                  <FontAwesomeIcon icon={faStore} />
                  <span>Playlist Store</span>
                </div>
                <div className="flex gap-2 items-center p-3 rounded-xl   ">
                  <FontAwesomeIcon icon={faRobot} />
                  <span>Ai Assistant</span>
                </div>
                <div className="flex gap-2 items-center p-3 rounded-xl   ">
                  <FontAwesomeIcon icon={faGear} />
                  <span>Settings</span>
                </div>
              </div>
            </div>
          </aside>
          <div className=" rounded-full h-3 bg-red-400"></div>
        </div>
        {/* deshboard */}
        <div className=" ">
          {/* navbar */}
          <div className="flex items-center justify-between mt-5 p-2 ">
            <div className="ml-3">
              <h1 className="font-semibold text-2xl">Deshboard</h1>
            </div>
            {/* input  */}
            <div className="flex gap-3 mr-2">
              <div className="flex gap-2 items-center p-2 bg-gray-900 rounded-2xl">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Search anything..." />
              </div>
              <div className="">
                <img src="profile.png" alt="" className="h-10 rounded-full" />
              </div>
            </div>
          </div>
          {/* card */}
          <div className="flex gap-3 ">
            {/* Card 1 */}
            <div className=" flex flex-col gap-2 bg-gray-900 w-35 rounded-2xl p-5 mt-5 ml-3 ">
              <p className="text-gray-400">Resume Score</p>
              <h1 className="text-4xl font-semibold">85</h1>
              <p className="text-gray-400">Good Score</p>
              <div class="w-28 h-14 border-[10px] border-green-400 border-b-0 rounded-t-full"></div>
            </div>
            {/* Card 2 */}
            <div className=" flex flex-col gap-2 bg-gray-900 w-35 rounded-2xl p-5 mt-5 ">
              <p className="text-gray-400">Study Hours</p>
              <h1 className="text-4xl font-semibold">24.5</h1>
              <p className="text-gray-400">This Week</p>
              {/* <div class="w-28 h-14 border-[10px] border-green-400 border-b-0 rounded-t-full"></div> */}
              <div className="h-16 flex items-end gap-2">
                <div className="w-3 h-8 bg-violet-500 rounded-2xl"></div>
                <div className="w-3 h-12 bg-violet-400 rounded-2xl"></div>
                <div className="w-3 h-10 bg-violet-500 rounded-2xl"></div>
                <div className="w-3 h-14 bg-violet-300 rounded-2xl"></div>
              </div>
            </div>
            {/* Card 3 */}
            <div className=" flex flex-col gap-2 bg-gray-900 w-35 rounded-2xl p-5 mt-5 ">
              <p className="text-gray-400">Files Shared</p>
              <h1 className="text-4xl font-semibold">12</h1>
              <p className="text-gray-400">This Month</p>
              <div className=" flex ">
                <FontAwesomeIcon
                  icon={faFileExport}
                  style={{ height: "4rem", width: "4rem", color: "darkblue" }}
                  className="p-1 bg-blue-300 rounded-2xl"
                />
              </div>
            </div>
            {/* Card 4 */}
            <div className=" flex flex-col gap-2 bg-gray-900 w-35 rounded-2xl p-5 mt-5 ">
              <p className="text-gray-400 text-sm">Playlists Saved</p>
              <h1 className="text-4xl font-semibold">18</h1>
              <p className="text-gray-400">Total Playlists</p>
              <FontAwesomeIcon
                icon={faList}
                style={{ height: "4rem", width: "4rem", color: "darkpink" }}
                className="text-pink-700 p-2 bg-pink-100 rounded-2xl "
              />
            </div>
          </div>
          {/* progress & Tasks section  */}
          <div className="flex gap-3 mt-5 ml-5 ">
            {/* /study Progress  */}
            <div className="bg-[#0B1023] w-80 p-3 rounded-2xl">
              <h1 className="text-2xl font-semibold">Study Progress</h1>
              <p className="text-gray-200 mt-4 ml-2 text-xl">weekly progress</p>
              <div className="flex mt-2 ml-2">
                <div className="">
                  <canvas ref={chartRef}></canvas>
                </div>
              </div>
            </div>
            {/* Upcoming Tasks  */}
            <div className="flex flex-col gap-0.5 p-2 bg-[#0B1023] rounded-2xl mr-3 ">
              <h1 className="p-2 text-xl">Upcoming Tasks</h1>
              <div className="flex flex-col gap-0.5 mt-2 w-60 ">
                {/* task 1 */}
                <div className="flex gap-2 bg-[#14182F] p-2 rounded-xl">
                  <FontAwesomeIcon
                    icon={faFile}
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      color: "lightblue",
                    }}
                    className="p-2 bg-blue-300/20 rounded-xl"
                  />
                  <div className="">
                    <h1>Reach Revision</h1>
                    <p className="text-gray-400 text-[14px]">Today, 10:00 AM</p>
                  </div>
                </div>
                {/* task 2 */}
                <div className="flex gap-2 bg-[#14182F] p-2 rounded-xl">
                  <FontAwesomeIcon
                    icon={faCode}
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      color: "deepskyblue",
                    }}
                    className="p-2 bg-sky-300/20 rounded-xl p-2"
                  />
                  <div className="">
                    <h1>DSA Practice</h1>
                    <p className="text-gray-400 text-[14px]">Today, 2:00 PM</p>
                  </div>
                </div>
                {/* task 3 */}
                <div className="flex gap-2 bg-[#14182F] p-2 rounded-xl">
                  <FontAwesomeIcon
                    icon={faLock}
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      color: "goldenrod",
                    }}
                    className="p-2 bg-yellow-500/20 rounded-xl"
                  />
                  <div className="">
                    <h1>Maths Test</h1>
                    <p className="text-gray-400 text-[14px]">
                      Tomorrow, 9:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
