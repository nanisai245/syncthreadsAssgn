const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const userRouter = require("./routes/userRoutes");

app.use(cookieParser());
app.use(
  cors({
    origin: "https://sync-threads-frontend-0f3r.onrender.com",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", userRouter);

module.exports = app;
