import express from "express";
import CategoriesController from "../controllers/categories.js";

const categoriesRouter = express.Router();

const categoriesController = new CategoriesController();

categoriesRouter.get("/", categoriesController.getAllCategories);
categoriesRouter.post("/", categoriesController.createCategory);
categoriesRouter.get("/:id", categoriesController.getCategoryDetail);
categoriesRouter.put("/:id", categoriesController.updateCategory);
categoriesRouter.delete("/:id", categoriesController.deleteCategory);

export default categoriesRouter;
