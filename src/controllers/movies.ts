import { Request, Response } from "express";

import Movie from "../models/MovieModel";

class MoviesController {
  // GET /movies
  async getAllMovies(req: Request, res: Response) {
    try {
      const movies = await Movie.find().populate(["category", "genres"]);
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
  async getMovieDetail(req: Request, res: Response) {
    try {
      const movie = await Movie.findById(req.params.id)
        .populate("category")
        .populate("genres");
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
  async createMovie(req: Request, res: Response) {
    // req.body
    // const newMovie = new Movie(req.body);

    const saveMovie = await Movie.create({ ...req.body, user: res.locals.id });
    res.status(201).json({
      message: "Create Movie Successfull",
      data: saveMovie,
    });
  }
  // PUT /movies/:id
  async updateMovie(req: Request, res: Response) {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
      if (!movie) {
        return res.status(404).json({
          message: "Movie Not Found",
        });
      }
      const updateMovie = await Movie.findById(req.params.id);
      res.status(200).json({
        message: "Update Movie Successfull",
        data: updateMovie,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // DELETE /movies/:id
  async deleteMovie(req: Request, res: Response) {
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