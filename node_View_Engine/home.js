var express=require('express');
var router= express.Router();

router.get('/',function(req,res){
   //res.send("<h2>Response from home.js</h2>");
    var data={
        name: 'Thor',
        type:'God of Thunder',
        obj:{
        villian: 'hella'
    }
    };
    res.render('test',data);//view load default views
});

module.exports=router;