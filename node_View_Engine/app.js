//Declaration
var express= require('express');
var home= require('./home');
var app=express();
var port=80;
//Configuration
app.set('view engine','ejs');


//Middlewares
app.get('/',function(req,res){
   res.send('Hello'); 
});
app.use('/home',home);


//Routes


//Server-Startup
app.listen(port, function(){
   console.log('Server Started....') 
});


