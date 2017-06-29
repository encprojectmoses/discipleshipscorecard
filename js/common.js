/**
* @author Winifredo N. Ya-on Jr.
*/
function initCommon()
{

	//set custom welcome message
	$("#welcomeUser").text(WELCOME_MESSAGE+", "+Cookies.get(COOKIE_FIRST_NAME));
}

function initMonthNameSort()
{
	jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	    "date-range-pre": function ( a ) {
	        var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	        return monthArr.indexOf(a); 
	    },
	     "date-range-asc": function ( a, b ) {
	        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	    },
	     "date-range-desc": function ( a, b ) {
	        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	    }
	} );
}

