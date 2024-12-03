import Todo from "../model/todoModel.js"

export const addTodo = async (req,res) => {
    try {
        const { title, todoData} = req.body;
       
        if(!title || !todoData){ 
            return res.status(400).json({
                message: "Enter all feilds"
            })
        }

        const newTodo = new Todo({title, todoData})
        await newTodo.save()
        res.status(200).json({
            message: "Todo added successfully",
            data: newTodo
        })
                
    } catch (error) {
        res.status(500).json({
            message:"Error in create todo"
        })
    }
}

export const getTodo = async (req,res) => {
    try {
        const todos = await Todo.find()
        
        res.status(200).json({
            message: "Todo fetch successfully",
            data: todos
        })
    } catch (error) {
        res.status(500).json({
            message:"Error in fetch todo"
        })
    }
}
