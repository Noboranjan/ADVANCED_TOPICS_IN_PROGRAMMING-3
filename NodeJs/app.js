/*setTimeout(function(){
    console.log("Hello world!!");
},3000);

console.log("Another line ");

var app=require('./test.js');
console.log(app.Heroname);
console.log(app.type);
app.version();

var app=require('./test.js');
console.log(app.name);
console.log(app.type);
app.GetVersion();

console.log(app.release);*/

var app=require('./movie.js');
console.log(app.favMovie);

app.favMovie="Gladiator";
console.log(app.favMovie);

var you=require('./movie.js');
console.log("you: "+you.favMovie);