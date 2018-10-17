var express=require('express');
var userModel=require.main.require("./models/user-model");
var router=express.Router();


router.get('/',function(req,res){
   //res.send("<h2>hello<h2>");
    res.render('login/index');
    
});

router.post('/',function(req,res){
    //var sql="SELECT * from user WHERE username='"+req.body.username+"' and password='"+req.body.password+"'";
    
    var user={
      username:req.body.username,
        password:req.body.password
    };
    
    userModel.validate(user,function(status){
        if(status)
            {
                req.session.un=req.body.username;
                res.redirect('/home');
            }
        else
            {
               res.redirect('/login'); 
            }
    });
    
    /*db.getResult(sql,function(result){
       
        if(result.length>0)
            {
                req.session.un=req.body.username;
                res.redirect('/home');
            }
        else{
            res.redirect('/login');
        }
        
    });*/
    
   /* if(req.body.username==req.body.password)
        {
            req.session.un=req.body.username;
            res.redirect('/home');
        }
    else{
        res.redirect('/login');
    }*/
});


module.exports=router;