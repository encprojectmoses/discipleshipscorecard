/**
 *	@author Tonnie Valencia
 */
var selectedMonth = 			"";
var selectedYear = 				"";
var youthServiceAttendance = 	0;
var aveTnoCount = 				0;
var campusTitle	= 				"";

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

function otherValueIsSelected(value)
{
	if(value == "Other"){
		$('#other_campus_outreach_span').show();
	}else{
		$('#other_campus_outreach_span').hide();
		
	}
		
}

/*function convertFormContentToJson(user)
{
	var campus_story = $('#campus_outreach_textarea').val();
	var student_story = $('#student_leadership_textarea').val();
	var leader_story = $('#leadership_development_textarea').val();
	
	var jsonData = {
		youth_service_attendance: youthServiceAttendance,
		tno_envelope: aveTnoCount,
		campus_outreach_story_classification: , 
		campus_outreach_story_other_title: , 
		campus_outreach_story: campus_story, 
		student_discipleship_classification:, 
		student_discipleship_other_title:, 
		student_discipleship_story: student_story, 
		leadership_development_classification:, 
		leadership_development_other_title:, 
		leadership_development_story: leader_story, 
		created_by: user, 
		created_date:, 
		last_mod_date:,
		month_report: selectedMonth + " " selectedYear,
	};
	
	return jsonData;
}*/

function submitButton(){
	
	/*$.ajax({
		type: "POST",
		url: "../php/addMonthly.php",
		data: ,//how to get form here
		cache: false,
		success: function(){
			
		},
			
	});*/
}
//TODO: Form Validation - Mandatory Fields