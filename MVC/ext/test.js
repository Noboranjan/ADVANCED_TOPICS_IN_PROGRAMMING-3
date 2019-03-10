$(document).ready(function(){

$("button").click(function(){
	

	$.ajax({
		url:"/home/getData",
		method:"post",
		data:{
			name:$('#nam').val()
		},
		success:function(res){
			$("#result").html("<table border='1'><tr><th>ID</th><th>User Name</th><th>Password</th><th>Employer Name</th><th>Company Name</th><th>contact no</th></tr><tr><td>"+res.id+"</td> <td>"+res.username+"</td> <td>"+res.password+"</td> <td>"+res.ename+"</td> <td>"+res.cname+"</td> <td>"+res.conno+"</td></tr></table>");
			//document.write(res);
		}
	});
});


});