<?php
	include 'connectionStart.php';
	
	class Data {
		public $result = -1;
		public $userInfo;
	 }

	class UserInfo {
		public $userId = -1;
		public $userName  = "";
	}


	$password=md5($_POST["password"]);

	$sql = "SELECT * FROM user WHERE username = '".$_POST["username"]."' AND password = '".$password."';";
	$result = $conn->query($sql);

	/*var_dump($password);
	var_dump($sql);
	var_dump($result);*/

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