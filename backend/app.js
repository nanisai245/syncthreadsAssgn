const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const userRouter = require("./routes/userRoutes");

app.use(cookieParser());
const allowedOrigins = [
  "http://localhost:5001",
  "https://syncthreads-assgn.vercel.app",
  "https://syncthreads-assgn-p6xb63hns-nanisai245s-projects.vercel.app",
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/api", userRouter);

module.exports = app;
