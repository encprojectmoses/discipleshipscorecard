/**
 *	@author Tonnie Valencia
 */
var selectedMonth = 			"";
var selectedYear = 				"";
var youthServiceAttendance = 	0;
var aveTnoCount = 				0;
var campusTitle	= 				"";
var studentTitle = 				"";
var leaderTitle = 				"";

function selectMonth(month){
	if(month != 'Choose Month...')
		selectedMonth = $("#input_date_month").find("option:selected").text();
}

function selectYear(year){
	if(year != 'Choose Year...')
		selectedYear = $("#input_date_year").find("option:selected").text();
}

function setYouthServiceAttendance(value){
	if(value != null || value != "")
		youthServiceAttendance = document.getElementById("youth_service_attendance").value;
}

function setAveTnoCount(value){
	if(value != null || value != "")
		aveTnoCount = document.getElementById("ave_tno_count").value;
}

function setCampusStoryTitle(value){
	if(value != 'Choose Title...')
		campusTitle = $("#campus_outreach_story_other_title").find("option:selected").text();

	if(value == "Other"){
		document.getElementById("other_campus_outreach_input").style.display="inline";
	}else{
		document.getElementById("other_campus_outreach_input").style.display="none";
	}
}

function setLeaderStoryTitle(value){
	if(value != 'Choose Title...')
		leaderTitle = $("#leadership_development_other_title").find("option:selected").text();

	if(value == "Other"){
		document.getElementById("other_leadership_development_input").style.display="inline";
	}else{
		document.getElementById("other_leadership_development_input").style.display="none";
	}
}

function submit(){
	//Checking test
	/*alert("selectedMonth: " + selectedMonth + "\n" +
			"selectedYear: " + selectedYear + "\n" +
			"youthServiceAttendance: " + youthServiceAttendance + "\n" +
			"aveTnoCount: " + aveTnoCount + "\n" +
			"campusTitle: " + campusTitle);*/
}