import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  Email: {
    type: String,
    required: true,
    unique: true,
  },

  Password: {
    type: String,
    required: true,
  },

  ProfilePic: {
    type: String,
  },

  role: {
    type: String,
    default: "user",
  },
});

export default mongoose.model("User", userSchema);
