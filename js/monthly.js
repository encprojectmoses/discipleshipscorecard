/**
* @author Winifredo N. Ya-on Jr.
*/
function getMonthlyReports()
{

	var values = COOKIE_USER_ID+"="+Cookies.get(COOKIE_USER_ID);
	values += "&"+COOKIE_MONTH_YEAR+"=2017";//TODO get monthYear value from cookie, monthYear will be set on change of dropdown


	$.ajax({
		 type: 'POST',
		 url: '../php/monthly.php',
		 data: values,
		 cache: false,
		 success: function(data) {
		    console.log("monthly#data"+data);
		 	var data = $.parseJSON(data); //convert the string result to JSON object
		    if(data.result == 1)
		    {
		    	console.log("monthly#success");
		    	//TODO dynamic creation of table
		    }else
		    {
		    	console.log("monthly#error handling");
		    }
		 },
	 });
}