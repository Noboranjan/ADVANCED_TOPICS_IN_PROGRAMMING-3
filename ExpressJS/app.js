var express =require('express');
var fs=require('fs');
var app=express();
var port=80;

/*app.get("/",function(req,res){
    
    res.send("Hello world");
    
    
});*/

//app.get("/",(req,res)=>res.send("Hello world"));//arrow syntex

app.get("/",(req,res)=>fs.createReadStream('test.html').pipe(res));

/*app.listen(80,function(){
    console.log("Server Started at port"+port);
});//2nd para for notification*/

app.listen(80,()=>console.log("Server Started at port: "+port));