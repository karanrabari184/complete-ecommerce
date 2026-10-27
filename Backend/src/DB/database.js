import mongoose from "mongoose";
import { config } from "../config/config.js";

function ConnectTODb(){
    mongoose.connect(config.Mongo_URI)
    .then(()=>{
        console.log("Database Is Connected!");
    })
}

export default ConnectTODb