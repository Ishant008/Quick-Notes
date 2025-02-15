import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

const login = async (req, res) => {
  const email = req.body.email.toLowerCase()
  const {  password } = req.body;
  if (!email) {
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
  let user = await userModel.findOne({ email: email });
  if (!user) {
    return res.json({
      error: true,
      message: "User not found",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch){
    const token = jwt.sign({email},process.env.SECRET_TOKEN,{expiresIn:"300m"})
    return res.json({
      error:false,
      message:"login successfuly",
      token,
    })
  }else{
    return res.json({
      error:true,
      message:"Invalid password"
    })
  }
};

export default login;
