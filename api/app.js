import express from "express";
import postRoute from "./rotues/post.route.js";
import authRoute from "./rotues/auth.route.js";
import userRoute from "./rotues/user.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/user', userRoute);

app.listen(8800, ()=>{
    console.log("server is running");
})

