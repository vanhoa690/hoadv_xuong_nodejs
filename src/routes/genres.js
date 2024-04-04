import { Router } from "express";
import GenresController from "../controllers/genres.js";
import { checkPermission } from "../middlewares/checkPermision.js";

const genresRouter = Router();

const genresController = new GenresController();

genresRouter.get("/", genresController.getAllGenres);
genresRouter.get("/:id", genresController.getGenreDetail);
genresRouter.post("/", checkPermission, genresController.createGenre);
genresRouter.put("/:id", checkPermission, genresController.updateGenre);
genresRouter.delete("/:id", checkPermission, genresController.deleteGenre);

export default genresRouter;
