import { StatusCodes } from "http-status-codes";
import Genre from "../models/GenreModel.js";
import ApiError from "../utils/ApiError.js";

class GenresController {
  // GET /genres
  async getAllGenres(req, res, next) {
    try {
      const genres = await Genre.find();
      res.status(StatusCodes.OK).json({
        message: "Get All Genres Done",
        data: genres,
      });
    } catch (error) {
      next(error);
    }
  }
  // GET /genres/:id
  async getGenreDetail(req, res, next) {
    try {
      const genre = await Genre.findById(req.params.id);

      if (!genre) throw new ApiError(404, "Genre Not Found");
      res.status(StatusCodes.OK).json({
        message: "Get Genre Detail Done",
        data: genre,
      });
    } catch (error) {
      next(error);
    }
  }
  // POST /genres
  async createGenre(req, res, next) {
    try {
      const newGenre = await Genre.create(req.body);
      res.status(StatusCodes.CREATED).json({
        message: "Create Genre Successfull",
        data: newGenre,
      });
    } catch (error) {
      next(error);
    }
  }
  // PUT /genres/:id
  async updateGenre(req, res, next) {
    try {
      const genre = await Genre.findByIdAndUpdate(req.params.id, req.body);
      if (!genre) throw new ApiError(404, "Genre Not Found");
      const updateGenre = await Genre.findById(req.params.id);
      res.status(StatusCodes.OK).json({
        message: "Update Genre Successfull",
        data: updateGenre,
      });
    } catch (error) {
      next(error);
    }
  }
  // DELETE /genres/:id
  async deleteGenre(req, res, next) {
    try {
      const genre = await Genre.findByIdAndDelete(req.params.id);
      if (!genre) throw new ApiError(404, "Genre Not Found");
      res.status(StatusCodes.OK).json({
        message: "Delete Genre Done",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default GenresController;
