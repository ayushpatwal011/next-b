import express from "express"
import { addTodo, getTodo,  } from "../controllers/todoController.js"

const router = express.Router()

router.get("/", getTodo)
router.post("/add", addTodo)


export default router