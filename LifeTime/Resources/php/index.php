<!DOCTYPE html>
<html>
  <head>
  <link rel="icon" href="http://cdn.onlinewebfonts.com/svg/img_380402.png">
</head>
<body>
    <h1>Your Data Has Succesfully Been Saved</h1>
    <a href="https://foodintorg.com/Nazar/LifeTime/index.html">Return To LifeTime</a>
    
 <?php
       $name = $_GET['data1'];
       $email = $_GET['data2'];
       $maindata = $_GET['lifetime'];
       $birthdate = $_GET['date'];
       $birthhour = $_GET['birthhour'];
       $currenttime = $_GET['cdate'];
       
       print "Hello Friend {$name}: <br>";
       
$servername = "p3plzcpnl447280";
$username = "AdminNaz";
$password = "ALOisgood";
$dbname = "Main";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
};
$sql = "SELECT email FROM NazarLifeTime WHERE username='$name'";
$ver = mysqli_query($conn, $sql);
if (mysqli_num_rows($ver) === 0) {
$sql = "INSERT INTO NazarLifeTime(username, email, currenttime, birthdate, birthhour, usertime) 
       VALUES ('$name', '$email', '$currenttime', '$birthdate', '$birthhour', '$maindata')";
        
    if ($conn->query($sql) === TRUE) {
    } else {
      echo $conn->error;
    };
  }
  else {
    $sql = "UPDATE NazarLifeTime SET usertime='$maindata' WHERE username='$name'";
if ($conn->query($sql) === TRUE) {
} else {
  echo "Error updating record: " . $conn->error;
}
$sql = "UPDATE NazarLifeTime SET email='$email' WHERE username='$name'";
if ($conn->query($sql) === TRUE) {
} else {
  echo "Error updating record: " . $conn->error;
}
$sql = "UPDATE NazarLifeTime SET currenttime='$currenttime' WHERE username='$name'";
if ($conn->query($sql) === TRUE) {
} else {
  echo "Error updating record: " . $conn->error;
}
$sql = "UPDATE NazarLifeTime SET birthdate='$birthdate' WHERE username='$name'";
if ($conn->query($sql) === TRUE) {
} else {
  echo "Error updating record: " . $conn->error;
}
$sql = "UPDATE NazarLifeTime SET birthhour='$birthhour' WHERE username='$name'";
if ($conn->query($sql) === TRUE) {
} else {
  echo "Error updating record: " . $conn->error;
}}



echo 'Everything works!'
?>
</body>
</html>