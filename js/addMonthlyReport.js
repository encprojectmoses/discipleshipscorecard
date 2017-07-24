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

function selectedMonth(month)
{
	if(month != 'Choose Month...')
		selectedMonth = $("#input_date_month").find("option:selected").text();
}

function selectedYear(year)
{
	if(year != 'Choose Year...')
		selectedYear = $("#input_date_year").find("option:selected").text();
}

function setYouthServiceAttendance(value)
{
	if(value != null || value != "")
		youthServiceAttendance = document.getElementById("youth_service_attendance").value;
}

function setAveTnoCount(value)
{
	if(value != null || value != "")
		aveTnoCount = document.getElementById("ave_tno_count").value;
}

//TODO: Form Validation - Mandatory Fields

function submitMonthlyReport()
{
	//No validation yet
	document.getElementById("createMonthlyForm").submit();
	alert(" Month : " + selectedMonth + 
			"\n Year : " + selectedYear + " " +
			"\n Form Id : " + youthServiceAttendance +
			"\n TNO Count : " + aveTnoCount +
			"\n\n Form Submitted Successfully......");
	
}