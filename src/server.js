import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";
import errorHandler from "./middlewares/errorHandler.js";
dotenv.config();
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const port = process.env.PORT || 8000;
const dbUrl = process.env.DB_URI || "mongodb://127.0.0.1:27017/db_movies";

connectMongoDB(dbUrl);

app.use("/", router);

app.use(errorHandler);

app.listen(port, () => console.log("Server running"));
