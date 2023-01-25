<!DOCTYPE html>
<html>
  <head>
  <link rel="icon" href="https://cdn.onlinewebfonts.com/svg/img_380402.png">
</head>
<body>
    <h1>Your Data Has Succesfully Been Saved</h1>
    <a href="https://foodintorg.com/Nazar/LifeTime/index.html">Return To LifeTime</a>
    
 <?php
 // receive date from main page
       $name = $_GET['inputedUsername'];
       $email = $_GET['inputedEmail'];
       $lifetimeInMi = $_GET['lifetimeInMi'];
       $birthDate = $_GET['birthDate'];
       $birthHour = $_GET['birthHour'];
       $registeredDate = $_GET['registeredDate'];
       $varResultArray = array($name, $email, $lifetimeInMi, $birthDate, $birthHour, $registeredDate);
       $nameResultArray = array('username', 'email', 'lifetimeInMi', 'birthDate', 'birthHour', 'registeredDate');
       $count = count($varResultArray);
       print "Hello Friend {$name}: <br>"; //greeting
  
       
// Create connection



$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
};





// make an new row and send data to it or update an already existing row

$sql = "SELECT email FROM NazarLifeTime WHERE username='$name'";
$ver = mysqli_query($conn, $sql);
if (mysqli_num_rows($ver) === 0) {
$sql = "INSERT INTO NazarLifeTime(username, email, registeredDate, birthDate, birthHour, lifetimeInMi) 
       VALUES ('$name', '$email', '$registeredDate', '$birthDate', '$birthHour', '$lifetimeInMi')";
        
    if ($conn->query($sql) === TRUE) {
    } else {
      echo $conn->error;
    };
  }
  else {
    for ($i=1; $i < $count; $i++) { 
      $varHolder = $varResultArray[$i];
      $nameHolder = $nameResultArray[$i];
      $sql = "UPDATE NazarLifeTime SET $nameHolder ='$varHolder' WHERE username='$name'";
if ($conn->query($sql) === TRUE) {
} else {
  echo "Error updating record: " . $conn->error;
}
    }}




echo 'Everything works!' 
?>
</body>
</html>