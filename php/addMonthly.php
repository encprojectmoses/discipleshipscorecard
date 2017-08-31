<?php
include 'connectionStart.php';
class Data {
	public $result = - 1;
	public $campusOutreachStory;
	public $campusOutreachStoryClassification;
	public $campusOutreachStoryOtherTitle;
	public $createdBy;
	public $createdDate;
	public $lastModDate;
	public $leadershipDevClassification;
	public $leadershipDevOtherTitle;
	public $leadershipDevStory;
	public $monthReport;
	public $monthYear;
	public $studentDiscipleshipClassification;
	public $studentDiscipleshipOtherTitle;
	public $studentDiscipleshipStory;
	public $tnoEnvelope = - 1;
	public $youthServiceAttendance = - 1;
}
class UserInfo {
	public $userId = - 1;
	public $userName = "";
}

$id = Cookies.get(COOKIE_USER_ID);
$createdByName = Cookies.get(COOKIE_FIRST_NAME);
$selectedMonth = $_POST["input_date_month"];
$selectedYear = $_POST["input_date_year"];
$youthServiceAttendance = $_POST["youthServiceAttendance"];
$aveTnoCount = $_POST["aveTnoCount"];
$campusTitle = $_POST["campusTitle"];
$studentTitle = $_POST["studentTitle"];
$leaderTitle = $_POST["leaderTitle"];
$leadershipDevStory = $_POST["leadershipDevStory"];
$studentLeadershipStory = $_POST["studentLeadershipStory"];
$campusOutreachStory = $_POST["campusOutreachStory"];
$otherCampusTitle = $_POST["otherCampusTitle"];
$otherStudentTitle = $_POST["otherStudentTitle"];
$otherLeaderDevTitle = $_POST["otherLeaderDevTitle"];
date_default_timezone_set('Asia/Manila');
$createDate = date('m/d/Y h:i:s a', time());

$sql = "INSERT INTO monthly ('id',
							'youth_service_attendance',
							'tno_envelope',
							'campus_outreach_story_classification',
							'campus_outreach_story_other_title',
							'campus_outreach_story',
							'student_discipleship_classification',
							'student_discipleship_other_title',
							'student_discipleship_story',
							'leadership_development_classification',
							'leadership_development_other_title',
							'leadership_development_story',
							'created_by',
							'created_date',
							'last_mod_date',
							'month_report',
							'month_year') 
		VALUES ('".$_POST["id"]."',
				'".$tnoEnvelope."',
				'".$campusOutreachStoryClassification."',
				'".$campusOutreachStoryOtherTitle."',
				'".$campusOutreachStory."',
				'".$studentDiscipleshipClassification."',
				'".$studentDiscipleshipOtherTitle."',
				'".$studentDiscipleshipStory."',
				'".$leadershipDevClassification."',
				'".$leadershipDevOtherTitle."',
				'".$leadershipDevStory."',
				'".$createdByName."',
				'".$createdDate."',
				'".$lastModDate."',
				'".$monthReport."',
				'".$monthYear."');";
?>