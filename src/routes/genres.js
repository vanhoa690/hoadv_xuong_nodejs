import { Router } from "express";
import GenresController from "../controllers/genres.js";
import { checkPermission } from "../middlewares/checkPermision.js";

const genresRouter = Router();

const genresController = new GenresController();

genresRouter.get("/", genresController.getAllGenres);
genresRouter.get("/:id", genresController.getGenreDetail);
genresRouter.post("/", genresController.createGenre);
genresRouter.put("/:id", genresController.updateGenre);
genresRouter.delete("/:id", genresController.deleteGenre);

export default genresRouter;
