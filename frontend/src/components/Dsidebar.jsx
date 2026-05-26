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
import FeatureName from "./Dsidebar/featureName";

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
      <>
        <FeatureName icon={faHome} name="Deshboard" redirect="/deshboard" />
        {/* f2  */}
        <FeatureName icon={faFile} name="Resume" redirect="/resume" />
        {/* f3  */}
        <FeatureName
          icon={faCalendar}
          name="Study Planner"
          redirect="/planner"
        />
        {/* f4 */}
        <FeatureName
          icon={faFileExport}
          name="File Share"
          redirect="/fileshare"
        />
        {/* f5  */}
        <FeatureName
          icon={faBlackboard}
          name="Whiteboard"
          redirect="/whiteboard"
        />
        {/* f6  */}
        <FeatureName icon={faList} name="Playlist Store" redirect="/playlist" />
        {/* f7  */}
        <FeatureName icon={faRobot} name="AI Assistant" redirect="/AI" />
        {/* f8  */}
        <FeatureName icon={faGear} name="Setting" redirect="/setting" />
      </>

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
