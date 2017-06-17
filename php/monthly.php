<?php
	include 'connectionStart.php';
	
	class Data {
		public $result = -1;
		public $items;
	 }

	class MonthlyReport {
		public $id = -1;
		public $monthReport = -1;
		public $monthYear = -1;
		public $youthServiceAttendance  = 0;
		public $tnoEnvelope  = 0;
		public $campusOutreachStoryClassification  = "";
		public $campusOutreachStoryOtherTitle  = "";
		public $campusOutreachStory  = "";
		public $studentDiscipleshipClassification = "";
		public $studentDiscipleshipOtherTitle = "";
		public $studentDiscipleshipStory = "";
		public $leadershipDevelopmentClassification = "";
		public $leadershipDevelopmentOtherTitle = "";
		public $leadershipDevelopmentStory = "";
		public $createdBy = -1;
		public $createdDate = "";
		public $lastModDate = "";

	}

	
	$userId = 3;//TODO pass as parameter id of createdBy
	$monthYear = 2017;//TODO pass as parameter id of createdBy

	$sql = "SELECT * FROM monthly WHERE created_by = ".$userId." AND month_year = ".$monthYear." ORDER BY month_report ASC;";
	$result = $conn->query($sql);

	/*var_dump($sql);
	var_dump($result);*/
	/*var_dump($password);
	var_dump($sql);
	var_dump($result);*/

	$data = new Data();
	if ($result->num_rows > 0) {
		$data->result = 1;
	    $data->items = array();

	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	    	$monthlyReport = new MonthlyReport();
	    	$monthlyReport->id = $row["id"];
			$monthlyReport->monthReport = $row["month_report"];
			$monthlyReport->monthYear = $row["month_year"];
			$monthlyReport->youthServiceAttendance = $row["youth_service_attendance"];
			$monthlyReport->tnoEnvelope = $row["tno_envelope"];
			$monthlyReport->campusOutreachStoryClassification = $row["campus_outreach_story_classification"];
			$monthlyReport->campusOutreachStoryOtherTitle = $row["campus_outreach_story_other_title"];
			$monthlyReport->campusOutreachStory = $row["campus_outreach_story"];
			$monthlyReport->studentDiscipleshipClassification = $row["student_discipleship_classification"];
			$monthlyReport->studentDiscipleshipOtherTitle = $row["student_discipleship_other_title"];
			$monthlyReport->studentDiscipleshipStory = $row["student_discipleship_story"];
			$monthlyReport->leadershipDevelopmentClassification = $row["leadership_development_classification"];
			$monthlyReport->leadershipDevelopmentOtherTitle = $row["leadership_development_other_title"];
			$monthlyReport->leadershipDevelopmentStory = $row["leadership_development_story"];
			$monthlyReport->createdBy = $row["created_by"];
			$monthlyReport->createdDate = $row["created_date"];
			$monthlyReport->lastModDate = $row["last_mod_date"];

	    	array_push($data->items, $monthlyReport);

	    }
	    echo json_encode($data);

	} else {
	    echo json_encode($data);
	}
	$conn->close();

?>