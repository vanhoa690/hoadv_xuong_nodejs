import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
routes(app);
app.listen(port, () => console.log("Running port: " + port));
