/**
 *	@author Tonnie Valencia 
 */
var selectedMonth = 			"";
var selectedYear = 				"";
var youthServiceAttendance = 	0;
var aveTnoCount = 				0;

function openAddReport()
{
	window.location.href = "http://localhost/discipleshipscorecard/html/addEditMonthly.html";
}

function getSelectedMonth(month)
{
	if(month != 'Choose Month...')
		selectedMonth = $("#input_date_month").find("option:selected").text();
}

function getSelectedYear(year)
{
	if(year != 'Choose Year...')
		selectedYear = $("#input_date_year").find("option:selected").text();
}

function getYouthServiceAttendance(value)
{
	if(value != null || value != "")
		youthServiceAttendance = document.getElementById("youth_service_attendance").value;
}

function getAveTnoCount(value)
{
	if(value != null || value != "")
		aveTnoCount = document.getElementById("ave_tno_count").value;
}

//WED
//TODO: Click  Campus Outreach Story
//TODO: Choose Clasification
//TODO: Get Story
//THU
//TODO: Activate Student Discipleship
//TODO: Choose Clasification
//TODO: Get Story
//FRI
//TODO: Activate Leadership Development
//TODO: Choose Clasification
//TODO: Get Story
//TODO: Validate Fields