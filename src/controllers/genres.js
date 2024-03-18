import Genre from "../models/GenreModel.js";

class GenresController {
  // GET /genres
  async getAllGenres(req, res) {
    try {
      const genres = await Genre.find();
      res.status(200).json({
        message: "Get All Genres Done",
        data: genres,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // GET /genres/:id
  async getGenreDetail(req, res) {
    try {
      const genre = await Genre.findById(req.params.id);
      if (!genre) {
        return res.status(404).json({
          message: "Genre Not Found",
        });
      }
      res.status(200).json({
        message: "Get Genre Detail Done",
        data: genre,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // POST /genres
  async createGenre(req, res) {
    const newGenre = await Genre.create(req.body);
    res.status(201).json({
      message: "Create Genre Successfull",
      data: newGenre,
    });
  }
  // PUT /genres/:id
  async updateGenre(req, res) {
    try {
      const genreUpdate = await Genre.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!genreUpdate) {
        return res.status(404).json({
          message: "Genre Not Found",
        });
      }
      res.status(200).json({
        message: "Update Genre Successfull",
        data: updateGenre,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // DELETE /genres/:id
  async deleteGenre(req, res) {
    try {
      const genre = await Genre.findByIdAndDelete(req.params.id);
      if (!genre) {
        return res.status(404).json({
          message: "Genre Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Genre Done",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default GenresController;
