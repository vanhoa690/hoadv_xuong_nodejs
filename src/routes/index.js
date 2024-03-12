import moviesRouter from "./movies.js";

export default function routes(app) {
  app.use("/movies", moviesRouter);
}
