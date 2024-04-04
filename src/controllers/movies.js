import { StatusCodes } from "http-status-codes";
import Movie from "../models/MovieModel.js";
import ApiError from "../utils/ApiError.js";

class MoviesController {
  // GET /movies
  async getAllMovies(req, res, next) {
    try {
      const movies = await Movie.find().populate(["category", "genres"]);
      res.status(StatusCodes.OK).json({
        message: "Get All Movies Done",
        data: movies,
      });
    } catch (error) {
      next(error);
    }
  }
  // GET /movies/:id
  async getMovieDetail(req, res, next) {
    try {
      const movie = await Movie.findById(req.params.id)
        .populate("category")
        .populate("genres");
      if (!movie) throw new ApiError(404, "Movie Not Found");
      res.status(StatusCodes.OK).json({
        message: "Get Movie Detail Done",
        data: movie,
      });
    } catch (error) {
      next(error);
    }
  }
  // POST /movies
  async createMovie(req, res, next) {
    try {
      const newMovie = await Movie.create({
        ...req.body,
        user: res.locals.id,
      });
      res.status(StatusCodes.CREATED).json({
        message: "Create Movie Successfull",
        data: newMovie,
      });
    } catch (error) {
      next(error);
    }
  }
  // PUT /movies/:id
  async updateMovie(req, res, next) {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
      if (!movie) throw new ApiError(404, "Movie Not Found");
      const updateMovie = await Movie.findById(req.params.id);
      res.status(StatusCodes.OK).json({
        message: "Update Movie Successfull",
        data: updateMovie,
      });
    } catch (error) {
      next(error);
    }
  }
  // DELETE /movies/:id
  async deleteMovie(req, res, next) {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
      if (!movie) throw new ApiError(404, "Movie Not Found");
      res.status(StatusCodes.OK).json({
        message: "Delete Movie Done",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default MoviesController;
