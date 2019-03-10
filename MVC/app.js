//Declaration
var express= require('express');
var app=express();
var loginController=require('./controllers/login-controller');
var logoutController=require('./controllers/logout-controller');
var homeController=require('./controllers/home-controller');
var home2Controller=require('./controllers/home2-controller');
var bodyParser=require('body-parser');
var expressSession=require('express-session');
var port=1337;//nodejs default port

//Configuration
app.set('view engine','ejs');

//Middlewares

app.use(bodyParser.urlencoded({extended:false}));//if true then json
//app.use(expressSession());
app.use(expressSession({secret:"My secret is secret",saveUninitialized:true,resave:false}));
app.use(express.static('ext'));


//Routes
app.use('/',loginController);
app.use('/login',loginController);//login then go loginController
app.use('/logout',logoutController);
app.use('/home',homeController);
app.use('/home2',home2Controller);

//Server-Startup
app.listen(port, function(){
   console.log('Server Started....') 
});