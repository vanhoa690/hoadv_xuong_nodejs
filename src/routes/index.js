import { Router } from "express";
// import moviesRouter from "./movies";
// import categoriesRouter from "./categories";
// import genresRouter from "./genres";
// import authRouter from "./auth";
// import imagesRouter from "./images";

const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
});

// router.use("/auth", authRouter);
// router.use("/movies", moviesRouter);
// router.use("/categories", categoriesRouter);
// router.use("/genres", genresRouter);
// router.use("/images", imagesRouter);

export default router;
