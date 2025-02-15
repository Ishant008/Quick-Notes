import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from 'bcrypt'
import userModel from "../models/userModel.js";

const signup = async (req, res) => {
  const { name, password } = req.body;
  const email = req.body.email.toLowerCase()
  if (!name) {
    return res.status(409).json({
      error: true,
      message: "name is required",
    });
  } else if (!email) {
    return res.status(409).json({
      error: true,
      message: "email is required",
    });
  } else if (!password) {
    return res.status(409).json({
      error: true,
      message: "password is required",
    });
  }
  let existUser = await userModel.findOne({ email: email });
  if (existUser) {
    return res.json({
      error: true,
      message: "email already registered",
    });
  }
  const hashPassword = await bcrypt.hash(password,10)
  let user = new userModel({ name, email, password:hashPassword });
  await user.save();
  const token = jwt.sign({ email }, process.env.SECRET_TOKEN, {
    expiresIn: "300m",
  });
  return res.json({
    error: false,
    message: "Successfully registered",
    token,
  });
};

export default signup;
