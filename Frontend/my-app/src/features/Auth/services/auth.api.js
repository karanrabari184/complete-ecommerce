import axios from "axios"

const authApiInstance = axios.create({
    baseURL:"/api/auth",
    withCredentials:true
})

export async function RegisterApi({email,contact,password,fullname}) {
    const response = await authApiInstance.post("/register",{email,contact,password,fullname})
    return response.data
}