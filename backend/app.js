const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const userRouter = require("./routes/userRoutes");

app.use(cookieParser());
const allowedOrigins = [
  "http://localhost:5173",
  "https://syncthreads-assgn-miabmwguo-nanisai245s-projects.vercel.app/",
  "https://syncthreads-assgn.vercel.app",
  "https://syncthreads-assgn-p6xb63hns-nanisai245s-projects.vercel.app",
];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", userRouter);

module.exports = app;
