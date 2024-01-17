<?php

$gender = $_POST['gender'];
$name = $_POST['name'];
$number_selector = $_POST['number_selector'];
$township_code_selector = $_POST['township_code_selector'];
$nrc_citizen_letter = $_POST['nrc_citizen_letter'];
$nrc_number = $_POST['nrc_number'];
$email = $_POST['email'];
$pa_number = $_POST['pa_number'];
$transaction_id = $_POST['transaction_id'];


if (!preg_match('/^\d{6}$/', $nrc_number)) {
    // Redirect to error page if $nrc_number is not exactly six digits
    header("Location: ../checkNRC.php");
    exit();
}

// Check if any of the required fields is blank
if (empty($gender) || empty($name) || empty($number_selector) || empty($township_code_selector) || empty($nrc_citizen_letter) || empty($nrc_number) || empty($email) || empty($pa_number) || empty($transaction_id)) {
    header("Location: ../error.php");

} else {
    // All required fields are filled, proceed with the database insertion
    $sql = "INSERT INTO register (gender, name, number_selector, township_code_selector, nrc_citizen_letter, nrc_number, email, pa_number, transaction_id) VALUES ('$gender', '$name', '$number_selector', '$township_code_selector', '$nrc_citizen_letter', '$nrc_number', '$email', '$pa_number', '$transaction_id')";

    // Execute the query
    $db = new PDO('mysql:host=localhost;dbname=registration', 'root', '');
    $db->query($sql);

    header("Location: ../registerSuccessfully.php");
}



