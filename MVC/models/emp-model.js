var db=require('./db');

module.exports={
    
    getAll:function(callback)
    {
        var sql="SELECT * from job";
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
		var sql="INSERT INTO job VALUES(null,?,?,?,?)";

		db.execute(sql,[user.comname,user.jobt,user.joblo,user.sala],function(status){
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
		var sql="SELECT * FROM job WHERE id=?";
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
    
    update:function(job,callback)
	{
		var sql="UPDATE job SET cname=?,jobt=?,jobloc=?,salary=? WHERE id=? ";
		db.execute(sql,[job.comname,job.jobt,job.jobloc,job.sala,job.id],function(status){
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
        var sql="DELETE FROM job WHERE id=?"
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