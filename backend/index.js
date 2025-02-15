import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './App/routes/userRoutes.js';
import noteRoutes from './App/routes/noteRoutes.js';
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user",userRoutes)
app.use("/notes",noteRoutes)

mongoose.connect(process.env.DB_URL)
.then(()=>{
  console.log("db is connected");

  let port = process.env.PORT || 8000
  
  app.listen(port,()=>{
    console.log("server is started");
  })
})
