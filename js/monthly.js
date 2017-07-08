const testData = JSON.parse("{\"result\":1,\"items\":[{\"id\":\"1\",\"monthReport\":\"January\",\"monthYear\":\"2017\",\"youthServiceAttendance\":\"194\",\"tnoEnvelope\":\"77\",\"campusOutreachStoryClassification\":\"Salvation\",\"campusOutreachStoryOtherTitle\":null,\"campusOutreachStory\":\"Rash Lamondaya\r\n\r\nHe was a muslim and a former homosexual. He was molested when he was still young which caused him to engage into homosexual acts. Since his boss attends our Sunday Service, she invited him to attend our Youth Service in Antipolo last year and gave his life to Jesus but decided to go through one2one just last January 2017. One of the highlights of his discipleship is when he said that he no longer wanted to go back. It was clear to him that homosexuality is sin and that Jesus is his Lord and Savior. He also attended our God Test Training last March and started sharing the Gospel. Just last week (April 30) he went through water baptism in Victory Weekend. He publicly declared that he is a follower of Jesus Christ. He is excited to attended our Foundations Class this week. One of his desires to share his testimony to those who are struggling with the same struggles that he had and preach the Gospel to them.\",\"studentDiscipleshipClassification\":\"Other\",\"studentDiscipleshipOtherTitle\":null,\"studentDiscipleshipStory\":\"n/a\",\"leadershipDevelopmentClassification\":\"Other\",\"leadershipDevelopmentOtherTitle\":null,\"leadershipDevelopmentStory\":\"n/a\",\"createdBy\":\"3\",\"createdDate\":\"2017-06-17 14:44:21\",\"lastModDate\":\"2017-06-17 14:44:21\"},{\"id\":\"2\",\"monthReport\":\"February\",\"monthYear\":\"2017\",\"youthServiceAttendance\":\"344\",\"tnoEnvelope\":\"172\",\"campusOutreachStoryClassification\":\"Salvation\",\"campusOutreachStoryOtherTitle\":null,\"campusOutreachStory\":\"Our ENC Antipolo team went to San Isidro National High School during their dismissal to invite them to our youth service. We have no contact and leader in that school so we just took the chance to invite the students. We gave away invites hoping that they will show up on Friday during the youth service. We were so happy to see them that same week in our youth service and most of them responded in the altar call. Now, 2 of them are going through 121. Our hope is as we start another school year, we will disciple them and raise them as leaders in their campus.\",\"studentDiscipleshipClassification\":\"Other\",\"studentDiscipleshipOtherTitle\":null,\"studentDiscipleshipStory\":\"n/a\",\"leadershipDevelopmentClassification\":\"New Victory Group Leader\",\"leadershipDevelopmentOtherTitle\":null,\"leadershipDevelopmentStory\":\"Since February is month where more students are easier to invite in the youth service, we expected that we needed more leaders to help us in discipling students that's why we gathered a handful of young professionals who have the heart to lead the students. A lot of young professional committed to help us in leading victory groups specially those who responded in the altar call in the youth services.\",\"createdBy\":\"3\",\"createdDate\":\"2017-06-17 14:46:55\",\"lastModDate\":\"2017-06-17 14:46:55\"},{\"id\":\"3\",\"monthReport\":\"March\",\"monthYear\":\"2017\",\"youthServiceAttendance\":\"232\",\"tnoEnvelope\":\"116\",\"campusOutreachStoryClassification\":\"Other\",\"campusOutreachStoryOtherTitle\":null,\"campusOutreachStory\":\"n/a\",\"studentDiscipleshipClassification\":\"Other\",\"studentDiscipleshipOtherTitle\":null,\"studentDiscipleshipStory\":\"n/a\",\"leadershipDevelopmentClassification\":\"Other\",\"leadershipDevelopmentOtherTitle\":null,\"leadershipDevelopmentStory\":\"n/a\",\"createdBy\":\"3\",\"createdDate\":\"2017-06-17 14:48:12\",\"lastModDate\":\"2017-06-17 14:48:12\"},{\"id\":\"4\",\"monthReport\":\"April\",\"monthYear\":\"2017\",\"youthServiceAttendance\":\"159\",\"tnoEnvelope\":\"80\",\"campusOutreachStoryClassification\":\"Campus Saturation\",\"campusOutreachStoryOtherTitle\":null,\"campusOutreachStory\":\"We received a positive response from DepEd- Antipolo Division about our request to partner with them in serving the students by conducting Values Formation Seminars, Retreats and other special events. They are now endorsing ENC to conduct the said events in ALL high schools of Antipolo City.\",\"studentDiscipleshipClassification\":\"Social Responsibility\",\"studentDiscipleshipOtherTitle\":null,\"studentDiscipleshipStory\":\"Brigada Eskwela \r\n\r\nENC aims to serve the campus by participating in brigada eskwela of San Jose National High School, the second largest high school in Antipolo. The campus aims to build a mini eco-park that will serve as study area or lounge for the students. The ENC decided to host and be on top of this project. Because of this, we were able to build a good relationship with the principal.\",\"leadershipDevelopmentClassification\":\"Other\",\"leadershipDevelopmentOtherTitle\":null,\"leadershipDevelopmentStory\":\"n/a\",\"createdBy\":\"3\",\"createdDate\":\"2017-06-17 14:49:28\",\"lastModDate\":\"2017-06-17 14:49:28\"}]}");

const DEBUG = true;

/**
* @author Winifredo N. Ya-on Jr.
*/
function getMonthlyReports()
{

	if(DEBUG)
	{
		initMonthNameSort();

    	var table = $('#monthlyReports').DataTable( {
    		"lengthChange": false,
    		"paging": false,
    		"info": false,
    		"columnDefs": [
		       { type: 'date-range', targets: 0 }
		    ],
	        data: testData.items,
	         "columns": [
	            { "data": "monthReport" },
	            { "data": "youthServiceAttendance" },
	            { "data": "tnoEnvelope" }
	        ]
	    } );

	}else
	{
		var values = COOKIE_USER_ID+"="+Cookies.get(COOKIE_USER_ID);
		values += "&"+COOKIE_MONTH_YEAR+"=2017";//TODO get monthYear value from cookie, monthYear will be set on change of dropdown


		$.ajax({
			 type: 'POST',
			 url: '../php/monthly.php',
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
}