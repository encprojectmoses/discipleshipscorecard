/**
* @author Winifredo N. Ya-on Jr.
*/
function logout()
{
	Cookies.remove(COOKIE_USER_ID);
	window.location = "login.html";
}