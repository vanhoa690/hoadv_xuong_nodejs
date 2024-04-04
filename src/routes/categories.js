import { Router } from "express";
import CategoriesController from "../controllers/categories.js";
import { uploadImage } from "../config/cloudinaryConfig.js";
import { checkPermission } from "../middlewares/checkPermision.js";

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.get("/", categoriesController.getAllCategories);
categoriesRouter.get("/:id", categoriesController.getCategoryDetail);
categoriesRouter.post(
  "/",
  checkPermission,
  uploadImage.single("image"),
  categoriesController.createCategory
);
categoriesRouter.put(
  "/:id",
  checkPermission,
  categoriesController.updateCategory
);
categoriesRouter.delete(
  "/:id",
  checkPermission,
  categoriesController.deleteCategory
);

export default categoriesRouter;
