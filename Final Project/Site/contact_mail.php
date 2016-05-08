<?php
$toEmail = "chris@synapse23.com";
$mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
if(mail($toEmail, $_POST["subject"], $_POST["message"], $mailHeaders)) {
print "<span class='success'>Message successfully sent. Thank you!</span>";
} else {
print "<span class='alert'>Message not sent. Please try again.</span>";
}
?>