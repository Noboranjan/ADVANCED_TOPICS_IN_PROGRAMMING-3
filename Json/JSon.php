<?php
$arr=[
    ['id'=>1,'name'=>"Niloy",'age'=>25],
    ['id'=>2,'name'=>"Joy",'age'=>28],
    ['id'=>3,'name'=>"Rotno",'age'=>35],
    
];
header("content-type:application/json");
echo json_encode($arr);
?>