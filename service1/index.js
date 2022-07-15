const express=require("express");
 const app= express();

 //app.use()
 app.listen(3001,()=>{
    console.log(`Server is listinig on 300`)
})
app.get("/",(req,res)=>{
    console.log("heyy  i am from service 1")
    res.send("hello from service 1 ")
})