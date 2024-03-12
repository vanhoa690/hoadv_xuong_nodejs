import express from "express";
const moviesRouter = express.Router();

moviesRouter.get("/", (req, res) => {
  res.send("Movies");
});
moviesRouter.post("/", (req, res) => {
  res.send("Post Movies");
});
moviesRouter.get("/:id", (req, res) => {
  res.send("Movies Detail");
});
moviesRouter.put("/:id", (req, res) => {
  res.send("PUT Movies Detail");
});
moviesRouter.delete("/:id", (req, res) => {
  res.send("Delete Movies");
});

export default moviesRouter;
