const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const mongoose = require("mongoose");

const DB = process.env.DB_STRING;
const port = process.env.PORT || 3000;

mongoose
  .connect(DB)
  .then((con) => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Listening to the server");
});
