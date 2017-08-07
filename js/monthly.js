const DEBUG = false;
var monthDatatable = null;
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

		    	monthDatatable = $('#monthlyReports').DataTable( {
		    		"language": {
				      "emptyTable": "No records to display."
				    },
		    		"lengthChange": false,
		    		"paging": false,
		    		"info": false,
		    		"columnDefs": [
		    			{
						   'targets': 0,
						   'searchable':false,
						   'orderable':false,
						   'className': 'dt-center',
						   'render': function (data, type, full, meta){
						       return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
						    }
					   },
				       { type: 'date-range', targets: 1 }
				    ],
			        data: data.items,
			         "columns": [
			         	{ "data": "id" },
			            { "data": "monthReport" },
			            { "data": "youthServiceAttendance" },
			            { "data": "tnoEnvelope" }
			        ],

			        select: {
			            style:    'os',
			            selector: 'td:first-child'
			        },

        			order: [[ 1, 'asc' ]]
			    } );

			    // Handle click on "Select all" control
				$('#select-all').on('click', function(){
				   // Get all rows with search applied
				   var rows = monthDatatable.rows({ 'search': 'applied' }).nodes();
				   // Check/uncheck checkboxes for all rows in the table
				   $('input[type="checkbox"]', rows).prop('checked', this.checked);
				});

			    // Handle click on checkbox to set state of "Select all" control
				$('#monthlyReports tbody').on('change', 'input[type="checkbox"]', function(){
				   // If checkbox is not checked
				   if(!this.checked){
				      var el = $('#select-all').get(0);
				      // If "Select all" control is checked and has 'indeterminate' property
				      if(el && el.checked && ('indeterminate' in el)){
				         // Set visual state of "Select all" control
				         // as 'indeterminate'
				         el.indeterminate = true;
				      }
				   }
				});
		    }else
		    {
		    	console.log("monthly#error handling");
		    }
		 },
	 });
}

function openAddReport() 
{
	window.location.href = "/discipleshipscorecard/html/addEditMonthly.html";
}