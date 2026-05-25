import React from "react";
import Home from "./Page/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./components/Sign.jsx";
import Login from "./components/Login.jsx";
import Deshboard from "./Page/Deshboard.jsx";
import ProtectedRouter from "./components/ProtectedRouter.jsx";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
