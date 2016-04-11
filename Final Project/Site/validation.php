<?php // Initialize variables to null.
$name =""; // Sender Name
$email =""; // Sender's email ID
$subject =""; // Subject of mail
$message =""; // Sender's Message
$nameError ="";
$emailError ="";
$subjectError ="";
$messageError ="";
$successMessage =""; 

if(isset($_POST['submit'])) { 
	// Check for null values in the Name
	if (empty($_POST["name"])) {
		$nameError = "Your name is required.";
	} else {
		$name = test_input($_POST["name"]); // check name only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
			$nameError = "Only letters and white space allowed.";
	}
} 

// Check for null values in the Email Address
if (empty($_POST["email"])) {
	$emailError = "Email address is required.";
} else {
	$email = test_input($_POST["email"]);
} 

// Check for null values in the subject
if (empty($_POST["subject"])) {
	$subjectError = "Subject is required.";
} else {
	$subject = test_input($_POST["subject"]);
} 

// Check for null values in the Message
if (empty($_POST["message"])) {
	$messageError = "Message is required.";
} else {
	$message = test_input($_POST["message"]);
} 

// Check for null values in the message
// if( !($name=='') && !($email=='') && !($subject=='') &&!($message=='') ) { 

if( !($name=='') && (preg_match("/^[a-zA-Z ]*$/",$name)) && !($email=='') && !($subject=='') &&!($message=='') ) { 

	// Check email validity
	if (preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
		$header= $name."<". $email .">";
		$headers = "thank you from gogobones.com"; 

		// Prepare the email messages
		$msg = "Hi $name,

Thank you for contacting us with your comments or questions about Gogobones. If you need assistance, we will get back with you shortly.

Name: $name
E-mail: $email
Subject: $subject
Message: $message

Please note that this is merely a confirmation message, and that your email address has not been stored.

Sincerely,
Team Gogobones";
		$msg1 = "$name contacted you via Gogobones' site Contact Form:
		
Name: $name
E-mail: $email
Subject: $subject
Message: $message "; 
	
		// Send the message using mail() function
		if(mail($email, $headers, $msg ) && mail("chris@synapse23.com", $header, $msg1 )) {
				$successMessage = "Message successfully sent.";
		}
	} else { 
		$emailError = "Invalid email address";
 		}
 	}	
} 

// Filter input values
function test_input($data) {
	$data = trim($data);
	$data =stripslashes($data);
	$data =htmlspecialchars($data);
	return $data;
}
?>