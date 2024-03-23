import User from "../models/UserModel";
import bcrypt from "bcrypt";
import { registerValidate } from "../validations/auth";

class AuthController {
  // POST: auth/register
  async register(req, res) {
    try {
      //B1: validate: email, password, username
      const { email, username, avatar, password } = req.body;
      const { error } = registerValidate.validate(req.body);
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
      const hashPassword = await bcrypt.hash(password, 10);
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

  // POST: auth/login
  login(req, res) {
    res.send("Login");
  }
}

export default AuthController;
