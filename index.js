import express from "express"
import cookieParser from "cookie-parser"
import { config } from "dotenv"
import cors from "cors"
import dbConnection from "./dbconnection.js";


const app = express()
config();

const PORT = process.env.PORT || 4000



// middleware
app.use(express.json())
app.use(cookieParser())
const allowedOrigins = [process.env.FRONTEND_URI1, process.env.FRONTEND_URI2];

  app.use(
    cors({
      origin: process.env.FRONTEND_URI, 
      credentials: true,           
      methods: 'GET, POST, PUT, DELETE',
      allowedHeaders: ['Content-Type', 'Authorization']
    })  
  )

// router
import datarouter from "./routes/todoRoute.js";

app.use("/api", datarouter)
app.listen(PORT,() => {
    dbConnection()
    console.log(`Server is running at port : ${PORT}`);
})