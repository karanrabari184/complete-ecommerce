import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/Auth/State/Auth.sllice.js"
export const store = configureStore({
    reducer:{
        auth:authReducer
    }
}) 