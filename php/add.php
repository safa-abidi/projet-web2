<?php
    //connect to db
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "hotel";

    $conn = mysqli_connect($host, $user, $pass, $db) or die ("Cnx failed");
   

    //get the values from the form
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $gender = mysqli_real_escape_string($conn, $_POST['gender']);
    
    //req
    mysqli_query($conn, "INSERT INTO `clients` (`name`, `email`, `password`, `phone`, `gender`) 
                        VALUES ('$name', '$email', '$password', '$phone', '$gender');");

    //disconnect
    mysqli_close($conn);

?>