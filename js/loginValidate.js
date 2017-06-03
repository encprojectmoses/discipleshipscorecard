/**
* @author Winifredo N. Ya-on Jr.
*/
function validate(e)
	{
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;

		if (!e || (e && e.keyCode == 13))
		{
			
			if (username == "username" && password == "password")
			{
				alert("Login successful."); //tapos magreredirect sa homepage.html
				window.location = "homepage.html";

				return false;
			}
			else if (username == "" && password == "")
			{
				document.getElementById('alertValidation').innerHTML = "Please enter your" + "<br>" +"username and password.";

				return false;
			}

			else
			{
				document.getElementById('alertValidation').innerHTML = "<font color='red'>" + "Login failed! Please try again.";
			}
		}
	}