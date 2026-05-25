import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Sign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  //   input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/register",
        formData,
      );

      // save token
      localStorage.setItem("token", res.data.token);

      alert("Signup Successfully");
      navigate("/deshboard");
      // console.log(res.data);
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] to-[#14182F] flex flex-col items-center justify-center px-4">
      {/* header  */}
      <div className="w-full max-w-md bg-[#0B1023] border border-gray-300 rounded-3xl p-8 shadow-2xl">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "blue" }}
            className="p-4 bg-blue-400/20 rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Create your account
        </h1>
        <p className="text-gray-400 text-center mb-8">Sign up to get started</p>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-300 block mb-2">Name</label>

            <input
              type="text"
              name="Name"
              placeholder="Enter your name"
              value={formData.Name}
              onChange={handleChange}
              className="w-full bg-[#1F2937] text-white border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-violet-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-2">Email</label>

            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              value={formData.Email}
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
              value={formData.Password}
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

export default Sign;
