import {
  faBlackboard,
  faCalendar,
  faChessKing,
  faFile,
  faFileExport,
  faGear,
  faHome,
  faList,
  faPager,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Dsidebar = () => {
  return (
    <div className="flex flex-col bg-[#14182F] p-4 min-h-scree w-70 select-none ">
      {/* 3point  */}
      <div className="flex gap-2 p-4">
        <div className="h-3 w-3 rounded-full bg-red-300"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-300"></div>
        <div className="h-3 w-3 rounded-full bg-green-300"></div>
      </div>
      {/* feature1  */}
      <div className=" flex items-center gap-4 p-3 hover:bg-gray-600 rounded-2xl cursor-pointer">
        <FontAwesomeIcon
          icon={faHome}
          style={{ color: "white", height: "20px", width: "20px" }}
        />
        <h1 className="text-2xl text-gray-300 select-none">Deshboard</h1>
      </div>
      {/* f2  */}
      <div className=" flex items-center gap-4 p-3 hover:bg-gray-600 rounded-2xl cursor-pointer">
        <FontAwesomeIcon
          icon={faFile}
          style={{ color: "white", height: "20px", width: "20px" }}
        />
        <h1 className="text-2xl text-gray-300 select-none">Resume</h1>
      </div>
      {/* f3  */}
      <div className=" flex items-center gap-4 p-3 hover:bg-gray-600 rounded-2xl cursor-pointer">
        <FontAwesomeIcon
          icon={faCalendar}
          style={{ color: "white", height: "20px", width: "20px" }}
        />
        <h1 className="text-2xl text-gray-300 select-none">Study Planner</h1>
      </div>
      {/* f4 */}
      <div className=" flex items-center gap-4 p-3 hover:bg-gray-600 rounded-2xl cursor-pointer">
        <FontAwesomeIcon
          icon={faFileExport}
          style={{ color: "white", height: "20px", width: "20px" }}
        />
        <h1 className="text-2xl text-gray-300 select-none">File Share</h1>
      </div>
      {/* f5  */}
      <div className=" flex items-center gap-4 p-3 hover:bg-gray-600 rounded-2xl cursor-pointer">
        <FontAwesomeIcon
          icon={faBlackboard}
          style={{ color: "white", height: "20px", width: "20px" }}
        />
        <h1 className="text-2xl text-gray-300 select-none">Whiteboard</h1>
      </div>
      {/* f6  */}
      <div className=" flex items-center gap-4 p-3 hover:bg-gray-600 rounded-2xl cursor-pointer">
        <FontAwesomeIcon
          icon={faList}
          style={{ color: "white", height: "20px", width: "20px" }}
        />
        <h1 className="text-2xl text-gray-300 select-none">Playlist Store</h1>
      </div>
      {/* f7  */}
      <div className=" flex items-center gap-4  p-3 hover:bg-gray-600 rounded-2xl cursor-pointer">
        <FontAwesomeIcon
          icon={faRobot}
          style={{ color: "white", height: "20px", width: "20px" }}
        />
        <h1 className="text-2xl text-gray-300 select-none">AI Assistant</h1>
      </div>
      {/* f8  */}
      <div className=" flex items-center gap-4 p-3 hover:bg-gray-600 rounded-2xl cursor-pointer">
        <FontAwesomeIcon
          icon={faGear}
          style={{ color: "white", height: "20px", width: "20px" }}
        />
        <h1 className="text-2xl text-gray-300 select-none">Setting</h1>
      </div>

      {/* pro planner */}
      <div className="flex flex-col gap-3 mt-9 items-center bg-[#0B1023] rounded-2xl p-3">
        <FontAwesomeIcon
          icon={faChessKing}
          style={{ color: "white", height: "20px", width: "20px" }}
          className="mt-4"
        />
        <h1 className="text-white text-2xl">Upgrade to Pro</h1>
        <p className="text-gray-400 text-center w-50">
          Unlock premium Features and AI tools
        </p>
        <button className="text-white px-6 py-2 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#A855F7] cursor-pointer hover:text-gray-300 ">
          Upgrade now
        </button>
      </div>
    </div>
  );
};

export default Dsidebar;
