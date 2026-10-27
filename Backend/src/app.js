import express from "express"
import AuthRouter from "./Routes/Auth.routes.js";
import cors from "cors"
import passport from "passport"
import {Strategy as GoogleStrategy} from "passport-google-oauth20"
import { config } from "./config/config.js";
import cookie from "cookie-parser"
const app = express()
app.use(express.json())
// app.use(cors({
//     origin:"http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials:true
// }))
app.use(cookie())
app.use(passport.initialize())
passport.use(new GoogleStrategy({
    clientID:config.ClientID,
    clientSecret:config.ClientSecret,
    callbackURL:"/api/auth/google/callback"
},(acessToken,refreshToken,profile,done)=>{
    return done(null,profile)
}))

app.use("/api/auth",AuthRouter)

export default app;