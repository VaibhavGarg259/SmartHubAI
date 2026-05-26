import React from "react";
import Home from "./Page/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./components/Sign.jsx";
import Login from "./components/Login.jsx";
import Deshboard from "./Page/Deshboard.jsx";
import ProtectedRouter from "./components/ProtectedRouter.jsx";
import Resume from "./Page/Resume.jsx";
import StudyPlanner from "./Page/StudyPlanner.jsx";
import FileShare from "./Page/FileShare.jsx";
import Whiteboard from "./Page/Whiteboard.jsx";
import Playlist from "./Page/Playlist.jsx";
import Aiassistant from "./Page/Aiassistant.jsx";
import Setting from "./Page/Setting.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/deshboard"
          element={
            <ProtectedRouter>
              <Deshboard />
            </ProtectedRouter>
          }
        />
        <Route
          path="/resume"
          element={
            <ProtectedRouter>
              <Resume />
            </ProtectedRouter>
          }
        />
        <Route
          path="/planner"
          element={
            <ProtectedRouter>
              <StudyPlanner />
            </ProtectedRouter>
          }
        />
        <Route
          path="/fileshare"
          element={
            <ProtectedRouter>
              <FileShare />
            </ProtectedRouter>
          }
        />
        <Route
          path="/whiteboard"
          element={
            <ProtectedRouter>
              <Whiteboard />
            </ProtectedRouter>
          }
        />
        <Route
          path="/playlist"
          element={
            <ProtectedRouter>
              <Playlist />
            </ProtectedRouter>
          }
        />
        <Route
          path="/AI"
          element={
            <ProtectedRouter>
              <Aiassistant />
            </ProtectedRouter>
          }
        />
        <Route
          path="/setting"
          element={
            <ProtectedRouter>
              <Setting />
            </ProtectedRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
