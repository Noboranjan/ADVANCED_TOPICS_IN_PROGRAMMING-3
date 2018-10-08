/*var name="Thor";
var type="God of Thunder";
function GetVersion()
{
    console.log("Ragnarok");
    //return 10;
}

module.exports.Heroname=name;
module.exports.type=type;
module.exports.version=GetVersion;*/

module.exports={
    name:"Thor",
    type:"God of Thunder",
    GetVersion:function()
    {
        console.log("Ragnarok");
    }
}

var release="2017";

module.exports.release=release;