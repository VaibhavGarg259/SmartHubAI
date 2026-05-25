import jwt from "jsonwebtoken";
// import user from "../models/user";

export const authMiddleware = async (req, res, next) => {
  try {
    // get token for header
    const authHeader = req.headers.authorization;

    // check
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Token not found",
      });
    }

    // /remove bearer
    const token = authHeader.split(" ")[1];

    // verify token
    const decoded = jwt.verify(token, process.env.MY_SECRET_KEY);

    // match id
    req.userId = decoded.id;

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
