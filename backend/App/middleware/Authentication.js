import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const Authentication = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      error: true,
      message: "token can not be null! some error occured",
    });
  }
  jwt.verify(token, process.env.SECRET_TOKEN, (err, details) => {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "token is invalid",
      });
    }
    req.details=details;
    next()
  });
};

export default Authentication;
