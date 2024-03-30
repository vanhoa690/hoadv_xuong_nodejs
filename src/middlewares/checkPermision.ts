import jwt from "jsonwebtoken";

import User from "../models/UserModel";

const checkPermission = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Not Authorization",
      });
    }
    // decoded
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(data.id);
    if (!user) {
      return res.status(404).json({
        message: "Not Found",
      });
    }
    // check role
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Ban ko du quyen truy cap",
      });
    }
    // user.id
    res.locals.id = user._id;
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export { checkPermission };
