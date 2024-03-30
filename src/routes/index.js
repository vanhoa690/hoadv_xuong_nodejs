import moviesRouter from "./movies.js";
import categoriesRouter from "./categories.js";
import genresRouter from "./genres.js";
import uploadRouter from "./upload.js";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Home");
  });

  app.use("/movies", moviesRouter);
  app.use("/categories", categoriesRouter);
  app.use("/genres", genresRouter);
  app.use("/upload", uploadRouter);
}
