import User from "../models/UserModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { registerValidator, loginValidator } from "../validations/auth";

class AuthController {
  async register(req, res) {
    try {
      //B1: validate: email, password, username
      const { email, username, avatar, password } = req.body;
      const { error } = registerValidator.validate(req.body);
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }
      // b2: validate email exitsing
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        return res.status(400).json({ message: "Email da duoc dang ky" });
      }
      // b3 ma hoa password
      const hashPassword = await bcryptjs.hash(password, 10);
      // update db
      const user = await User.create({
        email,
        username,
        avatar,
        password: hashPassword,
      });
      // b4 remove password in res
      res.status(200).json({
        message: "Create Done",
        data: { ...user.toObject(), password: undefined },
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }

  // POST: auth/login: email, password
  async login(req, res) {
    const { email, password } = req.body;
    //B1: validate: email, password
    const { error } = loginValidator.validate(req.body);
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    // check email xem co trong db
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(404).json({
        message: "Tai khoan ko hop he",
      });
    }
    // so sanh password: bcryptjs
    const checkPassword = await bcryptjs.compare(password, checkUser.password);
    if (!checkPassword) {
      return res.status(404).json({
        message: "Tai khoan ko hop he",
      });
    }
    // ma hoa token
    const token = jwt.sign({ id: checkUser._id }, "khoa-bi-mat", {
      expiresIn: "1d",
    });
    // res
    res.status(200).json({
      message: "Login ok",
      user: { ...checkUser.toObject(), password: undefined },
      token,
    });
  }
}

export default AuthController;
