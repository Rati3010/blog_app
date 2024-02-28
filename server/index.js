import express from "express";
import dotenv from "dotenv";
import connection from "./config/db.js";

dotenv.config();
const app = express();

app.listen(process.env.PORT||8080, async()=>{
    try {
        await connection;
        console.log("Successfully established the connection with DB");
    } catch (error) {
        console.log(error);
    }
});