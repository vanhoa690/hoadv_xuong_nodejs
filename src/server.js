import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import connectMongoDB from "./config/dbconfig";
import errorHanlder from './middlewares/errorHandler'
dotenv.config();
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/db_movies";
connectMongoDB(dbUrl);

app.use("/", router);

app.use(errorHanlder);

export const viteNodeApp = app;
