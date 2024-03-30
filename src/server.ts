import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routes";
import connectMongoDB from "./config/dbconfig";
dotenv.config();
const app: Express = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/db_movies";
connectMongoDB(dbUrl);

app.use("/", router);

export const viteNodeApp = app;
