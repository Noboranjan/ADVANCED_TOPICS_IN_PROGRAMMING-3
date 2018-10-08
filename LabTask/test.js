$(document).ready(function(){
    
//var fruits=["apple","banana","coconut"];
    
    $("#Fruit").autocomplete({
        
        minLength:2,
        source:"res.php"
    });
    
});