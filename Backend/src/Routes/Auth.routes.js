import express from "express"
import controller, { GoogleCallback } from "../controller/Auth.controller.js"
import passport from "passport"

const AuthRouter = express.Router()

AuthRouter.post("/register",controller)
AuthRouter.get("/google",passport.authenticate("google",{scope:["profile","email"]}))
AuthRouter.get("/google/callback",
    passport.authenticate("google",{session:false,failureRedirect: "http://localhost:5173/register"}),GoogleCallback
    
)


export default AuthRouter