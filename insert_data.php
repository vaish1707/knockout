<?php

$connect = mysqli_connect("162.251.80.27","sensehql_admin","admin1234","sensehql_db");

$data = json_decode(file_get_contents("php://input"));
if(count($data)>0){
    $id = mysqli_real_escape_string($connect,$data->id);
    $chemicalname = mysqli_real_escape_string($connect,$data->chemicalname);
    $price = mysqli_real_escape_string($connect,$data->price);
    $query = "INSERT INTO tbl_chem(CHEMICAL_ID, CHEMICAL_NAME, PRICE_PER_KG) VALUES ($id,$chemicalname,$price)";
    if(mysqli_query($connect,$query)){
        echo "data inserted...";
    }
    else{
        echo "Error....";
    }
}
?>