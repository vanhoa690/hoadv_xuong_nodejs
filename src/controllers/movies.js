import Movie from "../models/MovieModel.js";
import movieValidator from "../validations/movies.js";
class MoviesController {
  // GET /movies
  async getAllMovies(req, res) {
    try {
      const movies = await Movie.find().populate('category');
      res.status(200).json({
        message: "Get All Movies Done",
        data: movies,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // GET /movies/:id
  async getMovieDetail(req, res) {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).json({
          message: "Movie Not Found",
        });
      }
      res.status(200).json({
        message: "Get Movie Detail Done",
        data: movie,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // POST /movies
  async createMovie(req, res) {
    console.log('a',req.file);
    const { error } = movieValidator.validate(req.body);
    if (error) {
      console.log(error);
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        errors,
      });
    }
    try {
      const newMovie = await Movie.create(req.body);
      res.status(201).json({
        message: "Create Movie Successfull",
        data: newMovie,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // PUT /movies/:id
  async updateMovie(req, res) {
    try {
      const movieUpdate = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!movieUpdate) {
        return res.status(404).json({
          message: "Movie Not Found",
        });
      }
      res.status(200).json({
        message: "Update Movie Successfull",
        data: movieUpdate,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // DELETE /movies/:id
  async deleteMovie(req, res) {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
      if (!movie) {
        return res.status(404).json({
          message: "Movie Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Movie Done",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default MoviesController;
