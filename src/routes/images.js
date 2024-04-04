import { Router } from "express";
import ImageContorller from "../controllers/images.js";
import { uploadImage } from "../config/cloudinaryConfig.js";
import { checkPermission } from "../middlewares/checkPermision.js";

const imagesRouter = Router();
const imageContorller = new ImageContorller();

imagesRouter.post(
  "/clound",
  checkPermission,
  uploadImage.single("image"),
  imageContorller.uploadSingleImage
);

imagesRouter.delete(
  "/clound/:id",
  checkPermission,
  imageContorller.deleteImage
);

export default imagesRouter;
