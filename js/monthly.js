const DEBUG = true;

/**
* @author Winifredo N. Ya-on Jr.
*/
function getMonthlyReports()
{

	var values = COOKIE_USER_ID+"="+Cookies.get(COOKIE_USER_ID);
	values += "&"+COOKIE_MONTH_YEAR+"=2017";//TODO get monthYear value from cookie, monthYear will be set on change of dropdown


	$.ajax({
		 type: 'POST',
		 url: (DEBUG)?"../php/testMonthly.php":"../php/monthly.php",
		 data: values,
		 cache: false,
		 success: function(data) {
		 	var data = $.parseJSON(data); //convert the string result to JSON object
		    if(data.result == 1)
		    {
		    	console.log("monthly#success");

		    	initMonthNameSort();

		    	var table = $('#monthlyReports').DataTable( {
		    		"lengthChange": false,
		    		"paging": false,
		    		"info": false,
		    		"columnDefs": [
				       { type: 'date-range', targets: 0 }
				    ],
			        data: data.items,
			         "columns": [
			            { "data": "monthReport" },
			            { "data": "youthServiceAttendance" },
			            { "data": "tnoEnvelope" }
			        ]
			    } );

			    $('#monthlyReports tbody').on('click', 'tr', function () {
			        var data = table.row( this ).data();
			        console.log("click#data: "+JSON.stringify(data));
			    } );
		    }else
		    {
		    	console.log("monthly#error handling");
		    }
		 },
	 });
}