var db=require('./db');


module.exports={
  
    validate:function(user,callback)
    {
        var sql="SELECT * from user WHERE username=? and password=?";//?  for array
        
        db.getResult(sql,[user.username,user.password],function(result){
            if(result.length>0)
                {
                    callback(true);
                }
            else
            {
                callback(false);
            }
        });
    },
    
    getAll:function(callback)
    {
        var sql="SELECT * from user";
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
		var sql="INSERT INTO user VALUES(null,?,?)";

		db.execute(sql,[user.username,user.password],function(status){
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
    
    getById:function(id,callback)
	{
		var sql="SELECT * FROM user WHERE id=?";
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
		var sql="SELECT * FROM user WHERE id=?";
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
		var sql="UPDATE user SET username=?,password=? WHERE id=? ";
		db.execute(sql,[user.username,user.password,user.id],function(status){
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
    
    delete:function(id,callback)
    {
        var sql="DELETE FROM user WHERE ID=?"
        db.execute(sql,[id],function(status){
           
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

    
    
};