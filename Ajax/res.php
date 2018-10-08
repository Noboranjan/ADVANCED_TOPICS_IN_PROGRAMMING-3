<?php

//echo"Cool: ".$_GET["sel"];
if($_POST["sel"]=="Bangladesh")
{
     //$arr={Dhaka,Mymensingh};
echo"Ajax request: Dhaka, Mmensign";
}
else if($_POST["sel"]=="India")
{
    echo"Ajax request: Kolkata, Mumbai";
}
?>