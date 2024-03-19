import express from "express";
import GenresController from "../controllers/genres.js";

const genresRouter = express.Router();

const genresController = new GenresController();

genresRouter.get("/", genresController.getAllGenres);
genresRouter.get("/:id", genresController.getGenreDetail);
genresRouter.post("/", genresController.creatGenre);
genresRouter.put("/:id", genresController.updateGenre);
genresRouter.delete("/:id", genresController.deleteGenre);

export default genresRouter;
