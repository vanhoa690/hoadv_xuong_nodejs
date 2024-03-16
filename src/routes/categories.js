import express from "express";
const categoriesRouter = express.Router();

categoriesRouter.get("/", (req, res) => {
  res.send("categories");
});
categoriesRouter.post("/", (req, res) => {
  res.send("categories");
});
categoriesRouter.get("/:id", (req, res) => {
  res.send("categories");
});
categoriesRouter.put("/:id", (req, res) => {
  res.send("categories");
});
categoriesRouter.delete("/:id", (req, res) => {
  res.send("categories");
});

export default categoriesRouter;
