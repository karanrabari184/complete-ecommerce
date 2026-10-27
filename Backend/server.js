import app from "./src/app.js"
import DB from "./src/DB/database.js"
DB()

app.listen(3000,()=>{
    console.log("Server Is Running on a port 3000");    
})

