const express=require('express');
const app=express();

port=4000;

app.get("/SignUp", (req,res)=>{
    res.send("hi");
})

app.listen(port,()=>{
    console.log("server runs at port "+port);
})
