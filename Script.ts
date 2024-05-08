import express from "express"
import { user } from "./db/Schema";
import cors from "cors"
import { ConnectfunDb } from "./db/Database";
const app=express();
app.use(cors())
app.use(express.json())

//home route of the 
app.get("/",(req,res)=>{
    res.send("<h1>Server started localy </h1>");
})

ConnectfunDb();

// api route user

app.get("/api/user",async(req,res)=>{
    const {Name,Password}=req.body;
    await user.create({
        Name:Name,
        Password:Password
    })

    res.status(200).json({
        message:"User created "
    })
})


app.listen(80,()=>{
console.log(`Server started localy`);
})