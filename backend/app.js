const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const userRouter = require("./routes/userRoutes");

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", userRouter);

module.exports = app;
