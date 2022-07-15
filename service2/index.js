const express=require("express");
 const app= express();

 //app.use()
 app.listen(3002,()=>{
    console.log(`Server is listinig on 3002`)
})
app.get("/",(req,res)=>{
    console.log("heyy  i am from service 2")
    res.send("hello from service 2 ")
})