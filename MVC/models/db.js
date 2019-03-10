var mysql = require('mysql');
var connection;

function connectDb() {
    connection = mysql.createConnection({

        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "jobportal"

    });

    connection.connect(function (err) {
        if (err) {
            console.log(err.stack);
        } else {
            console.log("Successfully connected....");
        }
    });
}

module.exports = {
    getResult: function (sql, params, callback) {
        
        connectDb();
        if (params == null) {
            
            connection.query(sql, function (error, result) {

                if (error) {
                    console.log(error.stack);
                    callback([]); //empty array
                } else {
                    callback(result);
                }

            }); //mutual exclusive

            connection.end(function () {
                console.log("connection closed....");
            });

        } else {
            
            connection.query(sql, params, function (error, result) {

                if (error) {
                    console.log(error.stack);
                    callback([]); //empty array
                } else {
                    callback(result);
                }

            }); //mutual exclusive

            connection.end(function () {
                console.log("connection closed....");
            });
        }
    },
    
    execute:function(sql,params,callback)
	{
		connectDb();
		if(params==null)
		{

			connection.query(sql,function(error,result){

				if(error)
				{
					console.log(error.stack);
					callback(false);

				}
				else
				{
					callback(true);
				}

			});

			connection.end(function(){
				console.log("Connection closed...");
			});

		}

		else
		{
			connection.query(sql,params,function(error,result){

				if(error)
				{
					console.log(error.stack);
					callback(false);

				}
				else
				{
					callback(true);
				}

			});

			connection.end(function(){
				console.log("Connection closed...");
			});
		}
	}

};
