import dotenv from "dotenv";
dotenv.config()

if (!process.env.Mongo_URI) {
    throw new Error("Please Provide the Mongo URI")
}

if (!process.env.JWT_Secrets) {
    throw new Error("Please Provide the Jwt Secrets")
}
if (!process.env.ClientID) {
    throw new Error("Please Provide the Client ID")
}
if (!process.env.ClientSecret) {
    throw new Error("Please Provide the Client Secrets")
}

export const config = {
    Mongo_URI : process.env.Mongo_URI,
    JWT_Secrets : process.env.JWT_Secrets,
    ClientID : process.env.ClientID,
    ClientSecret:process.env.ClientSecret
}