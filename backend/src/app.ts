// src/app.ts

import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import dotenv from "dotenv";
import connection from "./dbconfig";
import userRouter from "./routes/user.routes";
import quizRouter from "./routes/quiz.routes";

import cors from "cors";

dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.port || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
connection.connect((err) => {
  if (err) {
    console.log("err while connecting to databse : ", err);
    return;
  }
  console.log("connect to database");
});
connection.query(
  ` CREATE TABLE IF NOT EXISTS quiz (
      id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      quizQuestion VARCHAR(255) NOT NULL,
      option1 VARCHAR(255),
      option2 VARCHAR(255),
      option3 VARCHAR(255),
      option4 VARCHAR(255),
      answer VARCHAR(255)
  );`,
  (err, result) => {
    if (err) console.log(err);
  }
);
app.use("/quiz", quizRouter);
app.use("/user", userRouter);

app.listen(port || 3000, () => {
  console.log(`Connected successfully on port ${port}`);
});
