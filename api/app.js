import express from "express";
import postRoute from "./rotues/post.route.js";
import authRoute from "./rotues/auth.route.js";
import userRoute from "./rotues/user.route.js";
import testRoute from "./rotues/test.route.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from 'dotenv'

const app = express();

dotenv.config();
app.use(cors({origin: process.env.CLIENT_URL, credentials:true}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/test', testRoute);

app.listen(8800, ()=>{
    console.log("server is running");
})

