import { Router } from "express";
import moviesRouter from "./movies";
import categoriesRouter from "./categories";
import genresRouter from "./genres";
import authRouter from "./auth";
import { checkPermissionUser } from "../middlewares/checkPermission";

const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
});

router.use("/auth", authRouter);
router.use("/movies", checkPermissionUser, moviesRouter);
router.use("/categories", categoriesRouter);
router.use("/genres", genresRouter);

export default router;
