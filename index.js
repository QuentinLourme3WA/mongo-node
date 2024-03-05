import express from "express";
import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

connect("mongodb://127.0.0.1:27017/mongoExpress")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
