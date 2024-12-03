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


  app.use(
    cors({
    origin: ['https://next-f-s9u8.vercel.app', 'https://next-f-hazel.vercel.app'],
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
