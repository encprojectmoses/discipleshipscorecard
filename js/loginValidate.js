/**
* @author Winifredo N. Ya-on Jr.
*/
function validate(e)
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (!e || (e && e.keyCode == 13))
	{
		if (username == "" || password == "")
		{
			document.getElementById('alertValidation').innerHTML = "Please enter your" + "<br>" +"username and password.";
			$("#username").focus();
			document.getElementById("username").value = "";
			document.getElementById("password").value = "";

			return false;
		}else
		{
			var values = $("#form_id").serialize();
			$.ajax({
				 type: 'POST',
				 url: '../php/login.php',
				 data: values,
				 cache: false,
				 success: function(data) {
				    console.log("login#data"+data);
				 	var data = $.parseJSON(data); //convert the string result to JSON object
				    if(data.result == 1)
				    {
				    	Cookies.set(COOKIE_USER_ID, data.userInfo.userId);
				    	Cookies.set(COOKIE_FIRST_NAME, data.userInfo.firstName);
				    	window.location = "homepage.html";
				    }else
				    {
				    	document.getElementById('alertValidation').innerHTML = "<font color='red'>" + "Login failed! Please try again.";
				    	$("#username").focus();
				    	document.getElementById("username").value = "";
						document.getElementById("password").value = "";
				    }
				 },
			 });

			return false;
		}

	}
}