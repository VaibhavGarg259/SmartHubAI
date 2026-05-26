// models/resume.model.js

import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    fullName: String,
    title: String,
    skills: String,
    experience: String,
    education: String,
    projects: String,

    aiContent: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Resume", resumeSchema);
