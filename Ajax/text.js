$(document).ready(function(){
   $("#sel").change(function(){
      $.ajax({
          url:"res.php",
          method:"post",
          data:{sel:$("#sel").val()},
          success:function(res){
            $("#par") .html(res); 
          }
      }); 
   }); 
});