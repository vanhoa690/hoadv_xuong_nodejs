import { Router } from "express";
import GenresController from "../controllers/genres";
import { checkPermission } from "../middlewares/checkPermision";

const genresRouter = Router();

const genresController = new GenresController();

genresRouter.get("/", genresController.getAllGenres);
genresRouter.get("/:id", genresController.getGenreDetail);
genresRouter.post("/", checkPermission, genresController.createGenre);
genresRouter.put("/:id", checkPermission, genresController.updateGenre);
genresRouter.delete("/:id", checkPermission, genresController.deleteGenre);

export default genresRouter;
