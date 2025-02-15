import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './App/routes/userRoutes.js';
import noteRoutes from './App/routes/noteRoutes.js';
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user",userRoutes)
app.use("/notes",noteRoutes)

mongoose.connect("mongodb://localhost:27017/notes_app")
.then(()=>{
  console.log("db is connected");
  
  app.listen(8000,()=>{
    console.log("server is started");
  })
})
