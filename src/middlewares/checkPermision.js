import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import User from "../models/UserModel.js";

const checkPermission = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new ApiError(StatusCodes.UNAUTHORIZED, "UNAUTHORIZED");

    // decoded
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(data.id);
    if (!user) throw new ApiError(StatusCodes.NOT_FOUND, "User Not Found");

    // check role
    if (user.role !== "admin")
      throw new ApiError(StatusCodes.FORBIDDEN, "FORBIDDEN");
    // user.id
    res.locals.id = user._id;
    next();
  } catch (error) {
    next(error);
  }
};

export { checkPermission };
