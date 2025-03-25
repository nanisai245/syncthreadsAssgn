const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const userRouter = require("./routes/userRoutes");

app.use(cookieParser());

const corsOptions = [
  "http://localhost:5173",
  "https://sync-threads-frontend-0f3r.onrender.com"
]
app.use(
  cors({
    origin: corsOptions,
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", userRouter);

module.exports = app;
