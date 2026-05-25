import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [fromData, setFromData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFromData({
      ...fromData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/login",
        fromData,
      );

      //save token
      localStorage.setItem("token", res.data.token);
      alert("Login successfully");
      navigate("/deshboard");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    }
  };
  return (
    <div className="bg-gradient-to-br from-[#050816] to-[#14182F] flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-[#0B1023] flex flex-col items-center border border-gray-400 p-6 gap-2 rounded-2xl">
        <FontAwesomeIcon
          icon={faLock}
          style={{ color: "blue", height: "30px", width: "30px" }}
          className="p-2 bg-blue-400/20 rounded-2xl"
        />
        <h1 className="text-white text-4xl font-semibold text-center">
          Welcome back
        </h1>
        <p className="text-gray-400 font-medium">
          Log in to continue to your account
        </p>
        {/* form  */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-2">Email</label>

            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              value={fromData.Email}
              onChange={handleChange}
              className="w-full bg-[#1F2937] text-white border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 block mb-2">Password</label>

            <input
              type="password"
              name="Password"
              placeholder="Enter your password"
              value={fromData.Password}
              onChange={handleChange}
              className="w-full bg-[#1F2937] text-white border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
