// Click the "Say Hello" Button
$(".formButton").click(function(){

	sendContact();

});

function sendContact() {
	var valid;	
	valid = validateContact();
	if(valid) {
		jQuery.ajax({
		url: "contact_mail.php",
		data:'userName='+$("#userName").val()+'&userEmail='+$("#userEmail").val()+'&subject='+$("#subject").val()+'&message='+$(message).val(),
		type: "POST",
		success:function(data){
		$(".mail-status").html(data);
		},
		error:function (){}
		});
	}
}

function validateContact() {
	var valid = true;	
	$(".alert, .mail-status").html('');
	
	if(!$("#userName").val()) {
		$("#userName-info").html(" (required)");
		valid = false;
	}
	if(!$("#userEmail").val()) {
		$("#userEmail-info").html(" (required)");
		valid = false;
	}
	if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
		$("#userEmail-info").html(" (invalid)");
		valid = false;
	}
	if(!$("#subject").val()) {
		$("#subject-info").html(" (required)");
		valid = false;
	}
	if(!$("#message").val()) {
		$("#message-info").html(" (required)");
		valid = false;
	}
	
	return valid;
}