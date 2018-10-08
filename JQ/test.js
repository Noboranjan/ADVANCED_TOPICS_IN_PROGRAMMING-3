//$(document).ready(function(){
//                  alert("Hello world");
//                  });
//$(function(){
//    alert("Hello world");
//});
//$(document).ready(function(){
//    $("button").click(function(){
//        alert($("input").val());
//    });
//});
$(document).ready(function () {
    $("button").click(function () {

        //$("div>input").val("hello");
        if ($("#text1").val() == "" || $("#text2").val() == "") {
            alert("empty");
        } else {
            alert($("#text1").val() + " " + $("#text2").val());
            // $("p").html($("#text1").val()+" "+$("#text2").val());
            $("#par1").html($("#text1").val() + " " + $("#text2").val());
        }
    });
});
