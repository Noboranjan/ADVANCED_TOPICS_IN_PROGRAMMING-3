var db=require('./db');


module.exports={
  
    validate:function(user,callback)
    {
        var sql="SELECT * from login WHERE username=? and password=?";//?  for array
        
        db.getResult(sql,[user.username,user.password],function(result){
            if(result.length>0)
                {
                   // res.session.ut=result[1].userType; 
                  /*  var obj={
                        login:true,
                        type:result[1].userType
                    };*/
                    callback(true,result[0].userType);
                }
            else
            {
                callback(false);
            }
        });
    },
    
    getAll:function(callback)
    {
        var sql="SELECT * from employer";
        db.getResult(sql,[],function(result){
            
            if(result.length>0)
                {
                    callback(result);
                }
            else
                {
                    callback([]);
                }
        });
    },
    
    insert:function(user,callback)
	{
		var sql="INSERT INTO employer VALUES(null,?,?,?,?,?)";
        var sql2="INSERT INTO login VALUES(null,?,?,?)";

		db.execute(sql,[user.user,user.password,user.emname,user.comname,user.conno],function(status){
			if(status)
			{
				//callback(true);
                db.execute(sql2,[user.user,user.password,"employer"],function(status){
			   if(status)
			   {
				callback(true);
			   }
			   else
			   {
				callback(false);
			   }

		       });

			}
			else
			{
				callback(false);
			}

		});
        
	},
    
    getById:function(id,callback)
	{
		var sql="SELECT * FROM employer WHERE id=?";
		db.getResult(sql,[id],function(result){
			if(result.length>0)
			{
				callback(result[0]);
			}
			else
			{
				callback([]);
			}

		});

	},
    
    getById:function(id,callback)
	{
		var sql="SELECT * FROM employer WHERE id=?";
		db.getResult(sql,[id],function(result){
			if(result.length>0)
			{
				callback(result[0]);
			}
			else
			{
				callback([]);
			}

		});

	},
    
    update:function(user,callback)
	{
		var sql="UPDATE employer SET username=?,password=?,ename=?,cname=?,conno=? WHERE id=? ";
		db.execute(sql,[user.username,user.password,user.emname,user.comname,user.conno,user.id],function(status){
			if(status)
			{
				callback(true);
			}
			else
			{
				callback(false);
			}

		});

	},
    
    delete:function(username,callback)
    {
        var sql="DELETE FROM employer WHERE username=?"
        db.execute(sql,[username],function(status){
           
           if(status)
			{
				//callback(true);
                var sql="DELETE FROM login WHERE username=?"
                db.execute(sql,[username],function(status){
           
               if(status)
			   {
				callback(true);
			   }
			   else
			  {
				callback(false);
			  }
 
            
           });
			}
			else
			{
				callback(false);
			}
 
            
        });
    },
    
    searchByName:function(name,callback)
	{
		//var sql="SELECT * from user WHERE username=?";	
		var sql="SELECT * from employer WHERE username like ? or ename like ? or cname like ?";	
		db.getResult(sql,[name,name,name],function(result){

				if(result.length>0)
				{
					
					callback(result);
				}
				else
				{
					
					callback([]);
				}

		});
	}

    
    
};