import { StatusCodes } from "http-status-codes";
import { cloudinary } from "../config/cloudinaryConfig.js";
import ApiError from "../utils/ApiError.js";

class ImageContorller {
  uploadSingleImage(req, res, next) {
    try {
      if (!req.file) throw new ApiError(404, "No File Upload");

      res.status(StatusCodes.OK).json({
        message: "Upload Ok",
        imageUrl: req.file.path,
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteImage(req, res, next) {
    try {
      const { result } = await cloudinary.uploader.destroy(
        `${process.env.FOLDER_NAME}/${req.params.id}`
      );
      if (result !== "ok") throw new ApiError(404, "Delete Image Failed");

      res.status(StatusCodes.OK).json({
        message: "Delete Ok",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default ImageContorller;
