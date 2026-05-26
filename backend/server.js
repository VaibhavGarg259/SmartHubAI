import express from "express";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resume.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
//database
connectDB();

//auth Route
// app.use("/api/auth", authRoutes);
app.use(
  cors({
    origin: "http://localhost:5173",
    // methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
// app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port is ${PORT}`);
});
