import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";
import {User, test} from './db';

const app = express();
dotenv.config(); //Reads .env file and makes it accessible via process.env


console.log("HOST", process.env.DB_HOST)
const pool = new Pool({
  host: process.env.DB_HOST,
  user: 'postgres',
  database: 'postgres',
  password: 'postgres',
  port: parseInt(process.env.DB_PORT || "5432")
});

const connectToDB = async () => {
  try {
    await pool.connect();
  } catch (err) {
    console.log("Failed to connect to DB: ", err);
  }
};
connectToDB();

test();

app.get("/test", (req: Request, res: Response, next: NextFunction) => {

    const foo = User.findAll
  res.send("hi");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});