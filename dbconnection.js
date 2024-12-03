import mongoose from "mongoose";

const dbConnection = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("DBConnection Successfully")
    } catch (error) {
        console.log("Error in DBConnection :", error)
    }
}
export default dbConnection;