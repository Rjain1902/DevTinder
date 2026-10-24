console.log("new project")
const express = require("express")
const app=express()

app.use("/test",(req,res)=>{
    res.send("test server")
})
app.get("/user",(req,res)=>{
    res.send("GET COMMAND")
})
app.post("/user",(req,res)=>{
    res.send("Data Saved successfully")

})
app.delete("/user",(req,res)=>{
    res.send("Data deleted")

})
app.patch("/user",(req,res)=>{
    res.send("Data updated")

})
app.use("/hello",(req,res)=>{
    res.send("Hello")
})
app.use("/",(req,res)=>{
    res.send("Hello from server")
})
app.listen(3000,()=>{
    console.log("Server Running successfully")
})
console.log("testing my local github connection")