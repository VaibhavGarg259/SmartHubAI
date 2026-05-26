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
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FeatureName = (props) => {
  const navigate = useNavigate();
  //   const [active, setActive] = useState(false);
  const location = useLocation();

  const active = location.pathname === props.redirect;

  //   const handleclick = () => {
  //     // setActive(true);
  //      setActive(!active);
  //     navigate(props.redirect);
  //   };
  return (
    <div>
      <div
        className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer ${
          active ? "bg-gray-600" : ""
        }`}
        onClick={() => navigate(props.redirect)}
      >
        <FontAwesomeIcon
          icon={props.icon}
          style={{
            color: active ? "#a855f7" : "white",
            height: "20px",
            width: "20px",
          }}
        />
        <h1 className="text-2xl hover:text-gray-500 text-gray-300 select-none">
          {props.name}
        </h1>
      </div>
    </div>
  );
};

export default FeatureName;
