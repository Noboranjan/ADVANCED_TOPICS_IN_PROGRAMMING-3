/*var fs=require('fs');//file System


//fs.writeFileSync("hello.txt","Hellow World from hello.txt file");
var text=fs.readFileSync("hello.txt");
//console.log("Write Successfull!!");
console.log(text.toString());


var path=require('path');

var file="C:\\//xampp\\htdocs\\ATP3\\Server\\app.js";

console.log(path.dirname(file));
console.log(path.extname(file));
console.log(path.normalize(file));//for path normalization ex:// or \\ */

var http=require('http');//http not support dynamic page
var fs=require('fs');

var server=http.createServer(requestHandler);

server.listen(1234);
console.log("Sever Started.....");

function requestHandler(req,res)
{
   /*console.log(req.url);
   console.log(req.method);
    res.writeHead(200,{'content-type': 'text/plain'});*/
    
    if(req.url=="/")
        {
          // res.write("<h1> Responded to your Requesting.... </h1>");//use multiple write
            fs.createReadStream('test.html').pipe(res);//pipe pass one place to another
        }
    else
        {
            res.write("<h1> Yor are not allowed.... </h1>");//use / then.
            res.end();
        }
    
    //res.end();
}