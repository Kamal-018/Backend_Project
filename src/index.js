
import dotenv from "dotenv" //maybe resolved in this node version
import connectDB from "./db/index.js"


dotenv.config({
    path: './env'
})

connectDB();
