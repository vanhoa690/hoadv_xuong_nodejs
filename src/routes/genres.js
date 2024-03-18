import express from "express";
import GenresController from "../controllers/genres.js";

const genresRouter = express.Router();

const genresController = new GenresController();

genresRouter.get("/", genresController.getAllGenres);
genresRouter.post("/", genresController.createGenre);
genresRouter.get("/:id", genresController.getGenreDetail);
genresRouter.put("/:id", genresController.updateGenre);
genresRouter.delete("/:id", genresController.deleteGenre);

export default genresRouter;
