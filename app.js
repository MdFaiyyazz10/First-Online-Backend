import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({path: "./config/config.env"})

const app = express()


//MIDDLEWARE
app.use(express.json())
app.use(cors())


//ROUTES
import user from "./routes/userRoute.js";

app.use("/api/v1" , user)

export default app