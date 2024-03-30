import { Router } from "express";
import ImageContorller from "../controllers/images";
import { uploadImage } from "../config/cloudinaryConfig";

const imagesRouter = Router();
const imageContorller = new ImageContorller();

imagesRouter.post(
  "/clound",
  uploadImage.single("image"),
  imageContorller.uploadSingleImage
);

imagesRouter.delete("/clound/:id", imageContorller.deleteImage);

export default imagesRouter;
