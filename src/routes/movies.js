import { Router } from "express";
import MoviesController from "../controllers/movies";
import { checkPermission } from "../middlewares/checkPermision";

const moviesRouter = Router();

const moviesController = new MoviesController();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.post("/",  moviesController.createMovie);
moviesRouter.get("/:id", moviesController.getMovieDetail);
moviesRouter.put("/:id", checkPermission, moviesController.updateMovie);
moviesRouter.delete("/:id", checkPermission, moviesController.deleteMovie);

export default moviesRouter;
