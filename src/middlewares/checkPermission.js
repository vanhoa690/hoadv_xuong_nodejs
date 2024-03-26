import jwt from "jsonwebtoken";
import User from "../models/UserModel";

const checkPermissionUser = async (req, res, next) => {
  try {
    // console.log(req.headers.authorization?.split(' ')[1]);
    // check token
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Not authorization",
      });
    }
    // decode
    const data = jwt.verify(token, "khoa-bi-mat");
    const user = await User.findById(data.id);
    console.log(user);
    if (user.role !== "member") {
      return res.status(403).json({
        message: "Ban ko co quyen lam viec nay",
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
    });
  }
};

export { checkPermissionUser };
