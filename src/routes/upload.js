import express from "express";
import UploadController from "../controllers/upload.js";
import { uploadImageClound } from "../middlewares/uploadImage.js";

const uploadRouter = express.Router();

const uploadController = new UploadController();

uploadRouter.post(
  "/clound",
  uploadImageClound.single("image"),
  uploadController.uploadSingleImage
);

export default uploadRouter;
