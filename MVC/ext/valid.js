$(document).ready(function() {
$("#send").click(function(e) {
e.preventDefault();
var username = $("#name").val();
var password = $("#pass").val();
var em = $("#en").val();
var cn = $("#cn").val();
    var con = $("#con").val();
if (!(username == '' || password == '' || em == '' || cn == '' || con == '')) {
$("#submitdata").append("Name: " + name + "<br/>Email: " + email + "<br/>Message: " + msg);
} else {
alert("Please Fill All Fields.");
}
});
});
