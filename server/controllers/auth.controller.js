import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';
import jwt from "jsonwebtoken";
import 'dotenv/config'

export const register = async (req, res)=>{
    try {
        const {username, email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashPassword, 
            },
        });
        console.log(newUser);
        res.status(201).json({ message: "user created successfully" });
    } catch (error) {
        console.log("failed to create user");
        res.status(500).json({message: "failed to create user !"});
    }

}
export const login = async (req, res)=>{
    const {username, password} = req.body;
    try {
        const user = await prisma.user.findUnique({where:{username}})
        if(!user) return res.status(401).json({message: "Invalid Credentials"});

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) return res.status(401).json({message:"Invalid Credentials"});

        const age = 1000 * 60 * 60 * 24 * 7;
        const token = jwt.sign({
            id: user.id,
            isAdmin: false,
        }, process.env.JWT_SECRET_KEY, {expiresIn : age});

        const {password: userPassword, ...userInfo} = user;
        
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,
            // secure: true
        }).status(200).json(userInfo);

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "failed to login"});
    }
}
export const logout = (req, res)=>{
    res.clearCookie("token").status(200).json({message: "Logout Successful"});
}