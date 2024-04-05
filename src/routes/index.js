import { Router } from "express";
import moviesRouter from "./movies.js";
import categoriesRouter from "./categories.js";
import genresRouter from "./genres.js";
import authRouter from "./auth.js";
import imagesRouter from "./images.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
});

router.use("/auth", authRouter);
router.use("/movies", moviesRouter);
router.use("/categories", categoriesRouter);
router.use("/genres", genresRouter);
router.use("/images", imagesRouter);

export default router;
