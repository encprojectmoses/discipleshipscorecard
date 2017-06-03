<?php
	class Data {
		public $result = -1;
		public $userInfo;
	 }

	class UserInfo {
		public $userId = -1;
		public $userName  = "";
	}

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "dscorecard";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	$sql = "SELECT * FROM user WHERE username = '".$_POST["username"]."' AND password = '".$_POST["password"]."';";
	$result = $conn->query($sql);

	//var_dump($conn);

	$data = new Data();
	if ($result->num_rows > 0) {
	    $row = $result->fetch_assoc();

	    $data->result = 1;
	    $data->userInfo = new UserInfo();
	    $data->userInfo->userId = $row["id"];
	    $data->userInfo->userName = $row["username"];
	    echo json_encode($data);

	} else {
	    echo json_encode($data);
	}
	$conn->close();

?>