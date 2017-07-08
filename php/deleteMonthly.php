<?php
	include 'connectionStart.php';
	
	class Data {
		public $result = -1;
	 }

	
	$monthlyIdArray = $_POST["id"];
	$idsToDelete = implode($monthlyIdArray, ', ');
	$sql = "DELETE FROM monthly WHERE id in ($idsToDelete);";
	$result = $conn->query($sql);

	$data = new Data();
	if($result === TRUE) {
		$data->result = 1;
	}

	echo json_encode($data);

	$conn->close();


?>
