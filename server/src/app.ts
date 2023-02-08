import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser'
import cors from 'cors';
import router from "./api/routes";

const app = express();
dotenv.config(); //Reads .env file and makes it accessible via process.env

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get("/test", (req: Request, res: Response, next: NextFunction) => {

    res.send("hi");
});

app.use('/api/v1', router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});