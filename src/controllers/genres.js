import Genre from "../models/GenreModel.js";

class GenresController {
  async getAllGenres(req, res) {
    try {
      const genreList = await Genre.find();
      res.status(200).json({
        message: "Get Done",
        data: genreList,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async getGenreDetail(req, res) {
    try {
      const genre = await Genre.findById(req.params.id);
      if (!genre) {
        return res.status(404).json({
          message: "Not Found",
        });
      }
      res.status(200).json({
        message: "Get Done",
        data: genre,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async creatGenre(req, res) {
    try {
      const genre = await Genre.create(req.body);
      res.status(200).json({
        message: "Create Done",
        data: genre,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async updateGenre(req, res) {
    try {
      const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!genre) {
        return res.status(404).json({
          message: "Not Found",
        });
      }
      res.status(200).json({
        message: "Update Done",
        data: genre,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async deleteGenre(req, res) {
    try {
      const genre = await Genre.findByIdAndDelete(req.params.id);
      if (!genre) {
        return res.status(404).json({
          message: "Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Done",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default GenresController;
