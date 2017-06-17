/**
* @author Winifredo N. Ya-on Jr.
*/
function initCommon()
{

	//set custom welcome message
	$("#welcomeUser").text(WELCOME_MESSAGE+", "+Cookies.get(COOKIE_FIRST_NAME));
}