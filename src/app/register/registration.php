<?php
    $userName = $_POST['userName'];
    $fullName = $_POST['fullName'];
    $userEmail = $_POST['userEmail'];
    $userPhone = $_POST['userPhone'];
    $userPassword = $_POST['userPassword'];
    $confirmPassword = $_POST['confirmPassword'];

    $conn = new mysqli('localhost', 'root', '', 'dbwanderpets');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into registration(userName, fullName, userEmail, userPhone, userPassword, confirmPassword) values(?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $userName, $fullName, $userEmail, $userPhone, $userPassword, $confirmPassword);
        $stmt->execute();
        echo "Registration Successful...";
        $stmt->close();
        $conn->close();
    }
?>