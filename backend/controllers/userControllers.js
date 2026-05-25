// import bcrypt from "bcryptjs";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;

    // console.log(req.body);
    // console.log(user);
    // console.log(Password);
    // console.log(user.Password);

    // check user exists
    const existuser = await User.findOne({ Email });
    if (existuser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // password hash
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(Password, salt);

    //save user
    const user = await User.create({
      Name,
      Email,
      Password: hashedpassword,
    });
    // console.log(user);
    //generate tolen
    const token = jwt.sign({ id: user._id }, process.env.MY_SECRET_KEY, {
      expiresIn: "7d",
    });

    // remove
    const userdata = user.toObject();
    delete userdata.Password;

    return res.status(200).json({
      success: true,
      message: "User register successfully",
      token,
      user: userdata,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    // check user
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    //match password
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or Password",
      });
    }

    //generate token
    const token = jwt.sign({ id: user._id }, process.env.MY_SECRET_KEY, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      success: true,
      message: "user login successfull",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
