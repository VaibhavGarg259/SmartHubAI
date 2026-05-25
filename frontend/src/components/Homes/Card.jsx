import {
  faCalculator,
  faCalendar,
  faFile,
  faFileExport,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = () => {
  return (
    <div className="flex gap-3 items-center justify-center ml-5">
      {/* card 1  */}
      <div className="flex flex-col gap-3 bg-[#0B1023] p-4 rounded-xl w-60">
        <FontAwesomeIcon
          icon={faFile}
          style={{ color: "#10B981", height: "40px", width: "40px" }}
          className="p-2 bg-green-400/20 rounded-xl"
        />
        <h1 className="text-white text-[25px] font-bold">
          Resume Builder & Analyzer
        </h1>
        <p className="text-gray-400 ">
          Create professional resumes and get AI-powered analysis with ATS score
          and improvement suggestions.
        </p>
      </div>
      {/* card 2 */}
      <div className="flex flex-col gap-3 bg-[#0B1023] p-4 rounded-xl w-60">
        <FontAwesomeIcon
          icon={faCalendar}
          style={{ color: "#A855F7", height: "40px", width: "40px" }}
          className="p-2 bg-purple-400/20 rounded-xl"
        />
        <h1 className="text-white text-[25px] font-bold">
          Smart Study Planner
        </h1>
        <p className="text-gray-400 ">
          AI-powered study planner that creates custom schedules, tracks
          progress and boosts productivity
        </p>
      </div>
      {/* card 3 */}
      <div className="flex flex-col gap-3 bg-[#0B1023] p-4 rounded-xl w-60">
        <FontAwesomeIcon
          icon={faFileExport}
          style={{ color: "#3B82F6", height: "40px", width: "40px" }}
          className="p-2 bg-blue-400/20 rounded-xl"
        />
        <h1 className="text-white text-[25px] font-bold">
          File Sharing & System
        </h1>
        <p className="text-gray-400 ">
          Upload files, genarate secure links, set expiry and share with
          anyone,anywhere instantly.
        </p>
      </div>
      {/* card 4 */}
      <div className="flex flex-col gap-3 bg-[#0B1023] p-4 rounded-xl w-60">
        <FontAwesomeIcon
          icon={faPen}
          style={{ color: "#FB923C", height: "40px", width: "40px" }}
          className="p-2 bg-orange-400/20 rounded-xl"
        />
        <h1 className="text-white text-[25px] font-bold">
          Whiteboard Collaboration
        </h1>
        <p className="text-gray-400 ">
          Real-time collaborative whoreboard for brainstorming, teaching and
          team collaboration.
        </p>
      </div>
      {/* card 5 */}
      <div className="flex flex-col gap-3 bg-[#0B1023] p-4 rounded-xl w-60">
        <img
          src="youtube.png"
          alt=""
          className="p-2 bg-red-400/20 rounded-xl w-15 h-15"
        />
        <h1 className="text-white text-[25px] font-bold">
          YouTube Playlist Manager
        </h1>
        <p className="text-gray-400 ">
          Save, organize and track your learning playlists in one place. Never
          lose good content again.
        </p>
      </div>
    </div>
  );
};

export default Card;
