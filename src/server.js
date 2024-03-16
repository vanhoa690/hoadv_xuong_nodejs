import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";
dotenv.config();
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/db_movies";
connectMongoDB(dbUrl);
routes(app);
app.listen(port, () => console.log("Server running port: " + port));
