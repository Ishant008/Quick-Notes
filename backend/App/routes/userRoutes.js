import express from 'express';
import signup from '../controllers/signUp.js';
import login from '../controllers/login.js';
import Authentication from '../middleware/Authentication.js';
import getUser from '../controllers/getUser.js';
const userRoutes = express.Router();


userRoutes.post('/signup',signup)
userRoutes.post('/login',login)
userRoutes.get('/get-user',Authentication,getUser)


export default userRoutes;