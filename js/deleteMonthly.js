
function onDeleteMonthly()
{
	var monthlyTable = $('#monthlyReports').DataTable();
	var values = monthlyTable.$('input[type="checkbox"]').serialize();

	console.log("onDeleteMonthly#values: "+values);

	if(values == "") //no data selected, show warning
	{
		BootstrapDialog.show({
            title: 'Delete Monthly',
            message: 'Please select monthly report/s to delete.',
            buttons: [{
                label: 'OK',
                action: function(dialog) {
                    dialog.close();
                }
            }]
        });

	}else
	{
		//display confirmation dialog
		 BootstrapDialog.show({
            title: 'Delete Monthly',
            message: 'Are you want to delete monthly report/s?',
            buttons: [{
                label: 'OK',
                cssClass: 'btn-danger',
                action: function(dialog) {

                	$.ajax({
					 type: 'POST',
					 url: "../php/deleteMonthly.php",
					 data: values,
					 cache: false,
					 success: function(data) {
					 	var data = $.parseJSON(data); //convert the string result to JSON object
					    if(data.result == 1)
					    {					    	
					    }else
					    {
					    	console.log("deleteMonthly#error handling");
					    }

					    window.location.reload();
					 },
				 });

                    dialog.close();
                }
            }, {
                label: 'Cancel',
                action: function(dialog) {
                    dialog.close();
                }
            }]
        });
	}


}
