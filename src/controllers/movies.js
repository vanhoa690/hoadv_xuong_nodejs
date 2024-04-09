import { StatusCodes } from "http-status-codes";
import Movie from "../models/MovieModel";
import ApiError from "../utils/ApiError";

class MoviesController {
  // GET /movies
  async getAllMovies(req, res, next) {
    try {
      const page = parseInt(req.query.page) - 1 || 0;
      const limit = parseInt(req.query.limit) || 6;
      const search = req.query.search || "";

      const movies = await Movie.find({
        name: { $regex: String(search), $options: "i" },
      })
        .populate(["category", "genres"])
        .skip(page * limit)
        .limit(limit);
      // console.log(movies);
      const totalPage = Math.ceil(
        (await Movie.countDocuments({
          name: { $regex: String(search), $options: "i" },
        })) / limit
      );
      console.log(totalPage);

      res.status(StatusCodes.OK).json({
        message: "Get All Movies Done",
        data: movies,
        page: page + 1,
        limit,
        totalPage,
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
