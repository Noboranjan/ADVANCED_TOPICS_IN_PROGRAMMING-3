var express=require('express');
var router=express.Router();
var userModel=require.main.require('./models/user-model');

router.get('*',function(req,res,next){
	if(req.session.un==null)
	{
		res.redirect('/login');
	}
	else
	{
		next();
	}
});


router.get('/',function(req,res){
   //res.send("<h2>hello<h2>");
    /*var data={
       
    };*/
    userModel.getAll(function(result){
        res.render('home/home',{userList:result});
    });
    
    //res.render('home/home',{name:req.session.un});
    
});

router.get('/create',function(req,res){
    res.render('create/index');
});

router.post('/create',function(req,res){
	var user={
		username:req.body.username,
		password:req.body.password,
	};
	userModel.insert(user,function(status){
		if(status)
		{
			res.redirect('/home');
		}
		else
		{
			res.send('Error in adding...');
		}
	});

});

router.get('/edit/:id',function(req,res){

	userModel.getById(req.params.id,function(user){
		res.render('edit/index',user);
	}); 
	

});

router.post('/edit/:id',function(req,res){

	var user={
		id:req.params.id,
		username:req.body.username,
		password:req.body.password,

	};
	userModel.update(user,function(status){
		if(status)
		{
			res.redirect('/home');
		}
		else
		{
			res.send("Error in updating...");
		}


	});
});

router.get('/:id',function(req,res){
   
    userModel.delete(req.params.id,function(status){
       if(status)
		{
			res.redirect('/home');
		}
		else
		{
			res.send("Error in updating...");
		} 
        
    });
});


module.exports=router;